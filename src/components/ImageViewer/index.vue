<template>
    <!-- 全屏图片查看器（触摸拖拽/捏合缩放/双击放大） -->
    <teleport to="body">
        <transition name="fade">
            <div v-if="isVisible" class="full-image-overlay" @click.self="handleClose">
                <div class="full-image-toolbar">
                    <div class="title">{{ title }}</div>
                    <div class="toolbar-buttons">
                        <button class="close-btn" @click="handleReset">重置</button>
                        <button class="close-btn close-btn-final" @click="handleClose">关闭</button>
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
                        :src="imageSrc"
                        :alt="title"
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
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Props {
    isVisible: boolean;
    title: string;
    imageSrc: string;
}

const props = withDefaults(defineProps<Props>(), {
    isVisible: false,
    title: '',
    imageSrc: ''
});

const emit = defineEmits<{
    close: [];
}>();

// Transform state
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

// Touch state
let lastTouchDist = 0;
let lastTouchCenter: { x: number; y: number } | null = null;
let lastTap = 0;

// DOM refs
const imgWrapper = ref<HTMLElement | null>(null);
const zoomImage = ref<HTMLImageElement | null>(null);

const imageStyle = computed(() => {
    return {
        transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
        'touch-action': 'none'
    } as Record<string, string>;
});

const handleClose = () => {
    resetAll();
    emit('close');
};

const handleReset = () => {
    resetZoom();
};

const resetZoom = () => {
    scale.value = 1;
    lastScale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    lastX.value = 0;
    lastY.value = 0;
};

const resetAll = () => {
    resetZoom();
    mouseDown = false;
    isPanning = false;
};

// Prevent body scroll when viewer is open
watch(
    () => props.isVisible,
    val => {
        if (val) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
);

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
    // Handle double-tap on touch devices to toggle zoom
    const now = Date.now();
    // if it was not a multi-touch gesture
    if ((e.changedTouches?.length || 0) === 1 && e.touches.length === 0) {
        const timeDiff = now - (lastTap || 0);
        if (timeDiff < 300 && timeDiff > 0) {
            // double tap detected
            if (scale.value > 1) {
                scale.value = 1;
                translateX.value = 0;
                translateY.value = 0;
            } else {
                scale.value = 2;
            }
            lastTap = 0; // reset to prevent triple tap
        } else {
            lastTap = now;
        }
    }

    isPanning = false;
    lastScale.value = scale.value;
}

// Mouse handlers for desktop testing
function onMouseDown(e: MouseEvent) {
    // Don't handle clicks on buttons
    if (
        (e.target as HTMLElement).classList.contains('close-btn') ||
        (e.target as HTMLElement).classList.contains('title')
    ) {
        return;
    }

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

    window.addEventListener('mousemove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp, { passive: false });
}

function onWheel(e: WheelEvent) {
    const delta = -e.deltaY || e.detail;
    const zoomFactor = delta > 0 ? 1.1 : 0.9;
    const rect = imgWrapper.value?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    let newScale = scale.value * zoomFactor;
    newScale = Math.max(minScale, Math.min(maxScale, newScale));
    const ds = newScale / scale.value;

    translateX.value = (translateX.value - cx) * ds + cx;
    translateY.value = (translateY.value - cy) * ds + cy;
    scale.value = newScale;
}

function onDoubleClick(e: MouseEvent | TouchEvent) {
    if (scale.value > 1) {
        scale.value = 1;
        translateX.value = 0;
        translateY.value = 0;
    } else {
        scale.value = 2;
    }
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
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
    z-index: 10000;

    .title {
        font-weight: 600;
        font-size: 16px;
        flex: 1;
    }

    .toolbar-buttons {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
    }
}

.close-btn {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }

    &:active {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(0.95);
    }

    &.close-btn-final {
        background: rgba(255, 100, 100, 0.2);
        border-color: rgba(255, 100, 100, 0.4);

        &:hover {
            background: rgba(255, 100, 100, 0.3);
            border-color: rgba(255, 100, 100, 0.6);
        }
    }
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
    pointer-events: none;

    .hint {
        pointer-events: none;
    }
}
</style>
