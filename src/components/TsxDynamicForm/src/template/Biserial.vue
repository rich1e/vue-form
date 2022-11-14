<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 17:47:59
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:44:06
 * @FilePath: /vue-form/src/components/TsxDynamicForm/src/template/Biserial.vue
 * @Description:
 *
-->
<script lang="tsx">
  import { defineComponent } from 'vue';
  import {
    ElRow,
    ElCol,
    ElInput,
    ElForm,
    ElFormItem,
    ElButton,
  } from 'element-plus';

  import { back } from '../hooks/useAction';

  export default defineComponent({
    /** 双列 */
    name: 'JsxBiserial',
    setup() {
      const cols = 10;

      const onSubmit = () => {
        console.log('Is OK');
      };

      const onCancel = () => {
        console.log('Is Cancel');
        back();
      };

      const onApply = () => {
        console.log('Is Apply');
      };

      const render = () => {
        const inputs = [];

        for (let i = 0; i < cols; i++) {
          inputs.push(
            <ElCol span={12}>
              <ElFormItem label="test">
                <ElInput />
              </ElFormItem>
            </ElCol>,
          );
        }

        /**
         * flex 布局
         * @see https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
         */

        return (
          <ElForm>
            <ElRow
              gutter={20}
              align="middle"
              justify="space-between"
              // TODO ElRow 默认会添加 margin 值，手动设置后可以覆盖默认行为
              style={{ margin: 0 }}
            >
              {inputs}
              <ElFormItem>
                <ElButton onClick={onCancel}>Cancel</ElButton>
                <ElButton onClick={onApply}>Apply</ElButton>
                <ElButton type="primary" onClick={onSubmit}>
                  OK
                </ElButton>
              </ElFormItem>
            </ElRow>
          </ElForm>
        );
      };

      return () => {
        return <>{render()}</>;
      };
    },
  });
</script>
