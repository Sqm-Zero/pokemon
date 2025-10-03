<template>
    <div class="trainer-list">
        <Top title="训练家列表" color="linear-gradient(90deg, #bdbdbd,#dedede,#ffffff)" />

        <div class="group-list">
            <div class="version-container">
                <el-card class="group-item" :class="{ selected: currentVersion === 'normal', challenge: true }"
                    shadow="hover" @click="currentVersion = 'normal'">
                    <div class="card-content">
                        <span class="group-name">挑战版</span>
                    </div>
                </el-card>

                <el-card class="group-item" :class="{ selected: currentVersion === 'hardcore', hardcore: true }"
                    shadow="hover" @click="currentVersion = 'hardcore'">
                    <div class="card-content">
                        <span class="group-name">硬核版</span>
                    </div>
                </el-card>
            </div>
            <el-card v-for="(name, index) in groupNames" :key="index" class="group-item" shadow="hover"
                @click="handleClick(name)">
                <div class="card-content">
                    <span class="group-name">{{ name }}</span>
                    <el-icon>
                        <ArrowRight />
                    </el-icon>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

// 路由
let $router = useRouter()

const groupNames = [
    "海洋队 重要战斗 阵容",
    "青梅/劲敌 详细阵容",
    "道馆馆主 详细阵容",
    "宝可梦联盟 详细阵容",
    "连胜家族（紫堇市上方）",
    "隐藏五天王",
    "二周目 重要战斗",
    "最终挑战！游戏作者（茵郁市右下角树屋）"
]

const VERSION_KEY = 'trainer_version';

const currentVersion = ref<'normal' | 'hardcore'>(
    (localStorage.getItem(VERSION_KEY) as 'normal' | 'hardcore') || 'normal'
)

watch(currentVersion, (val) => {
    localStorage.setItem(VERSION_KEY, val)
})

onMounted(() => {
    // 进入页面时再次同步，防止外部变更
    const saved = localStorage.getItem(VERSION_KEY) as 'normal' | 'hardcore';
    if (saved && saved !== currentVersion.value) {
        currentVersion.value = saved;
    }
})

function handleClick(name: string) {
    $router.push({
        name: 'GroupDetail',
        params: { groupName: encodeURIComponent(name) },
        query: { version: currentVersion.value }
    })
}

</script>


<style scoped>
.trainer-list {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fbff 0%, #e3e9f6 100%);
    padding-bottom: 24px;
    max-width: 420px;
    margin: 0 auto;
}

.group-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 20px;
    padding: 0 10px;
}

/* 版本容器样式 */
.version-container {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
}

.version-container .group-item {
    flex: 1;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f8fa;
    border: 1.5px solid #ebeef5;
    cursor: pointer;
}

.group-item {
    border-radius: 14px;
    background: #fff;
    border: 1.5px solid #ebeef5;
    padding: 16px 14px;
    cursor: pointer;
    width: 90%;
    margin: 0 auto;
}

/* 挑战版样式 */
.group-item.challenge {
    background: #f0f7ff;
    border: 1.5px solid #a0cfff;
}

/* 硬核版样式 */
.group-item.hardcore {
    background: #fff0f0;
    border: 1.5px solid #ffa0a0;
}

.group-item.selected {
    border: 2px solid #409eff;
    background: #eaf6ff;
}

.card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #303133;
    font-weight: 600;
    letter-spacing: 0.2px;
}

.group-name {
    line-height: 1.5;
    word-break: break-word;
    font-weight: 700;
    flex: 1;
    margin-right: 8px;
    color: #2d3a4b;
    font-size: 16px;
}

.el-icon {
    font-size: 18px;
    color: #409eff;
}

@media (max-width: 600px) {
    .trainer-list {
        max-width: 100vw;
        padding-bottom: 16px;
    }

    .group-list {
        padding: 0 2px;
    }

    .version-container .group-item,
    .group-item {
        font-size: 15px;
        padding: 12px 0;
    }

    .card-content,
    .group-name {
        font-size: 14px;
    }
}
</style>