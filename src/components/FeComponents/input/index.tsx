/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 20:04:16
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 20:04:31
 * @FilePath: /vue-form/src/components/FeComponents/input/index.tsx
 * @Description:
 *
 */
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';
import { formItemProps } from '../form-item/shared';

export const AnInput = defineComponent({
  name: 'AnInput',
  props: {
    ...formItemProps,
  },
  setup(props, { attrs, slots }) {
    return () => <ElInput ref={props.deepRef} {...attrs} v-slots={slots} />;
  },
});
