<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 23:33:37
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Uniseriate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'Tab' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { reactive, ref } from 'vue';
  import { ElForm, ElTabs, ElTabPane } from 'element-plus';

  import type { ConfigType, FieldType } from '../../types';

  const props = defineProps({
    tabs: {
      type: Array as any,
      default: [],
    },
  });

  console.log('This Tab', props);

  const { tabs } = props;
</script>

<template>
  <!-- TODO ElTabPane slots -->
  <ElTabs type="border-card">
    <template v-if="tabs">
      <ElTabPane
        :label="tab.label"
        v-for="(tab, index) in tabs"
        :key="`${tab}_${index}`"
      >
        <slot />
      </ElTabPane>
    </template>
  </ElTabs>
</template>
