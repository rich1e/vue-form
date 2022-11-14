/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 18:43:30
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 20:58:44
 * @FilePath: /vue-form/src/components/testJSX.tsx
 * @Description:
 *
 */
import { computed, defineComponent, ref, useAttrs } from 'vue';
import { AnSwitch, AnInput } from '/@/components/FeComponents';

export default defineComponent({
  name: 'TestJsx',
  components: {
    AnSwitch,
  },
  props: {
    modelValue: {
      type: String,
      default: '666',
    },
  },
  emits: ['update:modelValue'],
  setup(_, { attrs, emit }) {
    const value = ref(true);
    const attrs2 = useAttrs();

    const props = {
      modelValue: value.value,
    };

    const input = ref('123');

    const props2 = {
      onInput: (event: any) => {
        console.log('input# ', event);
        emit('update:modelValue', event);
      },
      modelValue: _.modelValue,
      'onUpdate:modelValue': (event: any) => {
        console.log('onUpdate:modelValue# ', event);
        emit('update:modelValue', event);
      },
    };

    return () => {
      return (
        <>
          <AnSwitch {...props} {...attrs2} />
          <AnInput {...props2} />
        </>
      );
    };
  },
});
