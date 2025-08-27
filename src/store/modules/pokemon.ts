import { defineStore } from 'pinia'
import type { Pokemon_Type } from './type'
import { reqPokemon, reqAbility } from '@/apis/pokemon/index'
import { reqMoves } from '@/apis/moves';
import { reqPokemon_Moves } from '@/apis/pokemonMoves';
import { reqMethod, reqEvolve } from '@/apis/method';

import { Pokemon, Move, Ability, Method } from '@/apis/pokemon/type';
import { Evolve } from '@/apis/pokemonMoves/type';

export const usePokemonStore = defineStore('counter', {
    state: (): Pokemon_Type => ({
        PokemonList: reqPokemon(),
        // 精灵数据
        Pokemon: {
            "编号": "001",
            "名称": "妙蛙种子",
            "进化阶段": 1,
            "种族值": [
                45,
                49,
                49,
                65,
                65,
                45
            ],
            "总种族值": 318,
            "特性": [
                "茂盛",
                "太阳驱动",
                "太阳驱动"
            ],
            "属性": [
                "草",
                "毒"
            ],
            "可能携带的物品": [
                {
                    "物品": "妙蛙花进化石",
                    "概率": 50
                }
            ],
            "经验值累积速度": "较慢",
            "蛋群": [
                "怪兽",
                "植物"
            ],
            "孵蛋周期": 5
        },
        colorMap: {
            '一般': '#BBBBAA',
            '火': '#FF4422',
            '水': '#3399FF',
            '草': '#77CC55',
            '电': '#FFCC33',
            '格斗': '#BB5544',
            '毒': '#AA5599',
            '飞行': '#3366cc',
            '超能力': '#FF5599',
            '虫': '#AABB22',
            '地面': '#DDBB55',
            '冰': '#77DDFF',
            '岩石': '#afa981',
            '幽灵': '#704170',
            "龙": '#7766EE',
            '恶': '#775544',
            '钢': '#AAAABB',
            '妖精': '#FFAAFF',
            '进化奇石': '#ff5ce9'
        },
        Move: {
            "accuracy": "100",
            "category": "物理",
            "description": "使用长长的尾巴或手等拍打对手进行攻击。",
            "move": "拍击",
            "move_id": "1",
            "power": "40",
            "type": "一般"
        },
        type: '',
        abilityName: '',
        pokemonQuery: '',
        lastSelectedType: '', // 新增：保存最后选择的属性
        scrollPosition: 0,
    }),
    actions: {
        // 根据精灵编号查精灵信息
        getPokemonByNumber(number: string): Pokemon {
            // 从数据源中查找匹配的精灵
            const pokemon = reqPokemon().find(
                pokemon => pokemon.编号 === number)
            // 如果找到，返回精灵信息；否则返回空对象
            return pokemon || {
                "编号": "001",
                "名称": "妙蛙种子",
                "进化阶段": 1,
                "种族值": [
                    45,
                    49,
                    49,
                    65,
                    65,
                    45
                ],
                "总种族值": 318,
                "特性": [
                    "茂盛",
                    "太阳驱动",
                    "太阳驱动"
                ],
                "属性": [
                    "草",
                    "毒"
                ],
                "可能携带的物品": [
                    {
                        "物品": "妙蛙花进化石",
                        "概率": 50
                    }
                ],
                "经验值累积速度": "较慢",
                "蛋群": [
                    "怪兽",
                    "植物"
                ],
                "孵蛋周期": 5
            }
        },
        // 根据精灵属性查询精灵列表
        getPokemonListByType(type: string): Pokemon[] {
            // 从数据源中查找匹配的精灵列表
            const pokemonList = reqPokemon().filter(
                pokemon => pokemon.属性.includes(type)
            )

            return pokemonList
        },
        // 进化奇石精灵列表
        getPokemonListByEvoStone(): Pokemon[] {
            const canUseStoneFinalForms = [
                "美纳斯", "火暴猴", "白海狮", "大奶罐", "圈圈熊",
                "猫头夜鹰", "随风球", "南瓜怪人", "念力土偶", "舞天鹅",
                "乌贼王", "朽木妖", "顽皮雷弹", "热带龙", "电飞鼠",
                "摩鲁蛾", "钢臂炮虾", "裙儿小姐", "几何雪花", "麒麟奇", "钢炮臂虾",
                "樱花儿", "千针鱼", "风铃铃", "优雅猫", "太阳珊瑚", "土龙翅灵"
            ];
            return canUseStoneFinalForms
                .map(name => reqPokemon().find(pokemon => pokemon.名称 === name))
                .filter((p): p is any => p !== undefined);
        },
        // 根据精灵名称查询精灵信息
        getPokemonByName(name: number): Pokemon {
            // 从数据源中查找匹配的精灵
            const pokemon = reqPokemon().find(
                pokemon => Number(pokemon.编号) === name)
            // 如果找到，返回精灵信息；否则返回空对象
            return pokemon || {
                "编号": "001",
                "名称": "妙蛙种子",
                "进化阶段": 1,
                "种族值": [
                    45,
                    49,
                    49,
                    65,
                    65,
                    45
                ],
                "总种族值": 318,
                "特性": [
                    "茂盛",
                    "太阳驱动",
                    "太阳驱动"
                ],
                "属性": [
                    "草",
                    "毒"
                ],
                "可能携带的物品": [
                    {
                        "物品": "妙蛙花进化石",
                        "概率": 50
                    }
                ],
                "经验值累积速度": "较慢",
                "蛋群": [
                    "怪兽",
                    "植物"
                ],
                "孵蛋周期": 5
            }
        },
        // 根据精灵名称查询精灵编号
        getPokemonIdByName(name: string | undefined): string {
            // 从数据源中查找匹配的精灵
            const pokemon = reqPokemon().find(
                pokemon => pokemon.名称 === name)
            // 如果找到，返回精灵信息；否则返回空对象
            if (pokemon === undefined) {
                return '1';
            }
            return pokemon.编号
        },
        // 根据技能编号查询技能信息
        getMOveById(moveId: number): Move {
            // 从数据源中查找匹配的技能
            const move = reqMoves().find(
                move => Number(move.move_id) === moveId
            )
            // 如果找到，返回技能信息；否则返回空对象
            return move || {
                "accuracy": "100",
                "category": "物理",
                "description": "使用长长的尾巴或手等拍打对手进行攻击。",
                "move": "拍击",
                "move_id": "1",
                "power": "40",
                "type": "一般"
            }
        },
        // 根据技能名称查询技能信息
        getMoveByName(moveName: string): Move {
            // 从数据源中查找匹配的技能
            const move = reqMoves().find(
                move => move.move === moveName
            )
            // 如果找到，返回技能信息；否则返回空对象
            return move || {
                "accuracy": "100",
                "category": "物理",
                "description": "使用长长的尾巴或手等拍打对手进行攻击。",
                "move": "拍击",
                "move_id": "1",
                "power": "40",
                "type": "一般"
            }
        },
        // 根据精灵编号获取技能列表
        getPokemonMovesByNumber(number: string) {
            // 从数据源中查找匹配的精灵
            const pokemonMoves = reqPokemon_Moves().find(
                pokemon => pokemon.序号 === number
            )
            // 如果找到，返回技能列表；否则返回空数组
            return pokemonMoves ? pokemonMoves.SkillList : []
        },
        // 根据技能名称查询可以学会的精灵信息
        getPokemonByMoveName(moveName: string) {
            // 1. 首先过滤出所有包含该招式的宝可梦
            const pokemonWithMove = reqPokemon_Moves().filter(pokemon =>
                pokemon.SkillList?.some(skill => skill.skill_name === moveName)
            );

            // 2. 映射结果并过滤无效数据
            const result = pokemonWithMove
                .map(pokemon => {
                    const skill = pokemon.SkillList.find(s => s.skill_name === moveName);
                    // 确保pokemon有必要的属性
                    if (!pokemon.序号 || !pokemon.name) return null;

                    return {
                        id: pokemon.序号,
                        name: pokemon.name,
                        learnLevel: skill?.level || null
                    };
                })
                .filter(Boolean); // 过滤掉null或undefined的条目

            // 3. 按学习等级排序（可选）
            // result.sort((a, b) => {
            //     if (a.learnLevel === b.learnLevel) return 0;
            //     if (a.learnLevel === null) return 1;
            //     if (b.learnLevel === null) return -1;
            //     return parseInt(a.learnLevel) - parseInt(b.learnLevel);
            // });

            return result;
        },
        // 根据特性名称查询特性信息
        getAbilityByName(abilityName: string): Ability {
            // 从数据源中查找匹配的特性
            const ability = reqAbility().find(
                ability => ability.ability === abilityName
            )
            // 如果找到，返回特性信息；否则返回空对象
            return ability || {
                "ability": "结实",
                "description": "在ＨＰ全满时，即使受到招式攻击，也不会被一击打倒。一击必杀的招式也没有效果。"
            }
        },
        // 根据特性查询拥有该特性的精灵信息
        getPokemonByAbility(ability: string) {
            // 从数据源中查找匹配的精灵
            const pokemonList = reqPokemon().filter(
                pokemon => pokemon.特性.some(
                    item => item === ability
                )
            )
            // 返回所有拥有该特性的精灵列表
            return pokemonList;
        },
        // 根据精灵名称查询获取方式
        getMethodByName(name: string): Method {
            // 从数据源中查找匹配的精灵
            const pokemon = reqMethod().find(
                pokemon => pokemon.pokemonName === name
            )
            // 如果找到，返回精灵信息；否则返回空对象
            return pokemon || {
                "pokemonName": null,
                "捕捉方式": "暂无数据",
                "进化等级": null,
                "特殊说明": null
            }
        },
        // 根据精灵名称查询进化等级
        getEvolveByName(name: string): Evolve[] {
            const allEvos = reqEvolve();
            const visited = new Set<string>(); // 记录已添加的宝可梦名，防止重复
            const result: Evolve[] = [];

            // 步骤1：找到根节点（最原始的祖先）
            function findRoot(name: string | undefined): string | undefined {
                const parent = allEvos.find(evo => evo.NextStage === name);
                if (!parent) return name;
                return findRoot(parent.pokemonName);
            }

            // 步骤2：从指定节点开始，BFS 遍历所有子分支
            function traverse(pokemonName: any): any {
                if (visited.has(pokemonName)) return;
                visited.add(pokemonName);

                // 找到所有从此形态进化的路径
                const children = allEvos.filter(evo => evo.pokemonName === pokemonName);
                for (const child of children) {
                    if (!result.some(r => r.pokemonName === child.pokemonName && r.NextStage === child.NextStage)) {
                        result.push(child);
                    }
                    // 递归处理下一级
                    traverse(child.NextStage);
                }
            }

            // 先找到根
            const rootName = findRoot(name);
            if (!allEvos.some(evo => evo.pokemonName === rootName)) {
                return [];
            }

            // 从根开始遍历所有分支
            traverse(rootName);

            return result.length > 0 ? result : [];
        },
        setType(type: string) {
            this.type = type;
            this.lastSelectedType = type; // 保存选择的属性
        },
        restoreLastType() {
            this.type = this.lastSelectedType; // 恢复上次的属性筛选
        }
    },
    getters: {
        // 例如获取特定类型的精灵数量
        pokemonCountByType(state) {
            return (type: string) => state.PokemonList.filter(pokemon => pokemon.属性.includes(type)).length;
        }
    }
});