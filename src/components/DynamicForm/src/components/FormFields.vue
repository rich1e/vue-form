<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:37:25
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-16 13:46:33
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
  import { FieldType, SceneType } from '../../types';

  console.log('This FormFields');

  const props = defineProps({
    /** 表单UI类型 */
    scene: {
      type: String as PropType<SceneType>,
      default: '',
    },
    /** 单个表单字段 */
    item: {
      type: Object as PropType<FieldType>,
      default: {},
    },
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

  const { scene, field, item, dynamicModel } = props;

  const getType = (sceneType: string) => {
    if (scene === sceneType && field) return false;
    else return true;
  };
</script>

<template>
  <!-- Render multiple -->
  <template v-if="getType('biserial')">
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
        v-else="item.control === 'Select'"
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

  <!-- Render single -->
  <template v-else>
    <ElFormItem :label="item.label" :prop="`${item.prop}`">
      <ElInput
        v-if="item.control === 'Input'"
        v-model.number="dynamicModel[`${item.prop}`]"
      />
      <ElSwitch
        v-else-if="item.control === 'Switch'"
        v-model="dynamicModel[`${item.prop}`]"
      />
      <ElSelect
        v-else="item.control === 'Select'"
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
