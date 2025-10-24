<template>
    <Top title="宝可梦介绍" icon="pokemon" router="/pokemon" :color="getColor(pokemon_info.属性[0])"></Top>
    <div class="pokemon-info" :style="gradientHttp" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp">
        <!-- 翻页动画容器 -->
        <div class="page-container" :style="pageContainerStyle">
            <div class="page-content" :style="pageContentStyle">
                <div class="pokemon-title-wrapper">
                    <div class="pokemon-title" :style="{ ...gradientStyle, ...getBorderStyle() }"
                        :class="getBorderColorClass()">
                        <div class="pokemon-title-left">
                            <div class="pokemon-name">
                                <p class="title">{{ pokemon_info.名称 }}</p>
                                <div style="display: flex;">
                                    <p class="subtitle" v-for="(item, index) in pokemon_info.蛋群" :key="item">
                                        {{ item }}<span v-if="index < pokemon_info.蛋群.length - 1">, </span>
                                    </p>
                                </div>
                            </div>
                            <div class="pokemon-type">
                                <div class="type">
                                    <div class="type1" v-for="item in pokemon_info.属性" :key="item"
                                        :style="{ backgroundColor: getColor(item) }">{{
                                            item }}</div>
                                </div>
                                <div class="ability">
                                    <div v-if="pokemon_info.特性.length < 3" class="ability-box"
                                        v-for="item in pokemon_info.特性" :key="item">
                                        {{ item }}
                                    </div>
                                    <template v-else>
                                        <div class="ability-box" @click="abilityDrawer = true">
                                            {{ pokemon_info.特性[0] }}
                                            <br>
                                            {{ pokemon_info.特性[1] }}
                                        </div>
                                        <div class="ability-box" @click="showHiddenAbility(pokemon_info.特性[2])">
                                            {{ pokemon_info.特性[2] }}
                                            <p>隐藏特性</p>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="pokemon-title-right">
                            <img :src="getImageSrc(pokemon_info.编号)" alt="">
                        </div>
                    </div>
                </div>
                <div class="details" :style="{ background: getColor(pokemon_info.属性[0]), ...getBorderStyle() }"
                    :class="getBorderColorClass()">
                    <div class="pokemon-header">
                        <div class="grade">
                            <p>等级</p>
                            <el-input class="input" v-model="RankCharacter.grade"></el-input>
                        </div>
                        <div class="nature">
                            <p>性格</p>
                            <el-button @click="drawer = true">
                                {{ RankCharacter.nature }}
                            </el-button>
                        </div>
                    </div>
                    <div class="pokemon-stats-container">
                        <div class="pokemon-base-stats">
                            <p>种族值</p>
                            <div v-for="(item, index) in pokemon_info.种族值" :key="index">
                                <div>{{ RaceValue[index] }}:{{ item }}</div>
                            </div>
                            <div>
                                总种族值<br />
                                {{ pokemon_info.总种族值 }}
                            </div>
                        </div>

                        <div class="pokemon-individual-values">
                            <p>个体值</p>
                            <div class="input-container" v-for="(item, index) in IndividualValue" :key="index">
                                <div class="editable-div" @input="updateIndividual($event, index)"
                                    contenteditable="true" v-html="item">
                                </div>
                            </div>
                            <div>
                                <span v-if="pokemon_info.canUseEvolutionStone" style="color: red;">
                                    可用<br />进化奇石
                                </span>
                                <span v-else>
                                    进化阶段<br />
                                    {{ pokemon_info.进化阶段 }}
                                </span>
                            </div>
                        </div>

                        <div class="pokemon-effort-values">
                            <p>努力值</p>
                            <div class="input-container" v-for="(item, index) in EffortValue" :key="index">
                                <div class="editable-div" v-html="item" @input="updateEffort($event, index)"
                                    contenteditable="true">
                                </div>
                            </div>
                            <div>
                                孵蛋速度<br />
                                {{ pokemon_info.蛋群[0] == "未发现" ? "不可孵蛋" : pokemon_info.孵蛋周期 }}
                            </div>
                        </div>

                        <div class="pokemon-ability-values">
                            <p>能力值</p>
                            <div class="input-container" v-for="(item, index) in AbilityValue" :key="index">
                                <div>{{ item }}</div>
                            </div>
                            <div>
                                满级经验<br />
                                {{ pokemon_info.经验值累积速度 }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weaknesses-container" :style="getBorderStyle()" :class="getBorderColorClass()">
                    <div class="weaknesses-header">属性相性</div>
                    <div class="weaknesses-content">
                        <div class="weaknesses-grid">
                            <div v-for="(item, index) in attributeList" :key="index" class="weaknesses-item">
                                <div class="weaknesses-type" :style="{ backgroundColor: colorMap[item] }">
                                    {{ item == "超能力" ? "超能" : item }}
                                </div>
                                <div class="weaknesses-value">
                                    <template v-if="shuxing[index - 1] > 1">
                                        <span class="text-red-500"> {{ shuxing[index - 1] }}</span>
                                    </template>
                                    <template v-else-if="shuxing[index - 1] < 1">
                                        <span class="text-green-500"> {{ shuxing[index - 1] }}</span>
                                    </template>
                                    <template v-else>
                                        <span class="text-gray-500"> {{ shuxing[index - 1] }}</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pokemon-method" v-if="appearAreas.length > 0" :style="getBorderStyle()"
                    :class="getBorderColorClass()">
                    <div class="method-header">精灵分布</div>
                    <div class="method-content">
                        <template v-if="appearAreas.length > 0">
                            <div v-for="(item, idx) in appearAreas" :key="idx" class="method-text">
                                <span @click="handleAreaJump(item.area)">{{ item.area }}</span>
                            </div>
                        </template>
                        <div v-else class="method-text">暂无分布信息</div>
                    </div>
                </div>
                <div class="pokemon-method" v-if="evolves.length">
                    <div class="method-header">进化方式</div>
                    <div class="evolution-steps">
                        <div class="evolution-step" v-for="(evolve, index) in evolves" :key="index">
                            <div class="evolution-container" v-show="evolve.condition !== 'trade'">
                                <!-- 当前形态 -->
                                <div class="pokemon-card" @click="handleNextStageInfo(evolve.pokemonName)">
                                    <img class="pokemon-image"
                                        :src="getImageSrc(pokemonStore.getPokemonIdByName(evolve.pokemonName))"
                                        :alt="pokemon_info.名称">
                                    <p class="pokemon-name">{{ evolve.pokemonName }}</p>
                                </div>

                                <!-- 进化条件 -->
                                <div class="evolution-condition">
                                    <div class="condition-bubble" v-if="evolve.condition === 'level_up'">
                                        <i class="fas fa-level-up-alt"></i> Lv. {{ evolve.level }} 进化
                                    </div>
                                    <div class="condition-bubble" v-if="evolve.condition === 'use_item'">
                                        <i class="fas fa-potion"></i> 使用 {{ evolve.item }} 进化
                                    </div>
                                    <div class="condition-bubble" v-if="evolve.condition === 'learn_move'">
                                        <i class="fas fa-potion"></i> 学会{{ evolve.move }} 后提升等级进化
                                    </div>
                                    <div class="condition-bubble" v-if="evolve.condition === 'level_up_holding_item'">
                                        <i class="fas fa-level-up-alt"></i> 携带 {{ evolve.item }} 进化
                                    </div>
                                    <div class="condition-bubble" v-if="evolve.condition === 'friendship'">
                                        <i class="fas fa-level-up-alt"></i> 友好度进化
                                    </div>
                                    <div class="condition-bubble" v-if="evolve.condition === 'special'">
                                        <i class="fas fa-level-up-alt"></i> {{ evolve.item }}
                                    </div>
                                    <div class="evolution-arrow">
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>

                                <!-- 进化后形态 -->
                                <div class="pokemon-card" style="cursor:pointer"
                                    @click="handleNextStageInfo(evolve.NextStage)">
                                    <img class="pokemon-image"
                                        :src="getImageSrc(pokemonStore.getPokemonIdByName(evolve.NextStage))"
                                        :alt="evolve.NextStage">
                                    <p class="pokemon-name">{{ evolve.NextStage }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pokemon-belongings" v-if="pokemon_info.可能携带的物品.length !== 0" :style="getBorderStyle()"
                    :class="getBorderColorClass()">
                    <div class="belongings-header">携带物品</div>
                    <div class="belongings-content">
                        <div v-for="(item, index) in pokemon_info.可能携带的物品" :key="index" class="belongings-item"
                            @click="handlePropInfo(item.物品)">
                            <div class="belongings-name">{{ item.物品 }} {{ item.概率 }}%</div>
                        </div>
                    </div>
                </div>
                <div class="pokemon-moves" :style="getBorderStyle()" :class="getBorderColorClass()">
                    <div style="position: relative; text-align: center;">
                        <div class="moves-header">{{ movesTitle }}</div>
                        <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); cursor: pointer;"
                            @click="toggleEggMoves">
                            <SvgIcon name="toggle" height="30px" width="30px"
                                :color="isEggMoves ? '#ff6b6b' : '#00bfff'">
                            </SvgIcon>
                        </div>
                    </div>

                    <div class="moves-content">
                        <div v-for="(item, index) in moves" :key="index" class="moves-item" :class="{
                            'moves-item-early': parseInt(item.level) <= 10,
                            'moves-item-mid': parseInt(item.level) > 10 && parseInt(item.level) <= 50,
                            'moves-item-late': parseInt(item.level) > 50,
                            'moves-item-lates': parseInt(item.level) == 100
                        }" @click="handleMoveInfo(item)">
                            <div class="moves-type">Lv. {{ item.level }}</div>
                            <div class="moves-name">{{ item.skill_name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-drawer v-model="drawer" direction="btt" size="60%">
            <el-table :data="natureList" style="width: 100%" @row-click="optionNature">
                <el-table-column prop="name" width="180" />
                <el-table-column prop="description" />
            </el-table>
        </el-drawer>
        <el-drawer style="height: 35%; margin-top: 90px;" v-model="abilityDrawer" direction="rtl" size="40%">
            <div class="ability-info-box" @click="showHiddenAbility(pokemon_info.特性[0])">
                <div class="ability-title">特性 1</div>
                <div class="ability-content">{{ pokemon_info.特性[0] }}</div>
            </div>
            <div class="ability-info-box" @click="showHiddenAbility(pokemon_info.特性[1])">
                <div class="ability-title">特性 2</div>
                <div class="ability-content">{{ pokemon_info.特性[1] }}</div>
            </div>
        </el-drawer>

        <!-- 翻页指示器 -->
        <div class="page-indicator" v-if="isDragging">
            <div class="indicator-dot" :class="{ active: dragDirection === 'left' }"></div>
            <div class="indicator-dot" :class="{ active: dragDirection === 'right' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';
import { getAreas } from '@/apis/areas/index.ts'
import { useAreaStore } from '@/store/modules/area'

// 地区数据
const areaStore = useAreaStore()
// 路由
let $router = useRouter()
// 获取精灵数据仓库
const pokemonStore = usePokemonStore()
// 性格选择抽屉
const drawer = ref(false)
// 特性选择抽屉
const abilityDrawer = ref(false)
// 宝可梦信息
let pokemon_info: any = reactive({
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
    "孵蛋周期": 5,
    canUseEvolutionStone: false // 初始化属性
})
pokemon_info = pokemonStore.Pokemon
// 种族值信息表
let RaceValue = ref(['HP',
    'AT',
    'DF',
    'SA',
    'SD',
    'SP'])
// 等级性格
let RankCharacter = reactive({
    grade: 100,
    nature: '勤奋'
})

// 获取进化方式
let evolves = pokemonStore.getEvolveByName(pokemon_info.名称)

const maxValue = 31; // 最大值
const minValue = 0;  // 最小值
// 个体值
let IndividualValue = ref([31, 31, 31, 31, 31, 31])
// 努力值
let EffortValue = ref([0, 0, 0, 0, 0, 0])
const maxEffort = 252;
const minEffort = 0;
// 能力值
let AbilityValue = ref([0, 0, 0, 0, 0, 0])
// 性格数据
const natures: any = {
    '勤奋': {
        name: '勤奋',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    '怕寂寞': {
        name: '怕寂寞',
        attack: 1.1,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '攻击提升，防御降低'
    },
    '固执': {
        name: '固执',
        attack: 1.1,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '攻击提升，特攻降低'
    },
    '顽皮': {
        name: '顽皮',
        attack: 1.1,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '攻击提升，特防降低'
    },
    '勇敢': {
        name: '勇敢',
        attack: 1.1,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '攻击提升，速度降低'
    },
    '大胆': {
        name: '大胆',
        attack: 0.9,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '防御提升，攻击降低'
    },
    '坦率': {
        name: '坦率',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    '淘气': {
        name: '淘气',
        attack: 1.0,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '防御提升，特攻降低'
    },
    '乐天': {
        name: '乐天',
        attack: 1.0,
        defense: 1.1,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '防御提升，特防降低'
    },
    '悠闲': {
        name: '悠闲',
        attack: 1.0,
        defense: 1.1,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '防御提升，速度降低'
    },
    '内敛': {
        name: '内敛',
        attack: 0.9,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，攻击降低'
    },
    '慢吞吞': {
        name: '慢吞吞',
        attack: 1.0,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，防御降低'
    },
    '害羞': {
        name: '害羞',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
    '马虎': {
        name: '马虎',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.1,
        specialDefense: 0.9,
        description: '特功提升，特防降低'
    },
    '冷静': {
        name: '冷静',
        attack: 1.0,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.1,
        specialDefense: 1.0,
        description: '特攻提升，速度降低'
    },
    '温和': {
        name: '温和',
        attack: 0.9,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，攻击降低'
    },
    '温顺': {
        name: '温顺',
        attack: 1.0,
        defense: 0.9,
        speed: 1.0,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，防御降低'
    },
    '慎重': {
        name: '慎重',
        attack: 1.0,
        defense: 1.0,
        speed: 1.0,
        specialAttack: 0.9,
        specialDefense: 1.1,
        description: '特防提升，特攻降低'
    },
    '自大': {
        name: '自大',
        attack: 1.0,
        defense: 1.0,
        speed: 0.9,
        specialAttack: 1.0,
        specialDefense: 1.1,
        description: '特防提升，速度降低'
    },
    '胆小': {
        name: '胆小',
        attack: 0.9,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '速度提升，攻击降低'
    },
    '浮躁': {
        name: '浮躁',
        attack: 1.0,
        defense: 0.9,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '速度提升，防御降低'
    },
    '爽朗': {
        name: '爽朗',
        attack: 1.0,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 0.9,
        specialDefense: 1.0,
        description: '速度提升，特攻降低'
    },
    '天真': {
        name: '天真',
        attack: 1.0,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 0.9,
        description: '速度提升，特防降低'
    },
    '认真': {
        name: '认真',
        attack: 1.0,
        defense: 1.0,
        speed: 1.1,
        specialAttack: 1.0,
        specialDefense: 1.0,
        description: '能力均衡，无提升和降低'
    },
};
const natureList = Object.values(natures)
// 颜色映射
let colorMap = pokemonStore.colorMap

// 获取 Pokemon 图片的 URL
const getImageSrc = (编号: String) => {
    let imageSrc = Number(编号)
    return new URL(`/src/assets/images/pokemonList_images/${imageSrc}.png`, import.meta.url).href;
};
// 能力值计算函数
const calculateSingleStat = (
    baseStat: number,
    individualValue: number,
    effortValue: number,
    level: number,
    natureModifier: number,
    isHP: boolean = false
) => {
    const baseCalculation = isHP
        ? Math.floor((baseStat * 2 + individualValue + Math.floor(effortValue / 4)) * level / 100 + 10 + level)
        : Math.floor((baseStat * 2 + individualValue + Math.floor(effortValue / 4)) * level / 100 + 5);

    return isHP ? baseCalculation : Math.floor(baseCalculation * natureModifier);
};


// 性格对应的键
const natureKeys = ['attack', 'defense', 'specialAttack', 'specialDefense', 'speed'];

// 更新所有能力值的方法
const updateAllAbilities = () => {
    const level = Math.max(1, Math.min(100, RankCharacter.grade));

    pokemon_info.种族值.forEach((baseStat: any, index: any) => {
        const isHP = index === 0;
        const individualValue = IndividualValue.value[index];
        const effortValue = EffortValue.value[index];
        const natureModifier = isHP ? 1.0 : natures[RankCharacter.nature][natureKeys[index - 1]] || 1.0;

        AbilityValue.value[index] = calculateSingleStat(
            baseStat,
            individualValue,
            effortValue,
            level,
            natureModifier,
            isHP
        );
    });
};

// 合并监听器
watch(
    [IndividualValue, EffortValue, () => RankCharacter.grade, () => RankCharacter.nature],
    updateAllAbilities,
    { deep: true }
);

let movesTitle = ref<string>('可用招式');
const isEggMoves = ref(false)
const toggleEggMoves = () => {
    isEggMoves.value = !isEggMoves.value
    movesTitle.value = isEggMoves.value ? '蛋招式' : '可用招式'
    if (isEggMoves.value) {
        getEggMoves()
    } else {
        getMoves()
    }
}

let moves: any = ref([])
// 获取位置
let appearAreas: any = ref([])
onMounted(() => {
    // 初始化
    updateAllAbilities();
    // 计算属性相性
    attributeList1();

    getMoves();

    pokemon_info.old_pokemon_name = pokemon_info.名称
    pokemon_info.名称 = processPokemonName(pokemon_info.名称)
    // 精灵捕获位置
    appearAreas = getAppearAreas(pokemon_info.old_pokemon_name);

    // 添加键盘事件监听
    document.addEventListener('keydown', handleKeyDown);
});

// 键盘事件处理
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
        loadPreviousPokemonPage();
    } else if (event.key === 'ArrowRight') {
        loadNextPokemonPage();
    }
};

// 组件卸载时清理事件监听器
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
});

const getMoves = () => {
    if (!isNaN(Number(pokemon_info.编号)) && !pokemon_info.编号.includes('_')) {
        moves.value = pokemonStore.getPokemonMovesByNumber(String(Number(pokemon_info.编号)))
    } else {
        // 保持原编号
        moves.value = pokemonStore.getPokemonMovesByNumber(pokemon_info.编号);
    }
}

const getEggMoves = () => {
    if (!isNaN(Number(pokemon_info.编号)) && !pokemon_info.编号.includes('_')) {
        moves.value = pokemonStore.getEggMovesByNumber(String(Number(pokemon_info.编号)))
    } else {
        // 保持原编号
        moves.value = pokemonStore.getEggMovesByNumber(pokemon_info.编号);
    }
}

// 名称问题解决 
// 特殊形态的映射表
const specialForms: Record<string, string[]> = {
    '代欧奇希斯': ['攻击形态', '防御形态', '速度形态'],
    '结草贵妇': ['砂土蓑衣', '垃圾蓑衣'],
    '谢米': ['天空形态'],
    '骑拉帝纳': ['起源形态'],
    '洛托姆': ['加热', '清洗', '结冰', '旋转', '切割'],
    '飘浮泡泡': ['太阳', '雨天', '雪天'],
    '樱花儿': ['晴天形态'],
    '野蛮鲈鱼': ['蓝条纹的样子'],
    '达摩狒狒': ['达摩模式'],
    '美洛耶塔': ['舞步形态'],
    '酋雷姆': ['焰白', '暗黑'],
    '凯路迪欧': ['觉悟形态'],
    '毒卷云': ['灵兽形态'],
    '雷电云': ['灵兽形态'],
    '土地云': ['灵兽形态'],
    '超能妙喵': ['雌性'],
    '花叶蒂': ['', '', '', '', '永恒之花'],
    '皮卡丘': ['摇滚巨星', '贵妇', '流行偶像', '博士', '面罩摔角手', '智皮']
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
// 进化奇石
// 在script部分添加
const canUseStoneFinalForms = [
    "美纳斯", "火暴猴", "白海狮", "大奶罐", "圈圈熊",
    "猫头夜鹰", "随风球", "南瓜怪人", "念力土偶", "舞天鹅",
    "乌贼王", "朽木妖", "顽皮雷弹", "热带龙", "电飞鼠",
    "摩鲁蛾", "钢臂炮虾", "裙儿小姐", "几何雪花", "麒麟奇", "钢炮臂虾",
    "樱花儿", "千针鱼", "风铃铃", "优雅猫", "太阳珊瑚", "土龙翅灵"
];

// 在onMounted或数据初始化时
pokemon_info.canUseEvolutionStone = canUseStoneFinalForms.includes(pokemon_info.名称.replace(/（.*）/, '').trim());
// 获取 Pokemon 图片的 URL
const getColor = (type: any) => colorMap[type] || '#BBBBAA'

// 获取边框颜色类
const getBorderColorClass = () => {
    const primaryType = pokemon_info.属性[0]
    const secondaryType = pokemon_info.属性[1] || pokemon_info.属性[0]
    return `border-${primaryType}-${secondaryType}`
}

// 获取流光边框样式
const getBorderStyle = () => {
    const primaryColor = getColor(pokemon_info.属性[0])
    const secondaryColor = getColor(pokemon_info.属性[1]) || primaryColor

    // 将十六进制颜色转换为rgba格式
    const hexToRgba = (hex: string, alpha: number = 0.8) => {
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    return {
        '--primary-color': hexToRgba(primaryColor, 0.8),
        '--secondary-color': hexToRgba(secondaryColor, 0.8)
    }
}

const gradientStyle = computed(() => ({
    background: `linear-gradient(to bottom, ${getColor(pokemon_info.属性[0])}, #FFFFFF)`
}))
const gradientHttp = computed(() => ({
    background: `linear-gradient(60deg, ${getColor(pokemon_info.属性[0])}, ${getColor(pokemon_info.属性[1])})`
}))
// 修改种族值
const updateIndividual = (event: any, index: number) => {
    let value = event.target.innerText.trim();

    // 保存当前光标位置
    const selection = window.getSelection();
    if (!selection) return; // 添加空值检查
    const range = selection.getRangeAt(0);
    const cursorPosition = range.startOffset;

    // 如果是空值，设置为0
    if (!value) {
        event.target.innerText = '';
        // IndividualValue.value[index] = 0;
        return;
    }

    // 正则表达式验证：只允许数字
    if (!/^\d*$/.test(value)) {
        event.target.innerText = IndividualValue.value[index] || '';
        return;
    }

    let numValue = parseInt(value);

    // 更复杂的范围验证
    numValue = Math.max(minValue, Math.min(maxValue, numValue));

    event.target.innerText = numValue;
    IndividualValue.value[index] = numValue;

    // 恢复光标位置
    nextTick(() => {
        const newRange = document.createRange();
        newRange.setStart(event.target.childNodes[0], cursorPosition);
        newRange.setEnd(event.target.childNodes[0], cursorPosition);
        selection.removeAllRanges();
        selection.addRange(newRange);
    });
}
// 修改努力值
const updateEffort = (event: any, index: number) => {
    let value = event.target.innerText.trim();

    // 保存当前光标位置
    const selection = window.getSelection();
    if (!selection) return; // 添加空值检查
    const range = selection.getRangeAt(0);
    const cursorPosition = range.startOffset;

    // 如果是空值，设置为0
    if (!value) {
        event.target.innerText = '';
        EffortValue.value[index] = 0;
        return;
    }

    // 正则表达式验证：只允许数字
    if (!/^\d*$/.test(value)) {
        event.target.innerText = EffortValue.value[index] || '';
        return;
    }

    let numValue = parseInt(value);

    // 更复杂的范围验证
    numValue = Math.max(minEffort, Math.min(numValue, maxEffort));

    event.target.innerText = numValue;
    EffortValue.value[index] = numValue;

    // 恢复光标位置
    nextTick(() => {
        const newRange = document.createRange();
        newRange.setStart(event.target.childNodes[0], cursorPosition);
        newRange.setEnd(event.target.childNodes[0], cursorPosition);
        selection.removeAllRanges();
        selection.addRange(newRange);
    });
}
// 选择性格
const optionNature = (row: any) => {
    RankCharacter.nature = row.name;
    drawer.value = false;

}

// 属性克制关系
let shuxing: any[] = []
// 属性匹配表
const attributeList = {
    1: '一般',
    2: '格斗',
    3: '飞行',
    4: '毒',
    5: '地面',
    6: '岩石',
    7: '虫',
    8: '幽灵',
    9: '钢',
    10: '火',
    11: '水',
    12: '草',
    13: '电',
    14: '超能力',
    15: '冰',
    16: '龙',
    17: '恶',
    18: '妖精',
}
// 属性克制关系
const attributeRestraintRelationship: any = {
    1: [1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    2: [1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 2],
    3: [1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1],
    4: [1, 0.5, 1, 0.5, 2, 1, 0, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 0.5],
    5: [1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1, 1],
    6: [0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1, 1],
    7: [1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1, 1], // 虫属性的打击面
    8: [0.0, 0, 1.0, 0.5, 1.0, 1.0, 1, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1, 1.0, 1.0, 2, 1.0],
    9: [0.5, 2, 0.5, 0, 2, 0.5, 0.5, 1.0, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 1.0, 0.5],
    10: [1.0, 1.0, 1.0, 1.0, 2, 2, 0.5, 1.0, 0.5, 0.5, 2, 0.5, 1.0, 1.0, 0.5, 1, 1.0, 0.5],
    11: [1.0, 1.0, 1.0, 1.0, 1, 1, 1.0, 1.0, 0.5, 0.5, 0.5, 2, 2, 1.0, 0.5, 1, 1.0, 1.0],
    12: [1.0, 1.0, 2, 2, 0.5, 1, 2, 1.0, 1, 2, 0.5, 0.5, 0.5, 1.0, 2, 1, 1.0, 1.0],
    13: [1.0, 1.0, 0.5, 1, 2.0, 1, 1, 1.0, 0.5, 1, 1, 1, 0.5, 1.0, 1.0, 1, 1.0, 1.0],
    14: [1.0, 0.5, 1, 1.0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2, 1.0],
    15: [1.0, 2.0, 0.5, 1, 1.0, 2, 1.0, 1.0, 2, 2, 0.5, 1.0, 1.0, 1, 0.5, 1.0, 1.0, 1.0],
    16: [1.0, 1.0, 1, 1.0, 1, 1.0, 1.0, 1.0, 1, 0.5, 0.5, 0.5, 0.5, 1.0, 2, 2.0, 1.0, 2],
    17: [1.0, 2, 1.0, 1.0, 1.0, 1.0, 2, 0.5, 1, 1.0, 1.0, 1.0, 1.0, 0, 1.0, 1, 0.5, 2],
    18: [1.0, 0.5, 1.0, 2, 1.0, 1.0, 2, 1, 2, 1.0, 1.0, 1.0, 1.0, 1, 1.0, 0, 0.5, 1]
}
// 属性相克
const attributeList1 = () => {

    if (pokemon_info.属性.length == 1) {
        for (const [key, val] of Object.entries(attributeList)) {
            // 若找到匹配的值，则返回其对应的键
            if (val === pokemon_info.属性[0]) {
                shuxing = attributeRestraintRelationship[key];
                return
            }
        }

    } else {
        let list1 = []
        let list2 = []
        let list3 = []
        for (const [key, val] of Object.entries(attributeList)) {
            // 若找到匹配的值，则返回其对应的键
            if (val === pokemon_info.属性[0]) {
                list1 = attributeRestraintRelationship[key];
            }
            if (val === pokemon_info.属性[1]) {
                list2 = attributeRestraintRelationship[key];
            }
        }


        for (let i = 0; i < list1.length; i++) {
            list3.push(list1[i] * list2[i])
        }
        shuxing = list3
    }
}

// 跳转到技能页面
const handleMoveInfo = (item: any) => {
    pokemonStore.Move = pokemonStore.getMoveByName(item.skill_name);
    $router.push('/move/move_info')
}

// 跳转到特性页面
const showHiddenAbility = (abilityName: string) => {
    pokemonStore.abilityName = abilityName;
    $router.push('/ability/ability_info')
}

// 跳转到道具详情页面
const handlePropInfo = (propName: string) => {
    pokemonStore.Prop = pokemonStore.getPropByName(propName);
    $router.push('/prop/prop_info')
}

// 拖拽翻页事件
let startX = 0; // 起始触摸点的 X 坐标
let endX = 0;   // 结束触摸点的 X 坐标
let isDragging = ref(false); // 是否正在进行拖动
let dragDirection = ref(''); // 拖拽方向
let dragOffset = ref(0); // 拖拽偏移量
let isMouseDown = ref(false); // 鼠标按下状态

const MIN_SWIPE_DISTANCE = 50; // 设置最小滑动距离，单位为像素
const MAX_DRAG_OFFSET = 200; // 最大拖拽偏移量

// 页面容器样式
const pageContainerStyle = computed(() => ({
    transform: `translateX(${dragOffset.value}px)`,
    transition: isDragging.value ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isDragging.value ? Math.max(0.7, 1 - Math.abs(dragOffset.value) / 300) : 1
}));

const pageContentStyle = computed(() => ({
    transform: `scale(${isDragging.value ? Math.max(0.95, 1 - Math.abs(dragOffset.value) / 1000) : 1})`,
    transition: isDragging.value ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}));

let startY = 0;
// 触摸开始
const handleTouchStart = (event: TouchEvent) => {
    if ((event.target as HTMLElement).closest('.editable-div')) {
        return;
    }
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    isDragging.value = false;
    dragOffset.value = 0;
    dragDirection.value = '';
};

// 触摸移动
const handleTouchMove = (event: TouchEvent) => {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    // 如果垂直滑动距离明显大于水平滑动，则忽略拖拽
    if (Math.abs(deltaY) * 2 > Math.abs(deltaX)) {
        return;
    }

    // 只有水平滑动距离足够大时才启动拖拽
    if (!isDragging.value && Math.abs(deltaX) > 15) {
        isDragging.value = true;
    }

    if (isDragging.value) {
        endX = currentX;
        // 限制拖拽范围
        dragOffset.value = Math.max(-MAX_DRAG_OFFSET, Math.min(MAX_DRAG_OFFSET, deltaX));
        dragDirection.value = deltaX > 0 ? 'right' : 'left';
    }
};

const handleTouchEnd = () => {
    if (!isDragging.value) return;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > MIN_SWIPE_DISTANCE) {
        if (deltaX < 0) { // 左滑 - 下一页
            loadNextPokemonPage();
        } else { // 右滑 - 上一页
            loadPreviousPokemonPage();
        }
    }

    // 重置状态
    isDragging.value = false;
    dragOffset.value = 0;
    dragDirection.value = '';
};

// 鼠标事件处理
const handleMouseDown = (event: MouseEvent) => {
    // 如果点击的是可编辑区域，不阻止默认行为
    if ((event.target as HTMLElement).closest('.editable-div')) {
        return;
    }
    startX = event.clientX;
    startY = event.clientY;
    isMouseDown.value = true;
    isDragging.value = false;
    dragOffset.value = 0;
    dragDirection.value = '';
    event.preventDefault(); // 只对非编辑区域阻止默认行为
};

const handleMouseMove = (event: MouseEvent) => {
    if (!isMouseDown.value) return;

    const currentX = event.clientX;
    const currentY = event.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    // 如果垂直滑动距离明显大于水平滑动，则忽略拖拽
    if (Math.abs(deltaY) * 2 > Math.abs(deltaX)) {
        return;
    }

    // 只有水平滑动距离足够大时才启动拖拽
    if (!isDragging.value && Math.abs(deltaX) > 15) {
        isDragging.value = true;
    }

    if (isDragging.value) {
        endX = currentX;
        dragOffset.value = Math.max(-MAX_DRAG_OFFSET, Math.min(MAX_DRAG_OFFSET, deltaX));
        dragDirection.value = deltaX > 0 ? 'right' : 'left';
    }
};

const handleMouseUp = () => {
    if (!isMouseDown.value) return;

    if (isDragging.value) {
        const deltaX = endX - startX;

        if (Math.abs(deltaX) > MIN_SWIPE_DISTANCE) {
            if (deltaX < 0) { // 左拖 - 下一页
                loadNextPokemonPage();
            } else { // 右拖 - 上一页
                loadPreviousPokemonPage();
            }
        }
    }

    // 重置状态
    isMouseDown.value = false;
    isDragging.value = false;
    dragOffset.value = 0;
    dragDirection.value = '';
};

function loadNextPokemonPage() {
    console.log('加载下一页的精灵');
    // 实现具体的逻辑，例如请求新的数据
    if (pokemon_info.编号.includes('_')) {
        pokemon_info.编号 = pokemon_info.编号.split('_')[0]
    }
    handlePageChange(Number(pokemon_info.编号) + 1)
}

function loadPreviousPokemonPage() {
    console.log('加载上一页的精灵');
    // 实现具体的逻辑，例如请求新的数据
    if (pokemon_info.编号.includes('_')) {
        pokemon_info.编号 = pokemon_info.编号.split('_')[0]
    }
    handlePageChange(Number(pokemon_info.编号) - 1)
}

// 翻页更新数据
const handlePageChange = (page: number) => {
    // 重置拖拽状态
    isDragging.value = false;
    dragOffset.value = 0;
    dragDirection.value = '';

    // 更新宝可梦信息 - 使用 Object.assign 确保响应式更新
    const newPokemonInfo = pokemonStore.getPokemonByName(page);
    Object.assign(pokemon_info, newPokemonInfo);

    // 重置个体值和努力值
    IndividualValue.value = [31, 31, 31, 31, 31, 31];
    EffortValue.value = [0, 0, 0, 0, 0, 0];

    // 重新计算属性相性
    attributeList1();

    // 同步更新moves
    if (!isNaN(Number(pokemon_info.编号)) && !pokemon_info.编号.includes('_')) {
        moves.value = pokemonStore.getPokemonMovesByNumber(String(Number(pokemon_info.编号)))
    } else {
        moves.value = pokemonStore.getPokemonMovesByNumber(pokemon_info.编号);
    }

    // 同步更新evolves
    evolves = pokemonStore.getEvolveByName(pokemon_info.名称);

    // 更新精灵捕获位置
    appearAreas = getAppearAreas(pokemon_info.old_pokemon_name || pokemon_info.名称);

    // 更新进化奇石状态
    pokemon_info.canUseEvolutionStone = canUseStoneFinalForms.includes(pokemon_info.名称.replace(/（.*）/, '').trim());

    // 重新计算能力值
    nextTick(() => {
        updateAllAbilities();
    });
}
// 跳转进化后形态
const handleNextStageInfo = (nextStageName: string | undefined) => {
    const id = pokemonStore.getPokemonIdByName(nextStageName)
    handlePageChange(Number(id))
}

// 新增：根据宝可梦名反查所有出现地区和方式
const getAppearAreas = (pokemonName: string) => {
    const areas = getAreas();
    const result: Array<{ area: string, method: string, level: string | number, rate: string }> = [];
    for (const area in areas) {
        for (const method in areas[area]) {
            const list = areas[area][method as keyof typeof areas[typeof area]];
            if (Array.isArray(list)) {
                list.forEach((item: any) => {
                    if (item.name === pokemonName) {
                        result.push({
                            area,
                            method,
                            level: item.level,
                            rate: item.rate
                        });
                    }
                });
            }
        }
    }
    const seenIds = new Set<string>();
    return result.filter(r => {
        if (seenIds.has(r.area)) {
            return false;
        } else {
            seenIds.add(r.area);
            return true;
        }
    });
};

// 跳转到地区详情
const handleAreaJump = (areaName: string) => {
    const areas = getAreas();
    areaStore.areaName = areaName;
    areaStore.sharedData = areas[areaName];
    $router.push('/areas/area_info');
};
</script>

<style scoped lang="scss">
.pokemon-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    min-height: 100vh;
}

.page-container {
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
}

.page-content {
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page-indicator {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;
    pointer-events: none;
}

.indicator-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.indicator-dot.active {
    background-color: #3498db;
    border-color: #2980b9;
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.4);
}

/* 拖拽时的视觉反馈 */
.pokemon-info:active {
    cursor: grabbing;
}

.pokemon-info {
    cursor: grab;
}

/* 拖拽时的阴影效果 */
.page-container {
    filter: drop-shadow(0 0 0 transparent);
    transition: filter 0.3s ease;
}

.page-container.dragging {
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
}

/* 确保所有容器都有正确的对齐 */
.pokemon-title,
.details,
.weaknesses-container,
.pokemon-method,
.pokemon-belongings,
.pokemon-moves {
    box-sizing: border-box;
    display: block;
}

/* 响应式优化 */
@media (max-width: 768px) {

    .pokemon-title,
    .details,
    .weaknesses-container,
    .pokemon-method,
    .pokemon-belongings,
    .pokemon-moves {
        width: 98%;
        margin: 10px auto;
    }
}

@media (max-width: 480px) {

    .pokemon-title,
    .details,
    .weaknesses-container,
    .pokemon-method,
    .pokemon-belongings,
    .pokemon-moves {
        width: 100%;
        margin: 5px auto;
        padding: 15px;
    }
}

.pokemon-title-wrapper {
    width: 95%;
    margin: 3% auto 0;
    position: relative;
    overflow: visible;
}

.pokemon-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(58, 50, 50, 0.1);
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 1)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 1)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 1)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 1)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .pokemon-title-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .pokemon-name {
            margin-bottom: 10%;

            .title {
                font-size: 1.6em;
                color: white;
                font-weight: bold;
                font-family: "Times New Roman", Times, serif;
            }

            .subtitle {
                font-size: 1em;
                color: white;
            }
        }

        .pokemon-type {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .type,
            .ability {
                display: flex;
                gap: 10px;

                div {
                    flex: 1;
                    min-width: 30px;
                    text-align: center;
                    background-color: #f0f0f0;
                    color: #333;
                    padding: 5px 10px;
                    border-radius: 5px;
                    transition: all 0.3s ease;

                    /* 移除移动端点击放大效果 */
                }

                .ability-box {
                    white-space: nowrap;
                    min-width: 84px;
                    padding: 10px;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                    cursor: pointer;

                    /* 移除移动端点击放大效果 */
                }
            }
        }
    }

    .pokemon-title-right {
        img {
            width: 150px;
        }
    }
}

