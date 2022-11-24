/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 19:57:01
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-24 20:38:34
 * @FilePath: /vue-form/src/example/dynamicComponents/components.ts
 * @Description:
 *
 */
// export * from './Checkbox/index';
// export * from './CustInput/index';
// export * from './Inputs';
// export * from './Radio/index';
// export * from './Select/index';
// export * from './Switch/index';
import InSwitch from '/@/example/jsx/components/Switch';
import InSelect from '/@/example/jsx/components/Select';
import InInput from '/@/example/jsx/components/Inputs';
import InRadio from '/@/example/jsx/components/Radio';
import InCheckbox from '/@/example/jsx/components/Checkbox';
import CustInput from '/@/example/jsx/components/CustInput';

export type ComponentsType = Record<string, any>;

export const components: ComponentsType = {
  InSwitch,
  InSelect,
  InInput,
  InRadio,
  InCheckbox,
  CustInput,
};
