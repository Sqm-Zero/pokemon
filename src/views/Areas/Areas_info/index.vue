<template>
    <Top :title="areaStore.areaName" router="/areas" icon="pokemon"
        color="linear-gradient(90deg, #009fca, #fc5948, #313862)"></Top>
    <div class="container">
        <div v-for="(method, index) in displayData" :key="index" class="method-container">
            <div class="method-title">{{ getEncountName(method.title) }}</div>
            <table class="method-table">
                <thead>
                    <tr>
                        <th>宝可梦</th>
                        <th>等级范围</th>
                        <th>出现几率</th>
                        <th>位置</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(group, groupIdx) in groupByFloor(processPokemonData(method.data, method.title))"
                        :key="groupIdx">
                        <tr v-if="group.floor && group.pokemon.some((p: any) => p.floor > 1)" class="floor-divider">
                            <td colspan="4">{{ `第 ${group.floor} 层` }}</td>
                        </tr>
                        <tr v-for="(item, idx) in group.pokemon" :key="idx"
                            :class="{ 'floor-row': group.floor && group.pokemon.some((p: any) => p.floor > 1) }">
                            <td>
                                <div class="pokemon" @click="handlePokemonInfo(item.name)">
                                    <img :src="getImageSrc(item.name)" alt="pokemon" class="pokemon-image" />
                                    <span>{{ item.name }}</span>
                                </div>
                            </td>
                            <td>{{ item.level }}</td>
                            <td>{{ item.rate }}</td>
                            <td>{{item.floor && group.pokemon.some((p: any) => p.floor > 1) ? `${item.floor}层` : '-'}}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAreaStore } from '@/store/modules/area'
import { computed } from "vue";
import { usePokemonStore } from '@/store/modules/pokemon'
import { useRouter } from 'vue-router'

const $router = useRouter()
const areaStore = useAreaStore()
const pokemonStore = usePokemonStore()
const area_date: any = areaStore.sharedData

// 处理精灵数据，合并概率并添加层数信息
const processPokemonData = (data: any[], methodTitle: string) => {
    const pokemonMap = new Map();
    const floorMap = new Map();
    const seenPokemon = new Set();
    const isGrassMethod = methodTitle === "Grass" || methodTitle === "Tall Grass";

    data.forEach((item) => {
        const currentName = item.name;
        let key = currentName;

        // 只对草丛精灵处理层数
        if (isGrassMethod) {
            // 如果这个精灵之前出现过，且不是连续出现，说明是新的一层
            if (seenPokemon.has(currentName) &&
                data[data.indexOf(item) - 1]?.name !== currentName) {
                const currentFloor = (floorMap.get(currentName) || 1) + 1;
                floorMap.set(currentName, currentFloor);
            } else if (!floorMap.has(currentName)) {
                floorMap.set(currentName, 1);
            }

            const currentFloor = floorMap.get(currentName);
            key = `${currentName}-${currentFloor}`;
        }

        seenPokemon.add(currentName);

        if (pokemonMap.has(key)) {
            const existing = pokemonMap.get(key);
            if (item.rate === '?%' || existing.rate === '?%') {
                existing.rate = '？？？';
            } else {
                existing.rate = `${Number(existing.rate.replace('%', '')) +
                    Number(item.rate.replace('%', ''))}%`;
            }
        } else {
            // 只有草丛且有多层的情况才显示层数
            const hasMultipleLayers = isGrassMethod &&
                Array.from(floorMap.values()).some(v => v > 1);
            pokemonMap.set(key, {
                ...item,
                floor: hasMultipleLayers ? floorMap.get(currentName) : null
            });
        }
    });

    return Array.from(pokemonMap.values());
};

const displayData = computed(() => {
    const methods = [];
    for (const key in area_date) {
        if (area_date[key].length > 0) {
            methods.push({
                title: key,
                data: area_date[key],
            });
        }
    }
    return methods;
});

const EncountName: { [key: string]: string } = {
    "Grass": "草丛",
    "Tall Grass": "高草丛",
    "Rock Smash": "岩石粉碎",
    "Swarm": "连锁（神兽剧情后）",
    "Old Rod": "破旧钓竿",
    "Good Rod": "好钓竿",
    "Super Rod": "超级钓竿",
    "Surf": "冲浪"
}

const getEncountName = (key: string): string => {
    return EncountName[key] || key;
}

const getImageSrc = (name: string) => {
    const pokemonId = pokemonStore.getPokemonIdByName(name)
    const numbering = Number(pokemonId);
    return new URL(`/src/assets/images/pokemonList_images/${numbering}.png`, import.meta.url).href;

};


const handlePokemonInfo = (pokemonName: any) => {
    const id: any = pokemonStore.getPokemonIdByName(pokemonName)
    pokemonStore.Pokemon = pokemonStore.getPokemonByNumber(id)
    $router.push('/pokemon/info')
}

// 按层数分组
const groupByFloor = (data: any[]) => {
    const groups: any[] = [];
    let currentFloor: any = null;
    let currentGroup: any[] = [];

    // 先按层数排序
    const sortedData = [...data].sort((a, b) => {
        if (!a.floor && !b.floor) return 0;
        if (!a.floor) return -1;
        if (!b.floor) return 1;
        return a.floor - b.floor;
    });

    sortedData.forEach(item => {
        if (item.floor !== currentFloor) {
            if (currentGroup.length > 0) {
                groups.push({
                    floor: currentFloor,
                    pokemon: currentGroup
                });
            }
            currentFloor = item.floor;
            currentGroup = [item];
        } else {
            currentGroup.push(item);
        }
    });

    // 添加最后一组
    if (currentGroup.length > 0) {
        groups.push({
            floor: currentFloor,
            pokemon: currentGroup
        });
    }

    return groups;
};
</script>

<style scoped>
.container {
    width: 100%;
    padding: 10px;
    background-color: #f0f8ff;
}

.method-container {
    margin-bottom: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-title {
    font-size: 20px;
    font-weight: bold;
    background-color: #4cb6e7;
    color: white;
    text-align: center;
    padding: 8px;
}

.method-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
}

.method-table th,
.method-table td {
    text-align: center;
    border: 1px solid #ddd;
    padding: 12px 8px;
}

.method-table th {
    background-color: #4cb6e7;
    color: white;
    font-weight: bold;
}

.pokemon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.pokemon:hover {
    transform: scale(1.05);
}

.pokemon-image {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.floor-divider {
    background-color: #e9ecef;
}

.floor-divider td {
    padding: 8px;
    font-weight: bold;
    color: #495057;
    text-align: left;
    border-bottom: 2px solid #4cb6e7;
}

.floor-row {
    background-color: rgba(76, 182, 231, 0.05);
}

.floor-row:hover {
    background-color: rgba(76, 182, 231, 0.1);
}

.method-table tr {
    transition: background-color 0.2s ease;
}

.method-table tbody tr:not(.floor-divider):hover {
    background-color: rgba(76, 182, 231, 0.1);
}

/* 不同层数使用不同的边框颜色 */
.floor-row td {
    border-left: 3px solid transparent;
}

.floor-row[data-floor="1"] td {
    border-left-color: #4cb6e7;
}

.floor-row[data-floor="2"] td {
    border-left-color: #28a745;
}

.floor-row[data-floor="3"] td {
    border-left-color: #ffc107;
}

/* 响应式样式调整 */
@media screen and (max-width: 768px) {
    .floor-divider td {
        font-size: 14px;
        padding: 6px;
    }

    .method-table td {
        padding: 8px 4px;
    }

    .pokemon-image {
        width: 32px;
        height: 32px;
    }
}
</style>