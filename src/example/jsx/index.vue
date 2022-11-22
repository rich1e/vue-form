<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-21 14:38:54
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-22 16:57:20
 * @FilePath: /vue-form/src/example/jsx/index.vue
 * @Description:
 *
-->

<script lang="tsx">
  import { ref, defineComponent } from 'vue';
  import {
    ElDivider,
    ElRadio,
    ElRadioGroup,
    ElRadioButton,
  } from 'element-plus';

  import InSwitch from '/@/example/jsx/components/Switch';
  import InSelect from '/@/example/jsx/components/Select';
  import InInput from '/@/example/jsx/components/Inputs';
  import InRadio from '/@/example/jsx/components/Radio';

  export default defineComponent({
    name: 'Jsx',
    setup() {
      const initSwitchValue = ref(true);

      const switchOptions = {
        activeText: 'test',
      };

      const initSelectValue = ref('');

      const selectOptions = [
        {
          value: 'Option1',
          label: '上海',
        },
        {
          value: 'Option2',
          label: '北京',
        },
        {
          value: 'Option3',
          label: '深圳',
        },
      ];

      const selectAttrs = {
        onChange: (val: any) => {
          console.log('selectAttrs onChange', val);
        },
      };

      const initInputValue = ref('');

      const inputOptions = {
        type: 'text',
        placeholder: '请输入',
        clearable: true,
        onChange: (val: any) => {
          console.log('input onChange', val);
        },
        // onChange 是 Element Plus 事件，onchange 是DOM原始事件
        // onchange: (val: any) => {
        //   console.log('input onchange', val);
        // },
        // showWordLimit: true,
      };

      const initRadioValue = ref(3);
      const initRadioButtonValue = ref(6);

      const radioOptions = [
        {
          label: 3,
          title: 'Option A',
        },
        {
          label: 6,
          title: 'Option B',
        },
        {
          label: 9,
          title: 'Option C',
        },
      ];

      const radioEvent = {
        onChange: (val: any) => {
          console.log('radio onChange', val.target ? val.target.value : val);
        },
      };

      return () => (
        <>
          <ElDivider>InSwitch</ElDivider>
          <InSwitch v-model={initSwitchValue.value} {...switchOptions} />
          <ElDivider>InSelect</ElDivider>
          <InSelect
            v-model={initSelectValue.value}
            options={selectOptions}
            {...selectAttrs}
          />
          <ElDivider>InInput</ElDivider>
          <InInput v-model={initInputValue.value} {...inputOptions} />
          <ElDivider>ElRadio</ElDivider>
          <ElRadioGroup v-model={initRadioValue.value}>
            {radioOptions.map((radio) => {
              const { label, title } = radio;
              return (
                <ElRadio label={label} {...radioEvent}>
                  {title}
                </ElRadio>
              );
            })}
          </ElRadioGroup>
          <ElDivider>ElRadio Button</ElDivider>
          <ElRadioGroup v-model={initRadioButtonValue.value}>
            {radioOptions.map((radio) => {
              const { label, title } = radio;
              return (
                <ElRadioButton label={label} {...radioEvent}>
                  {title}
                </ElRadioButton>
              );
            })}
          </ElRadioGroup>
          <ElDivider>InRadio</ElDivider>
          <InRadio
            modelValue={initRadioValue.value}
            options={radioOptions}
            radioEvent={radioEvent}
            isButtonStyle={true}
          />
        </>
      );
    },
  });
</script>
