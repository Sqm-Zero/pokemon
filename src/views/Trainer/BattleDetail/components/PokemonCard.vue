<template>
    <div class="pokemon-card" @click="$emit('click')" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <div class="poke-avatar-wrapper">
            <img :src="getImageSrc(pokemon.name)" :alt="pokemon.name" loading="lazy" class="poke-img" />
            <span class="lv-badge">Lv.{{ pokemon.level }}</span>
        </div>

        <div class="poke-info">
            <div class="name-row">
                <span class="name">{{ processPokemonName(pokemon.name) }}</span>
                <span class="ability">{{ pokemon.ability }}</span>
            </div>

            <div class="item-row" v-if="pokemon.item" @click.stop="$emit('item-click', pokemon.item)">
                <el-icon><Present /></el-icon>
                <span>{{ pokemon.item }}</span>
            </div>

            <div class="moves-grid">
                <span
                    v-for="(move, i) in pokemon.moves"
                    :key="i"
                    class="move-chip"
                    @click.stop="$emit('move-click', move)"
                >
                    {{ move.replace(/\*\d+$/, '') }}
                </span>
            </div>
        </div>
    </div>

    <!-- 长按预览弹窗 -->
    <Teleport to="body">
        <div v-if="showPreview" class="preview-overlay" @click="showPreview = false">
            <div class="preview-card" @click.stop>
                <img :src="getImageSrc(pokemon.name)" :alt="pokemon.name" class="preview-img" />
                <h3>{{ processPokemonName(pokemon.name) }}</h3>
                <p>Lv.{{ pokemon.level }} · {{ pokemon.ability }}</p>
                <button class="close-btn" @click="showPreview = false">关闭</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Present } from '@element-plus/icons-vue';
import type { Pokemon } from '@/types/trainer';
import { processPokemonName } from '@/composables/usePokemonName';
import { getImageSrc } from '@/composables/usePokemonImage';

defineProps<{ pokemon: Pokemon }>();
defineEmits<{
    click: [];
    'item-click': [item: string];
    'move-click': [move: string];
}>();

const showPreview = ref(false);
let longPressTimer: ReturnType<typeof setTimeout> | null = null;

function onTouchStart() {
    longPressTimer = setTimeout(() => {
        showPreview.value = true;
    }, 500);
}

function onTouchEnd() {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
}
</script>

<style scoped lang="scss">
.pokemon-card {
    background: #fff;
    border-radius: 16px;
    padding: 14px;
    display: flex;
    gap: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid #edf2f7;
    cursor: pointer;
    transition: all 0.2s ease;

    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
    }

    &:hover {
        border-color: #d1e9ff;
        box-shadow: 0 4px 16px rgba(64, 158, 255, 0.1);
    }
}

.poke-avatar-wrapper {
    position: relative;
    flex-shrink: 0;

    .poke-img {
        width: 72px;
        height: 72px;
        object-fit: contain;
    }

    .lv-badge {
        position: absolute;
        bottom: -2px;
        right: -4px;
        background: #475569;
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        padding: 2px 5px;
        border-radius: 6px;
        white-space: nowrap;
    }
}

.poke-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.name-row {
    display: flex;
    align-items: baseline;
    gap: 8px;

    .name {
        font-size: 15px;
        font-weight: 700;
        color: #2d3748;
    }

    .ability {
        font-size: 12px;
        color: #718096;
    }
}

.item-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #4a5568;
    cursor: pointer;

    &:hover { color: #409eff; }
}

.moves-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;

    .move-chip {
        background: #f1f5f9;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 11px;
        color: #475569;
        text-align: center;
        border: 1px solid #e2e8f0;
        cursor: pointer;
        transition: all 0.15s;

        &:hover {
            border-color: #409eff;
            background: #ecf5ff;
            color: #409eff;
        }
    }
}

/* 长按预览 */
.preview-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-card {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    min-width: 200px;

    .preview-img {
        width: 120px;
        height: 120px;
        object-fit: contain;
    }

    h3 {
        margin: 8px 0 4px;
        font-size: 18px;
        color: #2d3748;
    }

    p {
        font-size: 13px;
        color: #718096;
        margin: 0 0 16px;
    }

    .close-btn {
        background: #409eff;
        color: #fff;
        border: none;
        padding: 8px 24px;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
    }
}
</style>
