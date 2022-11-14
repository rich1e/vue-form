<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:58:36
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 20:45:14
-->
<script lang="ts">
  export default {
    name: 'FormActions',
  };
</script>

<script setup lang="ts">
  import { getCurrentInstance } from 'vue';
  import { ElButton, ElFormItem } from 'element-plus';

  const props = defineProps({
    /** 表单操作 */
    actions: {
      type: Object as any,
      default: {},
    },
  });

  const { actions } = props;

  /**
   * 获取 form 表单的 ref
   * @see https://v3.ja.vuejs.org/api/composition-api.html#getcurrentinstance
   * @see https://segmentfault.com/q/1010000041928207
   * @see https://www.jianshu.com/p/5558cadd10b9
   */
  const { proxy }: any = getCurrentInstance();
  const formRef = proxy.$parent;
</script>

<template>
  <template v-if="actions">
    <ElFormItem>
      <ElButton
        v-if="actions.onSubmit"
        @click="actions.onSubmit.handler(formRef)"
      >
        {{ actions.onSubmit.btnText }}
      </ElButton>
      <ElButton
        v-if="actions.onCancel"
        @click="actions.onCancel.handler(formRef)"
      >
        {{ actions.onCancel.btnText }}
      </ElButton>
      <ElButton v-if="actions.onRest" @click="actions.onRest.handler(formRef)">
        {{ actions.onRest.btnText }}
      </ElButton>
    </ElFormItem>
  </template>
  <!-- TODO FormActions 异常逻辑 -->
</template>
