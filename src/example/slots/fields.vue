<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:37:25
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-30 17:28:55
-->
<script lang="ts">
  export default {
    name: 'FormFields',
  };
</script>

<script setup lang="ts">
  import {
    ElCheckbox,
    ElFormItem,
    ElInput,
    ElOption,
    ElSelect,
    ElSwitch,
  } from 'element-plus';
  import { PropType } from 'vue';
  import { FieldType } from '/@/components/DynamicForm/types';

  const props = defineProps({
    /** 表单字段列表 */
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
  console.table(field);
</script>

<template>
  <!-- Render components -->
  <ElFormItem
    v-for="(item, index) in field"
    :key="`${item.prop}_${index}`"
    :label="item.label"
    :prop="`${item.prop}`"
  >
    <ElInput
      v-if="item.control === 'Input'"
      v-model.number="dynamicModel[`${item.prop}`]"
    />
    <ElSwitch
      v-else-if="item.control === 'Switch'"
      v-model="dynamicModel[`${item.prop}`]"
    />
    <ElSelect
      v-else-if="item.control === 'Select'"
      v-model="dynamicModel[`${item.prop}`]"
    >
      <ElOption
        v-for="opt in item.options"
        :key="opt.value"
        :label="opt.label"
        :value="opt.value"
      />
    </ElSelect>
    <ElCheckbox
      v-else-if="item.control === 'Checkbox'"
      v-model="dynamicModel[`${item.prop}`]"
      :label="item?.props?.label"
    />

    <!-- 自定义组件 Slot -->
    <slot
      v-else-if="item.control === 'Slots'"
      :name="item.prop"
      :formModel="dynamicModel"
    />
  </ElFormItem>
</template>
