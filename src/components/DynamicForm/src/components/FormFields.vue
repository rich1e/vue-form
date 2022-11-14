<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:37:25
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 23:27:14
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

  const props = defineProps({
    scene: {
      type: String as PropType<SceneType>,
      default: [],
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

  console.log('This FormFields', scene);
  console.log('This FormFields', field);

  const getType = (sceneType: string) => {
    if (!field) return false;
    if (scene === sceneType && field) return true;
    if (scene === sceneType && field) return true;
    if (scene === sceneType && field) return true;
    if (scene === sceneType && field) return true;
  };
</script>

<template>
  <template v-if="getType('uniseriate')">
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

  <template v-else-if="getType('biserial')">
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

  <template v-else-if="getType('tab')">
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

  <template v-else-if="getType('group')">
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

  <!-- TODO FormFields 异常逻辑 -->
</template>
