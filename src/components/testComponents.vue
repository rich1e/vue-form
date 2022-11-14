<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 17:55:54
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 19:23:09
 * @FilePath: /vue-form/src/components/testComponents.vue
 * @Description:
 *
-->
<script lang="tsx">
  import { defineComponent, ref, useAttrs } from 'vue';
  import { AnSwitch } from '/@/components/FeComponents';

  export default defineComponent({
    name: 'TestComponents',
    components: {
      AnSwitch,
    },
    setup(_, { attrs }) {
      const value = ref(true);
      // const attrs = useAttrs();

      return () => {
        return (
          <>
            <AnSwitch modelValue={value.value} {...attrs} />
          </>
        );
      };
    },
  });
</script>
