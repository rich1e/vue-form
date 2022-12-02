<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:37:02
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-02 17:33:52
 * @FilePath: /vue-form/src/components/DynamicForm/Default.vue
 * @Description:
 *
-->
<script lang="ts">
  export default { name: 'DynamicForm' };
</script>

<script setup lang="ts">
  import type { Component, PropType, Ref } from 'vue';
  import { ref, provide, reactive, watch, onMounted } from 'vue';

  import BiserialTemplate from './src/templates/BiserialTemplate.vue';
  import GroupTemplate from './src/templates/GroupTemplate.vue';
  import TabTemplate from './src/templates/TabTemplate.vue';
  import UniseriateTemplate from './src/templates/UniseriateTemplate.vue';

  import { ConfigType } from './types';
  import useDynamicSlots, {
    filterField,
    filterGroups,
  } from './src/hooks/useDynamicSlots';
  import { formInjectionKey } from './keys';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  const { config } = props;
  const { scene } = config;

  const formData: any = reactive({});

  provide(formInjectionKey, formData);

  const slotsComputed = ref<string[]>([]);

  const { slots } = useDynamicSlots({
    field: props.config.field,
    groups: props.config.groups,
    tabs: props.config.tabs,
  });

  onMounted(() => {
    slotsComputed.value = slots.value;
  });

  watch(formData, (newVal: any) => {
    const { type } = newVal;
    if (type === 'biserial' || type === 'uniseriate') {
      slotsComputed.value = filterField(newVal[type]);
    } else if (type === 'group') {
      slotsComputed.value = filterGroups(newVal[type]);
    }
  });

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
        v-for="(item, idx) in slotsComputed"
        :key="`${item}_${idx}`"
      >
        <slot :name="item" :fieldModel="slotModel" />
      </template>
    </component>
  </div>
</template>
