/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-12-01 16:01:05
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-02 17:36:13
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

export const filterField = (field: any) => {
  return field
    ?.filter((item: any) => item.control === 'Slots')
    .map((item: any) => item.prop);
};

export const filterGroups = (groups: any) => {
  return groups
    ?.flat()
    ?.filter((item: any) => item.control === 'Slots')
    .map((item: any) => item.prop);
};

const filterTabs = (tabs: TabsType) => {
  let types = '';

  // 找到有数据的直接返回，停止后续遍历
  const fisrt: any = tabs.tabsTable.find((item: any) => {
    const { type } = item;
    if (item[type]) {
      types = type;
      return true;
    }
  });

  return fisrt[types].map((item: any) => item.prop);
};

const getSlots = (param: GetSlotsParamType) => {
  const { field, groups, tabs } = param;

  if (field) return filterField(field);
  if (groups) return filterGroups(groups);
  if (tabs) return filterTabs(tabs);
};

/**
 * 动态计算 slots
 * @param props
 * @returns
 */
const useDynamicSlots = (props: Props): UseRenderFields => {
  const slots = ref<string[]>([]);

  onMounted(() => {
    slots.value = getSlots(props);
  });

  return {
    slots,
  };
};

export default useDynamicSlots;