.details {
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    padding: 15px;
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 0.9)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 0.9)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 0.9)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 0.9)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .pokemon-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        gap: 10px;

        .grade,
        .nature {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;

            p {
                font-size: clamp(16px, 4vw, 20px);
                font-weight: bold;
                white-space: nowrap;
            }
        }

        .grade {
            flex: 1;

            .input {
                width: clamp(60px, 40%, 100px);
                font-size: clamp(14px, 3.5vw, 18px);
            }
        }

        .nature {
            flex: 1;
            justify-content: flex-end;

            :deep(.el-button) {
                width: clamp(80px, 60%, 120px);
                font-size: clamp(14px, 3.5vw, 18px);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .pokemon-stats-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        padding: 10px;

        @media screen and (max-width: 480px) {
            gap: 4px;
        }

        .pokemon-base-stats,
        .pokemon-individual-values,
        .pokemon-effort-values,
        .pokemon-ability-values {
            display: flex;
            flex-direction: column;
            gap: 8px;

            p {
                margin: 0;
                padding: 8px 4px;
                font-size: clamp(12px, 3vw, 16px);
                font-weight: bold;
                text-align: center;
                background-color: #f0f0f0;
                border-radius: 5px;
                white-space: nowrap;
            }

            div {
                margin: 0;
                padding: 8px 4px;
                font-size: clamp(11px, 2.8vw, 14px);
                text-align: center;
                background-color: #f0f0f0;
                border-radius: 5px;
                min-height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;

                &.editable-div {
                    cursor: text;
                    transition: background-color 0.2s;
                    /* user-select: text;
                    -webkit-user-select: text;
                    -moz-user-select: text;
                    -ms-user-select: text;
                    pointer-events: auto; */
                    /* 确保可以点击和输入 */

                    &:focus {
                        background-color: #e8e8e8;
                        outline: none;
                    }

                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }
        }
    }
}

// 添加媒体查询以适应不同屏幕尺寸
@media screen and (max-width: 360px) {
    .details {
        padding: 10px;

        .pokemon-stats-container {
            gap: 4px;

            .pokemon-base-stats,
            .pokemon-individual-values,
            .pokemon-effort-values,
            .pokemon-ability-values {

                p,
                div {
                    padding: 6px 2px;
                    font-size: clamp(10px, 2.5vw, 12px);
                }
            }
        }
    }
}

// 添加横屏支持
@media screen and (orientation: landscape) {
    .details {
        max-width: 800px;
        margin: 10px auto;

        .pokemon-stats-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }
    }
}

