<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 17:55:14
 * @FilePath: /vue-form/src/views/Uniseriate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'UniseriateView' };
</script>
<script setup lang="ts">
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';
  import DynamicForm from '/@/components/DynamicForm';

  const formConfig = {
    scene: 'uniseriate',
    field: [
      {
        controlType: 'Input',
        label: '姓名',
        prop: 'username',
        props: {
          type: 'text',
          placeholder: '请输入姓名',
          modelValue: 'username',
        },
        bind: 'x',
        default: '-',
      },
      {
        controlType: 'Input',
        label: '年龄',
        prop: 'age',
        props: {
          type: 'text',
          placeholder: '请输入年龄',
          modelValue: 'age',
        },
        bind: 'x',
        default: '-',
      },
      {
        controlType: 'Switch',
        label: '已婚',
        prop: 'married',
        props: {
          activeText: '是',
          inactiveText: '否',
          modelValue: 'married',
        },
        bind: 'x',
        default: '-',
      },
      {
        controlType: 'Select',
        label: '出生地',
        prop: 'birth',
        props: {
          placeholder: '请选择出生地',
          modelValue: 'birth',
        },
        options: [
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
            value: 'Option4',
            label: '重庆',
          },
          {
            value: 'Option5',
            label: '天津',
          },
        ],
        bind: 'x',
        disabled: true,
      },
    ],
    rule: {
      username: [
        {
          required: true,
          message: 'Please input user name',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 20,
          message: 'Age should be 3 to 20',
          trigger: 'blur',
        },
      ],
      age: [
        {
          required: true,
          message: 'Please input user age',
          trigger: 'change',
        },
        {
          min: 18,
          max: 99,
          message: 'Age should be 18 to 99',
          trigger: 'blur',
        },
      ],
      birth: [
        {
          required: true,
          message: 'Please select Place of birth',
          trigger: 'change',
        },
      ],
    },
    actions: {
      onSubmit: {
        btnText: '提交',
        handler: (formEl: any) => {
          console.log('onSubmit');
          if (!formEl) return;
          formEl.validate((valid: any) => {
            if (valid) {
              console.log('submit!');
            } else {
              console.log('error submit!');
              return false;
            }
          });
        },
      },
      onCancel: {
        btnText: '取消',
        handler: () => {
          console.log('onCancel');
        },
      },
      onRest: {
        btnText: '重置',
        handler: (formEl: any) => {
          console.log('onRest');
          if (!formEl) return;
          formEl.resetFields();
        },
      },
    },
    slots: () => {},
  };
</script>

<template>
  <BaseViewVue>
    <template #header> Uniseriate </template>
    <template #main>
      <DynamicForm :config="formConfig" />
    </template>
  </BaseViewVue>
</template>
