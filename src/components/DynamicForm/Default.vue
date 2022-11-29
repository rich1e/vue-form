<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:37:02
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 14:00:39
 * @FilePath: /vue-form/src/components/DynamicForm/Default.vue
 * @Description:
 *
-->
<script lang="ts">
  export default { name: 'DynamicForm' };
</script>

<script setup lang="ts">
  import type { Component, PropType, Ref } from 'vue';
  import { computed, ref } from 'vue';

  import UniseriateTemplate from './src/templates/Uniseriate.vue';
  import BiserialTemplate from './src/templates/Biserial.vue';
  import GroupTemplate from './src/templates/Group.vue';
  import TabTemplate from './src/templates/Tab.vue';

  import { ConfigType } from './types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  const { config } = props;
  const { scene } = config;

  // TODO 优化列表
  const componentTable: Record<string, Component> = {
    uniseriate: UniseriateTemplate,
    biserial: BiserialTemplate,
    group: GroupTemplate,
    tab: TabTemplate,
  };

  const componentName: Ref<string> = ref(scene);

  const dynamicSlot = computed(() => scene);
</script>

<template>
  <div :style="{ textAlign: 'left' }">
    <!-- <component :is="componentTable[componentName]" :config="config" /> -->
    <component :is="componentTable[componentName]" :config="config">
      <!-- <template #uniseriate="{ slotModel }"> -->
      <template #[dynamicSlot]="{ slotModel }">
        <slot name="customSlots" :fieldModel="slotModel" />
      </template>
    </component>
  </div>
</template>
