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
                v-for="(battle, index) in battles"
                :key="index"
                :battle="battle"
                :index="index"
                @click="handleBattleClick(index)"
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

const battles = ref<BattleInfo[]>([]);

onMounted(() => {
    const allData: any = version.value === 'hardcore' ? reqYHNPC() : reqNPC();
    battles.value = allData[groupName] || [];
});

function handleBattleClick(index: number) {
    $router.push({
        name: 'BattleDetail',
        params: {
            groupName: encodeURIComponent(groupName),
            battleIndex: index
        },
        query: { version: version.value }
    });
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
