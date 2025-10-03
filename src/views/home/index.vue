<template>
  <div class="home_container">
    <div class="title">
      <p class="artboard">{{ title }}</p>
    </div>
    <div class="bg_title">
      <img src="@/assets\images\home_images\image.png" alt="">
    </div>
    <!-- <Images />
    <Brand /> -->
    <div class="bg">
      <Main class="flex-item"></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Main from "@/views/home/Main/index.vue";
let title = import.meta.env.VITE_Pokemon_Title
</script>

<style scoped lang="scss">
.home_container {
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #54d6db, #caf0fe, #0056d6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  overflow-x: hidden;
  // 为 fixed 标题预留顶部空间
  padding-top: 80px; // 根据标题高度调整

  .title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px; // 固定高度
    background: rgba(0, 0, 0, 0.1); // 轻微毛玻璃底（可选）
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 10;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 0 16px;
    box-sizing: border-box;

    .artboard {
      font-size: 1.8em;
      font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", sans-serif;
      font-weight: 800;
      line-height: 1.3;
      color: white;
      text-shadow:
        1px 1px 0 rgba(0, 30, 60, 0.4),
        2px 2px 0 rgba(255, 80, 40, 0.3);
      letter-spacing: 1px;
      -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.2);
      margin: 0;
      text-align: center;
    }
  }

  .bg_title {
    width: 100%;
    max-width: 500px;
    margin: 0 auto 24px;

    img {
      width: 100%;
      max-height: 320px;
      object-fit: contain;
      border-radius: 16px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
      background: white;
    }
  }

  .bg {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 0;
  }
}

/* 小屏适配 */
@media screen and (max-width: 390px) {
  .home_container {
    padding: 0 12px;
    padding-top: 70px;
  }

  .title {
    height: 50px;
  }

  .title .artboard {
    font-size: 1.6em;
  }

  .bg_title img {
    max-height: 280px;
    border-radius: 14px;
  }
}

/* 超小屏 */
@media screen and (max-width: 320px) {
  .home_container {
    padding-top: 60px;
  }

  .title {
    height: 45px;
  }

  .title .artboard {
    font-size: 1.5em;
    letter-spacing: 0.5px;
  }

  .bg_title img {
    max-height: 240px;
    border-radius: 12px;
  }
}
</style>