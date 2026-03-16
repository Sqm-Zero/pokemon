<template>
    <div class="battle-stats">
        <h4 class="stats-title">战斗分析</h4>

        <!-- 等级分析 -->
        <div class="stats-section">
            <div class="section-label">等级分布</div>
            <div class="level-row">
                <div class="level-item">
                    <span class="level-num avg">{{ stats.levelAnalysis.average }}</span>
                    <span class="level-desc">平均</span>
                </div>
                <div class="level-divider"></div>
                <div class="level-item">
                    <span class="level-num max">{{ stats.levelAnalysis.max }}</span>
                    <span class="level-desc">最高</span>
                </div>
                <div class="level-divider"></div>
                <div class="level-item">
                    <span class="level-num min">{{ stats.levelAnalysis.min }}</span>
                    <span class="level-desc">最低</span>
                </div>
            </div>
        </div>

        <!-- 属性分布 -->
        <div class="stats-section" v-if="stats.attributeDistribution.length">
            <div class="section-label">属性分布</div>
            <div class="attr-list">
                <div
                    v-for="attr in stats.attributeDistribution"
                    :key="attr.attribute"
                    class="attr-item"
                >
                    <span class="attr-name" :class="`attr-${attr.attribute}`">{{ attr.attribute }}</span>
                    <div class="attr-bar-wrap">
                        <div class="attr-bar" :style="{ width: attr.percentage + '%' }"></div>
                    </div>
                    <span class="attr-count">{{ attr.count }}</span>
                </div>
            </div>
        </div>

        <!-- 克制推荐 -->
        <div class="stats-section" v-if="stats.counterRecommendations.length">
            <div class="section-label">推荐克制属性</div>
            <div class="counter-tags">
                <span
                    v-for="counter in stats.counterRecommendations"
                    :key="counter"
                    class="counter-tag"
                >
                    {{ counter }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BattleStats } from '@/types/trainer';

defineProps<{ stats: BattleStats }>();
</script>

<style scoped lang="scss">
.battle-stats {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.stats-title {
    margin: 0 0 14px;
    font-size: 14px;
    font-weight: 700;
    color: #2c3e50;
}

.stats-section {
    margin-bottom: 14px;

    &:last-child { margin-bottom: 0; }
}

.section-label {
    font-size: 11px;
    font-weight: 600;
    color: #909399;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
}

.level-row {
    display: flex;
    align-items: center;
    gap: 0;
    background: #f8fafc;
    border-radius: 12px;
    padding: 10px 0;
}

.level-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    .level-num {
        font-size: 20px;
        font-weight: 800;

        &.avg { color: #409eff; }
        &.max { color: #f56c6c; }
        &.min { color: #67c23a; }
    }

    .level-desc {
        font-size: 11px;
        color: #909399;
    }
}

.level-divider {
    width: 1px;
    height: 30px;
    background: #e2e8f0;
}

.attr-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.attr-item {
    display: flex;
    align-items: center;
    gap: 8px;

    .attr-name {
        font-size: 12px;
        font-weight: 600;
        width: 28px;
        text-align: center;
        padding: 2px 4px;
        border-radius: 4px;
        background: #f1f5f9;
        color: #475569;
    }

    .attr-bar-wrap {
        flex: 1;
        height: 6px;
        background: #f1f5f9;
        border-radius: 3px;
        overflow: hidden;

        .attr-bar {
            height: 100%;
            background: linear-gradient(to right, #409eff, #67c23a);
            border-radius: 3px;
            transition: width 0.5s ease;
        }
    }

    .attr-count {
        font-size: 12px;
        font-weight: 700;
        color: #475569;
        width: 16px;
        text-align: right;
    }
}

.counter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    .counter-tag {
        background: #ecf5ff;
        color: #409eff;
        border: 1px solid #d9ecff;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 8px;
    }
}
</style>
