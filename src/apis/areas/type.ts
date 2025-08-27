// 生成的 TypeScript 代码
export interface PokemonEncounter {
    rate: string;
    name: string;
    level: number;
    forme: number;
}

export interface EncounterMethods {
    "Good Rod": PokemonEncounter[] | [];
    "Grass": PokemonEncounter[] | [];
    "Old Rod": PokemonEncounter[] | [];
    "Rock Smash": PokemonEncounter[] | [];
    "Super Rod": PokemonEncounter[] | [];
    "Surf": PokemonEncounter[] | [];
    "Swarm": PokemonEncounter[] | [];
    "Tall Grass": PokemonEncounter[] | [];
}

export interface LocationData {
    [locationName: string]: EncounterMethods;
}