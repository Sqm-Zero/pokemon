<template>
    <div v-if="displayedPokemons.length === 0" class="empty_state">
        <div class="empty_icon">🔍</div>
        <h3 class="empty_title">未找到相关宝可梦</h3>
        <p class="empty_description">尝试换个名字或者属性搜索一下吧</p>
        <button class="reset_button" @click="resetFilters">重置筛选</button>
    </div>

    <div
        v-else
        class="pokemon_card"
        v-for="pokemon in displayedPokemons"
        :key="pokemon.编号"
        ref="imageRefs"
        @click="handleClick(pokemon)"
        :style="getCardStyle(pokemon)"
    >
        <div class="pokemon_id">#{{ String(pokemon.编号).padStart(3, '0') }}</div>

        <div class="card_watermark"></div>

        <div class="pokemon_img_container">
            <template v-if="isVisible[pokemon.编号]">
                <img
                    v-if="!imageErrors[pokemon.编号]"
                    :src="getImageSrc(pokemon.编号)"
                    :alt="pokemon.名称"
                    class="pokemon_main_img"
                    :style="{ 'view-transition-name': 'poke-' + pokemon.编号 }"
                    @load="onLoad(pokemon.编号)"
                    @error="onError(pokemon.编号)"
                />
                <div v-else class="error_placeholder">
                    <span>Not Found</span>
                </div>
            </template>

            <div v-else class="placeholder">
                <div class="shimmer"></div>
            </div>
        </div>

        <div class="pokemon_info">
            <span class="pokemon_name">{{ pokemon.名称 }}</span>
            <div class="type_tags">
                <span v-for="t in pokemon.属性" :key="t" class="type_tag">{{ t }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { reqPokemon } from '@/apis/pokemon/index';
import { usePokemonStore } from '@/store/modules/pokemon';
import { isPokemonListHiddenNumberedVariant } from '@/constants/pokemonSpecialForms';
import type { Pokemon } from '@/apis/pokemon/type';

const props = defineProps<{ scrollContainer: any }>();

const imageRefs = ref<any[]>([]);
const isVisible = ref<{ [key: string]: boolean }>({});
const imageErrors = ref<{ [key: string]: boolean }>({});
let observers: { [key: string]: IntersectionObserver | null } = {};

const $router = useRouter();
const pokemonStore = usePokemonStore();

// 获取图片路径
const getImageSrc = (编号: any) => {
    return new URL(`/src/assets/images/pokemonList_images/${Number(编号)}.png`, import.meta.url)
        .href;
};

// --- 核心逻辑：View Transition 动画 ---
const handleClick = (pokemon: Pokemon) => {
    pokemonStore.Pokemon = pokemon;
    if (props.scrollContainer) {
        pokemonStore.scrollPosition = props.scrollContainer.scrollTop;
    }

    // 检查浏览器是否支持原生动画 API
    if (!document.startViewTransition) {
        $router.push('/pokemon/info');
        return;
    }

    // 执行带动画的跳转
    document.startViewTransition(async () => {
        await $router.push('/pokemon/info');
        await nextTick();
    });
};

// --- 懒加载逻辑 ---
const loadImage = (编号: string) => (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isVisible.value[编号] = true;
            if (observers[编号]) {
                observers[编号]!.disconnect();
                delete observers[编号];
            }
        }
    });
};

const resetObservers = async () => {
    destroyObservers();
    await nextTick();
    imageRefs.value.forEach((el, index) => {
        const pokemon = displayedPokemons.value[index];
        if (el && pokemon && !isVisible.value[pokemon.编号]) {
            const observer = new IntersectionObserver(loadImage(pokemon.编号), {
                root: props.scrollContainer,
                rootMargin: '100px'
            });
            observer.observe(el);
            observers[pokemon.编号] = observer;
        }
    });
};

const destroyObservers = () => {
    Object.values(observers).forEach(obs => obs?.disconnect());
    observers = {};
};

// --- 计算属性 ---
const displayedPokemons = computed(() => {
    let list =
        pokemonStore.type === '进化奇石' ? pokemonStore.getPokemonListByEvoStone() : reqPokemon();

    const nameSet = new Set(list.map(p => p.名称));

    return list.filter(p => {
        if (isPokemonListHiddenNumberedVariant(p.名称, nameSet)) {
            return false;
        }
        const nameMatch = !pokemonStore.pokemonQuery || p.名称.includes(pokemonStore.pokemonQuery);
        const typeMatch =
            !pokemonStore.type ||
            pokemonStore.type === '进化奇石' ||
            p.属性.includes(pokemonStore.type);
        return nameMatch && typeMatch;
    });
});

watch(displayedPokemons, () => resetObservers(), { immediate: true });

onMounted(() => {
    pokemonStore.PokemonList = reqPokemon();
    resetObservers();
});

onBeforeUnmount(() => destroyObservers());

const onLoad = (id: string) => {};
const onError = (id: string) => (imageErrors.value[id] = true);
const resetFilters = () => {
    pokemonStore.pokemonQuery = '';
    pokemonStore.setType('');
    pokemonStore.getPokemonListByType('');
};

// 动态卡片样式
const getCardStyle = (pokemon: Pokemon) => {
    const color = pokemonStore.colorMap[pokemon.属性[0]] || '#808080';
    return {
        '--card-color': color,
        background: `linear-gradient(145deg, ${color}ee, ${color}aa)`
    };
};
</script>

<style scoped lang="scss">
.pokemon_card {
    position: relative;
    height: 180px;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.pokemon_id {
    position: absolute;
    top: 10px;
    right: 12px;
    font-size: 20px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.3);
    font-style: italic;
}

.card_watermark {
    position: absolute;
    right: -10%;
    bottom: -10%;
    width: 100px;
    height: 100px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 0 C 22.4 0 0 22.4 0 50 C 0 77.6 22.4 100 50 100 C 77.6 100 100 77.6 100 50 C 100 22.4 77.6 0 50 0 Z M 50 10 L 50 45 L 90 45 C 88 26 74 12 50 10 Z M 10 45 L 50 45 L 50 10 C 26 12 12 26 10 45 Z" fill="white" opacity="0.15"/></svg>')
        no-repeat;
    transition: transform 0.6s ease;
}

.pokemon_img_container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .pokemon_main_img {
        width: 90px;
        height: 90px;
        object-fit: contain;
        filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
        transition: transform 0.3s ease;
    }
}

.pokemon_info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1;

    .pokemon_name {
        color: white;
        font-weight: bold;
        font-size: 16px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .type_tags {
        display: flex;
        gap: 4px;

        .type_tag {
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 10px;
            color: white;
            backdrop-filter: blur(4px);
        }
    }
}

/* 占位符动画 */
.placeholder {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    .shimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        animation: shimmer 1.5s infinite;
    }
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

.empty_state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 50px 0;
    .empty_icon {
        font-size: 50px;
        margin-bottom: 10px;
    }
    .reset_button {
        margin-top: 15px;
        padding: 8px 20px;
        border-radius: 20px;
        border: none;
        background: #3498db;
        color: white;
        cursor: pointer;
    }
}
</style>
