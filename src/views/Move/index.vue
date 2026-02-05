<template>
    <div class="m_move">
        <Top
            title="技能列表"
            icon="pokemon"
            @icon_func="showTypeFilter = true"
            color="linear-gradient(90deg, #ffffff, #562af4, #f59e24)"
        />

        <div class="search-section">
            <Search @search="handleSearch" :initial-value="query" />
            <div v-if="selectedTypes.length" class="active-filters">
                <el-tag
                    closable
                    v-for="t in selectedTypes"
                    :key="t"
                    @close="toggleType(t)"
                    :color="colorMap[t]"
                    effect="dark"
                >
                    {{ t }}
                </el-tag>
            </div>
        </div>

        <div class="move_container" ref="scrollContainer">
            <transition-group name="list-complete">
                <div
                    class="move_item"
                    v-for="(item, index) in filteredMoveList"
                    :key="item.move"
                    @click="handleMoveInfo(item)"
                >
                    <div class="index">#{{ String(index + 1).padStart(3, '0') }}</div>
                    <div class="move_main">
                        <span class="move_name">{{ item.move }}</span>
                        <div class="tags">
                            <span class="move_type" :style="{ background: getColor(item.type) }">{{
                                item.type
                            }}</span>
                            <span class="move_category" :class="getCategoryClass(item.category)">
                                {{ item.category }}
                            </span>
                        </div>
                    </div>
                    <div class="arrow">
                        <el-icon><ArrowRight /></el-icon>
                    </div>
                </div>
            </transition-group>

            <el-empty v-if="filteredMoveList.length === 0" description="没有找到匹配的技能" />
        </div>

        <el-drawer v-model="showTypeFilter" direction="ttb" size="45%" title="按属性筛选">
            <div class="drawer-content">
                <div class="drawer-list">
                    <div
                        v-for="item in pokemonTypes"
                        :key="item"
                        @click="toggleType(item)"
                        class="drawer-item"
                        :class="{ active: selectedTypes.includes(item) }"
                        :style="getAttributeStyle(item)"
                    >
                        {{ item }}
                    </div>
                </div>
                <div class="drawer-footer">
                    <el-button @click="selectedTypes = []">重置</el-button>
                    <el-button type="primary" @click="showTypeFilter = false">确定</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onActivated, onBeforeUnmount, nextTick, watch } from 'vue';
import { reqMoves } from '@/apis/moves';
import type { Move } from '@/apis/pokemon/type';
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';

const $router = useRouter();
const pokemonStore = usePokemonStore();
const colorMap = pokemonStore.colorMap;

// --- 响应式状态 ---
const showTypeFilter = ref(false);
const query = ref<string>(''); // 从缓存恢复搜索
const selectedTypes = ref<string[]>(
    JSON.parse(sessionStorage.getItem('move_selected_types') || '[]') // 从缓存恢复筛选
);
const scrollContainer = ref<HTMLElement | null>(null);

const pokemonTypes = [
    '一般',
    '格斗',
    '飞行',
    '毒',
    '地面',
    '岩石',
    '虫',
    '幽灵',
    '钢',
    '火',
    '水',
    '草',
    '电',
    '超能力',
    '冰',
    '龙',
    '恶',
    '妖精'
];

const MoveList: Move[] = reqMoves();

// --- 逻辑处理 ---
const getColor = (type: string) => colorMap[type] || '#BBBBAA';

const getCategoryClass = (cat: string) => {
    if (cat === '物理') return 'cat-physical';
    if (cat === '特殊') return 'cat-special';
    return 'cat-status';
};

function handleSearch(q: string) {
    query.value = q;
    sessionStorage.setItem('move_query', q); // 持久化
}

const toggleType = (type: string) => {
    const idx = selectedTypes.value.indexOf(type);
    if (idx > -1) {
        selectedTypes.value.splice(idx, 1);
    } else {
        selectedTypes.value.push(type);
    }
    // 持久化存储
    sessionStorage.setItem('move_selected_types', JSON.stringify(selectedTypes.value));
};

// --- 计算过滤 (性能优化：添加 memoization 思想) ---
const filteredMoveList = computed(() => {
    return MoveList.filter(move => {
        const matchType =
            selectedTypes.value.length === 0 || selectedTypes.value.includes(move.type);
        const matchQuery =
            !query.value || move.move.includes(query.value) || move.type.includes(query.value);
        return matchType && matchQuery;
    });
});

const getAttributeStyle = (item: string) => {
    const isActive = selectedTypes.value.includes(item);
    return {
        background: isActive ? colorMap[item] : '#f0f0f0',
        color: isActive ? '#fff' : '#666'
    };
};

const handleMoveInfo = (item: Move) => {
    // 保存滚动位置
    pokemonStore.scrollPosition = window.scrollY;
    pokemonStore.Move = item;
    $router.push('/move/move_info');
};

// --- 生命周期 & 滚动恢复 ---
onActivated(() => {
    nextTick(() => {
        window.scrollTo({
            top: pokemonStore.scrollPosition || 0,
            behavior: 'instant' // 返回时不建议用 smooth，体验更直接
        });
    });
});

// 监听滚动保存位置
const handleScroll = () => {
    pokemonStore.scrollPosition = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.m_move {
    min-height: 100vh;
    background-color: #f5f7fa;
    padding-bottom: 20px;

    .search-section {
        position: sticky;
        top: 0;
        z-index: 10;
        background: #f5f7fa;
        padding: 10px 5%;

        .active-filters {
            display: flex;
            gap: 8px;
            margin-top: 8px;
            flex-wrap: wrap;
        }
    }

    .move_container {
        width: 92%;
        max-width: 800px;
        margin: 0 auto;

        .move_item {
            display: flex;
            align-items: center;
            padding: 15px;
            background: #fff;
            border-radius: 12px;
            margin-bottom: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: all 0.2s ease;
            cursor: pointer;

            &:active {
                transform: scale(0.97);
            }

            .index {
                font-family: 'Courier New', Courier, monospace;
                color: #bdc3c7;
                font-weight: bold;
                margin-right: 15px;
            }

            .move_main {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 6px;

                .move_name {
                    font-size: 16px;
                    font-weight: 600;
                    color: #34495e;
                }

                .tags {
                    display: flex;
                    gap: 8px;

                    .move_type {
                        padding: 2px 10px;
                        border-radius: 4px;
                        color: #fff;
                        font-size: 11px;
                        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
                    }

                    .move_category {
                        padding: 2px 8px;
                        border-radius: 4px;
                        font-size: 11px;
                        font-weight: bold;
                        &.cat-physical {
                            background: #fee2e2;
                            color: #ef4444;
                        }
                        &.cat-special {
                            background: #dbeafe;
                            color: #3b82f6;
                        }
                        &.cat-status {
                            background: #f3f4f6;
                            color: #6b7280;
                        }
                    }
                }
            }

            .arrow {
                color: #dcdfe6;
            }
        }
    }
}

/* 抽屉美化 */
.drawer-content {
    .drawer-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 15px;

        .drawer-item {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.2s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

            &.active {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
        }
    }
    .drawer-footer {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }
}

/* 动画 */
.list-complete-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
.list-complete-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
