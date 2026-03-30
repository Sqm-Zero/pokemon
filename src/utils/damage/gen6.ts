import { typeEffectiveness } from './typeChart';

/** 定点数分母，与第六世代起的内部修正习惯一致 */
export const MOD = 4096;

export function chainModify(value: number, numerator: number): number {
    return Math.trunc((value * numerator) / MOD);
}

export function toNumerator(mult: number): number {
    return Math.max(0, Math.round(MOD * mult));
}

export interface Gen6DamageInput {
    attackerLevel: number;
    /** 已含能力变化、道具、特性等之后的有效攻击/特攻 */
    attack: number;
    /** 已含能力变化等的有效防御/特防 */
    defense: number;
    /** 技能实际威力（固定威力技能填表值；变化威力由外部给定） */
    power: number;
    moveType: string;
    moveCategory: '物理' | '特殊' | '变化';
    attackerTypes: string[];
    defenderTypes: string[];
    doubles: boolean;
    /** 双打中对多个对手同时生效的扩大类招式 */
    spreadMove: boolean;
    weather: '无' | '大日照' | '大雨' | '沙暴' | '冰雹';
    terrain: '无' | '电气场地' | '青草场地' | '薄雾场地';
    attackerGrounded: boolean;
    defenderGrounded: boolean;
    helpingHand: boolean;
    /** 是否造成要害 */
    critical: boolean;
    /** 狙击手：要害伤害×2.25 替代 ×1.5 */
    sniper: boolean;
    /** 攻击方灼伤且使用物理招式 */
    burned: boolean;
    /** 适应力：同属性招式 STAB 由 1.5→2 */
    adaptability: boolean;
    /** 生命宝珠 */
    lifeOrb: boolean;
    /** 专家腰带：效果绝佳时威力类最终修正约 ×1.2（按伤害链实现） */
    expertBelt: boolean;
    /** 硬石头/过滤 等：受到效果绝佳时 ×0.75 */
    filterOrSolidRock: boolean;
    /** 友情防守（队友特性，双打侧场） */
    friendGuard: boolean;
    /** 以下防守方特性效果（与 `reqAbility` 内名称一致，由 abilityResolve 解析后填入） */
    defenderThickFat?: boolean;
    defenderHeatproof?: boolean;
    defenderDrySkin?: boolean;
    defenderFurCoat?: boolean;
    /** 多重鳞片 + 防守方满 HP */
    defenderMultiscaleFullHp?: boolean;
    defenderWonderGuard?: boolean;
    defenderVoltAbsorb?: boolean;
    defenderWaterAbsorb?: boolean;
    defenderSapSipper?: boolean;
    /** 引火：免疫火属性招式直接伤害（未激活前） */
    defenderFlashFire?: boolean;
    /** 破格等：无视对方减轻/免疫类特性对伤害段的影响 */
    attackerMoldBreaker?: boolean;
    /** 巨神之力：物攻招式在基础段使用 2×有效攻击 */
    attackerHugePower?: boolean;
    /** 强行：招式带追加效果时 ×1.3 */
    attackerSheerForceBoost?: boolean;
    /** 为 true 时跳过「灼伤导致物理伤害减半」段（如毅力等按你的规则） */
    skipBurnPhysicalDamageMod?: boolean;
    /** 防守方在双打中开启反射壁（物理伤害减免，第六世代起约 2732/4096） */
    reflectDoubles: boolean;
    /** 守方光墙（双打特殊） */
    lightScreenDoubles: boolean;
    /** 随机数 85–100 */
    damageRoll: number;
    /** 任意一方无关天气：取消大日照/大雨等对招式伤害的倍率修正 */
    fieldNegatesWeather?: boolean;
    /** 以下在基础段前叠乘有效威力（与特性条件由外部算好） */
    technicianPowerBoost?: boolean;
    ironFistPowerBoost?: boolean;
    strongJawPowerBoost?: boolean;
    recklessPowerBoost?: boolean;
    sandForcePowerBoost?: boolean;
    /** 分析：后出手 ×1.3 */
    attackerAnalyticBoost?: boolean;
    /** 草之毛皮 + 青草场地 + 接地：所受物理伤害约 ×2/3 */
    defenderGrassPelt?: boolean;
}

