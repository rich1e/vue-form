/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-22 18:02:56
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-22 18:47:04
 * @FilePath: /vue-form/src/example/jsx/components/Checkbox/index.tsx
 * @Description:
 *
 */
import { ref, defineComponent } from 'vue';
import { ElDivider, ElCheckbox, ElCheckboxGroup } from 'element-plus';

export default defineComponent({
  name: 'InCheckbox',
  props: {
    multiple: {
      type: Array as any,
      default: [],
    },
    group: {
      type: Object as any,
      default: {},
    },
  },
  setup(_, { attrs }) {
    const { multiple, group } = _;

    if (Object.keys(group).length > 0) {
      const { modelValue, checkboxs } = group;

      return () => (
        <ElCheckboxGroup v-model={modelValue.value}>
          {checkboxs.map((box: any) => {
            return <ElCheckbox {...box} />;
          })}
        </ElCheckboxGroup>
      );
    }

    if (multiple.length > 0) {
      return () => (
        <>
          {multiple.map((box: any) => {
            return <ElCheckbox {...box} />;
          })}
        </>
      );
    }

    return () => <ElCheckbox {...attrs} />;
  },
});
