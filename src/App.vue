<template>
  <div class="app-container">
    <!-- 添加加载状态显示 -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(true);
// 初始化函数
const initApp = async () => {
  try {
    // 等待资源加载完成
    await Promise.all([
      // 这里可以添加需要预加载的资源
      new Promise(resolve => setTimeout(resolve, 100)) // 最少显示0.1秒加载画面
    ]);
    
    isLoading.value = false;
  } catch (error) {
    console.error('App initialization failed:', error);
  }
};

onMounted(() => {
  // 初始化应用
  initApp();
  if (typeof window !== 'undefined' && (window as any).plus) {
    const plus = (window as any).plus;
    // 使用 plus 对象
    if (plus) {
      onPlusReady();
    } else {
      document.addEventListener('plusready', onPlusReady);
    }
  }
});

function onPlusReady() {
  try {
    // 设置系统状态栏为透明
    plus.navigator.setStatusBarBackground('rgba(0,0,0,0)');
    
    // 配置 WebView
    const currentWebview = plus.webview.currentWebview();
    currentWebview.setStyle({
      softinputMode: 'adjustResize',
      hardwareAccelerated: true
    });

    // 监听返回按键
    plus.key.addEventListener('backbutton', () => {
      if (router.currentRoute.value.path === '/') {
        plus.nativeUI.confirm(
          '确认退出应用？',
          (e: any) => {
            if (e.index === 0) {
              plus.runtime.quit();
            }
          },
          '提示',
          ['确定', '取消']
        );
      } else {
        router.back();
      }
    });
  } catch (error) {
    console.error('plus ready error:', error);
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

#app {
  width: 100%;
  height: 100%;
}

.app-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 加载动画样式 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>