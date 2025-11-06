<template>
    <div class="m_prop">
        <Top title="道具列表" icon="pokemon" @icon_func="showTypeFilter = true"
            color="linear-gradient(90deg, #ffffff, #8B4513, #DAA520)"></Top>
        <Search :query="propStore.propSearchQuery" @search="handleSearch"></Search>
        <div class="prop_header" ref="scrollContainer">
            <div class="prop_item" @click="handlePropInfo(item)" v-for="(item, index) in filteredPropList" :key="index">
                <div class="index">{{ index + 1 }}</div>
                <div class="prop_name">{{ item.name }}</div>
                <div class="prop_type" :style="{ background: getPropTypeColor(item.name) }">
                    {{ getPropType(item.name) }}
                </div>
            </div>
        </div>

        <!-- 道具类型筛选抽屉 -->
        <el-drawer v-model="showTypeFilter" direction="ttb" size="50%">
            <div class="drawer-content">
                <div class="drawer-list">
                    <div v-for="(item, index) in propTypes" :key="index" @click="toggleType(item)" class="drawer-item"
                        :class="{ 'active': selectedTypes.includes(item) }" :style="getAttributeStyle(item)">
                        {{ item }}
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { reqPropsList } from '@/apis/props';
import type { Prop } from '@/apis/props/type';
import { usePokemonStore } from '@/store/modules/pokemon';
import { usePropStore } from '@/store/modules/prop';
import { useRouter } from 'vue-router';

const $router = useRouter();
const pokemonStore = usePokemonStore();
const showTypeFilter = ref(false);
const selectedTypes = ref<string[]>([]);

// 道具类型列表
const propTypes = [
    '精灵球', '进化道具', '树果', '宝石', '化石', '徽章', '其他道具'
];

// 获取所有道具数据
const PropList: Prop[] = reqPropsList();
// const query = ref('');
const propStore = usePropStore();
// 获取道具类型
const getPropType = (propName: string) => {
    if (propName.includes('球')) return '精灵球';
    if (propName.includes('进化石') || propName.includes('进化')) return '进化道具';
    if (propName.includes('树果')) return '树果';
    if (propName.includes('宝石')) return '宝石';
    if (propName.includes('化石')) return '化石';
    if (propName.includes('徽章')) return '徽章';
    return '其他道具';
}

// 获取道具类型颜色
const getPropTypeColor = (propName: string) => {
    const type = getPropType(propName);
    switch (type) {
        case '精灵球':
            return '#4A90E2';
        case '进化道具':
            return '#E74C3C';
        case '树果':
            return '#27AE60';
        case '宝石':
            return '#F39C12';
        case '化石':
            return '#8E44AD';
        case '徽章':
            return '#FFD700';
        default:
            return '#95A5A6';
    }
}

// 搜索处理
function handleSearch(q: string) {
    // query.value = q;
    propStore.propSearchQuery = q;
}

// 切换类型选择
const toggleType = (type: string) => {
    const index = selectedTypes.value.indexOf(type);
    if (index === -1) {
        selectedTypes.value.push(type);
    } else {
        selectedTypes.value.splice(index, 1);
    }
};

// 过滤道具列表
const filteredPropList = computed(() => {
    let filtered = PropList;

    // 应用类型筛选
    if (selectedTypes.value.length > 0) {
        filtered = filtered.filter(prop =>
            selectedTypes.value.includes(getPropType(prop.name))
        );
    }

    // 应用搜索筛选
    const q = propStore.propSearchQuery;
    if (q) {
        filtered = filtered.filter(prop =>
            prop.name.toLowerCase().includes(q.toLowerCase()) ||
            prop.description.toLowerCase().includes(q.toLowerCase()) ||
            getPropType(prop.name).includes(q)
        );
    }

    return filtered;
});

// 获取属性样式
const getAttributeStyle = (item: string) => {
    const isActive = selectedTypes.value.includes(item);
    const colorMap: Record<string, string> = {
        '精灵球': '#4A90E2',
        '进化道具': '#E74C3C',
        '树果': '#27AE60',
        '宝石': '#F39C12',
        '化石': '#8E44AD',
        '徽章': '#FFD700',
        '其他道具': '#95A5A6'
    };

    return {
        background: isActive ? colorMap[item] : '#808080',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        color: isActive ? '#ffffff' : '#e0e0e0',
    }
};

// 滚动容器
const scrollContainer = ref<HTMLElement | null>(null);

// 跳转到道具详情
const handlePropInfo = (item: Prop) => {
    const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    pokemonStore.scrollPosition = Math.max(0, top);
    pokemonStore.Prop = item;
    $router.push('/prop/prop_info');
};

// 监听滚动事件
let _scrollHandler: any = null;
onMounted(() => {
    _scrollHandler = () => {
        const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        pokemonStore.scrollPosition = Math.max(0, top);
    };
    window.addEventListener('scroll', _scrollHandler, { passive: true });
});

onBeforeUnmount(() => {
    if (_scrollHandler) {
        window.removeEventListener('scroll', _scrollHandler);
    }
});
</script>

<style scoped lang="scss">
.m_prop {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;

    .prop_header {
        width: 90%;
        max-width: 800px;

        .prop_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            cursor: pointer;
            transition: transform 0.2s ease;

            &:active {
                transform: scale(0.98);
            }

            .index {
                font-size: 18px;
                font-weight: bold;
                color: #8B4513;
                flex: 0 0 50px;
                text-align: center;
            }

            .prop_name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                flex: 1;
                margin: 0 12px;
            }

            .prop_type {
                font-size: 14px;
                color: #ffffff;
                font-weight: bold;
                border-radius: 20px;
                padding: 6px 12px;
                white-space: nowrap;
            }
        }
    }
}

/* 抽屉内容 */
.drawer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .drawer-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 15px;

        .drawer-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30%;
            height: 40px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }
}

// 响应式适配
@media screen and (max-width: 768px) {
    .drawer-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 480px) {
    .m_prop {
        .prop_header {
            .prop_item {
                padding: 10px;

                .index {
                    font-size: 16px;
                    flex: 0 0 40px;
                }

                .prop_name {
                    font-size: 14px;
                }

                .prop_type {
                    font-size: 12px;
                    padding: 4px 8px;
                }
            }
        }
    }
}
</style>

