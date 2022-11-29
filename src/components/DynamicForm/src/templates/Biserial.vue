<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 14:56:58
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Biserial.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'BiserialTemplate' };
</script>

<script setup lang="ts">
  import { PropType, ref, provide } from 'vue';
  import { ElForm } from 'element-plus';

  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';
  import FormBiserial from '../components/FormBiserial.vue';

  import type { ConfigType } from '../../types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType> | any,
      default: {},
    },
  });

  console.debug('This BiserialTemplate');
  console.groupCollapsed('Biserial Props');
  console.table(props);
  console.groupEnd();

  const { scene, field, actions, rule } = props.config;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  provide('FORM_REF', formRef);
</script>

<template>
  <FormBiserial :field="field" :rule="rule">
    <template #="{ field, dynamicModel }">
      <FormFields :scene="scene" :item="field" :dynamic-model="dynamicModel">
        <!-- 渲染自定义表单字段 -->
        <template #customFields="{ formModel }">
          <slot name="biserial" :slotModel="formModel" />
        </template>
      </FormFields>
    </template>

    <template #actions>
      <FormActions :scene="scene" :actions="actions" />
    </template>
  </FormBiserial>
</template>
