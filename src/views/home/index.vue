<template>
    <div class="home_container">
        <div class="title">
            <p class="artboard">{{ title }}</p>
            <SvgIcon
                name="pokemon"
                height="35px"
                width="35px"
                @click="drawerVisible = true"
                class="logo-icon"
            ></SvgIcon>
        </div>
        <div class="bg_title">
            <img src="@/assets\images\home_images\image.png" alt="" />
        </div>
        <!-- <Images />
    <Brand /> -->
        <div class="bg">
            <Main class="flex-item"></Main>
        </div>

        <!-- 抽屉 -->
        <el-drawer v-model="drawerVisible" direction="ltr" size="70%">
            <template #title>
                <h3>功能菜单</h3>
            </template>
            <div class="drawer-nav">
                <div class="nav-item" @click="navigateTo('/prop')">
                    <span>道具列表</span>
                </div>
                <div class="nav-item" @click="showImageModal('resistance')">
                    <span>抗性图</span>
                </div>
                <div class="nav-item" @click="showImageModal('moveList')">
                    <span>技能获取列表</span>
                </div>
                <div class="nav-item" @click="showImageModal('shop')">
                    <span>商店售卖图</span>
                </div>
                <div class="nav-item" @click="showImageModal('propObtain')">
                    <span>常用道具获取方式</span>
                </div>
                <div class="nav-item" @click="showImageModal('qrcode')">
                    <span>二维码</span>
                </div>
            </div>
        </el-drawer>

        <!-- 全屏图片查看器（触摸拖拽/捏合缩放/双击放大） -->
        <div v-if="imageModalVisible" class="full-image-overlay" @click.self="closeImage">
            <div class="full-image-toolbar">
                <div class="title">{{ imageModalTitle }}</div>
                <div>
                    <button class="close-btn" @click="resetZoom">重置</button>
                    <button class="close-btn" @click="closeImage">关闭</button>
                </div>
            </div>

            <div
                ref="imgWrapper"
                class="img-wrapper"
                @touchstart.passive="onTouchStart"
                @touchmove.passive="onTouchMove"
                @touchend.passive="onTouchEnd"
                @mousedown="onMouseDown"
                @wheel.prevent="onWheel"
            >
                <img
                    ref="zoomImage"
                    :src="imageModalSrc"
                    :alt="imageModalTitle"
                    class="zoom-image"
                    :style="imageStyle"
                    @dblclick="onDoubleClick"
                    draggable="false"
                />
            </div>
            <div class="full-image-footer">
                <div class="hint">双击放大/缩小，捏合缩放并拖拽移动</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Main from '@/views/home/Main/index.vue';

let title = import.meta.env.VITE_Pokemon_Title;
const drawerVisible = ref(false);
const imageModalVisible = ref(false);
const imageModalTitle = ref('');
const imageModalSrc = ref('');
const router = useRouter();

// refs for DOM
const imgWrapper = ref<HTMLElement | null>(null);
const zoomImage = ref<HTMLImageElement | null>(null);

// transform state
const scale = ref(1);
const lastScale = ref(1);
const minScale = 1;
const maxScale = 4;
const translateX = ref(0);
const translateY = ref(0);
const lastX = ref(0);
const lastY = ref(0);
let isPanning = false;
let mouseDown = false;
let startX = 0;
let startY = 0;

// touch state
let lastTouchDist = 0;
let lastTouchCenter: { x: number; y: number } | null = null;

const imageStyle = computed(() => {
    return {
        transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
        'touch-action': 'none'
    } as Record<string, string>;
});

