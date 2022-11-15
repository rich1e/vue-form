<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:58:36
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-15 13:18:38
-->
<script lang="ts">
  export default {
    name: 'FormActions',
  };
</script>

<script setup lang="ts">
  import { getCurrentInstance, PropType } from 'vue';
  import { ElButton, ElFormItem } from 'element-plus';
  import { ActionsType } from '../../types';

  const props = defineProps({
    /** 表单操作 */
    actions: {
      type: Object as PropType<ActionsType> | any,
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
      <ElButton v-if="actions.onBack" @click="actions.onBack.handler(formRef)">
        {{ actions.onBack.btnText }}
      </ElButton>
    </ElFormItem>
  </template>
  <!-- TODO FormActions 异常逻辑 -->
</template>
