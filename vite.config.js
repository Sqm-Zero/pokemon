import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
//引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import ViteCompression from 'vite-plugin-compression';
import Legacy from '@vitejs/plugin-legacy';
// https://vitejs.dev/config/
export default defineConfig(function () {
    return {
        base: './',
        plugins: [
            ViteCompression(),
            vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]'
            }),
            Legacy({
                targets: ['ie >= 11'], // 或其他需要支持的浏览器
                additionalLegacyPolyfills: ['regenerator-runtime/runtime']
            })
        ],
        build: {
            outDir: 'out',
            assetsDir: 'assets',
            target: 'es2015',
            rollupOptions: {
                output: {
                    manualChunks: undefined
                }
            },
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true, // 移除 console
                    drop_debugger: true // 移除 debugger
                }
            },
            chunkSizeWarningLimit: 1500,
            cssCodeSplit: true,
            sourcemap: false
        },
        resolve: {
            alias: {
                "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
            }
        },
        //scss全局变量配置
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";',
                },
            },
        }
    };
});
