<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-05 22:52:07
 * @FilePath: \antdv-wings\examples\App.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import { defineExpose } from 'vue'
import { createForm, isVoidField } from '@formily/core'
import { FormProvider, Field, connect, mapProps, } from '@formily/vue'
import { Input, Form } from 'ant-design-vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const form = createForm({ readPretty: true })
</script>

<template>
  <aw-button>custom button</aw-button>
  <!-- <aw-table></aw-table> -->
  <!-- <aw-input name="123" label="333"></aw-input> -->
  <FormProvider :form="form">
    <aw-input name="input1" title="zxxx" />
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
