<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 17:47:59
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:44:30
 * @FilePath: /vue-form/src/components/TsxDynamicForm/src/template/Tab.vue
 * @Description:
 *
-->
<script lang="tsx">
  import { defineComponent } from 'vue';
  import {
    ElInput,
    ElForm,
    ElFormItem,
    ElButton,
    ElTabs,
    ElTabPane,
  } from 'element-plus';

  import { back } from '../hooks/useAction';

  export default defineComponent({
    /** Tab */
    name: 'JsxTab',
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
            <ElFormItem label="test">
              <ElInput />
            </ElFormItem>,
          );
        }

        return (
          <ElTabs type="border-card">
            <ElTabPane label="Uniseriate">
              <ElForm>
                {inputs}
                <ElFormItem>
                  <ElButton onClick={onCancel}>Cancel</ElButton>
                  <ElButton onClick={onApply}>Apply</ElButton>
                  <ElButton type="primary" onClick={onSubmit}>
                    OK
                  </ElButton>
                </ElFormItem>
              </ElForm>
            </ElTabPane>
            <ElTabPane label="Biserial">Biserial</ElTabPane>
            <ElTabPane label="Group">Group</ElTabPane>
            <ElTabPane label="Tab">Tab</ElTabPane>
          </ElTabs>
        );
      };

      return () => {
        return <>{render()}</>;
      };
    },
  });
</script>
