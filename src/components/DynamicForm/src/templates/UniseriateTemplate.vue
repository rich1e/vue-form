<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-05 10:06:36
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/UniseriateTemplate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'UniseriateTemplate' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { reactive, ref } from 'vue';
  import { ElForm } from 'element-plus';

  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';

  import type { ConfigType } from '../../types';
  import useDynamicSlots from '../hooks/useDynamicSlots';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  const { scene, field, actions, rule } = props.config;

  // 表单引用
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  // 动态表单字段
  const dynamicFormModel: any = reactive({});

  // 获取动态 slots
  const { slots } = useDynamicSlots({ field });
</script>

<template>
  <ElForm
    :model="dynamicFormModel"
    ref="formRef"
    :rules="rule"
    label-width="80px"
  >
    <!-- 渲染表单字段 -->
    <FormFields :scene="scene" :field="field" :dynamic-model="dynamicFormModel">
      <!-- 渲染自定义表单字段 -->
      <template
        #[item]="{ formModel }"
        v-for="(item, idx) in slots"
        :key="`${item}_${idx}`"
      >
        <slot :name="item" :slotModel="formModel" />
      </template>
    </FormFields>

    <!-- 渲染操作按钮 -->
    <FormActions :scene="scene" :actions="actions" />
  </ElForm>
</template>
