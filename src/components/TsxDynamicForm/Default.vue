<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-03 15:38:19
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-11 16:44:43
 * @FilePath: /vue-form/src/components/TsxDynamicForm/Default.vue
 * @Description:
 *
-->
<script lang="tsx">
  import { defineComponent } from 'vue';
  import Uniseriate from './src/template/Uniseriate.vue';
  import Biserial from './src/template/Biserial.vue';
  import Group from './src/template/Group.vue';
  import Tab from './src/template/Tab.vue';

  const props = {
    /** 配置 */
    config: {
      type: Object,
      default: {},
    },
  };

  export default defineComponent({
    name: 'JsxDynamicForm',
    props,
    setup(props) {
      const render = () => {
        const { config } = props;

        console.log('DynamicForm', config);

        if (props.config?.scene === 'uniseriate') {
          return <Uniseriate v-model:config={config} />;
        } else if (props.config?.scene === 'biserial') {
          return <Biserial />;
        } else if (props.config?.scene === 'group') {
          return <Group />;
        } else if (props.config?.scene === 'tab') {
          return <Tab />;
        } else {
          return '<div>nothing<div/>';
        }
      };

      return () => {
        return <>{render()}</>;
      };
    },
  });
</script>
