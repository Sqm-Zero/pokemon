<template>
  <div class="m_areas">
    <div class="m_menu">
      <div class="function_container">
        <el-card class="function function_pokemon" @click="handleAreaInfo('宝可梦列表')">
          <div class="text-wrapper">
            <p>宝可梦列表</p>
          </div>
        </el-card>
        <el-card class="function function_moves" @click="handleAreaInfo('招式列表')">
          <div class="text-wrapper">
            <p>招式列表</p>
          </div>
        </el-card>
      </div>
      <div class="function_container">
        <el-card class="function function_areas" @click="handleAreaInfo('地区分类')">
          <div class="text-wrapper">
            <p>地区分类</p>
          </div>
        </el-card>
        <el-card class="function function_trainers" @click="handleAreaInfo('训练家对位')">
          <div class="text-wrapper">
            <p>训练家对位</p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const handleAreaInfo = (area_name: string) => {
  switch (area_name) {
    case '宝可梦列表':
      router.push('/pokemon');
      break;
    case '招式列表':
      router.push('/move');
      break;
    case '地区分类':
      router.push('/areas');
      break;
    case '训练家对位':
      router.push('/trainer');
      break;
  }
}
</script>

<style scoped>
.m_areas {
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
}

.m_menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 每行两列，等宽 */
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
}

.function {
  position: relative;
  aspect-ratio: 1 / 1;
  /* 保持正方形，避免写死宽高 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 5%;
  min-height: 120px;
  /* 最小高度保障可点 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 2;
}

.function p {
  margin: 0;
  padding: 6px 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  letter-spacing: 0.5px;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", sans-serif;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
}

/* 图片背景 */
.function_pokemon {
  background-image: url('@/assets/images/main_images/img01.png');
}

.function_moves {
  background-image: url('@/assets/images/main_images/img02.png');
}

.function_areas {
  background-image: url('@/assets/images/main_images/img03.png');
}

.function_trainers {
  background-image: url('@/assets/images/main_images/img04.png');
}

/* 小屏适配：保持两列，但缩小尺寸 */
@media screen and (max-width: 390px) {
  .m_menu {
    gap: 16px;
    padding: 0 12px;
  }

  .function {
    min-height: 110px;
  }

  .function p {
    font-size: 14px;
    padding: 5px 10px;
  }
}

/* 超小屏（如 iPhone SE） */
@media screen and (max-width: 320px) {
  .m_menu {
    gap: 14px;
    padding: 0 10px;
  }

  .function {
    min-height: 100px;
  }

  .function p {
    font-size: 13px;
  }
}
</style>