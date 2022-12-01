/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-12-01 16:01:05
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-01 17:32:26
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useDynamicSlots.ts
 * @Description:
 *
 */
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { FieldType } from '../../types';

interface Props {
  field?: FieldType[];
  groups?: FieldType[][];
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
    console.table(groups);
    return groups
      ?.flat()
      ?.filter((item: any) => item.control === 'Slots')
      .map((item: any) => item.prop);
  };

  const getSlots = (param: GetSlotsParamType) => {
    const { field, groups } = param;

    if (field) return filterField(field);
    if (groups) return filterGroups(groups);
  };

  onMounted(() => {
    console.table(getSlots(props));
    slots.value = getSlots(props);
  });

  return {
    slots,
  };
};

export default useDynamicSlots;
