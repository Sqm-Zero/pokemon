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
            size="72%"
            direction="ttb"
            v-model="visible"
            :show-close="false"
            class="custom-drawer"
        >
            <div class="drawer-content">
                <div class="drawer-header">
                    <div class="drawer-title-row">
                        <span class="drawer-title">按属性筛选</span>
                        <div class="drawer-actions">
                            <button class="action-btn clear" @click="clearFilter" :disabled="!activeType">
                                清空
                            </button>
                            <button class="action-btn close" @click="visible = false">关闭</button>
                        </div>
                    </div>
                    <div class="title-line"></div>
                    <div class="filter-status" :class="{ active: !!activeType }">
                        <span class="status-label">当前筛选：</span>
                        <span class="status-value">{{ activeType || '全部属性' }}</span>
                    </div>
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

                <div class="drawer-header stats-drawer-header">
                    <span class="drawer-title">种族值筛选与排序</span>
                    <div class="title-line"></div>
                </div>
                <div class="stats-panel">
                    <div class="stats-row">
                        <span class="stats-label">总种族值</span>
                        <div class="stats-inputs">
                            <input
                                type="number"
                                class="stats-num-input"
                                :value="pokemonStore.statsTotalMin ?? ''"
                                placeholder="最小"
                                min="0"
                                @input="setStoreNumber('statsTotalMin', $event)"
                            />
                            <span class="stats-tilde">~</span>
                            <input
                                type="number"
                                class="stats-num-input"
                                :value="pokemonStore.statsTotalMax ?? ''"
                                placeholder="最大"
                                min="0"
                                @input="setStoreNumber('statsTotalMax', $event)"
                            />
                        </div>
                    </div>
                    <div class="stats-row">
                        <span class="stats-label">单项范围</span>
                        <div class="stats-row-inner">
                            <el-select
                                v-model="pokemonStore.statsRangeStatKey"
                                placeholder="不按单项"
                                class="stats-select-stat"
                            >
                                <el-option label="不按单项" :value="null" />
                                <el-option
                                    v-for="opt in BASE_STAT_OPTIONS"
                                    :key="opt.key"
                                    :label="opt.label"
                                    :value="opt.key"
                                />
                            </el-select>
                            <div class="stats-inputs">
                                <input
                                    type="number"
                                    class="stats-num-input"
                                    :disabled="!pokemonStore.statsRangeStatKey"
                                    :value="pokemonStore.statsRangeStatMin ?? ''"
                                    placeholder="最小"
                                    min="0"
                                    @input="setStoreNumber('statsRangeStatMin', $event)"
                                />
                                <span class="stats-tilde">~</span>
                                <input
                                    type="number"
                                    class="stats-num-input"
                                    :disabled="!pokemonStore.statsRangeStatKey"
                                    :value="pokemonStore.statsRangeStatMax ?? ''"
                                    placeholder="最大"
                                    min="0"
                                    @input="setStoreNumber('statsRangeStatMax', $event)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="stats-row">
                        <span class="stats-label">排序依据</span>
                        <el-select v-model="pokemonStore.statsSortField" class="stats-select-sort">
                            <el-option label="图鉴编号" value="dex" />
                            <el-option label="总种族值" value="total" />
                            <el-option
                                v-for="opt in BASE_STAT_OPTIONS"
                                :key="opt.key"
                                :label="opt.label"
                                :value="opt.key"
                            />
                        </el-select>
                    </div>
                    <div v-if="pokemonStore.statsSortField !== 'dex'" class="stats-row">
                        <span class="stats-label">排序方向</span>
                        <el-radio-group v-model="pokemonStore.statsSortOrder" size="small">
                            <el-radio-button value="desc">高 → 低</el-radio-button>
                            <el-radio-button value="asc">低 → 高</el-radio-button>
                        </el-radio-group>
                    </div>
                    <button type="button" class="stats-reset-btn" @click="clearStatsFilters">
                        清除种族值条件
                    </button>
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
import { computed, ref } from 'vue';
import { BASE_STAT_OPTIONS } from '@/constants/pokemonBaseStats';

const pokemonStore = usePokemonStore();

type StatsNumberKey =
    | 'statsTotalMin'
    | 'statsTotalMax'
    | 'statsRangeStatMin'
    | 'statsRangeStatMax';