// 图片映射配置
const imageConfig: Record<string, { title: string; path: string }> = {
    resistance: {
        title: '抗性图',
        path: new URL('@/assets/images/guides/resistance.png', import.meta.url).href
    },
    moveList: {
        title: '技能获取列表',
        path: new URL('@/assets/images/guides/moveList.jpg', import.meta.url).href
    },
    shop: {
        title: '商店售卖图',
        path: new URL('@/assets/images/guides/shop.png', import.meta.url).href
    },
    propObtain: {
        title: '常用道具获取方式',
        path: new URL('@/assets/images/guides/propObtain.png', import.meta.url).href
    },
    qrcode: {
        title: '支持游戏作者',
        path: new URL('@/assets/images/guides/qrcode.png', import.meta.url).href
    }
};

const navigateTo = (path: string) => {
    drawerVisible.value = false;
    router.push(path);
};

const showImageModal = (key: string) => {
    const config = imageConfig[key];
    if (config) {
        imageModalTitle.value = config.title;
        imageModalSrc.value = config.path;
        imageModalVisible.value = true;
        // reset transforms
        scale.value = 1;
        lastScale.value = 1;
        translateX.value = 0;
        translateY.value = 0;
        lastX.value = 0;
        lastY.value = 0;
        drawerVisible.value = false;
    }
};

const closeImage = () => {
    imageModalVisible.value = false;
};

const resetZoom = () => {
    scale.value = 1;
    lastScale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    lastX.value = 0;
    lastY.value = 0;
};

// prevent body scroll when viewer open
watch(imageModalVisible, val => {
    document.body.style.overflow = val ? 'hidden' : '';
});

function getDistance(touches: TouchList) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getCenter(touches: TouchList) {
    return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
    };
}

function onTouchStart(e: TouchEvent) {
    if (!e.touches) return;
    if (e.touches.length === 2) {
        lastTouchDist = getDistance(e.touches);
        lastTouchCenter = getCenter(e.touches);
        lastScale.value = scale.value;
    } else if (e.touches.length === 1) {
        isPanning = true;
        startX = e.touches[0].clientX - lastX.value;
        startY = e.touches[0].clientY - lastY.value;
    }
}

function onTouchMove(e: TouchEvent) {
    if (!e.touches) return;
    if (e.touches.length === 2) {
        const dist = getDistance(e.touches);
        const center = getCenter(e.touches);
        let newScale = (dist / lastTouchDist) * lastScale.value;
        newScale = Math.max(minScale, Math.min(maxScale, newScale));

        // adjust translate so zoom focuses on pinch center
        if (zoomImage.value && imgWrapper.value) {
            const rect = imgWrapper.value.getBoundingClientRect();
            const cx = center.x - rect.left;
            const cy = center.y - rect.top;

            const prevScale = scale.value;
            const ds = newScale / prevScale;
            translateX.value = (translateX.value - cx) * ds + cx;
            translateY.value = (translateY.value - cy) * ds + cy;
        }

        scale.value = newScale;
    } else if (e.touches.length === 1 && isPanning) {
        const tx = e.touches[0].clientX - startX;
        const ty = e.touches[0].clientY - startY;
        translateX.value = tx;
        translateY.value = ty;
        lastX.value = translateX.value;
        lastY.value = translateY.value;
    }
}

function onTouchEnd(e: TouchEvent) {
    // handle double-tap on touch devices to toggle zoom
    const now = Date.now();
    // if it was not a multi-touch gesture
    if ((e.changedTouches?.length || 0) === 1) {
        if (now - (lastTap || 0) < 300) {
            // double tap
            if (scale.value > 1) {
                resetZoom();
            } else {
                scale.value = 2;
            }
            lastTap = 0;
        } else {
            lastTap = now;
        }
    }

    isPanning = false;
    lastScale.value = scale.value;
}

