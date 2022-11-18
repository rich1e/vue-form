<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-18 14:23:17
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-18 18:02:38
 * @FilePath: /vue-form/src/example/getCurrentInstance/child.vue
 * @Description:
 *
-->
<script lang="ts">
  export default {
    name: 'Child',
  };
</script>

<script setup lang="ts">
  import { ElButton } from 'element-plus';

  const childName = 'test';

  const onClick = () => {
    console.log('Child');
  };

  const getComponents = () => {
    return childName;
  };

  defineExpose({
    getComponents,
  });
</script>

<template>
  <div>
    <ElButton @click="onClick">Child</ElButton>
  </div>
</template>
