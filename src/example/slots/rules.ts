/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-29 20:48:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 20:50:19
 * @FilePath: /vue-form/src/example/slots/rules.ts
 * @Description:
 *
 */
export const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'));
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

export const checkRegion = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Instant delivery is not select'));
  } else {
    callback();
  }
};

export const checkDelivery = (rule: any, value: any, callback: any) => {
  if (value === false) {
    callback(new Error('Instant delivery is not select'));
  } else {
    callback();
  }
};

export const checkResource = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please select activity resource'));
  } else {
    callback();
  }
};

export const checkType = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('Please select at least one activity type'));
  } else {
    callback();
  }
};
