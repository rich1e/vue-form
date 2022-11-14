/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 14:52:56
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:31:19
 * @FilePath: /vue-form/src/components/DynamicForm/types.ts
 * @Description:
 *
 */

import { type } from 'os';
import { ComponentPublicInstance, PropType, Ref } from 'vue';

export type ConfigType = {
  /** 表单样式场景 */
  scene: string;
  /** 表单输入类型 */
  field: any[];
  /** 表单验证规则 */
  rule: any;
  /** 表单操作 */
  actions?: any;
  /** 表单插槽 */
  slots?: any;
};

// declare type RefType<T> = T | null;

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