// Mouse handlers for desktop testing
function onMouseDown(e: MouseEvent) {
    e.preventDefault();
    mouseDown = true;
    startX = e.clientX - lastX.value;
    startY = e.clientY - lastY.value;

    const onMove = (ev: MouseEvent) => {
        if (!mouseDown) return;
        const tx = ev.clientX - startX;
        const ty = ev.clientY - startY;
        translateX.value = tx;
        translateY.value = ty;
        lastX.value = translateX.value;
        lastY.value = translateY.value;
    };

    const onUp = () => {
        mouseDown = false;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
}

function onWheel(e: WheelEvent) {
    const delta = -e.deltaY || e.detail
    const zoomFactor = delta > 0 ? 1.1 : 0.9;
    const rect = imgWrapper.value?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e as WheelEvent).clientX - rect.left;
    const cy = (e as WheelEvent).clientY - rect.top;

    let newScale = scale.value * zoomFactor;
    newScale = Math.max(minScale, Math.min(maxScale, newScale));
    const ds = newScale / scale.value;

    translateX.value = (translateX.value - cx) * ds + cx;
    translateY.value = (translateY.value - cy) * ds + cy;
    scale.value = newScale;
}

let lastTap = 0;
function onDoubleClick(e: MouseEvent | TouchEvent) {
    const now = Date.now();
    if (now - lastTap < 300) {
        // double tap detected
        if (scale.value > 1) {
            scale.value = 1;
            translateX.value = 0;
            translateY.value = 0;
        } else {
            scale.value = 2;
        }
    }
    lastTap = now;
}

onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>

<style scoped lang="scss">
.home_container {
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #54d6db, #caf0fe, #0056d6);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    // 为 fixed 标题预留顶部空间
    padding-top: 80px; // 根据标题高度调整

    .title {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px; // 固定高度
        background: rgba(0, 0, 0, 0.1); // 轻微毛玻璃底（可选）
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 10;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        padding: 0 16px;
        box-sizing: border-box;

        .artboard {
            font-size: 1.8em;
            font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', sans-serif;
            font-weight: 800;
            line-height: 1.3;
            color: white;
            text-shadow:
                1px 1px 0 rgba(0, 30, 60, 0.4),
                2px 2px 0 rgba(255, 80, 40, 0.3);
            letter-spacing: 1px;
            -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.2);
            margin: 0;
            text-align: center;
            flex: 1;
        }

        .logo-icon {
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                transform: scale(0.95);
            }
        }
    }

    .bg_title {
        width: 100%;
        max-width: 500px;
        margin: 0 auto 24px;

        img {
            width: 100%;
            max-height: 320px;
            object-fit: contain;
            border-radius: 16px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
            background: white;
        }
    }

    .bg {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        margin-top: 0;
    }
}

/* 小屏适配 */
@media screen and (max-width: 390px) {
    .home_container {
        padding: 0 12px;
        padding-top: 70px;
    }

    .title {
        height: 50px;
    }

    .title .artboard {
        font-size: 1.6em;
    }

    .bg_title img {
        max-height: 280px;
        border-radius: 14px;
    }
}

/* 超小屏 */
@media screen and (max-width: 320px) {
    .home_container {
        padding-top: 60px;
    }

    .title {
        height: 45px;
    }

    .title .artboard {
        font-size: 1.5em;
        letter-spacing: 0.5px;
    }

    .bg_title img {
        max-height: 240px;
        border-radius: 12px;
    }
}

/* 抽屉样式 */
.drawer-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;

    .nav-item {
        padding: 16px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        &:active {
            transform: translateY(0);
        }

        span {
            color: white;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    }
}

/* 全屏图片查看器样式 */
.full-image-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 8px;
}

.full-image-toolbar {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    pointer-events: auto;
}

.full-image-toolbar .title {
    font-weight: 600;
}

.close-btn {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 6px;
}

.img-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    touch-action: none;
}

.zoom-image {
    max-width: 100%;
    max-height: 100%;
    will-change: transform;
    user-select: none;
    -webkit-user-drag: none;
    transition: transform 0s linear;
}

.full-image-footer {
    position: absolute;
    bottom: 14px;
    left: 12px;
    right: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
}

.hint {
    pointer-events: none;
}
</style>
