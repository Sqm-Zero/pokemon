<template>
    <div class="group-detail">
        <div class="sticky-header">
            <Top :title="groupName" router="/trainer" color="transparent" />
            <div class="toolbar">
                <button @click="toggleAllBattles" class="glass-btn">
                    <el-icon><Operation /></el-icon>
                    {{ allExpanded ? '一键折叠' : '展开全部' }}
                </button>
            </div>
        </div>

        <div v-if="battles.length" class="battles-container">
            <div
                v-for="(battle, index) in battles"
                :key="index"
                class="battle-card"
                :class="{ 'is-expanded': expandedBattles.has(index) }"
            >
                <div class="battle-header" @click="toggleBattle(index)">
                    <div class="battle-info">
                        <h3 class="battle-title">{{ battle.title }}</h3>
                        <div class="battle-tags">
                            <span class="tag item" @click.stop="handlePropInfo(battle.item)">{{
                                battle.item
                            }}</span>
                            <span class="tag type">{{ battle.battle_type }}</span>
                            <span class="tag count">{{ battle.pokemons.length }}P</span>
                        </div>
                    </div>
                    <div class="chevron">
                        <el-icon><ArrowDown /></el-icon>
                    </div>
                </div>

                <transition name="expand">
                    <div class="pokemon-list" v-if="expandedBattles.has(index)">
                        <div
                            v-for="(p, i) in battle.pokemons"
                            :key="i"
                            class="pokemon-row"
                            @click="handlePokemonInfo(p, index, i)"
                        >
                            <div class="poke-avatar-wrapper">
                                <img :src="getImageSrc(p.name)" class="poke-img" />
                                <span class="lv-badge">{{ p.level }}</span>
                            </div>

                            <div class="poke-main-info">
                                <div class="name-line">
                                    <span class="name">{{ processPokemonName(p.name) }}</span>
                                    <span class="ability">{{ p.ability }}</span>
                                </div>
                                <div
                                    class="item-line"
                                    v-if="p.item"
                                    @click.stop="handlePropInfo(p.item)"
                                >
                                    <el-icon><Present /></el-icon> {{ p.item }}
                                </div>
                                <div class="moves-grid">
                                    <span
                                        v-for="(m, j) in p.moves"
                                        :key="j"
                                        class="move-chip"
                                        @click.stop="handleMoveInfo(m)"
                                    >
                                        {{ m.replace(/\*\d+$/, '') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, computed, nextTick } from 'vue';
import { reqNPC, reqYHNPC } from '@/apis/npc';
import { usePokemonStore } from '@/store/modules/pokemon';

const route = useRoute();
const $router = useRouter();
const pokemonStore = usePokemonStore();
const groupName = decodeURIComponent(route.params.groupName as string);
const version = computed<'normal' | 'hardcore'>(() => {
    return route.query.version === 'hardcore' ? 'hardcore' : 'normal';
});

const battles = ref<any[]>([]);
const expandedBattles = ref(new Set<number>());
const battleRefs = ref<HTMLElement[]>([]);
const scrollPosition = ref(0);
const lastExpandedState = ref(new Set<number>());
const clickedPokemonIndex = ref<{ battleIndex: number; pokemonIndex: number } | null>(null);

// 计算是否全部展开
const allExpanded = computed(() => {
    return (
        battles.value.length > 0 &&
        battles.value.every((_, index) => expandedBattles.value.has(index))
    );
});

onMounted(() => {
    const allData: any = version.value === 'hardcore' ? reqYHNPC() : reqNPC();
    battles.value = allData[groupName] || [];

    // 恢复展开状态或默认展开所有战斗
    if (lastExpandedState.value.size > 0) {
        expandedBattles.value = new Set(lastExpandedState.value);
    } else if (battles.value.length > 0) {
        // 默认展开所有战斗
        battles.value.forEach((_, index) => {
            expandedBattles.value.add(index);
        });
    }

    // 恢复滚动位置
    if (scrollPosition.value > 0) {
        nextTick(() => {
            // 等待DOM更新完成后再滚动
            setTimeout(() => {
                // 如果有记录的点击精灵位置，尝试滚动到该精灵附近
                if (clickedPokemonIndex.value) {
                    const { battleIndex } = clickedPokemonIndex.value;
                    const battleElement = battleRefs.value[battleIndex];
                    if (battleElement) {
                        battleElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        return;
                    }
                }

                // 否则使用保存的滚动位置
                window.scrollTo({
                    top: scrollPosition.value,
                    behavior: 'smooth'
                });
            }, 200);
        });
    }
});

// 切换战斗展开/折叠状态
const toggleBattle = (index: number) => {
    if (expandedBattles.value.has(index)) {
        expandedBattles.value.delete(index);
    } else {
        expandedBattles.value.add(index);
    }
};

// 切换全部展开/折叠
const toggleAllBattles = () => {
    if (allExpanded.value) {
        // 全部折叠
        expandedBattles.value.clear();
    } else {
        // 全部展开
        battles.value.forEach((_, index) => {
            expandedBattles.value.add(index);
        });
    }
};

// 特殊形态映射
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
    凯路迪欧: ['觉醒'],
    毒卷云: ['灵兽', ''],
    雷电云: ['灵兽', ''],
    土地云: ['灵兽', ''],
    超能妙喵: ['雌性'],
    花叶蒂: ['', '', '', '', '永恒之花'],
    皮卡丘: ['摇滚', '贵妇', '流行偶像', '博士', '面罩摔角手', '赤皮'],
    胡帕: ['解放'],
    固拉多: ['原始'],
    盖欧卡: ['原始']
};
const processPokemonName = (name: string): string => {
    // 首先检查是否是特殊形态的宝可梦
    const baseName = name.replace(/\s+\d+$/, ''); // 去掉末尾的数字
    if (specialForms[baseName]) {
        const match = name.match(/(\d+)$/); // 提取末尾的数字
        if (match) {
            const formIndex = parseInt(match[1]) - 1; // 转为0-based索引
            if (formIndex >= 0 && formIndex < specialForms[baseName].length) {
                return `${baseName}（${specialForms[baseName][formIndex]}）`;
            }
        }
    }
    // 普通情况：去掉数字并添加"超级"前缀
    if (/\d/.test(name)) {
        return '超级' + name.replace(/\d/g, '').trim();
    }
    return name;
};

