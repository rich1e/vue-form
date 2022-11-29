<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-29 20:44:02
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-29 20:46:54
 * @FilePath: /vue-form/src/example/slots/fields.vue
 * @Description:
 *
-->
<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import {
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

  const ruleForm = reactive({
    username: '',
    pass: '',
    region: '',
    checkPass: '',
    age: '',
    delivery: false,
    resource: '',
    type: [],
  });
</script>

<template>
  <ElFormItem label="Password" prop="pass">
    <ElInput v-model="ruleForm.pass" type="password" autocomplete="off" />
  </ElFormItem>
  <ElFormItem label="Confirm" prop="checkPass">
    <ElInput v-model="ruleForm.checkPass" type="password" autocomplete="off" />
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
  </ElFormItem>
  <!-- <ElFormItem>
    <ElButton type="primary" @click="submitForm(ruleFormRef)">
      Submit
    </ElButton>
    <ElButton @click="resetForm(ruleFormRef)">Reset</ElButton>
  </ElFormItem> -->
</template>
