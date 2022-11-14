import { defineComponent } from 'vue';
import { AnFormItem } from '../../index';

export const AnFormItems = defineComponent({
  name: 'AnFormItems',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    return () => (
      <div class='form-items'>
        {
          props.list.map((item) => (
            <AnFormItem
              v-model={item.value}
              v-model:expression={item.expression}
              // type={item.type}
              // label={item.label}
              // labelWidth={item.labelWidth}
              // unit={item.unit}
              // suffix={item.suffix}
              // visible={item.visible}
              {...item}
            />
          ))
        }
      </div>
    );
  }
});
