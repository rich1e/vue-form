/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 20:50:38
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-24 20:50:42
 * @FilePath: /vue-form/src/example/dynamicComponents/shared.ts
 * @Description:
 *
 */
import { ComponentPublicInstance, PropType, Ref } from 'vue';

export const formItemProps = {
  deepRef: {
    type: [Function, Object] as PropType<
      (
        ref: Element | ComponentPublicInstance | null,
        refs: Record<string, any>,
      ) => void | Ref
    >,
  },
};
