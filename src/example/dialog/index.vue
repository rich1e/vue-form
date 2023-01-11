<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2023-01-10 16:30:54
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2023-01-11 17:29:56
 * @FilePath: /vue-form/src/example/dialog/index.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { ref } from 'vue';

  import FiDialog from './components/Dialog.vue';
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';

  const dialogVisible = ref(false);
  // const draggableVal = ref(true);
  const openHandler = () => {
    console.log('This openHandler');
  };
</script>

<template>
  <BaseViewVue>
    <template #header> Dialog </template>
    <template #main>
      <ElButton text @click="dialogVisible = true"> 打开弹窗 </ElButton>
      <div>
        <FiDialog v-model="dialogVisible" @open="openHandler">
          <template #title> title </template>
          <span>This is a message</span>
        </FiDialog>
      </div>
    </template>
  </BaseViewVue>
</template>
