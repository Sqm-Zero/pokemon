/** 种族值顺序与 Information / pokemonNatures 一致：HP, 攻击, 防御, 特攻, 特防, 速度 */
export const BASE_STAT_OPTIONS = [
    { key: 'hp', label: 'HP', index: 0 },
    { key: 'atk', label: '攻击', index: 1 },
    { key: 'def', label: '防御', index: 2 },
    { key: 'spa', label: '特攻', index: 3 },
    { key: 'spd', label: '特防', index: 4 },
    { key: 'spe', label: '速度', index: 5 }
] as const;

export type BaseStatKey = (typeof BASE_STAT_OPTIONS)[number]['key'];

export function baseStatIndex(key: BaseStatKey): number {
    return BASE_STAT_OPTIONS.find(o => o.key === key)!.index;
}
