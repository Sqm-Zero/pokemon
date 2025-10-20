<template>
    <Top title="技能信息" router="/move" icon="info" color="linear-gradient(90deg, #ffffff, #562af4, #f59e24)"></Top>

    <div class="m_move_info" :style="{ background: getColor(move.type) }" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <div v-if="move" class="move-container">
            <h2 class="move-title">{{ move.move }}</h2>
            <div class="move_info">
                <div class="value">{{ move.description }}</div>
            </div>
            <div class="move_header">
                <div class="info-card">
                    <p class="label">属性</p>
                    <div class="value type-badge" :style="{ background: getColor(move.type) }">
                        {{ move.type }}
                    </div>
                </div>
                <div class="info-card">
                    <p class="label">分类</p>
                    <div class="value category-badge">{{ move.category }}</div>
                </div>
            </div>
            <div class="move-info" style="margin-top: 20px;">
                <div class="power_info">
                    <p class="label">威力</p>
                    <div class="value type-badge" style="color: black;">
                        {{ move.power || '——' }}
                    </div>
                </div>
                <div class="accuracy_info">
                    <p class="label">命中率</p>
                    <div class="value type-badge" style="color: black;">
                        {{ move.accuracy == '101' ? '——' : move.accuracy }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>

    <!-- 切换标签 -->
    <div class="tab-container">
        <div class="tab" :class="{ active: currentTab === 'level' }" @click="currentTab = 'level'">
            等级学习
        </div>
        <div class="tab" :class="{ active: currentTab === 'egg' }" @click="currentTab = 'egg'">
            蛋招式
        </div>
    </div>

    <!-- 宝可梦列表 -->
    <div class="pokemon-list-container">
        <div class="pokemon-list-header">
            <h3>可学习该技能的宝可梦</h3>
        </div>
        <div class="pokemon-list">
            <div class="pokemon-item" v-for="pokemon in currentPokemonList" @click="handlePokemonInfo(pokemon)"
                :key="pokemon.id">
                <div class="pokemon-avatar">
                    <img :src="getImageSrc(pokemon.id)" :alt="pokemon.name" class="pokemon-image" />
                </div>
                <div class="pokemon-info">
                    <span class="pokemon-name">{{ processPokemonName(pokemon.name) }}</span>
                    <div v-if="currentTab === 'level'" class="pokemon-level-badge">
                        Lv.{{ pokemon.learnLevel }}
                    </div>
                    <div v-else class="pokemon-egg-badge">蛋招</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';
import { reactive, ref, computed } from 'vue'
// 获取精灵仓库
const pokemonStore = usePokemonStore();
// 定义响应式数据
let move = reactive({
    "accuracy": "100",
    "category": "物理",
    "description": "使用长长的尾巴或手等拍打对手进行攻击。",
    "move": "拍击",
    "move_id": "1",
    "power": "40",
    "type": "一般"
})
move = pokemonStore.Move;
// 获取属性颜色
const colorMap = pokemonStore.colorMap
// 路由
let $router = useRouter()
const getColor = (type: any) => colorMap[type] || '#BBBBAA'

// 获取 Pokemon 图片的 URL
const getImageSrc = (编号: String) => {
    let imageSrc = Number(编号)
    return new URL(`/src/assets/images/pokemonList_images/${imageSrc}.png`, import.meta.url).href;
};

// 获取可学习该技能的宝可梦
let pokemon_list: any = ref([])
pokemon_list.value = pokemonStore.getPokemonByMoveName(move.move)

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
    '龙卷云': ['灵兽形态'],
    '雷电云': ['灵兽形态'],
    '土地云': ['灵兽形态'],
    '超能妙喵': ['雌性'],
    '花叶蒂': ['', '', '', '', '永恒之花']
};

// 在顶部导入后添加
const currentTab = ref<'level' | 'egg'>('level');

// 计算当前显示的列表
const currentPokemonList = computed<any[]>(() => {
    if (!move.move) return [];
    return currentTab.value === 'level'
        ? pokemonStore.getPokemonByMoveName(move.move)
        : pokemonStore.getPokemonByEggMoveName(move.move);
});
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
// 跳转到精灵页面
const handlePokemonInfo = (pokemon: any) => {
    if (!isNaN(Number(pokemon.id)) && !pokemon.id.includes('_')) {
        pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(String(pokemon.id).padStart(3, '0'))
    } else {
        // 保持原编号     
        pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(pokemon.id)
    }
    $router.push('/pokemon/info')
}

// 触摸事件
let startX = 0; // 起始触摸点的 X 坐标
let endX = 0;   // 结束触摸点的 X 坐标
let isDragging = false; // 是否正在进行拖动

const MIN_SWIPE_DISTANCE = 150; // 设置最小滑动距离，单位为像素

// 触摸开始
const handleTouchStart = (event: TouchEvent) => {
    startX = event.touches[0].clientX; // 获取触摸起点
    isDragging = false; // 初始化拖动状态
};

