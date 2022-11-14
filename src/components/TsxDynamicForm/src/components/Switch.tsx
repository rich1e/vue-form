/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 16:24:25
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 16:25:37
 * @FilePath: /vue-form/src/components/DynamicForm/src/components/index.tsx
 * @Description:
 *
 */
import { defineComponent } from 'vue';
import { ElSwitch } from 'element-plus';
import { formItemProps } from '../../types';

export const FSwitch = defineComponent({
  name: 'AnSwitch',
  props: {
    ...formItemProps,
  },
  setup(props, { attrs, slots }) {
    return () => <ElSwitch ref={props.deepRef} {...attrs} v-slots={slots} />;
  },
});
