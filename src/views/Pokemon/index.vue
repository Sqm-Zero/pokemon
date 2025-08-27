<template>
    <div class="m_pokemon">
        <div class="fixed-header">
            <Top title="宝可梦列表" @icon_func="handleLogo" icon="pokemon"
                color="linear-gradient(45deg, #ffffff, #7deeff, #ffffff)"></Top>
            <Search :query="query" @search="handleSearch"></Search>
        </div>
        <PokemonList style="margin-top: 30px;"></PokemonList>
    </div>
    <el-drawer size="60%" direction="ttb" v-model="visible">
        <div class="drawer-content">
            <div class="drawer-list">
                <div v-for="(item, index) in attributeList" :key="index" @click="handleAttribute(item)"
                    class="drawer-item" :class="{ 'active': pokemonStore.type === item }"
                    :style="getAttributeStyle(item)">
                    {{ item }}
                </div>
            </div>
        </div>
    </el-drawer>
</template>

<script setup lang="ts">
import PokemonList from './PokemonList/index.vue';
import { usePokemonStore } from '@/store/modules/pokemon';
import { ref } from 'vue'

const pokemonStore = usePokemonStore();
const query = pokemonStore.pokemonQuery;
const visible = ref(false);

// 属性列表
const attributeList: string[] = ['一般', '火', '水', '草', '电', '冰', '格斗', '毒', '地面', '飞行', '岩石', '虫', '幽灵', '钢', '超能力', '龙', '恶', '妖精', '进化奇石'];

// 颜色映射
const colorMap = pokemonStore.colorMap;

// 获取属性样式
const getAttributeStyle = (item: string) => {
    return {
        background: pokemonStore.type === item ? colorMap[item] : '#808080',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        color: pokemonStore.type === item ? '#ffffff' : '#e0e0e0',
    }
};

// 搜索处理函数
function handleSearch(q: string) {
    pokemonStore.pokemonQuery = q;
}

// 点击右侧logo显示抽屉（属性列表）
function handleLogo() {
    visible.value = true;
}

// 点击属性进行筛选
const handleAttribute = (item: string) => {
    // 如果已经选中，则取消选中
    if (pokemonStore.type === item) {
        pokemonStore.setType('');
        pokemonStore.getPokemonListByType('');
    } else {
        // 否则选中新的属性
        pokemonStore.setType(item);
        pokemonStore.getPokemonListByType(item);
    }
}
</script>

<style scoped lang="scss">
.m_pokemon {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden; // 防止整体滚动

    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
}

.drawer-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end; // 让内容靠底部
    align-items: center;
    height: 100%;
    width: 100%;
    padding-bottom: 16px; // 可根据需要调整底部间距

    .drawer-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 15px;
        max-height: 60vh; // 限制最大高度，超出滚动
        overflow-y: auto;

        // 隐藏滚动条（兼容主流浏览器）
        scrollbar-width: none; // Firefox
        -ms-overflow-style: none; // IE 10+
        &::-webkit-scrollbar {
            display: none; // Chrome/Safari
        }

        .drawer-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30%;
            height: 40px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            &.active {
                animation: pulse 0.3s ease-in-out;
            }
        }
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>