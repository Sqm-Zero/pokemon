<template>
    <div class="m_areas">
        <Top title="地区列表" icon="pokemon" color="linear-gradient(90deg, #009fca, #fc5948, #313862)"></Top>
        <div class="areas-content">
            <div
                v-for="(item, index) in areas_name"
                :key="index"
                class="areas-item"
                @click="handleAreaInfo(item)"
                role="button"
                tabindex="0"
                @keydown.enter="handleAreaInfo(item)"
            >
                <img class="areas-image" :src="getImageSrc(item)" :alt="item" />
                <div class="areas-overlay">
                    <div class="areas-name">{{ item }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getAreas } from '@/apis/areas/index.ts'
import { useAreaStore } from '@/store/modules/area'
import { reverseLocationNameMap } from '@/constants/locationNameMap';

// 引入 AreaStore 实例
const areaStore = useAreaStore()
// 引入路由实例
let $router = useRouter();
// 获取地区列表
const areas = getAreas()
const areas_name = Object.keys(areas)

const handleAreaInfo = (area_name: string) => {
    areaStore.areaName = area_name
    areaStore.sharedData = areas[area_name]
    $router.push("/areas/area_info")
}

// 获取图片路径
const getImageSrc = (area_name: string) => {
    // 使用 reverseLocationNameMap 来获取英文名称
    const englishName = reverseLocationNameMap[area_name];
    
    if (!englishName) {
        console.warn(`No English name found for: ${area_name}`);
        return ''; // 或者返回一个默认图片路径
    }
    return new URL(`/src/assets/images/Areas_images/${englishName}.png`, import.meta.url).href;
};

</script>

<style scoped lang="scss">
.areas-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
    padding: 16px 12px 20px;
}

.areas-item {
    position: relative;
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateZ(0);
    outline: none;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
    }

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(0, 159, 202, 0.35), 0 6px 16px rgba(0, 0, 0, 0.18);
    }
}

.areas-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.areas-item:hover .areas-image {
    transform: scale(1.05);
}

.areas-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.55) 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;
}

.areas-name {
    color: #fff;
    font-weight: 700;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
    letter-spacing: 0.4px;
    font-size: 14px;
    text-align: center;
    line-height: 1.2;
    backdrop-filter: blur(2px);
    padding: 6px 10px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.15);
}

@media (min-width: 480px) {
    .areas-item {
        height: 180px;
    }
    .areas-name {
        font-size: 15px;
    }
}

@media (min-width: 768px) {
    .areas-content {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 16px;
    }
    .areas-item {
        height: 200px;
        border-radius: 14px;
    }
    .areas-name {
        font-size: 16px;
    }
}
</style>