<template>
    <div class="T_container" :style="{background: color}">
        <div class="left">
            <SvgIcon @click="$router.push(router)" name="ArrowLeft" height="30px" width="30px" color="#00bfff"></SvgIcon>
        </div>
        <div class="center">
            <p>{{ title }}</p>
        </div>
        <div class="right">
            <SvgIcon :name="icon" height="30px" width="30px" @click="handleIcon"></SvgIcon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

let $router = useRouter();
//接收父类传递的数据
defineProps({
    title: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    router: {
        type: String,
        default: '/'
    }
})
// 
const emit = defineEmits(['icon_func']);
// 点击右侧图标方法函数
const handleIcon = () => {
    emit('icon_func');
}
</script>

<style scoped>
.T_container {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
    }

    .left,
    .right,
    .center {
        /* 可以根据需要设置每个 div 的样式 */
        padding: 4%;
    }
}
</style>