.weaknesses-container {
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px auto;
    font-size: 0.9em;
    color: #333;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 0.8)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 0.8)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 0.8)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 0.8)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .weaknesses-header {
        padding-bottom: 10px;
        text-align: center;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
        font-size: 1.2em;
    }

    .weaknesses-content {
        padding-top: 10px;

        .weaknesses-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
        }

        .weaknesses-item {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease;

            /* 移除移动端点击放大效果 */

            .weaknesses-type {
                text-align: center;
                font-weight: bold;
                padding: 3px 5px;
                color: white;
            }

            .weaknesses-value {
                text-align: center;
                padding: 5px 10px;
                font-size: 0.7em;
                background-color: #f9f9f9;
                font-weight: bold;
            }
        }
    }
}

.pokemon-method {
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px auto;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 0.7)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 0.7)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 0.7)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 0.7)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .method-header {
        padding-bottom: 10px;
        text-align: center;
        font-weight: bold;
        border-bottom: 2px solid rgb(31, 179, 193);
        font-size: 18px;
    }

    .method-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        gap: 10px;
        padding-top: 15px;

        .method-name {
            display: flex;
            align-items: center;
            border-radius: 8px;
            overflow: hidden;

        }

        .method-text {
            flex-grow: 1;
            text-align: center;
            padding: 8px 12px;
            font-weight: bold;
            color: #2c3e50;
        }
    }
}

