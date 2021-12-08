<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-08 15:43:40
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-08 17:34:11
 * @FilePath: \wings\packages\components\Input\index.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import AInput from 'ant-design-vue/es/input';
import AForm from 'ant-design-vue/es/form';
import { useField, Field } from 'vee-validate';
import { withInstall } from 'ant-design-vue/es/_util/type';
const AFormItem = AForm.Item
const props = defineProps<{
  label: string
  name: string
  // value: any
}>()
const field = useField(props.name)
console.log(field);
</script>
<script lang="ts">
export default withInstall({
  name: 'aw-input'
})
</script>
<template>
  <AFormItem :label="props.label" :name="props.name">
    <AInput v-model="field.value" />
  </AFormItem>
  <!-- <a-form-item :name="props.name" help="321" :label="props.label">
  </a-form-item>-->
</template>

<style lang="less">
</style>
