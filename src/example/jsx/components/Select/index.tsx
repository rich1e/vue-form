/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-21 18:57:29
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-21 20:44:39
 * @FilePath: /vue-form/src/example/jsx/components/Select/index.tsx
 * @Description:
 *
 */
import { defineComponent, ref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';

export default defineComponent({
  name: 'InSelect',
  props: {
    options: Array as any,
    default: [],
  },
  setup(_, { attrs }) {
    const { options } = _;

    const renderOptions = () => {
      return (
        <>
          {options.map((option: any) => (
            <ElOption key={option.value} {...option} />
          ))}
        </>
      );
    };

    return () => <ElSelect {...attrs}>{renderOptions}</ElSelect>;
  },
});
