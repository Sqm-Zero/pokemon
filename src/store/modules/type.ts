import type { Pokemon } from '@/apis/pokemon/type'
import type { Prop } from '@/apis/props/type'

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
    scrollPosition: number
}