export interface DamageStep {
    label: string;
    valueAfter: number;
    detail?: string;
}

export interface Gen6DamageResult {
    damage: number;
    effectiveness: number;
    steps: DamageStep[];
}

function weatherNumerator(inp: Gen6DamageInput): number | null {
    if (inp.fieldNegatesWeather) return null;
    const { moveType, weather } = inp;
    if (weather === '大日照') {
        if (moveType === '火') return toNumerator(1.5);
        if (moveType === '水') return toNumerator(0.5);
    }
    if (weather === '大雨') {
        if (moveType === '水') return toNumerator(1.5);
        if (moveType === '火') return toNumerator(0.5);
    }
    return null;
}

function terrainNumerator(
    inp: Gen6DamageInput
): { num: number | null; detail: string } {
    const { terrain, moveType, attackerGrounded, defenderGrounded } = inp;
    if (terrain === '电气场地' && moveType === '电' && attackerGrounded) {
        return { num: toNumerator(1.5), detail: '电气场地·地面上的攻击方' };
    }
    if (terrain === '青草场地' && moveType === '草' && attackerGrounded) {
        return { num: toNumerator(1.5), detail: '青草场地·地面上的攻击方' };
    }
    if (terrain === '薄雾场地' && moveType === '龙' && defenderGrounded) {
        return { num: toNumerator(0.5), detail: '薄雾场地·地面上的防守方' };
    }
    return { num: null, detail: '' };
}

/** 第六世代基础伤害段（攻击、防御已含个体修正） */
export function baseDamageSegment(level: number, power: number, atk: number, def: number): number {
    const a = Math.trunc((2 * level) / 5) + 2;
    const b = Math.trunc((a * power * atk) / def);
    return Math.trunc(b / 50) + 2;
}

function boostedPower(
    base: number,
    steps: DamageStep[],
    label: string,
    mult: number
): number {
    const next = Math.max(1, Math.trunc(base * mult));
    steps.push({ label, valueAfter: next, detail: `威力 ${base}→${next}（×${mult}）` });
    return next;
}

