import { usePokemonStore } from '@/store/modules/pokemon';
import { restorePokemonRawName } from './usePokemonName';

/**
 * 获取精灵编号
 * @param name 精灵名称
 * @returns 精灵编号
 */
export function getPokemonNumberByName(name: string): string {
    const pokemonStore = usePokemonStore();
    return pokemonStore.getPokemonIdByName(name);
}

/**
 * 获取精灵图片src
 * @param name 精灵显示名称
 * @returns 图片URL
 */
export function getImageSrc(name: string): string {
    const rawName = restorePokemonRawName(name);
    const num = String(Number(getPokemonNumberByName(rawName)));
    return new URL(`/src/assets/images/pokemonList_images/${num}.png`, import.meta.url).href;
}

/**
 * 精灵图片处理 composable
 */
export function usePokemonImage() {
    return {
        getPokemonNumberByName,
        getImageSrc
    };
}
