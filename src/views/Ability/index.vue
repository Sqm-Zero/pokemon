<template>
    <Top title="特性信息" router="/pokemon/info" icon="info" color="linear-gradient(90deg, #ffffff, #562af4, #f59e24)"></Top>
    <div class="m_ability_info">
        <div v-if="ability" class="ability-container">
            <h2 class="ability-title">{{ ability.ability }}</h2>
            <div class="ability_info">
                <div class="value">{{ ability.description }}</div>
            </div>
        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>
    <div class="pokemon-list-container">
        <div class="pokemon-list-header">
            <h3>拥有该特性的精灵</h3>
        </div>
        <div class="pokemon-list">
            <div class="pokemon-item" v-for="pokemon in pokemon_list" @click="handlePokemonInfo(pokemon)"
                :key="pokemon.编号">
                <div class="pokemon-avatar">
                    <img :src="getImageSrc(pokemon.编号)" :alt="pokemon.name" class="pokemon-image">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/store/modules/pokemon';
import { useRouter } from 'vue-router';

// 获取精灵仓库
const pokemonStore = usePokemonStore();
// 定义响应式数据
const abilityName = pokemonStore.abilityName;
const ability = pokemonStore.getAbilityByName(abilityName)

// 路由
let $router = useRouter()

// 获取 Pokemon 图片的 URL
const getImageSrc = (编号: String) => {
    let imageSrc = Number(编号)
    return new URL(`/src/assets/images/pokemonList_images/${imageSrc}.png`, import.meta.url).href;
};

// 拥有该特性的精灵
const pokemon_list:any = pokemonStore.getPokemonByAbility(ability.ability)

// 跳转到精灵页面
const handlePokemonInfo = (pokemon: any) => {
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(pokemon.编号)
    $router.push('/pokemon/info')
}

</script>

<style scoped lang="scss">
.m_ability_info {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    margin: 20px;
    border-style: solid;
    border-color: #2c3e50;

    .ability-title {
        font-size: 24px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 24px;
        text-align: center;
    }

    .ability_info {
        background-color: #f8f9fa;
        padding: 16px 24px;
        border-radius: 10px;
        margin: 20px;
    }

    .ability-info,
    .ability_header {
        display: flex;
        gap: 20px;
        justify-content: center;


        .accuracy_info,
        .power_info,
        .info-card {
            background: #f8f9fa;
            padding: 16px 24px;
            border-radius: 12px;
            min-width: 120px;
            text-align: center;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(-2px);
            }

            .label {
                font-size: 14px;
                color: #6c757d;
                margin-bottom: 8px;
                font-weight: 500;
            }

            .value {
                font-size: 16px;
                font-weight: 600;

                &.type-badge {
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    display: inline-block;
                }

                &.category-badge {
                    color: #2c3e50;
                    padding: 6px 12px;
                    border-radius: 20px;
                    background: #e9ecef;
                    display: inline-block;
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
    background-color: #f4f4f4;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .pokemon-list-header {
        text-align: center;
        margin-bottom: 20px;

        h3 {
            color: #333;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }

    .pokemon-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
    }

    .pokemon-item {
        background-color: white;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        /*         &:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        } */
    }

    .pokemon-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 10px;
        border: 3px solid #e0e0e0;
    }

    .pokemon-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pokemon-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .pokemon-name {
        font-weight: 500;
        margin-bottom: 5px;
        color: #333;
    }

    .pokemon-level-badge {
        background-color: #4CAF50;
        color: white;
        padding: 3px 8px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }
}
</style>