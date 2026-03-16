<template>
    <div
        class="battle-detail"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <div class="sticky-header">
            <Top
                :title="`${currentIndex + 1} / ${battles.length}`"
                :router="`/trainer/group/${route.params.groupName}`"
                color="transparent"
            />
            <div class="nav-arrows">
                <button class="nav-btn" :disabled="currentIndex === 0" @click="prevBattle">
                    <el-icon><ArrowLeft /></el-icon>
                </button>
                <button class="nav-btn" :disabled="currentIndex === battles.length - 1" @click="nextBattle">
                    <el-icon><ArrowRight /></el-icon>
                </button>
            </div>
        </div>

        <div class="detail-container" v-if="currentBattle">
            <BattleInfoComp :battle="currentBattle" @item-click="handlePropInfo" />

            <BattleStats :stats="stats" />

            <div class="pokemon-section">
                <div class="section-header">
                    <span class="section-title">精灵阵容</span>
                    <span class="pokemon-count">{{ currentBattle.pokemons.length }} 只</span>
                </div>
                <div class="pokemon-list">
                    <PokemonCard
                        v-for="(p, i) in currentBattle.pokemons"
                        :key="i"
                        :pokemon="p"
                        @click="handlePokemonInfo(p)"
                        @item-click="handlePropInfo"
                        @move-click="handleMoveInfo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { reqNPC, reqYHNPC } from '@/apis/npc';
import { usePokemonStore } from '@/store/modules/pokemon';
import { useBattleStats } from '@/composables/useBattleStats';
import { useScrollMemory } from '@/composables/useScrollMemory';
import { restorePokemonRawName, processPokemonName } from '@/composables/usePokemonName';
import BattleInfoComp from './components/BattleInfo.vue';
import BattleStats from './components/BattleStats.vue';
import PokemonCard from './components/PokemonCard.vue';
import type { BattleInfo, Pokemon } from '@/types/trainer';

const route = useRoute();
const $router = useRouter();
const pokemonStore = usePokemonStore();
const { saveScrollPosition, restoreScrollPosition } = useScrollMemory();

const groupName = decodeURIComponent(route.params.groupName as string);
const version = computed<'normal' | 'hardcore'>(() =>
    route.query.version === 'hardcore' ? 'hardcore' : 'normal'
);

const battles = ref<BattleInfo[]>([]);
const currentIndex = ref(Number(route.params.battleIndex) || 0);
const currentBattle = computed<BattleInfo | undefined>(() => battles.value[currentIndex.value]);

const { stats } = useBattleStats(currentBattle);

onMounted(() => {
    const allData: any = version.value === 'hardcore' ? reqYHNPC() : reqNPC();
    battles.value = allData[groupName] || [];
    restoreScrollPosition();
});

function prevBattle() {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        updateRoute();
    }
}

function nextBattle() {
    if (currentIndex.value < battles.value.length - 1) {
        currentIndex.value++;
        updateRoute();
    }
}

function updateRoute() {
    $router.replace({
        name: 'BattleDetail',
        params: {
            groupName: encodeURIComponent(groupName),
            battleIndex: currentIndex.value
        },
        query: { version: version.value }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 手势切换
let touchStartX = 0;

function onTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
}

function onTouchEnd(e: TouchEvent) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
        diff > 0 ? nextBattle() : prevBattle();
    }
}

function handlePokemonInfo(pokemon: Pokemon) {
    saveScrollPosition();
    const rawName = restorePokemonRawName(processPokemonName(pokemon.name));
    const num = String(Number(pokemonStore.getPokemonIdByName(rawName)));
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(num);
    $router.push('/pokemon/info');
}

function handleMoveInfo(moveName: string) {
    const cleanMoveName = moveName.replace(/\*\d+$/, '');
    pokemonStore.Move = pokemonStore.getMoveByName(cleanMoveName);
    $router.push('/move/move_info');
}

function handlePropInfo(propName: string) {
    const battleTypes = ['单打', '双打', '群战', '三打', '一番战'];
    let cleanItemStr = propName;
    for (const type of battleTypes) {
        if (cleanItemStr.startsWith(type + '，')) {
            cleanItemStr = cleanItemStr.replace(type + '，', '');
            break;
        }
    }
    const cleanPropName = cleanItemStr.split(/[,，]/)[0].trim().replace(/\*\d+$/, '');
    pokemonStore.Prop = pokemonStore.getPropByName(cleanPropName);
    $router.push('/prop/prop_info');
}
</script>

<style scoped lang="scss">
.battle-detail {
    min-height: 100vh;
    background: #f0f4f8;
}

.sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 12px;
}

.nav-arrows {
    display: flex;
    gap: 6px;
}

.nav-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e8f0;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #475569;
    transition: all 0.2s;

    &:hover:not(:disabled) {
        border-color: #409eff;
        color: #409eff;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
}

.detail-container {
    padding: 12px 16px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 40px;
}

.pokemon-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;

    .section-title {
        font-size: 14px;
        font-weight: 700;
        color: #2c3e50;
    }

    .pokemon-count {
        font-size: 12px;
        color: #909399;
    }
}

.pokemon-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
