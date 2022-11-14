/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 14:52:56
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 12:45:21
 * @FilePath: /vue-form/src/components/DynamicForm/types.ts
 * @Description:
 *
 */
import { ComponentPublicInstance, PropType, Ref } from 'vue';

/**
 * @see https://www.freecodecamp.org/chinese/news/advanced-typescript-types-cheatsheet/
 */

export type FieldType = {
  /** 表单输入类型 */
  controlType: 'Input' | 'Switch' | 'Select';
  label?: string;
  prop: string;
  props: {
    type?: 'text';
    activeText?: string;
    inactiveText?: string;
    placeholder?: string;
    modelValue: string;
  };
  options?: any[];
  bind: string;
  default?: string;
  disabled?: boolean;
};

/**
 * 表单配置
 */
export type ConfigType = {
  /** 表单样式场景 */
  scene: string;
  /** 表单字段项 */
  field: FieldType[];
  /** 表单验证规则 */
  rule?: any;
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
