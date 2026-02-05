<template>
    <div class="group-detail">
        <Top :title="groupName" router="/trainer" color="#a2cfff" />

        <!-- 视图控制工具栏 -->
        <div class="toolbar">
            <div class="view-controls">
                <button @click="toggleAllBattles" class="control-btn">
                    {{ allExpanded ? '全部折叠' : '全部展开' }}
                </button>
            </div>
        </div>

        <div v-if="battles.length" class="battles-container">
            <div
                class="battle-card"
                v-for="(battle, index) in battles"
                :key="index"
                :ref="el => (battleRefs[index] = el as HTMLElement)"
            >
                <div class="battle-header" @click="toggleBattle(index)">
                    <div class="battle-content">
                        <div class="battle-title">{{ battle.title }}</div>
                        <div class="battle-meta">
                            <span class="battle-type" @click.stop="handlePropInfo(battle.item)">{{
                                battle.item
                            }}</span>
                            <span
                                class="battle-type"
                                @click.stop="handleMoveInfo(battle.battle_type)"
                                >{{ battle.battle_type }}</span
                            >
                            <span class="pokemon-count">{{ battle.pokemons.length }}只</span>
                        </div>
                    </div>
                    <div class="expand-icon" :class="{ expanded: expandedBattles.has(index) }">
                        ▼
                    </div>
                </div>

                <div
                    class="pokemon-list"
                    v-show="expandedBattles.has(index)"
                    :class="{ collapsed: !expandedBattles.has(index) }"
                >
                    <div
                        class="pokemon-item"
                        v-for="(p, i) in battle.pokemons"
                        :key="i"
                        @click="handlePokemonInfo(p, index, i)"
                    >
                        <!-- 头像 + 基础信息 -->
                        <div class="poke-header">
                            <div class="pokemon-avatar">
                                <img
                                    :src="getImageSrc(p.name)"
                                    :alt="p.name"
                                    class="pokemon-image"
                                />
                            </div>
                            <div class="poke-info">
                                <div class="poke-name-row">
                                    <span class="poke-level">Lv.{{ p.level }}</span>
                                    <span class="poke-name">{{ processPokemonName(p.name) }}</span>
                                </div>
                                <div class="poke-details">
                                    <span class="poke-ability">{{ p.ability }}</span>
                                    <span
                                        v-if="p.item"
                                        class="poke-item"
                                        @click.stop="handlePropInfo(p.item)"
                                        >{{ p.item }}</span
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- 技能横向排列 -->
                        <div class="poke-moves">
                            <span
                                class="move"
                                v-for="(m, j) in p.moves"
                                :key="j"
                                @click.stop="handleMoveInfo(m)"
                                >{{ m }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="empty-msg">
            <div class="empty-icon">📋</div>
            <div class="empty-text">暂无训练家数据</div>
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
    // 切割字符串，去掉 *数字 后缀
    const cleanPropName = propName.replace(/\*\d+$/, '');
    pokemonStore.Prop = pokemonStore.getPropByName(cleanPropName);
    $router.push('/prop/prop_info');
};
</script>

<style scoped>
.group-detail {
    background: #f9fbfd;
    min-height: 100vh;
    margin: 0 auto;
}

/* 工具栏样式 */
.toolbar {
    display: flex;
    justify-content: center;
    padding: 16px;
    background: white;
    border-bottom: 1px solid #e6f0ff;
    position: sticky;
    top: 0;
    z-index: 10;
}

.view-controls {
    display: flex;
    gap: 8px;
    align-items: center;
}

.control-btn {
    padding: 12px 24px;
    background: #f0f7ff;
    border: 1px solid #d0e4ff;
    border-radius: 25px;
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    font-weight: 500;
}

/* 战斗容器 */
.battles-container {
    padding: 0 16px 20px;
}

.battle-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 0;
    margin: 12px 0;
    border: 1px solid #dbe9ff;
    box-shadow: 0 3px 8px rgba(64, 158, 255, 0.06);
    overflow: hidden;
    transition: all 0.3s ease;
}

.battle-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #f8fbff 0%, #e6f4ff 100%);
    border-bottom: 1px solid #e6f0ff;
}

