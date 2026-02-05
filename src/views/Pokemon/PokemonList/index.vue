<template>
    <div class="PL_container" ref="scrollContainer">
        <div class="bg_decoration"></div>

        <div class="pokemon_grid">
            <LazyImage :scrollContainer="scrollContainer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import LazyImage from './LazyImgList/index.vue';
import { ref, onMounted, onActivated } from 'vue';
import { usePokemonStore } from '@/store/modules/pokemon';

const pokemonStore = usePokemonStore();
const scrollContainer = ref<HTMLElement | null>(null);

// 使用 onActivated 处理 keep-alive 状态下的滚动恢复
onActivated(() => {
    if (scrollContainer.value && pokemonStore.scrollPosition) {
        // 稍微延迟一下确保 DOM 渲染完成
        setTimeout(() => {
            scrollContainer.value!.scrollTop = pokemonStore.scrollPosition;
        }, 10);
    }
});

// 监听滚动事件，保存位置到 Store
onMounted(() => {
    const container = scrollContainer.value;
    if (container) {
        container.addEventListener(
            'scroll',
            () => {
                pokemonStore.scrollPosition = container.scrollTop;
            },
            { passive: true }
        );
    }
});
</script>

<style scoped lang="scss">
.PL_container {
    /* 填满父组件 content-body 的空间 */
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f5f7fa; // 干净的浅灰色背景

    /* 自定义滚动条样式 (优雅精细化) */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    /* 桌面端限制最大宽度并居中 */
    @media (min-width: 1024px) {
        padding: 0 15%;
    }

    .bg_decoration {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.03"><path d="M50 0 C 22.4 0 0 22.4 0 50 C 0 77.6 22.4 100 50 100 C 77.6 100 100 77.6 100 50 C 100 22.4 77.6 0 50 0 Z M 50 10 L 50 45 L 90 45 C 88 26 74 12 50 10 Z M 10 45 L 50 45 L 50 10 C 26 12 12 26 10 45 Z M 50 90 C 74 88 88 74 90 55 L 10 55 C 12 74 26 88 50 90 Z" fill="black"/></svg>')
            no-repeat center;
        background-size: contain;
        pointer-events: none;
        z-index: 0;
    }

    .pokemon_grid {
        position: relative;
        z-index: 1;
        width: 100%;
        display: grid;
        /* 响应式网格：最小140px，自动填充 */
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 20px;
        padding: 20px;

        @media (max-width: 480px) {
            grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
            gap: 12px;
            padding: 12px;
        }
    }
}
</style>
