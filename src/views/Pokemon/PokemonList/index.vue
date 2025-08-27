<template>
    <div class="PL_container" ref="scrollContainer">
        <div class="pokemon">
            <LazyImage :scrollContainer="scrollContainer"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import LazyImage from './LazyImgList/index.vue';
import { ref, onMounted, onActivated } from 'vue';
import { usePokemonStore } from '@/store/modules/pokemon';

const pokemonStore = usePokemonStore();
const scrollContainer = ref<HTMLElement | null>(null);

// 使用 onActivated 代替 onMounted，因为使用了 keep-alive
onActivated(() => {
    // 恢复滚动位置
    if (scrollContainer.value && pokemonStore.scrollPosition) {
        scrollContainer.value.scrollTop = pokemonStore.scrollPosition;
    }
});

// 监听滚动事件，实时保存滚动位置
onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', () => {
            if (scrollContainer.value) {
                pokemonStore.scrollPosition = scrollContainer.value.scrollTop;
            }
        });
    }
});
</script>

<style scoped lang="scss">
.PL_container {
    height: calc(100vh - 100px); // 减去顶部导航的高度
    width: 100vw;
    position: fixed; // 固定位置
    top: 100px; // 顶部导航的高度

    @media (min-width : 900px) {
        width: 60vw;
    }

    display: flex;
    justify-content: center;
    align-items: flex-start; // 改为顶部对齐
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden; // 防止水平滚动
    background: linear-gradient(45deg, #ebf0fd, #b7e0f9, #73d4e1, #40c4af, #50af69);

    .pokemon {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        gap: 17.5px;
        padding: 20px;
    }
}
</style>