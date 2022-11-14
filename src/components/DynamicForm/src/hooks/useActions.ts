/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 16:34:52
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:38:40
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useActions.ts
 * @Description:
 *
 */

// TODO formEl 类型
export const onRest = (formEl: any) => {
  if (!formEl) return;
  formEl.resetFields();
};

export const onSubmit = (formEl: any) => {
  if (!formEl) return;
  formEl.validate((valid: any) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
