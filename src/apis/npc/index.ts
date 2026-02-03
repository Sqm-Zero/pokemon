import { BattleData } from './type';

export const reqNPC = (): BattleData => {
    return {
        '海洋队 重要战斗 阵容': [
            {
                title: '反派 海洋队精英（橙华森林）',
                battle_type: '单打',
                item: '全能爆发*2',
                pokemons: [
                    {
                        name: '酷豹',
                        level: 13,
                        item: '一般宝石',
                        ability: '轻装',
                        moves: ['大声咆哮', '击掌奇袭', '嬉闹']
                    },
                    {
                        name: '大狼犬',
                        level: 13,
                        item: '气势披带',
                        ability: '强壮之颚',
                        moves: ['咬碎', '雷电牙', '冰冻牙', '剧毒牙']
                    },
                    {
                        name: '皮卡丘（摇滚）',
                        level: 13,
                        item: '电气球',
                        ability: '狙击手',
                        moves: ['暗袭要害', '电电加速', '击掌奇袭', '水流裂破']
                    },
                    {
                        name: '双尾怪手',
                        level: 13,
                        item: '贝壳之铃',
                        ability: '连续攻击',
                        moves: ['种子机关枪', '暗袭要害', '扫尾拍打', '岩石爆击']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（卡绿隧道）',
                battle_type: '双打',
                item: '全能爆发*4',
                pokemons: [
                    {
                        name: '黑暗鸦',
                        level: 23,
                        item: '进化奇石',
                        ability: '恶作剧之心',
                        moves: ['电磁波', '顺风', '庆祝', '治愈波动']
                    },
                    {
                        name: '乌鸦头头',
                        level: 23,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['热风', '暗黑爆破', '奇异之风', '暴风']
                    },
                    {
                        name: '皮卡丘（贵妇）',
                        level: 23,
                        item: '电气球',
                        ability: '飘浮',
                        moves: ['污泥波', '十万伏特', '银色旋风', '妖精之风']
                    },
                    {
                        name: '大力鳄',
                        level: 23,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['水流喷射', '攀瀑', '咬碎', '冰冻牙']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市博物馆）',
                battle_type: '双打',
                item: '全能爆发*2',
                pokemons: [
                    {
                        name: '尼多王',
                        level: 36,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['污泥波', '大地之力', '十万伏特', '冰冻光束']
                    },
                    {
                        name: '尼多后（贵妇）',
                        level: 36,
                        item: '吃剩的东西',
                        ability: '污毒之躯',
                        moves: ['隐形岩', '吼叫', '污泥波', '大地之力']
                    },
                    {
                        name: '皮卡丘',
                        level: 36,
                        item: '进化奇石',
                        ability: '飘浮',
                        moves: ['污泥波', '放电', '看我嘛', '蹭蹭脸颊']
                    },
                    {
                        name: '天蝎王',
                        level: 36,
                        item: '广角镜',
                        ability: '飘浮',
                        moves: ['十字毒刃', '地裂', '双翼', '断头钳']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市博物馆）',
                battle_type: '双打',
                item: '全能爆发*2',
                pokemons: [
                    {
                        name: '叉字蝠',
                        level: 36,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['双翼', '吸血', '十字毒刃', '暗袭要害']
                    },
                    {
                        name: '阿柏怪',
                        level: 36,
                        item: '生命宝珠',
                        ability: '威吓',
                        moves: ['粉尘射击', '咬碎', '吸血', '龙之舞']
                    },
                    {
                        name: '毒刺水母',
                        level: 36,
                        item: '吃剩的东西',
                        ability: '污毒之躯',
                        moves: ['镜面反射', '污泥波', '热水', '广域防守']
                    },
                    {
                        name: '毒藻龙',
                        level: 36,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['暴狂龙卷', '污泥波', '墨汁炮', '十万伏特']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（流星瀑布-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '小黑子',
                        level: 46,
                        item: '气势披带',
                        ability: '引水',
                        moves: ['冷冻干燥', '水炮', '守住']
                    },
                    {
                        name: '乌鸦头头',
                        level: 46,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['恶之波动', '空气斩', '热风', '奇异之风']
                    },
                    {
                        name: '暗黑路卡',
                        level: 46,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['彗星拳', '嬉闹', '十字毒刃', '瞬影三击']
                    },
                    {
                        name: '摇篮百合',
                        level: 46,
                        item: '吃剩的东西',
                        ability: '引水',
                        moves: ['力量宝石', '终极吸取', '寄生种子', '庆祝']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（流星瀑布-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '电灯怪',
                        level: 46,
                        item: '先制之爪',
                        ability: '避雷针',
                        moves: ['看我嘛', '热水', '蹭蹭脸颊', '庆祝']
                    },
                    {
                        name: '毒骷蛙',
                        level: 46,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['击掌奇袭', '十字毒刃', '近身战', '剑舞']
                    },
                    {
                        name: '雷电狮',
                        level: 46,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['咬碎', '嬉闹', '电电加速', '冰冻牙']
                    },
                    {
                        name: '呆壳兽',
                        level: 46,
                        item: '呆壳兽进化石',
                        ability: '储水',
                        moves: ['治愈波动', '屏障', '庆祝', '热水']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（烟囱山）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '耿鬼',
                        level: 48,
                        item: '气势披带',
                        ability: '飘浮',
                        moves: ['污泥波', '奇异之风', '魔法闪耀', '十万伏特']
                    },
                    {
                        name: '爆音怪',
                        level: 48,
                        item: '讲究围巾',
                        ability: '隔音',
                        moves: ['爆音波']
                    },
                    {
                        name: '毒拉比',
                        level: 48,
                        item: '吃剩的东西',
                        ability: '魔法防守',
                        moves: ['剧毒', '毒液冲击', '月亮之力', '治愈波动']
                    },
                    {
                        name: '玛狃拉',
                        level: 48,
                        item: '气势披带',
                        ability: '强行',
                        moves: ['十字毒刃', '拍落', '冰砾', '冰柱坠击']
                    },
                    {
                        name: '水君',
                        level: 48,
                        item: '速度果',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '天龙之息', '冰冻之风', '镜面反射']
                    },
                    {
                        name: '暴鲤龙',
                        level: 48,
                        item: '暴鲤龙进化石',
                        ability: '强壮之颚',
                        moves: ['雷电牙', '强力腮咬', '咬碎', '冰冻牙']
                    }
                ]
            },
            {
                title: '反派首领 海洋队-水梧桐（烟囱山',
                battle_type: '一番战',
                item: '双打，全能爆发2*4',
                pokemons: [
                    {
                        name: '毒卷云（化身）',
                        level: 50,
                        item: '黑色污泥',
                        ability: '疾风之翼',
                        moves: ['污泥波', '毒菱', '顺风', '极恶声波']
                    },
                    {
                        name: '古代耿鬼',
                        level: 50,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['污泥波', '奇异之风', '终极吸取', '守住']
                    },
                    {
                        name: '胡帕',
                        level: 50,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神之怒吼', '神威']
                    },
                    {
                        name: '基格尔德犬',
                        level: 50,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['嬉闹', '暗影爪', '千波激荡', '剧毒牙']
                    },
                    {
                        name: '幽魂花',
                        level: 50,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['破灭之光', '污泥波', '治愈波动', '能量球']
                    },
                    {
                        name: '基格尔德',
                        level: 50,
                        item: '先制果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '大地之力', '神圣之力', '龙星群']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（未知小岛-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '美纳斯',
                        level: 56,
                        item: '进化奇石',
                        ability: '好胜',
                        moves: ['破灭之光', '活活气泡', '治愈波动', '冷冻干燥']
                    },
                    {
                        name: '始祖大鸟',
                        level: 56,
                        item: '强力香草',
                        ability: '不服输',
                        moves: ['冲岩', '神鸟猛击', '火箭头锤', '急速折返']
                    },
                    {
                        name: '勾帕路翁',
                        level: 56,
                        item: '突击背心',
                        ability: '不服输',
                        moves: ['金属爆炸', '制裁猛击', '钢铁头槌', '十万马力']
                    },
                    {
                        name: '罗丝雷朵',
                        level: 56,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['剧毒', '终极吸取', '污泥波', '寄生种子']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（未知小岛-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '火炎狮',
                        level: 55,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['喷射火焰', '破坏光线']
                    },
                    {
                        name: '火暴猴',
                        level: 55,
                        item: '进化奇石',
                        ability: '不服输',
                        moves: ['吸取拳', '影子偷袭', '暗影拳', '冰冻拳']
                    },
                    {
                        name: '帝王拿波',
                        level: 55,
                        item: '先制之爪',
                        ability: '好胜',
                        moves: ['加农水炮', '加农光炮', '力量宝石', '冷冻干燥']
                    },
                    {
                        name: '艾路雷朵',
                        level: 55,
                        item: '艾路雷朵进化石',
                        ability: '正义之心',
                        moves: ['精神利刃', '升龙烈破', '十字剪', '刃叶斩']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（天气预测馆）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '拉普拉斯',
                        level: 62,
                        item: '潮湿岩石',
                        ability: '降雨',
                        moves: ['气象球', '治愈波动', '庆祝', '冰冻之风']
                    },
                    {
                        name: '大剑鬼',
                        level: 62,
                        item: '气势披带',
                        ability: '悠游自如',
                        moves: ['圣剑', '波动冲', '超级角击', '嬉闹']
                    },
                    {
                        name: '蚊香蛙皇',
                        level: 62,
                        item: '吃剩的东西',
                        ability: '降雨',
                        moves: ['伏特替换', '气象球', '十万伏特', '哈欠']
                    },
                    {
                        name: '水君',
                        level: 62,
                        item: '突击背心',
                        ability: '适应力',
                        moves: ['月亮之力', '蒸汽爆炸', '天龙之息', '镜面反射']
                    },
                    {
                        name: '暴鲤龙',
                        level: 62,
                        item: '暴鲤龙进化石',
                        ability: '强壮之颚',
                        moves: ['强力腮咬', '雷电牙', '冰冻牙', '咬碎']
                    },
                    {
                        name: 'M甲贺忍蛙',
                        level: 62,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['飞水手里剑', '暗黑爆破', '污泥波', '根源波动']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（送火山）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '皮卡丘（博士）',
                        level: 68,
                        item: '进化奇石',
                        ability: '恶作剧之心',
                        moves: ['电电加速', '电磁波', '精神强念', '戏法空间']
                    },
                    {
                        name: '爆炸头水牛',
                        level: 68,
                        item: '突击背心',
                        ability: '食草',
                        moves: ['波动冲', '突飞猛扑', '近身战', '岩崩']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 68,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '嬉闹', '暗黑连击', '暗影爪']
                    },
                    {
                        name: '胡帕',
                        level: 68,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '戏法空间', '神威', '精神强念']
                    },
                    {
                        name: '泥偶巨灵',
                        level: 68,
                        item: '气势披带',
                        ability: '无防守',
                        moves: ['地裂', '爆裂拳', '尖石攻击', '影子偷袭']
                    },
                    {
                        name: '暗夜暴君',
                        level: 68,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '十万马力', '冲岩', '高温重压']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市船厂）',
                battle_type: '双打',
                item: '全能爆发2*2',
                pokemons: [
                    {
                        name: '炎武王',
                        level: 68,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['击掌奇袭', '高温重压', '拍落', '大声咆哮']
                    },
                    {
                        name: '头巾混混',
                        level: 68,
                        item: '回复果',
                        ability: '恶作剧之心',
                        moves: ['击掌奇袭', '电磁波', '看我嘛', '拍落']
                    },
                    {
                        name: '派拉斯特',
                        level: 68,
                        item: '剧毒宝珠',
                        ability: '毒疗',
                        moves: ['十字毒刃', '影子偷袭', '虫突', '暗影爪']
                    },
                    {
                        name: '龙王蝎',
                        level: 68,
                        item: '焦点镜',
                        ability: '狙击手',
                        moves: ['暗黑连击', '十字毒刃', '十万马力', '十字劈']
                    },
                    {
                        name: '黑鲁加',
                        level: 68,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['爆炸烈焰', '暗黑爆破', '终极吸取', '暗影球']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市船厂）',
                battle_type: '双打',
                item: '全能爆发2*2',
                pokemons: [
                    {
                        name: '耿鬼',
                        level: 68,
                        item: '耿鬼进化石',
                        ability: '飘浮',
                        moves: ['污泥波', '奇异之风', '热风', '魔法闪耀']
                    },
                    {
                        name: '布鲁皇',
                        level: 68,
                        item: '回复果',
                        ability: '恶作剧之心',
                        moves: ['反射壁', '光墙', '抛下狠话', '爱心冲击']
                    },
                    {
                        name: '玛狃拉',
                        level: 68,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['冰砾', '冰柱坠击', '暗袭要害', '嬉闹']
                    },
                    {
                        name: '毒骷蛙',
                        level: 68,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['击掌奇袭', '十字毒刃', '近身战', '突袭']
                    },
                    {
                        name: '加班王',
                        level: 68,
                        item: '广角镜',
                        ability: '活力',
                        moves: ['终极冲击', '影子偷袭', '暗影拳', '吸取拳']
                    }
                ]
            },
            {
                title: '反派 海洋队精英们（一周目）',
                battle_type: '群战',
                item: '全能爆发2*3',
                pokemons: [
                    {
                        name: '风速狗',
                        level: 60,
                        item: '讲究围巾',
                        ability: '坚硬脑袋',
                        moves: ['地狱翻滚', '闪焰冲锋', '疯狂伏特', '双刃头锤']
                    },
                    {
                        name: '大狼犬',
                        level: 60,
                        item: '气势披带',
                        ability: '威吓',
                        moves: ['长嚎']
                    },
                    {
                        name: '黑鲁加',
                        level: 60,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['暗黑爆破', '爆炸烈焰', '能量球', '暗影球']
                    },
                    {
                        name: '酷豹',
                        level: 60,
                        item: '气势披带',
                        ability: '恶作剧之心',
                        moves: ['延后']
                    },
                    {
                        name: '刺雷王',
                        level: 60,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['十万伏特', '能量球', '大地之力', '月亮之力']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（海洋队基地）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '哈克龙',
                        level: 72,
                        item: '进化奇石',
                        ability: '降雨',
                        moves: ['活活气泡', '帮手', '庆祝', '电磁波']
                    },
                    {
                        name: '胡帕',
                        level: 72,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '神威', '看我嘛', '光墙']
                    },
                    {
                        name: '暗夜暴君',
                        level: 72,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '十万马力', '冲岩', '高温重压']
                    },
                    {
                        name: '快泳蛙',
                        level: 72,
                        item: '气势披带',
                        ability: '悠游自如',
                        moves: ['腹鼓', '吸取拳', '冰冻拳', '波动冲']
                    },
                    {
                        name: '玛狃拉',
                        level: 72,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['暗袭要害', '冰柱坠击', '冰砾', '嬉闹']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 72,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '急速折返', '嬉闹']
                    }
                ]
            },
            {
                title: '反派首领 海洋队-水梧桐（海底洞窟二番战）',
                battle_type: '双打',
                item: '全能爆发3*4',
                pokemons: [
                    {
                        name: '毒卷云（化身）',
                        level: 80,
                        item: '黑色污泥',
                        ability: '疾风之翼',
                        moves: ['污泥波', '毒菱', '顺风', '极恶声波']
                    },
                    {
                        name: '基格尔德',
                        level: 80,
                        item: '速度果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '神威', '龙星群', '大地之力']
                    },
                    {
                        name: '幽魂花',
                        level: 80,
                        item: '回复果',
                        ability: '魔法反射',
                        moves: ['破灭之光', '暗影球', '治愈波动', '能量球']
                    },
                    {
                        name: '古代耿鬼',
                        level: 80,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['污泥波', '暗影球', '终极吸取', '守住']
                    },
                    {
                        name: '基格尔德犬',
                        level: 80,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['剧毒牙', '暗影爪', '千波激荡', '咬碎']
                    },
                    {
                        name: '胡帕',
                        level: 80,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神威', '神之怒吼']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（二周目-橙华市）',
                battle_type: '双打',
                item: '全能爆发3*3',
                pokemons: [
                    {
                        name: '呆呆王',
                        level: 90,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['冲浪', '精神强念', '治愈波动', '冰冻光束']
                    },
                    {
                        name: '水君',
                        level: 90,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '月亮之力', '冰冻之风', '守住']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 90,
                        item: '气势披带',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '神威', '嬉闹']
                    },
                    {
                        name: '古梦妖',
                        level: 90,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['月亮之力', '暗影球', '十万伏特', '能量球']
                    },
                    {
                        name: '暗夜暴君',
                        level: 90,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '十万马力', '冲岩', '高温重压']
                    },
                    {
                        name: '胡帕',
                        level: 90,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神威', '神之怒吼']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*2',
                pokemons: [
                    {
                        name: '秃鹰娜',
                        level: 90,
                        item: '凸凸头盔',
                        ability: '防尘',
                        moves: ['欺诈', '撒菱', '吹飞', '羽栖']
                    },
                    {
                        name: '阿柏怪',
                        level: 90,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['粉尘射击', '咬碎', '火焰牙', '十万马力']
                    },
                    {
                        name: '暗黑路卡',
                        level: 90,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['嬉闹', '瞬影三击', '升龙烈破', '十字毒刃']
                    },
                    {
                        name: '三首恶龙',
                        level: 90,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['三重攻击', '暗黑爆破', '暴狂龙卷', '加农光炮']
                    },
                    {
                        name: '黑鲁加',
                        level: 90,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['爆炸烈焰', '暗黑爆破', '阳光烈焰', '暗影球']
                    },
                    {
                        name: '班基拉斯',
                        level: 90,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['暗袭要害', '岩崩', '地震', '嬉闹']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*2',
                pokemons: [
                    {
                        name: '勾魂眼',
                        level: 90,
                        item: '勾魂眼进化石',
                        ability: '魔法反射',
                        moves: ['抛下狠话', '戏法空间', '黑雾', '鬼火']
                    },
                    {
                        name: '泥偶巨灵',
                        level: 90,
                        item: '生命宝珠',
                        ability: '无防守',
                        moves: ['爆裂拳', '地裂', '暗影拳', '影子偷袭']
                    },
                    {
                        name: '黑夜魔灵',
                        level: 90,
                        item: '先制之爪',
                        ability: '铁拳',
                        moves: ['吸取拳', '影子偷袭', '暗影拳', '火焰拳']
                    },
                    {
                        name: '加班王',
                        level: 90,
                        item: '广角镜',
                        ability: '活力',
                        moves: ['终极冲击', '影子偷袭', '暗影拳', '吸取拳']
                    },
                    {
                        name: '古梦妖',
                        level: 90,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['月亮之力', '暗影球', '魔法火焰', '能量球']
                    },
                    {
                        name: '索罗亚克',
                        level: 90,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['暗影球', '冰冻光束', '污泥炸弹', '喷射火焰']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*2',
                pokemons: [
                    {
                        name: '双弹瓦斯',
                        level: 90,
                        item: '讲究眼镜',
                        ability: '飘浮',
                        moves: ['大爆炸']
                    },
                    {
                        name: '耿鬼',
                        level: 90,
                        item: '耿鬼进化石',
                        ability: '飘浮',
                        moves: ['暗影球', '污泥炸弹', '精神强念', '十万伏特']
                    },
                    {
                        name: '毒藻龙',
                        level: 90,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['污泥炸弹', '天龙之息', '墨汁炮', '十万伏特']
                    },
                    {
                        name: '天蝎王',
                        level: 90,
                        item: '气势披带',
                        ability: '飘浮',
                        moves: ['十字毒刃', '地震', '冲岩', '双翼']
                    },
                    {
                        name: '黏美龙',
                        level: 90,
                        item: '突击背心',
                        ability: '污毒之躯',
                        moves: ['毒液冲击', '天龙之息', '十万伏特', '喷射火焰']
                    },
                    {
                        name: '几何雪花',
                        level: 90,
                        item: '气势披带',
                        ability: '飘浮',
                        moves: ['污泥波', '绝对零度', '镜光射击', '冷冻干燥']
                    }
                ]
            },
            {
                title: '反派 海洋队精英们（二周目）',
                battle_type: '群战',
                item: '全能爆发2*3',
                pokemons: [
                    {
                        name: '风速狗',
                        level: 85,
                        item: '讲究围巾',
                        ability: '坚硬脑袋',
                        moves: ['闪焰冲锋', '疯狂伏特', '地狱翻滚', '双刃头锤']
                    },
                    {
                        name: '大狼犬',
                        level: 85,
                        item: '气势披带',
                        ability: '威吓',
                        moves: ['长嚎']
                    },
                    {
                        name: '黑鲁加',
                        level: 85,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['大字爆炎', '暗黑爆破']
                    },
                    {
                        name: '酷豹',
                        level: 85,
                        item: '气势披带',
                        ability: '恶作剧之心',
                        moves: ['延后']
                    },
                    {
                        name: '刺雷王',
                        level: 85,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['十万伏特', '能量球', '大地之力', '月亮之力']
                    },
                    {
                        name: '布鲁皇',
                        level: 85,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['电磁波']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（绿岭市-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发3*2',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 93,
                        item: '吃剩的东西',
                        ability: '降雨',
                        moves: ['打雷', '暴风', '神之怒吼', '气象球']
                    },
                    {
                        name: '玛纳霏',
                        level: 93,
                        item: '突击背心',
                        ability: '坚硬脑袋',
                        moves: ['意念头锤', '千万伏特', '波动冲', '电电加速']
                    },
                    {
                        name: '洛奇亚',
                        level: 93,
                        item: '突击背心',
                        ability: '避雷针',
                        moves: ['空中爆破', '大海之力', '精神强念', '冰冻光束']
                    },
                    {
                        name: '吼鲸王',
                        level: 93,
                        item: '吼鲸王进化石',
                        ability: '纯朴',
                        moves: ['污泥波', '大海之力', '哈欠', '睡觉']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 93,
                        item: '气势披带',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '嬉闹', '神威']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（绿岭市-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发3*2',
                pokemons: [
                    {
                        name: '毒卷云（灵兽）',
                        level: 92,
                        item: '弱点保险',
                        ability: '适应力',
                        moves: ['污泥波', '顺风', '极恶声波', '燕返']
                    },
                    {
                        name: '波尔凯尼恩',
                        level: 92,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['大字爆炎', '蒸汽爆炸', '隐形岩', '撒菱']
                    },
                    {
                        name: '敏捷虫',
                        level: 92,
                        item: '气势披带',
                        ability: '技术高手',
                        moves: ['飞水手里剑', '虫鸣', '潮旋', '终极吸取']
                    },
                    {
                        name: '浮潜鼬',
                        level: 92,
                        item: '生命宝珠',
                        ability: '悠游自如',
                        moves: ['波导弹', '真空波', '水炮', '守住']
                    },
                    {
                        name: '水箭龟',
                        level: 92,
                        item: '水箭龟进化石',
                        ability: '激流',
                        moves: ['活活气泡', '治愈波动', '波导弹', '加农光炮']
                    }
                ]
            }
        ],
        '青梅/劲敌 详细阵容': [
            {
                title: '宝可梦训练家 满充',
                battle_type: '一番战',
                item: '单打，全能秘药*3',
                pokemons: [
                    {
                        name: '盔甲鸟',
                        level: 40,
                        item: '吃剩的东西',
                        ability: '结实',
                        moves: ['隐形岩', '羽栖', '吹飞', '钢翼']
                    },
                    {
                        name: '赤波焰',
                        level: 40,
                        item: '气势披带',
                        ability: '无防守',
                        moves: ['爆炸烈焰', '打雷', '加农水炮', '暴风雪']
                    },
                    {
                        name: '艾路雷朵',
                        level: 40,
                        item: '艾路雷朵进化石',
                        ability: '加速',
                        moves: ['圣剑', '意念头锤', '暗袭要害', '刃叶斩']
                    },
                    {
                        name: '幽蛾皇',
                        level: 40,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '暗影球', '蝶舞', '虫群乱舞']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 40,
                        item: '速度果',
                        ability: '龙之威压',
                        moves: ['大地神力', '污泥波', '冰封世界', '龙星群']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 40,
                        item: '先制之爪',
                        ability: '坚硬脑袋',
                        moves: ['裁决之柱', '冲岩', '龙之逆鳞', '千波激荡']
                    }
                ]
            },
            {
                title: '宝可梦训练家 满充（二番战）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: 'M七夕青鸟',
                        level: 88,
                        item: '',
                        ability: '单纯',
                        moves: ['暴风', '妖精之风', '棉花防守', '蝶舞']
                    },
                    {
                        name: 'M艾路雷朵',
                        level: 88,
                        item: '',
                        ability: '魔法防守',
                        moves: ['意念头锤', '刃叶斩', '圣剑', '广域防守']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 88,
                        item: '速度果',
                        ability: '污毒之躯',
                        moves: ['大地之力', '污泥波', '龙星群', '冰封世界']
                    },
                    {
                        name: '赤波焰',
                        level: 88,
                        item: '突击背心',
                        ability: '无防守',
                        moves: ['爆炸烈焰', '加农水炮', '打雷', '暴风雪']
                    },
                    {
                        name: '幽蛾皇',
                        level: 88,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '蝶舞', '虫鸣', '奇异之风']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 88,
                        item: '突击背心',
                        ability: '拨沙',
                        moves: ['裁决之柱', '龙之逆鳞', '冲岩', '十万马力']
                    }
                ]
            }
        ],
        '道馆馆主 详细阵容': [
            {
                title: '道馆馆主 杜娟（岩石）',
                battle_type: '双打',
                item: '神奇秘药*2，盾之秘药*2',
                pokemons: [
                    {
                        name: '超甲龙犀',
                        level: 20,
                        item: '沙沙岩石',
                        ability: '扬沙',
                        moves: ['力量宝石', '天龙之息', '十万伏特', '喷射火焰']
                    },
                    {
                        name: '小碎钻',
                        level: 20,
                        item: '进化奇石',
                        ability: '恶作剧之心',
                        moves: ['电磁波', '戏法空间', '治愈波动', '岩崩']
                    },
                    {
                        name: '土台龟',
                        level: 20,
                        item: '弱点保险',
                        ability: '坚硬脑袋',
                        moves: ['木槌', '飞叶快刀', '双刃头锤', '十万马力']
                    },
                    {
                        name: '花岩怪',
                        level: 20,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['力量宝石', '暗影球', '魔法闪耀', '精神强念']
                    },
                    {
                        name: '暗夜暴君',
                        level: 20,
                        item: '先制之爪',
                        ability: '扬沙',
                        moves: ['裁决之柱', '暗影爪', '冲岩', '十万马力']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 20,
                        item: '抗地果',
                        ability: '拨沙',
                        moves: ['裁决之柱', '龙尾', '龙之逆鳞', '地裂']
                    }
                ]
            },
            {
                title: '道馆馆主 藤树（格斗）',
                battle_type: '双打',
                item: '盾之秘药*2，矛之秘药*2',
                pokemons: [
                    {
                        name: '电击魔兽',
                        level: 30,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['击掌奇袭', '电电加速', '升龙烈破', '冰冻拳']
                    },
                    {
                        name: '暗黑路卡',
                        level: 30,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['冰冻拳', '瞬影三击', '十字毒刃', '彗星拳']
                    },
                    {
                        name: '勾帕路翁',
                        level: 30,
                        item: '吃剩的东西',
                        ability: '不服输',
                        moves: ['角钻', '制裁猛击', '剑舞', '金属爆炸']
                    },
                    {
                        name: '美洛耶塔 （舞步）',
                        level: 30,
                        item: '突击背心',
                        ability: '天恩',
                        moves: ['暗影球', '波导弹', '月亮之力', '破坏光线']
                    },
                    {
                        name: '凯路迪欧',
                        level: 30,
                        item: '拳头石板',
                        ability: '好胜',
                        moves: ['神秘之剑', '真空波', '水炮', '冰冻光束']
                    },
                    {
                        name: '格兰德翁',
                        level: 30,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['真空波', '终极吸取', '神秘之剑', '大地之力']
                    }
                ]
            },
            {
                title: '道馆馆主 铁旋（电）',
                battle_type: '双打',
                item: '矛之秘药*2，全能秘药*2',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 40,
                        item: '突击背心',
                        ability: '降雨',
                        moves: ['闪电之触', '暴风', '气象球']
                    },
                    {
                        name: '由克希',
                        level: 40,
                        item: '吃剩的东西',
                        ability: '飘浮',
                        moves: ['精神掌控', '精神强念', '十万伏特', '治愈波动']
                    },
                    {
                        name: '玛纳霏',
                        level: 40,
                        item: '气势披带',
                        ability: '坚硬脑袋',
                        moves: ['千万伏特', '波动冲', '意念头锤', '水流喷射']
                    },
                    {
                        name: '雷皇',
                        level: 40,
                        item: '气球',
                        ability: '适应力',
                        moves: ['闪电之触', '大地之力', '天龙之息', '伏特替换']
                    },
                    {
                        name: '酋雷姆',
                        level: 40,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['理想闪电', '龙之逆鳞', '冰冻伏特', '十万马力']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 40,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['怒雷', '精神震荡', '伏特替换', '电磁波']
                    }
                ]
            },
            {
                title: '道馆馆主 亚莎（火）',
                battle_type: '双打',
                item: '全能秘药*4',
                pokemons: [
                    {
                        name: '固拉多',
                        level: 50,
                        item: '朱红色宝珠',
                        ability: '日照',
                        moves: ['地焰爆裂', '地裂', '守住', '暗袭要害']
                    },
                    {
                        name: '席多蓝恩',
                        level: 50,
                        item: '讲究围巾',
                        ability: '飘浮',
                        moves: ['熔岩风暴']
                    },
                    {
                        name: '喷火龙',
                        level: 50,
                        item: '喷火龙进化石Y',
                        ability: '斗争心',
                        moves: ['火山喷发', '天龙之息', '空气斩', '阳光烈焰']
                    },
                    {
                        name: '凤王',
                        level: 50,
                        item: '气势披带',
                        ability: '魔法防守',
                        moves: ['神圣之火', '勇鸟猛攻', '意念头锤', '燕返']
                    },
                    {
                        name: '比克提尼',
                        level: 50,
                        item: '焦点镜',
                        ability: '超幸运',
                        moves: ['胜利之炎', '十字劈', '精神利刃', '暗影爪']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 50,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '龙星群', '大地之力', '极寒冷焰']
                    }
                ]
            },
            {
                title: '道馆馆主 千里（一般）',
                battle_type: '双打',
                item: '全能秘药*2，大师秘药*2',
                pokemons: [
                    {
                        name: '袋龙',
                        level: 55,
                        item: '袋龙进化石',
                        ability: '强击',
                        moves: ['蓄能龙拳', '逐步击破', '吸取拳', '击掌奇袭']
                    },
                    {
                        name: '差不多娃娃',
                        level: 55,
                        item: '',
                        ability: '友情防守',
                        moves: ['治愈波动', '看我嘛', '妖精之风', '庆祝']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 55,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '拍落', '神威']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 55,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['重磅冲撞', '亿万吨重击', '十万马力', '吸取拳']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 55,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['古老之歌', '月亮之力', '波导弹', '精神强念']
                    },
                    {
                        name: '超神宝可梦',
                        level: 55,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '道馆馆主 娜琪（飞行）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '洛奇亚',
                        level: 65,
                        item: '抗冰果',
                        ability: '避雷针',
                        moves: ['大海之力', '空中爆破', '冰冻光束', '神威']
                    },
                    {
                        name: '毒卷云（化身）',
                        level: 65,
                        item: '吃剩的东西',
                        ability: '疾风之翼',
                        moves: ['极恶声波', '污泥波', '顺风', '毒菱']
                    },
                    {
                        name: '暗黑洛奇亚',
                        level: 65,
                        item: '先制之爪',
                        ability: '气流掌控',
                        moves: ['暗黑爆破', '空中爆破', '神之怒吼']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 65,
                        item: '贝壳之铃',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '顺风', '嬉闹']
                    },
                    {
                        name: '闪电鸟',
                        level: 65,
                        item: '抗岩果',
                        ability: '适应力',
                        moves: ['电电加速', '理想闪电', '急速折返', '飞身重压']
                    },
                    {
                        name: 'M烈空坐',
                        level: 65,
                        item: '气势披带',
                        ability: '气流掌控',
                        moves: ['画龙点睛', '龙之逆鳞', '胜利之炎', '神速']
                    }
                ]
            },
            {
                title: '道馆馆主 枫与南（超能）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '代欧奇希斯（防御）',
                        level: 78,
                        item: '心灵香草',
                        ability: '纯朴',
                        moves: ['看我嘛', '钢铁之锁', '磁铁轰炸', '治愈波动']
                    },
                    {
                        name: '比克提尼',
                        level: 78,
                        item: '气势披带',
                        ability: '胜利之星',
                        moves: ['胜利之炎', '精神利刃', '十字劈', '暗影爪']
                    },
                    {
                        name: '超梦',
                        level: 78,
                        item: '破坏增幅',
                        ability: '魔法防守',
                        moves: ['制裁猛击', '精神突进', '嬉闹', '暗影爪']
                    },
                    {
                        name: '幻梦',
                        level: 78,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['精神击破', '冰冻光束', '波导弹', '月亮之力']
                    },
                    {
                        name: '时拉比',
                        level: 78,
                        item: '弱点保险',
                        ability: '神奇守护',
                        moves: ['种子闪光', '幻象光线', '治愈波动', '魔法闪耀']
                    },
                    {
                        name: '古代胡地',
                        level: 78,
                        item: '突击背心',
                        ability: '变幻自如',
                        moves: ['雷电拳', '火焰拳', '冰冻拳', '精神利刃']
                    }
                ]
            },
            {
                title: '道馆馆主 米可利（水）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '盖欧卡',
                        level: 82,
                        item: '靛蓝色宝珠',
                        ability: '降雨',
                        moves: ['根源波动', '暴风', '神威', '冰冻光束']
                    },
                    {
                        name: '玛纳霏',
                        level: 82,
                        item: '气势披带',
                        ability: '避雷针',
                        moves: ['水流裂破', '水流喷射', '电电加速', '千万伏特']
                    },
                    {
                        name: '超神宝可梦',
                        level: 82,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '帕路奇亚',
                        level: 82,
                        item: '突击背心',
                        ability: '强击',
                        moves: ['亚空裂斩', '龙之逆鳞', '近身战', '暗影爪']
                    },
                    {
                        name: '洛奇亚',
                        level: 82,
                        item: '吃剩的东西',
                        ability: '避雷针',
                        moves: ['大海之力', '神之怒吼', '精神强念', '空中爆破']
                    },
                    {
                        name: '凯路迪欧',
                        level: 82,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['神秘之剑', '真空波', '水炮', '冰冻光束']
                    }
                ]
            },
            {
                title: '道馆馆主 杜娟',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '暗夜暴君',
                        level: 100,
                        item: '先制之爪',
                        ability: '扬沙',
                        moves: ['裁决之柱', '隐形岩', '广域防守', '暗影爪']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 100,
                        item: '沙沙岩石',
                        ability: '拨沙',
                        moves: ['神之怒吼', '龙之逆鳞', '裁决之柱', '龙尾']
                    },
                    {
                        name: '雷吉洛克',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '扬沙',
                        moves: ['裁决之柱', '诅咒', '地裂', '神威']
                    },
                    {
                        name: 'M蒂安希',
                        level: 100,
                        item: '抗钢果',
                        ability: '魔法反射',
                        moves: ['月亮之力', '钻石风暴', '大地之力', '治愈波动']
                    },
                    {
                        name: '代拉基翁',
                        level: 100,
                        item: '气势披带',
                        ability: '不服输',
                        moves: ['制裁猛击', '尖石攻击', '冲岩', '十万马力']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '岩石石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '精神击破', '怒雷']
                    }
                ]
            },
            {
                title: '道馆馆主 藤树',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '美洛耶塔（舞步）',
                        level: 100,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['波导弹', '月亮之力', '巨声', '精神强念']
                    },
                    {
                        name: '勾帕路翁',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '不服输',
                        moves: ['隐形岩', '制裁猛击', '神之怒吼', '金属爆炸']
                    },
                    {
                        name: '格兰德翁',
                        level: 100,
                        item: '生命宝珠',
                        ability: '好胜',
                        moves: ['神威', '大地之力', '神秘之剑', '真空波']
                    },
                    {
                        name: '凯路迪欧',
                        level: 100,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['神秘之剑', '水炮', '冰冻光束', '真空波']
                    },
                    {
                        name: '超梦',
                        level: 100,
                        item: '破坏增幅',
                        ability: '魔法防守',
                        moves: ['制裁猛击', '精神突进', '嬉闹', '铁尾']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '拳头石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '异次元洞', '怒雷', '磁铁轰炸']
                    }
                ]
            },
            {
                title: '道馆馆主 铁旋',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 100,
                        item: '突击背心',
                        ability: '降雨',
                        moves: ['闪电之触', '暴风', '气象球']
                    },
                    {
                        name: '雷皇',
                        level: 100,
                        item: '抗地果',
                        ability: '适应力',
                        moves: ['闪电之触', '大地之力', '天龙之息', '神之怒吼']
                    },
                    {
                        name: '捷克罗姆',
                        level: 100,
                        item: '攻击果',
                        ability: '加速',
                        moves: ['理想闪电', '龙之逆鳞', '十万马力', '电电加速']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 100,
                        item: '异常果',
                        ability: '恶作剧之心',
                        moves: ['神威', '怒雷', '治愈波动', '精神震荡']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['理想闪电', '龙之逆鳞', '冰冻伏特', '尖石攻击']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '雷电石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '种子闪光', '空中爆破']
                    }
                ]
            },
            {
                title: '道馆馆主 亚莎',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '凤王',
                        level: 100,
                        item: '气势披带',
                        ability: '日照',
                        moves: ['双翼', '神圣之火', '治愈波动', '迅炎']
                    },
                    {
                        name: '比克提尼',
                        level: 100,
                        item: '焦点镜',
                        ability: '超幸运',
                        moves: ['胜利之炎', '十字劈', '精神利刃', '十字毒刃']
                    },
                    {
                        name: '火神蛾',
                        level: 100,
                        item: '抗岩果',
                        ability: '日照',
                        moves: ['火神之舞', '虫鸣', '终极吸取', '空气斩']
                    },
                    {
                        name: '固拉多',
                        level: 100,
                        item: '朱红色宝珠',
                        ability: '日照',
                        moves: ['地焰爆裂', '地裂', '尖石攻击', '神之怒吼']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '龙星群', '极寒冷焰', '神威']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '火球石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '怒雷', '冰封世界', '神秘之剑']
                    }
                ]
            },
            {
                title: '道馆馆主 千里',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷吉奇卡斯',
                        level: 100,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['亿万吨重击', '地裂', '吸取拳', '重磅冲撞']
                    },
                    {
                        name: 'M差不多娃娃',
                        level: 100,
                        item: '心灵香草',
                        ability: '友情防守',
                        moves: ['庆祝', '治愈波动', '看我嘛', '击掌奇袭']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 100,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['波导弹', '古老之歌', '月亮之力', '神威']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 100,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '神之怒吼', '嬉闹']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['制裁光砾', '空中爆破', '异次元洞', '冰封世界']
                    }
                ]
            }
        ],
        '宝可梦联盟 详细阵容': [
            {
                title: '四天王 花月（一周目）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: '胡帕',
                        level: 85,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神之怒吼']
                    },
                    {
                        name: '暗黑洛奇亚',
                        level: 85,
                        item: '先制之爪',
                        ability: '气流掌控',
                        moves: ['暗黑爆破', '空中爆破', '神威']
                    },
                    {
                        name: '阿勃梭鲁',
                        level: 85,
                        item: '气势披带',
                        ability: '狙击手',
                        moves: ['斩龙之刃', '十字毒刃', '暗黑连击', '十字剪']
                    },
                    {
                        name: '达克莱伊',
                        level: 85,
                        item: '抗妖果',
                        ability: '暗黑气场',
                        moves: ['异次元洞', '暗黑洞', '奇异之风', '喷射火焰']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 85,
                        item: '贝壳之铃',
                        ability: '疾风之翼',
                        moves: ['暗黑连击', '死亡之翼', '顺风', '神圣之力']
                    },
                    {
                        name: 'M甲贺忍蛙',
                        level: 85,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['根源波动', '污泥波', '飞水手里剑', '冰冻光束']
                    }
                ]
            },
            {
                title: '四天王 芙蓉（一周目）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: '幽蛾皇',
                        level: 86,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '虫鸣', '奇异之风', '愤怒粉']
                    },
                    {
                        name: '暗夜暴君',
                        level: 86,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '暗影爪', '隐形岩', '地裂']
                    },
                    {
                        name: '骑拉帝纳',
                        level: 86,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['暗影潜袭', '龙星群', '神之怒吼', '神圣之力']
                    },
                    {
                        name: '古代耿鬼',
                        level: 86,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['污泥波', '终极吸取', '十万伏特', '祸不单行']
                    },
                    {
                        name: '骑拉帝纳（起源）',
                        level: 86,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['龙星群', '暗影潜袭', '波导弹', '力量宝石']
                    },
                    {
                        name: '幽魂花',
                        level: 86,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['破灭之光', '祸不单行', '新月舞', '治愈波动']
                    }
                ]
            },
            {
                title: '四天王 波妮（一周目）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: '水晶大岩蛇',
                        level: 87,
                        item: '气势披带',
                        ability: '冰冻皮肤',
                        moves: ['大爆炸']
                    },
                    {
                        name: '冰鬼护',
                        level: 87,
                        item: '讲究围巾',
                        ability: '冰冻皮肤',
                        moves: ['爆音波']
                    },
                    {
                        name: '急冻鸟',
                        level: 87,
                        item: '抗岩果',
                        ability: '降雪',
                        moves: ['绝对零度', '顺风', '空气斩', '神威']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 87,
                        item: '突击背心',
                        ability: '龙之威压',
                        moves: ['污泥波', '龙星群', '神之怒吼', '冰封世界']
                    },
                    {
                        name: '酋雷姆',
                        level: 87,
                        item: '弱点保险',
                        ability: '降雪',
                        moves: ['冰封世界', '龙星群', '神圣之力', '大地之力']
                    },
                    {
                        name: '雷吉艾斯',
                        level: 87,
                        item: '先制之爪',
                        ability: '纯朴',
                        moves: ['绝对零度', '波导弹', '瞬间失忆', '三重攻击']
                    }
                ]
            },
            {
                title: '四天王 源治（一周目）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: '捷克罗姆',
                        level: 88,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['理想闪电', '龙之逆鳞', '电电加速', '十万马力']
                    },
                    {
                        name: '莱希拉姆',
                        level: 88,
                        item: '抗地果',
                        ability: '加速',
                        moves: ['真实之焰', '龙星群', '神威', '大地之力']
                    },
                    {
                        name: '帕路奇亚',
                        level: 88,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['暗影爪', '龙之逆鳞', '亚空裂斩', '近身战']
                    },
                    {
                        name: '基格尔德',
                        level: 88,
                        item: '弱点保险',
                        ability: '纯朴',
                        moves: ['万箭毒射', '龙星群', '神之怒吼', '广域防守']
                    },
                    {
                        name: '拉帝亚斯',
                        level: 88,
                        item: '心之水滴',
                        ability: '飘浮',
                        moves: ['薄雾球', '治愈波动', '庆祝', '帮手']
                    },
                    {
                        name: '拉帝欧斯',
                        level: 88,
                        item: '拉帝欧斯进化石',
                        ability: '飘浮',
                        moves: ['洁净光芒', '龙星群', '暗影球', '十万伏特']
                    }
                ]
            },
            {
                title: '冠军 大吾（一周目）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: '帝牙卢卡',
                        level: 90,
                        item: '抗斗果',
                        ability: '适应力',
                        moves: ['时光咆哮', '龙星群', '大地神力', '钻石风暴']
                    },
                    {
                        name: '星空妖皇',
                        level: 90,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['薄雾场地', '治愈波动', '破灭之光', '加农光炮']
                    },
                    {
                        name: '超神宝可梦',
                        level: 90,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '代欧奇希斯（防御）',
                        level: 90,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['钢铁之锁', '神威', '看我嘛', '精神突进']
                    },
                    {
                        name: '席多蓝恩',
                        level: 90,
                        item: '讲究眼镜',
                        ability: '飘浮',
                        moves: ['熔岩风暴']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 90,
                        item: '水流卡带',
                        ability: '引火',
                        moves: ['高科技光炮', '虫鸣', '磁铁轰炸', '种子闪光']
                    }
                ]
            },
            {
                title: '四天王 花月（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '波尔凯尼恩',
                        level: 96,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['大字爆炎', '蒸汽爆炸', '隐形岩', '鬼火']
                    },
                    {
                        name: '胡帕',
                        level: 96,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['沙暴', '异次元洞', '异次元猛攻', '神威']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 96,
                        item: '速度果',
                        ability: '拨沙',
                        moves: ['裁决之柱', '冲岩', '龙之逆鳞', '十万马力']
                    },
                    {
                        name: '哲尔尼亚斯',
                        level: 96,
                        item: '速度果',
                        ability: '适应力',
                        moves: ['大地神力', '治愈波动', '终极吸取', '月亮之力']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 96,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '突袭', '急速折返']
                    },
                    {
                        name: '基格尔德',
                        level: 96,
                        item: '先制果',
                        ability: '纯朴',
                        moves: ['大地之力', '龙星群', '万箭毒射', '神圣之力']
                    }
                ]
            },
            {
                title: '四天王 芙蓉（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '幽蛾皇',
                        level: 97,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '虫鸣', '暗影球', '愤怒粉']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 97,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['古老之歌', '精神强念', '波导弹', '月亮之力']
                    },
                    {
                        name: '酋雷姆',
                        level: 97,
                        item: '先制果',
                        ability: '龙之威压',
                        moves: ['冰封世界', '龙星群', '力量宝石', '神之怒吼']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 97,
                        item: '冰冻卡带',
                        ability: '引火',
                        moves: ['高科技光炮', '磁铁轰炸', '虫鸣', '十万伏特']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 97,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['冰冻伏特', '理想闪电', '龙之逆鳞', '神威']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 97,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '极寒冷焰', '大地之力', '龙星群']
                    }
                ]
            },
            {
                title: '四天王 波妮（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '达克莱伊',
                        level: 98,
                        item: '气势披带',
                        ability: '梦魇',
                        moves: ['暗黑洞', '奇异之风', '异次元洞', '热风']
                    },
                    {
                        name: '克雷色利亚',
                        level: 98,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['新月舞', '治愈波动', '交换场地', '妖精之风']
                    },
                    {
                        name: '骑拉帝纳',
                        level: 98,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['暗影潜袭', '广域防守', '神威', '看我嘛']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 98,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['亿万吨重击', '十万马力', '重磅冲撞', '吸取拳']
                    },
                    {
                        name: '帕路奇亚',
                        level: 98,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['亚空裂斩', '龙之逆鳞', '暗影爪', '近身战']
                    },
                    {
                        name: '帝牙卢卡',
                        level: 98,
                        item: '突击背心',
                        ability: '适应力',
                        moves: ['时光咆哮', '龙星群', '力量宝石', '大地之力']
                    }
                ]
            },
            {
                title: '四天王 源治（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '代欧奇希斯（防御）',
                        level: 99,
                        item: '凸凸头盔',
                        ability: '纯朴',
                        moves: ['钢铁之锁', '磁铁轰炸', '神之怒吼', '镜面反射']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 99,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '拍落', '嬉闹']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 99,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['精神震荡', '闪电之触', '神威', '治愈波动']
                    },
                    {
                        name: '盖欧卡',
                        level: 99,
                        item: '靛蓝色宝珠',
                        ability: '降雨',
                        moves: ['根源波动', '暴风', '冷冻干燥', '打雷']
                    },
                    {
                        name: '固拉多',
                        level: 99,
                        item: '朱红色宝珠',
                        ability: '日照',
                        moves: ['地焰爆裂', '尖石攻击', '地裂', '暗袭要害']
                    },
                    {
                        name: '烈空坐',
                        level: 99,
                        item: '气势披带',
                        ability: '气流掌控',
                        moves: ['胜利之炎', '画龙点睛']
                    }
                ]
            },
            {
                title: '冠军 大吾（二周目）',
                battle_type: '群战',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '闪电鸟',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['勇鸟猛攻', '理想闪电', '电电加速', '燕返']
                    },
                    {
                        name: '急冻鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '无关天气',
                        moves: ['空气斩', '绝对零度', '顺风', '神威']
                    },
                    {
                        name: '超梦',
                        level: 100,
                        item: '破坏增幅',
                        ability: '魔法防守',
                        moves: ['制裁猛击', '精神突进', '嬉闹', '铁尾']
                    },
                    {
                        name: '幻梦',
                        level: 100,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['薄雾球', '精神击破', '屏障', '暗影球']
                    },
                    {
                        name: '火焰鸟',
                        level: 100,
                        item: '气势披带',
                        ability: '干燥皮肤',
                        moves: ['神圣之火', '勇鸟猛攻', '广域防守', '燕返']
                    },
                    {
                        name: '梦幻',
                        level: 100,
                        item: '异常果',
                        ability: '变身者',
                        moves: ['变身']
                    }
                ]
            }
        ],
        '隐藏五天王': [
            {
                title: '格兰德（地面天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '凹凸山道',
                pokemons: [
                    {
                        name: '土地云（灵兽）',
                        level: 100,
                        item: '沙沙岩石',
                        ability: '扬沙',
                        moves: ['燕返', '千波激荡', '拍落', '神威']
                    },
                    {
                        name: '地皇蜂',
                        level: 100,
                        item: '气势披带',
                        ability: '适应力',
                        moves: ['致命针刺', '双冲钻', '十字毒刃', '双翼']
                    },
                    {
                        name: '哲尔尼亚斯',
                        level: 100,
                        item: '特攻果',
                        ability: '适应力',
                        moves: ['月亮之力', '大地神力', '力量宝石', '治愈波动']
                    },
                    {
                        name: '基格尔德犬',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['粉尘射击', '尖石攻击', '近身战', '千波激荡']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 100,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['地裂', '亿万吨重击', '重磅冲撞', '吸取拳']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '大地石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '神速', '冰封世界', '真实之焰']
                    }
                ]
            },
            {
                title: '波伊森（毒系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '二周目船票',
                pokemons: [
                    {
                        name: '毒刺酋雷姆',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '龙之威压',
                        moves: ['冰封世界', '污泥波', '龙星群', '神之怒吼']
                    },
                    {
                        name: '古代耿鬼',
                        level: 100,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['奇异之风', '污泥波', '暗黑爆破', '终极吸取']
                    },
                    {
                        name: '毒卷云（化身）',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '疾风之翼',
                        moves: ['神威', '极恶声波', '污泥波', '顺风']
                    },
                    {
                        name: '毒拉比',
                        level: 100,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['薄雾球', '污泥波', '暗影球', '治愈波动']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '速度果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '大地之力', '龙星群', '神圣之力']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '剧毒石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '异次元洞', '冰封世界', '神速']
                    }
                ]
            },
            {
                title: '巴格（虫系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '120号道路',
                pokemons: [
                    {
                        name: '地皇蜂',
                        level: 100,
                        item: '气势披带',
                        ability: '适应力',
                        moves: ['致命针刺', '双冲钻', '十字毒刃', '双翼']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 100,
                        item: '水流卡带',
                        ability: '引火',
                        moves: ['虫鸣', '神威', '磁铁轰炸', '高科技光炮']
                    },
                    {
                        name: 'M沙漠蜻蜓',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['龙星群', '虫鸣', '大地神力', '污泥波']
                    },
                    {
                        name: '火神蛾',
                        level: 100,
                        item: '气势披带',
                        ability: '火焰之躯',
                        moves: ['火神之舞', '空中爆破', '虫鸣', '终极吸取']
                    },
                    {
                        name: '幽蛾皇',
                        level: 100,
                        item: '抗火果',
                        ability: '神奇守护',
                        moves: ['天罗地网', '虫鸣', '暗影球', '破灭之光']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '玉虫石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '新月舞', '根源波动']
                    }
                ]
            },
            {
                title: '格拉斯（草系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '105号水路',
                pokemons: [
                    {
                        name: '时拉比',
                        level: 100,
                        item: '防尘护目镜',
                        ability: '神奇守护',
                        moves: ['精神击破', '种子闪光', '神威', '新月舞']
                    },
                    {
                        name: 'M妙蛙花',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '太阳之力',
                        moves: ['疯狂植物', '剧毒', '广域防守', '污泥波']
                    },
                    {
                        name: '谢米（天空）',
                        level: 100,
                        item: '气势披带',
                        ability: '天恩',
                        moves: ['空中爆破', '治愈波动', '种子闪光', '顺风']
                    },
                    {
                        name: 'M蜥蜴王',
                        level: 100,
                        item: '气势披带',
                        ability: '技术高手',
                        moves: ['种子机关枪', '飞弹针', '钢刺连射', '岩石爆击']
                    },
                    {
                        name: '格拉斯提',
                        level: 100,
                        item: '抗斗果',
                        ability: '引火',
                        moves: ['真空波', '疯狂植物', '磁铁轰炸', '神秘之剑']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '碧绿石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '大地神力', '钻石风暴', '神威']
                    }
                ]
            },
            {
                title: '菲里（妖精天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '123号道路',
                pokemons: [
                    {
                        name: '幻梦',
                        level: 100,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['薄雾球', '精神击破', '波导弹', '十万伏特']
                    },
                    {
                        name: '幽魂花',
                        level: 100,
                        item: '速度果',
                        ability: '魔法反射',
                        moves: ['暗影球', '治愈波动', '神威', '破灭之光']
                    },
                    {
                        name: '基拉祈',
                        level: 100,
                        item: '抗火果',
                        ability: '飘浮',
                        moves: ['妖精之风', '治愈波动', '大地之力', '破灭之愿']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '妖精石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '神速', '大地神力', '真实之焰']
                    },
                    {
                        name: 'M蒂安希',
                        level: 100,
                        item: '抗钢果',
                        ability: '魔法反射',
                        moves: ['钻石风暴', '大地之力', '治愈波动', '月亮之力']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 100,
                        item: '生命宝珠',
                        ability: '单纯',
                        moves: ['月亮之力', '神威', '波导弹', '古老之歌']
                    }
                ]
            }
        ],
        '新增的传奇挑战！': [
            {
                title: '神奥冠军 希罗娜（水静市--商场右边小屋）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '美纳斯',
                        level: 100,
                        item: '进化奇石',
                        ability: '好胜',
                        moves: ['镜面反射', '盘蜷', '热水', '月亮之力']
                    },
                    {
                        name: '波克基斯',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['看我嘛', '哈欠', '空气斩', '波导弹']
                    },
                    {
                        name: '罗丝雷朵',
                        level: 100,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['气象球', '污泥波', '终极吸取', '剧毒']
                    },
                    {
                        name: '冰伊布',
                        level: 100,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['暴风雪', '冥想', '极光束', '大地之力']
                    },
                    {
                        name: '路卡利欧',
                        level: 100,
                        item: '路卡利欧进化石',
                        ability: '洞察',
                        moves: ['彗星拳', '升龙烈破', '神速', '十万马力']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '进化之人 碧蓝（某个幻影小岛）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '皮可西',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['看我嘛', '月亮之力', '治愈波动', '隐形岩']
                    },
                    {
                        name: '耿鬼',
                        level: 100,
                        item: '耿鬼进化石',
                        ability: '诅咒之躯',
                        moves: ['污泥波', '恶之波动', '终极吸取', '奇异之风']
                    },
                    {
                        name: '闪电鸟',
                        level: 100,
                        item: '强力香草',
                        ability: '适应力',
                        moves: ['理想闪电', '电电加速', '神鸟猛击', '看穿']
                    },
                    {
                        name: '急冻鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '无关天气',
                        moves: ['绝对零度', '空气斩', '力量宝石', '顺风']
                    },
                    {
                        name: '火焰鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '干燥皮肤',
                        moves: ['灭世之火', '勇鸟猛攻', '羽栖', '迅炎']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '未知',
                        ability: '未知',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '关都冠军 阿渡（石之洞窟深处）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '双斧战龙',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['钢铁头槌', '断头钳', '双龙切', '剑舞']
                    },
                    {
                        name: '沙漠蜻蜓',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['空气斩', '大地之力', '虫鸣', '暴狂龙卷']
                    },
                    {
                        name: '赤波焰',
                        level: 100,
                        item: '抗冰果',
                        ability: '无防守',
                        moves: ['打雷', '暴风雪', '大字爆炎', '加农水炮']
                    },
                    {
                        name: '暴飞龙',
                        level: 100,
                        item: '气势披带',
                        ability: '飞行皮肤',
                        moves: ['巨声', '热风', '水炮', '暴狂龙卷']
                    },
                    {
                        name: '烈咬陆鲨',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['突飞猛扑', '龙神俯冲', '火焰牙', '尖石攻击']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '战斗之人 赤红（流星瀑布深处）',
                battle_type: '双打',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '卡比兽',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '胆量',
                        moves: ['击掌奇袭', '十万马力', '泰山压顶', '哈欠']
                    },
                    {
                        name: '古代耿鬼',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['神威', '祸不单行', '污泥波', '暗影球']
                    },
                    {
                        name: 'M妙蛙花',
                        level: 100,
                        item: '抗冰果',
                        ability: '太阳之力',
                        moves: ['终极吸取', '污泥波', '生长', '光合作用']
                    },
                    {
                        name: 'M喷火龙',
                        level: 100,
                        item: '气势披带',
                        ability: '终结之地',
                        moves: ['火山喷发', '阳光烈焰', '空气斩', '天龙之息']
                    },
                    {
                        name: 'M水箭龟',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '超级发射器',
                        moves: ['治愈波动', '活活气泡', '加农光炮', '波导弹']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            }
        ],
        '最终挑战！游戏作者（茵郁市右下角树屋）': [
            {
                title: '游戏作者 阿布（一周目）',
                battle_type: '群战',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷皇',
                        level: 90,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['闪电之触', '天龙之息', '大地之力', '精神强念']
                    },
                    {
                        name: '炎帝',
                        level: 90,
                        item: '突击背心',
                        ability: '无关天气',
                        moves: ['灭世之火', '十万马力', '龙神俯冲', '迅炎']
                    },
                    {
                        name: '洛奇亚',
                        level: 90,
                        item: '特攻果',
                        ability: '避雷针',
                        moves: ['空中爆破', '广域防守', '大海之力', '顺风']
                    },
                    {
                        name: '凤王',
                        level: 90,
                        item: '气势披带',
                        ability: '魔法防守',
                        moves: ['神圣之火', '燕返', '勇鸟猛攻', '治愈波动']
                    },
                    {
                        name: '水君',
                        level: 90,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '冷冻干燥', '薄雾场地', '天龙之息']
                    },
                    {
                        name: '时拉比',
                        level: 90,
                        item: '异常果',
                        ability: '神奇守护',
                        moves: ['种子闪光', '幻象光线', '魔法闪耀', '治愈波动']
                    }
                ]
            },
            {
                title: '游戏作者 阿布（二周目）',
                battle_type: '群战',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '胡帕',
                        level: 100,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['延后']
                    },
                    {
                        name: '暗黑洛奇亚',
                        level: 100,
                        item: '抗妖果',
                        ability: '气流掌控',
                        moves: ['看我嘛', '空中爆破']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['制裁光砾', '千波激荡', '亚空裂斩', '异次元洞']
                    },
                    {
                        name: '酋雷姆',
                        level: 100,
                        item: '抗地果',
                        ability: '双连击',
                        moves: ['真实之焰', '龙星群', '大地之力', '力量宝石']
                    },
                    {
                        name: '幽魂花',
                        level: 100,
                        item: '心灵香草',
                        ability: '友情防守',
                        moves: ['反射壁', '光墙', '薄雾场地', '治愈波动']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '黑色污泥',
                        ability: '纯朴',
                        moves: ['龙星群', '万箭毒射', '大地之力', '神速']
                    }
                ]
            }
        ]
    };
};

