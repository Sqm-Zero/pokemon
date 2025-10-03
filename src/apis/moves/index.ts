import { Move } from "../pokemonMoves/type"

// 返回技能列表
export const reqMoves = (): Move[] => {
  return [
    {
      "accuracy": "100",
      "category": "物理",
      "description": "使用长长的尾巴或手等拍打对手进行攻击。",
      "move": "拍击",
      "move_id": "1",
      "power": "40",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用锋利的手刀劈向对手进行攻击。容易击中要害（1级）。",
      "move": "空手劈",
      "move_id": "2",
      "power": "50",
      "type": "格斗"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用连环巴掌拍打对手进行攻击。连续攻击2～5次。",
      "move": "连环巴掌",
      "move_id": "3",
      "power": "25",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用拳头怒涛般的殴打对手进行攻击。连续攻击2～5次。",
      "move": "连续拳",
      "move_id": "4",
      "power": "25",
      "type": "一般"
    },
    {
      "accuracy": "50",
      "category": "物理",
      "description": "使出浑身力气出拳进行攻击。必定会使对手混乱。",
      "move": "爆裂拳",
      "move_id": "5",
      "power": "110",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "向对手的身体投掷小金币进行攻击。战斗后可以拿到钱。",
      "move": "聚宝功",
      "move_id": "6",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用充满火焰的拳头攻击对手。10%让对手陷入灼伤状态。",
      "move": "火焰拳",
      "move_id": "7",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用充满寒气的拳头攻击对手。10%让对手陷入冰冻状态。",
      "move": "冰冻拳",
      "move_id": "8",
      "power": "80",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用充满电流的拳头攻击对手。10%让对手陷入麻痹状态。",
      "move": "雷电拳",
      "move_id": "9",
      "power": "80",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用坚硬且无比锋利的爪子抓对手进行攻击。",
      "move": "抓",
      "move_id": "10",
      "power": "40",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将对手从两侧夹住，给予伤害。",
      "move": "夹住",
      "move_id": "11",
      "power": "80",
      "type": "钢"
    },
    {
      "accuracy": "70",
      "category": "物理",
      "description": "用大钳子或剪刀等夹断对手进行攻击。50%几率造成畏缩。",
      "move": "断头钳",
      "move_id": "12",
      "power": "140",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "制造斩龙之风刃，于第2回合攻击对手。必定击中要害。",
      "move": "斩龙之刃",
      "move_id": "13",
      "power": "110",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "激烈地跳起战舞提高气势。大幅提高自己的攻击（2级）。且提升自身命中率（1级）。",
      "move": "剑舞",
      "move_id": "14",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用镰刀或爪子等切斩对手进行攻击且容易击中要害（1级），可以用来切断纤细的树枝。",
      "move": "居合斩",
      "move_id": "15",
      "power": "80",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用翅膀将刮起的狂风袭向对手进行攻击。",
      "move": "起风",
      "move_id": "16",
      "power": "40",
      "type": "飞行"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用翅膀攻击目标造成伤害，一回合内连续攻击两次。",
      "move": "双翼",
      "move_id": "17",
      "power": "45",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "吹飞对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束（优先度-6）。",
      "move": "吹飞",
      "move_id": "18",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "第1回合飞上天空，第2回合攻击对手且提升自身速度（1级）。可以用来飞往曾经去过的城镇。",
      "move": "飞翔",
      "move_id": "19",
      "power": "100",
      "type": "飞行"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "使用长长的身体或藤蔓等，在4～5回合内绑紧对手进行攻击。",
      "move": "绑紧",
      "move_id": "20",
      "power": "60",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "使用长长的尾巴或藤蔓等摔打对手进行攻击。",
      "move": "摔打",
      "move_id": "21",
      "power": "80",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用如同鞭子般弯曲而细长的藤蔓摔打对手进行攻击。",
      "move": "藤鞭",
      "move_id": "22",
      "power": "45",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用大脚踩踏对手进行攻击。30%使对手畏缩。",
      "move": "踩踏",
      "move_id": "23",
      "power": "65",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用2只脚踢飞对手进行攻击。连续2次给予伤害。",
      "move": "二连踢",
      "move_id": "24",
      "power": "45",
      "type": "格斗"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "使出力大无穷的重踢踢飞对手进行攻击。50%造成对方混乱。",
      "move": "百万吨重踢",
      "move_id": "25",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "使出高高的腾空踢攻击对手。如果踢偏则自己会受到伤害（-50%）。",
      "move": "飞踢",
      "move_id": "26",
      "power": "100",
      "type": "格斗"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "一边快速旋转，一边踢飞对手进行攻击。20%使对手畏缩。并提升自身速度（1级）。",
      "move": "回旋踢",
      "move_id": "27",
      "power": "110",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手脸上泼沙子，从而降低对方命中率（1级）。",
      "move": "泼沙",
      "move_id": "28",
      "power": "0",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用虫子的力量进行突袭。必定能够先制攻击（优先度+1）。",
      "move": "虫突",
      "move_id": "29",
      "power": "50",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将角撞出，笔直地扑向对手进行攻击。20%使对手畏缩。",
      "move": "角撞",
      "move_id": "30",
      "power": "75",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用身体上的刺向对手进行攻击。连续攻击2～5次。使用后几率降低防御（1级）并提升速度（1级）。",
      "move": "龙刺",
      "move_id": "31",
      "power": "25",
      "type": "龙"
    },
    {
      "accuracy": "70",
      "category": "物理",
      "description": "用旋转的角刺入对手进行攻击。50%降低对方防御。",
      "move": "角钻",
      "move_id": "32",
      "power": "140",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用整个身体撞向对手进行攻击。",
      "move": "撞击",
      "move_id": "33",
      "power": "50",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用整个身体压住对手进行攻击。30%让对手陷入麻痹状态。",
      "move": "泰山压顶",
      "move_id": "34",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "使用长长的身体或藤蔓等，在4～5回合内紧束对手进行攻击。",
      "move": "紧束",
      "move_id": "35",
      "power": "60",
      "type": "草"
    },
    {
      "accuracy": "85",
      "category": "物理",
      "description": "以惊人的气势撞向对手进行攻击。自己也会受到少许伤害（-25%）。",
      "move": "猛撞",
      "move_id": "36",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "在2～3回合内，乱打一气地攻击对手。大闹一番后自己会陷入混乱。",
      "move": "大闹一番",
      "move_id": "37",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "拼命地猛撞向对手进行攻击。自己也会受到不小的伤害（-33%）。",
      "move": "舍身冲撞",
      "move_id": "38",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "可爱地左右摇晃尾巴，诱使对手疏忽大意。会降低敌全体的防御（1级）。",
      "move": "摇尾巴",
      "move_id": "39",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将有毒的针刺入对手进行攻击。30%让对手陷入中毒状态。",
      "move": "毒针",
      "move_id": "40",
      "power": "40",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将2根针刺入对手，连续2次给予伤害。20%会让对手陷入中毒状态。",
      "move": "双针",
      "move_id": "41",
      "power": "45",
      "type": "虫"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "向对手发射锐针进行攻击。连续攻击2～5次。",
      "move": "飞弹针",
      "move_id": "42",
      "power": "25",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用犀利的眼神使其害怕，从而降低敌全体的防御（1级）。",
      "move": "瞪眼",
      "move_id": "43",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用尖锐的牙咬住对手进行攻击。30%使对手畏缩。",
      "move": "咬住",
      "move_id": "44",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "让对手听可爱的叫声，引开注意力使其疏忽，从而降低敌全体的攻击（1级）。",
      "move": "叫声",
      "move_id": "45",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "放走对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束（优先度-6）。",
      "move": "吼叫",
      "move_id": "46",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "让对手听舒适、美妙的歌声，从而陷入睡眠状态。（最多两回合）",
      "move": "唱歌",
      "move_id": "47",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "85",
      "category": "变化",
      "description": "从身体发出特殊的音波，从而使队友混乱。（坑队友专用技能）。",
      "move": "超音波",
      "move_id": "48",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "将冲击波撞向对手进行攻击。必定会给予20的伤害。",
      "move": "音爆",
      "move_id": "49",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "阻碍对手行动，之前使出的招式将在4回合内无法使用。",
      "move": "定身法",
      "move_id": "50",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将强酸泼向敌方进行攻击。30%会降低敌方的特防。",
      "move": "溶解液",
      "move_id": "51",
      "power": "40",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射小型火焰进行攻击。10%让对手陷入灼伤状态。",
      "move": "火花",
      "move_id": "52",
      "power": "40",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射烈焰进行攻击。10%让对手陷入灼伤状态。",
      "move": "喷射火焰",
      "move_id": "53",
      "power": "90",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用白雾覆盖身体。在5回合内不会让对手降低自己的能力可率先使用（优先度+1）。",
      "move": "白雾",
      "move_id": "54",
      "power": "0",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手猛烈地喷射水流进行攻击。",
      "move": "水枪",
      "move_id": "55",
      "power": "40",
      "type": "水"
    },
    {
      "accuracy": "85",
      "category": "特殊",
      "description": "向对手猛烈地喷射大量水流进行攻击。",
      "move": "水炮",
      "move_id": "56",
      "power": "110",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "利用大浪攻击自己周围所有的宝可梦。可以用来渡河。",
      "move": "冲浪",
      "move_id": "57",
      "power": "90",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射冰冻光束进行攻击。10%让对手陷入冰冻状态。",
      "move": "冰冻光束",
      "move_id": "58",
      "power": "90",
      "type": "冰"
    },
    {
      "accuracy": "75",
      "category": "特殊",
      "description": "（敌方全体）将猛烈的暴风雪刮向敌全方进行攻击。20%让对手陷入冰冻状态（雪天必中）。",
      "move": "暴风雪",
      "move_id": "59",
      "power": "110",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射神奇的光线进行攻击。10%会使对手混乱。",
      "move": "幻象光线",
      "move_id": "60",
      "power": "90",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手猛烈地喷射泡沫进行攻击。10%会降低对手的速度。",
      "move": "泡沫光线",
      "move_id": "61",
      "power": "65",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射虹色光束进行攻击。会提升自身速度（1级）。",
      "move": "极光束",
      "move_id": "62",
      "power": "60",
      "type": "冰"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "向对手发射强烈的光线进行攻击。",
      "move": "破坏光线",
      "move_id": "63",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用尖锐的喙或角刺向对手进行攻击。",
      "move": "啄",
      "move_id": "64",
      "power": "50",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "一边旋转，一边将尖喙刺入对手进行攻击。",
      "move": "啄钻",
      "move_id": "65",
      "power": "95",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将对手连同自己一起摔向地面进行攻击。自己也会受到不小的伤害（-33%）。",
      "move": "地狱翻滚",
      "move_id": "66",
      "power": "120",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用力踢对手的脚，使其摔倒进行攻击。对手越重，威力越大（最大威力为120）。",
      "move": "踢倒",
      "move_id": "67",
      "power": "1",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "从对手那里受到物理攻击的伤害将以2倍返还给同一个对手。（优先度-5）",
      "move": "双倍奉还",
      "move_id": "68",
      "power": "1",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "利用引力将对手甩飞出去。给予对手和自己等级相同的伤害。",
      "move": "地球上投",
      "move_id": "69",
      "power": "1",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "使出浑身力气殴打对手进行攻击。20%会使对手畏缩。可以用来推动巨大的岩石。",
      "move": "怪力",
      "move_id": "70",
      "power": "90",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "吸取对手的养分进行攻击。可以回复给予对手伤害的一半HP。",
      "move": "吸取",
      "move_id": "71",
      "power": "40",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "吸取对手的养分进行攻击。可以回复给予对手伤害的一半HP。",
      "move": "超级吸取",
      "move_id": "72",
      "power": "60",
      "type": "草"
    },
    {
      "accuracy": "90",
      "category": "变化",
      "description": "植入寄生种子后，将在每回合吸取对手的1/8的HP，从而用来回复自己的HP。",
      "move": "寄生种子",
      "move_id": "73",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让身体一下子长大，从而提高1级攻击、特攻和速度。（晴天下效果翻倍）",
      "move": "生长",
      "move_id": "74",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "飞出叶片，切斩对手进行攻击。必定先制（优先度+1）。",
      "move": "飞叶快刀",
      "move_id": "75",
      "power": "50",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "第1回合收集满满的日光，第2回合发射光束进行攻击。（晴天下无需蓄力）",
      "move": "阳光烈焰",
      "move_id": "76",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "撒出毒粉，从而让对手陷入中毒状态。",
      "move": "毒粉",
      "move_id": "77",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "撒出麻痹粉，从而让对手陷入麻痹状态。",
      "move": "麻痹粉",
      "move_id": "78",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "撒出催眠粉，从而让对手陷入睡眠状态。（最多两回合）",
      "move": "催眠粉",
      "move_id": "79",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "在2～3回合内，散落花瓣攻击所有对手。之后自己会陷入混乱。",
      "move": "花瓣舞",
      "move_id": "80",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "95",
      "category": "变化",
      "description": "用口中吐出的丝缠绕对手，从而降低敌全体的速度（1级）。",
      "move": "吐丝",
      "move_id": "81",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将愤怒的冲击波撞向对手进行攻击。必定会给予40的伤害。",
      "move": "龙之怒",
      "move_id": "82",
      "power": "1",
      "type": "龙"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "将对手困在激烈的火焰旋涡中，在4～5回合内进行攻击。",
      "move": "火焰旋涡",
      "move_id": "83",
      "power": "60",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "发出电流刺激对手进行攻击。10%让对手陷入麻痹状态。",
      "move": "电击",
      "move_id": "84",
      "power": "40",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发出强力电击进行攻击。10%让对手陷入麻痹状态。",
      "move": "十万伏特",
      "move_id": "85",
      "power": "90",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手发出微弱的电击，从而让对手陷入麻痹状态。",
      "move": "电磁波",
      "move_id": "86",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "75",
      "category": "特殊",
      "description": "向对手劈下暴雷进行攻击。30%让对手陷入麻痹状态。（雨天必中）",
      "move": "打雷",
      "move_id": "87",
      "power": "110",
      "type": "电"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "拿起小岩石，投掷对手进行攻击。",
      "move": "落石",
      "move_id": "88",
      "power": "50",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "利用地震的冲击，攻击自己周围所有的宝可梦。挖洞状态被击中时伤害翻倍",
      "move": "地震",
      "move_id": "89",
      "power": "100",
      "type": "地面"
    },
    {
      "accuracy": "70",
      "category": "物理",
      "description": "让对手掉落于地裂的裂缝中进行攻击。50%几率造成混乱。",
      "move": "地裂",
      "move_id": "90",
      "power": "140",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "第1回合钻入，第2回合攻击对手。攻击后提升自身防御（1级）。",
      "move": "挖洞",
      "move_id": "91",
      "power": "100",
      "type": "地面"
    },
    {
      "accuracy": "90",
      "category": "变化",
      "description": "让对手陷入剧毒状态。（只有毒系宝可梦可学习）每回合结束时损失最大HP的，伤害计数/16，计数从1增至15。",
      "move": "剧毒",
      "move_id": "92",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发送微弱的念力进行攻击。10%会使对手混乱。",
      "move": "念力",
      "move_id": "93",
      "power": "60",
      "type": "超能力"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）向敌方发送强大的念力进行攻击。20%会降低对手的特防。",
      "move": "精神强念",
      "move_id": "94",
      "power": "95",
      "type": "超能力"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "施以诱导睡意的暗示，让对手陷入睡眠状态。（最多两回合）",
      "move": "催眠术",
      "move_id": "95",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "唤醒身体深处沉睡的力量，从而提高自己的1级攻击、防御和速度。",
      "move": "瑜伽姿势",
      "move_id": "96",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让身体放松变得轻盈，大幅提高自己的速度（2级），而且还提升命中（1级）。",
      "move": "高速移动",
      "move_id": "97",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以迅雷不及掩耳之势扑向对手。必定能够先制攻击（优先度+1）。",
      "move": "电光一闪",
      "move_id": "98",
      "power": "50",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "带着怒火向对方进行攻击，有30%几率灼伤对手。如果在使出招式后受到攻击的话，会因愤怒提高自身攻击（1级）。",
      "move": "怒火冲天",
      "move_id": "99",
      "power": "80",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "停止和野生宝可梦战斗并逃走。在对战外使用可以回到最后去过的宝可梦中心。",
      "move": "瞬间移动",
      "move_id": "100",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "显示恐怖幻影，只给予对手和自己等级相同的伤害。",
      "move": "黑夜魔影",
      "move_id": "101",
      "power": "1",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "可以将对手最后使用的招式，在战斗内变成自己的招式。",
      "move": "模仿",
      "move_id": "102",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "85",
      "category": "变化",
      "description": "发出不由自主想要捂起耳朵的刺耳声，从而大幅降低对手的防御（2级）。",
      "move": "刺耳声",
      "move_id": "103",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "通过快速移动来制造分身，扰乱对手，从而提高闪避率（1级）。",
      "move": "影子分身",
      "move_id": "104",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让细胞再生，从而回复自己最大HP的一半。",
      "move": "自我再生",
      "move_id": "105",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "全身使劲，让身体变硬，从而提高自己的防御（1级）。",
      "move": "变硬",
      "move_id": "106",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "该招式无法使用。",
      "move": "变小",
      "move_id": "107",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手喷出烟或墨汁等，从而降低对手的命中率（1级）。",
      "move": "烟幕",
      "move_id": "108",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "显示奇怪的光，扰乱对手。使对手混乱。",
      "move": "奇异之光",
      "move_id": "109",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "缩入壳里保护身体，从而大幅提高自己的防御（2级）。",
      "move": "缩入壳中",
      "move_id": "110",
      "power": "0",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将身体蜷曲变圆，从而提高自己的防御（1级）。",
      "move": "变圆",
      "move_id": "111",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "制造坚固的壁障，从而提高我方1级的防御和特防。先制技能（优先度+1）。",
      "move": "屏障",
      "move_id": "112",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内使用神奇的墙，从对手那受到的特殊攻击的伤害减半。",
      "move": "光墙",
      "move_id": "113",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "升起黑雾，将正在场上战斗的全体宝可梦的能力变回原点。可率先使用（优先度+1）。",
      "move": "黑雾",
      "move_id": "114",
      "power": "0",
      "type": "冰"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内使用神奇的墙，从对手那受到的物理攻击的伤害减半。",
      "move": "反射壁",
      "move_id": "115",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "深深地吸口气，集中精神。自己的攻击会变得容易击中要害（2级）。",
      "move": "聚气",
      "move_id": "116",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "在2回合内忍受攻击，受到的伤害会2倍返还给对手。",
      "move": "忍耐",
      "move_id": "117",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "挥动手指刺激自己的大脑，从所有的招式中任意使出1个。",
      "move": "挥指",
      "move_id": "118",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "模仿对手使用的招式，自己也使用相同招式。",
      "move": "鹦鹉学舌",
      "move_id": "119",
      "power": "0",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "引发爆炸，攻击自己周围所有的宝可梦。使用后陷入濒死。",
      "move": "自爆",
      "move_id": "120",
      "power": "150",
      "type": "电"
    },
    {
      "accuracy": "75",
      "category": "物理",
      "description": "向对手用力投掷大大的蛋进行攻击。",
      "move": "炸蛋",
      "move_id": "121",
      "power": "100",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用长长的舌头，舔遍对手进行攻击。30%让对手陷入麻痹状态。",
      "move": "舌舔",
      "move_id": "122",
      "power": "40",
      "type": "幽灵"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "将肮脏的浓雾吹向对手进行攻击。40%让对手陷入中毒状态。",
      "move": "浊雾",
      "move_id": "123",
      "power": "80",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用污泥投掷对手进行攻击。30%让对手陷入中毒状态。",
      "move": "污泥攻击",
      "move_id": "124",
      "power": "65",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用手中的骨头殴打对手进行攻击。20%会使对手畏缩。",
      "move": "骨棒",
      "move_id": "125",
      "power": "70",
      "type": "地面"
    },
    {
      "accuracy": "85",
      "category": "特殊",
      "description": "用大字形状的火焰烧尽对手。10%让对手陷入灼伤状态。",
      "move": "大字爆炎",
      "move_id": "126",
      "power": "120",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以惊人的气势扑向对手。20%会使对手畏缩。可以用来攀登瀑布。",
      "move": "攀瀑",
      "move_id": "127",
      "power": "90",
      "type": "水"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用非常坚固且厚实的贝壳，在4～5回合内夹住对手进行攻击。",
      "move": "贝壳夹击",
      "move_id": "128",
      "power": "60",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "发射星形的光攻击对手。攻击必定会命中。",
      "move": "高速星星",
      "move_id": "129",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "第1回合把头缩进去，从而提高防御（1级）。第2回合攻击对手。",
      "move": "火箭头锤",
      "move_id": "130",
      "power": "130",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "向对手发射锐针进行攻击。连续攻击2～5次。",
      "move": "钢刺连射",
      "move_id": "131",
      "power": "25",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用触手或青藤等缠绕进行攻击。10%会降低对手的速度。",
      "move": "缠绕",
      "move_id": "132",
      "power": "40",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将头脑清空，瞬间忘记某事，从而大幅提高自己的特防（2级）。",
      "move": "瞬间失忆",
      "move_id": "133",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "集中精神折弯汤匙，从而大幅度提升自身特攻（2级）以及特防（1级）和命中率（1级）。",
      "move": "折弯汤匙",
      "move_id": "134",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "回复自己最大HP的一半，可以在对战外使用。",
      "move": "生蛋",
      "move_id": "135",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "跳起后用膝盖撞对手进行攻击。如果撞偏则自己会受到伤害（-50%）。",
      "move": "飞膝踢",
      "move_id": "136",
      "power": "130",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "发出来自神的强大威压，从而让其敌全方陷入麻痹状态且减速。",
      "move": "神威",
      "move_id": "137",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "吃掉正在睡觉的对手的梦进行攻击。回复对手所受到伤害的一半HP。",
      "move": "食梦",
      "move_id": "138",
      "power": "100",
      "type": "超能力"
    },
    {
      "accuracy": "90",
      "category": "变化",
      "description": "将毒瓦斯吹到对手的脸上，从而让敌全体陷入中毒状态。",
      "move": "毒瓦斯",
      "move_id": "139",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "85",
      "category": "物理",
      "description": "向对手投掷圆形物体进行攻击。连续攻击2～5次。",
      "move": "投球",
      "move_id": "140",
      "power": "15",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "吸取血液攻击对手。可以回复给予对手伤害的一半HP。",
      "move": "吸血",
      "move_id": "141",
      "power": "80",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用恐怖的脸强吻队友。让队友陷入睡眠状态。（坑队友专用技能）。",
      "move": "恶魔之吻",
      "move_id": "142",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "第2回合攻击对手。可以提升自身攻击（1级），也容易击中要害（1级）。",
      "move": "神鸟猛击",
      "move_id": "143",
      "power": "120",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "变身成对手宝可梦的样子，能够使用和对手完全相同的招式。",
      "move": "变身",
      "move_id": "144",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手用力吹起无数泡泡进行攻击。10%会降低对手的速度。",
      "move": "泡沫",
      "move_id": "145",
      "power": "40",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "有节奏地出拳攻击对手。20%会使对手混乱。",
      "move": "迷昏拳",
      "move_id": "146",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "沙沙沙地撒满具有催眠效果的孢子，从而让对手陷入睡眠状态。（最多两回合）",
      "move": "蘑菇孢子",
      "move_id": "147",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "使出耀眼光芒，从而降低对手的命中率（1级）。可以用来照亮漆黑的洞穴。",
      "move": "闪光",
      "move_id": "148",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射神奇的念波进行攻击。每次使用，伤害都会改变。",
      "move": "精神波",
      "move_id": "149",
      "power": "1",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "也不攻击只是一蹦一蹦地跳，什么都不会发生",
      "move": "跃起",
      "move_id": "150",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "通过细胞的变化进行液化，从而大幅提高自己的防御（2级）。",
      "move": "溶化",
      "move_id": "151",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用水之力量撞向对手进行攻击。自身也会受到不小的伤害（-33%）。",
      "move": "波动冲",
      "move_id": "152",
      "power": "120",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "引发大爆炸，攻击自己周围所有的宝可梦。使用后自己会陷入濒死。",
      "move": "大爆炸",
      "move_id": "153",
      "power": "250",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用爪子或镰刀等抓对手进行攻击。连续攻击2～5次。",
      "move": "乱抓",
      "move_id": "154",
      "power": "25",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用手中的骨头投掷对手，来回连续2次给予伤害。",
      "move": "骨头回力镖",
      "move_id": "155",
      "power": "50",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "连续睡上2回合。回复自己的全部HP以及治愈所有异常状态。",
      "move": "睡觉",
      "move_id": "156",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "（敌方全体）将大岩石猛烈地撞向敌方进行攻击。30%会使对手畏缩。",
      "move": "岩崩",
      "move_id": "157",
      "power": "80",
      "type": "岩石"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用锋利的牙齿牢牢地咬住对手进行攻击。20%会使对手畏缩。",
      "move": "强力腮咬",
      "move_id": "158",
      "power": "90",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "强化自身的钢铁躯体，从而大幅度提高自己的攻击（2级）和特防（1级）但会降低自身速度（1级）",
      "move": "钢铁之躯",
      "move_id": "159",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将自己的属性转换成和已学会的招式中第一个招式相同的属性。",
      "move": "纹理",
      "move_id": "160",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "用3种光线进行攻击。20%让对手陷入麻痹、灼伤或冰冻的状态。",
      "move": "三重攻击",
      "move_id": "161",
      "power": "120",
      "type": "电"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用锋利的门牙猛烈地咬住队友。造成队友HP减半。（坑队友专用技能）。",
      "move": "愤怒门牙",
      "move_id": "162",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用爪子或镰刀等劈开对手进行攻击。容易击中要害（1级）。",
      "move": "劈开",
      "move_id": "163",
      "power": "70",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "削减自己1/4的HP，制造分身。分身将成为自己的替身。",
      "move": "替身",
      "move_id": "164",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "当自己的PP耗尽时，努力挣扎攻击对手。自己也会受到少许伤害。",
      "move": "挣扎",
      "move_id": "165",
      "power": "50",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将对手使用的招式变成自己的招式。使用1次后写生消失。",
      "move": "写生",
      "move_id": "166",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "连续3次踢对手进行攻击。每踢中一次，威力就会提高。每一击都有10%概率畏缩。",
      "move": "瞬影三击",
      "move_id": "167",
      "power": "22",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "攻击的同时盗取道具。当自己携带道具时，不会去盗取。",
      "move": "小偷",
      "move_id": "168",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将黏糊糊的细丝一层一层缠住对手，使其不能从战斗中逃走。并降低对方速度（1级）。",
      "move": "蛛网",
      "move_id": "169",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用心感受对手的行动，下次攻击必定会击中对手。",
      "move": "心之眼",
      "move_id": "170",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "让在睡眠状态下的对手做恶梦，每回合会缓缓减少1/4HP。",
      "move": "恶梦",
      "move_id": "171",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "让火焰覆盖全身，猛撞向对手进行攻击。10%让对手陷入灼伤状态。",
      "move": "火焰轮",
      "move_id": "172",
      "power": "60",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "在自己睡觉时，发出噪音进行攻击。30%会使对手畏缩。",
      "move": "打鼾",
      "move_id": "173",
      "power": "50",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "幽灵属性时减少自身HP并让对方进入诅咒状态。非幽灵属性时，自身物攻和防御上升1级，速度下降1级",
      "move": "诅咒",
      "move_id": "174",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "抓狂般乱打进行攻击。自己的HP越少，招式的威力越大。",
      "move": "抓狂",
      "move_id": "175",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "为了可以抵抗对手最后使用的招式，从而使自己的属性发生变化。",
      "move": "纹理2",
      "move_id": "176",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "发射空气的超级旋涡进行爆炸攻击。容易击中要害（2级）。",
      "move": "空中爆破",
      "move_id": "177",
      "power": "130",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "将棉花般柔软的孢子紧贴敌人，从而大幅降低对手的速度（2级）。",
      "move": "棉孢子",
      "move_id": "178",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "竭尽全力进行攻击。自己的HP越少，招式的威力越大。（最大威力为200）",
      "move": "起死回生",
      "move_id": "179",
      "power": "1",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "对对手最后使用的招式怀有怨恨，减少4PP该招式。",
      "move": "怨恨",
      "move_id": "180",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将冰冷的细雪吹向对手进行攻击。10%会让对手陷入冰冻状态。",
      "move": "细雪",
      "move_id": "181",
      "power": "40",
      "type": "冰"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "完全抵挡对手的攻击。二次使用成功率降至33%。连用再降33%（优先度+4）。",
      "move": "守住",
      "move_id": "182",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以迅雷不及掩耳之势出拳。必定能够先制攻击（优先度+1）。",
      "move": "音速拳",
      "move_id": "183",
      "power": "50",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用恐怖的脸瞪着对手，使其害怕，从而大幅降低对手的速度（2级）。",
      "move": "鬼面",
      "move_id": "184",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "悄悄地靠近对手，趁其不备进行殴打。攻击必定会命中。",
      "move": "出奇一击",
      "move_id": "185",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "像天使般可爱地亲吻对手，从而使对手混乱。",
      "move": "天使之吻",
      "move_id": "186",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将自己的HP减少到最大HP的一半，从而最大限度提高自己的攻击（6级）。",
      "move": "腹鼓",
      "move_id": "187",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用污泥投掷对手进行攻击。30%让对手陷入中毒状态。",
      "move": "污泥炸弹",
      "move_id": "188",
      "power": "90",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手的脸等投掷泥块进行攻击。会降低对手的命中率（1级）。",
      "move": "掷泥",
      "move_id": "189",
      "power": "35",
      "type": "地面"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "向对手的脸等喷出墨汁进行攻击。30%会降低对手的命中率（1级）。",
      "move": "墨汁炮",
      "move_id": "190",
      "power": "120",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在对手的脚下扔撒菱。对替换出场的对手的宝可梦给予伤害。",
      "move": "撒菱",
      "move_id": "191",
      "power": "0",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）发射大炮一样的电流进行攻击。50%几率对手陷入麻痹状态。",
      "move": "怒雷",
      "move_id": "192",
      "power": "110",
      "type": "电"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "对幽灵属性宝可梦没有效果的招式以及闪避率高的对手，使用后变得能够打中。",
      "move": "识破",
      "move_id": "193",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "该招式无法使用。",
      "move": "同命",
      "move_id": "194",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "10",
      "category": "变化",
      "description": "该招式无法使用。",
      "move": "灭亡之歌",
      "move_id": "195",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）将结冰的冷气吹向对手进行攻击。会降低对手的速度（1级）。",
      "move": "冰冻之风",
      "move_id": "196",
      "power": "60",
      "type": "冰"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "完全抵挡对手的攻击。连续使出则容易失败。（优先度+4）",
      "move": "看穿",
      "move_id": "197",
      "power": "0",
      "type": "格斗"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用坚硬的骨头殴打对手进行攻击。连续攻击2～5次。",
      "move": "骨棒乱打",
      "move_id": "198",
      "power": "25",
      "type": "地面"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "紧紧瞄准对手，下次攻击必定会打中。",
      "move": "锁定",
      "move_id": "199",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "（敌方全体）龙之逆鳞、触之必死！攻击有30%几率造成畏缩效果。但2-3回合后自身会混乱。",
      "move": "龙之逆鳞",
      "move_id": "200",
      "power": "130",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内扬起沙暴，除岩石、地面和钢以外，受到最大HP1/16的伤害。岩石属性的特防还会提高50%。",
      "move": "沙暴",
      "move_id": "201",
      "power": "0",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "吸取对手的养分进行攻击。可以回复给予对手伤害的一半HP。",
      "move": "终极吸取",
      "move_id": "202",
      "power": "80",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "即使受到攻击，也至少会留下1HP。连续使出则容易失败。",
      "move": "挺住",
      "move_id": "203",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "可爱地凝视，诱使对手疏忽大意，从而大幅降低对手的攻击（2级）。",
      "move": "撒娇",
      "move_id": "204",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "在5回合内连续滚动攻击对手。招式每次击中，威力就会翻倍。",
      "move": "滚动",
      "move_id": "205",
      "power": "30",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "对手的HP至少会留下1HP，如此般手下留情地攻击。",
      "move": "点到为止",
      "move_id": "206",
      "power": "60",
      "type": "钢"
    },
    {
      "accuracy": "90",
      "category": "变化",
      "description": "激怒对手，使其混乱。因为愤怒，对手的攻击会大幅提高（2级）。",
      "move": "虚张声势",
      "move_id": "207",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "可以用牛奶回复自己或者队友最大HP的70%。（战斗外也可以使用）",
      "move": "喝牛奶",
      "move_id": "208",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "迅猛无比的电击，必定能够先制攻击（优先度+1）。必定击中对方的要害。",
      "move": "电电加速",
      "move_id": "209",
      "power": "45",
      "type": "电"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用镰刀或爪子等切斩对手进行攻击。连续击中，威力就会翻倍。如果不击中则伤害重置（最高160威力）",
      "move": "连斩",
      "move_id": "210",
      "power": "40",
      "type": "虫"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用坚硬的翅膀敲打对手进行攻击。20%会提高自己的防御（1级）。",
      "move": "钢翼",
      "move_id": "211",
      "power": "80",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用好似要勾人心魂的黑色目光一动不动地凝视对手，使其不能从战斗中逃走。",
      "move": "黑色目光",
      "move_id": "212",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "双方宝可梦性别为异性时，让对手着迷。对手有50%几率无法行动。",
      "move": "迷人",
      "move_id": "213",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "从自己已学会的招式中任意使出1个。只能在自己睡觉时使用。",
      "move": "梦话",
      "move_id": "214",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让同伴听舒适的铃音，从而治愈我方全员的异常状态。",
      "move": "治愈铃声",
      "move_id": "215",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "和训练家默契配合的攻击对手造成亲密度度×0.4的伤害，威力最大为102",
      "move": "报恩",
      "move_id": "216",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "递给对手设有圈套的盒子进行攻击。也有可能回复对手HP。",
      "move": "礼物",
      "move_id": "217",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "为了发泄不满而全力攻击对手。亲密度越低，威力越大。",
      "move": "迁怒",
      "move_id": "218",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内被神奇的力量守护，从而不会陷入异常状态。",
      "move": "神秘守护",
      "move_id": "219",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将自己的HP和对手的HP相加，然后自己和对手友好地平分。",
      "move": "分担痛楚",
      "move_id": "220",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用神秘的火焰烧尽对手进行攻击。70%会让对手陷入灼伤状态。",
      "move": "神圣之火",
      "move_id": "221",
      "power": "130",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "晃动地面，攻击自己周围所有的宝可梦。招式的威力会有各种变化。",
      "move": "震级",
      "move_id": "222",
      "power": "1",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用亿万吨力量的拳头猛烈的攻击对手。必定眩晕。",
      "move": "亿万吨重击",
      "move_id": "223",
      "power": "130",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用坚硬且华丽的角狠狠地刺入对手进行攻击。20%概率畏缩。",
      "move": "超级角击",
      "move_id": "224",
      "power": "120",
      "type": "虫"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "将强烈的龙之气息吹向对手进行攻击。10%概率麻痹。",
      "move": "天龙之息",
      "move_id": "225",
      "power": "120",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "和后备宝可梦进行替换。换上的宝可梦能直接继承其能力的变化。",
      "move": "接棒",
      "move_id": "226",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "让对手接受再来一次，连续3次使出最后使用的招式。",
      "move": "再来一次",
      "move_id": "227",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "当对手替换宝可梦上场时使出此招式的话，能够以2倍的威力进行攻击。",
      "move": "追打",
      "move_id": "228",
      "power": "40",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "通过旋转来攻击对手。还可以摆脱绑紧、紧束、寄生种子和撒菱等招式。并提升速度（1级）。",
      "move": "高速旋转",
      "move_id": "229",
      "power": "50",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用香气大幅降低对方全体的闪避率（2级）。",
      "move": "甜甜香气",
      "move_id": "230",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "使用坚硬的尾巴摔打对手进行攻击。30%会降低对手的防御（1级）。",
      "move": "铁尾",
      "move_id": "231",
      "power": "100",
      "type": "钢"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用钢铁之爪劈开对手进行攻击。30%会提高自己的攻击（1级）。",
      "move": "金属爪",
      "move_id": "232",
      "power": "60",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "会在对手之后进行攻击。但是自己的攻击必定会命中。",
      "move": "借力摔",
      "move_id": "233",
      "power": "70",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "晴天下回复自身最大HP的2/3。没有天气则回复自身最大HP的1/2，其他天气则是最大HP的1/4。",
      "move": "晨光",
      "move_id": "234",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "晴天下回复自身最大HP的2/3。没有天气则回复自身最大HP的1/2，其他天气则是最大HP的1/4。",
      "move": "光合作用",
      "move_id": "235",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "晴天下回复自身最大HP的2/3。没有天气则回复自身最大HP的1/2，其他天气则是最大HP的1/4。",
      "move": "月光",
      "move_id": "236",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "招式的属性会随着使用此招式的宝可梦而改变。",
      "move": "觉醒力量",
      "move_id": "237",
      "power": "80",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用两手呈十字劈打对手进行攻击。容易击中要害（1级）。",
      "move": "十字劈",
      "move_id": "238",
      "power": "100",
      "type": "格斗"
    },
    {
      "accuracy": "95",
      "category": "特殊",
      "description": "（敌方全体）兴起暴狂龙卷将对方卷入进行攻击。20%会使对手混乱。",
      "move": "暴狂龙卷",
      "move_id": "239",
      "power": "100",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内一直降雨，从而提高水属性的招式威力50%。火属性的招式威力则降低50%。",
      "move": "求雨",
      "move_id": "240",
      "power": "0",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内阳光变得强烈，从而提高火属性的招式威力50%。水属性的招式威力则降低50%。",
      "move": "大晴天",
      "move_id": "241",
      "power": "0",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用利牙咬碎对手进行攻击。20%会降低对手的防御（1级）。",
      "move": "咬碎",
      "move_id": "242",
      "power": "90",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "从对手那里受到特殊攻击的伤害将以2倍返还给同一个对手（优先度-5）。",
      "move": "镜面反射",
      "move_id": "243",
      "power": "1",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "向自己施以自我暗示，将能力变化的状态变得和对手一样。",
      "move": "自我暗示",
      "move_id": "244",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以迅雷不及掩耳之势猛撞向对手进行攻击。必定能够先制攻击（优先度+2）。",
      "move": "神速",
      "move_id": "245",
      "power": "80",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用原始之力进行攻击。10%会提高自己的全部能力（1级）。",
      "move": "原始之力",
      "move_id": "246",
      "power": "60",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "投掷一团黑影进行攻击。20%会降低对手的特防（1级）。",
      "move": "暗影球",
      "move_id": "247",
      "power": "95",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "会用无数道光束攻击对手。两回合后攻击对手。",
      "move": "预知未来",
      "move_id": "248",
      "power": "120",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用拳头进行攻击。30%会降低对手的防御（1级）。",
      "move": "碎岩",
      "move_id": "249",
      "power": "80",
      "type": "格斗"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "将对手困在激烈的水流旋涡中，在4～5回合内进行攻击。",
      "move": "潮旋",
      "move_id": "250",
      "power": "60",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "我方全员进行攻击。同行的宝可梦越多，招式的攻击次数越多。",
      "move": "围攻",
      "move_id": "251",
      "power": "1",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "进行先制攻击，使对手畏缩。要在出场后立刻使出才能成功（优先度+3）。",
      "move": "击掌奇袭",
      "move_id": "252",
      "power": "40",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "在3回合内用骚乱攻击对手。在此期间谁都不能入眠。",
      "move": "吵闹",
      "move_id": "253",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "积蓄力量，提高自己的防御和特防（1级）。最多积蓄3次。",
      "move": "蓄力",
      "move_id": "254",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将积蓄的力量撞向对手进行攻击。积蓄得越多，威力越大。",
      "move": "喷出",
      "move_id": "255",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将积蓄的力量吞下，从而回复自己的HP。积蓄得越多，回复越大。",
      "move": "吞下",
      "move_id": "256",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）将炎热的气息吹向对手进行攻击。10%会让对手陷入灼伤状态。",
      "move": "热风",
      "move_id": "257",
      "power": "95",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内一直降冰雹，除冰属性的宝可梦以外，给予全体宝可梦伤害最大HP的1/16。",
      "move": "冰雹",
      "move_id": "258",
      "power": "0",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手无理取闹，令其不能连续2次使出相同招式。",
      "move": "无理取闹",
      "move_id": "259",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "吹捧对手，使其混乱。同时还会大幅度提高对手的特攻（2级）。",
      "move": "吹捧",
      "move_id": "260",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "95",
      "category": "变化",
      "description": "放出怪异的火焰，从而让对手陷入灼伤状态。",
      "move": "鬼火",
      "move_id": "261",
      "power": "0",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "虽然会使自己陷入濒死，但是能够大幅降低对手的攻击和特攻（2级）。",
      "move": "临别礼物",
      "move_id": "262",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "当自己处于中毒、麻痹、灼伤状态时，向对手使出此招式的话，威力会变成2倍。",
      "move": "硬撑",
      "move_id": "263",
      "power": "70",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "集中精神出拳。在招式使出前若受到攻击则会失败。（优先度-3）",
      "move": "真气拳",
      "move_id": "264",
      "power": "150",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "对于麻痹状态下的对手，威力会变成2倍。但相反对手的麻痹也会被治愈。",
      "move": "清醒",
      "move_id": "265",
      "power": "70",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "引起对手的注意，将对手的攻击全部转移到自己身上（优先度+2）。",
      "move": "看我嘛",
      "move_id": "266",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用自然之力进行攻击。根据所使用场所的不同，使出的招式也会有所变化。",
      "move": "自然之力",
      "move_id": "267",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "提高下一回合使出的电属性的招式威力。自己的特防也会提高（1级）。",
      "move": "充电",
      "move_id": "268",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "使对手愤怒。在3回合内让对手只能使出给予伤害的招式。",
      "move": "挑衅",
      "move_id": "269",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "帮助伙伴。被帮助的宝可梦，其招式威力提升50%（优先度+5）。",
      "move": "帮助",
      "move_id": "270",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "抓住对手的空隙，交换自己和对手的持有物。",
      "move": "戏法",
      "move_id": "271",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "扮演对手，让自己的特性变得和对手相同。",
      "move": "扮演",
      "move_id": "272",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在下一回合回复自己或是替换出场的宝可梦最大HP的一半。",
      "move": "祈愿",
      "move_id": "273",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "向我方紧急求助，从我方宝可梦已学会的招式中随机使用1个。",
      "move": "借助",
      "move_id": "274",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在大地上扎根，每回合回复自己的1/16HP。因为扎根了，所以不能替换宝可梦。",
      "move": "扎根",
      "move_id": "275",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "发挥惊人的力量攻击对手。但自己的攻击和防御会降低（1级）。",
      "move": "蛮力",
      "move_id": "276",
      "power": "120",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "当对手使出会变成异常状态的招式或寄生种子等时，会将对手的招式反射回去（优先度+4）。",
      "move": "魔法反射",
      "move_id": "277",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "使战斗中已经消耗掉的自己的持有物再生，并可以再次使用。",
      "move": "回收利用",
      "move_id": "278",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "如果受到对手的招式攻击，就能给予对手2倍的伤害（优先度-4）。",
      "move": "报复",
      "move_id": "279",
      "power": "60",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将手刀猛烈地挥下攻击对手。瞬间破坏光墙和反射壁等。此伤害不受减半效果影响",
      "move": "劈瓦",
      "move_id": "280",
      "power": "85",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "打个大哈欠引起睡意。在下一回合让对手陷入睡眠状态。（优先度-5）",
      "move": "哈欠",
      "move_id": "281",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "拍落对手的持有物，直到战斗结束都不能使用。对手携带道具时会增加50%伤害。",
      "move": "拍落",
      "move_id": "282",
      "power": "70",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "该招式无法使用。",
      "move": "蛮干",
      "move_id": "283",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "爆发火山的力量攻击对手。自己的HP越少，招式的威力越小。",
      "move": "火山喷发",
      "move_id": "284",
      "power": "150",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力互换自己和对手的特性。",
      "move": "特性互换",
      "move_id": "285",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "如果对手有和自己相同的招式，那么只有对手无法使用该招式。",
      "move": "封印",
      "move_id": "286",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让身体休息，治愈自己身上所中的毒、麻痹、灼伤的异常状态。",
      "move": "焕然一新",
      "move_id": "287",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "因对手的招式而陷入濒死时给对手施加怨念，让该招式的PP变成0。",
      "move": "怨念",
      "move_id": "288",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将对手打算使用的回复招式或能力变化招式夺为己用。",
      "move": "抢夺",
      "move_id": "289",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "根据使用场所不同，该招式的追加效果也会有所变化。可以用来建造秘密基地。",
      "move": "秘密之力",
      "move_id": "290",
      "power": "70",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "第1回合潜入水中，第2回合猛袭且提升特防（1级）。可潜入水底探索大海或沉船。",
      "move": "潜水",
      "move_id": "291",
      "power": "100",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用张开着的双手猛推对手进行攻击。连续攻击2～5次。",
      "move": "猛推",
      "move_id": "292",
      "power": "25",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "根据所在场所不同，如水边、草丛和洞窟等，可以改变自己的属性。",
      "move": "保护色",
      "move_id": "293",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "凝视闪烁的光芒，集中自己的精神，从而巨幅提高特攻（3级）。",
      "move": "萤火",
      "move_id": "294",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）释放耀眼的光芒攻击对方。50%会降低对手的特防（1级）。",
      "move": "洁净光芒",
      "move_id": "295",
      "power": "110",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）用雾状羽毛的球攻击对方。50%会降低对手的特攻（1级）。",
      "move": "薄雾球",
      "move_id": "296",
      "power": "110",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "撒出羽毛，笼罩在对手的周围。大幅降低对手的攻击（2级）。",
      "move": "羽毛舞",
      "move_id": "297",
      "power": "0",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "摇摇晃晃地跳起舞蹈，让自己周围的宝可梦陷入混乱状态。",
      "move": "摇晃舞",
      "move_id": "298",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "蓄满火焰的腿踢向对方，30%会使其陷入灼伤状态。也容易击中要害（1级）。",
      "move": "火焰踢",
      "move_id": "299",
      "power": "95",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "一旦使用此招式就会降低队友的速度。在5回合内减弱电属性的招式。（坑队友专用技能）",
      "move": "玩泥巴",
      "move_id": "300",
      "power": "0",
      "type": "地面"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "在5回合内攻击对手。招式每次击中，威力就会翻倍。",
      "move": "冰球",
      "move_id": "301",
      "power": "30",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用带刺的手臂猛烈地挥舞进行攻击。30%会使对手畏缩。",
      "move": "尖刺臂",
      "move_id": "302",
      "power": "95",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "偷懒休息。回复自己最大HP的一半。",
      "move": "偷懒",
      "move_id": "303",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "给予对手又吵又响的巨大震动进行攻击。",
      "move": "巨声",
      "move_id": "304",
      "power": "95",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用有毒的牙齿咬住对手进行攻击。50%会使对手中剧毒。",
      "move": "剧毒牙",
      "move_id": "305",
      "power": "80",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用坚硬的锐爪劈开对手进行攻击。50%会降低对手的防御（1级）。",
      "move": "撕裂爪",
      "move_id": "306",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "用爆炸的火焰烧尽对手进行攻击。20%会让对手陷入灼伤状态。",
      "move": "爆炸烈焰",
      "move_id": "307",
      "power": "120",
      "type": "火"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "向对手喷射超强水炮进行攻击。20%会降低对手的特防（1级）。",
      "move": "加农水炮",
      "move_id": "308",
      "power": "120",
      "type": "水"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "使出彗星般的拳头攻击对手。20%会提高自己的攻击（1级）。",
      "move": "彗星拳",
      "move_id": "309",
      "power": "120",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用尖叫声等突然惊吓对手进行攻击。30%会使对手畏缩。",
      "move": "惊吓",
      "move_id": "310",
      "power": "50",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "根据使用时的天气，招式属性和威力翻倍。",
      "move": "气象球",
      "move_id": "311",
      "power": "60",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "让同伴闻沁人心脾的香气，从而治愈我方全员的异常状态。",
      "move": "芳香治疗",
      "move_id": "312",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "装哭流泪。使对手不知所措，从而大幅降低对手的特防（2级）。",
      "move": "假哭",
      "move_id": "313",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "95",
      "category": "特殊",
      "description": "用锐利的风切斩对手进行攻击。容易击中要害（1级）。",
      "move": "空气利刃",
      "move_id": "314",
      "power": "80",
      "type": "飞行"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "使出全部力量攻击对手。使用之后会因为反作用力，自己的特攻大幅降低（2级）。",
      "move": "过热",
      "move_id": "315",
      "power": "130",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "对幽灵属性宝可梦没有效果的招式以及闪避率高的对手，使用后变得能够打中。",
      "move": "气味侦测",
      "move_id": "316",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "投掷岩石进行攻击。封住对手的行动，从而降低速度（1级）。",
      "move": "岩石封锁",
      "move_id": "317",
      "power": "60",
      "type": "岩石"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）在风中掺入鳞粉攻击对手。20%会降低对方特攻（1级）。",
      "move": "银色旋风",
      "move_id": "318",
      "power": "95",
      "type": "虫"
    },
    {
      "accuracy": "85",
      "category": "变化",
      "description": "让对手听摩擦金属般讨厌的声音。大幅降低对手的特防（2级）。",
      "move": "金属音",
      "move_id": "319",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "75",
      "category": "变化",
      "description": "让对手听舒适的笛声，从而陷入睡眠状态。（最多两回合）",
      "move": "草笛",
      "move_id": "320",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "给对手挠痒，使其发笑，从而降低对手的攻击和防御（1级）。",
      "move": "挠痒",
      "move_id": "321",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "汲取神兽中神秘的力量，从而大幅度提高自己的特攻，攻击和速度（2级）。",
      "move": "神圣之力",
      "move_id": "322",
      "power": "0",
      "type": "龙"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）掀起大海进行攻击。自己的HP越少，招式的威力越小。",
      "move": "大海之力",
      "move_id": "323",
      "power": "150",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "发射神奇的光线进行攻击。10%会使对手混乱。",
      "move": "信号光束",
      "move_id": "324",
      "power": "75",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "无视残影使出混影之拳。攻击必定命中且必定要害。",
      "move": "暗影拳",
      "move_id": "325",
      "power": "60",
      "type": "幽灵"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "大脑集中精神发出看不见的精神力量进行破坏。20%几率造成混乱。",
      "move": "精神震荡",
      "move_id": "326",
      "power": "120",
      "type": "超能力"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "蓄满力量用上勾拳顶起对手造成重伤。攻击15%几率附带眩晕和畏缩。（对正在飞翔的宝可梦也可以造成伤害）",
      "move": "升龙烈破",
      "move_id": "327",
      "power": "110",
      "type": "格斗"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "将对手困在铺天盖地的沙暴中，在4～5回合内进行攻击。",
      "move": "流沙地狱",
      "move_id": "328",
      "power": "60",
      "type": "地面"
    },
    {
      "accuracy": "70",
      "category": "特殊",
      "description": "向对手发出绝对零度的一击，30%几率冰冻对方。",
      "move": "绝对零度",
      "move_id": "329",
      "power": "140",
      "type": "冰"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）向对手喷射浑浊的水进行攻击。20%会降低对手的命中率（1级）。",
      "move": "浊流",
      "move_id": "330",
      "power": "95",
      "type": "水"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "向对手猛烈地发射种子进行攻击。连续攻击2～5次。",
      "move": "种子机关枪",
      "move_id": "331",
      "power": "25",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以敏捷的动作戏弄对手后进行切斩。攻击必定可先制（优先度+1）。",
      "move": "燕返",
      "move_id": "332",
      "power": "50",
      "type": "飞行"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "向对手发射锋利的冰柱进行攻击。连续攻击2～5次。",
      "move": "冰锥",
      "move_id": "333",
      "power": "25",
      "type": "冰"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将皮肤变得坚硬如铁，从而大幅提高自己的防御（2级）。",
      "move": "铁壁",
      "move_id": "334",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "张开双手进行阻挡，封住对手的退路，使其不能逃走。",
      "move": "挡路",
      "move_id": "335",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "大声吼叫提高气势，从而提高我方的攻击和特攻（1级）可率先使用（优先度+1）。",
      "move": "长嚎",
      "move_id": "336",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用尖锐的巨爪劈开对手进行攻击。30%会降低对手的防御（1级）。",
      "move": "龙爪",
      "move_id": "337",
      "power": "80",
      "type": "龙"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "用大树摔打对手进行疯狂攻击。30%会降低对手的速度（1级）。",
      "move": "疯狂植物",
      "move_id": "338",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "使出全身力气绷紧肌肉，从而提高自己的攻击、防御和命中（1级）。",
      "move": "健美",
      "move_id": "339",
      "power": "0",
      "type": "格斗"
    },
    {
      "accuracy": "85",
      "category": "物理",
      "description": "弹跳到高高的空中，第2回合攻击对手。30%让对手陷入麻痹状态。",
      "move": "弹跳",
      "move_id": "340",
      "power": "85",
      "type": "飞行"
    },
    {
      "accuracy": "95",
      "category": "特殊",
      "description": "向对手投掷泥块进行攻击。同时降低对手的速度（1级）。",
      "move": "泥巴射击",
      "move_id": "341",
      "power": "55",
      "type": "地面"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用尾巴拍打。10%让对手陷入中毒状态，也容易击中要害（1级）。",
      "move": "毒尾",
      "move_id": "342",
      "power": "70",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "一边可爱地撒娇，一边靠近对手进行攻击，还能夺取对手携带的道具。",
      "move": "渴望",
      "move_id": "343",
      "power": "60",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "放出千万伏特的电流攻击对手。使用后增加自身的攻击和特攻（1级）。",
      "move": "千万伏特",
      "move_id": "344",
      "power": "110",
      "type": "电"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "散落可以追踪对手的神奇叶片。攻击必定会命中。",
      "move": "魔法叶",
      "move_id": "345",
      "power": "60",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "用水湿透周围。在5回合内减弱火属性的招式。",
      "move": "玩水",
      "move_id": "346",
      "power": "0",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "静心凝神，从而提高自己的特攻、特防和命中（1级）。",
      "move": "冥想",
      "move_id": "347",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "像用剑一般操纵叶片切斩对手进行攻击。容易击中要害（1级）。",
      "move": "刃叶斩",
      "move_id": "348",
      "power": "90",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "激烈地跳起神秘且强有力的舞蹈。从而提高自己的攻击、特攻和速度（1级）。",
      "move": "龙之舞",
      "move_id": "349",
      "power": "0",
      "type": "龙"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "向对手发射坚硬的岩石进行攻击。连续攻击2～5次。",
      "move": "岩石爆击",
      "move_id": "350",
      "power": "25",
      "type": "岩石"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "向对手快速发出电击。攻击必定会命中。",
      "move": "电击波",
      "move_id": "351",
      "power": "60",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用水的震动攻击对手。吸水后能回复等同于造成伤害一半的HP",
      "move": "活活气泡",
      "move_id": "352",
      "power": "80",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "集中精神使用破灭之力（优先度-6）。两回合后攻击对手且必定要害。使用后大幅度提升自身特攻、物防和特防（2级）。",
      "move": "破灭之愿",
      "move_id": "353",
      "power": "100",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "使出精神力量全力攻击对手。越战越勇，使用后增加攻击（1级）。",
      "move": "精神突进",
      "move_id": "354",
      "power": "110",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "降到地面，使身体休息。回复自己最大HP的一半。",
      "move": "羽栖",
      "move_id": "355",
      "power": "0",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内，飘浮特性和飞行属性的宝可梦会被地面属性的招式击中。飞向空中的招式也将无法使用。",
      "move": "重力",
      "move_id": "356",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "对恶属性宝可梦没有效果的招式以及闪避率高的对手，使用后变得能够打中。",
      "move": "奇迹之眼",
      "move_id": "357",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "给予睡眠状态下的对手较大的伤害。但相反对手会从睡眠中醒过来。",
      "move": "唤醒巴掌",
      "move_id": "358",
      "power": "70",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "挥舞强力而沉重的拳头，给予对手伤害。自己的速度会降低（1级）。",
      "move": "臂锤",
      "move_id": "359",
      "power": "100",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "让身体高速旋转并撞击对手。速度比对手越慢，威力越大（最大威力为150）。",
      "move": "陀螺球",
      "move_id": "360",
      "power": "1",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "虽然自己陷入濒死，但可以治愈后备上场的宝可梦的异常状态以及回复HP。",
      "move": "治愈之愿",
      "move_id": "361",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用水之力量向对方进行攻击必定命中对方要害。",
      "move": "水流裂破",
      "move_id": "362",
      "power": "61",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "从树果上获得力量进行攻击。根据携带的树果，招式属性和威力会改变。",
      "move": "自然之恩",
      "move_id": "363",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "能够攻击正在使用守住或看穿等招式的对手。解除其守护效果（优先度+2）。",
      "move": "佯攻",
      "move_id": "364",
      "power": "40",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用喙进行攻击。当对手携带树果时，可以食用并获得其效果。",
      "move": "啄食",
      "move_id": "365",
      "power": "70",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "刮起猛烈的旋风，在4回合内提高我方全员的速度。",
      "move": "顺风",
      "move_id": "366",
      "power": "0",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "可通过点穴自身或队友让身体舒筋活络。大幅提高某1项能力（2级）。",
      "move": "点穴",
      "move_id": "367",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "使出招式前，将最后受到的招式的伤害以150%伤害返还给对手。",
      "move": "金属爆炸",
      "move_id": "368",
      "power": "1",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "在攻击之后急速返回，和后备宝可梦进行替换。",
      "move": "急速折返",
      "move_id": "369",
      "power": "70",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "放弃守护，向对手的怀里突击。自己的防御和特防会降低（1级）。",
      "move": "近身战",
      "move_id": "370",
      "power": "120",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "蓄力攻击。如果能在对手之后攻击，招式的威力会变成2倍。",
      "move": "以牙还牙",
      "move_id": "371",
      "power": "55",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "如果此回合内对手已经受到伤害的话，招式威力会变成2倍。",
      "move": "恶意追击",
      "move_id": "372",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "让对手在5回合内不能使用宝可梦携带的道具。训练家也不能给那只宝可梦使用道具。",
      "move": "查封",
      "move_id": "373",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "扔掉自身携带的道具进行攻击。同时附加道具效果，黑色铁球威力最大是130",
      "move": "投掷",
      "move_id": "374",
      "power": "1",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "利用超能力施以暗示，从而将自己受到的异常状态转移给对手。",
      "move": "精神转移",
      "move_id": "375",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "王牌招式的剩余PP越少，招式的威力越大。",
      "move": "王牌",
      "move_id": "376",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "在5回合内无法通过招式、特性或携带的道具来回复HP。",
      "move": "回复封锁",
      "move_id": "377",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用力勒紧对手进行攻击。对手的HP越多，威力越大。（最大威力为120）",
      "move": "绞紧",
      "move_id": "378",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力交换自己的攻击和防御的力量。",
      "move": "力量戏法",
      "move_id": "379",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "将胃液吐向对手的身体。沾上的胃液会消除对手的特性效果。",
      "move": "胃液",
      "move_id": "380",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "向天许愿，从而在5回合内不会被对手的攻击打中要害。",
      "move": "幸运咒语",
      "move_id": "381",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "提高威力，抢先使出对手想要使出的招式。如果不先使出则会失败。",
      "move": "抢先一步",
      "move_id": "382",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "模仿对手刚才使出的招式，并使出相同招式。如果对手还没出招则会失败。",
      "move": "仿效",
      "move_id": "383",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力互换自己和对手的攻击以及特攻的能力变化。",
      "move": "力量互换",
      "move_id": "384",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力互换自己和对手的防御以及特防的能力变化。",
      "move": "防守互换",
      "move_id": "385",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用正义的力量惩罚目标目标提升能力越高伤害则越大。并提升自身攻击和速度（1级）。",
      "move": "正义之罚",
      "move_id": "386",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "当战斗中已学会的招式全部使用过后，才能开始使出珍藏的招式。",
      "move": "珍藏",
      "move_id": "387",
      "power": "140",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "种植心神不宁的种子。使对手不能入眠，并将特性变成不眠。",
      "move": "烦恼种子",
      "move_id": "388",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "可以比对手先攻击。对手使出的招式如果不是攻击招式则会失败（优先度+2）。",
      "move": "突袭",
      "move_id": "389",
      "power": "70",
      "type": "恶"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在对手的脚下撒毒菱。使对手替换出场的宝可梦中毒。",
      "move": "毒菱",
      "move_id": "390",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力互换自己和对手之间的能力变化。",
      "move": "心灵互换",
      "move_id": "391",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在自己身体的周围覆盖用水制造的幕。每回合回复1/16HP。",
      "move": "水流环",
      "move_id": "392",
      "power": "0",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用电气产生的磁力浮在空中。在5回合内可以飘浮。",
      "move": "电磁飘浮",
      "move_id": "393",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "让火焰覆盖全身猛撞向对手。自己也会受到不小的伤害（-33%）。10%让对手陷入灼伤状态。",
      "move": "闪焰冲锋",
      "move_id": "394",
      "power": "120",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "向对手的身体发出冲击波进行攻击。30%让对手陷入麻痹状态。",
      "move": "发劲",
      "move_id": "395",
      "power": "60",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "从体内产生出波导之力，然后向对手发出。攻击必定会命中。",
      "move": "波导弹",
      "move_id": "396",
      "power": "95",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "打磨自己的身体，可以提高自己的防御、特防、速度（1级）。",
      "move": "岩石打磨",
      "move_id": "397",
      "power": "0",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用带毒的触手或手臂刺入对手。30%让对手陷入中毒状态。",
      "move": "毒击",
      "move_id": "398",
      "power": "90",
      "type": "毒"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）从体内发出充满恶意的恐怖气场攻击敌人。20%会使对手畏缩。",
      "move": "恶之波动",
      "move_id": "399",
      "power": "95",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "抓住瞬间的空隙切斩对手。容易击中要害（1级）。",
      "move": "暗袭要害",
      "move_id": "400",
      "power": "90",
      "type": "恶"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "如惊涛骇浪般挥动大尾巴攻击对手两次。",
      "move": "水尾连击",
      "move_id": "401",
      "power": "45",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将外壳坚硬的大种子，从上方砸下攻击对手。30%会使对手混乱。",
      "move": "种子炸弹",
      "move_id": "402",
      "power": "90",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用连天空也能劈开的空气之刃进行攻击。20%会使对手畏缩。",
      "move": "空气斩",
      "move_id": "403",
      "power": "95",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将镰刀或爪子像剪刀般地交叉，顺势劈开对手。容易击中要害（1级）。",
      "move": "十字剪",
      "move_id": "404",
      "power": "90",
      "type": "虫"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "利用振动发出音波攻击对方。30%会降低对手的特防。",
      "move": "虫鸣",
      "move_id": "405",
      "power": "120",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "从大大的口中掀起冲击波攻击对手。10%会使对手畏缩。",
      "move": "龙之波动",
      "move_id": "406",
      "power": "80",
      "type": "龙"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "释放出骇人的杀气，一边威慑一边撞击对手。自己也会受到不小的伤害（-33%）。",
      "move": "龙神俯冲",
      "move_id": "407",
      "power": "120",
      "type": "龙"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "发射如宝石般闪耀的光芒攻击对手。10%会降低对方命中率（1级）。",
      "move": "力量宝石",
      "move_id": "408",
      "power": "95",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用拳头吸取对手的力量。可以回复给予对手伤害的一半HP。",
      "move": "吸取拳",
      "move_id": "409",
      "power": "80",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "挥动拳头，掀起真空波。必定能够先制攻击（优先度+1）。",
      "move": "真空波",
      "move_id": "410",
      "power": "50",
      "type": "格斗"
    },
    {
      "accuracy": "75",
      "category": "特殊",
      "description": "提高气势，释放出全部力量。30%会降低对手的特防（1级）。",
      "move": "真气弹",
      "move_id": "411",
      "power": "120",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "发射从自然收集的生命力量。10%会降低对手的特防（1级）。",
      "move": "能量球",
      "move_id": "412",
      "power": "95",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "收拢翅膀，通过低空飞行突击对手。自己也会受到不小的伤害（-33%）。",
      "move": "勇鸟猛攻",
      "move_id": "413",
      "power": "120",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手脚下释放出大地之力。10%会降低对手的特防（1级）。",
      "move": "大地之力",
      "move_id": "414",
      "power": "95",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用一闪而过的速度交换自己和对友的持有物。",
      "move": "掉包",
      "move_id": "415",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "使出自己浑身力量突击对手。",
      "move": "终极冲击",
      "move_id": "416",
      "power": "120",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "谋划诡计，激活头脑。大幅提高自己的特攻（2级）。且提升自身命中率（1级）",
      "move": "诡计",
      "move_id": "417",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "向对手使出如子弹般快速而坚硬的拳头。必定能够先制攻击（优先度+1）。",
      "move": "子弹拳",
      "move_id": "418",
      "power": "50",
      "type": "钢"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "（敌方全体）使用雪崩的力量猛烈地攻击全敌方。30%会使对手畏缩。",
      "move": "雪崩",
      "move_id": "419",
      "power": "80",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "瞬间制作冰块，快速地扔向对手。必定能够先制攻击（优先度+1）。",
      "move": "冰砾",
      "move_id": "420",
      "power": "50",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以影子做成的锐爪，劈开对手。容易击中要害（1级）。",
      "move": "暗影爪",
      "move_id": "421",
      "power": "90",
      "type": "幽灵"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用蓄满电流的牙齿咬住对手。10%会使对手畏缩或陷入麻痹状态。",
      "move": "雷电牙",
      "move_id": "422",
      "power": "80",
      "type": "电"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用藏有冷气的牙齿咬住对手。10%会使对手畏缩或陷入冰冻状态。",
      "move": "冰冻牙",
      "move_id": "423",
      "power": "80",
      "type": "冰"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用覆盖着火焰的牙齿咬住对手。10%会使对手畏缩或陷入灼伤状态。",
      "move": "火焰牙",
      "move_id": "424",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "伸长影子，从对手的背后进行攻击。必定能够先制攻击（优先度+1）。",
      "move": "影子偷袭",
      "move_id": "425",
      "power": "50",
      "type": "幽灵"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "向对手发射坚硬的泥弹进行攻击。30%会降低对手的命中率（1级）。",
      "move": "泥巴炸弹",
      "move_id": "426",
      "power": "75",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用实体化的心之利刃劈开对手。容易击中要害（1级）。",
      "move": "精神利刃",
      "move_id": "427",
      "power": "90",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将思念的力量全部集中在前额攻击对方。自己也会受到不小的伤害（-33%）。",
      "move": "意念头锤",
      "move_id": "428",
      "power": "120",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "抛光自己的身体，向对手释放出闪光之力。10%会降低对手的命中率（1级）。",
      "move": "镜光射击",
      "move_id": "429",
      "power": "90",
      "type": "钢"
    },
    {
      "accuracy": "85",
      "category": "特殊",
      "description": "将身体的光芒聚集在一点释放出去。30%会降低对手的特防（1级）。",
      "move": "加农光炮",
      "move_id": "430",
      "power": "120",
      "type": "钢"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "使出全身力量猛攻对手。10%造成对方混乱。",
      "move": "十万马力",
      "move_id": "431",
      "power": "95",
      "type": "地面"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用强风吹开对手的反射壁或光墙等。也会降低对手的闪避率（1级）。",
      "move": "清除浓雾",
      "move_id": "432",
      "power": "0",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "制造出离奇的空间。在5回合内速度慢的宝可梦可以先行动。（先制度由-7调整为0）",
      "move": "戏法空间",
      "move_id": "433",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）从天空中落下陨石攻击对方所有对手。30%几率造成混乱和击中要害。",
      "move": "龙星群",
      "move_id": "434",
      "power": "130",
      "type": "龙"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用耀眼的电击攻击自己周围所有的宝可梦。10%会陷入麻痹状态。",
      "move": "放电",
      "move_id": "435",
      "power": "90",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用熊熊烈火的身体攻击自己周围所有的宝可梦。10%会陷入灼伤状态。",
      "move": "喷烟",
      "move_id": "436",
      "power": "90",
      "type": "火"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "用尖尖的叶片向对手卷起风暴。使用之后因为反作用力自己的特攻会大幅降低（2级）。",
      "move": "飞叶风暴",
      "move_id": "437",
      "power": "130",
      "type": "草"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "激烈地挥舞青藤或触手摔打对手进行攻击。30%几率造成畏缩。",
      "move": "强力鞭打",
      "move_id": "438",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "向对手发射巨大的岩石进行攻击。30%几率造成畏缩。",
      "move": "岩石巨炮",
      "move_id": "439",
      "power": "120",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用毒刃劈开对手。40%会让对手陷入中毒状态，也容易击中要害（1级）。",
      "move": "十字毒刃",
      "move_id": "440",
      "power": "95",
      "type": "毒"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "用肮脏的垃圾撞向对手进行攻击。50%会让对手陷入中毒状态。",
      "move": "粉尘射击",
      "move_id": "441",
      "power": "120",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用钢铁般坚硬的头部进行攻击。30%会使对手畏缩。",
      "move": "钢铁头槌",
      "move_id": "442",
      "power": "95",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "发射吸住对手的钢铁炸弹。攻击必定会命中。",
      "move": "磁铁轰炸",
      "move_id": "443",
      "power": "120",
      "type": "钢"
    },
    {
      "accuracy": "85",
      "category": "物理",
      "description": "用尖尖的岩石刺入对手进行攻击。容易击中要害（1级）。",
      "move": "尖石攻击",
      "move_id": "444",
      "power": "100",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "诱惑或诱惑，从而大幅降低对手的特攻（2级）。",
      "move": "诱惑",
      "move_id": "445",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将无数岩石悬浮在对手的周围，从而对替换出场的对手的宝可梦给予伤害。",
      "move": "隐形岩",
      "move_id": "446",
      "power": "0",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用草缠住并绊倒对手。对手越重，威力越大。（最大威力为120）",
      "move": "打草结",
      "move_id": "447",
      "power": "1",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）用非常恶毒的语言且持续不断的音波攻击对手。必定让对手混乱。",
      "move": "极恶声波",
      "move_id": "448",
      "power": "110",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "放出必中的制裁光弹。属性会根据自己携带的石板不同而改变。使用后增加自身物攻、特攻、速度（1级）。",
      "move": "制裁光砾",
      "move_id": "449",
      "power": "150",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "咬住进行攻击。当对手携带树果时，可以食用并获得其效果。",
      "move": "虫咬",
      "move_id": "450",
      "power": "60",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射电击光束。由于蓄满电流，会提高自己的特攻（1级）。",
      "move": "充电光束",
      "move_id": "451",
      "power": "60",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用坚硬的躯体撞击对手进行攻击。自己也会受到不小的伤害（-33%）。",
      "move": "木槌",
      "move_id": "452",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以迅雷不及掩耳之势扑向对手。必定能够先制攻击（优先度+1）。",
      "move": "水流喷射",
      "move_id": "453",
      "power": "50",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "召唤手下，让其朝对手发起攻击。容易击中要害（2级）。",
      "move": "攻击指令",
      "move_id": "454",
      "power": "90",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "召唤手下，让其附在自己的身体上。可以提高自己的防御和特防（1级）。先制技能（优先度+1）。",
      "move": "防御指令",
      "move_id": "455",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "召唤手下疗伤。回复自己最大HP的一半。",
      "move": "回复指令",
      "move_id": "456",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "拼命使出浑身力气，向对手进行头锤攻击。自己也会受到不小的伤害（-33%）。",
      "move": "双刃头锤",
      "move_id": "457",
      "power": "120",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "使用凶恶力量拍打对手进行攻击。连续2次给予伤害。且必定击中要害。",
      "move": "暗黑连击",
      "move_id": "458",
      "power": "35",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "释放出扭曲时间般的强大力量攻击对手。50%几率造成畏缩。",
      "move": "时光咆哮",
      "move_id": "459",
      "power": "130",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将对手连同周围的空间一起撕裂并给予伤害。容易击中要害（2级）。",
      "move": "亚空裂斩",
      "move_id": "460",
      "power": "130",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "月亮下跳起舞蹈，大幅提高我方的防御、特防和速度（2级）。",
      "move": "新月舞",
      "move_id": "461",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用骇人的力量捏碎对手。必定降低对方防御（1级）。",
      "move": "捏碎",
      "move_id": "462",
      "power": "1",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）将对手困在熊熊燃烧的火焰中，在4～5回合内进行攻击。",
      "move": "熔岩风暴",
      "move_id": "463",
      "power": "110",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "将对手强制拖入黑暗的世界，并让对手陷入睡眠状态。",
      "move": "暗黑洞",
      "move_id": "464",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）发出闪光冲击波攻击敌方。50%会大幅降低对手的特防（2级）。",
      "move": "种子闪光",
      "move_id": "465",
      "power": "120",
      "type": "草"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）刮起毛骨悚然的暴风攻击全部对手。10%会降低对方特防（1级）。",
      "move": "奇异之风",
      "move_id": "466",
      "power": "95",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "第1回合消失踪影，第2回合攻击对手。即使对手正受保护，也能击中。并使其进入3回合挑衅状态。",
      "move": "暗影潜袭",
      "move_id": "467",
      "power": "130",
      "type": "幽灵"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将爪子磨得更加锋利。提高自己的攻击、速度和命中率（1级）。",
      "move": "磨爪",
      "move_id": "468",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在1回合内防住击打我方全员的攻击。（优先度+1）",
      "move": "广域防守",
      "move_id": "469",
      "power": "0",
      "type": "岩石"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力将自己和对手的防御和特防相加，再进行平分。",
      "move": "防守平分",
      "move_id": "470",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力将自己和对手的攻击和特攻相加，再进行平分。",
      "move": "力量平分",
      "move_id": "471",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "制造出离奇的空间。在5回合内互换所有宝可梦的防御和特防。",
      "move": "奇妙空间",
      "move_id": "472",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将自身特攻实体化攻击对手物防。给予物理伤害。",
      "move": "精神冲击",
      "move_id": "473",
      "power": "80",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将特殊的毒液泼向对手。对处于中毒状态的对手，威力会变成2倍。",
      "move": "毒液冲击",
      "move_id": "474",
      "power": "75",
      "type": "毒"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "聚集剑和盾的力量，提升自身的攻击（1级），还有物防和特防（1级）。",
      "move": "剑盾之魂",
      "move_id": "475",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将令人烦躁的粉末撒在自己身上吸引对手的注意。使对手的攻击全部指向自己。（对于草系无效）（优先度+2）",
      "move": "愤怒粉",
      "move_id": "476",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "利用超能力使对手浮起来。在3回合内攻击会变得容易打中对手。",
      "move": "意念移物",
      "move_id": "477",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "制造出离奇的空间。在5回合内所有宝可梦携带道具的效果都会消失。可率先使用（优先度+1）。",
      "move": "魔法空间",
      "move_id": "478",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "快速扔石头或炮弹，如果攻击飞行的对手，则会被击落，掉到地面。必定能够先制攻击（优先度+1）。",
      "move": "冲岩",
      "move_id": "479",
      "power": "50",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "充满正义向对手使出制裁一击。攻击必定会击中要害。并提升自身速度（1级）。",
      "move": "制裁猛击",
      "move_id": "480",
      "power": "90",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "如果击中，爆裂的火焰会攻击到对手。爆裂出的火焰还会飞溅到旁边的对手。",
      "move": "烈焰溅射",
      "move_id": "481",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）用污泥波攻击敌方宝可梦。10%会陷入中毒状态。",
      "move": "污泥波",
      "move_id": "482",
      "power": "95",
      "type": "毒"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "轻巧地跳起神秘而又美丽的舞蹈。提高自身的特攻、特防和速度（1级）。",
      "move": "蝶舞",
      "move_id": "483",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用沉重的身体撞向对手进行攻击。自己比对手越重，威力越大（最大威力为120）。",
      "move": "重磅冲撞",
      "move_id": "484",
      "power": "1",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用神奇电波对周围所有和自己属性相同的宝可梦给予伤害。",
      "move": "同步干扰",
      "move_id": "485",
      "power": "120",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用电气团撞向对手。自己比对手速度越快，威力越大（最大威力为150）。",
      "move": "电球",
      "move_id": "486",
      "power": "1",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "将大量的水泼向对手，从而使其变成水属性。",
      "move": "浸水",
      "move_id": "487",
      "power": "0",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "火焰覆盖全身并快速攻击对手。可优先发动攻击（优先度+1）。",
      "move": "迅炎",
      "move_id": "488",
      "power": "50",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "盘蜷着集中精神。提高自己的攻击、特攻和命中率（1级）。",
      "move": "盘蜷",
      "move_id": "489",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以敏捷的动作瞄准对手的脚进行攻击。降低对手的速度（1级）。",
      "move": "下盘踢",
      "move_id": "490",
      "power": "65",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "喷出能溶化对手的液体进行攻击。大幅降低对手的特防（2级）。",
      "move": "酸液炸弹",
      "move_id": "491",
      "power": "40",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "利用对手的力量进行攻击。正和自己战斗的对手，其攻击越高，伤害越大。",
      "move": "欺诈",
      "move_id": "492",
      "power": "95",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手发送谜之念波。接收到念波的对手，其特性会变为单纯。",
      "move": "单纯光束",
      "move_id": "493",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用神奇的节奏跳舞。使同伴模仿自己的动作，从而将特性变成一样。",
      "move": "找伙伴",
      "move_id": "494",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "支援我方或对手的行动，使其紧接着此招式之后行动。",
      "move": "您先请",
      "move_id": "495",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用歌声攻击对手。同伴还可以接着使出轮唱招式，威力也会提高。",
      "move": "轮唱",
      "move_id": "496",
      "power": "60",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用回声攻击对手。如果每回合都有宝可梦接着使用该招式，威力就会提高。",
      "move": "回声",
      "move_id": "497",
      "power": "40",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "看准机会稳步攻击。无视对手的能力变化，直接给予伤害。",
      "move": "逐步击破",
      "move_id": "498",
      "power": "90",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "向对手投掷特殊的泥块进行攻击。使其能力变回原点。",
      "move": "清除之烟",
      "move_id": "499",
      "power": "50",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用蓄积起来的力量攻击对手。自己的能力提高得越多，威力就越大。",
      "move": "辅助力量",
      "move_id": "500",
      "power": "20",
      "type": "超能力"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "守护自己和同伴，以防对手的先制攻击。（优先度+3）",
      "move": "快速防守",
      "move_id": "501",
      "power": "0",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用神奇的力量瞬间移动，互换自己和同伴所在的位置。",
      "move": "交换场地",
      "move_id": "502",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手喷射煮得翻滚的开水进行攻击。30%会让对手陷入灼伤状态。",
      "move": "热水",
      "move_id": "503",
      "power": "80",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "打破外壳，降低自己的防御和特防（1级），但大幅提高攻击、特攻和速度（2级）。",
      "move": "破壳",
      "move_id": "504",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "放出治愈波动，从而回复自身及队友最大HP的一半。",
      "move": "治愈波动",
      "move_id": "505",
      "power": "0",
      "type": "超能力"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "接二连三地进行攻击。对处于异常状态的对手造成的伤害翻倍。",
      "move": "祸不单行",
      "move_id": "506",
      "power": "70",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "第1回合将对手带到空中，第2回合将其摔下进行攻击。被带到空中的对手不能动弹。",
      "move": "自由落体",
      "move_id": "507",
      "power": "60",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "使用科技之力，不仅提高自己的速度和防御（1级），还会大幅提高攻击（2级）。",
      "move": "科技爆破",
      "move_id": "508",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "扔飞对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束。",
      "move": "巴投",
      "move_id": "509",
      "power": "70",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用火焰攻击对手。能够烧掉对手携带的树果等道具，使其不能使用。",
      "move": "烧尽",
      "move_id": "510",
      "power": "60",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "压制对手，从而将其行动顺序放到最后。",
      "move": "延后",
      "move_id": "511",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "轻巧地攻击对手。自己没有携带道具时，伤害会翻倍。",
      "move": "杂技",
      "move_id": "512",
      "power": "55",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "反射对手的属性，让自己也变成一样的属性。",
      "move": "镜面属性",
      "move_id": "513",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "为倒下的同伴报仇。如果上一回合有同伴倒下，威力就会翻倍。",
      "move": "报仇",
      "move_id": "514",
      "power": "70",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "该招式无法使用。",
      "move": "搏命",
      "move_id": "515",
      "power": "1",
      "type": "格斗"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "当对手未携带道具时，能够将自己携带的道具交给对手。",
      "move": "传递礼物",
      "move_id": "516",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "50",
      "category": "特殊",
      "description": "（敌方全体）用烈焰包裹住对手进行攻击。必定让对手陷入灼伤状态。",
      "move": "地狱烈焰",
      "move_id": "517",
      "power": "110",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用水柱进行攻击。和火组合威力就会提高，天空中会挂上彩虹。自身特防增加一级（1级）。",
      "move": "水之誓约",
      "move_id": "518",
      "power": "80",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用火柱进行攻击。和草组合威力就会提高，周围会变成火海。自身速度增加一级（1级）。",
      "move": "火之誓约",
      "move_id": "519",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用草柱进行攻击。和水组合威力就会提高，周围会变成湿地。自身防御增加一级（1级）。",
      "move": "草之誓约",
      "move_id": "520",
      "power": "80",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "在攻击之后急速返回，和后备宝可梦进行替换。",
      "move": "伏特替换",
      "move_id": "521",
      "power": "70",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "抵抗并攻击对方敌全体，并降低对手的特攻（1级）。",
      "move": "虫之抵抗",
      "move_id": "522",
      "power": "70",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用力踩踏地面并攻击自己周围所有的宝可梦。降低对方的速度（1级）。",
      "move": "重踏",
      "move_id": "523",
      "power": "60",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将冰冷的气息吹向对手进行攻击。必定会击中要害。",
      "move": "冰息",
      "move_id": "524",
      "power": "60",
      "type": "冰"
    },
    {
      "accuracy": "90",
      "category": "物理",
      "description": "弹飞对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束（优先度-6）。",
      "move": "龙尾",
      "move_id": "525",
      "power": "70",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "一股超级强大的灵魂附身。虽会大幅度降低防御（2级）。但巨幅提升攻击（3级），且提升自身速度（1级）。",
      "move": "大圣之魂",
      "move_id": "526",
      "power": "0",
      "type": "火"
    },
    {
      "accuracy": "95",
      "category": "特殊",
      "description": "用电网捉住对方全体进行攻击。并降低对手的速度（1级）。",
      "move": "电网",
      "move_id": "527",
      "power": "55",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "让电流覆盖全身撞向对手进行攻击。自己也会受到不小的伤害（-33%）。",
      "move": "疯狂伏特",
      "move_id": "528",
      "power": "120",
      "type": "电"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "像钢钻一样，一边旋转身体一边撞击对手。造成两次伤害。",
      "move": "双冲钻",
      "move_id": "529",
      "power": "45",
      "type": "地面"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用身体坚硬的部分拍打对手进行攻击。连续2次给予伤害。",
      "move": "双龙切",
      "move_id": "530",
      "power": "45",
      "type": "龙"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "以可爱的动作使对手疏忽，乘机给出强烈的一击。会使对方降低特攻（1级）。",
      "move": "爱心冲击",
      "move_id": "531",
      "power": "80",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将角刺入，吸取对手的养分。可以回复给予对手伤害的一半HP。",
      "move": "木角",
      "move_id": "532",
      "power": "80",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用长角切斩对手进行攻击。无视对手的能力变化直接给予伤害。",
      "move": "圣剑",
      "move_id": "533",
      "power": "95",
      "type": "格斗"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "用锋利的贝壳切斩对手进行攻击。50%会降低对手的防御（1级）。",
      "move": "贝壳刃",
      "move_id": "534",
      "power": "95",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用燃烧的身体撞向对手进行攻击。自己比对手越重，威力越大（最大威力为120）。",
      "move": "高温重压",
      "move_id": "535",
      "power": "1",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）用锋利的叶片对敌方进行攻击。有时会造成要害（1级）。",
      "move": "青青风暴",
      "move_id": "536",
      "power": "90",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "旋转揉成团的身体猛扑对手。会降低对方攻击（1级）。",
      "move": "猛扑",
      "move_id": "537",
      "power": "80",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "用软绵绵的绒毛包裹住自己的身体进行守护。巨幅提高自身防御（3级），但会降低自身闪避（1级）。",
      "move": "棉花防守",
      "move_id": "538",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "95",
      "category": "特殊",
      "description": "放出黑暗的冲击波攻击对手。30%会降低对手的命中率（1级）。",
      "move": "暗黑爆破",
      "move_id": "539",
      "power": "120",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "将超强的念波实体化攻击对手。给予物理伤害。并使其5回合内无法使用道具。",
      "move": "精神击破",
      "move_id": "540",
      "power": "130",
      "type": "超能力"
    },
    {
      "accuracy": "85",
      "category": "物理",
      "description": "用坚硬的尾巴拍打对手进行攻击。连续攻击3～5次。",
      "move": "扫尾拍打",
      "move_id": "541",
      "power": "30",
      "type": "一般"
    },
    {
      "accuracy": "75",
      "category": "特殊",
      "description": "用强烈的风席卷对手进行攻击。20%会使对手混乱。（雨天必中、晴天命中减半）",
      "move": "暴风",
      "move_id": "542",
      "power": "120",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "放弃防守猛扑向对手进行攻击。自己的防御会降低（1级）。",
      "move": "突飞猛扑",
      "move_id": "543",
      "power": "120",
      "type": "地面"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "向对手投掷钢铁飞盘进行攻击。连续2次给予伤害。30%几率提升自身速度（1级）。",
      "move": "钢铁飞盘",
      "move_id": "544",
      "power": "60",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用熊熊烈火的身体猛烈地攻击对手。必定让对手陷入灼伤状态。",
      "move": "熊熊火爆",
      "move_id": "545",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手放出高科技光弹。并降低对方命中率（1级）。",
      "move": "高科技光炮",
      "move_id": "546",
      "power": "140",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）让敌方听古老之歌，打动对手的内心进行攻击。30%让对手陷入睡眠状态。",
      "move": "古老之歌",
      "move_id": "547",
      "power": "110",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用长角切斩对手进行攻击。角上拥有的神奇力量将给予物理伤害。并使其5回合内无法使用道具。",
      "move": "神秘之剑",
      "move_id": "548",
      "power": "120",
      "type": "格斗"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）将冰冻的冷气吹向对手进行攻击。会降低对手的速度（1级）。",
      "move": "冰封世界",
      "move_id": "549",
      "power": "120",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "让强大的电流覆盖全身，猛撞向对手进行攻击。70%让对手陷入麻痹状态。",
      "move": "理想闪电",
      "move_id": "550",
      "power": "130",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用美丽而激烈的青焰包裹住对手进行攻击。70%让对手陷入灼伤状态。",
      "move": "真实之焰",
      "move_id": "551",
      "power": "130",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "极致的火焰覆盖全身，振翅攻击对手。攻击后提高自身特攻、特防、速度（1级）。",
      "move": "火神之舞",
      "move_id": "552",
      "power": "80",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用覆盖着电流的冰块，在第2回合撞向对手。会让对手陷入麻痹状态。",
      "move": "冰冻伏特",
      "move_id": "553",
      "power": "150",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用能够冻结一切的强烈冷气，在第2回合包裹住对手。会让对手陷入灼伤状态。",
      "move": "极寒冷焰",
      "move_id": "554",
      "power": "150",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）没完没了地大声斥责，从而降低对手的特攻（1级）。",
      "move": "大声咆哮",
      "move_id": "555",
      "power": "60",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "用大冰柱激烈地撞向对手进行攻击。20%会使对手畏缩。",
      "move": "冰柱坠击",
      "move_id": "556",
      "power": "95",
      "type": "冰"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "从前额产生灼热的火焰，舍身撞击对手。会让对方进入挑衅状态。有几率击中要害（2级）。",
      "move": "胜利之炎",
      "move_id": "557",
      "power": "150",
      "type": "火"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "（敌方全体）释放出巨大的火焰攻击敌方。50%几率造成灼伤。",
      "move": "灭世之火",
      "move_id": "558",
      "power": "110",
      "type": "火"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "释放出疯狂的闪电。使用之后会因为反作用力，自己的特攻大幅降低（2级）。",
      "move": "狂雷闪",
      "move_id": "559",
      "power": "130",
      "type": "电"
    },
    {
      "accuracy": "95",
      "category": "物理",
      "description": "从空中俯冲向对手。容易命中要害（1级）且提升自身速度（1级）。",
      "move": "飞身重压",
      "move_id": "560",
      "power": "80",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将掀起来的榻榻米当作盾牌，防住自己和同伴免受招式伤害。变化招式无法防住。",
      "move": "掀榻榻米",
      "move_id": "561",
      "power": "0",
      "type": "格斗"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "朝着对手打嗝，并给予伤害。如果不吃树果则无法使出。",
      "move": "打嗝",
      "move_id": "562",
      "power": "120",
      "type": "毒"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "翻耕土地，使草木更容易成长。会提高草属性宝可梦的防御和特防（1级）。",
      "move": "耕地",
      "move_id": "563",
      "power": "0",
      "type": "地面"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在对手周围围上黏黏的网，降低替换出场的对手的速度（1级）。",
      "move": "黏黏网",
      "move_id": "564",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "暗黑路卡专属技能。使用暗黑之力刺向敌方。使用此招式打倒对手，攻击会大幅提高（2级）。",
      "move": "暗影之刺",
      "move_id": "565",
      "power": "75",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "第1回合消失在某处，第2回合攻击对手且提升自身速度（1级）。可以无视守护进行攻击。",
      "move": "潜灵奇袭",
      "move_id": "566",
      "power": "90",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "邀请对手参加万圣夜。使对手被追加幽灵属性。",
      "move": "万圣夜",
      "move_id": "567",
      "power": "0",
      "type": "幽灵"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "（敌方全体）发出神兽怒吼威吓对手，从而大幅降低对手的攻击和特攻和速度（2级）。",
      "move": "神之怒吼",
      "move_id": "568",
      "power": "0",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "将带电粒子扩散开来，使一般属性的招式变成电属性。",
      "move": "等离子浴",
      "move_id": "569",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）给敌方宝可梦造成闪电伤害。可以回复给予伤害的一半HP。",
      "move": "闪电之触",
      "move_id": "570",
      "power": "110",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "向对手施加森林诅咒。中了诅咒的对手会被追加草属性。",
      "move": "森林诅咒",
      "move_id": "571",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "猛烈地刮起飞雪般的落花进行攻击，并种下寄生种子。",
      "move": "茁茁轰炸",
      "move_id": "572",
      "power": "90",
      "type": "草"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "急剧冷冻对手，10%让对手陷入冰冻状态。对于水属性宝可梦也是效果绝佳。",
      "move": "冷冻干燥",
      "move_id": "573",
      "power": "80",
      "type": "冰"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "发出魅惑的叫声攻击对方，对方有30%几率着迷。",
      "move": "魅惑之声",
      "move_id": "574",
      "power": "60",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "抛下狠话威吓对手，降低攻击和特攻（1级）后，和后备宝可梦进行替换。",
      "move": "抛下狠话",
      "move_id": "575",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "颠倒对手身上的所有能力变化，变成和原来相反的状态。",
      "move": "颠倒",
      "move_id": "576",
      "power": "0",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用一个吻吸取对手的HP。回复给予对手伤害的一半以上的HP。",
      "move": "吸取之吻",
      "move_id": "577",
      "power": "80",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "使用神奇的力量防住攻击我方的变化招式。但无法防住伤害招式的攻击。",
      "move": "戏法防守",
      "move_id": "578",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "使用神奇的力量提高在场的所有草属性宝可梦的防御。",
      "move": "鲜花防守",
      "move_id": "579",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内变成青草场地。地面上的宝可梦每回合都能回复。草属性的招式威力还会提高。",
      "move": "青草场地",
      "move_id": "580",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内，地面上的宝可梦不会陷入异常状态。龙属性招式的伤害也会减半。",
      "move": "薄雾场地",
      "move_id": "581",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "对手使出招式前，如果输电，则该回合对手的招式变成电属性。",
      "move": "输电",
      "move_id": "582",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "与对手嬉闹并攻击。30%会降低对手的攻击（1级）。",
      "move": "嬉闹",
      "move_id": "583",
      "power": "95",
      "type": "妖精"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "（敌方全体）刮起妖精之风，吹向敌全方。10%会降低对方特防（1级）。",
      "move": "妖精之风",
      "move_id": "584",
      "power": "95",
      "type": "妖精"
    },
    {
      "accuracy": "90",
      "category": "特殊",
      "description": "借用月亮的力量攻击对手。30%会降低对手的特攻（1级）。",
      "move": "月亮之力",
      "move_id": "585",
      "power": "120",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "通过震耳欲聋的爆炸声产生的破坏力，攻击自己周围所有的宝可梦。",
      "move": "爆音波",
      "move_id": "586",
      "power": "140",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "通过封锁，对方所有的宝可梦都会束缚。并降低其速度（1级）。（优先度+1）",
      "move": "钢铁之锁",
      "move_id": "587",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "防住对手攻击的同时，自己变为防御姿态。大幅降低所接触到的对手的攻击（2级）。",
      "move": "王者盾牌",
      "move_id": "588",
      "power": "0",
      "type": "钢"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "和对手和睦相处，使其失去战斗的气力，从而降低对手的攻击和特攻（1级）。",
      "move": "和睦相处",
      "move_id": "589",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "和对手进行密语，使其失去集中力，从而降低对手的防御和特防（1级）。",
      "move": "密语",
      "move_id": "590",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "掀起钻石风暴给予伤害。会提高自己的防御和特防（1级）。",
      "move": "钻石风暴",
      "move_id": "591",
      "power": "110",
      "type": "岩石"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）将滚烫的蒸汽喷向敌全方。50%会让对手灼伤。",
      "move": "蒸汽爆炸",
      "move_id": "592",
      "power": "110",
      "type": "水"
    },
    {
      "accuracy": "101",
      "category": "特殊",
      "description": "通过异次元洞对对手进行攻击。还可以无视守住和看穿等招式。并造成诅咒状态。",
      "move": "异次元洞",
      "move_id": "593",
      "power": "120",
      "type": "恶"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "用粘液制成的手里剑，连续攻击3次。必定能够先制攻击。（优先度+1）",
      "move": "飞水手里剑",
      "move_id": "594",
      "power": "23",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "从口中喷出特别灼热的火焰进行攻击。降低对手的特攻（1级）。",
      "move": "魔法火焰",
      "move_id": "595",
      "power": "90",
      "type": "火"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "防住对手攻击的同时，削减接触到自己的对手的1/8体力。",
      "move": "尖刺防守",
      "move_id": "596",
      "power": "0",
      "type": "草"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "通过神奇的芳香，提高我方宝可梦的特防（1级）。",
      "move": "芳香薄雾",
      "move_id": "597",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "从身体放射出怪异电波，让对手沐浴其中，从而大幅降低其特攻（2级）。",
      "move": "怪异电波",
      "move_id": "598",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "将特殊的毒液泼向对手。对处于中毒状态的对手，其攻击、特攻和速度都会降低（1级）。",
      "move": "毒液陷阱",
      "move_id": "599",
      "power": "0",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "如果被撒到粉尘的对手使用火招式，则会爆炸并给予伤害。",
      "move": "粉尘",
      "move_id": "600",
      "power": "0",
      "type": "虫"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "该技能无法使用。",
      "move": "大地掌控",
      "move_id": "601",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "通过操控磁场，会提高特性为正电和负电的宝可梦的防御和特防（1级）。",
      "move": "磁场操控",
      "move_id": "602",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "如果使用欢乐时光，战斗后得到的钱会翻倍。",
      "move": "欢乐时光",
      "move_id": "603",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "在5回合内变成电气场地。地面上的宝可梦将无法入眠。电属性的招式威力提高50%。",
      "move": "电气场地",
      "move_id": "604",
      "power": "0",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "向对手发射强光，并给予伤害。",
      "move": "魔法闪耀",
      "move_id": "605",
      "power": "90",
      "type": "妖精"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "宝可梦为十分开心的你庆祝。能帮助队友增加攻击、特攻和命中率（1级）。可率先使用（优先度+5）。",
      "move": "庆祝",
      "move_id": "606",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "101",
      "category": "变化",
      "description": "我方宝可梦之间帮忙。能帮助队友增加防御、特防和命中。可率先使用（优先度+5）。",
      "move": "帮手",
      "move_id": "607",
      "power": "0",
      "type": "一般"
    },
    {
      "accuracy": "100",
      "category": "变化",
      "description": "用圆瞳凝视对手，从而降低其攻击。必定能够先制（优先度+1）。",
      "move": "圆瞳",
      "move_id": "608",
      "power": "0",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "将带电的脸颊蹭蹭对手进行攻击。让对手陷入麻痹状态。",
      "move": "蹭蹭脸颊",
      "move_id": "609",
      "power": "30",
      "type": "电"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "在攻击的时候手下留情，从而使对手的HP至少会留下1HP。",
      "move": "手下留情",
      "move_id": "610",
      "power": "60",
      "type": "钢"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "在4～5回合内虫群死缠烂打地进行攻击。在此期间对手将无法逃走。",
      "move": "虫群乱舞",
      "move_id": "611",
      "power": "70",
      "type": "虫"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "全心集中自己的精神，使自己的拳头慢慢变硬。打中对手攻击就会提高（1级）。",
      "move": "蓄能龙拳",
      "move_id": "612",
      "power": "60",
      "type": "龙"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "用死亡的力量锁定对手身上吸取HP。回复给予对手伤害的全部HP。必定命中无法躲开。",
      "move": "死亡之翼",
      "move_id": "613",
      "power": "110",
      "type": "飞行"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "（敌方全体）用毒箭攻击所有敌方宝可梦。会使敌方造成剧毒状态。",
      "move": "万箭毒射",
      "move_id": "614",
      "power": "120",
      "type": "毒"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "（敌方全体）从地面掀起波浪进行攻击。被掀入波浪中的敌方会降低速度（1级）且无法逃跑。",
      "move": "千波激荡",
      "move_id": "615",
      "power": "100",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）聚集大地的力量攻击敌方，可以降低对方特防（1级）。",
      "move": "大地神力",
      "move_id": "616",
      "power": "120",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "借用妖精的力量，发射出强力光线。对手5回合内无法使用道具。",
      "move": "破灭之光",
      "move_id": "617",
      "power": "130",
      "type": "妖精"
    },
    {
      "accuracy": "100",
      "category": "特殊",
      "description": "（敌方全体）用无数青白色且闪耀的光线攻击对手。",
      "move": "根源波动",
      "move_id": "618",
      "power": "120",
      "type": "水"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "（敌方全体）将大地的力量变化为利刃攻击对手。",
      "move": "断崖之剑",
      "move_id": "619",
      "power": "120",
      "type": "地面"
    },
    {
      "accuracy": "100",
      "category": "物理",
      "description": "从天空中急速下降攻击对手。有几率命中对方要害（2级）。",
      "move": "画龙点睛",
      "move_id": "620",
      "power": "140",
      "type": "飞行"
    },
    {
      "accuracy": "101",
      "category": "物理",
      "description": "无视对手的守住或看穿等招式进行连续攻击，并让敌方进入挑衅状态3回合。解放形态方可使用。",
      "move": "异次元猛攻",
      "move_id": "621",
      "power": "140",
      "type": "幽灵"
    }
  ]
}