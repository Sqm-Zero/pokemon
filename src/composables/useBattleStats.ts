import { computed, type Ref, type ComputedRef } from 'vue';
import type { BattleInfo, BattleStats, AttributeDistribution } from '@/types/trainer';
import { usePokemonStore } from '@/store/modules/pokemon';
import { restorePokemonRawName } from './usePokemonName';

/**
 * 战斗统计计算 composable
 * @param battle 战斗信息（ref 或 computed）
 */
export function useBattleStats(battle: Ref<BattleInfo | undefined> | ComputedRef<BattleInfo | undefined>) {
    const pokemonStore = usePokemonStore();

    const levelAnalysis = computed(() => {
        if (!battle.value) return { average: 0, max: 0, min: 0 };
        const levels = battle.value.pokemons.map(p => p.level);
        return {
            average: Math.round(levels.reduce((sum, lv) => sum + lv, 0) / levels.length),
            max: Math.max(...levels),
            min: Math.min(...levels)
        };
    });

    const attributeDistribution = computed<AttributeDistribution[]>(() => {
        if (!battle.value) return [];
        const attributeMap = new Map<string, number>();

        battle.value.pokemons.forEach(p => {
            const rawName = restorePokemonRawName(p.name);
            const id = Number(pokemonStore.getPokemonIdByName(rawName));
            const pokemon = pokemonStore.getPokemonByName(id);
            if (pokemon && pokemon.属性) {
                (pokemon.属性 as string[]).filter(Boolean).forEach(type => {
                    attributeMap.set(type, (attributeMap.get(type) || 0) + 1);
                });
            }
        });

        const total = battle.value.pokemons.length;
        return Array.from(attributeMap.entries())
            .map(([attribute, count]) => ({
                attribute,
                count,
                percentage: Math.round((count / total) * 100)
            }))
            .sort((a, b) => b.count - a.count);
    });

    const counterRecommendations = computed<string[]>(() => {
        const counterMap: Record<string, string[]> = {
            '水': ['草', '电'],
            '火': ['水', '地面', '岩石'],
            '草': ['火', '冰', '毒', '飞行', '虫'],
            '电': ['地面'],
            '冰': ['火', '格斗', '岩石', '钢'],
            '格斗': ['飞行', '超能力', '妖精'],
            '毒': ['地面', '超能力'],
            '地面': ['水', '草', '冰'],
            '飞行': ['电', '冰', '岩石'],
            '超能力': ['虫', '幽灵', '恶'],
            '虫': ['火', '飞行', '岩石'],
            '岩石': ['水', '草', '格斗', '地面', '钢'],
            '幽灵': ['幽灵', '恶'],
            '龙': ['冰', '龙', '妖精'],
            '恶': ['格斗', '虫', '妖精'],
            '钢': ['火', '格斗', '地面'],
            '妖精': ['毒', '钢']
        };

        const recommendations = new Set<string>();
        attributeDistribution.value.forEach(({ attribute }) => {
            (counterMap[attribute] || []).forEach(c => recommendations.add(c));
        });
        return Array.from(recommendations).slice(0, 5);
    });

    const stats = computed<BattleStats>(() => ({
        levelAnalysis: levelAnalysis.value,
        attributeDistribution: attributeDistribution.value,
        counterRecommendations: counterRecommendations.value
    }));

    return { stats, levelAnalysis, attributeDistribution, counterRecommendations };
}
