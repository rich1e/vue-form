<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:37:25
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 12:57:47
-->
<script lang="ts">
  export default {
    name: 'FormFields',
  };
</script>

<script setup lang="ts">
  import { PropType } from 'vue';
  import {
    ElFormItem,
    ElInput,
    ElSwitch,
    ElSelect,
    ElOption,
  } from 'element-plus';
  import { FieldType } from '../../types';

  const props = defineProps({
    /** 表单字段项 */
    field: {
      type: Array as PropType<FieldType[]>,
      default: [],
    },
    /** 表单动态 Model */
    dynamicModel: {
      type: Object as any,
      default: {},
    },
  });

  const { field, dynamicModel } = props;
</script>

<template>
  <template v-if="field">
    <ElFormItem
      v-for="(item, index) in field"
      :key="`${item.prop}_${index}`"
      :label="item.label"
      :prop="`${item.prop}`"
    >
      <ElInput
        v-if="item.controlType === 'Input'"
        v-model.number="dynamicModel[`${item.prop}`]"
      />
      <ElSwitch
        v-else-if="item.controlType === 'Switch'"
        v-model="dynamicModel[`${item.prop}`]"
      />
      <ElSelect
        v-else="item.controlType === 'Select'"
        v-model="dynamicModel[`${item.prop}`]"
      >
        <ElOption
          v-for="opt in item.options"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        />
      </ElSelect>
    </ElFormItem>
  </template>
  <!-- TODO FormFields 异常逻辑 -->
</template>
