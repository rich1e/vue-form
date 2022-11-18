<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-18 14:23:17
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-18 18:14:28
 * @FilePath: /vue-form/src/example/getCurrentInstance/father.vue
 * @Description:
 *
-->
<script lang="ts">
  export default {
    name: 'Father',
  };
</script>

<script setup lang="ts">
  import { getCurrentInstance, inject, ref } from 'vue';
  import { ElButton } from 'element-plus';
  import Child from '/@/example/getCurrentInstance/child.vue';

  const refChild = ref<InstanceType<typeof Child> | null>(null);

  const instance = getCurrentInstance()?.appContext.config.globalProperties;

  inject('EMELENT', refChild);

  const onClick = () => {
    console.log('Father');
    console.log(refChild.value);
    console.log(instance);
  };
</script>

<template>
  <div>
    <ElButton @click="onClick">Father</ElButton>
    <Child ref="refChild" />
  </div>
</template>
