/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 14:03:05
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 19:32:58
 * @FilePath: /vue-form/src/components/DynamicForm/src/components/FormItems.tsx
 * @Description:
 *
 */
import { ref } from 'vue';
import {
  ElInput,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElSwitch,
} from 'element-plus';

import { FSwitch } from './Switch';

type InputlistType = {
  [key: string]: () => JSX.Element;
};

/**
 * 获取输入类型
 * @param type
 * @see https://github.com/microsoft/TypeScript/issues/35859#issuecomment-587290272
 * @see https://tya.zone/archives/36/
 */
export const returnFormItems = (
  type: string,
  props: any,
): Record<string, any> => {
  const inputlist: InputlistType = {
    Input: () => {
      return <ElInput {...props} />;
    },
    InputNum: () => <ElInputNumber {...props} />,
    Switch: () => {
      const value1 = ref(true);
      return <FSwitch v-model={value1} />;
    },
    Switch_V1: () => {
      const test = Object.assign({}, props);

      return <ElSwitch {...test} />;
    },
    Switch_V2: () => {
      const value1 = ref(false);
      const refSwitch = ref<InstanceType<typeof ElSwitch> | null>(null);

      /**
       * el-switch cannot specify on-value under JSX
       * @see https://github.com/ElemeFE/element/issues/7091
       */
      const data = {
        disabled: false,
        activeText: 'switch',
        modelValue: value1.value,
        onChange: ($event: any) => {
          console.log(refSwitch!.value!.checked);
          console.log('onUpdate 1#', $event);
          console.log('onUpdate 2#', value1.value);
        },
      };

      return <ElSwitch ref={refSwitch} {...data} />;
    },
    Select_V2: () => {
      const value = ref('');

      const options = [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
      ];

      const onChangeSelect = (...rest: any) => {
        console.log('onChangeSelect', rest);
      };

      // https://github.com/vuejs/babel-plugin-jsx/issues/393#issuecomment-924532142
      // https://blog.csdn.net/qq_32067561/article/details/124970131
      // https://www.jianshu.com/p/0464d573fc84

      return (
        <ElSelect
          placeholder={'please select your zone'}
          modelValue={value}
          onChange={onChangeSelect}
          {...{
            'onUpdate:modelValue': ($event) => {
              value.value = $event.value;
            },
          }}
        >
          {options.map((item) => {
            // https://blog.csdn.net/moxunjinmu/article/details/114923245
            return (
              <ElOption key={item.value} label={item.label} value={item} />
            );
          })}
        </ElSelect>
      );
    },
  };

  return inputlist[type];
};
