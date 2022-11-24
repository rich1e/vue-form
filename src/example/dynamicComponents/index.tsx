/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 19:55:11
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-24 20:59:13
 * @FilePath: /vue-form/src/example/dynamicComponents/index.tsx
 * @Description:
 *
 */
import { computed, defineComponent, reactive } from 'vue';
import { ElButton, ElDivider, ElForm, ElFormItem } from 'element-plus';
import { components } from './components';

export default defineComponent({
  name: '',
  setup() {
    const renderDynamicComponents = () => {
      const formModel = reactive({
        test1: '',
        test2: '',
        test3: true,
      });

      const formJson = [
        {
          type: 'InInput',
          label: 'test1',
        },
        {
          type: 'InInput',
          label: 'test2',
        },
        {
          type: 'InSwitch',
          label: 'test3',
          value: formModel.test3,
          props: {
            modelValue: formModel.test3,
            'onUpdate:modelValue': ($event: any) => {
              console.log('test3', $event);
              formModel.test3 = $event;
            },
          },
        },
      ];

      const onSubmit = () => {
        console.log(formModel);
      };

      const renderFields = (item: any) => {
        // console.log(item);
        const getComponent = (type: string) => {
          return components[type];
        };

        const DyComponent = computed(() => getComponent(item.type as string));
        // console.log(DyComponent);

        // return <DyComponent.value v-model={item.value} />;
        return <DyComponent.value />;
      };

      return (
        <ElForm>
          {formJson.map((item) => {
            return (
              <ElFormItem label={item.label}>{renderFields(item)}</ElFormItem>
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
          <h1>dynamicComponents</h1>
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
