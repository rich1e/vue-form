/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-12-01 16:01:05
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-02 11:17:10
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useDynamicSlots.ts
 * @Description:
 *
 */
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

import type { FieldType, TabsType } from '../../types';

interface Props {
  field?: FieldType[];
  groups?: FieldType[][];
  tabs?: TabsType;
}

interface GetSlotsParamType extends Props {}

interface UseRenderFields {
  slots: Ref<string[]>;
}

/**
 * 动态计算 slots
 * @param props
 * @returns
 */
const useDynamicSlots = (props: Props): UseRenderFields => {
  const slots = ref<string[]>([]);

  const filterField = (field: any) => {
    return field
      ?.filter((item: any) => item.control === 'Slots')
      .map((item: any) => item.prop);
  };

  const filterGroups = (groups: any) => {
    return groups
      ?.flat()
      ?.filter((item: any) => item.control === 'Slots')
      .map((item: any) => item.prop);
  };

  const filterTabs = (tabs: TabsType) => {
    return tabs.tabsTable;
  };

  const getSlots = (param: GetSlotsParamType) => {
    const { field, groups, tabs } = param;

    if (field) return filterField(field);
    if (groups) return filterGroups(groups);
    if (tabs) return filterTabs(tabs);
  };

  onMounted(() => {
    slots.value = getSlots(props);
  });

  return {
    slots,
  };
};

export default useDynamicSlots;
