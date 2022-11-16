<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 14:10:27
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-16 13:25:21
 * @FilePath: /vue-form/src/views/Tab.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import BaseViewVue from '/@/components/Layouts/BaseView.vue';
  import DynamicForm from '/@/components/DynamicForm';
  import { ConfigType } from '../components/DynamicForm/types';
  import {
    checkAge,
    checkEmpty,
  } from '../components/DynamicForm/src/hooks/useValidator';
  import { pageBack } from '../components/DynamicForm/src/hooks/useActions';

  const rule = {
    username: [{ validator: checkEmpty, trigger: 'blur', required: true }],
    age: [{ validator: checkAge, trigger: 'blur', required: true }],
    birth: [{ validator: checkEmpty, trigger: 'blur', required: true }],
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
    onBack: {
      btnText: '返回',
      handler: () => {
        console.log('onBack');
        pageBack();
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
        console.log('onRest for view');
        if (!formEl) return;
        formEl.resetFields();
      },
    },
  };

  const formConfig: ConfigType = {
    scene: 'tab',
    tabs: {
      tabsType: 'border-card',
      tabsTable: [
        {
          label: 'Uniseriate',
          uniseriate: [
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
          ],
        },
        {
          label: 'Biserial',
          biserial: [
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
          ],
        },
        {
          label: 'Group',
          group: [
            [
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
            ],
            [
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
            ],
          ],
        },
      ],
    },
    rule,
    actions,
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
