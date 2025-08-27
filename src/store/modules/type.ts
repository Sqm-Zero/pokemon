import type { Pokemon } from '@/apis/pokemon/type'

export interface Pokemon_Type {
    PokemonList: Pokemon[] | [],
    Pokemon: Pokemon,
    colorMap: any,
    Move: any,
    type: string,
    pokemonQuery: string,
    abilityName: string,
    lastSelectedType: string,
    scrollPosition: number
}