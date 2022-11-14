<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 14:46:27
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Biserial.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'Biserial' };
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  import {
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
  } from 'element-plus';

  const value = ref('');

  const options = [
    {
      value: 'Option1',
      label: '上海',
    },
    {
      value: 'Option2',
      label: '北京',
    },
    {
      value: 'Option3',
      label: '深圳',
    },
    {
      value: 'Option3',
      label: '重庆',
    },
  ];
</script>

<template>
  <ElForm>
    <!-- TODO ElRow 默认会添加 margin 值，手动设置后可以覆盖默认行为 -->
    <ElRow :gutter="20" align="middle" justify="space-between">
      <ElCol :span="12">
        <ElFormItem label="姓名">
          <ElInput />
        </ElFormItem>
      </ElCol>

      <ElCol :span="12">
        <ElFormItem label="年龄">
          <ElInput />
        </ElFormItem>
      </ElCol>

      <ElCol :span="12">
        <ElFormItem label="已婚">
          <ElInput />
        </ElFormItem>
      </ElCol>

      <ElCol :span="12">
        <ElFormItem label="出生地">
          <ElSelect v-model="value" placeholder="请选择出生地">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </ElSelect>
        </ElFormItem>
      </ElCol>

      <ElCol :span="24">
        <ElFormItem>
          <ElButton> Cancel </ElButton>
          <ElButton> Apply </ElButton>
          <ElButton> Submit 33</ElButton>
        </ElFormItem>
      </ElCol>
    </ElRow>
  </ElForm>
</template>
