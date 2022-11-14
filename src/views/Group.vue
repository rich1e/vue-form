<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-07 17:50:51
 * @FilePath: /vue-form/src/views/Group.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';
  import DynamicForm from '/@/components/DynamicForm';

  const formConfig = {
    // scene: 'halver | trisector | group | tab | none',
    scene: 'group',
    field: [
      {
        type: 'input',
        label: 'name',
        prop: 'username',
        bind: 'x',
        default: '-',
      },
      {
        type: 'swich',
        label: 'name',
        prop: 'married',
        bind: 'x',
        disabled: true,
      },
    ],
    rule: {},
    options: {
      onSubmit: () => {},
      onCancel: () => {},
      onApply: () => {},
    },
    slots: () => {},
  };
</script>

<template>
  <BaseViewVue>
    <template #header> Group </template>
    <template #main>
      <DynamicForm :config="formConfig" />
    </template>
  </BaseViewVue>
</template>
