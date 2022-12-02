<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-02 17:36:37
 * @FilePath: /vue-form/src/components/DynamicForm/src/components/FormTabs.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'FormTabs' };
</script>

<script setup lang="ts">
  import { ElTabs, ElTabPane } from 'element-plus';
  import { PropType, inject } from 'vue';
  import { formInjectionKey } from '../../keys';
  import { TabsType } from '../../types';

  const props = defineProps({
    tabs: {
      type: Object as PropType<TabsType>,
      default: {},
    },
  });

  const { tabs } = props;
  const { tabsTable, tabsType } = tabs;

  const formData: any = inject(formInjectionKey);

  const tabClickHandler = (pane: any) => {
    const { index } = pane;
    const currentTab: any = tabsTable[index];
    const { type } = currentTab;

    Object.assign(formData, { type, [type]: currentTab[type] });
  };
</script>

<template>
  <!-- TODO ElTabPane slots -->
  <ElTabs :type="tabsType" @tab-click="tabClickHandler">
    <template v-if="tabsTable">
      <ElTabPane
        :label="tab.label"
        v-for="(tab, index) in tabsTable"
        :key="`${tab.label}_${index}`"
      >
        <slot :tabPane="tab" />
      </ElTabPane>
    </template>
  </ElTabs>
</template>
