// 导入现有类型
import type { Pokemon, BattleInfo, BattleData } from '@/apis/npc/type';

// 导出现有类型供其他模块使用
export type { Pokemon, BattleInfo, BattleData };

// 战斗统计信息
export interface BattleStats {
    // 等级分析
    levelAnalysis: {
        average: number; // 平均等级
        max: number; // 最高等级
        min: number; // 最低等级
    };
    // 属性分布
    attributeDistribution: AttributeDistribution[];
    // 克制推荐
    counterRecommendations: string[];
}

// 属性分布
export interface AttributeDistribution {
    attribute: string; // 属性名称（如"水"、"火"）
    count: number; // 该属性精灵数量
    percentage: number; // 占比
}

// 路由参数
export interface TrainerRouteParams {
    groupName: string;
    battleIndex?: string;
    version?: 'normal' | 'hardcore';
}
