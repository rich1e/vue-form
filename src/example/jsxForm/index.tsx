/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 09:46:15
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-24 19:51:26
 * @FilePath: /vue-form/src/example/jsxForm/index.tsx
 * @Description:
 *
 */
import {
  defineComponent,
  reactive,
  Component,
  toRefs,
  watch,
  computed,
} from 'vue';
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElInput,
  ElDivider,
  ElSwitch,
  ElSelect,
  ElOption,
} from 'element-plus';
import {
  InInput,
  InCheckbox,
  InSelect,
  InRadio,
  InSwitch,
  CustInput,
} from '/@/example/jsx/index';
import { BuildPropType, PropWrapper } from 'element-plus/es/utils/props';

type tsType = BuildPropType<
  PropWrapper<string | number | null | undefined>,
  unknown,
  unknown
>;

export default defineComponent({
  name: 'JsxForm',
  // emits: ['update:modelValue', 'input'],
  setup(_, { emit }) {
    const renderModernForm = () => {
      const formModel = reactive({
        username: '',
        secondname: '',
        avatar: false,
        city: '',
      });

      formModel.username = 'tes';

      const formJson3 = [
        {
          contorl: CustInput,
          label: 'User name',
          props: {
            modelValue: formModel.username,
            // onInput: ($event: any): any => {
            //   console.log('searchText', $event.target.value);
            //   formModel.username = $event.target.value;
            // },
            'onUpdate:modelValue': ($event: any) => {
              console.log('User name', $event);
              formModel.username = $event;
            },
          },
        },
        {
          contorl: InInput,
          label: 'Second name',
          props: {
            vModel: formModel.secondname,
            modelValue: formModel.secondname,
            'onUpdate:modelValue': ($event: any) => {
              console.log('Second name', $event);
              formModel.secondname = $event;
            },
          },
        },
      ];

      const formJson = [
        {
          type: 'input',
          label: 'User name',
          value: formModel.username,
          props: {
            modelValue: formModel.username,
            'onUpdate:modelValue': ($event: any) => {
              console.log('username', $event);
              formModel.username = $event;
            },
          },
        },
        // {
        //   type: 'input',
        //   label: 'Second name',
        //   value: formModel.secondname,
        //   props: {
        //     modelValue: formModel.secondname,
        //     'onUpdate:modelValue': ($event: any) => {
        //       console.log('secondname', $event);
        //       formModel.secondname = $event;
        //     },
        //   },
        // },
        // {
        //   type: 'switch',
        //   label: 'Avatar',
        //   value: formModel.avatar,
        //   props: {
        //     modelValue: formModel.avatar,
        //     'onUpdate:modelValue': ($event: any) => {
        //       console.log('Avatar', $event);
        //       formModel.avatar = $event;
        //     },
        //   },
        // },
        // {
        //   type: 'select',
        //   label: 'City name',
        //   value: formModel.city,
        //   props: {},
        // },
      ];

      const onSubmit = () => {
        console.log(formModel);
      };

      return (
        <>
          <ElForm>
            {formJson.map((item) => {
              const getComponent = (component: Component, props?: any) => {
                console.log('getComponent', props);
                return <component {...props} />;
              };

              const renderFields = (type: string, value: any, props?: any) => {
                const contorlType: any = {
                  input: InInput,
                  switch: ElSwitch,
                  select: ElSelect,
                };

                // console.log('renderFields', contorlType);
                // console.log('renderFields', value);

                const getContorl = (type: string, props?: any) => {
                  return contorlType[type];
                };

                const contorls = getContorl(type);

                const contorls2 = computed(() => getContorl(type));

                console.log('contorls', contorls);

                // return <contorls2.value />;
                // return <contorls {...props} />;
                return <contorls v-model={props.modelValue} />;
              };

              return (
                <ElFormItem label={item.label}>
                  {/* {getComponent(item.contorl, item.props)} */}
                  {renderFields(item.type, item.value, item.props)}
                  {/* <InInput v-model={form.username} /> */}
                </ElFormItem>
              );
            })}
            <ElFormItem>
              <ElButton onClick={onSubmit}>Submit</ElButton>
              <ElButton>Cancel</ElButton>
              <ElButton>Rest</ElButton>
            </ElFormItem>
          </ElForm>
        </>
      );
    };

    const renderPopularForm = () => {
      const form = reactive({
        username: '',
        secondname: '',
      });

      const onSubmit = () => {
        console.log(form);
      };

      const updateModelValue = (value: any) => {
        // console.log('updateModelValue', value);
        form.username = value;
      };

      return (
        <ElForm>
          <ElFormItem label={'User name'}>
            <InInput v-model={form.username} />
            {/* <InInput
              modelValue={form.username}
              onUpdate:modelValue={updateModelValue}
            /> */}
            {/* <ElInput
              modelValue={form.username}
              onUpdate:modelValue={updateModelValue}
            /> */}
          </ElFormItem>
          <ElFormItem label={'Second name'}>
            <InInput v-model={form.secondname} />
          </ElFormItem>
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
          <h1>jsxForm</h1>
          <ElDivider>Popular Form</ElDivider>
          {renderPopularForm()}
          <ElDivider>Modern Form</ElDivider>
          {renderModernForm()}
        </>
      );
    };

    return () => {
      return <>{render()}</>;
    };
  },
});