function setStoreNumber(key: StatsNumberKey, e: Event) {
    const raw = (e.target as HTMLInputElement).value;
    pokemonStore[key] = raw === '' ? null : Number(raw);
}

function clearStatsFilters() {
    pokemonStore.statsTotalMin = null;
    pokemonStore.statsTotalMax = null;
    pokemonStore.statsRangeStatKey = null;
    pokemonStore.statsRangeStatMin = null;
    pokemonStore.statsRangeStatMax = null;
    pokemonStore.statsSortField = 'dex';
    pokemonStore.statsSortOrder = 'desc';
}
const query = pokemonStore.pokemonQuery;
const visible = ref(false);
const activeType = computed(() => pokemonStore.type);

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

const clearFilter = () => {
    pokemonStore.setType('');
    pokemonStore.getPokemonListByType('');
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
                margin-top: 2px;
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
        margin-bottom: 20px;

        .drawer-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

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
            margin-bottom: 10px;
        }

        .drawer-actions {
            display: flex;
            gap: 8px;
        }

        .action-btn {
            border: none;
            border-radius: 14px;
            padding: 6px 12px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .action-btn.clear {
            background: #eef3ff;
            color: #3559d8;
        }

        .action-btn.close {
            background: #f2f4f7;
            color: #344054;
        }

        .action-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }

        .filter-status {
            display: inline-flex;
            align-items: center;
            width: fit-content;
            border-radius: 999px;
            padding: 6px 12px;
            background: #f4f6f8;
            color: #5a6470;
            font-size: 13px;
            font-weight: 500;
        }

        .filter-status.active {
            background: rgba(52, 152, 219, 0.12);
            color: #0f4c81;
        }

        .status-label {
            margin-right: 6px;
            opacity: 0.75;
        }

        .status-value {
            font-weight: 700;
        }
    }

    .stats-drawer-header {
        margin-top: 28px;
    }

    .stats-panel {
        max-width: 420px;
        margin: 0 auto 16px;
        padding: 0 8px;
    }

    .stats-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        .stats-label {
            font-size: 13px;
            font-weight: 600;
            color: #34495e;
        }

        .stats-row-inner {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stats-inputs {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .stats-tilde {
            color: #7f8c8d;
            font-weight: 600;
        }

        .stats-num-input {
            width: 100px;
            padding: 8px 10px;
            border: 1px solid #dce4ec;
            border-radius: 10px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s;

            &:focus {
                border-color: #3498db;
            }

            &:disabled {
                opacity: 0.45;
                cursor: not-allowed;
            }
        }

        .stats-select-stat,
        .stats-select-sort {
            width: 100%;
        }

        :deep(.el-radio-group) {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
    }

    .stats-reset-btn {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 12px;
        background: #ecf0f1;
        color: #2c3e50;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #dfe6e9;
        }
    }

    .stats-drawer-header {
        margin-top: 28px;
    }

    .stats-panel {
        max-width: 420px;
        margin: 0 auto 16px;
        padding: 0 8px;
    }

    .stats-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        .stats-label {
            font-size: 13px;
            font-weight: 600;
            color: #34495e;
        }

        .stats-row-inner {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stats-inputs {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .stats-tilde {
            color: #7f8c8d;
            font-weight: 600;
        }

        .stats-num-input {
            width: 100px;
            padding: 8px 10px;
            border: 1px solid #dce4ec;
            border-radius: 10px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s;

            &:focus {
                border-color: #3498db;
            }

            &:disabled {
                opacity: 0.45;
                cursor: not-allowed;
            }
        }

        .stats-select-stat,
        .stats-select-sort {
            width: 100%;
        }

        :deep(.el-radio-group) {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
    }

    .stats-reset-btn {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 12px;
        background: #ecf0f1;
        color: #2c3e50;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #dfe6e9;
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
            transition: all 0.18s ease;

            &:hover {
                transform: translateY(-1px);
            }

            &.active {
                animation: bounce 0.28s ease;
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

@media (max-width: 768px) {
    .drawer-content {
        padding: 8px 14px 22px;

        .drawer-header {
            .drawer-title-row {
                align-items: flex-start;
                flex-direction: column;
            }

            .drawer-actions {
                width: 100%;
            }

            .action-btn {
                flex: 1;
            }
        }
    }
}
</style>
