<template>
    <Top title="道具信息" router="/prop" icon="info" color="linear-gradient(90deg, #ffffff, #8B4513, #DAA520)"></Top>

    <div class="m_prop_info" :style="{ background: '#f8f9fa' }" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <div v-if="prop" class="prop-container">
            <h2 class="prop-title">{{ prop.name }}</h2>
            <div class="prop_info">
                <div class="value">{{ prop.description }}</div>
            </div>
            <div class="prop_header">
                <div class="info-card">
                    <p class="label">道具类型</p>
                    <div class="value type-badge" :style="{ background: getPropTypeColor(prop.name) }">
                        {{ getPropType(prop.name) }}
                    </div>
                </div>
                <div class="info-card">
                    <p class="label">稀有度</p>
                    <div class="value category-badge">{{ getPropRarity(prop.name) }}</div>
                </div>
            </div>
        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>

    <!-- 宝可梦列表 -->
    <div class="pokemon-list-container">
        <div class="pokemon-list-header">
            <h3>可能携带该道具的宝可梦</h3>
        </div>
        <div class="pokemon-list">
            <div class="pokemon-item" v-for="pokemon in pokemonList" @click="handlePokemonInfo(pokemon)"
                :key="pokemon.编号">
                <div class="pokemon-avatar">
                    <img :src="getImageSrc(pokemon.编号)" :alt="pokemon.名称" class="pokemon-image" />
                </div>
                <div class="pokemon-info">
                    <span class="pokemon-name">{{ pokemon.名称 }}</span>
                    <div class="pokemon-prop-badge">
                        {{ getPropProbability(pokemon, prop.name) }}%
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue'
// 获取精灵仓库
const pokemonStore = usePokemonStore();
// 定义响应式数据
let prop = reactive({
    "name": "大师球",
    "description": "必定捕捉野生宝可梦的 性能最好的球， 捕获率×255就是100%。"
})
prop = pokemonStore.Prop;
// 路由
let $router = useRouter()

// 获取 Pokemon 图片的 URL
const getImageSrc = (编号: String) => {
    let imageSrc = Number(编号)
    return new URL(`/src/assets/images/pokemonList_images/${imageSrc}.png`, import.meta.url).href;
};

// 获取携带该道具的宝可梦列表
let pokemonList: any = ref([])
pokemonList.value = pokemonStore.getPokemonByPropName(prop.name)

// 获取道具类型
const getPropType = (propName: string) => {
    if (propName.includes('球')) return '精灵球';
    if (propName.includes('进化石') || propName.includes('进化')) return '进化道具';
    if (propName.includes('树果')) return '树果';
    if (propName.includes('宝石')) return '宝石';
    if (propName.includes('化石')) return '化石';
    if (propName.includes('徽章')) return '徽章';
    if (propName.includes('徽章')) return '徽章';
    if (propName.includes('徽章')) return '徽章';
    return '其他道具';
}

// 获取道具类型颜色
const getPropTypeColor = (propName: string) => {
    if (propName.includes('球')) return '#4A90E2';
    if (propName.includes('进化石') || propName.includes('进化')) return '#E74C3C';
    if (propName.includes('树果')) return '#27AE60';
    if (propName.includes('宝石')) return '#F39C12';
    if (propName.includes('化石')) return '#8E44AD';
    return '#95A5A6';
}

// 获取道具稀有度
const getPropRarity = (propName: string) => {
    if (propName.includes('大师球') || propName.includes('传说')) return '传说';
    if (propName.includes('超级球') || propName.includes('高级球')) return '稀有';
    if (propName.includes('精灵球')) return '普通';
    if (propName.includes('进化石')) return '稀有';
    return '普通';
}

// 获取宝可梦携带该道具的概率
const getPropProbability = (pokemon: any, propName: string) => {
    const item = pokemon.可能携带的物品?.find((item: any) => item.物品 === propName);
    return item ? item.概率 : 0;
}

// 跳转到精灵页面
const handlePokemonInfo = (pokemon: any) => {
    pokemonStore.Pokemon = pokemon;
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
        loadNextPropPage(); // 加载下一页
    } else if (deltaX > MIN_SWIPE_DISTANCE) { // 右滑
        console.log('检测到右滑事件');
        loadPreviousPropPage(); // 加载上一页
    }

    isDragging = false; // 重置拖动状态
};

function loadNextPropPage() {
    console.log('加载下一个道具');
    // 这里可以实现道具列表的切换逻辑
}

function loadPreviousPropPage() {
    console.log('加载上一个道具');
    // 这里可以实现道具列表的切换逻辑
}
</script>

<style scoped lang="scss">
.m_prop_info {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin: 16px;
    border: 1px solid #e0e6f0;

    .prop-title {
        font-size: 22px;
        font-weight: 700;
        color: #1a2b4d;
        margin-bottom: 20px;
        text-align: center;
        letter-spacing: 0.5px;
    }

    .prop_info {
        background-color: #f8fbff;
        padding: 16px;
        border-radius: 12px;
        margin: 16px 0;
        font-size: 15px;
        color: #333;
        line-height: 1.5;
    }

    .prop_header {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;

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
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
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

    .pokemon-prop-badge {
        background-color: #E74C3C;
        color: white;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }
}
</style>

