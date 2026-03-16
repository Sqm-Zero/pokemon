import { usePokemonStore } from '@/store/modules/pokemon';

// 特殊形态映射（NPC名称中的括号形态 → pokemon数据中的数字后缀索引，1-based）
const specialForms: Record<string, string[]> = {
    代欧奇希斯: ['攻击', '防御', '速度'],
    结草贵妇: ['砂土蓑衣', '垃圾蓑衣'],
    谢米: ['天空'],
    骑拉帝纳: ['起源'],
    洛托姆: ['加热', '清洗', '结冰', '旋转', '切割'],
    飘浮泡泡: ['太阳', '雨天', '雪天'],
    樱花儿: ['晴天形态'],
    野蛮鲈鱼: ['蓝条纹的样子'],
    达摩狒狒: ['达摩模式'],
    美洛耶塔: ['舞步'],
    酋雷姆: ['焰白', '暗黑'],
    凯路迪欧: ['胜利', '觉悟'],
    毒卷云: ['灵兽'],
    雷电云: ['灵兽'],
    土地云: ['灵兽'],
    超能妙喵: ['雌性'],
    花叶蒂: ['永恒之花'],
    皮卡丘: ['摇滚', '贵妇', '流行偶像', '博士', '面罩摔角手', '赤皮'],
    胡帕: ['解放'],
    固拉多: ['原始'],
    盖欧卡: ['原始']
};

// NPC数据中的别名映射 → pokemon数据中的实际名称
const nameAliases: Record<string, string> = {
    龙卷云: '毒卷云'
};

/**
 * 处理精灵名称显示
 * @param name 原始名称
 * @returns 处理后的显示名称
 */
export function processPokemonName(name: string): string {
    // NPC数据已经是"xxx（形态）"格式，直接返回（去除多余空格）
    return name.trim().replace(/\s+（/, '（');
}

/**
 * 将"皮卡丘（贵妇）"还原为pokemon数据中的名称"皮卡丘 1"
 * @param displayName 显示名称
 * @returns 数据中的原始名称
 */
export function restorePokemonRawName(displayName: string): string {
    const normalized = displayName.trim().replace(/\s+（/, '（');
    // 匹配"xxx（形态）"
    const match = normalized.match(/^(.+?)（(.+?)）$/);
    if (match) {
        const baseName = nameAliases[match[1]] ?? match[1];
        const form = match[2];
        if (specialForms[baseName]) {
            const formsList = specialForms[baseName];
            for (let i = 0; i < formsList.length; i++) {
                if (form === formsList[i] || form.includes(formsList[i]) || formsList[i].includes(form)) {
                    return baseName + ' ' + (i + 1);
                }
            }
        }
        // 括号形态但不在specialForms中（如"尼多后（贵妇）"），返回基础名称
        return baseName;
    }
    // 别名处理
    if (nameAliases[normalized]) return nameAliases[normalized];
    // 匹配"M超级进化"前缀
    if (normalized.startsWith('M') && normalized !== 'M甲贺忍蛙') {
        return normalized.replace('M', '') + ' 1';
    }
    return normalized;
}

/**
 * 精灵名称处理 composable
 */
export function usePokemonName() {
    return {
        processPokemonName,
        restorePokemonRawName,
        specialForms,
        nameAliases
    };
}
