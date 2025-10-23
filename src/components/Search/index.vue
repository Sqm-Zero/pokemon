<template>
    <div class="S_header">
        <div class="search_container">
            <div class="search_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <input
                placeholder="搜索宝可梦..."
                v-model="searchQuery"
                @input="emitSearch"
                class="search_input"
            />
            <div v-if="searchQuery" class="clear_icon" @click="clearSearch">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
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

function clearSearch() {
    searchQuery.value = '';
    emit('search', '');
}
</script>

<style scoped lang="scss">
.S_header {
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 10px 0;
}

.search_container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
    }
    
    &:focus-within {
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        border: 2px solid #667eea;
    }
}

.search_icon {
    position: absolute;
    left: 16px;
    color: #7f8c8d;
    z-index: 2;
    transition: color 0.3s ease;
    
    .search_container:focus-within & {
        color: #667eea;
    }
}

.clear_icon {
    position: absolute;
    right: 16px;
    color: #7f8c8d;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease;
    padding: 4px;
    border-radius: 50%;
    
    &:hover {
        color: #e74c3c;
        background: rgba(231, 76, 60, 0.1);
        transform: scale(1.1);
    }
}

.search_input {
    width: 100%;
    height: 100%;
    padding: 0 50px 0 50px;
    border: none;
    background: transparent;
    font-size: 16px;
    color: #2c3e50;
    outline: none;
    transition: all 0.3s ease;
    
    &::placeholder {
        color: #95a5a6;
        font-weight: 400;
    }
    
    &:focus {
        &::placeholder {
            color: #bdc3c7;
        }
    }
}

// 响应式设计
@media (max-width: 480px) {
    .S_header {
        height: 45px;
    }
    
    .search_input {
        font-size: 14px;
        padding: 0 45px 0 45px;
    }
    
    .search_icon {
        left: 14px;
    }
    
    .clear_icon {
        right: 14px;
    }
}
</style>