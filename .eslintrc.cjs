/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 16:46:53
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-08 20:47:27
 * @FilePath: /vue-form/.eslintrc.cjs
 * @Description:
 */
// https://typescript-eslint.io/docs/linting/typed-linting/monorepos

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    // https://juejin.cn/post/7012160233061482532
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // https://eslint.vuejs.org/user-guide/#usage
  // https://github.com/vuejs/eslint-plugin-vue/issues/746
  parser: 'vue-eslint-parser',
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};
