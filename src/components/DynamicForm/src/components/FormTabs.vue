<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-12-04 18:41:58
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
  import type { PropType } from 'vue';
  import { inject } from 'vue';
  import { ElTabs, ElTabPane } from 'element-plus';

  import { formInjectionKey } from '../../keys';
  import { TabPanesType, TabsType } from '../../types';

  const props = defineProps({
    tabs: {
      type: Object as PropType<TabsType>,
      default: {},
    },
  });

  const { tabs } = props;
  const { tabType, tabPanes } = tabs;

  const formData: any = inject(formInjectionKey);

  /**
   * 当 tab 切换时，更新 formData 数据
   * @param pane
   */
  const tabClickHandler = (pane: any) => {
    const { index } = pane;
    const currentTab: TabPanesType = tabPanes[index];
    const { paneType } = currentTab;

    Object.assign(formData, {
      paneType,
      /**
       * @see https://blog.csdn.net/weixin_38629529/article/details/127131932
       */
      [paneType]: currentTab[paneType as keyof TabPanesType],
    });
    console.table(formData);
  };
</script>

<template>
  <ElTabs :type="tabType" @tab-click="tabClickHandler">
    <template v-if="tabPanes">
      <ElTabPane
        :label="tab.title"
        v-for="(tab, index) in tabPanes"
        :key="`${tab.title}_${index}`"
      >
        <slot :tabPane="tab" />
      </ElTabPane>
    </template>
  </ElTabs>
</template>
