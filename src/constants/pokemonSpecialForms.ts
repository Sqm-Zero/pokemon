import { reqPokemon } from '@/apis/pokemon/index';

function escapeRegExp(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 图鉴数据中「基础名 + 空格 + 数字」形态的后缀列表（升序），用于 Mega、原始回归等与列表隐藏规则对齐。
 */
export function getNumberedFormSuffixesForBase(baseName: string): number[] {
    const re = new RegExp(`^${escapeRegExp(baseName)} (\\d+)$`);
    const nums = new Set<number>();
    for (const p of reqPokemon()) {
        const m = p.名称.match(re);
        if (m) nums.add(parseInt(m[1], 10));
    }
    return Array.from(nums).sort((a, b) => a - b);
}

/**
 * 与图鉴详情页形态切换、名称展示一致的「多形态」映射（含菜单文案）。
 * 列表隐藏规则见 isPokemonListHiddenNumberedVariant：凡存在同名无编号条目则隐藏「名 数字」。
 */
export const POKEMON_SPECIAL_FORMS: Record<string, string[]> = {
    代欧奇希斯: ['攻击形态', '防御形态', '速度形态'],
    结草贵妇: ['砂土蓑衣', '垃圾蓑衣'],
    谢米: ['天空形态'],
    骑拉帝纳: ['起源形态'],
    洛托姆: ['加热', '清洗', '结冰', '旋转', '切割'],
    飘浮泡泡: ['太阳', '雨天', '雪天'],
    樱花儿: ['晴天形态'],
    野蛮鲈鱼: ['蓝条纹的样子'],
    达摩狒狒: ['达摩模式'],
    美洛耶塔: ['舞步形态'],
    酋雷姆: ['焰白', '暗黑'],
    凯路迪欧: ['觉悟形态'],
    毒卷云: ['灵兽形态'],
    雷电云: ['灵兽形态'],
    土地云: ['灵兽形态'],
    超能妙喵: ['雌性'],
    花叶蒂: ['', '', '', '', '永恒之花'],
    皮卡丘: ['摇滚巨星', '贵妇', '流行偶像', '博士', '面罩摔角手', '智皮']
};

/**
 * 大列表中隐藏「基础名 + 空格 + 纯数字后缀」的条目（如「喷火龙 1」「皮卡丘 2」），
 * 当且仅当当前数据源里存在完全等于「基础名」的另一条记录（Mega、换装、地区形态编号等）。
 */
export function isPokemonListHiddenNumberedVariant(
    名称: string,
    allExactNames: ReadonlySet<string>
): boolean {
    const m = 名称.match(/^(.+?) (\d+)$/);
    if (!m) return false;
    return allExactNames.has(m[1]);
}
