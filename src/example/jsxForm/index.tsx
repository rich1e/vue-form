/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 09:46:15
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-26 11:06:46
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
  ref,
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
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
  ElInputNumber,
} from 'element-plus';

import {
  InInput,
  InCheckbox,
  InSelect,
  InRadio,
  InSwitch,
  CustInput,
} from '/@/example/jsx/index';
import { checkEmpty } from '/@/components/DynamicForm/src/hooks/useValidator';
import style from './index.module.scss';

type FormRefType = InstanceType<typeof ElForm>;

export default defineComponent({
  name: 'JsxForm',
  setup(_) {
    const renderPopularForm = () => {
      const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

      const formModel = reactive({
        username: '',
        gender: '',
        secondname: '',
        married: false,
        city: '',
        referees: [],
        slots: 1,
      });

      const formRules = {
        username: [{ validator: checkEmpty, trigger: 'blur' }],
        gender: [{ validator: checkEmpty, trigger: 'blur' }],
        secondname: [{ validator: checkEmpty, trigger: 'blur' }],
        married: [{ validator: checkEmpty, trigger: 'blur' }],
        referees: [{ validator: checkEmpty, trigger: 'blur' }],
      };

      const onSubmit = () => {
        formRef.value.validate((valid: any) => {
          if (valid) {
            console.log('submit!');
            console.log(formModel);
          } else {
            console.log('error submit!');
            return false;
          }
        });
      };

      const onRest = () => {
        formRef.value.resetFields();
      };

      const onChangeNumber = (value: any) => {
        console.log(value);
      };

      const renderFieldsByTemplate = () => {
        return (
          <>
            <ElFormItem label={'User name'} prop={'username'}>
              <ElInput
                modelValue={formModel.username}
                onUpdate:modelValue={(value) => (formModel.username = value)}
              />
            </ElFormItem>
            <ElFormItem label={'Second name'} prop={'secondname'}>
              <ElInput
                modelValue={formModel.secondname}
                onUpdate:modelValue={(value) => (formModel.secondname = value)}
              />
            </ElFormItem>
            <ElFormItem label={'Gender'} prop={'gender'}>
              <ElRadioGroup
                modelValue={formModel.gender}
                onUpdate:modelValue={(value) => (formModel.gender = value)}
              >
                {[
                  { label: 1, title: 'male' },
                  { label: 2, title: 'female' },
                ].map((item) => {
                  return <ElRadio label={item.label}>{item.title}</ElRadio>;
                })}
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label={'Married'} prop={'married'}>
              <ElSwitch
                v-model={formModel.married}
                // modelValue={formModel.married}
                // onUpdate:modelValue={(value: any) => (formModel.married = value)}
              />
            </ElFormItem>
            <ElFormItem label={'City from'} prop={'city'}>
              <ElSelect v-model={formModel.city}>
                {[
                  { vlaue: 0, label: 'Beijing' },
                  { vlaue: 1, label: 'Shanghai' },
                ].map((item) => {
                  return (
                    <ElOption
                      label={item.label}
                      value={item.vlaue}
                      key={item.vlaue}
                    />
                  );
                })}
              </ElSelect>
            </ElFormItem>
            <ElFormItem label={'Referees'} prop={'referees'}>
              <ElCheckboxGroup
                // v-model={formModel.referees}
                modelValue={formModel.referees}
                onUpdate:modelValue={(value: any) =>
                  (formModel.referees = value)
                }
              >
                {['colleagues', 'friends', 'teachers'].map((item: any) => {
                  return <ElCheckbox label={item} />;
                })}
              </ElCheckboxGroup>
            </ElFormItem>
            <ElFormItem label={'Slots Test'} prop={'slots'}>
              <ElInputNumber
                v-model={formModel.slots}
                min={1}
                max={10}
                onChange={onChangeNumber}
              />
            </ElFormItem>
          </>
        );
      };

      return (
        <ElForm ref={formRef} model={formModel} rules={formRules}>
          {renderFieldsByTemplate()}
          <ElFormItem>
            <ElButton onClick={onSubmit}>Submit</ElButton>
            <ElButton>Cancel</ElButton>
            <ElButton onClick={onRest}>Rest</ElButton>
          </ElFormItem>
        </ElForm>
      );
    };

    const renderModernForm = () => {
      const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

      const formModel = reactive({
        username: '',
        gender: '',
        secondname: '',
        married: false,
        city: '',
        referees: [],
        num: 1,
      });

      const formRules = {
        username: [{ validator: checkEmpty, trigger: 'blur' }],
        gender: [{ validator: checkEmpty, trigger: 'blur' }],
        secondname: [{ validator: checkEmpty, trigger: 'blur' }],
        married: [{ validator: checkEmpty, trigger: 'blur' }],
        referees: [{ validator: checkEmpty, trigger: 'blur' }],
        num: [
          {
            validator: (rule: any, value: any, callback: any) => {
              console.log(value);
              if (value < 5) {
                callback(new Error(`It's Num must than 5`));
              } else {
                callback();
              }
            },
            trigger: 'blur',
          },
        ],
      };

      const onSubmit = () => {
        formRef.value.validate((valid: any) => {
          if (valid) {
            console.log('submit!');
            console.log(formModel);
          } else {
            console.log('error submit!');
            return false;
          }
        });
      };

      const onRest = () => {
        formRef.value.resetFields();
      };

      const onChangeNumber = (value: any) => {
        console.log(value);
      };

      const renderFields = () => {
        const formJson = [
          {
            type: 'input',
            label: 'User name',
            prop: 'username',
            props: {
              modelValue: formModel.username,
              // 当输入框发生变化时，将 value 赋值给 formModel 对象
              'onUpdate:modelValue': (value: any) =>
                (formModel.username = value),
            },
          },
          {
            type: 'input',
            label: 'Second name',
            prop: 'secondname',
            props: {
              modelValue: formModel.secondname,
              'onUpdate:modelValue': (value: any) =>
                (formModel.secondname = value),
            },
          },
          {
            type: 'radio',
            label: 'Gender',
            prop: 'gender',
            props: {
              modelValue: formModel.gender,
              'onUpdate:modelValue': (value: any) => (formModel.gender = value),
              labels: [
                { label: 1, title: 'male' },
                { label: 2, title: 'female' },
              ],
            },
          },
          {
            type: 'switch',
            label: 'Married',
            prop: 'married',
            props: {
              modelValue: formModel.married,
              'onUpdate:modelValue': (value: any) =>
                (formModel.married = value),
              activeText: 'Yes',
              inactiveText: 'No',
            },
          },
          {
            type: 'select',
            label: 'City from',
            prop: 'city',
            props: {
              modelValue: formModel.city,
              'onUpdate:modelValue': (value: any) => (formModel.city = value),
              options: [
                { vlaue: 0, label: 'Beijing' },
                { vlaue: 1, label: 'Shanghai' },
              ],
            },
          },
          {
            type: 'checkbox',
            label: 'Referees',
            prop: 'referees',
            props: {
              modelValue: formModel.referees,
              'onUpdate:modelValue': (value: any) =>
                (formModel.referees = value),
              labels: ['colleagues', 'friends', 'teachers'],
            },
          },
          {
            type: 'slots',
            label: 'Slots Test',
            prop: 'num',
            render: () => {
              return (
                <ElInputNumber
                  v-model={formModel.num}
                  min={1}
                  max={10}
                  onChange={onChangeNumber}
                />
              );
            },
          },
        ];

        return formJson.map((item) => {
          /**
           * @see https://juejin.cn/post/6997796393460957215#heading-7
           * @param props 输入框属性
           * @returns
           */
          const renderInput = (props: any) => {
            // props 解构之后，会丢失响应性，通过 ref 补充响应性
            const { modelValue, ...rest } = props;
            const modeValueRef = ref(modelValue);

            return (
              <ElInput
                {...{
                  modelValue: modeValueRef.value,
                  // 当输入框发生变化时，将 value 赋值给绑定变量 props.modelValue
                  'onUpdate:modelValue': (value: any) =>
                    (modeValueRef.value = value),
                }}
                {...rest}
              />
            );
          };

          const renderCheckbox = (props: any) => {
            const { labels, ...rest } = props;
            return (
              <ElCheckboxGroup {...rest}>
                {labels.map((item: any) => {
                  return <ElCheckbox label={item} />;
                })}
              </ElCheckboxGroup>
            );
          };

          const renderRadio = (props: any) => {
            const { labels, ...rest } = props;

            return (
              <ElRadioGroup {...rest}>
                {labels.map((item: any) => {
                  return <ElRadio label={item.label}>{item.title}</ElRadio>;
                })}
              </ElRadioGroup>
            );
          };

          const renderSelect = (props: any) => {
            const { options, ...rest } = props;

            return (
              <ElSelect {...rest}>
                {options.map((item: any) => {
                  return (
                    <ElOption
                      label={item.label}
                      value={item.vlaue}
                      key={item.vlaue}
                    />
                  );
                })}
              </ElSelect>
            );
          };

          const renderSlots = (render: any) => {
            if (render) {
              return render();
            }
          };

          const getComponent = (type: string, props: any, render?: any) => {
            if (type === 'input') return renderInput(props);
            else if (type === 'switch') return <ElSwitch {...item.props} />;
            else if (type === 'checkbox') return renderCheckbox(props);
            else if (type === 'radio') return renderRadio(props);
            else if (type === 'select') return renderSelect(props);
            // slots 特殊处理
            else if (type === 'slots') return renderSlots(render);
          };

          return (
            <ElFormItem label={item.label} prop={item.prop}>
              {getComponent(item.type, item.props, item.render)}
            </ElFormItem>
          );
        });
      };

      return (
        <ElForm ref={formRef} model={formModel} rules={formRules}>
          {renderFields()}
          <ElFormItem>
            <ElButton onClick={onSubmit}>Submit</ElButton>
            <ElButton>Cancel</ElButton>
            <ElButton onClick={onRest}>Rest</ElButton>
          </ElFormItem>
        </ElForm>
      );
    };

    const render = () => {
      return (
        <>
          <h1>jsxForm</h1>
          <div class={style['form-wrapper']}>
            <div class={style['form-wrapper_item']}>
              <ElDivider>Popular Form</ElDivider>
              {renderPopularForm()}
            </div>

            <div class={style['form-wrapper_item']}>
              <ElDivider>Modern Form</ElDivider>
              {renderModernForm()}
            </div>
          </div>
        </>
      );
    };

    return () => {
      return <>{render()}</>;
    };
  },
});
