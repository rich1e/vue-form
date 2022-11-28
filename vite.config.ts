/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-28 10:04:08
 * @FilePath: /vue-form/vite.config.ts
 * @Description:
 *
 */
import { ConfigEnv, UserConfigExport } from 'vite';
import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { viteMockServe } from 'vite-plugin-mock';

/**
 * @see https://element-plus.org/zh-CN/guide/quickstart.html#vite
 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * @see https://github.com/element-plus/unplugin-element-plus/blob/main/README.zh-CN.md
 */
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  /**
   * 是否开启mock
   * @param {String} command 命令类型，serve｜build
   * @param {String} mode 运行模式
   * @returns
   * @see https://cn.vitejs.dev/config/#environment-variables
   * @see https://cn.vitejs.dev/guide/api-javascript.html#loadenv
   */
  const isEnabledMock = (command: string, mode: string): boolean => {
    // console.log('command#', command)
    // console.log('mode#', mode)
    // console.log('path#', process.cwd())
    // console.log('env#', loadEnv(mode, process.cwd()).VITE_APP_RUNTIME, '')
    // console.log('isEnabledMock#', command !== 'build' ? mode === 'development' : mode === 'testing')
    return command !== 'build' ? mode === 'development' : mode === 'testing';
  };

  return {
    server: {
      open: true,
    },

    plugins: [
      vue(),
      vueJsx(),

      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: isEnabledMock(command, mode),
      }),

      AutoImport({
        dts: false,
        resolvers: [ElementPlusResolver()],
      }),

      /**
       * 网上有推断是 vite 的插件会引起 debugger 位置不对
       * @see https://github.com/vitejs/vite/issues/6228
       * @see https://segmentfault.com/q/1010000041920767
       * @see https://github.com/vbenjs/vue-vben-admin/issues/1716
       */
      Components({
        dts: false,
        resolvers: [ElementPlusResolver()],
        /**
         * @see https://juejin.cn/post/7018075026322620453
         */
        directoryAsNamespace: true,
      }),

      ElementPlus(),
    ],

    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '/@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
  };
};
