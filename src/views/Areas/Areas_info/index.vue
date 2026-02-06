<template>
    <div class="page-wrapper">
        <Top
            :title="areaStore.areaName"
            router="/areas"
            icon="pokemon"
            color="linear-gradient(90deg, #374151, #111827)"
        ></Top>

        <div class="container">
            <div class="weather-sticky-header">
                <div class="weather-scroller">
                    <div
                        v-for="(condition, index) in weatherConditions"
                        :key="index"
                        :class="['weather-pill', { active: activeWeather === condition }]"
                        @click="activeWeather = condition"
                    >
                        {{ condition }}
                    </div>
                </div>
            </div>

            <div class="content-body">
                <div v-if="hasData" class="methods-wrapper">
                    <div
                        v-for="(methodData, methodName) in processedWeatherData"
                        :key="methodName"
                        class="method-group"
                    >
                        <div class="group-header">
                            <span class="group-title">{{ getEncountName(methodName) }}</span>
                            <span class="group-count">{{ methodData.length }} 种</span>
                        </div>

                        <div class="pokemon-list">
                            <div
                                v-for="(item, idx) in methodData"
                                :key="idx"
                                class="pokemon-row"
                                @click="handlePokemonInfo(item.name)"
                            >
                                <div class="avatar-col">
                                    <div class="avatar-box">
                                        <img
                                            :src="getImageSrc(item.name)"
                                            @error="handleImageError"
                                            class="pokemon-img"
                                            alt="pm"
                                        />
                                    </div>
                                </div>

                                <div class="info-col">
                                    <div class="name-row">
                                        <span class="p-name">{{ item.name }}</span>
                                    </div>
                                    <div class="level-row">
                                        <span class="level-tag">
                                            {{
                                                item.minLevel === item.maxLevel
                                                    ? `Lv.${item.minLevel}`
                                                    : `Lv.${item.minLevel}-${item.maxLevel}`
                                            }}
                                        </span>
                                    </div>
                                </div>

                                <div class="rate-col">
                                    <div class="rate-val">{{ item.totalRate }}%</div>
                                    <div class="rate-track">
                                        <div
                                            class="rate-bar"
                                            :style="{ width: Math.min(item.totalRate, 100) + '%' }"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="empty-placeholder">
                    <span>当前天气下暂无数据</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAreaStore } from '@/store/modules/area';
import { computed, ref } from 'vue';
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';

// 引入默认图片 (请替换为你项目中的实际默认图路径)
const defaultImg = new URL('/src/assets/images/pokemonList_images/826.png', import.meta.url).href;

const $router = useRouter();
const areaStore = useAreaStore();
const pokemonStore = usePokemonStore();
const area_date: any = areaStore.sharedData;

// 获取天气 Key
const weatherConditions = computed(() => {
    return Object.keys(area_date).filter(
        key => typeof area_date[key] === 'object' && area_date[key] !== null
    );
});

const activeWeather = ref<string>(weatherConditions.value[0] || '默认');

// 判断是否有数据
const hasData = computed(() => {
    return processedWeatherData.value && Object.keys(processedWeatherData.value).length > 0;
});

/**
 * 核心处理逻辑
 */
const processedWeatherData = computed(() => {
    const rawData = area_date[activeWeather.value] || {};
    const result: any = {};

    Object.keys(rawData).forEach(methodName => {
        const list = rawData[methodName];
        if (!Array.isArray(list) || list.length === 0) return;

        const mergedMap = new Map();

        list.forEach(item => {
            if (!item.name) return;

            // 1. 概率清洗：处理 "10%", "10", 10 等各种格式
            let rateNum = 0;
            if (typeof item.rate === 'number') {
                rateNum = item.rate;
            } else if (typeof item.rate === 'string') {
                rateNum = parseFloat(item.rate.replace('%', ''));
            }

            // 2. 等级清洗
            const levelVal = parseInt(item.level) || 1;

            if (mergedMap.has(item.name)) {
                const existing = mergedMap.get(item.name);
                existing.totalRate += rateNum;
                existing.minLevel = Math.min(existing.minLevel, levelVal);
                existing.maxLevel = Math.max(existing.maxLevel, levelVal);
            } else {
                mergedMap.set(item.name, {
                    name: item.name,
                    totalRate: rateNum,
                    minLevel: levelVal,
                    maxLevel: levelVal
                });
            }
        });

        // 3. 转数组 & 格式化小数 & 排序
        const sortedList = Array.from(mergedMap.values())
            .map((p: any) => {
                // 保留最多1位小数，如果是整数则不显示小数 (10.0 -> 10, 10.5 -> 10.5)
                p.totalRate = Number(p.totalRate.toFixed(1));
                return p;
            })
            .sort((a: any, b: any) => b.totalRate - a.totalRate);

        if (sortedList.length > 0) {
            result[methodName] = sortedList;
        }
    });

    return result;
});

