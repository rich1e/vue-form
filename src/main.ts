/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-07 17:42:52
 * @FilePath: /vue-form/src/main.ts
 * @Description:
 *
 */
import { createApp } from 'vue';
import App from './App.vue';

import { router, setupRouter } from '/@/routes';

import './style.css';

const app = createApp(App);

// 挂载路由
setupRouter(app);

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
