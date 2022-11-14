/*
 * @Author: yinmingdi
 * @Date: 2021-11-19 19:02:34
 * @Description:
 *
 */
import { defineComponent, computed } from 'vue';

import './styles.scss';
import { AnMap } from '../map';

export const AnFormItem = defineComponent({
  name: 'AnFormItem',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    labelWidth: {
      type: String,
    },
    class: [Array, String, Object],
    // 单纯为了把value从attrs中过滤，因为element input 在同时有value和modalValue的时候会优先使用value
    value: {
      type: [String, Number, Boolean],
    },
    suffix: {
      type: String,
    },
    unit: {
      type: String,
    },
    showUnit: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { attrs, slots }) {
    const renderLabel = () => {
      const { label, labelWidth } = props;
      const style: any = {};
      if (labelWidth === 'auto') style.flex = '0 0 auto';

      return (
        label && (
          <div
            class={['an-form-item-label', name]}
            style={style}
            v-tooltip={label}
          >
            {label}
          </div>
        )
      );
    };

    const renderMap = () => (
      <div class="an-form-item-content">
        <AnMap class="content-item" v-slots={slots} {...attrs} />
      </div>
    );

    return () => {
      const { visible } = props;
      if (!visible) return null;
      return (
        // @ts-ignore
        <div class="an-form-item" class={props.class}>
          {renderLabel()}
          {renderMap()}
        </div>
      );
    };
  },
});