.battle-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.battle-title {
    font-weight: 700;
    color: #1a2b4d;
    font-size: 16px;
    letter-spacing: 0.3px;
}

.battle-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.pokemon-count {
    font-size: 12px;
    color: #909399;
    background: #f0f2f5;
    padding: 2px 8px;
    border-radius: 10px;
}

.expand-icon {
    font-size: 12px;
    color: #409eff;
    transition: transform 0.3s ease;
    user-select: none;
}

.expand-icon.expanded {
    transform: rotate(180deg);
}

.battle-type {
    color: #409eff;
    font-weight: 600;
    font-size: 13px;
    background: rgba(64, 158, 255, 0.1);
    padding: 3px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.pokemon-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    background: #fafbfc;
    transition: all 0.3s ease;
    max-height: 2000px;
    overflow: hidden;
}

.pokemon-list.collapsed {
    max-height: 0;
    padding: 0 18px;
    opacity: 0;
}

.pokemon-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 12px;
    background: white;
    border-radius: 6px;
    border-left: 3px solid #409eff;
    margin-bottom: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* 头像 + 文字信息 */
.poke-header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.pokemon-avatar {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e6f4ff, #f0f9ff);
    border-radius: 50%;
    border: 1px solid #cce6ff;
}

.pokemon-image {
    width: 52px;
    height: 52px;
    object-fit: contain;
    background: white;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.poke-info {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #2c3e50;
    line-height: 1.4;
}

.poke-name-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
}

.poke-level {
    font-size: 15px;
    color: #3366cc;
    font-weight: 700;
    background: #e6f0ff;
    padding: 2px 8px;
    border-radius: 6px;
    min-width: 50px;
    text-align: center;
}

.poke-name {
    font-size: 16px;
    font-weight: 700;
    color: #1a2b4d;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.poke-details {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.poke-ability {
    font-size: 13px;
    color: #5a6b82;
    font-weight: 500;
    background: #f0f2f5;
    padding: 2px 6px;
    border-radius: 4px;
}

.poke-item {
    display: inline-block;
    font-size: 12px;
    color: white;
    background: linear-gradient(90deg, #53b1ff, #2d8cf0);
    padding: 3px 10px;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* 技能整行 - 移动端优化 */
.poke-moves {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
    margin-top: 8px;
}

.move {
    background: #f0f7ff;
    color: #2d8cf0;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #d0e4ff;
    white-space: nowrap;
    cursor: pointer;
    font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
    flex: 0 0 auto;
    min-width: fit-content;
    transition: all 0.2s ease;
}

.move:hover {
    background: #e6f4ff;
    border-color: #409eff;
    transform: translateY(-1px);
}

/* 超小屏优化 */
@media (max-width: 360px) {
    .group-detail {
        padding: 12px 8px 70px;
    }

    .pokemon-avatar {
        width: 52px;
        height: 52px;
    }

    .pokemon-image {
        width: 44px;
        height: 44px;
    }

    .poke-name {
        font-size: 15px;
    }

    .move {
        font-size: 11px;
        padding: 5px 8px;
        border-radius: 6px;
        margin-bottom: 4px;
    }

    .poke-moves {
        gap: 6px;
    }

    .battle-card {
        padding: 16px;
    }
}

/* 空状态样式 */
.empty-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    background: white;
    margin: 20px;
    border-radius: 14px;
    border: 1px solid #e6f0ff;
}

.empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.6;
}

.empty-text {
    font-size: 16px;
    color: #606266;
    margin-bottom: 20px;
}

.clear-btn {
    padding: 10px 24px;
    background: #409eff;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.clear-btn:hover {
    background: #337ecc;
    transform: translateY(-1px);
}

/* 响应式优化 */
@media (max-width: 480px) {
    .toolbar {
        padding: 12px;
    }

    .control-btn {
        padding: 10px 20px;
        font-size: 13px;
    }

    .poke-moves {
        gap: 6px;
    }

    .move {
        font-size: 11px;
        padding: 5px 8px;
        border-radius: 6px;
    }
}

/* 中等屏幕优化 */
@media (max-width: 768px) {
    .poke-moves {
        gap: 7px;
    }

    .move {
        font-size: 12px;
        padding: 6px 9px;
    }
}
</style>
