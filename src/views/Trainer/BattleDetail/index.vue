<template>
    <div
        class="battle-detail"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <div class="sticky-header">
            <Top
                :title="isDoublePair ? `双打卡组 #${currentIndex + 1}&${pairIndex + 1}` : `${currentIndex + 1} / ${battles.length}`"
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
            <!-- 双打卡组显示模式 -->
            <template v-if="isDoublePair && pairBattle">
                <div class="battle-pair-container">
                    <!-- 第一场战斗 -->
                    <div class="battle-section">
                        <div class="battle-section-header">
                            <span class="battle-badge">第一场</span>
                            <span class="battle-title">{{ currentBattle.title }}</span>
                        </div>
                        <BattleInfoComp :battle="currentBattle" @item-click="handlePropInfo" />
                        <BattleStats :stats="battle1Stats" />
                        <div class="pokemon-section">
                            <div class="section-header">
                                <span class="section-title">精灵阵容</span>
                                <span class="pokemon-count">{{ currentBattle.pokemons.length }} 只</span>
                            </div>
                            <div class="pokemon-list">
                                <PokemonCard
                                    v-for="(p, i) in currentBattle.pokemons"
                                    :key="`b1-${i}`"
                                    :pokemon="p"
                                    @click="handlePokemonInfo(p)"
                                    @item-click="handlePropInfo"
                                    @move-click="handleMoveInfo"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- 分隔符 -->
                    <div class="pair-divider">
                        <div class="divider-content">
                            <span>VS</span>
                            <span>第二场战斗</span>
                        </div>
                    </div>

                    <!-- 第二场战斗 -->
                    <div class="battle-section">
                        <div class="battle-section-header">
                            <span class="battle-badge">第二场</span>
                            <span class="battle-title">{{ pairBattle.title }}</span>
                        </div>
                        <BattleInfoComp :battle="pairBattle" @item-click="handlePropInfo" />
                        <BattleStats :stats="battle2Stats" />
                        <div class="pokemon-section">
                            <div class="section-header">
                                <span class="section-title">精灵阵容</span>
                                <span class="pokemon-count">{{ pairBattle.pokemons.length }} 只</span>
                            </div>
                            <div class="pokemon-list">
                                <PokemonCard
                                    v-for="(p, i) in pairBattle.pokemons"
                                    :key="`b2-${i}`"
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

            <!-- 单战斗显示模式 -->
            <template v-else>
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
            </template>
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
const pairIndex = ref(Number(route.query.pairIndex) || -1);
const currentBattle = computed<BattleInfo | undefined>(() => battles.value[currentIndex.value]);
const pairBattle = computed<BattleInfo | undefined>(() =>
    pairIndex.value >= 0 ? battles.value[pairIndex.value] : undefined
);
const isDoublePair = computed(() => pairBattle.value !== undefined);

const { stats } = useBattleStats(currentBattle);
const { stats: battle1Stats } = useBattleStats(currentBattle);

const computedPairBattle = computed(() => pairBattle.value);
const { stats: battle2Stats } = useBattleStats(computedPairBattle);

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
    const query: any = { version: version.value };
    if (isDoublePair.value && pairIndex.value >= 0) {
        query.pairIndex = String(pairIndex.value);
    }

    $router.replace({
        name: 'BattleDetail',
        params: {
            groupName: encodeURIComponent(groupName),
            battleIndex: currentIndex.value
        },
        query
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

    .battle-pair-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .battle-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 16px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        border: 1px solid rgba(156, 39, 176, 0.1);
    }

    .battle-section-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 8px;
        border-bottom: 2px solid rgba(156, 39, 176, 0.15);
    }

    .battle-badge {
        font-size: 10px;
        font-weight: 800;
        padding: 4px 10px;
        border-radius: 20px;
        background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%);
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 8px rgba(156, 39, 176, 0.2);
    }

    .battle-title {
        font-size: 14px;
        font-weight: 700;
        color: #2c3e50;
    }

    .pair-divider {
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
            content: '';
            position: absolute;
            left: 20px;
            right: 20px;
            top: 50%;
            height: 1px;
            background: linear-gradient(90deg,
                transparent 0%,
                rgba(156, 39, 176, 0.2) 50%,
                transparent 100%
            );
            z-index: 1;
        }
    }

    .divider-content {
        position: relative;
        z-index: 2;
        background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%);
        color: #fff;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);

        span:first-child {
            font-size: 14px;
            font-weight: 800;
        }

        span:last-child {
            font-size: 10px;
            opacity: 0.9;
        }
    }
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
