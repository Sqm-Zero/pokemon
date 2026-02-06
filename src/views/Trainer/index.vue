<template>
    <div class="trainer-list">
        <div class="header-bg-blob"></div>
        <Top title="训练家图鉴" color="transparent" />

        <div class="group-list">
            <div class="version-switch">
                <div
                    class="switch-item"
                    :class="{ active: currentVersion === 'normal' }"
                    @click="currentVersion = 'normal'"
                >
                    挑战版
                </div>
                <div
                    class="switch-item"
                    :class="{ active: currentVersion === 'hardcore' }"
                    @click="currentVersion = 'hardcore'"
                >
                    噩梦版
                </div>
                <div class="switch-slider" :class="currentVersion"></div>
            </div>

            <div
                v-for="(name, index) in groupNames"
                :key="index"
                class="glass-item"
                @click="handleClick(name)"
            >
                <div class="item-inner">
                    <div class="item-icon-box">{{ index + 1 }}</div>
                    <span class="group-name">{{ name }}</span>
                    <el-icon class="arrow-icon"><ArrowRight /></el-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

// 路由
let $router = useRouter();

const groupNames = [
    '海洋队 重要战斗 阵容',
    '青梅/劲敌 详细阵容',
    '道馆馆主 详细阵容',
    '宝可梦联盟 详细阵容',
    '隐藏五天王',
    '二周目 重要战斗',
    '新增的传奇挑战！',
    '最终挑战！游戏作者（茵郁市右下角树屋）'
];

const VERSION_KEY = 'trainer_version';

const currentVersion = ref<'normal' | 'hardcore'>(
    (localStorage.getItem(VERSION_KEY) as 'normal' | 'hardcore') || 'normal'
);

watch(currentVersion, val => {
    localStorage.setItem(VERSION_KEY, val);
});

onMounted(() => {
    // 进入页面时再次同步，防止外部变更
    const saved = localStorage.getItem(VERSION_KEY) as 'normal' | 'hardcore';
    if (saved && saved !== currentVersion.value) {
        currentVersion.value = saved;
    }
});

function handleClick(name: string) {
    $router.push({
        name: 'GroupDetail',
        params: { groupName: encodeURIComponent(name) },
        query: { version: currentVersion.value }
    });
}
</script>

<style scoped lang="scss">
.trainer-list {
    min-height: 100vh;
    background: #f0f4f8;
    position: relative;
    overflow-x: hidden;
    padding-bottom: 40px;
}

.header-bg-blob {
    position: absolute;
    top: -100px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(64, 158, 255, 0.15) 0%, transparent 70%);
    z-index: 0;
}

.group-list {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
    max-width: 500px;
    margin: 0 auto;
}

/* 现代化版本切换器 */
.version-switch {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
    padding: 4px;
    border-radius: 12px;
    position: relative;
    margin-bottom: 10px;

    .switch-item {
        flex: 1;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        font-weight: 600;
        color: #606266;
        z-index: 2;
        cursor: pointer;
        transition: color 0.3s;

        &.active {
            color: #fff;
        }
    }

    .switch-slider {
        position: absolute;
        top: 4px;
        left: 4px;
        width: calc(50% - 4px);
        height: calc(100% - 8px);
        border-radius: 10px;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 1;

        &.normal {
            transform: translateX(0);
            background: #409eff;
            box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
        }
        &.hardcore {
            transform: translateX(100%);
            background: #f56c6c;
            box-shadow: 0 4px 12px rgba(245, 108, 108, 0.3);
        }
    }
}

/* 玻璃质感列表项 */
.glass-item {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);

    &:active {
        transform: scale(0.98);
        background: rgba(255, 255, 255, 0.9);
    }

    .item-inner {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .item-icon-box {
        width: 28px;
        height: 28px;
        background: #eef2f7;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 800;
        color: #909399;
    }

    .group-name {
        flex: 1;
        font-size: 15px;
        font-weight: 600;
        color: #2c3e50;
    }

    .arrow-icon {
        color: #dcdfe6;
        transition: transform 0.3s;
    }
    &:hover .arrow-icon {
        transform: translateX(3px);
        color: #409eff;
    }
}
</style>
