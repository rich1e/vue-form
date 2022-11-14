/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 17:39:13
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 17:54:23
 * @FilePath: /vue-form/src/components/FeComponents/map/index.tsx
 * @Description:
 *
 */
import { defineComponent, computed } from 'vue';
import * as components from '../index';
import './styles.scss';

export const AnMap = defineComponent({
  name: 'AnMap',
  props: {
    type: {
      type: String,
      default: 'input',
    },
    attrs: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { attrs, slots }) {
    const Component = computed(() => getComponent(props.type));

    function getComponent(type: any) {
      const key = getComponentName(type);
      // @ts-ignore
      return components[key];
    }

    function getComponentName(type: any) {
      // simple-name =>  AnSimpleName
      type = 'An-' + type;
      return type.replace(/\-(\w)/g, (match: any, matchGroup: any) =>
        matchGroup.toUpperCase(),
      );
    }

    return () => (
      <Component.value
        class="content-item"
        size="mini"
        v-slots={slots}
        {...attrs}
        {...props.attrs}
      />
    );
  },
});
