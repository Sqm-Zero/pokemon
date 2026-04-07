<template>
    <!-- 双打卡组显示 -->
    <div v-if="display.type === 'pair'" class="battle-card double-pair" @click="$emit('click')">
        <div class="card-header">
            <div class="card-title-row">
                <h3 class="card-title">{{ display.battle1.title }}</h3>
                <span class="pair-badge">双打卡组</span>
            </div>
            <div class="card-tags">
                <span class="tag type-tag tag-double">双打</span>
                <span
                    class="tag item-tag"
                    v-if="display.battle1.item"
                    @click.stop="$emit('item-click', display.battle1.item)"
                >
                    {{ displayBattle1Item }}
                </span>
                <span class="tag count-tag">{{ display.battle1.pokemons.length }}P</span>
            </div>
        </div>

        <div class="card-body">
            <!-- 第一场战斗精灵预览 -->
            <div class="pair-section">
                <div class="pokemon-preview">
                    <div v-for="(p, i) in previewBattle1Pokemons" :key="i" class="preview-avatar">
                        <img :src="getImageSrc(p.name)" :alt="p.name" loading="lazy" />
                    </div>
                    <div v-if="display.battle1.pokemons.length > 3" class="preview-more">
                        +{{ display.battle1.pokemons.length - 3 }}
                    </div>
                </div>
                <div class="level-stats">
                    <div class="stat-item">
                        <span class="stat-label">第一场均</span>
                        <span class="stat-value">{{ battle1AvgLevel }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">最高</span>
                        <span class="stat-value highlight">{{ battle1MaxLevel }}</span>
                    </div>
                </div>
            </div>

            <div class="pair-divider">
                <span>VS</span>
            </div>

            <!-- 第二场战斗精灵预览 -->
            <div class="pair-section">
                <div class="pokemon-preview">
                    <div v-for="(p, i) in previewBattle2Pokemons" :key="i" class="preview-avatar">
                        <img :src="getImageSrc(p.name)" :alt="p.name" loading="lazy" />
                    </div>
                    <div v-if="display.battle2.pokemons.length > 3" class="preview-more">
                        +{{ display.battle2.pokemons.length - 3 }}
                    </div>
                </div>
                <div class="level-stats">
                    <div class="stat-item">
                        <span class="stat-label">第二场均</span>
                        <span class="stat-value">{{ battle2AvgLevel }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">最高</span>
                        <span class="stat-value highlight">{{ battle2MaxLevel }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-arrow">
            <el-icon><ArrowRight /></el-icon>
        </div>
    </div>

    <!-- 单个战斗显示 -->
    <div v-else class="battle-card" :class="`type-${battleTypeClass}`" @click="$emit('click')">
        <div class="card-header">
            <div class="card-title-row">
                <h3 class="card-title">{{ display.battle.title }}</h3>
                <span class="battle-index">#{{ display.index + 1 }}</span>
            </div>
            <div class="card-tags">
                <span class="tag type-tag" :class="`tag-${battleTypeClass}`">
                    {{ display.battle.battle_type }}
                </span>
                <span class="tag item-tag" v-if="display.battle.item" @click.stop="$emit('item-click', display.battle.item)">
                    {{ displaySingleItem }}
                </span>
                <span class="tag count-tag">{{ display.battle.pokemons.length }}P</span>
            </div>
        </div>

        <div class="card-body">
            <!-- 精灵预览 -->
            <div class="pokemon-preview">
                <div
                    v-for="(p, i) in previewSinglePokemons"
                    :key="i"
                    class="preview-avatar"
                >
                    <img :src="getImageSrc(p.name)" :alt="p.name" loading="lazy" />
                </div>
                <div v-if="display.battle.pokemons.length > 3" class="preview-more">
                    +{{ display.battle.pokemons.length - 3 }}
                </div>
            </div>

            <!-- 等级统计 -->
            <div class="level-stats">
                <div class="stat-item">
                    <span class="stat-label">均</span>
                    <span class="stat-value">{{ singleAvgLevel }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">最高</span>
                    <span class="stat-value highlight">{{ singleMaxLevel }}</span>
                </div>
            </div>
        </div>

        <div class="card-arrow">
            <el-icon><ArrowRight /></el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import type { BattleInfo } from '@/types/trainer';
import { getImageSrc } from '@/composables/usePokemonImage';

// 双打卡组类型
interface DoubleBattlePair {
    type: 'pair';
    battle1: BattleInfo;
    battle2: BattleInfo;
    index1: number;
    index2: number;
}

// 单战斗类型
interface SingleBattle {
    type: 'single';
    battle: BattleInfo;
    index: number;
}

type BattleDisplay = DoubleBattlePair | SingleBattle;

const props = defineProps<{
    display: BattleDisplay;
}>();

defineEmits<{
    click: [];
    'item-click': [item: string];
}>();

// 双打卡组相关计算
const previewBattle1Pokemons = computed(() =>
    props.display.type === 'pair' ? props.display.battle1.pokemons.slice(0, 3) : []
);

const previewBattle2Pokemons = computed(() =>
    props.display.type === 'pair' ? props.display.battle2.pokemons.slice(0, 3) : []
);

const battle1AvgLevel = computed(() => {
    if (props.display.type !== 'pair') return 0;
    const levels = props.display.battle1.pokemons.map(p => p.level);
    return Math.round(levels.reduce((sum, lv) => sum + lv, 0) / levels.length);
});

const battle1MaxLevel = computed(() =>
    props.display.type === 'pair'
        ? Math.max(...props.display.battle1.pokemons.map(p => p.level))
        : 0
);

const battle2AvgLevel = computed(() => {
    if (props.display.type !== 'pair') return 0;
    const levels = props.display.battle2.pokemons.map(p => p.level);
    return Math.round(levels.reduce((sum, lv) => sum + lv, 0) / levels.length);
});

const battle2MaxLevel = computed(() =>
    props.display.type === 'pair'
        ? Math.max(...props.display.battle2.pokemons.map(p => p.level))
        : 0
);

const displayBattle1Item = computed(() => {
    if (props.display.type !== 'pair') return '';
    return cleanItem(props.display.battle1.item);
});

// 单战斗相关计算
const previewSinglePokemons = computed(() =>
    props.display.type === 'single' ? props.display.battle.pokemons.slice(0, 3) : []
);

const singleAvgLevel = computed(() => {
    if (props.display.type !== 'single') return 0;
    const levels = props.display.battle.pokemons.map(p => p.level);
    return Math.round(levels.reduce((sum, lv) => sum + lv, 0) / levels.length);
});

const singleMaxLevel = computed(() =>
    props.display.type === 'single'
        ? Math.max(...props.display.battle.pokemons.map(p => p.level))
        : 0
);

const displaySingleItem = computed(() =>
    props.display.type === 'single' ? cleanItem(props.display.battle.item) : ''
);

const battleTypeClass = computed(() => {
    const battle = props.display.type === 'single' ? props.display.battle : props.display.battle1;
    const map: Record<string, string> = {
        '单打': 'single',
        '双打': 'double',
        '群战': 'group',
        '三打': 'triple',
        '一番战': 'first'
    };
    return map[battle.battle_type] || 'single';
});

// 清理道具名称的工具函数
function cleanItem(item: string): string {
    const battleTypes = ['单打', '双打', '群战', '三打', '一番战'];
    let cleanItem = item;
    for (const type of battleTypes) {
        if (cleanItem.startsWith(type + '，')) {
            cleanItem = cleanItem.replace(type + '，', '');
            break;
        }
    }
    return cleanItem.split(/[,，]/)[0].replace(/\*\d+$/, '');
}
</script>

<style scoped lang="scss">
.battle-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &.double-pair {
        background: rgba(243, 232, 255, 0.85);
        border-color: rgba(156, 39, 176, 0.2);
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    &:hover {
        border-color: rgba(64, 158, 255, 0.3);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }

    &.double-pair:hover {
        border-color: rgba(156, 39, 176, 0.4);
    }
}

.card-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.card-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-title {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #2c3e50;
    flex: 1;
}

.battle-index {
    font-size: 12px;
    color: #c0c4cc;
    font-weight: 600;
}

.pair-badge {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    background: #9c27b0;
    color: #fff;
    box-shadow: 0 2px 8px rgba(156, 39, 176, 0.3);
}

.card-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.tag {
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 6px;
}

.type-tag {
    &.tag-single { background: #ecf5ff; color: #409eff; border: 1px solid #d9ecff; }
    &.tag-double { background: #f3e8ff; color: #9c27b0; border: 1px solid #e8d5f5; }
    &.tag-group  { background: #fff7ed; color: #ff9800; border: 1px solid #ffe0b2; }
    &.tag-triple { background: #f0fdf4; color: #67c23a; border: 1px solid #d1fae5; }
    &.tag-first  { background: #fef2f2; color: #f56c6c; border: 1px solid #fecaca; }
}

.item-tag {
    background: #fff7ed;
    color: #ea580c;
    border: 1px solid #ffedd5;
    cursor: pointer;
    &:hover { background: #ffedd5; }
}

.count-tag {
    background: #f1f5f9;
    color: #475569;
}

.card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pair-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .pair-divider {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        font-size: 10px;
        font-weight: 800;
        color: #fff;
        box-shadow: 0 2px 8px rgba(156, 39, 176, 0.3);
        flex-shrink: 0;
    }
}

.pokemon-preview {
    display: flex;
    align-items: center;
    gap: -8px;

    .preview-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #f0f4f8;
        border: 2px solid #fff;
        overflow: hidden;
        margin-right: -8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .preview-more {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #e2e8f0;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
        color: #64748b;
        margin-right: -8px;
    }
}

.level-stats {
    display: flex;
    gap: 12px;

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        .stat-label {
            font-size: 10px;
            color: #909399;
        }

        .stat-value {
            font-size: 14px;
            font-weight: 700;
            color: #475569;

            &.highlight {
                color: #409eff;
            }
        }
    }
}

.card-arrow {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #dcdfe6;
    transition: all 0.2s;
}

.battle-card:hover .card-arrow {
    transform: translateY(-50%) translateX(3px);
    color: #409eff;
}
</style>
