<template>
    <div class="m_move">
        <Top title="技能列表" icon="pokemon" @icon_func="showTypeFilter = true"
            color="linear-gradient(90deg, #ffffff, #562af4, #f59e24)"></Top>
        <Search @search="handleSearch"></Search>
        <div class="move_header" ref="scrollContainer">
            <div class="move_item" @click="handleMoveInfo(item)" v-for="(item, index) in filteredMoveList" :key="index">
                <div class="index">{{ index + 1 }}</div>
                <div class="move_name">{{ item.move }}</div>
                <div class="move_type" :style="{ background: getColor(item.type) }">{{ item.type }}</div>
                <div class="move_category">{{ item.category }}</div>
            </div>
        </div>

        <!-- 属性筛选抽屉 -->
        <el-drawer v-model="showTypeFilter" direction="ttb" size="50%">
            <div class="drawer-content">
                <div class="drawer-list">
                    <div v-for="(item, index) in pokemonTypes" :key="index" @click="toggleType(item)"
                        class="drawer-item" :class="{ 'active': pokemonStore.type === item }"
                        :style="getAttributeStyle(item)">
                        {{ item }}
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onActivated, onBeforeUnmount, nextTick } from 'vue';
import { reqMoves } from '@/apis/moves';
import type { Move } from '@/apis/pokemon/type';
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';

const $router = useRouter();
const pokemonStore = usePokemonStore();
const colorMap = pokemonStore.colorMap;
const showTypeFilter = ref(false);
const selectedTypes = ref<string[]>([]);

// 获取所有可用的宝可梦属性
const pokemonTypes = [
    '一般', '格斗', '飞行', '毒', '地面', '岩石',
    '虫', '幽灵', '钢', '火', '水', '草',
    '电', '超能力', '冰', '龙', '恶', '妖精'
];
// 记录滚动位置
const scrollContainer = ref<HTMLElement | null>(null);
const getColor = (type: any) => colorMap[type] || '#BBBBAA';

const query = ref('');
const MoveList: Move[] = reqMoves();

function handleSearch(q: string) {
    query.value = q;
}

// 切换属性选择
const toggleType = (type: string) => {
    const index = selectedTypes.value.indexOf(type);
    if (index === -1) {
        selectedTypes.value.push(type);
        // 否则选中新的属性
        pokemonStore.setType(type);
        pokemonStore.getPokemonListByType(type);
    } else {
        selectedTypes.value.splice(index, 1);
        pokemonStore.setType('');
        pokemonStore.getPokemonListByType('');
    }
};

// 过滤技能列表
const filteredMoveList = computed(() => {
    let filtered = MoveList;

    // 应用属性筛选
    if (selectedTypes.value.length > 0) {
        filtered = filtered.filter(move =>
            selectedTypes.value.includes(move.type)
        );
    }

    // 应用搜索筛选
    if (query.value) {
        filtered = filtered.filter(move =>
            move.move.toLowerCase().includes(query.value.toLowerCase()) ||
            move.type.toLowerCase().includes(query.value.toLowerCase()) ||
            move.category.toLowerCase().includes(query.value.toLowerCase())
        );
    }

    return filtered;
});

// 获取属性样式
const getAttributeStyle = (item: string) => {
    return {
        background: pokemonStore.type === item ? colorMap[item] : '#808080',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        color: pokemonStore.type === item ? '#ffffff' : '#e0e0e0',
    }
};

const handleMoveInfo = (item: Move) => {
    // 进入详情前保存当前滚动位置（窗口级）
    const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    pokemonStore.scrollPosition = Math.max(0, top);
    pokemonStore.Move = item;
    $router.push('/move/move_info');
};

// 使用 onActivated 代替 onMounted，因为使用了 keep-alive
onActivated(async () => {
    await nextTick();
    setTimeout(() => {
        window.scrollTo({ top: pokemonStore.scrollPosition || 0, behavior: 'auto' });
    }, 50)
});

// 监听滚动事件，实时保存滚动位置
let _scrollHandler: any = null;
onMounted(() => {
    _scrollHandler = () => {
        const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        pokemonStore.scrollPosition = Math.max(0, top);
    };
    window.addEventListener('scroll', _scrollHandler, { passive: true });
});

onBeforeUnmount(() => {
    if (_scrollHandler) {
        window.removeEventListener('scroll', _scrollHandler);
    }
});
</script>

<style scoped lang="scss">
.m_move {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh;  改为由页面滚动 */
    width: 100%;
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;

    .move_header {
        width: 90%;
        max-width: 800px;
        /* flex-grow: 1;  交由页面高度撑开 */
        /* overflow-y: auto; // 改为窗口滚动 */
        /* scrollbar-width: none; // Firefox */

        .move_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            transition: transform 0.3s ease;

            // &:hover {
            //     transform: translateY(-5px);
            // }

            .index,
            .move_name,
            .move_type,
            .move_category {
                flex: 1;
                text-align: center;
            }

            .index {
                font-size: 18px;
                font-weight: bold;
                color: #562af4;
            }

            .move_name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }

            .move_type {
                font-size: 17px;
                color: #ffffff;
                font-weight: bold;
                border-radius: 4px;
            }

            .move_category {
                font-size: 14px;
                color: #f59e24;
            }
        }
    }

    .search-container {
        width: 90%;
        max-width: 800px;
        display: flex;
        gap: 10px;
        align-items: center;
        margin: 10px 0;

        .filter-btn {
            white-space: nowrap;
        }
    }
}

.type-filter-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 15px;

    .type-item {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
            transform: scale(0.95);
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }

        &:hover {
            opacity: 0.8;
        }
    }
}

.drawer-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px 20px;
}

// 响应式适配
@media screen and (max-width: 768px) {
    .type-filter-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 480px) {
    .search-container {
        flex-direction: column;

        .filter-btn {
            width: 100%;
        }
    }
}

/* 属性筛选抽屉 */
.drawer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .drawer-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 15px;

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