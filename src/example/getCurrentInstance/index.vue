<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-18 14:23:17
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-18 18:00:56
 * @FilePath: /vue-form/src/example/getCurrentInstance/index.vue
 * @Description:
 *
-->
<script lang="ts">
  export default {
    name: 'GetCurrentInstance',
  };
</script>

<script setup lang="ts">
  import { provide } from 'vue';
  import { ElButton } from 'element-plus';
  import Father from '/@/example/getCurrentInstance/father.vue';

  provide('EMELENT', {});

  const onClick = () => {
    console.log('click');
  };
</script>

<template>
  <div>
    <ElButton @click="onClick">OK</ElButton>
    <Father />
  </div>
</template>