// 新增：将“皮卡丘（贵妇）”还原为“皮卡丘 1”
const restorePokemonRawName = (displayName: string): string => {
    // 匹配“xxx（形态）”
    const match = displayName.match(/^(.+?)（(.+?)）$/);
    if (match) {
        const baseName = match[1];
        const form = match[2];
        if (specialForms[baseName]) {
            const formsList = specialForms[baseName];
            for (let i = 0; i < formsList.length; i++) {
                const candidate = formsList[i];
                // 模糊匹配：互相包含即视为匹配
                if (form.includes(candidate) || candidate.includes(form)) {
                    return baseName + ' ' + (i + 1);
                }
            }
        }
    }
    // 匹配“超级xxx”
    if (displayName.startsWith('M') && displayName !== 'M甲贺忍蛙') {
        return displayName.replace('M', '') + ' 1';
    }
    return displayName;
};

// 获取精灵编号
const getPokemonNumberByName = (name: string) => {
    return pokemonStore.getPokemonIdByName(name);
};
// 获取精灵图片src
const getImageSrc = (name: string) => {
    const rawName = restorePokemonRawName(name);
    console.log(rawName);
    const num = String(Number(getPokemonNumberByName(rawName)));
    return new URL(`/src/assets/images/pokemonList_images/${num}.png`, import.meta.url).href;
};

// 跳转到精灵详情
const handlePokemonInfo = (pokemon: any, battleIndex: number, pokemonIndex: number) => {
    // 保存当前滚动位置和展开状态
    scrollPosition.value = window.scrollY;
    lastExpandedState.value = new Set(expandedBattles.value);
    clickedPokemonIndex.value = { battleIndex, pokemonIndex };
    const rawName = restorePokemonRawName(processPokemonName(pokemon.name));
    const num = String(Number(getPokemonNumberByName(rawName)));
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(num);
    $router.push('/pokemon/info');
};

