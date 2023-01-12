<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2023-01-10 16:30:54
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2023-01-12 17:05:47
 * @FilePath: /vue-form/src/example/dialog/index.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { ref } from 'vue';

  import FiDialog from './components/Dialog.vue';
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';

  const setDialogVisible = ref(false);
  const setDialogVisible2 = ref(false);

  const openHandler = () => {
    console.log('This openHandler');
  };

  const updateTitleHandler = (title: string) => {
    console.log('updateTitleHandler', title);
  };
</script>

<template>
  <BaseViewVue>
    <template #header> Dialog </template>
    <template #main>
      <ElButton text @click="setDialogVisible = true"> 打开弹窗1 </ElButton>
      <ElButton text @click="setDialogVisible2 = true"> 打开弹窗2 </ElButton>
      <div>
        <FiDialog v-model="setDialogVisible" @open="openHandler" title="弹窗1">
          <span>This is a message 1</span>
          <template #footer>
            <ElButton @click="setDialogVisible = false">Cancel</ElButton>
          </template>
        </FiDialog>
        <FiDialog
          v-model="setDialogVisible2"
          @open="openHandler"
          title="弹窗2"
          :update-title="updateTitleHandler"
        >
          <span>This is a message 2</span>
          <template #footer>
            <ElButton @click="setDialogVisible2 = false">Cancel</ElButton>
          </template>
        </FiDialog>
      </div>
    </template>
  </BaseViewVue>
</template>
