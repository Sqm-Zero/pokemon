// 宝可梦数据
export interface Pokemon {
    编号: string;
    名称: string;
    进化阶段: number;
    种族值: number[];
    总种族值: number;
    特性: string[];
    属性: string[];
    可能携带的物品: any[];
    经验值累积速度: string;
    蛋群: string[];
    孵蛋周期: number;
}

// 技能数据
export interface Move {
    move: string,
    category: string,
    type: string,
    power: number | string,
    accuracy: number | string,
    description: string,
    move_id: string
}

// 蛋技能数据
export interface EggMove {
    序号: string,
    name: string
    SkillList: any[]
}

// 特性数据
export interface Ability {
    ability: string,
    description: string,
}

export interface Method {
    "pokemonName": string|null,
    "捕捉方式": string|null,
    "进化等级": number|null,
    "特殊说明": string|null
}

export interface Evolve{
    "pokemonName": string|null,
    "move"?: string,
    "level"?: string,
    "time"?: string,
    "item"?: string,
    "NextStage"?: string,
    "condition"?: string
}