<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-11 09:39:28
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-12-02 17:35:36
 * @FilePath: /vue-form/src/components/DynamicForm/src/templates/TabTemplate.vue
 * @Description:
 *
-->
<script lang="ts">
  /**
   * @see https://github.com/vuejs/rfcs/discussions/273
   * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#automatic-name-inference
   */
  export default { name: 'TabTemplate' };
</script>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { reactive, ref, provide, onMounted, watch, inject } from 'vue';

  import { ElForm } from 'element-plus';

  import FormFields from '../components/FormFields.vue';
  import FormActions from '../components/FormActions.vue';
  import FormGroup from '../components/FormGroup.vue';
  import FormBiserial from '../components/FormBiserial.vue';
  import FormTabs from '../components/FormTabs.vue';

  import type { ConfigType, SceneType } from '../../types';
  import useDynamicSlots, {
    filterField,
    filterGroups,
  } from '../hooks/useDynamicSlots';
  import { formInjectionKey } from '../../keys';

  const props = defineProps({
    config: {
      type: Object as PropType<ConfigType>,
      default: {},
    },
  });

  console.debug('This TabTemplate');
  console.groupCollapsed('Tab Props');
  console.table(props);
  console.groupEnd();

  /**
   * tabs?.uniseriate / tabs?.biserial
   * @see https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type
   */
  const { scene, tabs, actions, rule } = props.config;

  /** 表单引用 */
  const formRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  /** 动态表单字段 */
  const dynamicFormModel: any = reactive({});

  const formData: any = inject(formInjectionKey);

  const { slots } = useDynamicSlots({ tabs });

  const slotsComputed = ref<string[]>([]);

  onMounted(() => {
    slotsComputed.value = slots.value;
  });

  watch(formData, (newVal: any) => {
    const { type } = newVal;
    if (type === 'biserial' || type === 'uniseriate') {
      slotsComputed.value = filterField(newVal[type]);
    } else if (type === 'group') {
      slotsComputed.value = filterGroups(newVal[type]);
    }
  });

  // TODO 当UI为biserial时，需要注入formRef
  const biserialScene: SceneType = 'biserial';
  provide('FORM_REF', formRef);
</script>

<template>
  <FormTabs :tabs="tabs">
    <template #="{ tabPane }">
      <!-- uniseriate template -->
      <ElForm
        :model="dynamicFormModel"
        ref="formRef"
        :rules="rule"
        label-width="80px"
        v-if="tabPane?.uniseriate"
      >
        <FormFields
          :scene="scene"
          :field="tabPane?.uniseriate"
          :dynamic-model="dynamicFormModel"
        >
          <template
            #[item]="{ formModel }"
            v-for="(item, idx) in slotsComputed"
            :key="`${item}_${idx}`"
          >
            <slot :name="item" :slotModel="formModel" />
          </template>
        </FormFields>

        <FormActions :scene="scene" :actions="actions" />
      </ElForm>

      <!-- biserial template -->
      <FormBiserial
        :field="tabPane?.biserial"
        :rule="rule"
        v-if="tabPane?.biserial"
      >
        <template #="{ field, dynamicModel }">
          <FormFields
            :scene="biserialScene"
            :item="field"
            :dynamic-model="dynamicModel"
          >
            <template
              #[item]="{ formModel }"
              v-for="(item, idx) in slotsComputed"
              :key="`${item}_${idx}`"
            >
              <slot :name="item" :slotModel="formModel" />
            </template>
          </FormFields>
        </template>

        <template #actions>
          <FormActions :scene="biserialScene" :actions="actions" />
        </template>
      </FormBiserial>

      <!-- group template -->
      <FormGroup :groups="tabPane?.group" :rule="rule" v-if="tabPane?.group">
        <template #="{ rank, dynamicModel }">
          <FormFields
            :scene="scene"
            :field="rank"
            :dynamic-model="dynamicModel"
          >
            <template
              #[item]="{ formModel }"
              v-for="(item, idx) in slotsComputed"
              :key="`${item}_${idx}`"
            >
              <slot :name="item" :slotModel="formModel" />
            </template>
          </FormFields>
        </template>

        <template #actions>
          <FormActions :scene="scene" :actions="actions" />
        </template>
      </FormGroup>
    </template>
  </FormTabs>
</template>