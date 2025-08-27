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
.m_menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 0 20px;
}

.function_container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.function {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
}

.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.function p {
  margin: 0;
  padding: 5px 10px;
  text-align: center;
  background: linear-gradient(50deg, #ba3fb3, #1d00d6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
}

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

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .m_menu {
    gap: 15px;
    margin-top: 15px;
    padding: 0 15px;
  }

  .function_container {
    gap: 15px;
  }

  .function {
    width: 140px;
    height: 140px;
  }

  .function p {
    font-size: 14px;
  }
}

/* 小屏幕手机适配 */
@media screen and (max-width: 360px) {
  .m_menu {
    gap: 10px;
    padding: 0 10px;
  }

  .function_container {
    gap: 10px;
  }

  .function {
    width: 120px;
    height: 120px;
  }

  .function p {
    font-size: 12px;
  }
}

/* 横屏适配 */
@media screen and (orientation: landscape) and (max-height: 500px) {
  .m_menu {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }

  .function {
    width: 100px;
    height: 100px;
  }
}
</style>