// 跳转到技能详情
const handleMoveInfo = (moveName: string) => {
    // 切割字符串，去掉 *数字 后缀
    const cleanMoveName = moveName.replace(/\*\d+$/, '');
    pokemonStore.Move = pokemonStore.getMoveByName(cleanMoveName);
    $router.push('/move/move_info');
};

// 跳转到道具详情
const handlePropInfo = (propName: string) => {
    // 处理多种格式的 item 字段
    // 格式1: "单打，全能秘药*3" -> 取 "全能秘药*3"
    // 格式2: "全能秘药*2，大师秘药*2" -> 取 "全能秘药*2"
    const battleTypes = ['单打', '双打', '群战', '三打', '一番战'];
    let cleanItemStr = propName;

    // 如果以战斗类型开头，先移除战斗类型部分
    for (const type of battleTypes) {
        if (cleanItemStr.startsWith(type + '，')) {
            cleanItemStr = cleanItemStr.replace(type + '，', '');
            break;
        }
    }

    // 然后按中文或英文逗号分割，取第一个道具
    let singlePropName = cleanItemStr.split(/[,，]/)[0].trim();

    // 去掉 *数字 后缀
    const cleanPropName = singlePropName.replace(/\*\d+$/, '');

    pokemonStore.Prop = pokemonStore.getPropByName(cleanPropName);
    $router.push('/prop/prop_info');
};
</script>

<style scoped lang="scss">
.group-detail {
    background: #f4f7fa;
    min-height: 100vh;
}

.sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.toolbar {
    display: flex;
    justify-content: center;
    padding: 8px 16px 12px;

    .glass-btn {
        border: none;
        background: #409eff;
        color: white;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
    }
}

.battles-container {
    padding: 12px;
}

.battle-card {
    background: #fff;
    border-radius: 20px;
    margin-bottom: 16px;
    overflow: hidden;
    border: 1px solid #edf2f7;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

    &.is-expanded {
        border-color: #d1e9ff;
    }
}

.battle-header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #ffffff, #f8faff);

    .battle-title {
        margin: 0 0 8px 0;
        font-size: 16px;
        color: #1a202c;
        font-weight: 700;
    }

    .battle-tags {
        display: flex;
        gap: 6px;
        .tag {
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 6px;
            &.item {
                background: #fff7ed;
                color: #ea580c;
                border: 1px solid #ffedd5;
            }
            &.type {
                background: #f0fdf4;
                color: #16a34a;
                border: 1px solid #dcfce7;
            }
            &.count {
                background: #f1f5f9;
                color: #475569;
            }
        }
    }
}

.chevron {
    transition: transform 0.3s;
    color: #a0aec0;
}
.is-expanded .chevron {
    transform: rotate(180deg);
    color: #409eff;
}

.pokemon-list {
    background: #f8fafc;
    padding: 8px;
    border-top: 1px dashed #e2e8f0;
}

.pokemon-row {
    background: #fff;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 8px;
    display: flex;
    gap: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

    .poke-avatar-wrapper {
        position: relative;
        .poke-img {
            width: 64px;
            height: 64px;
            object-fit: contain;
        }
        .lv-badge {
            position: absolute;
            bottom: -2px;
            right: -2px;
            background: #475569;
            color: #fff;
            font-size: 10px;
            padding: 1px 4px;
            border-radius: 4px;
        }
    }

    .poke-main-info {
        flex: 1;
        .name-line {
            display: flex;
            align-items: baseline;
            gap: 8px;
            margin-bottom: 4px;
            .name {
                font-weight: 700;
                color: #2d3748;
            }
            .ability {
                font-size: 12px;
                color: #718096;
            }
        }
        .item-line {
            font-size: 12px;
            color: #4a5568;
            display: flex;
            align-items: center;
            gap: 4px;
            margin-bottom: 8px;
            cursor: pointer;
            &:hover {
                color: #409eff;
            }
        }
    }
}

.moves-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    .move-chip {
        background: #f1f5f9;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 11px;
        color: #475569;
        text-align: center;
        border: 1px solid #e2e8f0;
        &:hover {
            border-color: #409eff;
            background: #fff;
        }
    }
}

/* 展开动画 */
.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease-in-out;
    max-height: 1000px;
    overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
