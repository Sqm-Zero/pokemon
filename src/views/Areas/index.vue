<template>
    <div class="m_areas">
        <Top title="地区列表" icon="pokemon" color="linear-gradient(90deg, #009fca, #fc5948, #313862)"></Top>
        <div class="areas-content">
            <div v-for="(item, index) in areas_name" :key="index" class="areas-item" @click="handleAreaInfo(item)">
                <div class="areas-type">
                    <img :src="getImageSrc(item)" alt="">
                </div>
                <div class="areas-name">{{ item }}</div>
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
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 15px;

    .areas-item {
        display: flex;
        align-items: center;
        background-color: #f8f9fa;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        .areas-type {
            background-color: #3498db;
            margin-left: 7%;
            color: white;
            text-align: center;
            font-weight: bold;
            height: 70px;
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 5%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover; // 使用 cover 来裁剪图片以填充容器
            }
        }

        .areas-name {
            flex-grow: 1;
            text-align: center;
            padding: 8px 12px;
            font-weight: bold;
            color: #2c3e50;
        }
    }
}
</style>