.pokemon-belongings {
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px auto;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 0.6)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 0.6)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 0.6)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 0.6)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .belongings-header {
        padding-bottom: 10px;
        text-align: center;
        font-weight: bold;
        border-bottom: 2px solid yellowgreen;
        font-size: 18px;
        color: #2c3e50;
    }

    .belongings-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 15px;

        .belongings-item {
            display: flex;
            align-items: center;
            background-color: #f8f9fa;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;

            /* 移除移动端点击放大效果 */
            &:hover {
                background-color: #e3f2fd;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }

            .belongings-name {
                flex-grow: 1;
                text-align: center;
                padding: 8px 12px;
                font-weight: bold;
                color: #2c3e50;
            }
        }
    }
}

.pokemon-moves {
    width: 95%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px auto;
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 18px;
        background: conic-gradient(from 0deg,
                transparent 0deg,
                var(--primary-color, rgba(78, 205, 78, 0.6)) 45deg,
                var(--secondary-color, rgba(34, 139, 34, 0.6)) 90deg,
                transparent 135deg,
                var(--primary-color, rgba(78, 205, 78, 0.6)) 180deg,
                var(--secondary-color, rgba(34, 139, 34, 0.6)) 225deg,
                transparent 270deg,
                transparent 360deg);
        animation: rotate 2.5s linear infinite;
        z-index: 1;
    }

    /* 内层背景 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: inherit;
        z-index: 2;
    }

    /* 确保内容在流光边框之上 */
    >* {
        position: relative;
        z-index: 3;
    }

    .moves-header {
        padding-bottom: 10px;
        text-align: center;
        font-weight: bold;
        border-bottom: 2px solid #3498db;
        font-size: 18px;
        color: #2c3e50;
    }

    .moves-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 15px;

        .moves-item {
            display: flex;
            align-items: center;
            background-color: #f8f9fa;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;

            /* 移除移动端点击放大效果 */

            .moves-type {
                background-color: #3498db;
                color: white;
                text-align: center;
                font-weight: bold;
                padding: 8px 12px;
                min-width: 70px;
            }

            .moves-name {
                flex-grow: 1;
                text-align: center;
                padding: 8px 12px;
                font-weight: bold;
                color: #2c3e50;
            }

            // 根据学习等级添加不同颜色
            &-early {
                .moves-type {
                    background-color: #2ecc71; // 绿色
                }
            }

            &-mid {
                .moves-type {
                    background-color: #f39c12; // 橙色
                }
            }

            &-late {
                .moves-type {
                    background-color: #e74c3c; // 红色
                }
            }
        }
    }

    // 响应式设计
    @media (max-width: 768px) {
        .moves-content {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
    }

    @media (max-width: 480px) {
        .moves-content {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
}

.ability-info-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;

    .ability-title {
        font-size: 16px;
        font-weight: bold;
        color: #562af4;
        margin-bottom: 5px;
    }

}

.pokemon-method {
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px auto;
}

.evolution-steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 15px;
}

