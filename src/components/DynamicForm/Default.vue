<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:37:02
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-01 16:35:16
 * @FilePath: /vue-form/src/components/DynamicForm/Default.vue
 * @Description:
 *
-->
<script lang="ts">
  export default { name: 'DynamicForm' };
</script>

<script setup lang="ts">
  import type { Component, PropType, Ref } from 'vue';
  import { ref } from 'vue';
  import useDynamicSlots from './src/hooks/useDynamicSlots';

  import BiserialTemplate from './src/templates/Biserial.vue';
  import GroupTemplate from './src/templates/Group.vue';
  import TabTemplate from './src/templates/Tab.vue';
  import UniseriateTemplate from './src/templates/Uniseriate.vue';

  import { ConfigType } from './types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  const { config } = props;
  const { scene } = config;

  const { slots } = useDynamicSlots({ field: props.config.field });

  // TODO 优化列表
  const componentTable: Record<string, Component> = {
    uniseriate: UniseriateTemplate,
    biserial: BiserialTemplate,
    group: GroupTemplate,
    tab: TabTemplate,
  };

  const componentName: Ref<string> = ref(scene);

  console.groupCollapsed('DynamicSlot Name');
  console.table(componentName);
  console.groupEnd();
</script>

<template>
  <div>
    <component :is="componentTable[componentName]" :config="config">
      <template
        #[item]="{ slotModel }"
        v-for="(item, idx) in slots"
        :key="`${item}_${idx}`"
      >
        <slot :name="item" :fieldModel="slotModel" />
      </template>
    </component>
  </div>
</template>
