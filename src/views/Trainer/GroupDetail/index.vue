<template>
    <div class="group-detail">
        <Top :title="groupName" router="/trainer" color="#a2cfff" />

        <div v-if="battles.length" class="battle-card" v-for="(battle, index) in battles" :key="index">
            <div class="battle-header">
                <div class="battle-title">{{ battle.title }}</div>
                <div class="battle-type">{{ battle.battle_type }}</div>
            </div>

            <div class="pokemon-list">
                <div class="pokemon-card" v-for="(p, i) in battle.pokemons" :key="i" @click="handlePokemonInfo(p)">
                    <!-- 头像 + 基础信息 -->
                    <div class="poke-header">
                        <div class="pokemon-avatar">
                            <img :src="getImageSrc(p.name)" :alt="p.name" class="pokemon-image" />
                        </div>
                        <div class="poke-info">
                            <div class="poke-name-row">
                                <span class="poke-level">Lv.{{ p.level }}</span>
                                <span class="poke-name">{{ processPokemonName(p.name) }}</span>
                            </div>
                            <div class="poke-ability">特性：{{ p.ability }}</div>
                            <span v-if="p.item" class="poke-item">@ {{ p.item }}</span>
                        </div>
                    </div>

                    <!-- 技能独占一行 -->
                    <div class="poke-moves">
                        <span class="move" v-for="(m, j) in p.moves" :key="j" @click.stop="handleMoveInfo(m)">{{ m
                        }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="empty-msg">未找到该分组的数据</div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import { reqNPC, reqYHNPC } from '@/apis/npc'
import { usePokemonStore } from '@/store/modules/pokemon'

const route = useRoute()
const $router = useRouter()
const pokemonStore = usePokemonStore()
const groupName = decodeURIComponent(route.params.groupName as string)
const version = computed<'normal' | 'hardcore'>(() => {
    return route.query.version === 'hardcore' ? 'hardcore' : 'normal'
})

const battles = ref<any[]>([])

onMounted(() => {
    const allData: any = version.value === 'hardcore'
        ? reqYHNPC()
        : reqNPC()
    battles.value = allData[groupName] || []
})

// 特殊形态映射
const specialForms: Record<string, string[]> = {
    '代欧奇希斯': ['攻击', '防御', '速度'],
    '结草贵妇': ['砂土蓑衣', '垃圾蓑衣'],
    '谢米': ['天空'],
    '骑拉帝纳': ['起源'],
    '洛托姆': ['加热', '清洗', '结冰', '旋转', '切割'],
    '飘浮泡泡': ['太阳', '雨天', '雪天'],
    '樱花儿': ['晴天形态'],
    '野蛮鲈鱼': ['蓝条纹的样子'],
    '达摩狒狒': ['达摩模式'],
    '美洛耶塔': ['舞步'],
    '酋雷姆': ['焰白', '暗黑'],
    '凯路迪欧': ['觉醒'],
    '毒卷云': ['灵兽', ''],
    '雷电云': ['灵兽', ''],
    '土地云': ['灵兽', ''],
    '超能妙喵': ['雌性'],
    '花叶蒂': ['', '', '', '', '永恒之花'],
    '皮卡丘': ['摇滚', '贵妇', '流行偶像', '博士', '面罩摔角手', '赤皮'],
    '胡帕': ['解放'],
    '固拉多': ['原始'],
    '盖欧卡': ['原始']
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
    const match = displayName.match(/^(.+?)（(.+?)）$/)
    if (match) {
        const baseName = match[1]
        const form = match[2]
        if (specialForms[baseName]) {
            const formsList = specialForms[baseName];
            for (let i = 0; i < formsList.length; i++) {
                const candidate = formsList[i];
                // 模糊匹配：互相包含即视为匹配
                if (
                    form.includes(candidate) ||
                    candidate.includes(form)
                ) {
                    return baseName + ' ' + (i + 1);
                }
            }
        }
    }
    // 匹配“超级xxx”
    if (displayName.startsWith('M') && displayName !== 'M甲贺忍蛙') {
        return displayName.replace('M', '') + ' 1'
    }
    return displayName
}

// 获取精灵编号
const getPokemonNumberByName = (name: string) => {
    return pokemonStore.getPokemonIdByName(name)
}
// 获取精灵图片src
const getImageSrc = (name: string) => {
    const rawName = restorePokemonRawName(name)
    console.log(rawName);
    const num = String(Number(getPokemonNumberByName(rawName)))
    return new URL(`/src/assets/images/pokemonList_images/${num}.png`, import.meta.url).href;
}

// 跳转到精灵详情
const handlePokemonInfo = (pokemon: any) => {
    const rawName = restorePokemonRawName(processPokemonName(pokemon.name))
    const num = String(Number(getPokemonNumberByName(rawName)))
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(num)
    $router.push('/pokemon/info')
}

// 跳转到技能详情
const handleMoveInfo = (moveName: string) => {
    pokemonStore.Move = pokemonStore.getMoveByName(moveName)
    $router.push('/move/move_info')
}
</script>

<style scoped>
.group-detail {
    background: #f9fbfd;
    min-height: 100vh;
    margin: 0 auto;
}

.battle-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 18px;
    margin: 18px auto;
    width: 96%;
    border: 1px solid #dbe9ff;
    box-shadow: 0 3px 8px rgba(64, 158, 255, 0.06);
}

.battle-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    font-weight: 700;
    color: #1a2b4d;
    font-size: 16px;
    letter-spacing: 0.3px;
}

.battle-type {
    color: #409eff;
    font-weight: 600;
    font-size: 14px;
}

.pokemon-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.pokemon-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
    background: #f8fbff;
    border-radius: 12px;
    border: 1px solid #e6f0ff;
}

/* 头像 + 文字信息 */
.poke-header {
    display: flex;
    align-items: flex-start;
    gap: 14px;
}

.pokemon-avatar {
    width: 68px;
    height: 68px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e6f4ff, #f0f9ff);
    border-radius: 50%;
    border: 2px solid #cce6ff;
}

.pokemon-image {
    width: 58px;
    height: 58px;
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

.poke-ability {
    font-size: 13px;
    color: #5a6b82;
    margin-bottom: 4px;
    font-weight: 500;
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
}

/* 技能整行 */
.poke-moves {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    margin-top: 4px;
}

.move {
    background: #f0f7ff;
    color: #2d8cf0;
    font-size: 13px;
    font-weight: 600;
    padding: 9px 6px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #d0e4ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
}

/* 超小屏优化 */
@media (max-width: 360px) {
    .group-detail {
        padding: 12px 8px 70px;
    }

    .pokemon-avatar {
        width: 64px;
        height: 64px;
    }

    .pokemon-image {
        width: 54px;
        height: 54px;
    }

    .poke-name {
        font-size: 15px;
    }

    .move {
        font-size: 12px;
        padding: 8px 4px;
        border-radius: 9px;
    }

    .battle-card {
        padding: 16px;
    }
}
</style>