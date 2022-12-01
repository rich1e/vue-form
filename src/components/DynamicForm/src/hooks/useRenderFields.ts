/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-12-01 16:01:05
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-01 16:17:59
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useRenderFields.ts
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

const useRenderFields = (props: Props): UseRenderFields => {
  const { field } = props;

  const slots = ref<string[]>([]);

  const getSlots = (field: any) => {
    return field
      ?.filter((item: any) => item.control === 'Slots')
      .map((item: any) => item.prop);
  };

  onMounted(() => {
    slots.value = getSlots(field);
    console.table(slots.value);
  });

  return {
    slots,
  };
};

export default useRenderFields;
