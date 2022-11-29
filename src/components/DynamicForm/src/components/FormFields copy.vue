<!--
 * @Author: rich1e
 * @Date: 2022-11-14 12:37:25
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 13:45:23
-->
<script lang="ts">
  export default {
    name: 'FormFields',
  };
</script>

<script setup lang="ts">
  import { PropType, VNode, watchEffect } from 'vue';
  import {
    ElFormItem,
    ElInput,
    ElSwitch,
    ElSelect,
    ElOption,
    ElCheckbox,
  } from 'element-plus';

  import InCheckbox from '/@/example/jsx/components/Checkbox';

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
  console.table(field);
  console.log('dynamicModel#', dynamicModel);

  const getType = (sceneType: string) => {
    if (scene === sceneType && field) return false;
    else return true;
  };

  // const setDynamicModel = (fn: any, mode: any): VNode => {
  //   console.log('setDynamicModel#', fn);
  //   console.log('setDynamicModel', mode);
  //   return fn.call(null, mode);
  // };

  // watchEffect(
  //   () => {
  //     console.log('watchEffect#', field);

  //     field.forEach((item) => {
  //       const { control } = item;
  //       if (control === 'Slots') {
  //         item.slots?.call(null, dynamicModel);
  //       }
  //     });
  //   },
  //   {
  //     flush: 'post',
  //   },
  // );
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
      <!-- <template v-else="item.control === 'Slots'"> -->
      <!-- 接收一个 VNode 动态组件 -->
      <!-- <component :is="item.slots" /> -->
      <!-- </template> -->
    </ElFormItem>
    <slot name="customFields" />
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
      <template v-else="item.control === 'Slots'">
        <!-- 接收一个 VNode 动态组件 -->
        <component :is="item.slots" />
        <!-- <component :is="() => item.slots?.call(null, 'test')" /> -->
        <!-- <component :is="setDynamicModel(item.slots, dynamicModel)" /> -->
      </template>
    </ElFormItem>
  </template>

  <!-- TODO FormFields 异常逻辑 -->
</template>
