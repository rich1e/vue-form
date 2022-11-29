<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-23 18:36:22
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 21:01:07
 * @FilePath: /vue-form/src/example/slots/index.vue
 * @Description:
 *
-->
<template>
  <ElDivider>Slots</ElDivider>
  <ElForm
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    :style="{ textAlign: 'left' }"
  >
    <ElFormItem
      v-for="(item, index) in formJson"
      :key="`${item.prop}_${index}`"
      :label="item.label"
      :prop="`${item.prop}`"
    >
      <ElInput
        v-if="item.control === 'Input'"
        v-model.number="ruleForm[`${item.prop}`]"
      />
      <ElSwitch
        v-else-if="item.control === 'Switch'"
        v-model="ruleForm[`${item.prop}`]"
      />
      <!-- <ElSelect
        v-else-if="item.control === 'Select'"
        v-model="ruleForm[`${item.prop}`]"
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
        v-model="ruleForm[`${item.prop}`]"
        :label="item?.props?.label"
      /> -->

      <!-- 自定义组件 Slot -->
      <slot
        v-else-if="item.control === 'Slots'"
        name="customFields"
        :formModel="ruleForm"
      />
    </ElFormItem>

    <!-- <ElFormItem label="Password" prop="pass">
      <ElInput v-model="ruleForm.pass" type="password" autocomplete="off" />
    </ElFormItem>
    <ElFormItem label="Confirm" prop="checkPass">
      <ElInput
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </ElFormItem>
    <ElFormItem label="Activity type" prop="type">
      <ElCheckboxGroup v-model="ruleForm.type">
        <ElCheckbox label="Online activities" name="type" />
        <ElCheckbox label="Promotion activities" name="type" />
        <ElCheckbox label="Offline activities" name="type" />
        <ElCheckbox label="Simple brand exposure" name="type" />
      </ElCheckboxGroup>
    </ElFormItem>
    <ElFormItem label="Activity zone" prop="region">
      <ElSelect v-model="ruleForm.region" placeholder="Activity zone">
        <ElOption label="Zone one" value="shanghai" />
        <ElOption label="Zone two" value="beijing" />
      </ElSelect>
    </ElFormItem>
    <ElFormItem label="Age" prop="age">
      <ElInput v-model.number="ruleForm.age" />
    </ElFormItem>
    <ElFormItem label="Instant delivery" prop="delivery">
      <ElSwitch v-model="ruleForm.delivery" />
    </ElFormItem>
    <ElFormItem label="Resources" prop="resource">
      <ElRadioGroup v-model="ruleForm.resource">
        <ElRadio label="Sponsorship" />
        <ElRadio label="Venue" />
      </ElRadioGroup>
    </ElFormItem> -->

    <ElFormItem>
      <ElButton type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </ElButton>
      <ElButton @click="resetForm(ruleFormRef)">Reset</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import {
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElRadio,
    ElRadioGroup,
    ElCheckbox,
    ElCheckboxGroup,
    ElSwitch,
    ElSelect,
    ElOption,
  } from 'element-plus';
  import {
    checkAge,
    checkDelivery,
    checkRegion,
    checkResource,
    checkType,
  } from './rules';

  type FormRefType = InstanceType<typeof ElForm>;

  const ruleFormRef = ref<InstanceType<typeof ElForm> | null | any>(null);

  // const dynamicFormModel: any = reactive({});
  // username: '',
  // pass: '',
  // region: '',
  // checkPass: '',
  // age: '',
  // delivery: false,
  // resource: '',
  // type: [],
  const ruleForm: any = reactive({});

  const rules = reactive({
    region: [{ validator: checkRegion, trigger: 'change' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
    delivery: [{ validator: checkDelivery, trigger: 'change' }],
    resource: [{ validator: checkResource, trigger: 'change' }],
    type: [{ validator: checkType, trigger: 'blur' }],
  });

  const formJson = [
    {
      control: 'Input',
      label: '年龄',
      prop: 'age',
      props: {
        type: 'text',
        placeholder: '请输入年龄',
        modelValue: 'age',
      },
      bind: 'x',
      default: '-',
    },
    {
      control: 'Switch',
      label: '已婚',
      prop: 'married',
      props: {
        activeText: '是',
        inactiveText: '否',
        modelValue: 'married',
      },
      bind: 'x',
      default: '-',
    },
  ];

  const submitForm = (formEl: FormRefType | undefined) => {
    if (!formEl) return;
    formEl.validate((valid: any) => {
      if (valid) {
        console.table(ruleForm);
        console.log('submit!');
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };

  const resetForm = (formEl: FormRefType | undefined) => {
    if (!formEl) return;
    console.log('formEl#', formEl);
    formEl.resetFields();
  };
</script>
