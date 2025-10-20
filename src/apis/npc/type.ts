// 单个宝可梦信息
export interface Pokemon {
    /** 宝可梦名称（如 "皮卡丘（摇滚巨星）"） */
    name: string;
    /** 等级 */
    level: number;
    /** 持有道具（如 "电气球"） */
    item: string;
    /** 特性（如 "狙击手"） */
    ability: string;
    /** 招式列表 */
    moves: string[];
}

// 单场战斗信息
export interface BattleInfo {
    /** 战斗标题（如 "反派 海洋队精英（橙华森林）"） */
    title: string;
    /** 战斗类型（单打 / 双打 / 群战 / 三打 / 一番战） */
    battle_type: string;
    /** 战斗奖励或道具（如 "全能爆发*2"） */
    item: string;
    /** 出战宝可梦列表 */
    pokemons: Pokemon[];
}

// 分组（例如 "海洋队 重要战斗 阵容"）
export type BattleGroupName =
    | "海洋队 重要战斗 阵容"
    | "青梅/劲敌 详细阵容"
    | "道馆馆主 详细阵容"
    | "宝可梦联盟 详细阵容"
    | "隐藏五天王"
    | "二周目 重要战斗"
    | "连胜家族（紫堇市上方）"
    | "最终挑战！游戏作者（茵郁市右下角树屋)";

// 按分组汇总的总结构
export type BattleData = Record<string, BattleInfo[]>;
