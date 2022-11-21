<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-21 14:38:54
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-21 20:46:58
 * @FilePath: /vue-form/src/example/jsx/index.vue
 * @Description:
 *
-->

<script lang="tsx">
  import { ref, defineComponent } from 'vue';
  import InSwitch from '/@/example/jsx/components/Switch';
  import InSelect from '/@/example/jsx/components/Select';
  import { ElDivider } from 'element-plus';

  export default defineComponent({
    name: 'Jsx',
    setup() {
      const initSwitchValue = ref(true);

      const switchOptions = {
        activeText: 'test',
      };

      const initSelectValue = ref('');

      const selectOptions = [
        {
          value: 'Option1',
          label: '上海',
        },
        {
          value: 'Option2',
          label: '北京',
        },
        {
          value: 'Option3',
          label: '深圳',
        },
      ];

      return () => (
        <>
          <ElDivider>InSwitch</ElDivider>
          <InSwitch v-model={initSwitchValue.value} {...switchOptions} />
          <ElDivider>InSelect</ElDivider>
          <InSelect v-model={initSelectValue.value} options={selectOptions} />
          <ElDivider></ElDivider>
        </>
      );
    },
  });
</script>