export function calculateGen6Damage(inp: Gen6DamageInput): Gen6DamageResult {
    const steps: DamageStep[] = [];

    if (inp.moveCategory === '变化' || inp.power <= 0) {
        return { damage: 0, effectiveness: 0, steps: [{ label: '变化类招式', valueAfter: 0, detail: '不造成直接伤害' }] };
    }

    const eff = typeEffectiveness(inp.moveType, inp.defenderTypes);

    const mold = inp.attackerMoldBreaker ?? false;
    const dThick = !mold && (inp.defenderThickFat ?? false);
    const dHeat = !mold && (inp.defenderHeatproof ?? false);
    const dDry = !mold && (inp.defenderDrySkin ?? false);
    const dFur = !mold && (inp.defenderFurCoat ?? false);
    const dMulti = !mold && (inp.defenderMultiscaleFullHp ?? false);
    const dWonder = !mold && (inp.defenderWonderGuard ?? false);
    const dVolt = !mold && (inp.defenderVoltAbsorb ?? false);
    const dWater = !mold && (inp.defenderWaterAbsorb ?? false);
    const dSap = !mold && (inp.defenderSapSipper ?? false);
    const dFlash = !mold && (inp.defenderFlashFire ?? false);

    if (dVolt && inp.moveType === '电') {
        return {
            damage: 0,
            effectiveness: eff,
            steps: [{ label: '蓄电·避雷针', valueAfter: 0, detail: '免疫电属性招式造成的伤害' }]
        };
    }
    if (dWater && inp.moveType === '水') {
        return {
            damage: 0,
            effectiveness: eff,
            steps: [{ label: '储水·引水', valueAfter: 0, detail: '免疫水属性招式造成的伤害' }]
        };
    }
    if (dSap && inp.moveType === '草') {
        return {
            damage: 0,
            effectiveness: eff,
            steps: [{ label: '食草', valueAfter: 0, detail: '免疫草属性招式造成的伤害' }]
        };
    }
    if (dFlash && inp.moveType === '火') {
        return {
            damage: 0,
            effectiveness: eff,
            steps: [{ label: '引火', valueAfter: 0, detail: '免疫火属性招式造成的伤害' }]
        };
    }

    let effPower = inp.power;
    if (inp.technicianPowerBoost && effPower <= 60) {
        effPower = boostedPower(effPower, steps, '技术高手', 1.5);
    }
    if (inp.ironFistPowerBoost) {
        effPower = boostedPower(effPower, steps, '铁拳', 1.2);
    }
    if (inp.strongJawPowerBoost) {
        effPower = boostedPower(effPower, steps, '强壮之颚', 1.5);
    }
    if (inp.recklessPowerBoost) {
        effPower = boostedPower(effPower, steps, '舍身', 1.2);
    }
    if (inp.sandForcePowerBoost) {
        effPower = boostedPower(effPower, steps, '沙之力', 1.3);
    }

    const huge = inp.attackerHugePower ?? false;
    const atkForBase = inp.moveCategory === '物理' && huge ? inp.attack * 2 : inp.attack;
    let dmg = baseDamageSegment(inp.attackerLevel, effPower, atkForBase, inp.defense);
    steps.push({
        label: '基础段 ⌊⌊(2L/5+2)×威力×攻防⌋/50⌋+2',
        valueAfter: dmg,
        detail: `L${inp.attackerLevel} 威力${effPower} 攻${atkForBase}${huge ? '（巨神之力×2）' : ''} 防${inp.defense}`
    });

    if (inp.helpingHand) {
        dmg = chainModify(dmg, toNumerator(1.5));
        steps.push({ label: '帮助', valueAfter: dmg, detail: '×1.5' });
    }

    if (inp.doubles && inp.spreadMove) {
        dmg = chainModify(dmg, toNumerator(0.75));
        steps.push({ label: '双打·扩大招式', valueAfter: dmg, detail: '×0.75（对多个目标）' });
    }

    const wn = weatherNumerator(inp);
    if (wn !== null) {
        dmg = chainModify(dmg, wn);
        steps.push({
            label: `天气 ${inp.weather}`,
            valueAfter: dmg,
            detail: `×${(wn / MOD).toFixed(4)}`
        });
    }

    const tn = terrainNumerator(inp);
    if (tn.num !== null) {
        dmg = chainModify(dmg, tn.num);
        steps.push({ label: `场地 ${inp.terrain}`, valueAfter: dmg, detail: tn.detail });
    }

    if (inp.critical) {
        const critMult = inp.sniper ? 2.25 : 1.5;
        dmg = chainModify(dmg, toNumerator(critMult));
        steps.push({ label: inp.sniper ? '要害（狙击手）' : '要害', valueAfter: dmg, detail: `×${critMult}` });
    }

    const roll = Math.min(100, Math.max(85, Math.round(inp.damageRoll)));
    dmg = Math.max(1, Math.trunc((dmg * roll) / 100));
    steps.push({ label: '随机数', valueAfter: dmg, detail: `${roll}/100` });

    const stab =
        inp.adaptability && inp.attackerTypes.includes(inp.moveType)
            ? 2
            : inp.attackerTypes.includes(inp.moveType)
              ? 1.5
              : 1;
    if (stab > 1) {
        dmg = chainModify(dmg, toNumerator(stab));
        steps.push({
            label: '属性一致加成',
            valueAfter: dmg,
            detail: inp.adaptability ? '×2（适应力）' : '×1.5'
        });
    }

    if (eff !== 1) {
        const en = toNumerator(eff);
        dmg = chainModify(dmg, en);
        steps.push({
            label: '属性相克',
            valueAfter: dmg,
            detail: `×${eff}`
        });
    } else {
        steps.push({ label: '属性相克', valueAfter: dmg, detail: '×1' });
    }

    if (!mold && inp.filterOrSolidRock && eff >= 2) {
        dmg = chainModify(dmg, toNumerator(0.75));
        steps.push({ label: '过滤 / 坚硬岩石', valueAfter: dmg, detail: '效果绝佳时 ×0.75' });
    } else if (mold) {
        steps.push({ label: '破格', valueAfter: dmg, detail: '已忽略对方过滤/坚硬岩石等减伤特性' });
    }

    if (dThick && (inp.moveType === '火' || inp.moveType === '冰')) {
        dmg = chainModify(dmg, toNumerator(0.5));
        steps.push({ label: '厚脂肪', valueAfter: dmg, detail: '火/冰招式 ×0.5' });
    }
    if (dHeat && inp.moveType === '火') {
        dmg = chainModify(dmg, toNumerator(0.5));
        steps.push({ label: '耐热', valueAfter: dmg, detail: '火招式 ×0.5' });
    }
    if (dDry && inp.moveType === '火') {
        dmg = chainModify(dmg, toNumerator(1.25));
        steps.push({ label: '干燥皮肤', valueAfter: dmg, detail: '火招式 ×1.25' });
    }
    if (dFur && inp.moveCategory === '物理') {
        dmg = chainModify(dmg, toNumerator(0.5));
        steps.push({ label: '毛皮大衣', valueAfter: dmg, detail: '物理招式 ×0.5' });
    }
    if (dMulti) {
        dmg = chainModify(dmg, toNumerator(0.5));
        steps.push({ label: '多重鳞片（满 HP）', valueAfter: dmg, detail: '×0.5' });
    }

    const dGrassPelt = !mold && (inp.defenderGrassPelt ?? false);
    if (
        dGrassPelt &&
        inp.moveCategory === '物理' &&
        inp.terrain === '青草场地' &&
        inp.defenderGrounded
    ) {
        dmg = chainModify(dmg, Math.round(MOD / 1.5));
        steps.push({ label: '草之毛皮', valueAfter: dmg, detail: '青草场地·接地防守方 物理约 ×2/3' });
    }

    if (inp.attackerSheerForceBoost) {
        dmg = chainModify(dmg, toNumerator(1.3));
        steps.push({ label: '强行', valueAfter: dmg, detail: '带追加效果招式 ×1.3' });
    }

    if (inp.moveCategory === '物理' && inp.burned && !(inp.skipBurnPhysicalDamageMod ?? false)) {
        dmg = chainModify(dmg, toNumerator(0.5));
        steps.push({ label: '灼伤（物攻减半）', valueAfter: dmg, detail: '×0.5' });
    }

    if (inp.moveCategory === '物理' && inp.doubles && inp.reflectDoubles) {
        dmg = chainModify(dmg, 2732);
        steps.push({ label: '反射壁（双打）', valueAfter: dmg, detail: '约 ×0.667' });
    }
    if (inp.moveCategory === '特殊' && inp.doubles && inp.lightScreenDoubles) {
        dmg = chainModify(dmg, 2732);
        steps.push({ label: '光墙（双打）', valueAfter: dmg, detail: '约 ×0.667' });
    }

    if (inp.expertBelt && eff >= 2) {
        dmg = chainModify(dmg, toNumerator(1.2));
        steps.push({ label: '专家腰带', valueAfter: dmg, detail: '效果绝佳 ×1.2' });
    }

    if (inp.attackerAnalyticBoost) {
        dmg = chainModify(dmg, toNumerator(1.3));
        steps.push({ label: '分析', valueAfter: dmg, detail: '后出手 ×1.3' });
    }

    if (inp.lifeOrb) {
        dmg = chainModify(dmg, toNumerator(1.3));
        steps.push({ label: '生命宝珠', valueAfter: dmg, detail: '×1.3' });
    }

    if (dWonder && eff > 0 && eff < 2) {
        steps.push({ label: '神奇守护', valueAfter: 0, detail: '仅效果绝佳可造成伤害' });
        return { damage: 0, effectiveness: eff, steps };
    }

    if (inp.friendGuard) {
        dmg = chainModify(dmg, toNumerator(0.75));
        steps.push({ label: '友情防守', valueAfter: dmg, detail: '队友特性 · ×0.75' });
    }

    const finalDmg = eff === 0 ? 0 : Math.max(1, dmg);
    if (eff === 0) {
        steps.push({ label: '免疫', valueAfter: 0, detail: '倍率为 0' });
    }

    return { damage: finalDmg, effectiveness: eff, steps };
}

export function parseMovePower(power: string | number | undefined): number | null {
    if (power === undefined) return null;
    if (typeof power === 'number') return power > 0 ? power : null;
    const s = String(power).trim();
    if (s === '' || s === '--' || s === '—' || s === '-') return null;
    const n = parseInt(s, 10);
    return Number.isFinite(n) && n > 0 ? n : null;
}
