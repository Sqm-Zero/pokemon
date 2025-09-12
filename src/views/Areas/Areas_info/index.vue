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
                        <!-- <th>出现几率</th> -->
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
                            :class="{ 'floor-row': group.floor && group.pokemon.some((p: any) => p.floor > 1) }"
                            :data-floor="item.floor || 0">
                            <td>
                                <div class="pokemon" @click="handlePokemonInfo(item.name)">
                                    <img :src="getImageSrc(item.name)" alt="pokemon" class="pokemon-image" />
                                    <span class="pokemon-name">{{ item.name }}</span>
                                </div>
                            </td>
                            <td>
                                <span class="badge badge-level">{{ item.level }}</span>
                            </td>
                            <!-- <td>
                                <span class="badge badge-rate">{{ item.rate }}</span>
                            </td> -->
                            <td>
                                <span v-if="item.floor && group.pokemon.some((p: any) => p.floor > 1)"
                                    class="badge badge-floor">{{ `${item.floor}层` }}</span>
                                <span v-else class="muted">-</span>
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
    padding: 12px;
    background: linear-gradient(180deg, #f5fbff 0%, #eef7fc 100%);
}

.method-container {
    margin-bottom: 18px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    background: #fff;
    border: 1px solid rgba(76, 182, 231, 0.15);
}

.method-title {
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(90deg, #4cb6e7 0%, #5ed0ff 100%);
    color: #fff;
    text-align: left;
    padding: 10px 12px;
    letter-spacing: 0.5px;
}

.method-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: #fff;
}

.method-table thead th {
    position: sticky;
    top: 0;
    background: #ffffff;
    z-index: 1;
    border-bottom: 1px solid #e7eef3;
}

.method-table th,
.method-table td {
    text-align: center;
    padding: 12px 10px;
}

/* 单独确保“等级范围”（第2列）始终居中 */
.method-table thead th:nth-child(2),
.method-table tbody td:nth-child(2) {
    text-align: center;
    vertical-align: middle;
}

.method-table tbody tr+tr:not(.floor-divider) td {
    border-top: 1px dashed #edf3f7;
}

/* 轻微斑马纹增强可读性（不影响已注释代码） */
.method-table tbody tr:nth-child(even):not(.floor-divider) td {
    background: rgba(76, 182, 231, 0.025);
}

/* 鼠标悬停强化当前行 */
.method-table tbody tr:not(.floor-divider):hover td {
    background: rgba(76, 182, 231, 0.06);
}

.pokemon {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.pokemon:hover {
    transform: translateY(-1px);
}

.pokemon-image {
    width: 56px;
    height: 56px;
    object-fit: contain;
    background: #f7fbff;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #e6eef5;
}

.pokemon-name {
    font-weight: 600;
    font-size: 15px;
    color: #274c5e;
}

.badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px;
    line-height: 1;
    white-space: nowrap;
}

.badge-level {
    background: rgba(76, 182, 231, 0.12);
    color: #2196c8;
    box-shadow: inset 0 0 0 1px rgba(76, 182, 231, 0.35);
}

.badge-rate {
    background: rgba(40, 167, 69, 0.12);
    color: #1f8b43;
    box-shadow: inset 0 0 0 1px rgba(40, 167, 69, 0.35);
}

.badge-floor {
    background: rgba(255, 193, 7, 0.12);
    color: #9a7400;
    box-shadow: inset 0 0 0 1px rgba(255, 193, 7, 0.45);
}

.muted {
    color: #96a3ad;
}

.floor-divider {
    background: linear-gradient(90deg, rgba(76, 182, 231, 0.08), rgba(76, 182, 231, 0));
}

.floor-divider td {
    padding: 8px 10px;
    font-weight: 700;
    color: #2a5670;
    text-align: left;
    border-bottom: 2px solid #4cb6e7;
}

.floor-row {
    background-color: rgba(76, 182, 231, 0.04);
    transition: background-color 0.2s ease;
}

.floor-row:hover {
    background-color: rgba(76, 182, 231, 0.08);
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
    .method-title {
        font-size: 16px;
        padding: 8px 10px;
    }

    .method-table th,
    .method-table td {
        padding: 10px 8px;
        font-size: 14px;
    }

    .pokemon-image {
        width: 44px;
        height: 44px;
    }
}
</style>