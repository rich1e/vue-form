/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-12-01 16:01:05
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-01 16:36:04
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useDynamicSlots.ts
 * @Description:
 *
 */
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { FieldType } from '../../types';

interface Props {
  field?: FieldType[];
}

interface UseRenderFields {
  slots: Ref<string[]>;
}

/**
 * 动态计算slots
 * @param props
 * @returns
 */
const useDynamicSlots = (props: Props): UseRenderFields => {
  const { field } = props;

  const slots = ref<string[]>([]);

  const getSlots = (field: any) => {
    return field
      ?.filter((item: any) => item.control === 'Slots')
      .map((item: any) => item.prop);
  };

  onMounted(() => {
    slots.value = getSlots(field);
  });

  return {
    slots,
  };
};

export default useDynamicSlots;
