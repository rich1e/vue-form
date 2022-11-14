/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 17:49:24
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 17:49:41
 * @FilePath: /vue-form/src/components/FeComponents/switch/index.tsx
 * @Description:
 *
 */
import { defineComponent } from 'vue';
import { ElSwitch } from 'element-plus';
import { formItemProps } from '../form-item/shared';

export const AnSwitch = defineComponent({
  name: 'AnSwitch',
  props: {
    ...formItemProps,
  },
  setup(props, { attrs, slots }) {
    return () => <ElSwitch ref={props.deepRef} {...attrs} v-slots={slots} />;
  },
});
