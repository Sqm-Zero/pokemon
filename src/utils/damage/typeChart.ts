/** 第六世代起稳定属性相克（中文属性名，与本项目数据一致） */

const chart: Record<string, Record<string, number>> = {};

function pair(atk: string, def: string, m: number) {
    if (!chart[atk]) chart[atk] = {};
    chart[atk][def] = m;
}

/** 建立 18 属性非 1 倍率条目 */
function buildChart() {
    // 一般
    pair('一般', '岩石', 0.5);
    pair('一般', '钢', 0.5);
    pair('一般', '幽灵', 0);
    // 格斗
    pair('格斗', '一般', 2);
    pair('格斗', '冰', 2);
    pair('格斗', '岩石', 2);
    pair('格斗', '钢', 2);
    pair('格斗', '恶', 2);
    pair('格斗', '毒', 0.5);
    pair('格斗', '飞行', 0.5);
    pair('格斗', '超能力', 0.5);
    pair('格斗', '虫', 0.5);
    pair('格斗', '妖精', 0.5);
    pair('格斗', '幽灵', 0);
    // 飞行
    pair('飞行', '草', 2);
    pair('飞行', '格斗', 2);
    pair('飞行', '虫', 2);
    pair('飞行', '电', 0.5);
    pair('飞行', '岩石', 0.5);
    pair('飞行', '钢', 0.5);
    // 毒
    pair('毒', '草', 2);
    pair('毒', '妖精', 2);
    pair('毒', '毒', 0.5);
    pair('毒', '地面', 0.5);
    pair('毒', '岩石', 0.5);
    pair('毒', '幽灵', 0.5);
    // 地面
    pair('地面', '火', 2);
    pair('地面', '电', 2);
    pair('地面', '毒', 2);
    pair('地面', '岩石', 2);
    pair('地面', '钢', 2);
    pair('地面', '草', 0.5);
    pair('地面', '虫', 0.5);
    pair('地面', '飞行', 0);
    // 岩石
    pair('岩石', '火', 2);
    pair('岩石', '冰', 2);
    pair('岩石', '飞行', 2);
    pair('岩石', '虫', 2);
    pair('岩石', '格斗', 0.5);
    pair('岩石', '地面', 0.5);
    pair('岩石', '钢', 0.5);
    // 虫
    pair('虫', '草', 2);
    pair('虫', '超能力', 2);
    pair('虫', '恶', 2);
    pair('虫', '火', 0.5);
    pair('虫', '格斗', 0.5);
    pair('虫', '毒', 0.5);
    pair('虫', '飞行', 0.5);
    pair('虫', '幽灵', 0.5);
    pair('虫', '钢', 0.5);
    pair('虫', '妖精', 0.5);
    // 幽灵
    pair('幽灵', '超能力', 2);
    pair('幽灵', '幽灵', 2);
    pair('幽灵', '恶', 0.5);
    // 钢
    pair('钢', '冰', 2);
    pair('钢', '岩石', 2);
    pair('钢', '妖精', 2);
    pair('钢', '火', 0.5);
    pair('钢', '水', 0.5);
    pair('钢', '电', 0.5);
    pair('钢', '钢', 0.5);
    // 火
    pair('火', '草', 2);
    pair('火', '冰', 2);
    pair('火', '虫', 2);
    pair('火', '钢', 2);
    pair('火', '火', 0.5);
    pair('火', '水', 0.5);
    pair('火', '岩石', 0.5);
    pair('火', '龙', 0.5);
    pair('火', '妖精', 0.5);
    // 水
    pair('水', '火', 2);
    pair('水', '地面', 2);
    pair('水', '岩石', 2);
    pair('水', '水', 0.5);
    pair('水', '草', 0.5);
    pair('水', '龙', 0.5);
    // 草
    pair('草', '水', 2);
    pair('草', '地面', 2);
    pair('草', '岩石', 2);
    pair('草', '火', 0.5);
    pair('草', '草', 0.5);
    pair('草', '毒', 0.5);
    pair('草', '飞行', 0.5);
    pair('草', '虫', 0.5);
    pair('草', '龙', 0.5);
    pair('草', '钢', 0.5);
    // 电
    pair('电', '水', 2);
    pair('电', '飞行', 2);
    pair('电', '草', 0.5);
    pair('电', '电', 0.5);
    pair('电', '龙', 0.5);
    pair('电', '地面', 0);
    // 超能力
    pair('超能力', '格斗', 2);
    pair('超能力', '毒', 2);
    pair('超能力', '钢', 0.5);
    pair('超能力', '超能力', 0.5);
    // 冰
    pair('冰', '草', 2);
    pair('冰', '地面', 2);
    pair('冰', '飞行', 2);
    pair('冰', '龙', 2);
    pair('冰', '火', 0.5);
    pair('冰', '水', 0.5);
    pair('冰', '冰', 0.5);
    pair('冰', '钢', 0.5);
    // 龙
    pair('龙', '龙', 2);
    pair('龙', '钢', 0.5);
    pair('龙', '妖精', 0);
    // 恶
    pair('恶', '超能力', 2);
    pair('恶', '幽灵', 2);
    pair('恶', '格斗', 0.5);
    pair('恶', '恶', 0.5);
    pair('恶', '妖精', 0.5);
    // 妖精
    pair('妖精', '格斗', 2);
    pair('妖精', '龙', 2);
    pair('妖精', '恶', 2);
    pair('妖精', '火', 0.5);
    pair('妖精', '毒', 0.5);
    pair('妖精', '钢', 0.5);
}

buildChart();

/** 单刀单守倍率；双属性为两次倍率相乘 */
export function typeEffectiveness(attackType: string, defendTypes: string[]): number {
    let e = 1;
    for (const d of defendTypes) {
        const m = chart[attackType]?.[d];
        e *= m === undefined ? 1 : m;
    }
    return e;
}

export function typeEffectivenessLabel(attackType: string, defendTypes: string[]): string {
    const e = typeEffectiveness(attackType, defendTypes);
    if (e === 0) return '没有效果';
    if (e === 0.5) return '效果一般';
    if (e === 1) return '';
    if (e === 2) return '效果绝佳';
    if (e === 4) return '效果绝佳×2';
    if (e < 1) return `×${e}`;
    return `×${e}`;
}