export const reqYHNPC = (): BattleData => {
    return {
        '海洋队 重要战斗 阵容': [
            {
                title: '反派 海洋队精英（橙华森林）',
                battle_type: '单打',
                item: '全能爆发*2',
                pokemons: [
                    {
                        name: '酷豹',
                        level: 18,
                        item: '一般宝石',
                        ability: '轻装',
                        moves: ['大声咆哮', '击掌奇袭', '嬉闹']
                    },
                    {
                        name: '大狼犬',
                        level: 18,
                        item: '气势披带',
                        ability: '强壮之颚',
                        moves: ['咬碎', '雷电牙', '冰冻牙', '剧毒牙']
                    },
                    {
                        name: '皮卡丘（摇滚）',
                        level: 18,
                        item: '电气球',
                        ability: '狙击手',
                        moves: ['暗袭要害', '电电加速', '击掌奇袭', '水流裂破']
                    },
                    {
                        name: '双尾怪手',
                        level: 18,
                        item: '贝壳之铃',
                        ability: '连续攻击',
                        moves: ['种子机关枪', '暗袭要害', '扫尾拍打', '岩石爆击']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（卡绿隧道）',
                battle_type: '双打',
                item: '全能爆发*4',
                pokemons: [
                    {
                        name: '黑暗鸦',
                        level: 35,
                        item: '进化奇石',
                        ability: '恶作剧之心',
                        moves: ['电磁波', '顺风', '庆祝', '治愈波动']
                    },
                    {
                        name: '乌鸦头头',
                        level: 35,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['热风', '暗黑爆破', '奇异之风', '暴风']
                    },
                    {
                        name: '皮卡丘（贵妇）',
                        level: 35,
                        item: '电气球',
                        ability: '飘浮',
                        moves: ['污泥波', '十万伏特', '银色旋风', '妖精之风']
                    },
                    {
                        name: '大力鳄',
                        level: 35,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['水流喷射', '攀瀑', '咬碎', '冰冻牙']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市博物馆）',
                battle_type: '双打',
                item: '全能爆发*4',
                pokemons: [
                    {
                        name: '尼多王',
                        level: 50,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['污泥波', '大地之力', '十万伏特', '冰冻光束']
                    },
                    {
                        name: '尼多后',
                        level: 50,
                        item: '吃剩的东西',
                        ability: '污毒之躯',
                        moves: ['隐形岩', '吼叫', '污泥波', '大地之力']
                    },
                    {
                        name: '皮卡丘（贵妇）',
                        level: 50,
                        item: '进化奇石',
                        ability: '飘浮',
                        moves: ['污泥波', '放电', '看我嘛', '蹭蹭脸颊']
                    },
                    {
                        name: '天蝎王',
                        level: 50,
                        item: '广角镜',
                        ability: '飘浮',
                        moves: ['十字毒刃', '地裂', '双翼', '断头钳']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市博物馆）',
                battle_type: '双打',
                item: '全能爆发*4',
                pokemons: [
                    {
                        name: '叉字蝠',
                        level: 50,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['双翼', '吸血', '十字毒刃', '暗袭要害']
                    },
                    {
                        name: '阿柏怪',
                        level: 50,
                        item: '生命宝珠',
                        ability: '威吓',
                        moves: ['粉尘射击', '咬碎', '吸血', '龙之舞']
                    },
                    {
                        name: '毒刺水母',
                        level: 50,
                        item: '吃剩的东西',
                        ability: '污毒之躯',
                        moves: ['镜面反射', '污泥波', '热水', '广域防守']
                    },
                    {
                        name: '毒藻龙',
                        level: 50,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['暴狂龙卷', '污泥波', '墨汁炮', '十万伏特']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（流星瀑布-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '水君',
                        level: 60,
                        item: '速度果',
                        ability: '引水',
                        moves: ['冰封世界', '龙星群', '守住', '蒸汽爆炸']
                    },
                    {
                        name: '乌鸦头头',
                        level: 60,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['恶之波动', '空气斩', '热风', '奇异之风']
                    },
                    {
                        name: '暗黑路卡',
                        level: 60,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['彗星拳', '嬉闹', '十字毒刃', '瞬影三击']
                    },
                    {
                        name: '摇篮百合',
                        level: 60,
                        item: '吃剩的东西',
                        ability: '引水',
                        moves: ['力量宝石', '终极吸取', '寄生种子', '庆祝']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（流星瀑布-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '雷皇',
                        level: 60,
                        item: '抗妖果',
                        ability: '避雷针',
                        moves: ['闪电之触', '天龙之息', '大地之力', '庆祝']
                    },
                    {
                        name: '毒骷蛙',
                        level: 60,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['击掌奇袭', '十字毒刃', '近身战', '剑舞']
                    },
                    {
                        name: '雷电狮',
                        level: 60,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['咬碎', '嬉闹', '电电加速', '冰冻牙']
                    },
                    {
                        name: 'M呆壳兽',
                        level: 60,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['治愈波动', '屏障', '庆祝', '热水']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（烟囱山）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: 'M耿鬼',
                        level: 63,
                        item: '气势披带',
                        ability: '踩影',
                        moves: ['污泥波', '奇异之风', '魔法闪耀', '十万伏特']
                    },
                    {
                        name: '爆音怪',
                        level: 63,
                        item: '讲究围巾',
                        ability: '胆量',
                        moves: ['爆音波', '污泥波', '冰冻光束', '大字爆炎']
                    },
                    {
                        name: '毒拉比',
                        level: 63,
                        item: '吃剩的东西',
                        ability: '魔法防守',
                        moves: ['剧毒', '毒液冲击', '月亮之力', '治愈波动']
                    },
                    {
                        name: '玛狃拉',
                        level: 63,
                        item: '气势披带',
                        ability: '强行',
                        moves: ['十字毒刃', '拍落', '冰砾', '冰柱坠击']
                    },
                    {
                        name: '水君',
                        level: 63,
                        item: '速度果',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '龙星群', '冰封世界']
                    },
                    {
                        name: '暴鲤龙',
                        level: 63,
                        item: '暴鲤龙进化石',
                        ability: '强壮之颚',
                        moves: ['雷电牙', '强力腮咬', '咬碎', '冰冻牙']
                    }
                ]
            },
            {
                title: '反派首领 海洋队-水梧桐（烟囱山',
                battle_type: '一番战',
                item: '双打，全能爆发2*4',
                pokemons: [
                    {
                        name: '龙卷云（化身）',
                        level: 66,
                        item: '黑色污泥',
                        ability: '疾风之翼',
                        moves: ['污泥波', '毒菱', '顺风', '极恶声波']
                    },
                    {
                        name: '古代耿鬼',
                        level: 66,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['污泥波', '奇异之风', '终极吸取', '守住']
                    },
                    {
                        name: '胡帕（解放）',
                        level: 66,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神之怒吼', '神威']
                    },
                    {
                        name: '基格尔德犬',
                        level: 66,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['嬉闹', '暗影爪', '千波激荡', '十字毒刃']
                    },
                    {
                        name: '幽魂花',
                        level: 66,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['破灭之光', '污泥波', '治愈波动', '能量球']
                    },
                    {
                        name: '基格尔德',
                        level: 66,
                        item: '先制果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '大地神力', '神圣之力', '龙星群']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（未知小岛-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '美纳斯',
                        level: 75,
                        item: '进化奇石',
                        ability: '好胜',
                        moves: ['破灭之光', '活活气泡', '治愈波动', '冷冻干燥']
                    },
                    {
                        name: '始祖大鸟',
                        level: 75,
                        item: '强力香草',
                        ability: '不服输',
                        moves: ['冲岩', '神鸟猛击', '火箭头锤', '急速折返']
                    },
                    {
                        name: '勾帕路翁',
                        level: 75,
                        item: '突击背心',
                        ability: '不服输',
                        moves: ['金属爆炸', '制裁猛击', '钢铁头槌', '十万马力']
                    },
                    {
                        name: '罗丝雷朵',
                        level: 75,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['剧毒', '终极吸取', '污泥波', '寄生种子']
                    },
                    {
                        name: '格兰德翁',
                        level: 75,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['神秘之剑', '大地之力', '真空波', '能量球']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（未知小岛-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发2*2',
                pokemons: [
                    {
                        name: '火炎狮',
                        level: 74,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['喷射火焰', '破坏光线']
                    },
                    {
                        name: '火暴猴',
                        level: 74,
                        item: '进化奇石',
                        ability: '不服输',
                        moves: ['吸取拳', '影子偷袭', '暗影拳', '冰冻拳']
                    },
                    {
                        name: '帝王拿波',
                        level: 74,
                        item: '先制之爪',
                        ability: '好胜',
                        moves: ['加农水炮', '加农光炮', '力量宝石', '冷冻干燥']
                    },
                    {
                        name: 'M艾路雷朵',
                        level: 74,
                        item: '气势披带',
                        ability: '魔法防守',
                        moves: ['精神利刃', '升龙烈破', '十字剪', '刃叶斩']
                    },
                    {
                        name: '代拉基翁',
                        level: 74,
                        item: '弱点保险',
                        ability: '不服输',
                        moves: ['冲岩', '尖石攻击', '制裁猛击', '钢铁头槌']
                    }
                ]
            },
            {
                title: '海洋队干部 海洋队-泉（天气预测馆）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '拉普拉斯',
                        level: 80,
                        item: '潮湿岩石',
                        ability: '降雨',
                        moves: ['气象球', '治愈波动', '庆祝', '电磁波']
                    },
                    {
                        name: '大剑鬼',
                        level: 80,
                        item: '气势披带',
                        ability: '悠游自如',
                        moves: ['圣剑', '波动冲', '超级角击', '嬉闹']
                    },
                    {
                        name: '蚊香蛙皇',
                        level: 80,
                        item: '吃剩的东西',
                        ability: '降雨',
                        moves: ['伏特替换', '气象球', '十万伏特', '哈欠']
                    },
                    {
                        name: '水君',
                        level: 80,
                        item: '突击背心',
                        ability: '适应力',
                        moves: ['薄雾球', '蒸汽爆炸', '龙星群', '冰封世界']
                    },
                    {
                        name: 'M暴鲤龙',
                        level: 80,
                        item: '弱点保险',
                        ability: '强壮之颚',
                        moves: ['强力腮咬', '雷电牙', '冰冻牙', '咬碎']
                    },
                    {
                        name: 'M甲贺忍蛙',
                        level: 80,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['飞水手里剑', '暗黑爆破', '污泥波', '能量球']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（送火山）',
                battle_type: '双打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '皮卡丘（博士）',
                        level: 86,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['电电加速', '电磁波', '精神强念', '戏法空间']
                    },
                    {
                        name: '爆炸头水牛',
                        level: 86,
                        item: '突击背心',
                        ability: '食草',
                        moves: ['波动冲', '突飞猛扑', '近身战', '岩崩']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 86,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '嬉闹', '暗黑连击', '暗影爪']
                    },
                    {
                        name: '胡帕',
                        level: 86,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '戏法空间', '神威', '精神强念']
                    },
                    {
                        name: '泥偶巨灵',
                        level: 86,
                        item: '气势披带',
                        ability: '无防守',
                        moves: ['地裂', '爆裂拳', '尖石攻击', '影子偷袭']
                    },
                    {
                        name: '暗夜暴君',
                        level: 86,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '千波激荡', '冲岩', '高温重压']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市船厂）',
                battle_type: '双打',
                item: '全能爆发2*3',
                pokemons: [
                    {
                        name: '炎武王',
                        level: 85,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['击掌奇袭', '高温重压', '拍落', '大声咆哮']
                    },
                    {
                        name: '头巾混混',
                        level: 85,
                        item: '回复果',
                        ability: '恶作剧之心',
                        moves: ['击掌奇袭', '电磁波', '看我嘛', '拍落']
                    },
                    {
                        name: '派拉斯特',
                        level: 85,
                        item: '剧毒宝珠',
                        ability: '毒疗',
                        moves: ['十字毒刃', '影子偷袭', '虫突', '暗影爪']
                    },
                    {
                        name: '龙王蝎',
                        level: 85,
                        item: '焦点镜',
                        ability: '狙击手',
                        moves: ['暗黑连击', '十字毒刃', '十万马力', '十字劈']
                    },
                    {
                        name: '黑鲁加',
                        level: 85,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['爆炸烈焰', '暗黑爆破', '终极吸取', '暗影球']
                    }
                ]
            },
            {
                title: '反派 海洋队精英（凯那市船厂）',
                battle_type: '双打',
                item: '全能爆发2*3',
                pokemons: [
                    {
                        name: '耿鬼',
                        level: 85,
                        item: '耿鬼进化石',
                        ability: '飘浮',
                        moves: ['污泥波', '奇异之风', '热风', '魔法闪耀']
                    },
                    {
                        name: '布鲁皇',
                        level: 85,
                        item: '回复果',
                        ability: '恶作剧之心',
                        moves: ['反射壁', '光墙', '抛下狠话', '爱心冲击']
                    },
                    {
                        name: '玛狃拉',
                        level: 85,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['冰砾', '冰柱坠击', '暗袭要害', '嬉闹']
                    },
                    {
                        name: '毒骷蛙',
                        level: 85,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['击掌奇袭', '十字毒刃', '近身战', '突袭']
                    },
                    {
                        name: '加班王',
                        level: 85,
                        item: '广角镜',
                        ability: '活力',
                        moves: ['终极冲击', '影子偷袭', '暗影拳', '吸取拳']
                    }
                ]
            },
            {
                title: '反派 海洋队精英们（一周目）',
                battle_type: '群战',
                item: '全能爆发2*3',
                pokemons: [
                    {
                        name: '风速狗',
                        level: 75,
                        item: '讲究围巾',
                        ability: '坚硬脑袋',
                        moves: ['地狱翻滚', '闪焰冲锋', '疯狂伏特', '双刃头锤']
                    },
                    {
                        name: '大狼犬',
                        level: 75,
                        item: '气势披带',
                        ability: '威吓',
                        moves: ['长嚎']
                    },
                    {
                        name: '黑鲁加',
                        level: 75,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['暗黑爆破', '爆炸烈焰', '能量球', '暗影球']
                    },
                    {
                        name: '酷豹',
                        level: 75,
                        item: '气势披带',
                        ability: '恶作剧之心',
                        moves: ['延后']
                    },
                    {
                        name: '刺雷王',
                        level: 75,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['十万伏特', '能量球', '大地之力', '月亮之力']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（海洋队基地）',
                battle_type: '双打',
                item: '全能爆发3*4',
                pokemons: [
                    {
                        name: '哈克龙',
                        level: 90,
                        item: '进化奇石',
                        ability: '降雨',
                        moves: ['活活气泡', '帮手', '庆祝', '电磁波']
                    },
                    {
                        name: '胡帕',
                        level: 90,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '神威', '看我嘛', '恶之波动']
                    },
                    {
                        name: '暗夜暴君',
                        level: 90,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '千波激荡', '冲岩', '高温重压']
                    },
                    {
                        name: '快泳蛙',
                        level: 90,
                        item: '气势披带',
                        ability: '悠游自如',
                        moves: ['腹鼓', '吸取拳', '冰冻拳', '波动冲']
                    },
                    {
                        name: '玛狃拉',
                        level: 90,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['暗袭要害', '冰柱坠击', '冰砾', '嬉闹']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 90,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '急速折返', '嬉闹']
                    }
                ]
            },
            {
                title: '反派首领 海洋队-水梧桐（海底洞窟二番战）',
                battle_type: '双打',
                item: '全能爆发3*2、全能爆发6*2',
                pokemons: [
                    {
                        name: '龙卷云（化身）',
                        level: 99,
                        item: '黑色污泥',
                        ability: '疾风之翼',
                        moves: ['污泥波', '毒菱', '顺风', '极恶声波']
                    },
                    {
                        name: '基格尔德',
                        level: 99,
                        item: '速度果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '神威', '龙星群', '大地神力']
                    },
                    {
                        name: '幽魂花',
                        level: 99,
                        item: '回复果',
                        ability: '魔法反射',
                        moves: ['破灭之光', '暗影球', '治愈波动', '能量球']
                    },
                    {
                        name: '古代耿鬼',
                        level: 99,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['污泥波', '暗影球', '终极吸取', '守住']
                    },
                    {
                        name: '基格尔德犬',
                        level: 99,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['十字毒刃', '暗影爪', '千波激荡', '暗黑连击']
                    },
                    {
                        name: '胡帕（解放）',
                        level: 99,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神威', '神之怒吼']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（二周目-橙华市）',
                battle_type: '双打',
                item: '全能爆发4*3',
                pokemons: [
                    {
                        name: '呆呆王',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['冲浪', '精神强念', '治愈波动', '冰冻光束']
                    },
                    {
                        name: '水君',
                        level: 100,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '破灭之光', '冰封世界', '守住']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 100,
                        item: '气势披带',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '神威', '嬉闹']
                    },
                    {
                        name: '古梦妖',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['月亮之力', '暗影球', '十万伏特', '能量球']
                    },
                    {
                        name: '暗夜暴君',
                        level: 100,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '千波激荡', '冲岩', '高温重压']
                    },
                    {
                        name: '胡帕',
                        level: 100,
                        item: '妖怪石板',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神威', '神之怒吼']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '秃鹰娜',
                        level: 99,
                        item: '凸凸头盔',
                        ability: '防尘',
                        moves: ['欺诈', '撒菱', '吹飞', '羽栖']
                    },
                    {
                        name: '阿柏怪',
                        level: 99,
                        item: '突击背心',
                        ability: '威吓',
                        moves: ['粉尘射击', '咬碎', '火焰牙', '十万马力']
                    },
                    {
                        name: '暗黑路卡',
                        level: 99,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['嬉闹', '致命针刺', '升龙烈破', '十字毒刃']
                    },
                    {
                        name: '三首恶龙',
                        level: 99,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['三重攻击', '暗黑爆破', '暴狂龙卷', '加农光炮']
                    },
                    {
                        name: '黑鲁加',
                        level: 99,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['爆炸烈焰', '暗黑爆破', '阳光烈焰', '暗影球']
                    },
                    {
                        name: '班基拉斯',
                        level: 99,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['暗袭要害', '岩崩', '地震', '嬉闹']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '勾魂眼',
                        level: 99,
                        item: '勾魂眼进化石',
                        ability: '魔法反射',
                        moves: ['抛下狠话', '戏法空间', '黑雾', '鬼火']
                    },
                    {
                        name: '泥偶巨灵',
                        level: 99,
                        item: '生命宝珠',
                        ability: '无防守',
                        moves: ['爆裂拳', '地裂', '暗影拳', '影子偷袭']
                    },
                    {
                        name: '黑夜魔灵',
                        level: 99,
                        item: '先制之爪',
                        ability: '铁拳',
                        moves: ['吸取拳', '影子偷袭', '暗影拳', '火焰拳']
                    },
                    {
                        name: '加班王',
                        level: 99,
                        item: '广角镜',
                        ability: '活力',
                        moves: ['终极冲击', '影子偷袭', '暗影拳', '吸取拳']
                    },
                    {
                        name: '古梦妖',
                        level: 99,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['月亮之力', '暗影球', '魔法火焰', '能量球']
                    },
                    {
                        name: '冰鬼护',
                        level: 99,
                        item: '讲究围巾',
                        ability: '冰冻皮肤',
                        moves: ['爆音波']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（二周目-卡那兹市）',
                battle_type: '单打',
                item: '全能爆发2*4',
                pokemons: [
                    {
                        name: '双弹瓦斯',
                        level: 99,
                        item: '讲究眼镜',
                        ability: '飘浮',
                        moves: ['大爆炸']
                    },
                    {
                        name: '耿鬼',
                        level: 99,
                        item: '耿鬼进化石',
                        ability: '飘浮',
                        moves: ['暗影球', '污泥炸弹', '精神强念', '十万伏特']
                    },
                    {
                        name: '毒藻龙',
                        level: 99,
                        item: '生命宝珠',
                        ability: '适应力',
                        moves: ['污泥炸弹', '天龙之息', '墨汁炮', '十万伏特']
                    },
                    {
                        name: '天蝎王',
                        level: 99,
                        item: '气势披带',
                        ability: '飘浮',
                        moves: ['十字毒刃', '地震', '冲岩', '双翼']
                    },
                    {
                        name: '黏美龙',
                        level: 99,
                        item: '突击背心',
                        ability: '污毒之躯',
                        moves: ['毒液冲击', '天龙之息', '十万伏特', '喷射火焰']
                    },
                    {
                        name: '几何雪花',
                        level: 99,
                        item: '气势披带',
                        ability: '飘浮',
                        moves: ['污泥波', '绝对零度', '镜光射击', '冷冻干燥']
                    }
                ]
            },
            {
                title: '反派 海洋队精英们（二周目）',
                battle_type: '群战',
                item: '全能爆发3*3',
                pokemons: [
                    {
                        name: '风速狗',
                        level: 100,
                        item: '讲究围巾',
                        ability: '坚硬脑袋',
                        moves: ['闪焰冲锋', '疯狂伏特', '地狱翻滚', '双刃头锤']
                    },
                    {
                        name: '大狼犬',
                        level: 100,
                        item: '气势披带',
                        ability: '威吓',
                        moves: ['长嚎']
                    },
                    {
                        name: '黑鲁加',
                        level: 100,
                        item: '黑鲁加进化石',
                        ability: '日照',
                        moves: ['大字爆炎', '暗黑爆破']
                    },
                    {
                        name: '酷豹',
                        level: 100,
                        item: '气势披带',
                        ability: '恶作剧之心',
                        moves: ['延后']
                    },
                    {
                        name: '刺雷王',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['十万伏特', '能量球', '大地之力', '月亮之力']
                    },
                    {
                        name: '布鲁皇',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '恶作剧之心',
                        moves: ['电磁波']
                    }
                ]
            },
            {
                title: '反派干部 海洋队-潮（绿岭市-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发3*2',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '降雨',
                        moves: ['打雷', '暴风', '神之怒吼', '气象球']
                    },
                    {
                        name: '玛纳霏',
                        level: 100,
                        item: '突击背心',
                        ability: '坚硬脑袋',
                        moves: ['意念头锤', '疯狂伏特', '波动冲', '电电加速']
                    },
                    {
                        name: '洛奇亚',
                        level: 100,
                        item: '突击背心',
                        ability: '避雷针',
                        moves: ['空中爆破', '大海之力', '洁净光芒', '冰封世界']
                    },
                    {
                        name: '吼鲸王',
                        level: 100,
                        item: '吼鲸王进化石',
                        ability: '纯朴',
                        moves: ['污泥波', '大海之力', '哈欠', '偷懒']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 100,
                        item: '气势披带',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '嬉闹', '神威']
                    }
                ]
            },
            {
                title: '反派 海洋队骨干（绿岭市-坑爹',
                battle_type: '双打',
                item: '双打，全能爆发3*2',
                pokemons: [
                    {
                        name: '龙卷云（灵兽）',
                        level: 100,
                        item: '弱点保险',
                        ability: '适应力',
                        moves: ['污泥波', '顺风', '极恶声波', '燕返']
                    },
                    {
                        name: '波尔凯尼恩',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['真实之焰', '蒸汽爆炸', '隐形岩', '神威']
                    },
                    {
                        name: '敏捷虫',
                        level: 100,
                        item: '气势披带',
                        ability: '技术高手',
                        moves: ['飞水手里剑', '虫鸣', '潮旋', '终极吸取']
                    },
                    {
                        name: '浮潜鼬',
                        level: 100,
                        item: '生命宝珠',
                        ability: '悠游自如',
                        moves: ['波导弹', '真空波', '水炮', '守住']
                    },
                    {
                        name: 'M巨沼怪',
                        level: 100,
                        item: '抗草果',
                        ability: '悠游自如',
                        moves: ['突飞猛扑', '波动冲', '水流喷射', '冰柱坠击']
                    }
                ]
            }
        ],
        '青梅/劲敌 详细阵容': [
            {
                title: '宝可梦训练家 满充',
                battle_type: '一番战',
                item: '单打，全能秘药*4',
                pokemons: [
                    {
                        name: '盔甲鸟',
                        level: 58,
                        item: '吃剩的东西',
                        ability: '结实',
                        moves: ['隐形岩', '羽栖', '吹飞', '钢翼']
                    },
                    {
                        name: '赤波焰',
                        level: 58,
                        item: '气势披带',
                        ability: '无防守',
                        moves: ['爆炸烈焰', '打雷', '加农水炮', '暴风雪']
                    },
                    {
                        name: 'M艾路雷朵',
                        level: 58,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['圣剑', '意念头锤', '暗袭要害', '刃叶斩']
                    },
                    {
                        name: '幽蛾皇',
                        level: 58,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '暗影球', '蝶舞', '虫群乱舞']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 58,
                        item: '速度果',
                        ability: '龙之威压',
                        moves: ['大地神力', '污泥波', '冰封世界', '龙星群']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 58,
                        item: '先制之爪',
                        ability: '坚硬脑袋',
                        moves: ['裁决之柱', '冲岩', '龙之逆鳞', '千波激荡']
                    }
                ]
            },
            {
                title: '宝可梦训练家 满充（二番战）',
                battle_type: '双打',
                item: '大师秘药*3',
                pokemons: [
                    {
                        name: 'M七夕青鸟',
                        level: 100,
                        item: '弱点保险',
                        ability: '单纯',
                        moves: ['暴风', '妖精之风', '棉花防守', '蝶舞']
                    },
                    {
                        name: 'M艾路雷朵',
                        level: 100,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['意念头锤', '刃叶斩', '圣剑', '广域防守']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 100,
                        item: '速度果',
                        ability: '污毒之躯',
                        moves: ['大地神力', '污泥波', '龙星群', '冰封世界']
                    },
                    {
                        name: '赤波焰',
                        level: 100,
                        item: '突击背心',
                        ability: '无防守',
                        moves: ['爆炸烈焰', '加农水炮', '打雷', '暴风雪']
                    },
                    {
                        name: '幽蛾皇',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '蝶舞', '虫鸣', '奇异之风']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 100,
                        item: '突击背心',
                        ability: '拨沙',
                        moves: ['裁决之柱', '龙之逆鳞', '冲岩', '千波激荡']
                    }
                ]
            }
        ],
        '道馆馆主 详细阵容': [
            {
                title: '道馆馆主 杜娟（岩石）',
                battle_type: '双打',
                item: '神奇秘药*2，盾之秘药*2',
                pokemons: [
                    {
                        name: '暗夜暴君',
                        level: 36,
                        item: '先制之爪',
                        ability: '扬沙',
                        moves: ['裁决之柱', '冲岩', '千波激荡', '高温重压']
                    },
                    {
                        name: '小碎钻',
                        level: 36,
                        item: '进化奇石',
                        ability: '恶作剧之心',
                        moves: ['电磁波', '挑衅', '治愈波动', '岩崩']
                    },
                    {
                        name: '超甲龙犀',
                        level: 36,
                        item: '沙沙岩石',
                        ability: '扬沙',
                        moves: ['十万伏特', '力量宝石', '喷射火焰', '天龙之息']
                    },
                    {
                        name: '化石翼龙',
                        level: 36,
                        item: '气势披带',
                        ability: '坚硬脑袋',
                        moves: ['双刃头锤', '勇鸟猛攻', '闪焰冲锋', '疯狂伏特']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 36,
                        item: '气势披带',
                        ability: '拨沙',
                        moves: ['裁决之柱', '千波激荡', '龙之逆鳞', '冲岩']
                    },
                    {
                        name: 'M蒂安希',
                        level: 36,
                        item: '抗钢果',
                        ability: '魔法反射',
                        moves: ['破灭之光', '钻石风暴', '治愈波动', '大地神力']
                    }
                ]
            },
            {
                title: '道馆馆主 藤树（格斗）',
                battle_type: '双打',
                item: '盾之秘药*2，矛之秘药*2',
                pokemons: [
                    {
                        name: '美洛耶塔（舞步）',
                        level: 48,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['暗影球', '神秘之剑', '破灭之光', '钻石风暴']
                    },
                    {
                        name: '暗黑路卡',
                        level: 48,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['冰冻拳', '瞬影三击', '十字毒刃', '彗星拳']
                    },
                    {
                        name: '勾帕路翁',
                        level: 48,
                        item: '吃剩的东西',
                        ability: '不服输',
                        moves: ['钢铁飞盘', '制裁猛击', '神之怒吼', '金属爆炸']
                    },
                    {
                        name: 'M超梦',
                        level: 48,
                        item: '突击背心',
                        ability: '加速',
                        moves: ['制裁猛击', '精神突进', '暗黑连击', '冰柱坠击']
                    },
                    {
                        name: '凯路迪欧（胜利）',
                        level: 48,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['神秘之剑', '真空波', '根源波动', '冰封世界']
                    },
                    {
                        name: '格兰德翁',
                        level: 48,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['真空波', '终极吸取', '神秘之剑', '大地神力']
                    }
                ]
            },
            {
                title: '道馆馆主 铁旋（电）',
                battle_type: '双打',
                item: '矛之秘药*2，全能秘药*2',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 58,
                        item: '突击背心',
                        ability: '降雨',
                        moves: ['闪电之触', '暴风', '气象球', '冰封世界']
                    },
                    {
                        name: '由克希',
                        level: 58,
                        item: '吃剩的东西',
                        ability: '飘浮',
                        moves: ['精神掌控', '洁净光芒', '闪电之触', '治愈波动']
                    },
                    {
                        name: '玛纳霏',
                        level: 58,
                        item: '气势披带',
                        ability: '坚硬脑袋',
                        moves: ['千万伏特', '波动冲', '意念头锤', '电电加速']
                    },
                    {
                        name: '雷皇',
                        level: 58,
                        item: '抗地果',
                        ability: '适应力',
                        moves: ['闪电之触', '大地神力', '龙星群', '伏特替换']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 58,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['理想闪电', '冰冻伏特', '龙之逆鳞', '千波激荡']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 58,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['怒雷', '精神击破', '神之怒吼', '神威']
                    }
                ]
            },
            {
                title: '道馆馆主 亚莎（火）',
                battle_type: '双打',
                item: '全能秘药*4',
                pokemons: [
                    {
                        name: '凤王',
                        level: 68,
                        item: '气势披带',
                        ability: '日照',
                        moves: ['神圣之火', '死亡之翼', '治愈波动', '迅炎']
                    },
                    {
                        name: '席多蓝恩',
                        level: 68,
                        item: '讲究眼镜',
                        ability: '飘浮',
                        moves: ['熔岩风暴']
                    },
                    {
                        name: '固拉多（原始）',
                        level: 68,
                        item: '抗地果',
                        ability: '终结之地',
                        moves: ['地焰爆裂', '裁决之柱', '万箭毒射', '神圣之力']
                    },
                    {
                        name: '火神蛾',
                        level: 68,
                        item: '气势披带',
                        ability: '日照',
                        moves: ['火神之舞', '虫鸣', '终极吸取', '空中爆破']
                    },
                    {
                        name: '比克提尼',
                        level: 68,
                        item: '焦点镜',
                        ability: '超幸运',
                        moves: ['胜利之炎', '制裁猛击', '精神突进', '迅炎']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 68,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '龙星群', '大地神力', '极寒冷焰']
                    }
                ]
            },
            {
                title: '道馆馆主 千里（一般）',
                battle_type: '双打',
                item: '全能秘药*2，大师秘药*2',
                pokemons: [
                    {
                        name: '美洛耶塔（歌声）',
                        level: 76,
                        item: '突击背心',
                        ability: '单纯',
                        moves: ['神秘之剑', '古老之歌', '破灭之光', '虫鸣']
                    },
                    {
                        name: 'M差不多娃娃',
                        level: 76,
                        item: '心灵香草',
                        ability: '友情防守',
                        moves: ['治愈波动', '看我嘛', '击掌奇袭', '新月舞']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 76,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '拍落', '神威']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 76,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['重磅冲撞', '亿万吨重击', '千波激荡', '吸取拳']
                    },
                    {
                        name: 'M袋龙',
                        level: 76,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['蓄能龙拳', '吸取拳', '逐步击破', '击掌奇袭']
                    },
                    {
                        name: '超神宝可梦',
                        level: 76,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '道馆馆主 娜琪（飞行）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '暗黑洛奇亚',
                        level: 86,
                        item: '抗妖果',
                        ability: '气流掌控',
                        moves: ['空中爆破', '暗黑爆破', '神秘之剑', '神威']
                    },
                    {
                        name: '谢米（天空）',
                        level: 86,
                        item: '弱点保险',
                        ability: '厚脂肪',
                        moves: ['种子闪光', '空中爆破', '治愈波动', '薄雾球']
                    },
                    {
                        name: '洛奇亚',
                        level: 86,
                        item: '突击背心',
                        ability: '避雷针',
                        moves: ['根源波动', '空中爆破', '冰封世界', '洁净光芒']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 86,
                        item: '吃剩的东西',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '顺风', '神威']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 86,
                        item: '蓝天石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '时光咆哮', '大地神力', '裁决之柱']
                    },
                    {
                        name: 'M烈空坐',
                        level: 86,
                        item: '气势披带',
                        ability: '气流掌控',
                        moves: ['画龙点睛', '龙之逆鳞', '胜利之炎', '神速']
                    }
                ]
            },
            {
                title: '道馆馆主 枫与南（超能）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '代欧奇希斯（防御）',
                        level: 96,
                        item: '心灵香草',
                        ability: '纯朴',
                        moves: ['看我嘛', '钢铁之锁', '磁铁轰炸', '治愈波动']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 96,
                        item: '神奇石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '神秘之剑', '异次元洞', '大地神力']
                    },
                    {
                        name: 'M超梦',
                        level: 96,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['制裁猛击', '精神突进', '千波激荡', '亚空裂斩']
                    },
                    {
                        name: '幻梦',
                        level: 96,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['精神击破', '冰封世界', '真实之焰', '破灭之光']
                    },
                    {
                        name: 'M拉帝欧斯',
                        level: 96,
                        item: '心之水滴',
                        ability: '天恩',
                        moves: ['洁净光芒', '龙星群', '空中爆破', '根源波动']
                    },
                    {
                        name: '古代胡地',
                        level: 96,
                        item: '气势披带',
                        ability: '纯朴',
                        moves: ['精神突进', '理想闪电', '制裁猛击', '彗星拳']
                    }
                ]
            },
            {
                title: '道馆馆主 米可利（水）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '洛奇亚',
                        level: 100,
                        item: '抗电果',
                        ability: '降雨',
                        moves: ['大海之力', '空中爆破', '神威', '洁净光芒']
                    },
                    {
                        name: '玛纳霏',
                        level: 100,
                        item: '气势披带',
                        ability: '避雷针',
                        moves: ['亚空裂斩', '水流喷射', '电电加速', '千万伏特']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '帕路奇亚',
                        level: 100,
                        item: '突击背心',
                        ability: '强击',
                        moves: ['亚空裂斩', '龙之逆鳞', '瞬影三击', '万箭毒射']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '水滴石板',
                        ability: '多属性',
                        moves: ['钻石风暴', '冰封世界', '大地神力', '空中爆破']
                    },
                    {
                        name: '凯路迪欧（胜利）',
                        level: 100,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['神秘之剑', '真空波', '根源波动', '冰封世界']
                    }
                ]
            },
            {
                title: '道馆馆主 杜娟（岩石）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '暗夜暴君',
                        level: 100,
                        item: '先制之爪',
                        ability: '扬沙',
                        moves: ['裁决之柱', '隐形岩', '广域防守', '暗影爪']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 100,
                        item: '沙沙岩石',
                        ability: '拨沙',
                        moves: ['神之怒吼', '龙之逆鳞', '裁决之柱', '龙尾']
                    },
                    {
                        name: '雷吉洛克',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '扬沙',
                        moves: ['裁决之柱', '诅咒', '地裂', '神威']
                    },
                    {
                        name: 'M蒂安希',
                        level: 100,
                        item: '抗钢果',
                        ability: '魔法反射',
                        moves: ['破灭之光', '钻石风暴', '大地神力', '治愈波动']
                    },
                    {
                        name: '代拉基翁',
                        level: 100,
                        item: '气势披带',
                        ability: '不服输',
                        moves: ['制裁猛击', '尖石攻击', '冲岩', '千波激荡']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '岩石石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '精神击破', '怒雷']
                    }
                ]
            },
            {
                title: '道馆馆主 藤树（格斗）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '美洛耶塔（舞步）',
                        level: 100,
                        item: '气势披带',
                        ability: '轻装',
                        moves: ['神秘之剑', '破灭之光', '钻石风暴', '奇异之风']
                    },
                    {
                        name: '勾帕路翁',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '不服输',
                        moves: ['隐形岩', '制裁猛击', '神之怒吼', '金属爆炸']
                    },
                    {
                        name: '格兰德翁',
                        level: 100,
                        item: '生命宝珠',
                        ability: '好胜',
                        moves: ['神威', '大地神力', '神秘之剑', '真空波']
                    },
                    {
                        name: '凯路迪欧（胜利）',
                        level: 100,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['神秘之剑', '根源波动', '冰封世界', '真空波']
                    },
                    {
                        name: 'M超梦',
                        level: 100,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['制裁猛击', '精神突进', '理想闪电', '暗黑连击']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '拳头石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '异次元洞', '怒雷', '磁铁轰炸']
                    }
                ]
            },
            {
                title: '道馆馆主 铁旋（电）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷电云（灵兽）',
                        level: 100,
                        item: '突击背心',
                        ability: '降雨',
                        moves: ['闪电之触', '暴风', '气象球', '冰封世界']
                    },
                    {
                        name: '雷皇',
                        level: 100,
                        item: '抗地果',
                        ability: '适应力',
                        moves: ['闪电之触', '大地神力', '龙星群', '神之怒吼']
                    },
                    {
                        name: '捷克罗姆',
                        level: 100,
                        item: '攻击果',
                        ability: '加速',
                        moves: ['理想闪电', '龙之逆鳞', '千波激荡', '电电加速']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 100,
                        item: '异常果',
                        ability: '恶作剧之心',
                        moves: ['神威', '怒雷', '治愈波动', '洁净光芒']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['理想闪电', '龙之逆鳞', '冰冻伏特', '裁决之柱']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '雷电石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '种子闪光', '空中爆破']
                    }
                ]
            },
            {
                title: '道馆馆主 亚莎（火）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '凤王',
                        level: 100,
                        item: '气势披带',
                        ability: '日照',
                        moves: ['死亡之翼', '神圣之火', '治愈波动', '迅炎']
                    },
                    {
                        name: '比克提尼',
                        level: 100,
                        item: '焦点镜',
                        ability: '超幸运',
                        moves: ['胜利之炎', '制裁猛击', '精神突进', '十字毒刃']
                    },
                    {
                        name: '火神蛾',
                        level: 100,
                        item: '抗岩果',
                        ability: '日照',
                        moves: ['火神之舞', '虫鸣', '终极吸取', '空中爆破']
                    },
                    {
                        name: '固拉多（原始）',
                        level: 100,
                        item: '抗地果',
                        ability: '终结之地',
                        moves: ['地焰爆裂', '千波激荡', '裁决之柱', '神之怒吼']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '龙星群', '极寒冷焰', '神威']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '火球石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '怒雷', '冰封世界', '神秘之剑']
                    }
                ]
            },
            {
                title: '道馆馆主 千里（一般）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷吉奇卡斯',
                        level: 100,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['亿万吨重击', '千波激荡', '制裁猛击', '裁决之柱']
                    },
                    {
                        name: 'M差不多娃娃',
                        level: 100,
                        item: '心灵香草',
                        ability: '友情防守',
                        moves: ['新月舞', '治愈波动', '看我嘛', '击掌奇袭']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 100,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['神秘之剑', '古老之歌', '破灭之光', '神威']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 100,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '神之怒吼', '嬉闹']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['制裁光砾', '空中爆破', '异次元洞', '冰封世界']
                    }
                ]
            }
        ],
        '宝可梦联盟 详细阵容': [
            {
                title: '四天王 花月（一周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '胡帕（解放）',
                        level: 100,
                        item: '抗妖果',
                        ability: '恶作剧之心',
                        moves: ['异次元洞', '异次元猛攻', '神之怒吼']
                    },
                    {
                        name: '暗黑洛奇亚',
                        level: 100,
                        item: '先制之爪',
                        ability: '气流掌控',
                        moves: ['暗黑爆破', '空中爆破', '神威', '破灭之光']
                    },
                    {
                        name: 'M阿勃梭鲁',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['斩龙之刃', '十字毒刃', '正义之罚', '精神突进']
                    },
                    {
                        name: '达克莱伊',
                        level: 100,
                        item: '突击背心',
                        ability: '暗黑气场',
                        moves: ['异次元洞', '暗黑洞', '奇异之风', '真实之焰']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 100,
                        item: '贝壳之铃',
                        ability: '疾风之翼',
                        moves: ['暗黑连击', '死亡之翼', '顺风', '神圣之力']
                    },
                    {
                        name: 'M甲贺忍蛙',
                        level: 100,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['暗黑爆破', '污泥波', '飞水手里剑', '冰冻光束']
                    }
                ]
            },
            {
                title: '四天王 芙蓉（一周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '幽蛾皇',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '神奇守护',
                        moves: ['天罗地网', '虫鸣', '奇异之风', '愤怒粉']
                    },
                    {
                        name: '暗夜暴君',
                        level: 100,
                        item: '先制之爪',
                        ability: '强击',
                        moves: ['裁决之柱', '暗影爪', '隐形岩', '千波激荡']
                    },
                    {
                        name: '骑拉帝纳',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['暗影潜袭', '龙星群', '神之怒吼', '神圣之力']
                    },
                    {
                        name: '古代耿鬼',
                        level: 100,
                        item: '突击背心',
                        ability: '纯朴',
                        moves: ['污泥波', '能量球', '怒雷', '祸不单行']
                    },
                    {
                        name: '骑拉帝纳（起源）',
                        level: 100,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['龙星群', '暗影潜袭', '闪电之触', '真实之焰']
                    },
                    {
                        name: '幽魂花',
                        level: 100,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['破灭之光', '祸不单行', '新月舞', '治愈波动']
                    }
                ]
            },
            {
                title: '四天王 波妮（一周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '水晶大岩蛇',
                        level: 100,
                        item: '气势披带',
                        ability: '冰冻皮肤',
                        moves: ['大爆炸']
                    },
                    {
                        name: 'M冰鬼护',
                        level: 100,
                        item: '讲究围巾',
                        ability: '冰冻皮肤',
                        moves: ['爆音波']
                    },
                    {
                        name: '急冻鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '降雪',
                        moves: ['绝对零度', '顺风', '空中爆破', '神威']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 100,
                        item: '突击背心',
                        ability: '龙之威压',
                        moves: ['污泥波', '龙星群', '神之怒吼', '冰封世界']
                    },
                    {
                        name: '酋雷姆',
                        level: 100,
                        item: '弱点保险',
                        ability: '降雪',
                        moves: ['冰封世界', '龙星群', '神圣之力', '大地神力']
                    },
                    {
                        name: '雷吉艾斯',
                        level: 100,
                        item: '先制之爪',
                        ability: '纯朴',
                        moves: ['绝对零度', '神秘之剑', '大地神力', '洁净光芒']
                    }
                ]
            },
            {
                title: '四天王 源治（一周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '捷克罗姆',
                        level: 100,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['理想闪电', '龙之逆鳞', '千波激荡', '十字毒刃']
                    },
                    {
                        name: '莱希拉姆',
                        level: 100,
                        item: '抗地果',
                        ability: '加速',
                        moves: ['真实之焰', '龙星群', '空中爆破', '神之怒吼']
                    },
                    {
                        name: 'M烈空坐',
                        level: 100,
                        item: '气势披带',
                        ability: '气流掌控',
                        moves: ['画龙点睛', '龙之逆鳞', '胜利之炎', '神速']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '弱点保险',
                        ability: '纯朴',
                        moves: ['万箭毒射', '龙星群', '神威', '广域防守']
                    },
                    {
                        name: 'M拉帝亚斯',
                        level: 100,
                        item: '心之水滴',
                        ability: '天恩',
                        moves: ['薄雾球', '龙星群', '新月舞', '治愈波动']
                    },
                    {
                        name: 'M拉帝欧斯',
                        level: 100,
                        item: '心之水滴',
                        ability: '天恩',
                        moves: ['洁净光芒', '龙星群', '钻石风暴', '冰封世界']
                    }
                ]
            },
            {
                title: '冠军 大吾（一周目）',
                battle_type: '群战',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '帝牙卢卡',
                        level: 100,
                        item: '抗斗果',
                        ability: '适应力',
                        moves: ['时光咆哮', '龙星群', '大地神力', '钻石风暴']
                    },
                    {
                        name: '星空妖皇',
                        level: 100,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['薄雾场地', '治愈波动', '破灭之光', '加农光炮']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    },
                    {
                        name: '代欧奇希斯（防御）',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['钢铁之锁', '神威', '看我嘛', '精神突进']
                    },
                    {
                        name: '席多蓝恩',
                        level: 100,
                        item: '讲究眼镜',
                        ability: '飘浮',
                        moves: ['熔岩风暴']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 100,
                        item: '水流卡带',
                        ability: '引火',
                        moves: ['高科技光炮', '虫鸣', '磁铁轰炸', '种子闪光']
                    }
                ]
            },
            {
                title: '四天王 花月（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '波尔凯尼恩',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['真实之焰', '蒸汽爆炸', '隐形岩', '撒菱']
                    },
                    {
                        name: '胡帕（解放）',
                        level: 100,
                        item: '先制之爪',
                        ability: '恶作剧之心',
                        moves: ['沙暴', '异次元洞', '异次元猛攻', '神威']
                    },
                    {
                        name: '古代霸龙皇',
                        level: 100,
                        item: '速度果',
                        ability: '拨沙',
                        moves: ['裁决之柱', '冲岩', '龙之逆鳞', '千波激荡']
                    },
                    {
                        name: '哲尔尼亚斯',
                        level: 100,
                        item: '速度果',
                        ability: '适应力',
                        moves: ['大地神力', '治愈波动', '薄雾球', '冰封世界']
                    },
                    {
                        name: '伊裴尔塔尔',
                        level: 100,
                        item: '突击背心',
                        ability: '疾风之翼',
                        moves: ['死亡之翼', '暗黑连击', '突袭', '急速折返']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '先制果',
                        ability: '纯朴',
                        moves: ['大地神力', '龙星群', '万箭毒射', '神圣之力']
                    }
                ]
            },
            {
                title: '四天王 芙蓉（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '凯路迪欧（胜利）',
                        level: 100,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['神秘之剑', '根源波动', '真空波', '冰封世界']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 100,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['古老之歌', '精神击破', '神秘之剑', '破灭之光']
                    },
                    {
                        name: '酋雷姆',
                        level: 100,
                        item: '先制果',
                        ability: '龙之威压',
                        moves: ['冰封世界', '龙星群', '神威', '神之怒吼']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 100,
                        item: '冰冻卡带',
                        ability: '引火',
                        moves: ['高科技光炮', '磁铁轰炸', '虫鸣', '怒雷']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['冰冻伏特', '理想闪电', '制裁猛击', '千波激荡']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['真实之焰', '极寒冷焰', '大地神力', '龙星群']
                    }
                ]
            },
            {
                title: '四天王 波妮（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '达克莱伊',
                        level: 100,
                        item: '气势披带',
                        ability: '梦魇',
                        moves: ['暗黑洞', '暗影潜袭', '异次元洞', '真实之焰']
                    },
                    {
                        name: '克雷色利亚',
                        level: 100,
                        item: '心灵香草',
                        ability: '魔法反射',
                        moves: ['新月舞', '治愈波动', '看我嘛', '洁净光芒']
                    },
                    {
                        name: '骑拉帝纳',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['暗影潜袭', '广域防守', '神威', '看我嘛']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 100,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['亿万吨重击', '千波激荡', '重磅冲撞', '制裁猛击']
                    },
                    {
                        name: '帕路奇亚',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['亚空裂斩', '龙之逆鳞', '彗星拳', '瞬影三击']
                    },
                    {
                        name: '帝牙卢卡',
                        level: 100,
                        item: '突击背心',
                        ability: '适应力',
                        moves: ['时光咆哮', '龙星群', '钻石风暴', '大地神力']
                    }
                ]
            },
            {
                title: '四天王 源治（二周目）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '代欧奇希斯（防御）',
                        level: 100,
                        item: '凸凸头盔',
                        ability: '纯朴',
                        moves: ['钢铁之锁', '磁铁轰炸', '精神突进', '镜面反射']
                    },
                    {
                        name: '代欧奇希斯（攻击）',
                        level: 100,
                        item: '气势披带',
                        ability: '双连击',
                        moves: ['神速', '精神突进', '拍落', '嬉闹']
                    },
                    {
                        name: '代欧奇希斯（速度）',
                        level: 100,
                        item: '心灵香草',
                        ability: '恶作剧之心',
                        moves: ['精神击破', '闪电之触', '神威', '治愈波动']
                    },
                    {
                        name: '盖欧卡（原始）',
                        level: 100,
                        item: '突击背心',
                        ability: '始源之海',
                        moves: ['根源波动', '空中爆破', '冰封世界', '怒雷']
                    },
                    {
                        name: '固拉多（原始）',
                        level: 100,
                        item: '抗地果',
                        ability: '终结之地',
                        moves: ['裁决之柱', '胜利之炎', '制裁猛击', '神圣之力']
                    },
                    {
                        name: 'M烈空坐',
                        level: 100,
                        item: '气势披带',
                        ability: '气流掌控',
                        moves: ['胜利之炎', '死亡之翼', '龙之逆鳞', '神速']
                    }
                ]
            },
            {
                title: '冠军 大吾（二周目）',
                battle_type: '群战',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '闪电鸟',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['死亡之翼', '理想闪电', '电电加速', '燕返']
                    },
                    {
                        name: '急冻鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '无关天气',
                        moves: ['空中爆破', '冰封世界', '顺风', '神威']
                    },
                    {
                        name: 'M超梦',
                        level: 100,
                        item: '气势披带',
                        ability: '加速',
                        moves: ['瞬影三击', '精神突进', '嬉闹', '暗黑连击']
                    },
                    {
                        name: '幻梦',
                        level: 100,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['破灭之光', '精神击破', '治愈波动', '异次元洞']
                    },
                    {
                        name: '火焰鸟',
                        level: 100,
                        item: '气势披带',
                        ability: '干燥皮肤',
                        moves: ['神圣之火', '死亡之翼', '广域防守', '新月舞']
                    },
                    {
                        name: '梦幻',
                        level: 100,
                        item: '异常果',
                        ability: '变身者',
                        moves: ['变身']
                    }
                ]
            }
        ],
        隐藏五天王: [
            {
                title: '格兰德（地面天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '凹凸山道',
                pokemons: [
                    {
                        name: '土地云（灵兽）',
                        level: 100,
                        item: '沙沙岩石',
                        ability: '扬沙',
                        moves: ['燕返', '千波激荡', '死亡之翼', '神威']
                    },
                    {
                        name: '地皇蜂',
                        level: 100,
                        item: '气势披带',
                        ability: '适应力',
                        moves: ['致命针刺', '双冲钻', '十字毒刃', '双翼']
                    },
                    {
                        name: '哲尔尼亚斯',
                        level: 100,
                        item: '特攻果',
                        ability: '适应力',
                        moves: ['破灭之光', '大地神力', '钻石风暴', '治愈波动']
                    },
                    {
                        name: '基格尔德犬',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['粉尘射击', '尖石攻击', '近身战', '千波激荡']
                    },
                    {
                        name: '雷吉奇卡斯',
                        level: 100,
                        item: '突击背心',
                        ability: '巨神之力',
                        moves: ['千波激荡', '亿万吨重击', '彗星拳', '吸取拳']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '大地石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '神速', '冰封世界', '真实之焰']
                    }
                ]
            },
            {
                title: '波伊森（毒系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '二周目船票',
                pokemons: [
                    {
                        name: '毒刺酋雷姆',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '龙之威压',
                        moves: ['冰封世界', '污泥波', '龙星群', '神之怒吼']
                    },
                    {
                        name: '古代耿鬼',
                        level: 100,
                        item: '火焰宝珠',
                        ability: '受热激升',
                        moves: ['奇异之风', '污泥波', '暗黑爆破', '终极吸取']
                    },
                    {
                        name: '龙卷云（灵兽）',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '疾风之翼',
                        moves: ['神威', '极恶声波', '污泥波', '顺风']
                    },
                    {
                        name: '毒拉比',
                        level: 100,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['破灭之光', '污泥波', '暗影球', '治愈波动']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '速度果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '大地神力', '龙星群', '神圣之力']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '剧毒石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '异次元洞', '冰封世界', '神速']
                    }
                ]
            },
            {
                title: '巴格（虫系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '120号道路',
                pokemons: [
                    {
                        name: '地皇蜂',
                        level: 100,
                        item: '气势披带',
                        ability: '适应力',
                        moves: ['致命针刺', '双冲钻', '十字毒刃', '双翼']
                    },
                    {
                        name: '盖诺赛克特',
                        level: 100,
                        item: '水流卡带',
                        ability: '引火',
                        moves: ['虫鸣', '神威', '磁铁轰炸', '高科技光炮']
                    },
                    {
                        name: 'M沙漠蜻蜓',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['龙星群', '虫鸣', '大地神力', '污泥波']
                    },
                    {
                        name: '火神蛾',
                        level: 100,
                        item: '气势披带',
                        ability: '火焰之躯',
                        moves: ['火神之舞', '空中爆破', '虫鸣', '终极吸取']
                    },
                    {
                        name: '幽蛾皇',
                        level: 100,
                        item: '抗火果',
                        ability: '神奇守护',
                        moves: ['天罗地网', '虫鸣', '暗影球', '破灭之光']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '玉虫石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '新月舞', '根源波动']
                    }
                ]
            },
            {
                title: '格拉斯（草系天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '105号水路',
                pokemons: [
                    {
                        name: '时拉比',
                        level: 100,
                        item: '防尘护目镜',
                        ability: '神奇守护',
                        moves: ['精神击破', '种子闪光', '神威', '新月舞']
                    },
                    {
                        name: 'M妙蛙花',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '太阳之力',
                        moves: ['疯狂植物', '剧毒', '广域防守', '污泥波']
                    },
                    {
                        name: '谢米（天空）',
                        level: 100,
                        item: '气势披带',
                        ability: '天恩',
                        moves: ['空中爆破', '治愈波动', '种子闪光', '顺风']
                    },
                    {
                        name: 'M蜥蜴王',
                        level: 100,
                        item: '气势披带',
                        ability: '技术高手',
                        moves: ['种子机关枪', '飞弹针', '钢刺连射', '岩石爆击']
                    },
                    {
                        name: '格拉斯提',
                        level: 100,
                        item: '抗斗果',
                        ability: '引火',
                        moves: ['真空波', '疯狂植物', '磁铁轰炸', '神秘之剑']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '碧绿石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '大地神力', '钻石风暴', '神威']
                    }
                ]
            },
            {
                title: '菲里（妖精天王）',
                battle_type: '轮盘',
                item: '大师秘药*4',
                location: '123号道路',
                pokemons: [
                    {
                        name: '幻梦',
                        level: 100,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['破灭之光', '精神击破', '神秘之剑', '异次元洞']
                    },
                    {
                        name: '幽魂花',
                        level: 100,
                        item: '速度果',
                        ability: '魔法反射',
                        moves: ['暗影球', '治愈波动', '神威', '破灭之光']
                    },
                    {
                        name: '基拉祈',
                        level: 100,
                        item: '抗火果',
                        ability: '飘浮',
                        moves: ['神圣之力', '新月舞', '大地神力', '时光咆哮']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '妖精石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '神速', '大地神力', '真实之焰']
                    },
                    {
                        name: 'M蒂安希',
                        level: 100,
                        item: '抗钢果',
                        ability: '魔法反射',
                        moves: ['钻石风暴', '大地神力', '治愈波动', '破灭之光']
                    },
                    {
                        name: '美洛耶塔（歌声）',
                        level: 100,
                        item: '生命宝珠',
                        ability: '单纯',
                        moves: ['薄雾球', '神威', '广域防守', '高科技光炮']
                    }
                ]
            }
        ],
        '一周目&二周目 重要战斗': [
            {
                title: '火箭队首领 坂木',
                battle_type: '双打',
                item: '全能秘药*4',
                pokemons: [
                    {
                        name: '超甲龙犀',
                        level: 60,
                        item: '突击背心',
                        ability: '扬沙',
                        moves: ['天龙之息', '岩石巨炮', '大地之力', '十万伏特']
                    },
                    {
                        name: '尼多后',
                        level: 60,
                        item: '吃剩的东西',
                        ability: '污毒之躯',
                        moves: ['广域防守', '污泥波', '大地之力', '隐形岩']
                    },
                    {
                        name: '尼多王',
                        level: 60,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['污泥波', '大地之力', '冰冻光束', '喷射火焰']
                    },
                    {
                        name: '基格尔德犬',
                        level: 60,
                        item: '生命宝珠',
                        ability: '强击',
                        moves: ['嬉闹', '千波激荡', '近身战', '十字毒刃']
                    },
                    {
                        name: 'M大钢蛇',
                        level: 60,
                        item: '先制之爪',
                        ability: '多重鳞片',
                        moves: ['钢铁之躯', '陀螺球', '千波激荡', '尖石攻击']
                    },
                    {
                        name: '地皇蜂',
                        level: 60,
                        item: '气势披带',
                        ability: '适应力',
                        moves: ['致命针刺', '双冲钻', '双翼', '十字毒刃']
                    }
                ]
            },
            {
                title: '八大师 艾岚',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: 'M巨金怪',
                        level: 95,
                        item: '吃剩的东西',
                        ability: '飘浮',
                        moves: ['钢铁飞盘', '科技爆破', '精神利刃', '广域防守']
                    },
                    {
                        name: 'M班基拉斯',
                        level: 95,
                        item: '抗斗果',
                        ability: '强行',
                        moves: ['暗黑连击', '尖石攻击', '十万马力', '高温重压']
                    },
                    {
                        name: '布里卡隆',
                        level: 95,
                        item: '抗火果',
                        ability: '防弹',
                        moves: ['钢铁之躯', '尖刺臂', '钢铁头槌', '尖刺防守']
                    },
                    {
                        name: '玛狃拉',
                        level: 95,
                        item: '气势披带',
                        ability: '强行',
                        moves: ['冰柱坠击', '冰砾', '暗黑连击', '十字剪']
                    },
                    {
                        name: '乌贼王',
                        level: 95,
                        item: '进化奇石',
                        ability: '狙击手',
                        moves: ['精神利刃', '暗黑连击', '十字毒刃', '起死回生']
                    },
                    {
                        name: '超神宝可梦',
                        level: 95,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '培育之人 青绿',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: 'M烈风鸟',
                        level: 100,
                        item: '讲究围巾',
                        ability: '无防守',
                        moves: ['暴风']
                    },
                    {
                        name: 'M化石翼龙',
                        level: 100,
                        item: '气势披带',
                        ability: '坚硬脑袋',
                        moves: ['勇鸟猛攻', '双刃头锤', '冲岩', '隐形岩']
                    },
                    {
                        name: 'M暴鲤龙',
                        level: 100,
                        item: '突击背心',
                        ability: '强壮之颚',
                        moves: ['咬碎', '强力腮咬', '冰冻牙', '雷电牙']
                    },
                    {
                        name: 'M班基拉斯',
                        level: 100,
                        item: '抗斗果',
                        ability: '强行',
                        moves: ['暗黑连击', '尖石攻击', '十万马力', '高温重压']
                    },
                    {
                        name: '古代胡地',
                        level: 100,
                        item: '气势披带',
                        ability: '变幻自如',
                        moves: ['精神突进', '理想闪电', '制裁猛击', '彗星拳']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '宝可梦训练家 希嘉娜',
                battle_type: '一番战',
                item: '双打，大师秘药*4',
                pokemons: [
                    {
                        name: 'M拉帝亚斯',
                        level: 100,
                        item: '心之水滴',
                        ability: '天恩',
                        moves: ['薄雾球', '龙星群', '治愈波动', '神威']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '先制果',
                        ability: '纯朴',
                        moves: ['万箭毒射', '大地神力', '龙星群', '神之怒吼']
                    },
                    {
                        name: '毒刺酋雷姆',
                        level: 100,
                        item: '速度果',
                        ability: '龙之威压',
                        moves: ['冰封世界', '龙星群', '神秘之剑', '污泥波']
                    },
                    {
                        name: '捷克罗姆',
                        level: 100,
                        item: '生命宝珠',
                        ability: '加速',
                        moves: ['理想闪电', '龙之逆鳞', '暗影爪', '千波激荡']
                    },
                    {
                        name: '莱希拉姆',
                        level: 100,
                        item: '抗岩果',
                        ability: '加速',
                        moves: ['真实之焰', '龙星群', '大地神力', '神圣之力']
                    },
                    {
                        name: 'M拉帝欧斯',
                        level: 100,
                        item: '心之水滴',
                        ability: '天恩',
                        moves: ['洁净光芒', '龙星群', '空中爆破', '种子闪光']
                    }
                ]
            },
            {
                title: '琉璃市居民 米可利（二周目-天空之柱）',
                battle_type: '群战',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '帕路奇亚',
                        level: 100,
                        item: '速度果',
                        ability: '强击',
                        moves: ['瞬影三击', '龙之逆鳞', '亚空裂斩', '千波激荡']
                    },
                    {
                        name: '亚克诺姆',
                        level: 100,
                        item: '生命宝珠',
                        ability: '魔法防守',
                        moves: ['波动冲', '精神突进', '水流喷射', '嬉闹']
                    },
                    {
                        name: '盖欧卡（原始）',
                        level: 100,
                        item: '弱点保险',
                        ability: '始源之海',
                        moves: ['根源波动', '空中爆破', '冷冻干燥', '守住']
                    },
                    {
                        name: '洛奇亚',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '避雷针',
                        moves: ['空中爆破', '神威', '广域防守', '根源波动']
                    },
                    {
                        name: '凯路迪欧（胜利）',
                        level: 100,
                        item: '突击背心',
                        ability: '好胜',
                        moves: ['神秘之剑', '加农水炮', '冰封世界', '真空波']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '火箭队首领 坂木',
                battle_type: '双打',
                item: '大师秘药*2，传奇圣药*2',
                pokemons: [
                    {
                        name: '尼多王',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['污泥波', '大地神力', '喷射火焰', '冰冻光束']
                    },
                    {
                        name: '尼多后',
                        level: 100,
                        item: '沙沙岩石',
                        ability: '扬沙',
                        moves: ['广域防守', '万箭毒射', '隐形岩', '大地之力']
                    },
                    {
                        name: '基格尔德犬',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['千波激荡', '万箭毒射', '裁决之柱', '瞬影三击']
                    },
                    {
                        name: 'M大钢蛇',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '多重鳞片',
                        moves: ['钢铁之躯', '陀螺球', '广域防守', '千波激荡']
                    },
                    {
                        name: 'M超梦',
                        level: 100,
                        item: '突击背心',
                        ability: '加速',
                        moves: ['精神突进', '制裁猛击', '暗影爪', '亚空裂斩']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '传承者 希嘉娜（二番战）',
                battle_type: '三打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '帕路奇亚',
                        level: 100,
                        item: '速度果',
                        ability: '强击',
                        moves: ['亚空裂斩', '龙之逆鳞', '瞬影三击', '暗影爪']
                    },
                    {
                        name: '骑拉帝纳',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '无关天气',
                        moves: ['暗影潜袭', '广域防守', '神之怒吼', '神威']
                    },
                    {
                        name: '帝牙卢卡',
                        level: 100,
                        item: '突击背心',
                        ability: '适应力',
                        moves: ['时光咆哮', '钻石风暴', '大地神力', '龙星群']
                    },
                    {
                        name: '酋焰白雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['大地神力', '真实之焰', '极寒冷焰', '龙星群']
                    },
                    {
                        name: '暗黑酋雷姆',
                        level: 100,
                        item: '强力香草',
                        ability: '双连击',
                        moves: ['理想闪电', '冰冻伏特', '瞬影三击', '神之怒吼']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '龙之石板',
                        ability: '多属性',
                        moves: ['制裁光砾', '冰封世界', '万箭毒射', '破灭之光']
                    }
                ]
            }
        ],
        '新增的传奇挑战！': [
            {
                title: '神奥冠军 希罗娜（水静市--商场右边小屋）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '美纳斯',
                        level: 100,
                        item: '进化奇石',
                        ability: '好胜',
                        moves: ['镜面反射', '盘蜷', '热水', '月亮之力']
                    },
                    {
                        name: '波克基斯',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['看我嘛', '哈欠', '空气斩', '波导弹']
                    },
                    {
                        name: '罗丝雷朵',
                        level: 100,
                        item: '弱点保险',
                        ability: '好胜',
                        moves: ['气象球', '污泥波', '终极吸取', '剧毒']
                    },
                    {
                        name: '冰伊布',
                        level: 100,
                        item: '气势披带',
                        ability: '单纯',
                        moves: ['暴风雪', '冥想', '极光束', '大地之力']
                    },
                    {
                        name: 'M路卡利欧',
                        level: 100,
                        item: '气势披带',
                        ability: '洞察',
                        moves: ['彗星拳', '升龙烈破', '神速', '十万马力']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '进化之人 碧蓝（某个幻影小岛）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '皮可西',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '纯朴',
                        moves: ['看我嘛', '月亮之力', '治愈波动', '隐形岩']
                    },
                    {
                        name: 'M耿鬼',
                        level: 100,
                        item: '气势披带',
                        ability: '好胜',
                        moves: ['污泥波', '恶之波动', '终极吸取', '奇异之风']
                    },
                    {
                        name: '闪电鸟',
                        level: 100,
                        item: '强力香草',
                        ability: '适应力',
                        moves: ['理想闪电', '电电加速', '死亡之翼', '看穿']
                    },
                    {
                        name: '急冻鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '无关天气',
                        moves: ['绝对零度', '空中爆破', '力量宝石', '顺风']
                    },
                    {
                        name: '火焰鸟',
                        level: 100,
                        item: '抗岩果',
                        ability: '干燥皮肤',
                        moves: ['灭世之火', '死亡之翼', '羽栖', '迅炎']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '关都冠军 阿渡（石之洞窟深处）',
                battle_type: '双打',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '双斧战龙',
                        level: 100,
                        item: '气势披带',
                        ability: '强击',
                        moves: ['钢铁头槌', '断头钳', '双龙切', '剑舞']
                    },
                    {
                        name: 'M沙漠蜻蜓',
                        level: 100,
                        item: '生命宝珠',
                        ability: '强行',
                        moves: ['空气斩', '大地之力', '虫鸣', '暴狂龙卷']
                    },
                    {
                        name: '赤波焰',
                        level: 100,
                        item: '抗冰果',
                        ability: '无防守',
                        moves: ['打雷', '暴风雪', '大字爆炎', '加农水炮']
                    },
                    {
                        name: 'M暴飞龙',
                        level: 100,
                        item: '气势披带',
                        ability: '飞行皮肤',
                        moves: ['巨声', '热风', '水炮', '暴狂龙卷']
                    },
                    {
                        name: 'M烈咬陆鲨',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['突飞猛扑', '龙神俯冲', '火焰牙', '尖石攻击']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            },
            {
                title: '战斗之人 赤红（流星瀑布深处）',
                battle_type: '双打',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '卡比兽',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '胆量',
                        moves: ['击掌奇袭', '千波激荡', '泰山压顶', '哈欠']
                    },
                    {
                        name: '古代耿鬼',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['神威', '祸不单行', '污泥波', '异次元洞']
                    },
                    {
                        name: 'M妙蛙花',
                        level: 100,
                        item: '抗冰果',
                        ability: '太阳之力',
                        moves: ['种子闪光', '污泥波', '生长', '万箭毒射']
                    },
                    {
                        name: 'M喷火龙',
                        level: 100,
                        item: '气势披带',
                        ability: '终结之地',
                        moves: ['火山喷发', '阳光烈焰', '空中爆破', '龙星群']
                    },
                    {
                        name: 'M水箭龟',
                        level: 100,
                        item: '吃剩的东西',
                        ability: '超级发射器',
                        moves: ['治愈波动', '根源波动', '加农光炮', '波导弹']
                    },
                    {
                        name: '超神宝可梦',
                        level: 100,
                        item: '',
                        ability: '',
                        moves: ['未知', '未知', '未知', '未知']
                    }
                ]
            }
        ],
        '最终挑战！游戏作者（茵郁市右下角树屋）': [
            {
                title: '游戏作者 阿布（一周目）',
                battle_type: '群战',
                item: '大师秘药*4',
                pokemons: [
                    {
                        name: '雷皇',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['怒雷', '龙星群', '大地神力', '冰封世界']
                    },
                    {
                        name: '炎帝',
                        level: 100,
                        item: '突击背心',
                        ability: '无关天气',
                        moves: ['灭世之火', '千波激荡', '龙之逆鳞', '迅炎']
                    },
                    {
                        name: '洛奇亚',
                        level: 100,
                        item: '特攻果',
                        ability: '避雷针',
                        moves: ['空中爆破', '广域防守', '根源波动', '顺风']
                    },
                    {
                        name: '凤王',
                        level: 100,
                        item: '气势披带',
                        ability: '魔法防守',
                        moves: ['神圣之火', '燕返', '死亡之翼', '治愈波动']
                    },
                    {
                        name: '水君',
                        level: 100,
                        item: '抗冰果',
                        ability: '适应力',
                        moves: ['蒸汽爆炸', '冷冻干燥', '薄雾场地', '龙星群']
                    },
                    {
                        name: '时拉比',
                        level: 100,
                        item: '异常果',
                        ability: '神奇守护',
                        moves: ['种子闪光', '洁净光芒', '破灭之光', '神秘之剑']
                    }
                ]
            },
            {
                title: '游戏作者 阿布（二周目）',
                battle_type: '群战',
                item: '传奇圣药*4',
                pokemons: [
                    {
                        name: '星空妖皇',
                        level: 100,
                        item: '抗地果',
                        ability: '魔法反射',
                        moves: ['暗黑洞', '钻石风暴']
                    },
                    {
                        name: '暗黑洛奇亚',
                        level: 100,
                        item: '抗妖果',
                        ability: '气流掌控',
                        moves: ['看我嘛', '空中爆破']
                    },
                    {
                        name: '阿尔宙斯',
                        level: 100,
                        item: '异常果',
                        ability: '纯朴',
                        moves: ['制裁光砾', '千波激荡', '亚空裂斩', '异次元洞']
                    },
                    {
                        name: '焰白酋雷姆',
                        level: 100,
                        item: '抗地果',
                        ability: '双连击',
                        moves: ['熔岩风暴', '龙星群', '种子闪光', '钻石风暴']
                    },
                    {
                        name: '幽魂花',
                        level: 100,
                        item: '心灵香草',
                        ability: '友情防守',
                        moves: ['反射壁', '光墙', '薄雾场地', '治愈波动']
                    },
                    {
                        name: '基格尔德',
                        level: 100,
                        item: '黑色污泥',
                        ability: '纯朴',
                        moves: ['龙星群', '万箭毒射', '大地神力', '根源波动']
                    }
                ]
            }
        ]
    };
};
