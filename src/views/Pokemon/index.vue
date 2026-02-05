<template>
    <div class="m_pokemon">
        <header class="header-section">
            <div class="glass-bg"></div>
            <div class="header-content">
                <Top
                    title="宝可梦图鉴"
                    @icon_func="handleLogo"
                    icon="pokemon"
                    color="linear-gradient(90deg, #009fca, #fc5948, #313862)"
                ></Top>
                <div class="search-wrapper">
                    <Search :query="query" @search="handleSearch"></Search>
                </div>
            </div>
        </header>

        <main class="content-body">
            <PokemonList></PokemonList>
        </main>

        <el-drawer
            size="60%"
            direction="ttb"
            v-model="visible"
            :show-close="false"
            class="custom-drawer"
        >
            <div class="drawer-content">
                <div class="drawer-header">
                    <span class="drawer-title">按属性筛选</span>
                    <div class="title-line"></div>
                </div>
                <div class="drawer-list">
                    <div
                        v-for="(item, index) in attributeList"
                        :key="index"
                        @click="handleAttribute(item)"
                        class="drawer-item"
                        :class="{ active: pokemonStore.type === item }"
                        :style="getAttributeStyle(item)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import Top from '@/components/Top/index.vue'; // 确保路径正确
import Search from '@/components/Search/index.vue'; // 确保路径正确
import PokemonList from './PokemonList/index.vue';
import { usePokemonStore } from '@/store/modules/pokemon';
import { ref } from 'vue';

const pokemonStore = usePokemonStore();
const query = pokemonStore.pokemonQuery;
const visible = ref(false);

// 属性列表
const attributeList: string[] = [
    '一般',
    '火',
    '水',
    '草',
    '电',
    '冰',
    '格斗',
    '毒',
    '地面',
    '飞行',
    '岩石',
    '虫',
    '幽灵',
    '钢',
    '超能力',
    '龙',
    '恶',
    '妖精',
    '进化奇石'
];

// 颜色映射
const colorMap = pokemonStore.colorMap;

// 获取属性样式
const getAttributeStyle = (item: string) => {
    const isActive = pokemonStore.type === item;
    return {
        background: isActive ? colorMap[item] : 'rgba(255,255,255,0.8)',
        color: isActive ? '#ffffff' : '#444444',
        border: isActive ? `1px solid ${colorMap[item]}` : '1px solid #ddd',
        boxShadow: isActive ? `0 4px 12px ${colorMap[item]}66` : 'none'
    };
};

// 搜索处理
function handleSearch(q: string) {
    pokemonStore.pokemonQuery = q;
}

// 显示抽屉
function handleLogo() {
    visible.value = true;
}

// 属性筛选切换
const handleAttribute = (item: string) => {
    if (pokemonStore.type === item) {
        pokemonStore.setType('');
        pokemonStore.getPokemonListByType('');
    } else {
        pokemonStore.setType(item);
        pokemonStore.getPokemonListByType(item);
    }
    visible.value = false; // 选中后关闭
};
</script>

<style scoped lang="scss">
.m_pokemon {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    overflow: hidden;

    .header-section {
        position: relative;
        width: 100%;
        z-index: 100;
        padding-bottom: 15px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

        .glass-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: -1;
        }

        .header-content {
            display: flex;
            flex-direction: column;
            align-items: center;

            .search-wrapper {
                width: 90%;
                max-width: 600px;
                margin-top: -5px;
            }
        }
    }

    .content-body {
        flex: 1;
        overflow: hidden;
        position: relative;
    }
}

// 抽屉内部样式优化
.drawer-content {
    padding: 10px 20px 30px;

    .drawer-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        .drawer-title {
            font-size: 18px;
            font-weight: bold;
            color: #2c3e50;
        }

        .title-line {
            width: 40px;
            height: 3px;
            background: #3498db;
            border-radius: 2px;
            margin-top: 5px;
        }
    }

    .drawer-list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;

        .drawer-item {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            &:hover {
                transform: scale(1.05);
            }

            &.active {
                animation: bounce 0.4s ease;
            }
        }
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

// 去除 Drawer 默认背景白边，使其更贴合毛玻璃感
:deep(.el-drawer) {
    background: rgba(255, 255, 255, 0.95) !important;
    border-radius: 0 0 24px 24px !important;
}
</style>