// 触摸移动
const handleTouchMove = (event: TouchEvent) => {
    endX = event.touches[0].clientX; // 获取触摸移动时的终点
    const deltaX = endX - startX; // 计算滑动距离
    if (Math.abs(deltaX) > MIN_SWIPE_DISTANCE) {
        isDragging = true; // 标记正在拖动
    }
};

const handleTouchEnd = () => {
    if (!isDragging) return; // 如果没有发生拖动，则直接返回

    const deltaX = endX - startX; // 计算滑动距离
    if (deltaX < -MIN_SWIPE_DISTANCE) { // 左滑
        console.log('检测到左滑事件');
        pokemon_list.value = []
        loadNextPokemonPage(); // 加载下一页
    } else if (deltaX > MIN_SWIPE_DISTANCE) { // 右滑
        console.log('检测到右滑事件');
        pokemon_list.value = []
        loadPreviousPokemonPage(); // 加载上一页
    }

    isDragging = false; // 重置拖动状态
};

function loadNextPokemonPage() {
    console.log('加载下一页的精灵');
    // 实现具体的逻辑，例如请求新的数据
    Object.assign(move, pokemonStore.getMOveById(Number(move.move_id) + 1));
    pokemon_list.value = pokemonStore.getPokemonByMoveName(move.move)
}

function loadPreviousPokemonPage() {
    console.log('加载上一页的精灵');
    // 实现具体的逻辑，例如请求新的数据
    Object.assign(move, pokemonStore.getMOveById(Number(move.move_id) - 1));
    pokemon_list.value = pokemonStore.getPokemonByMoveName(move.move)
}
</script>

<style scoped lang="scss">
.m_move_info {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin: 16px;
    border: 1px solid #e0e6f0;

    .move-title {
        font-size: 22px;
        font-weight: 700;
        color: #1a2b4d;
        margin-bottom: 20px;
        text-align: center;
        letter-spacing: 0.5px;
    }

    .move_info {
        background-color: #f8fbff;
        padding: 16px;
        border-radius: 12px;
        margin: 16px 0;
        font-size: 15px;
        color: #333;
        line-height: 1.5;
    }

    .move-info,
    .move_header {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;

        .accuracy_info,
        .power_info,
        .info-card {
            background: #f8fbff;
            padding: 14px 18px;
            border-radius: 12px;
            min-width: 110px;
            text-align: center;
            border: 1px solid #e6f0ff;

            .label {
                font-size: 13px;
                color: #6c757d;
                margin-bottom: 6px;
                font-weight: 600;
            }

            .value {
                font-size: 16px;
                font-weight: 700;

                &.type-badge {
                    color: white;
                    padding: 5px 12px;
                    border-radius: 20px;
                    display: inline-block;
                    min-width: 60px;
                }

                &.category-badge {
                    color: #2c3e50;
                    padding: 5px 12px;
                    border-radius: 20px;
                    background: #e9ecef;
                    display: inline-block;
                    min-width: 60px;
                }
            }
        }
    }

    .loading {
        text-align: center;
        padding: 40px;
        color: #6c757d;
        font-size: 16px;
    }
}

/* 切换标签 */
.tab-container {
    display: flex;
    justify-content: center;
    gap: 2px;
    margin: 12px auto;
    max-width: 420px;
    background: #f0f5ff;
    border-radius: 12px;
    padding: 4px;
    width: fit-content;
}

.tab {
    padding: 8px 24px;
    font-size: 15px;
    font-weight: 600;
    color: #5a6b82;
    border-radius: 10px;
    cursor: pointer;
    transition: none;
    user-select: none;
}

.tab.active {
    background: #409eff;
    color: white;
    box-shadow: 0 2px 6px rgba(64, 158, 255, 0.2);
}

.pokemon-list-container {
    background-color: #f9fbfd;
    border-radius: 12px;
    padding: 16px;
    margin: 0 16px 20px;

    .pokemon-list-header {
        text-align: center;
        margin-bottom: 16px;

        h3 {
            color: #1a2b4d;
            font-size: 16px;
            font-weight: 700;
        }
    }

    .pokemon-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 14px;
    }

    .pokemon-item {
        background-color: white;
        border-radius: 12px;
        padding: 14px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #eef4ff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
    }

    .pokemon-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 8px;
        border: 2px solid #e0eaff;
        background: #f8fbff;
    }

    .pokemon-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: white;
    }

    .pokemon-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 4px;
    }

    .pokemon-name {
        font-weight: 600;
        font-size: 14px;
        color: #2c3e50;
        text-align: center;
        margin-bottom: 4px;
        line-height: 1.3;
    }

    .pokemon-level-badge,
    .pokemon-egg-badge {
        background-color: #409eff;
        color: white;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .pokemon-egg-badge {
        background-color: #ff9800;
    }
}
</style>