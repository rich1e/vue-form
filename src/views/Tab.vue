<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 14:48:51
 * @FilePath: /vue-form/src/views/Tab.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';
  import DynamicForm from '/@/components/DynamicForm';
  import { ConfigType } from '../components/DynamicForm/types';

  const formConfig: ConfigType = {
    scene: 'tab',
    field: [],
  };
</script>

<template>
  <BaseViewVue>
    <template #header> Tab </template>
    <template #main>
      <DynamicForm :config="formConfig" />
    </template>
  </BaseViewVue>
</template>
