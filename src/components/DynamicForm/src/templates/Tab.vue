<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 23:53:35
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Uniseriate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'Tab' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { reactive, ref } from 'vue';
  import { ElForm, ElTabs, ElTabPane } from 'element-plus';

  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';
  import FormGroup from '../components/FormGroup.vue';

  import type { ConfigType, FieldType } from '../../types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  console.log('This Tab', props);

  /**
   * groups?.uniseriate / groups?.biserial
   * @see https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type
   */
  const { scene, groups, actions, rule, ranks } = props.config;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});
</script>

<template>
  <!-- TODO ElTabPane slots -->
  <ElTabs type="border-card">
    <ElTabPane label="Uniseriate">
      <ElForm
        :model="dynamicFormModel"
        ref="formRef"
        :rules="rule"
        label-width="auto"
      >
        <!-- 渲染表单字段 -->
        <FormFields
          :scene="scene"
          :field="groups?.uniseriate"
          :dynamic-model="dynamicFormModel"
        />
        <!-- 渲染操作按钮 -->
        <FormActions :actions="actions" />
      </ElForm>
    </ElTabPane>

    <!-- <ElTabPane label="Biserial">
      <ElForm :model="dynamicFormModel" ref="formRef" :rules="rule">
        <FormFields
          :scene="scene"
          :field="groups?.biserial"
          :dynamic-model="dynamicFormModel"
        />
        <FormActions :actions="actions" />
      </ElForm>
    </ElTabPane> -->

    <ElTabPane label="Group">
      <FormGroup :ranks="ranks" :rule="rule">
        <!-- 渲染表单字段 -->
        <template #="{ rank, dynamicModel }">
          <FormFields
            :scene="scene"
            :field="rank"
            :dynamic-model="dynamicModel"
          />
        </template>

        <!-- 渲染操作按钮 -->
        <template #actions>
          <FormActions :actions="actions" />
        </template>
      </FormGroup>
    </ElTabPane>
  </ElTabs>
</template>
