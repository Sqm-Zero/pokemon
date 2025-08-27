<template>
    <div class="pokemon_img" v-for="pokemon in displayedPokemons" :key="pokemon.编号" ref="imageRefs">
        <img v-if="isVisible[pokemon.编号]" :src="getImageSrc(pokemon.编号)" :alt="pokemon.名称" @load="onLoad(pokemon.编号)"
            @error="onError(pokemon.编号)" @click="handleClick(pokemon)">
        <div v-else class="placeholder"></div>
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
};
</script>

<style scoped lang="scss">
.pokemon_img {
    position: relative;
    padding-bottom: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ffffff;
    max-width: 119px;
    max-height: 119px;

    .placeholder {
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
    }

    img {

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>