import type { Pokemon } from '@/apis/pokemon/type';

/** 与图鉴详情页相同：Gen3+ 标准性格倍率（「认真」为全能力无修正） */
export const POKEMON_NATURES: Record<
    string,
    {
        name: string;
        attack: number;
        defense: number;
        speed: number;
        specialAttack: number;
        specialDefense: number;
        description: string;
    }
> = {
    勤奋: {
        name: '勤奋',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    怕寂寞: {
        name: '怕寂寞',
        attack: 1.1,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '攻击提升，防御降低'
    },
    固执: {
        name: '固执',
        attack: 1.1,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '攻击提升，特攻降低'
    },
    顽皮: {
        name: '顽皮',
        attack: 1.1,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '攻击提升，特防降低'
    },
    勇敢: {
        name: '勇敢',
        attack: 1.1,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '攻击提升，速度降低'
    },
    大胆: {
        name: '大胆',
        attack: 0.9,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '防御提升，攻击降低'
    },
    坦率: {
        name: '坦率',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    淘气: {
        name: '淘气',
        attack: 1.0,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '防御提升，特攻降低'
    },
    乐天: {
        name: '乐天',
        attack: 1.0,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '防御提升，特防降低'
    },
    悠闲: {
        name: '悠闲',
        attack: 1.0,
        defense: 1.1,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '防御提升，速度降低'
    },
    内敛: {
        name: '内敛',
        attack: 0.9,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，攻击降低'
    },
    慢吞吞: {
        name: '慢吞吞',
        attack: 1.0,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，防御降低'
    },
    害羞: {
        name: '害羞',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    马虎: {
        name: '马虎',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 0.9,
        description: '特功提升，特防降低'
    },
    冷静: {
        name: '冷静',
        attack: 1.0,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，速度降低'
    },
    温和: {
        name: '温和',
        attack: 0.9,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，攻击降低'
    },
    温顺: {
        name: '温顺',
        attack: 1.0,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，防御降低'
    },
    慎重: {
        name: '慎重',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.1,
        description: '特防提升，特攻降低'
    },
    自大: {
        name: '自大',
        attack: 1.0,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，速度降低'
    },
    胆小: {
        name: '胆小',
        attack: 0.9,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '速度提升，攻击降低'
    },
    浮躁: {
        name: '浮躁',
        attack: 1.0,
        defense: 0.9,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '速度提升，防御降低'
    },
    爽朗: {
        name: '爽朗',
        attack: 1.0,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '速度提升，特攻降低'
    },
    天真: {
        name: '天真',
        attack: 1.0,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '速度提升，特防降低'
    },
    认真: {
        name: '认真',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    }
};

export const NATURE_LIST = Object.values(POKEMON_NATURES);

export const NATURE_NAME_KEYS = Object.keys(POKEMON_NATURES);

/** 对应种族值数组下标 1～5：攻、防、特攻、特防、速度 */
export const NATURE_STAT_KEYS = ['attack', 'defense', 'specialAttack', 'specialDefense', 'speed'] as const;

/** 与图鉴详情页 `calculateSingleStat` 一致 */
export function calculateSingleStat(
    baseStat: number,
    individualValue: number,
    effortValue: number,
    level: number,
    natureModifier: number,
    isHP: boolean = false
): number {
    const baseCalculation = isHP
        ? Math.floor(
              ((baseStat * 2 + individualValue + Math.floor(effortValue / 4)) * level) / 100 + 10 + level
          )
        : Math.floor(((baseStat * 2 + individualValue + Math.floor(effortValue / 4)) * level) / 100 + 5);

    return isHP ? baseCalculation : Math.floor(baseCalculation * natureModifier);
}

/** 种族值顺序：HP, 攻击, 防御, 特攻, 特防, 速度 */
export function computePokemonStatsAtLevel(
    pokemon: Pokemon,
    level: number,
    natureName: string,
    iv: number[],
    ev: number[]
): number[] {
    const lv = Math.max(1, Math.min(100, level));
    const nature = POKEMON_NATURES[natureName] ?? POKEMON_NATURES['勤奋'];
    return pokemon.种族值.map((base, index) => {
        const isHP = index === 0;
        const i = Math.max(0, Math.min(31, iv[index] ?? 0));
        const e = Math.max(0, Math.min(252, ev[index] ?? 0));
        if (isHP) {
            return calculateSingleStat(base, i, e, lv, 1.0, true);
        }
        const key = NATURE_STAT_KEYS[index - 1];
        const mod = nature[key];
        return calculateSingleStat(base, i, e, lv, mod, false);
    });
}
