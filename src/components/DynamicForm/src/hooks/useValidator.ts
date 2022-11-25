/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 16:00:31
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-25 16:30:39
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useValidator.ts
 * @Description:
 *
 */
export const checkAge = (rule: any, value: any, callback: any) => {
  // debugger;
  console.log('checkAge rule#', rule);
  if (!value) {
    return callback(new Error('Please input the age for hooks'));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'));
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'));
      } else {
        callback();
      }
    }
  }, 1000);
};

export const checkEmpty = (rule: any, value: any, callback: any) => {
  if (!value || value === '' || value === false || value.length === 0) {
    callback(new Error(`It's Empty!`));
  } else {
    callback();
  }
};
