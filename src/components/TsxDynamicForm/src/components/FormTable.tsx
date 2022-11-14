/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 14:33:09
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 16:32:41
 * @FilePath: /vue-form/src/components/DynamicForm/src/components/FormTable.tsx
 * @Description:
 *
 */
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElButton } from 'element-plus';

import { onApply, onCancel, onSubmit } from '../hooks/useAction';
import { returnFormItems } from './FormItems';
import { ConfigType } from '../../types';

/** 表单引用 */
const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);
/** 表单规则 */
const formRules = reactive<Record<string, any>>({});
/** 表单字段 */
const formModel = reactive<Record<string, any>>({});

const renderFormItems = (field: any, rule: any) => {
  const FormItems: any[] = [];

  field.forEach((item: any) => {
    // console.log(item.controlType);
    console.log(item.props);
    // console.log(item.label);

    formModel[item.props.modelValue] = item.props;
    formRules[item.props] = rule[item.props];

    FormItems.push(
      <ElFormItem label={item.label} prop={item.prop}>
        {returnFormItems(item.controlType, item.props)}
      </ElFormItem>,
    );
  });

  console.log('formModel', formModel);
  console.log('formRules', formRules);

  return FormItems;
};

export const renderFormTable = (config: ConfigType) => {
  const { field, rule } = config;

  const onSubmitCallback = () => {
    console.log('onSubmitCallback');
    console.log(formRef);
  };

  return (
    <ElForm ref={formRef} model={formModel} rules={formRules}>
      {/* 渲染 FormItem */}
      {renderFormItems(field, rule)}
      <ElFormItem>
        <ElButton onClick={onCancel}>Cancel</ElButton>
        <ElButton onClick={onApply}>Apply</ElButton>
        <ElButton type="primary" onClick={onSubmitCallback}>
          OK
        </ElButton>
      </ElFormItem>
    </ElForm>
  );
};
