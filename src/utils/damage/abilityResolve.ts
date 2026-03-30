import { reqAbility } from '@/apis/pokemon/index';

/** 与本项目 reqAbility() 中 `ability` 字段一致，便于与你的特性表同步 */
let cachedNames: string[] | null = null;

export function getAbilityNameList(): string[] {
    if (!cachedNames) cachedNames = reqAbility().map(a => a.ability);
    return cachedNames;
}

export function uniquePokemonAbilities(特性: string[] | undefined): string[] {
    if (!特性?.length) return [];
    return [...new Set(特性.filter(Boolean))];
}

/** 招式名启发式：铁拳（×1.2 威力） */
export function moveNameSuggestsIronFist(moveName: string): boolean {
    return moveName.includes('拳');
}

/** 招式名启发式：强壮之颚（×1.5 威力） */
export function moveNameSuggestsStrongJaw(moveName: string): boolean {
    return /咬|啃|烈牙|之牙/.test(moveName);
}

/** 进攻方当前特性 → 与伤害链相关的布尔项（名称取 reqAbility 条目） */
export function attackerAbilityBattleFlags(ability: string | null | undefined): {
    adaptability: boolean;
    sniper: boolean;
    /** 破格：伤害计算中无视对方可减轻/免除直接伤害的特性（第六世代常见处理） */
    moldBreaker: boolean;
    /** 巨神之力：物攻端按「有效攻击×2」并入基础段（若你已在面板翻倍请勿重复选） */
    hugePower: boolean;
    /** 强行：需在 UI 勾选「招式含追加效果」后才会 ×1.3 */
    sheerForce: boolean;
    /** 毅力：与「灼伤不减物理伤害」勾选配合（第六世代实机对灼伤伤害段仍有争议，默认按勾选处理） */
    guts: boolean;
    /** 技术高手：威力≤60 的招式基础威力 ×1.5（物/特皆可） */
    technician: boolean;
    ironFist: boolean;
    reckless: boolean;
    /** 沙暴下地面/钢/岩石属性招式威力 ×1.3 */
    sandForce: boolean;
    strongJaw: boolean;
    /** 分析：后出手则伤害 ×1.3（需 UI 勾选） */
    analytic: boolean;
    /** 无关天气：场上无视天气变化类伤害修正 */
    airLock: boolean;
} {
    if (!ability)
        return {
            adaptability: false,
            sniper: false,
            moldBreaker: false,
            hugePower: false,
            sheerForce: false,
            guts: false,
            technician: false,
            ironFist: false,
            reckless: false,
            sandForce: false,
            strongJaw: false,
            analytic: false,
            airLock: false
        };
    return {
        adaptability: ability === '适应力',
        sniper: ability === '狙击手',
        moldBreaker: ability === '破格',
        hugePower: ability === '巨神之力',
        sheerForce: ability === '强行',
        guts: ability === '毅力',
        technician: ability === '技术高手',
        ironFist: ability === '铁拳',
        reckless: ability === '舍身',
        sandForce: ability === '沙之力',
        strongJaw: ability === '强壮之颚',
        analytic: ability === '分析',
        airLock: ability === '无关天气'
    };
}

/** 防守方当前特性 → 伤害减免/免疫等（第六世代常见规则，按你维护的特性名匹配） */
export function defenderAbilityBattleFlags(ability: string | null | undefined): {
    /** 过滤、坚硬岩石 */
    filterOrSolidRock: boolean;
    /** 厚脂肪：火/冰招式伤害 ×0.5 */
    thickFat: boolean;
    /** 耐热：火 ×0.5 */
    heatproof: boolean;
    /** 干燥皮肤：受到火属性招式 ×1.25 */
    drySkin: boolean;
    /** 毛皮大衣：物理招式 ×0.5 */
    furCoat: boolean;
    /** 多重鳞片：满 HP 时伤害 ×0.5（需 UI 勾选满血） */
    multiscale: boolean;
    wonderGuard: boolean;
    voltAbsorb: boolean;
    /** 避雷针：被电系招式命中时免伤并加特攻（计伤按 0） */
    lightningRod: boolean;
    waterAbsorb: boolean;
    /** 引水：被水系招式吸引时免伤（计伤按 0） */
    stormDrain: boolean;
    sapSipper: boolean;
    /** 引火：被火属性伤害招式命中时免伤并触发引火 */
    flashFire: boolean;
    /** 飘浮：不接地，仅用于自动接地；不参与伤害链 */
    levitate: boolean;
    /** 青草场地且接地时物理防御视为 ×1.5（按伤害 ×2/3 近似） */
    grassPelt: boolean;
    airLock: boolean;
} {
    const empty = (): ReturnType<typeof defenderAbilityBattleFlags> => ({
        filterOrSolidRock: false,
        thickFat: false,
        heatproof: false,
        drySkin: false,
        furCoat: false,
        multiscale: false,
        wonderGuard: false,
        voltAbsorb: false,
        lightningRod: false,
        waterAbsorb: false,
        stormDrain: false,
        sapSipper: false,
        flashFire: false,
        levitate: false,
        grassPelt: false,
        airLock: false
    });
    if (!ability) return empty();
    const o = empty();
    switch (ability) {
        case '过滤':
        case '坚硬岩石':
            o.filterOrSolidRock = true;
            break;
        case '厚脂肪':
            o.thickFat = true;
            break;
        case '耐热':
            o.heatproof = true;
            break;
        case '干燥皮肤':
            o.drySkin = true;
            break;
        case '毛皮大衣':
            o.furCoat = true;
            break;
        case '多重鳞片':
            o.multiscale = true;
            break;
        case '神奇守护':
            o.wonderGuard = true;
            break;
        case '蓄电':
            o.voltAbsorb = true;
            break;
        case '储水':
            o.waterAbsorb = true;
            break;
        case '引水':
            o.stormDrain = true;
            break;
        case '避雷针':
            o.lightningRod = true;
            break;
        case '食草':
            o.sapSipper = true;
            break;
        case '引火':
            o.flashFire = true;
            break;
        case '飘浮':
            o.levitate = true;
            break;
        case '草之毛皮':
            o.grassPelt = true;
            break;
        case '无关天气':
            o.airLock = true;
            break;
        default:
            break;
    }
    return o;
}
