<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 17:47:59
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:44:35
 * @FilePath: /vue-form/src/components/TsxDynamicForm/src/template/Uniseriate.vue
 * @Description:
 *
-->
<script lang="tsx">
  import { defineComponent, PropType, toRaw } from 'vue';
  import { ConfigType } from '../../types';
  import { renderFormTable } from '../components/FormTable';

  const props = {
    /** 表单配置 */
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  };

  export default defineComponent({
    /** 单列 */
    name: 'JsxUniseriate',
    props,
    setup(props) {
      console.log('Uniseriate', toRaw(props));

      const { config } = toRaw(props);

      return () => {
        return <>{renderFormTable(config)}</>;
      };
    },
  });
</script>
