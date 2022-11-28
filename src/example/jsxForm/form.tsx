import {
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElSwitch,
} from 'element-plus';
import { reactive, ref } from 'vue';

import { checkEmpty } from '/@/components/DynamicForm/src/hooks/useValidator';

export const renderModernForm = () => {
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

  const formJson = [
    {
      type: 'input',
      label: 'User name',
      prop: 'username',
      props: {
        modelValue: formModel.username,
        // 当输入框发生变化时，将 value 赋值给 formModel 对象
        'onUpdate:modelValue': (value: any) => (formModel.username = value),
      },
    },
    {
      type: 'input',
      label: 'Second name',
      prop: 'secondname',
      props: {
        modelValue: formModel.secondname,
        'onUpdate:modelValue': (value: any) => (formModel.secondname = value),
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
        'onUpdate:modelValue': (value: any) => (formModel.married = value),
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
        'onUpdate:modelValue': (value: any) => (formModel.referees = value),
        labels: ['colleagues', 'friends', 'teachers'],
      },
    },
    {
      type: 'slots',
      label: 'Slots Test',
      prop: 'num',
      render: () => {
        const onChangeNumber = (value: any) => {
          console.log(value);
        };

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

  const onSubmit = () => {
    formRef.value.validate((valid: any) => {
      if (valid) {
        console.log('submit!');
        console.table(formModel);
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };

  const onRest = () => {
    formRef.value.resetFields();
  };

  const onCancel = () => {
    console.log('onCancel Handler');
  };

  const renderFields = () => {
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

      const renderSwitch = (props: any) => {
        return <ElSwitch {...props} />;
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
        else if (type === 'switch') return renderSwitch(props);
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
        <ElButton onClick={onCancel}>Cancel</ElButton>
        <ElButton onClick={onRest}>Rest</ElButton>
      </ElFormItem>
    </ElForm>
  );
};
