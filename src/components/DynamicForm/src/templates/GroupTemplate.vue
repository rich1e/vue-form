<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-12-04 17:38:35
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Group.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'GroupTemplate' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';

  import FormGroup from '../components/FormGroup.vue';
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

  const { scene, groups, actions, rule } = props.config;

  const { slots } = useDynamicSlots({ groups });
</script>

<template>
  <FormGroup :groups="groups" :rule="rule">
    <template #="{ rank, dynamicModel }">
      <FormFields :scene="scene" :field="rank" :dynamic-model="dynamicModel">
        <!-- 渲染自定义表单字段 -->
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
  </FormGroup>
</template>
