<template>
    <div class="battle-list">
        <div class="sticky-header">
            <Top :title="groupName" router="/trainer" color="transparent" />
            <div class="version-badge" :class="version">
                {{ version === 'hardcore' ? '噩梦版' : '挑战版' }}
            </div>
        </div>

        <div class="list-container">
            <div class="list-summary">
                共 {{ battles.length }} 场战斗
            </div>

            <BattleCard
                v-for="(display, index) in displayBattles"
                :key="index"
                :display="display"
                @click="handleDisplayClick(display)"
                @item-click="handlePropInfo"
            />

            <div v-if="!battles.length" class="empty-state">
                <p>该分组暂无战斗数据</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { reqNPC, reqYHNPC } from '@/apis/npc';
import { usePokemonStore } from '@/store/modules/pokemon';
import BattleCard from './components/BattleCard.vue';
import type { BattleInfo } from '@/types/trainer';

const route = useRoute();
const $router = useRouter();
const pokemonStore = usePokemonStore();

const groupName = decodeURIComponent(route.params.groupName as string);
const version = computed<'normal' | 'hardcore'>(() =>
    route.query.version === 'hardcore' ? 'hardcore' : 'normal'
);

// 双打卡组类型
interface DoubleBattlePair {
    type: 'pair';
    battle1: BattleInfo;
    battle2: BattleInfo;
    index1: number;
    index2: number;
}

// 单战斗类型（用于单打或其他类型）
interface SingleBattle {
    type: 'single';
    battle: BattleInfo;
    index: number;
}

type BattleDisplay = DoubleBattlePair | SingleBattle;

const battles = ref<BattleInfo[]>([]);
const displayBattles = ref<BattleDisplay[]>([]);

// 识别和组合双打战斗
function groupDoubleBattles(battleList: BattleInfo[]): BattleDisplay[] {
    const result: BattleDisplay[] = [];
    let i = 0;

    while (i < battleList.length) {
        const current = battleList[i];
        const isDoubleBattle = current.item.includes('双打');

        if (isDoubleBattle && i + 1 < battleList.length) {
            const next = battleList[i + 1];
            const isNextDoubleBattle = next.item.includes('双打');

            if (isNextDoubleBattle) {
                // 组合成双打卡组
                result.push({
                    type: 'pair',
                    battle1: current,
                    battle2: next,
                    index1: i,
                    index2: i + 1
                });
                i += 2; // 跳过这两场战斗
                continue;
            }
        }

        // 单独显示
        result.push({
            type: 'single',
            battle: current,
            index: i
        });
        i++;
    }

    return result;
}

onMounted(() => {
    const allData: any = version.value === 'hardcore' ? reqYHNPC() : reqNPC();
    battles.value = allData[groupName] || [];
    displayBattles.value = groupDoubleBattles(battles.value);
});

function handleDisplayClick(display: BattleDisplay) {
    if (display.type === 'single') {
        // 单打战斗，正常跳转
        $router.push({
            name: 'BattleDetail',
            params: {
                groupName: encodeURIComponent(groupName),
                battleIndex: display.index
            },
            query: { version: version.value }
        });
    } else {
        // 双打卡组，跳转到第一场战斗，但携带第二场的索引
        $router.push({
            name: 'BattleDetail',
            params: {
                groupName: encodeURIComponent(groupName),
                battleIndex: display.index1
            },
            query: {
                version: version.value,
                pairIndex: String(display.index2) // 携带配对战斗的索引
            }
        });
    }
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
.battle-list {
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
    padding-right: 16px;
}

.version-badge {
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;

    &.normal {
        background: #ecf5ff;
        color: #409eff;
    }

    &.hardcore {
        background: #fef2f2;
        color: #f56c6c;
    }
}

.list-container {
    padding: 12px 16px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.list-summary {
    font-size: 13px;
    color: #909399;
    padding: 4px 0;
}

.empty-state {
    text-align: center;
    padding: 60px 0;
    color: #c0c4cc;
    font-size: 14px;
}
</style>
