<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-23 20:54:15
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
  import { ref, h } from 'vue';

  import BaseViewVue from '/@/components/Layouts/BaseView.vue';
  import DynamicForm from '/@/components/DynamicForm';
  import {
    checkAge,
    checkEmpty,
  } from '../components/DynamicForm/src/hooks/useValidator';
  import { ConfigType } from '../components/DynamicForm/types';
  import { pageBack } from '../components/DynamicForm/src/hooks/useActions';

  import InCheckbox from '/@/example/jsx/components/Checkbox';

  const initCheckBoxValue = ref(false);
  const initCheckBoxValue1 = ref(false);

  const emits = defineEmits(['update:modelValue']);

  const rule = {
    username: [{ validator: checkEmpty, trigger: 'blur', required: true }],
    age: [{ validator: checkAge, trigger: 'blur', required: true }],
    birth: [{ validator: checkEmpty, trigger: 'blur', required: true }],
    recruit: [{ validator: checkEmpty, trigger: 'change', required: true }],
    skill: [{ validator: checkEmpty, trigger: 'blur', required: true }],
  };

  const actions = {
    onSubmit: {
      btnText: '提交',
      handler: (formEl: any) => {
        if (!formEl) return;
        formEl.validate((valid: any) => {
          if (valid) {
            console.log('submit for view!');
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
    onBack: {
      btnText: '返回',
      handler: () => {
        console.log('onBack');
        pageBack();
      },
    },
    onRest: {
      btnText: '重置',
      handler: (formEl: any) => {
        console.log('onRest for view');
        if (!formEl) return;
        formEl.resetFields();
      },
    },
  };

  const formConfig: ConfigType = {
    scene: 'uniseriate',
    field: [
      {
        control: 'Input',
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
        control: 'Input',
        label: '曾用名',
        prop: 'iiusername',
        props: {
          type: 'text',
          placeholder: '请输入姓名',
          modelValue: 'iiusername',
        },
        bind: 'x',
        default: '-',
      },
      {
        control: 'Input',
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
        control: 'Switch',
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
        control: 'Select',
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
      {
        control: 'Slots',
        label: '招聘渠道',
        prop: 'recruit',
        slots: function (props: any) {
          console.log('slots 1#');
          console.log('slots #', props);
          // props['recruit'] = value;

          /**
           * @see https://cn.vuejs.org/api/render-function.html#h
           */
          return h(InCheckbox, {
            multiple: [
              {
                // vModel: initCheckBoxValue.value,
                modelValue: initCheckBoxValue.value,
                // 'onUpdate:modelValue': (value: any) => {
                //   initCheckBoxValue.value = value;
                // },
                'onUpdate:modelValue': (value: any) => {
                  console.log('update:modelValue', value);
                  console.log(props['recruit']);
                  emits('update:modelValue', value);
                },
                label: 'Slots 1',
                onChange: (val: any) => {
                  console.log('招聘渠道 #', val);
                  props['recruit'] = val;
                  // initCheckBoxValue.value = val;
                },
              },
            ],
          });
        },
        props: {
          modelValue: 'recruit',
        },
      },
      {
        control: 'Checkbox',
        label: '技能',
        prop: 'skill',
        props: {
          modelValue: 'skill',
          label: 'Vue',
        },
      },
    ],
    rule,
    actions,
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
