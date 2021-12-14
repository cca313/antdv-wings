<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-14 09:48:48
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-14 11:51:34
 * @FilePath: \wings\packages\components\Radio\Radio.vue
 * @Descriptions: todo
-->
<template>
  <a-radio v-model="checked">{{ value }}</a-radio>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate'
import ARadio from 'ant-design-vue/es/radio'
export default defineComponent({
  components: { ARadio },
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  setup: ({ name, value }) => {
    const { checked, handleChange } = useField(name, undefined, {
      type: 'radio',
      checkedValue: value,
    })
    const handleCheckboxChange = (checkedValue: any) => {
      // console.log(handleChange);
      // console.log(checked, value);
      handleChange(value)
    }
    return {
      checked,
      handleCheckboxChange
    }
  }
})
</script>