.evolution-step {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.evolution-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pokemon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
}

.pokemon-image {
    width: 18vw;
    padding: 3px;
    object-fit: contain;
    border: 4px solid transparent;
    z-index: 1;
    border-radius: 50%;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right, #f06, #4a90e2);
    position: relative;
    overflow: hidden;

    /* 流光边框效果 */
    &::before {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        border-radius: 50%;
        background: conic-gradient(from 0deg,
                transparent,
                rgba(78, 205, 78, 0.8),
                rgba(34, 139, 34, 0.8),
                transparent,
                rgba(78, 205, 78, 0.8),
                rgba(34, 139, 34, 0.8),
                transparent);
        animation: rotate 3s linear infinite;
        z-index: -1;
    }

    /* 内层边框 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: inherit;
        z-index: 1;
    }
}

.pokemon-name {
    margin-top: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #34495e;
}

.evolution-condition {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 8px;
}

.condition-bubble {
    background-color: #e3f2fd;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: #1976d2;
    margin: 5px 0;
    display: flex;
    align-items: center;
    gap: 5px;
}

.evolution-arrow {
    color: #95a5a6;
    font-size: 1.5rem;
    margin: 10px 0;
}

.area-jump-btn {
    margin-left: 10px;
    padding: 2px 10px;
    background: linear-gradient(90deg, #009fca, #fc5948, #313862);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95em;
    transition: background 0.2s;
}

.area-jump-btn:hover {
    background: linear-gradient(90deg, #fc5948, #009fca, #313862);
}

/* 流光动画 */
@keyframes shimmer {
    0% {
        left: -100%;
    }

    100% {
        left: 100%;
    }
}

/* 属性流光效果 */
@keyframes typeShimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

/* 旋转动画 */
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* 增强流光效果 */
@keyframes shimmer {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* 移除页面加载动画以优化移动端性能 */

/* 属性流光边框颜色 */
.pokemon-title {

    /* 草属性 */
    &.border-草-草 {
        --primary-color: rgba(78, 205, 78, 0.9);
        --secondary-color: rgba(34, 139, 34, 0.9);
    }

    &.border-草-毒 {
        --primary-color: rgba(78, 205, 78, 0.9);
        --secondary-color: rgba(128, 0, 128, 0.9);
    }

    /* 火属性 */
    &.border-火-火 {
        --primary-color: rgba(255, 69, 0, 0.9);
        --secondary-color: rgba(255, 140, 0, 0.9);
    }

    &.border-火-飞行 {
        --primary-color: rgba(255, 69, 0, 0.9);
        --secondary-color: rgba(135, 206, 235, 0.9);
    }

    /* 水属性 */
    &.border-水-水 {
        --primary-color: rgba(0, 191, 255, 0.9);
        --secondary-color: rgba(0, 100, 200, 0.9);
    }

    &.border-水-冰 {
        --primary-color: rgba(0, 191, 255, 0.9);
        --secondary-color: rgba(173, 216, 230, 0.9);
    }

    /* 电属性 */
    &.border-电-电 {
        --primary-color: rgba(255, 255, 0, 0.9);
        --secondary-color: rgba(255, 215, 0, 0.9);
    }

    /* 超能力属性 */
    &.border-超能力-超能力 {
        --primary-color: rgba(186, 85, 211, 0.9);
        --secondary-color: rgba(138, 43, 226, 0.9);
    }

    /* 格斗属性 */
    &.border-格斗-格斗 {
        --primary-color: rgba(205, 92, 92, 0.9);
        --secondary-color: rgba(220, 20, 60, 0.9);
    }

    /* 毒属性 */
    &.border-毒-毒 {
        --primary-color: rgba(128, 0, 128, 0.9);
        --secondary-color: rgba(75, 0, 130, 0.9);
    }

    /* 地面属性 */
    &.border-地面-地面 {
        --primary-color: rgba(160, 82, 45, 0.9);
        --secondary-color: rgba(139, 69, 19, 0.9);
    }

    /* 飞行属性 */
    &.border-飞行-飞行 {
        --primary-color: rgba(135, 206, 235, 0.9);
        --secondary-color: rgba(70, 130, 180, 0.9);
    }

    /* 虫属性 */
    &.border-虫-虫 {
        --primary-color: rgba(154, 205, 50, 0.9);
        --secondary-color: rgba(107, 142, 35, 0.9);
    }

    /* 岩石属性 */
    &.border-岩石-岩石 {
        --primary-color: rgba(169, 169, 169, 0.9);
        --secondary-color: rgba(105, 105, 105, 0.9);
    }

    /* 幽灵属性 */
    &.border-幽灵-幽灵 {
        --primary-color: rgba(75, 0, 130, 0.9);
        --secondary-color: rgba(25, 25, 112, 0.9);
    }

    /* 龙属性 */
    &.border-龙-龙 {
        --primary-color: rgba(72, 61, 139, 0.9);
        --secondary-color: rgba(25, 25, 112, 0.9);
    }

    /* 恶属性 */
    &.border-恶-恶 {
        --primary-color: rgba(47, 79, 79, 0.9);
        --secondary-color: rgba(25, 25, 25, 0.9);
    }

    /* 钢属性 */
    &.border-钢-钢 {
        --primary-color: rgba(192, 192, 192, 0.9);
        --secondary-color: rgba(169, 169, 169, 0.9);
    }

    /* 妖精属性 */
    &.border-妖精-妖精 {
        --primary-color: rgba(255, 182, 193, 0.9);
        --secondary-color: rgba(255, 105, 180, 0.9);
    }

    /* 冰属性 */
    &.border-冰-冰 {
        --primary-color: rgba(173, 216, 230, 0.9);
        --secondary-color: rgba(135, 206, 250, 0.9);
    }

    /* 一般属性 */
    &.border-一般-一般 {
        --primary-color: rgba(169, 169, 169, 0.9);
        --secondary-color: rgba(192, 192, 192, 0.9);
    }
}

/* 为其他卡片添加相同的属性边框颜色 */
.details,
.weaknesses-container,
.pokemon-method,
.pokemon-belongings,
.pokemon-moves {

    /* 草属性 */
    &.border-草-草 {
        --primary-color: rgba(78, 205, 78, 0.8);
        --secondary-color: rgba(34, 139, 34, 0.8);
    }

    &.border-草-毒 {
        --primary-color: rgba(78, 205, 78, 0.8);
        --secondary-color: rgba(128, 0, 128, 0.8);
    }

    /* 火属性 */
    &.border-火-火 {
        --primary-color: rgba(255, 69, 0, 0.8);
        --secondary-color: rgba(255, 140, 0, 0.8);
    }

    &.border-火-飞行 {
        --primary-color: rgba(255, 69, 0, 0.8);
        --secondary-color: rgba(135, 206, 235, 0.8);
    }

    /* 水属性 */
    &.border-水-水 {
        --primary-color: rgba(0, 191, 255, 0.8);
        --secondary-color: rgba(0, 100, 200, 0.8);
    }

    &.border-水-冰 {
        --primary-color: rgba(0, 191, 255, 0.8);
        --secondary-color: rgba(173, 216, 230, 0.8);
    }

    /* 电属性 */
    &.border-电-电 {
        --primary-color: rgba(255, 255, 0, 0.8);
        --secondary-color: rgba(255, 215, 0, 0.8);
    }

    /* 超能力属性 */
    &.border-超能力-超能力 {
        --primary-color: rgba(186, 85, 211, 0.8);
        --secondary-color: rgba(138, 43, 226, 0.8);
    }

    /* 格斗属性 */
    &.border-格斗-格斗 {
        --primary-color: rgba(205, 92, 92, 0.8);
        --secondary-color: rgba(220, 20, 60, 0.8);
    }

    /* 毒属性 */
    &.border-毒-毒 {
        --primary-color: rgba(128, 0, 128, 0.8);
        --secondary-color: rgba(75, 0, 130, 0.8);
    }

    /* 地面属性 */
    &.border-地面-地面 {
        --primary-color: rgba(160, 82, 45, 0.8);
        --secondary-color: rgba(139, 69, 19, 0.8);
    }

    /* 飞行属性 */
    &.border-飞行-飞行 {
        --primary-color: rgba(135, 206, 235, 0.8);
        --secondary-color: rgba(70, 130, 180, 0.8);
    }

    /* 虫属性 */
    &.border-虫-虫 {
        --primary-color: rgba(154, 205, 50, 0.8);
        --secondary-color: rgba(107, 142, 35, 0.8);
    }

    /* 岩石属性 */
    &.border-岩石-岩石 {
        --primary-color: rgba(169, 169, 169, 0.8);
        --secondary-color: rgba(105, 105, 105, 0.8);
    }

    /* 幽灵属性 */
    &.border-幽灵-幽灵 {
        --primary-color: rgba(75, 0, 130, 0.8);
        --secondary-color: rgba(25, 25, 112, 0.8);
    }

    /* 龙属性 */
    &.border-龙-龙 {
        --primary-color: rgba(72, 61, 139, 0.8);
        --secondary-color: rgba(25, 25, 112, 0.8);
    }

    /* 恶属性 */
    &.border-恶-恶 {
        --primary-color: rgba(47, 79, 79, 0.8);
        --secondary-color: rgba(25, 25, 25, 0.8);
    }

    /* 钢属性 */
    &.border-钢-钢 {
        --primary-color: rgba(192, 192, 192, 0.8);
        --secondary-color: rgba(169, 169, 169, 0.8);
    }

    /* 妖精属性 */
    &.border-妖精-妖精 {
        --primary-color: rgba(255, 182, 193, 0.8);
        --secondary-color: rgba(255, 105, 180, 0.8);
    }

    /* 冰属性 */
    &.border-冰-冰 {
        --primary-color: rgba(173, 216, 230, 0.8);
        --secondary-color: rgba(135, 206, 250, 0.8);
    }

    /* 一般属性 */
    &.border-一般-一般 {
        --primary-color: rgba(169, 169, 169, 0.8);
        --secondary-color: rgba(192, 192, 192, 0.8);
    }
}
</style>