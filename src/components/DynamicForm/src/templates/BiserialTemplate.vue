<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-12-04 17:36:20
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/BiserialTemplate.vue
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
  import type { PropType } from 'vue';
  import { ref, provide } from 'vue';
  import { ElForm } from 'element-plus';

  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';
  import FormBiserial from '../components/FormBiserial.vue';

  import type { ConfigType } from '../../types';
  import useDynamicSlots from '../hooks/useDynamicSlots';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType> | any,
      default: {},
    },
  });

  const { scene, field, actions, rule } = props.config;

  const { slots } = useDynamicSlots({ field });

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  provide('FORM_REF', formRef);
</script>

<template>
  <FormBiserial :field="field" :rule="rule">
    <template #="{ field, dynamicModel }">
      <FormFields :scene="scene" :item="field" :dynamic-model="dynamicModel">
        <template
          #[item]="{ formModel }"
          v-for="(item, idx) in slots"
          :key="`${item}_${idx}`"
        >
          <slot :name="item" :slotModel="formModel" />
        </template>
      </FormFields>
    </template>

    <template #actions>
      <FormActions :scene="scene" :actions="actions" />
    </template>
  </FormBiserial>
</template>
