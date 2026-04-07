<template>
    <div class="S_header">
        <div class="search_container">
            <div class="search_icon">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <input
                placeholder="搜索宝可梦..."
                v-model="searchQuery"
                @input="emitSearch"
                class="search_input"
            />
            <div v-if="searchQuery" class="clear_icon" @click="clearSearch">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['search']);
const props = defineProps({
    query: {
        type: String,
        default: ''
    }
});

const searchQuery = ref(props.query);

watch(
    () => props.query,
    newQuery => {
        searchQuery.value = newQuery;
    }
);

function emitSearch() {
    emit('search', searchQuery.value);
}

function clearSearch() {
    searchQuery.value = '';
    emit('search', '');
}
</script>

<style scoped lang="scss">
.S_header {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
}

.search_container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 999px;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;

    &:focus-within {
        border-color: rgba(0, 159, 202, 0.5);
        box-shadow: 0 0 0 2px rgba(0, 159, 202, 0.12);
    }
}

.search_icon {
    position: absolute;
    left: 13px;
    color: #8b96a6;
    z-index: 2;
    transition: color 0.2s ease;

    .search_container:focus-within & {
        color: #667eea;
    }
}

.clear_icon {
    position: absolute;
    right: 10px;
    color: #8b96a6;
    cursor: pointer;
    z-index: 2;
    transition: all 0.2s ease;
    padding: 6px;
    border-radius: 50%;

    &:hover {
        color: #ef4444;
        background: rgba(239, 68, 68, 0.12);
    }
}

.search_input {
    width: 100%;
    height: 100%;
    padding: 0 44px 0 40px;
    border: none;
    background: transparent;
    font-size: 16px;
    color: #1f2a37;
    outline: none;
    line-height: 1;

    &::placeholder {
        color: #9aa4b2;
        font-weight: 400;
    }
}

// 响应式设计
@media (max-width: 480px) {
    .S_header {
        height: 42px;
    }

    .search_input {
        font-size: 15px;
        padding: 0 40px 0 36px;
    }

    .search_icon {
        left: 12px;
    }

    .clear_icon {
        right: 10px;
    }
}
</style>
