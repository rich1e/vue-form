<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:37:02
 * @LastEditors: rich1e
 * @LastEditTime: 2022-12-04 17:43:41
 * @FilePath: /vue-form/src/components/DynamicForm/Default.vue
 * @Description:
 *
-->
<script lang="ts">
  export default { name: 'DynamicForm' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { provide, reactive, watch, computed } from 'vue';

  import BiserialTemplate from './src/templates/BiserialTemplate.vue';
  import GroupTemplate from './src/templates/GroupTemplate.vue';
  import TabTemplate from './src/templates/TabTemplate.vue';
  import UniseriateTemplate from './src/templates/UniseriateTemplate.vue';

  import { ConfigType } from './types';
  import useDynamicSlots, { watchSlots } from './src/hooks/useDynamicSlots';
  import { formInjectionKey } from './keys';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  const { config } = props;
  const { scene, field, groups, tabs } = config;

  const formData: any = reactive({});
  provide(formInjectionKey, formData);

  const setComponent = computed(() => {
    const table = {
      uniseriate: UniseriateTemplate,
      biserial: BiserialTemplate,
      group: GroupTemplate,
      tab: TabTemplate,
    };

    return table[scene];
  });

  const { slots } = useDynamicSlots({ field, groups, tabs });

  watchSlots(formData, slots);
</script>

<template>
  <div>
    <component :is="setComponent" :config="config">
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
