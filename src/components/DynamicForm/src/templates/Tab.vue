<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-15 18:57:49
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/Tab.vue
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
  import FormBiserial from '../components/FormBiserial.vue';

  import type { ConfigType, SceneType } from '../../types';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  console.log('This Tab', props);

  /**
   * tabs?.uniseriate / tabs?.biserial
   * @see https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type
   */
  const { scene, tabs, actions, rule } = props.config;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});

  const biserialScene: SceneType = 'biserial';

  const tabClickHandler = (pane: any, ev: Event) => {
    console.log(pane, ev);
  };
</script>

<template>
  <!-- TODO ElTabPane slots -->
  <ElTabs type="border-card" @tab-click="tabClickHandler">
    <ElTabPane label="Uniseriate">
      <ElForm
        :model="dynamicFormModel"
        ref="formRef"
        :rules="rule"
        label-width="70px"
      >
        <!-- 渲染表单字段 -->
        <FormFields
          :scene="scene"
          :field="tabs?.uniseriate"
          :dynamic-model="dynamicFormModel"
        />
        <!-- 渲染操作按钮 -->
        <FormActions :scene="scene" :actions="actions" />
      </ElForm>
    </ElTabPane>

    <!-- <ElTabPane label="Biserial">
      <FormBiserial :field="tabs?.biserial" :rule="rule">
        <template #="{ field, dynamicModel }">
          <FormFields
            :scene="biserialScene"
            :item="field"
            :dynamic-model="dynamicModel"
          />
        </template>

        <template #actions>
          <FormActions :scene="scene" :actions="actions" />
        </template>
      </FormBiserial>
    </ElTabPane> -->

    <ElTabPane label="Group">
      <FormGroup :groups="tabs?.group" :rule="rule">
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
          <FormActions :scene="scene" :actions="actions" />
        </template>
      </FormGroup>
    </ElTabPane>
  </ElTabs>
</template>
