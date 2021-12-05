<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-03 17:17:40
 * @FilePath: \wings\examples\App.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import { defineExpose } from 'vue'
import { createForm, isVoidField } from '@formily/core'
import { FormProvider, Field, connect, mapProps, } from '@formily/vue'
import { Input, Form } from 'ant-design-vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const form = createForm()
const FormItem = connect(
  Form.Item,
  mapProps(
    { validateStatus: true, title: 'label' },
    (props, field) => {
      return {
        help: !isVoidField(field)
          ? field.selfErrors.length
            ? field.selfErrors
            : undefined
          : undefined,
        extra: field.description,
      }
    }
  )
)
</script>

<template>
  <aw-button>custom button</aw-button>
  <!-- <aw-table></aw-table> -->
  <!-- <aw-input name="123" label="333"></aw-input> -->
  <FormProvider :form="form">
    <Field
      name="input"
      title="输入"
      :required="true"
      :validator="[{ required: true, min: 1, max: 5 }]"
      :decorator="[FormItem]"
      :component="[Input, { style: { 'width': '100px' }, placeholder: '请输入321', required: true }]"
    />
  </FormProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
