/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-21 17:05:16
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-21 21:02:40
 * @FilePath: /vue-form/src/example/jsx/components/Inputs/index.tsx
 * @Description:
 *
 */
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';

export default defineComponent({
  name: 'InInput',
  setup(_, { attrs }) {
    return () => <ElInput {...attrs} />;
  },
});
