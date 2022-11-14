<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 22:39:44
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Biserial.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'Biserial' };
</script>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { ElRow, ElCol, ElForm } from 'element-plus';

  const props = defineProps({
    rule: {
      type: Object as any,
      default: {},
    },
    field: {
      type: Object as any,
      default: {},
    },
  });

  console.log('This Biserial', props);

  const { field, rule } = props;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});
</script>

<template>
  <ElForm :model="dynamicFormModel" ref="formRef" :rules="rule">
    <!-- TODO ElRow 默认会添加 margin 值，手动设置后可以覆盖默认行为 -->
    <ElRow
      :gutter="20"
      align="middle"
      justify="space-between"
      :style="{ margin: 0 }"
    >
      <!-- 渲染表单字段 -->
      <ElCol
        :span="12"
        v-for="(item, index) in field"
        :key="`${item.prop}_${index}`"
      >
        <slot :field="item" :dynamicModel="dynamicFormModel" />
      </ElCol>

      <!-- 渲染操作按钮 -->
      <ElCol :span="24">
        <slot name="actions" />
      </ElCol>
    </ElRow>
  </ElForm>
</template>
