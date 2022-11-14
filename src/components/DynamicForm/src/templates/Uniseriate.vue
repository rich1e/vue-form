<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 18:18:05
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Uniseriate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'Uniseriate' };
</script>

<script setup lang="ts">
  import { PropType, reactive, ref } from 'vue';
  import {
    ElForm,
    ElFormItem,
    ElInput,
    ElSwitch,
    ElSelect,
    ElOption,
    ElButton,
  } from 'element-plus';

  import { checkAge, checkEmpty } from '../hooks/useValidator';
  import { onRest, onSubmit } from '../hooks/useActions';
  import { ConfigType } from '../../types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  console.log('Uniseriate', props);

  const { field, actions } = props.config;

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

  /** 表单字段 */
  const formModel = reactive({
    username: '',
    age: undefined,
    married: false,
    birth: '',
  });
  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);
  /** 表单规则 */
  const formRules = reactive<Record<string, any>>({
    username: [{ validator: checkEmpty, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
    birth: [{ validator: checkEmpty, trigger: 'blur' }],
  });

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});
</script>

<template>
  <ElForm :model="dynamicFormModel" ref="formRef" :rules="formRules">
    <template v-if="field">
      <ElFormItem
        v-for="(item, index) in field"
        :key="item.prop"
        :label="item.label"
        :prop="`${item.prop}`"
      >
        <!-- // TODO https://blog.csdn.net/weixin_47908090/article/details/125735021 -->
        <ElInput
          v-if="item.controlType === 'Input'"
          v-model="dynamicFormModel[`${item.prop}`]"
        />
        <ElSwitch
          v-else-if="item.controlType === 'Switch'"
          v-model="dynamicFormModel[`${item.prop}`]"
        />
        <ElSelect
          v-else="item.controlType === 'Select'"
          v-model="dynamicFormModel[`${item.prop}`]"
        >
          <ElOption
            v-for="opt in item.options"
            :key="opt.value"
            :label="opt.label"
            :value="opt.value"
          />
        </ElSelect>
      </ElFormItem>
    </template>

    <template v-if="actions">
      <ElButton
        v-if="actions.onSubmit"
        @click="actions.onSubmit.handler(formRef)"
      >
        {{ actions.onSubmit.btnText }}
      </ElButton>
      <ElButton
        v-if="actions.onCancel"
        @click="actions.onCancel.handler(formRef)"
      >
        {{ actions.onCancel.btnText }}
      </ElButton>
      <ElButton v-if="actions.onRest" @click="actions.onRest.handler(formRef)">
        {{ actions.onRest.btnText }}
      </ElButton>
    </template>
  </ElForm>
</template>

<!-- <template>
  <ElForm :model="formModel" ref="formRef" :rules="formRules">
    <ElFormItem label="姓名" prop="username">
      <ElInput v-model="formModel.username" />
    </ElFormItem>
    <ElFormItem label="年龄" prop="age">
      <ElInput v-model="formModel.age" />
    </ElFormItem>
    <ElFormItem label="已婚" prop="married">
      <ElSwitch v-model="formModel.married" />
    </ElFormItem>
    <ElFormItem label="出生地" prop="birth">
      <ElSelect v-model="formModel.birth" placeholder="请选择出生地">
        <ElOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
    </ElFormItem>
    <ElFormItem>
      <ElButton> Cancel </ElButton>
      <ElButton @click="onRest(formRef)"> Rest </ElButton>
      <ElButton @click="onSubmit(formRef)"> Submit </ElButton>
    </ElFormItem>
  </ElForm>
</template> -->
