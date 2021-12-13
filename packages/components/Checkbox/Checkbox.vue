<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-13 10:24:53
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-13 15:51:42
 * @FilePath: \wings\packages\components\Checkbox\Checkbox.vue
 * @Descriptions: todo
-->
<template>
  <a-checkbox v-model="checked" @change="handleCheckboxChange">{{ value }}</a-checkbox>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useField } from 'vee-validate'
import Checkbox from 'ant-design-vue/es/checkbox'
export default defineComponent({
  name: "",
  components: { Checkbox },
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
      type: 'checkbox',
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
<style lang="less">
</style>