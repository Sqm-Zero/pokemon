import type { Pokemon } from '@/apis/pokemon/type'
import type { Prop } from '@/apis/props/type'
import type { BaseStatKey } from '@/constants/pokemonBaseStats'

export type PokemonListStatsSortField = 'dex' | 'total' | BaseStatKey

export interface Pokemon_Type {
    PokemonList: Pokemon[] | [],
    Pokemon: Pokemon,
    colorMap: any,
    Move: any,
    Prop: Prop,
    type: string,
    pokemonQuery: string,
    abilityName: string,
    lastSelectedType: string,
    scrollPosition: number,
    /** 总种族值下限，null 表示不限制 */
    statsTotalMin: number | null,
    /** 总种族值上限，null 表示不限制 */
    statsTotalMax: number | null,
    /** 按单项种族值筛选时选中的能力项，null 表示不按单项筛范围 */
    statsRangeStatKey: BaseStatKey | null,
    statsRangeStatMin: number | null,
    statsRangeStatMax: number | null,
    statsSortField: PokemonListStatsSortField,
    /** 图鉴顺序时不使用；desc：高→低，asc：低→高 */
    statsSortOrder: 'asc' | 'desc'
}