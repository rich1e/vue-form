<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 17:47:59
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:44:18
 * @FilePath: /vue-form/src/components/TsxDynamicForm/src/template/Group.vue
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
    ElDivider,
  } from 'element-plus';

  import { back } from '../hooks/useAction';

  export default defineComponent({
    /** 分组 */
    name: 'JsxGroup',
    setup() {
      const cols = 7;

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
        const group = [];
        const group2 = [];

        for (let i = 0; i < cols; i++) {
          group.push(
            <ElFormItem label="test">
              <ElInput />
            </ElFormItem>,
          );
        }

        for (let i = 0; i < cols; i++) {
          group2.push(
            <ElFormItem label="test">
              <ElInput />
            </ElFormItem>,
          );
        }

        return (
          // TODO textAlign 控制对齐方式
          <ElForm
            inline
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {group}
            <ElDivider />
            {group2}
            <ElDivider />
            <ElFormItem>
              <ElButton onClick={onCancel}>Cancel</ElButton>
              <ElButton onClick={onApply}>Apply</ElButton>
              <ElButton type="primary" onClick={onSubmit}>
                OK
              </ElButton>
            </ElFormItem>
          </ElForm>
        );
      };

      return () => {
        return <>{render()}</>;
      };
    },
  });
</script>
