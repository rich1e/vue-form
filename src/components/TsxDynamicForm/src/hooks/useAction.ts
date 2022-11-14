/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-07 16:03:52
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 15:10:58
 * @FilePath: /vue-form/src/components/DynamicForm/src/hooks/useAction.ts
 * @Description:
 *
 */
import { router } from '/@/routes';

/**
 * // TODO router 需要通过参数传递过来
 */
export const back = () => {
  router.back();
};

export const onSubmit = (event: any, callback: Function) => {
  console.log('Is OK');
  if (callback && typeof callback === 'function') {
    callback();
  }
};

export const onCancel = () => {
  console.log('Is Cancel');
  back();
};

export const onApply = () => {
  console.log('Is Apply');
};
