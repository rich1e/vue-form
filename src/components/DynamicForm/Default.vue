<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:37:02
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:56:35
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
  import Biserial from './src/templates/Biserial.vue';
  import Uniseriate from './src/templates/Uniseriate.vue';
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
    biserial: Biserial,
    uniseriate: Uniseriate,
  };

  const componentName: Ref<string> = ref(scene);
</script>

<template>
  <component :is="componentTable[componentName]" :config="config" />
</template>
