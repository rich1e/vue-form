/*
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-24 09:46:15
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-28 13:37:29
 * @FilePath: /vue-form/src/example/jsxForm/index.tsx
 * @Description:
 *
 */
import { defineComponent } from 'vue';
import { ElDivider } from 'element-plus';
import style from './index.module.scss';
import ModernForm from './ModernForm';
import PopularForm from './PopularForm.vue';

// type FormRefType = InstanceType<typeof ElForm>;

export default defineComponent({
  name: 'JsxForm',
  setup() {
    const render = () => {
      return (
        <>
          <h1>jsxForm</h1>
          <div class={style['form-wrapper']}>
            <div class={style['form-wrapper_item']}>
              <ElDivider>Popular Form</ElDivider>
              <PopularForm />
            </div>

            <div class={style['form-wrapper_item']}>
              <ElDivider>Modern Form</ElDivider>
              <ModernForm />
            </div>
          </div>
        </>
      );
    };

    return () => {
      return <>{render()}</>;
    };
  },
});
