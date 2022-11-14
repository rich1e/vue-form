<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 17:55:54
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-11-10 19:21:28
 * @FilePath: /vue-form/src/components/testTemplate.vue
 * @Description:
 *
-->
<script lang="ts">
  export default {
    name: 'TestTemplate',
  };
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  import { AnSwitch } from '/@/components/FeComponents';
  const value = ref(true);
</script>

<template>
  <AnSwitch v-model="value" />
</template>
