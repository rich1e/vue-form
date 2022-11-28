/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 19:55:11
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-28 17:39:38
 * @FilePath: /vue-form/src/example/dynamicComponents/index.tsx
 * @Description:
 *
 */
import { computed, defineComponent, reactive, ref } from 'vue';
import { ElButton, ElDivider, ElForm, ElFormItem, ElInput } from 'element-plus';

import {
  renderCheckbox,
  renderInput,
  renderRadio,
  renderSelect,
  renderSlots,
  renderSwitch,
} from './components/fields';

import DyInput from './components/input';

export default defineComponent({
  name: '',
  setup() {
    const renderDynamicComponents = () => {
      const formModel = reactive({
        test1: '',
        test2: '',
        test3: true,
      });

      const inputVal1 = ref('');

      const formJson = [
        {
          type: 'input',
          label: 'test1',
          props: {
            modelValue: inputVal1.value,
            'onUpdate:modelValue': (value: any) => {
              console.log(value);
              inputVal1.value = value;
            },
          },
        },
        {
          type: 'input',
          label: 'test2',
          props: {
            modelValue: formModel.test2,
          },
        },
      ];

      const onSubmit = () => {
        console.log(formModel);
      };

      const renderFields = (item: any) => {
        const { props } = item;

        const getComponent = (type: string) => {
          type tplotOptions = {
            [key: string]: any;
          };

          const components: tplotOptions = {
            input: DyInput,
          };

          return components[type];
        };

        const DyComponent = computed(() => getComponent(item.type as string));
        // console.log(DyComponent);

        const { modelValue, ...rest } = props;
        const modelValueRef = ref(modelValue);

        return (
          <DyComponent.value
            // v-model={modelValue}
            // {...{
            //   'onUpdate:modelValue': (value: any) => {
            //     console.log(value);
            //     modelValueRef.value = value;
            //   },
            // }}
            // {...rest}
            {...props}
          />
        );
        // return <DyComponent.value {...props} />;
      };

      return (
        <ElForm>
          {formJson.map((item) => {
            return (
              <ElFormItem label={item.label}>
                {renderFields(item)}
                {/* <DyInput v-model={formModel.test1} /> */}
                {/* {renderInput(item.props)} */}
              </ElFormItem>
            );
          })}

          <ElFormItem>
            <ElButton onClick={onSubmit}>Submit</ElButton>
            <ElButton>Cancel</ElButton>
            <ElButton>Rest</ElButton>
          </ElFormItem>
        </ElForm>
      );
    };

    const render = () => {
      return (
        <>
          <ElDivider>Dynamic Components</ElDivider>
          {renderDynamicComponents()}
        </>
      );
    };

    return () => {
      return <>{render()}</>;
    };
  },
});
