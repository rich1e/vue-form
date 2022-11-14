<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-07 10:35:55
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 17:58:56
 * @FilePath: /vue-form/src/views/Default.vue
 * @Description:
 *
-->
<template>
  <div class="page-list">
    <ul>
      <li>
        <RouterLink to="/uniseriate">Uniseriate</RouterLink>
      </li>
      <li>
        <RouterLink to="/biserial">Biserial</RouterLink>
      </li>
      <li>
        <RouterLink to="/group">Group</RouterLink>
      </li>
      <li>
        <RouterLink to="/tab">Tab</RouterLink>
      </li>
      <li>
        <RouterLink to="/flex">Flex</RouterLink>
      </li>
      <li>
        <RouterLink to="/http">Http</RouterLink>
      </li>
      <li>
        <RouterLink to="/components">Components</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .page-list {
    text-align: left;
  }
</style>
