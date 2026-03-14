<template>
    <div class="battle-card" :class="`type-${battleTypeClass}`" @click="$emit('click')">
        <div class="card-header">
            <div class="card-title-row">
                <h3 class="card-title">{{ battle.title }}</h3>
                <span class="battle-index">#{{ index + 1 }}</span>
            </div>
            <div class="card-tags">
                <span class="tag type-tag" :class="`tag-${battleTypeClass}`">
                    {{ battle.battle_type }}
                </span>
                <span class="tag item-tag" v-if="battle.item" @click.stop="$emit('item-click', battle.item)">
                    {{ displayItem }}
                </span>
                <span class="tag count-tag">{{ battle.pokemons.length }}P</span>
            </div>
        </div>

        <div class="card-body">
            <!-- 精灵预览 -->
            <div class="pokemon-preview">
                <div
                    v-for="(p, i) in previewPokemons"
                    :key="i"
                    class="preview-avatar"
                >
                    <img :src="getImageSrc(p.name)" :alt="p.name" loading="lazy" />
                </div>
                <div v-if="battle.pokemons.length > 3" class="preview-more">
                    +{{ battle.pokemons.length - 3 }}
                </div>
            </div>

            <!-- 等级统计 -->
            <div class="level-stats">
                <div class="stat-item">
                    <span class="stat-label">均</span>
                    <span class="stat-value">{{ avgLevel }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">最高</span>
                    <span class="stat-value highlight">{{ maxLevel }}</span>
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

const props = defineProps<{
    battle: BattleInfo;
    index: number;
}>();

defineEmits<{
    click: [];
    'item-click': [item: string];
}>();

const previewPokemons = computed(() => props.battle.pokemons.slice(0, 3));

const avgLevel = computed(() => {
    const levels = props.battle.pokemons.map(p => p.level);
    return Math.round(levels.reduce((sum, lv) => sum + lv, 0) / levels.length);
});

const maxLevel = computed(() => Math.max(...props.battle.pokemons.map(p => p.level)));

const displayItem = computed(() => {
    const battleTypes = ['单打', '双打', '群战', '三打', '一番战'];
    let item = props.battle.item;
    for (const type of battleTypes) {
        if (item.startsWith(type + '，')) {
            item = item.replace(type + '，', '');
            break;
        }
    }
    return item.split(/[,，]/)[0].replace(/\*\d+$/, '');
});

const battleTypeClass = computed(() => {
    const map: Record<string, string> = {
        '单打': 'single',
        '双打': 'double',
        '群战': 'group',
        '三打': 'triple',
        '一番战': 'first'
    };
    return map[props.battle.battle_type] || 'single';
});
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

    &:active {
        transform: scale(0.98);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    &:hover {
        border-color: rgba(64, 158, 255, 0.3);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
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
