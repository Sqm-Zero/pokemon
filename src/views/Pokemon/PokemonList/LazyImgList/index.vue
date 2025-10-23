<template>
    <!-- 空状态 -->
    <div v-if="displayedPokemons.length === 0" class="empty_state">
        <div class="empty_icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h3 class="empty_title">没有找到宝可梦</h3>
        <p class="empty_description">尝试调整搜索条件或筛选器</p>
        <button class="reset_button" @click="resetFilters">重置筛选</button>
    </div>
    
    <!-- 宝可梦卡片列表 -->
    <div v-else class="pokemon_card" v-for="pokemon in displayedPokemons" :key="pokemon.编号" ref="imageRefs" @click="handleClick(pokemon)" :style="getCardBackground(pokemon.属性)">
        <div class="pokemon_img">
            <img v-if="isVisible[pokemon.编号] && !imageErrors[pokemon.编号]" 
                 :src="getImageSrc(pokemon.编号)" 
                 :alt="pokemon.名称" 
                 @load="onLoad(pokemon.编号)"
                 @error="onError(pokemon.编号)">
            <div v-else-if="imageErrors[pokemon.编号]" class="error_placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>图片加载失败</span>
            </div>
            <div v-else class="placeholder">
                <div class="loading-spinner"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { reqPokemon } from '@/apis/pokemon/index'
import { usePokemonStore } from '@/store/modules/pokemon';
import type { Pokemon } from '@/apis/pokemon/type';

// 接收父组件传入的滚动容器引用
const props = defineProps<{
    scrollContainer: any
}>();

const imageRefs = ref<any[]>([]);
const isVisible = ref<{ [key: string]: boolean }>({});
const imageErrors = ref<{ [key: string]: boolean }>({});
let observers: { [key: string]: IntersectionObserver | null } = {};

const $router = useRouter();
const pokemonStore = usePokemonStore();

// 获取 Pokemon 图片的 URL
const getImageSrc = (编号: String) => {
    let imageSrc = Number(编号)
    return new URL(`/src/assets/images/pokemonList_images/${imageSrc}.png`, import.meta.url).href;
};

// 创建一个加载图片的观察器
const loadImage = (编号: string) => (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.value[编号]) {
            isVisible.value[编号] = true;
            // 加载图片后，停止观察
            if (observers[编号]) {
                observers[编号].unobserve(entry.target);
                observers[编号] = null;
            }
        }
    });
};

// 重置所有观察器
const resetObservers = async () => {
    destroyObservers();
    isVisible.value = {};  // 重置所有图片的可见性状态

    imageRefs.value = [];  // 清空 imageRefs

    await nextTick();

    imageRefs.value.forEach((el, index) => {
        if (el) {
            const pokemon = displayedPokemons.value[index];
            if (pokemon && !observers[pokemon.编号]) {  // 仅在观察器不存在时创建新的观察器
                const observer = new IntersectionObserver(loadImage(pokemon.编号));
                observer.observe(el);
                observers[pokemon.编号] = observer;
            }
        }
    });
};

// 销毁所有观察器
const destroyObservers = () => {
    Object.values(observers).forEach(observer => {
        if (observer) {
            observer.disconnect();
        }
    });
    observers = {};
};

// 计算属性：根据查询条件过滤宝可梦
const displayedPokemons = computed(() => {
    let filteredList = [];

    if (pokemonStore.type === '进化奇石') {
        return pokemonStore.getPokemonListByEvoStone();
    }

    if (!pokemonStore.pokemonQuery && !pokemonStore.type) {
        filteredList = reqPokemon();
    } else {
        filteredList = reqPokemon().filter(pokemon => {
            // 根据名称过滤
            const nameMatch = !pokemonStore.pokemonQuery ||
                pokemon.名称.toLowerCase().includes(pokemonStore.pokemonQuery.toLowerCase());

            // 根据属性过滤
            const typeMatch = !pokemonStore.type ||
                pokemon.属性.includes(pokemonStore.type);

            return nameMatch && typeMatch;
        });
    }

    return filteredList;
});

// 监听查询条件变化
watch(() => [pokemonStore.pokemonQuery, pokemonStore.type], async () => {
    await nextTick();  // 确保 displayedPokemons 渲染完成
    resetObservers();
}, { immediate: true });

// 监听显示的宝可梦列表变化
watch(displayedPokemons, () => {
    resetObservers();
}, { immediate: true });

const handleClick = (pokemon: Pokemon) => {
    pokemonStore.Pokemon = pokemon;
    // 使用父组件传入的滚动容器保存位置
    if (props.scrollContainer?.value) {
        pokemonStore.scrollPosition = props.scrollContainer.value.scrollTop;
    }
    $router.push('/pokemon/info');
};

onMounted(() => {
    pokemonStore.PokemonList = reqPokemon();
    // 恢复上次的属性筛选
    if (pokemonStore.lastSelectedType) {
        pokemonStore.restoreLastType();
    }
    resetObservers();
});

onBeforeUnmount(() => {
    destroyObservers();
});

const onLoad = (编号: string) => {
    console.log(`Image ${编号} loaded`);
};

const onError = (编号: string) => {
    console.error(`Failed to load Image ${编号}`);
    imageErrors.value[编号] = true;
};


// 重置筛选器
const resetFilters = () => {
    pokemonStore.pokemonQuery = '';
    pokemonStore.setType('');
    pokemonStore.getPokemonListByType('');
};

// 根据属性获取卡片背景渐变
const getCardBackground = (types: string[]) => {
    const colorMap = pokemonStore.colorMap;
    const primaryColor = colorMap[types[0]] || '#808080';
    const secondaryColor = types[1] ? colorMap[types[1]] : primaryColor;
    
    return {
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
    };
};
</script>

<style scoped lang="scss">
.pokemon_card {
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: box-shadow 0.3s ease;
    aspect-ratio: 1;
    
    &:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
}

.pokemon_img {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        
        .loading-spinner {
            width: 32px;
            height: 32px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid #ffffff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
    }

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
}


@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

// 响应式设计
@media (max-width: 480px) {
    .pokemon_card {
        .pokemon_img {
            img {
                width: 100px;
                height: 100px;
            }
        }
    }
}

// 空状态样式
.empty_state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    grid-column: 1 / -1;
    
    .empty_icon {
        color: #bdc3c7;
        margin-bottom: 20px;
        animation: float 3s ease-in-out infinite;
    }
    
    .empty_title {
        font-size: 24px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 12px;
    }
    
    .empty_description {
        font-size: 16px;
        color: #7f8c8d;
        margin-bottom: 24px;
        line-height: 1.5;
    }
    
    .reset_button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 25px;
        padding: 12px 24px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
        }
        
        &:active {
            transform: translateY(0);
        }
    }
}

// 错误占位符样式
.error_placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.2);
    
    svg {
        margin-bottom: 8px;
    }
    
    span {
        font-size: 10px;
        font-weight: 500;
        text-align: center;
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}
</style>