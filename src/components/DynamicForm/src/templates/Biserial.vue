<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-15 12:41:55
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
  import { PropType, reactive, ref } from 'vue';
  import { ElRow, ElCol, ElForm, ElFormItem, ElButton } from 'element-plus';

  // TODO FormActions & FormFields
  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';

  import type { ConfigType } from '../../types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType> | any,
      default: {},
    },
  });

  console.log('This Biserial', props);

  const { scene, field, actions, rule } = props.config;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});
</script>

<template>
  <!-- TODO ElRow 默认会添加 margin 值，手动设置后可以覆盖默认行为 -->
  <ElForm
    :model="dynamicFormModel"
    ref="formRef"
    :rules="rule"
    label-width="auto"
  >
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
        <ElFormItem :label="item.label" :prop="`${item.prop}`">
          <ElInput
            v-if="item.control === 'Input'"
            v-model.number="dynamicFormModel[`${item.prop}`]"
          />
          <ElSwitch
            v-else-if="item.control === 'Switch'"
            v-model="dynamicFormModel[`${item.prop}`]"
          />
          <ElSelect
            v-else="item.control === 'Select'"
            v-model="dynamicFormModel[`${item.prop}`]"
          >
            <ElOption
              v-for="opt in item.options"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"
            />
          </ElSelect>
        </ElFormItem>
      </ElCol>

      <ElCol :span="24">
        <ElFormItem>
          <template v-if="actions">
            <ElButton
              v-if="actions.onSubmit"
              @click="actions?.onSubmit.handler(formRef)"
            >
              {{ actions.onSubmit.btnText }}
            </ElButton>
            <ElButton
              v-if="actions.onCancel"
              @click="actions?.onCancel.handler(formRef)"
            >
              {{ actions.onCancel.btnText }}
            </ElButton>
            <ElButton
              v-if="actions.onRest"
              @click="actions?.onRest.handler(formRef)"
            >
              {{ actions.onRest.btnText }}
            </ElButton>
            <ElButton
              v-if="actions.onBack"
              @click="actions?.onBack.handler(formRef)"
            >
              {{ actions.onBack.btnText }}
            </ElButton>
          </template>
        </ElFormItem>
      </ElCol>
    </ElRow>
  </ElForm>
</template>
