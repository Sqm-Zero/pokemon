<template>
    <div class="S_header">
        <input
            placeholder="搜索"
            v-model="searchQuery"
            @input="emitSearch"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue';

const emit = defineEmits(['search']);
const props = defineProps({
    query: {
        type: String,
        default: ''
    }
});

const searchQuery = ref(props.query);

watch(() => props.query, (newQuery) => {
    searchQuery.value = newQuery;
});

function emitSearch() {
    emit('search', searchQuery.value);
}
</script>

<style scoped lang="scss">
.S_header {
    width: 95%;
    height: 50px; // 固定高度，而不是百分比
    display: flex;
    align-items: center;
    flex-shrink: 0; // 防止被压缩
    margin: 10px 0; // 添加一些垂直间距

    input {
        width: 100%;
        height: 100%;
        padding: 0 10px; // 添加一些内边距
        margin: 0;
        border: none;
        border-radius: 8px; // 圆角
        background-color: #f5f5f5; // 轻微的背景色
        border: 1px solid #e0e0e0; // 细边框
        font-size: 1.1rem;
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            border-color: #562af4; // 对应你的渐变色
            box-shadow: 0 0 5px rgba(86, 42, 244, 0.3);
        }

        &::placeholder {
            color: #888;
        }
    }
}
</style>