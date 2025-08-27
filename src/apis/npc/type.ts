export interface NPC {
    编号: string;
    名称: string;
    进化阶段: number;
    种族值: number[];
    总种族值: number;
    特性: string[];
    属性: string[];
    可能携带的物品?: any[];
    经验值累积速度?: string;
    蛋群?: string[];
    孵蛋周期?: number;
    canUseEvolutionStone?: boolean; // 添加这个可选属性
}