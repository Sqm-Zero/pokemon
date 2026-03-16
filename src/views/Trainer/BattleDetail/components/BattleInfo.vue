<template>
    <div class="battle-info">
        <h2 class="battle-title">{{ battle.title }}</h2>
        <div class="battle-meta">
            <span class="meta-tag type-tag" :class="`tag-${battleTypeClass}`">
                {{ battle.battle_type }}
            </span>
            <span class="meta-tag item-tag" v-if="battle.item" @click="$emit('item-click', battle.item)">
                {{ displayItem }}
            </span>
            <span class="meta-tag location-tag" v-if="battle.location">
                {{ battle.location }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BattleInfo } from '@/types/trainer';

const props = defineProps<{ battle: BattleInfo }>();
defineEmits<{ 'item-click': [item: string] }>();

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
.battle-info {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.battle-title {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
    color: #2c3e50;
}

.battle-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.meta-tag {
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 8px;
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

.location-tag {
    background: #f1f5f9;
    color: #64748b;
    border: 1px solid #e2e8f0;
}
</style>
