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
  background: linear-gradient(to bottom, #54d6db, #caf0fe, #0056d6);

  .title {
    position: fixed;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(at 72.72211768092328% 42.83681399438808%, hsla(165, 80.48780487804878%, 67.84313725490196%, 1) 0%, hsla(165, 80.48780487804878%, 67.84313725490196%, 0) 100%), radial-gradient(at 19.0949269145557% 13.427974277640331%, hsla(240.78602620087332, 100%, 55.09803921568628%, 1) 0%, hsla(240.78602620087332, 100%, 55.09803921568628%, 0) 100%), radial-gradient(at 77.31948969476554% 71.73320898669479%, hsla(232.83018867924528, 88.82681564245813%, 64.90196078431373%, 1) 0%, hsla(232.83018867924528, 88.82681564245813%, 64.90196078431373%, 0) 100%), radial-gradient(at 23.873352541680283% 85.21449191849379%, hsla(165, 80.48780487804878%, 67.84313725490196%, 1) 0%, hsla(165, 80.48780487804878%, 67.84313725490196%, 0) 100%), radial-gradient(at 63.94871849560857% 8.657258621326536%, hsla(240.78602620087332, 100%, 55.09803921568628%, 1) 0%, hsla(240.78602620087332, 100%, 55.09803921568628%, 0) 100%), radial-gradient(at 62.90956700488586% 87.01821271111223%, hsla(232.83018867924528, 88.82681564245813%, 64.90196078431373%, 1) 0%, hsla(232.83018867924528, 88.82681564245813%, 64.90196078431373%, 0) 100%), radial-gradient(at 75.44570214827773% 2.6279076304641436%, hsla(165, 80.48780487804878%, 67.84313725490196%, 1) 0%, hsla(165, 80.48780487804878%, 67.84313725490196%, 0) 100%);
    box-shadow: 3px 3px 5px #888888;

    .artboard {
      font-size: 2em;
      font-family: "Times New Roman", Times, serif;
      font-weight: bold;
      line-height: 1.5;
      color: white;

    }
  }

  .bg_title {
    position: relative;
    top: 3%; // 调整这个值来控制下移的距离
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .bg {
    margin-top: 5%;
  }
}
</style>