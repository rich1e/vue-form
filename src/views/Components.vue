<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 17:55:54
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 20:09:36
 * @FilePath: /vue-form/src/views/Components.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import { ref } from 'vue';
  // import { AnSwitch } from '/@/components/FeComponents';
  import { AnInput } from '/@/components/FeComponents';
  import TestTemplate from '/@/components/testTemplate.vue';
  import TestComponents from '/@/components/testComponents.vue';
  import TestJsx from '/@/components/testJSX';
  const value = ref('');

  const onChange = (event: any) => {
    console.log(event);
    console.log(2313);
  };
</script>

<template>
  <!-- <AnSwitch v-model="value" /> -->
  <TestTemplate />
  <TestComponents />
  <TestJsx />
  <AnInput @input="onChange" v-model="value" />
</template>
