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

                    <div class="poke-flex">
                        <div class="pokemon-avatar">
                            <img :src="getImageSrc(p.name)" :alt="p.name" class="pokemon-image" />
                        </div>
                        <div class="poke-info-vertical">
                            <div class="poke-level-row">
                                <span class="poke-level">Lv.{{ p.level }}</span>
                            </div>
                            <div class="poke-ability">特性：{{ p.ability }}</div>
                            <span class="poke-item" v-if="p.item">@ {{ p.item }}</span>
                        </div>
                        <div class="poke-moves-grid">
                            <span class="move" v-for="(m, j) in p.moves" :key="j" @click.stop="handleMoveInfo(m)">{{ m
                                }}</span>
                        </div>
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
    background: #f8f9fa;
    min-height: 100vh;
    max-width: 420px;
    margin: 0 auto;
    padding-bottom: 24px;
}

.battle-card {
    background: #ffffff;
    border-radius: 12px;
    /* 去除阴影 */
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06); */
    padding: 16px;
    margin-bottom: 18px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border: 1.2px solid #e3e9f6;
}

.battle-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: bold;
    color: #2d3a4b;
    font-size: 15px;
}

.battle-type {
    color: #409eff;
    font-weight: normal;
}

.pokemon-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.pokemon-card {
    background: linear-gradient(135deg, #fafdff 60%, #e3e9f6 100%);
    border-radius: 20px;
    padding: 22px 18px 22px 18px;
    font-size: 15px;
    color: #444;
    border: 1.5px solid #e3e9f6;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    box-shadow: 0 6px 24px 0 rgba(64, 158, 255, 0.10);
    margin-bottom: 18px;
    min-height: 160px;
    transition: box-shadow 0.2s;
}

.pokemon-card:hover {
    box-shadow: 0 10px 32px 0 rgba(64, 158, 255, 0.16);
}

.poke-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
}

.pokemon-avatar {
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #eaf6ff 60%, #f0f7ff 100%);
    border-radius: 50%;
    border: 3px solid #b3d8ff;
    box-shadow: 0 4px 18px 0 rgba(64, 158, 255, 0.13);
    margin-right: 16px;
}

.pokemon-image {
    width: 116px;
    height: 116px;
    object-fit: contain;
    background: #fff;
    border-radius: 50%;
    border: 2.5px solid #e3e9f6;
    box-shadow: 0 2px 12px 0 rgba(64, 158, 255, 0.10);
}

.poke-info-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 170px;
    max-width: 200px;
    background: #f4f8ff;
    border-radius: 16px;
    padding: 16px 24px 14px 24px;
    border: 1.5px solid #b3d8ff;
    box-shadow: 0 2px 8px 0 rgba(64, 158, 255, 0.08);
    font-weight: 600;
    margin: 0 12px 0 0;
    position: relative;
}

.poke-level-row {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #3366cc;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

.poke-level {
    font-size: 18px;
    color: #3366cc;
    font-weight: 700;
    margin-right: 8px;
}

.poke-ability {
    font-size: 16px;
    color: #2d3a4b;
    font-weight: 500;
    word-break: break-all;
    margin-bottom: 10px;
}

.poke-item {
    display: inline-block;
    margin-top: 0;
    font-size: 13.5px;
    color: #fff;
    font-weight: 600;
    background: linear-gradient(90deg, #6ec6ff 0%, #409eff 100%);
    border-radius: 12px;
    padding: 3px 16px;
    box-shadow: 0 2px 6px 0 rgba(64, 158, 255, 0.10);
    letter-spacing: 0.5px;
    min-width: 40px;
    text-align: center;
    border: none;
}

.poke-moves-grid {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 28px;
    background: #fafdff;
    border-radius: 18px;
    padding: 18px 18px;
    width: 240px;
    border: 1.5px solid #b3d8ff;
    box-shadow: 0 2px 12px 0 rgba(64, 158, 255, 0.10);
    font-weight: 600;
    align-items: center;
}

.move {
    background: linear-gradient(135deg, #e6f0ff 60%, #d6eaff 100%);
    padding: 15px 0;
    border-radius: 22px;
    font-size: 19px;
    color: #3366cc;
    cursor: pointer;
    text-align: center;
    margin-bottom: 0;
    box-shadow: 0 2px 8px 0 rgba(64, 158, 255, 0.10);
    border: 1.5px solid #b3d8ff;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: background 0.2s, box-shadow 0.2s;
}

.move:active {
    background: #b3d8ff;
    box-shadow: 0 1px 2px 0 rgba(64, 158, 255, 0.10);
}

.empty-msg {
    text-align: center;
    padding: 40px 0;
    color: #999;
    font-size: 15px;
}

@media (max-width: 600px) {
    .group-detail {
        max-width: 100vw;
        padding-bottom: 12px;
    }

    .battle-card {
        width: 98%;
        padding: 10px;
    }

    .pokemon-card {
        padding: 8px 2px 8px 2px;
        min-height: 110px;
        margin-bottom: 10px;
    }

    .pokemon-avatar {
        width: 84px;
        height: 84px;
        margin-right: 10px;
    }

    .pokemon-image {
        width: 74px;
        height: 74px;
    }

    .poke-info-vertical {
        min-width: 100px;
        max-width: 100%;
        padding: 8px 12px 8px 12px;
        border-radius: 10px;
        margin: 0 8px 0 0;
    }

    .poke-level-row {
        font-size: 14px;
        margin-bottom: 2px;
    }

    .poke-level {
        font-size: 14px;
    }

    .poke-ability {
        font-size: 12.5px;
        margin-bottom: 4px;
    }

    .poke-moves-grid {
        width: 80vw;
        max-width: 100%;
        padding: 14px 18px;
        gap: 14px 12px;
        border-radius: 12px;
    }

    .move {
        font-size: 14px;
        padding: 8px 0;
        border-radius: 12px;
    }

    .poke-item {
        font-size: 11.5px;
        padding: 2px 8px;
        min-width: 28px;
        border-radius: 8px;
    }
}
</style>