// 简单的中文映射，不做额外图标
const EncountName: Record<string, string> = {
    Grass: '草丛',
    'Tall Grass': '高草丛',
    'Rock Smash': '岩石粉碎',
    Swarm: '大量出现',
    'Old Rod': '破旧钓竿',
    'Good Rod': '好钓竿',
    'Super Rod': '超级钓竿',
    Surf: '水上冲浪'
};
const getEncountName = (key: string|number) => EncountName[key] || key;

// 获取图片链接
const getImageSrc = (name: string) => {
    // 给名字去除空格
    name = name.replace(/\s/g, '');
    let id = pokemonStore.getPokemonIdByName(name);
    return new URL(`/src/assets/images/pokemonList_images/${id}.png`, import.meta.url).href;
};

// 图片加载失败处理
const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImg; // 替换为默认图
    target.onerror = null; // 防止无限循环
};

const handlePokemonInfo = (name: string) => {
    const id = pokemonStore.getPokemonIdByName(name);
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(id);
    $router.push('/pokemon/info');
};
</script>

<style scoped lang="scss">
/* 基础容器 */
.page-wrapper {
    min-height: 100vh;
    background-color: #f9fafb; /* 极浅的灰白色背景 */
    display: flex;
    flex-direction: column;
}

.container {
    flex: 1;
    position: relative;
}

/* 悬浮 Tab 栏 */
.weather-sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px 0;
}

.weather-scroller {
    display: flex;
    padding: 0 16px;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox 隐藏滚动条 */
    &::-webkit-scrollbar {
        display: none;
    }
}

.weather-pill {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    background: #f3f4f6;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
        background: #1f2937; /* 深黑灰，高级感 */
        color: #fff;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(31, 41, 55, 0.2);
    }
}

/* 列表分组 */
.content-body {
    padding: 16px;
}

.method-group {
    margin-bottom: 24px;
}

.group-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 4px 8px 4px;
}

.group-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    position: relative;
    padding-left: 10px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 14px;
        background: #3b82f6; /* 小蓝条指示器 */
        border-radius: 2px;
    }
}

.group-count {
    font-size: 12px;
    color: #9ca3af;
}

/* 宝可梦列表项 (iOS List Style) */
.pokemon-list {
    background: #fff;
    border-radius: 12px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.02),
        0 1px 2px rgba(0, 0, 0, 0.04);
    overflow: hidden;
}

.pokemon-row {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.1s;
    border-bottom: 1px solid #f3f4f6;

    &:last-child {
        border-bottom: none;
    }

    &:active {
        background: #f9fafb;
    }
}

/* 左侧头像 */
.avatar-col {
    margin-right: 14px;
}

.avatar-box {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pokemon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 增加一个轻微的滤镜，让像素图在高清屏上看起来不那么锐利，或者去掉 */
}

/* 中间信息 */
.info-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
}

.name-row .p-name {
    font-size: 15px;
    font-weight: 600;
    color: #374151;
}

.level-row .level-tag {
    font-size: 12px;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
}

/* 右侧概率 */
.rate-col {
    text-align: right;
    min-width: 60px;
}

.rate-val {
    font-size: 14px;
    font-weight: 700;
    color: #3b82f6; /* 重点色 */
    margin-bottom: 4px;
}

.rate-track {
    width: 100%;
    height: 4px;
    background: #eff6ff;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 2px;
}

.rate-bar {
    height: 100%;
    background: #3b82f6;
    border-radius: 2px;
}

.empty-placeholder {
    text-align: center;
    padding: 40px;
    color: #d1d5db;
    font-size: 14px;
}
</style>
