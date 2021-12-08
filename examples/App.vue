<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-08 09:55:35
 * @FilePath: \wings\examples\App.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import { defineExpose, ref } from 'vue'
import { createForm, isVoidField } from '@formily/core'
import { FormProvider, Field, connect, mapProps, FormConsumer } from '@formily/vue'
import { Input, Form } from 'ant-design-vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const form = createForm({})
const handleClick = (args) => {
  console.log(args);
}
const treedata = ref([
  {
    label: '选项1',
    value: 1,
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node3',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    label: '选项2',
    value: 2,
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
])
</script>

<template>
  <aw-button>custom button</aw-button>
  <!-- <aw-table></aw-table> -->
  <!-- <aw-input name="123" label="333"></aw-input> -->
  <FormProvider :form="form">
    <a-form
      layout="horizontal"
      :colon="false"
      :style="{
        // 'width': '50%',
        'margin': 'auto'
      }"
    >
      <a-space>
        <!-- <aw-input
          placeholder="321"
          name="input1"
          title="zxxx"
          :rules="{ required: true, min: 2, max: 5 }"
        />
        <aw-input
          name="input2"
          title="ggggg"
          :rules="{ required: true, min: 2, max: 5 }"
          placeholder="vxcvxc"
          initialValue="3fsdfsdf"
        />-->
        <!-- <aw-select
          name="select"
          title="fdsf"
          :options="[{ key: 1, value: 'x' }, { key: 2, value: 'y' }]"
        />-->
        <aw-select
          name="select1"
          title="select1"
          :options="[{ key: 0, value: '全部' }, { key: 1, value: 'x' }, { key: 2, value: 'y' }]"
          initialValue="x"
        />
        <aw-select
          name="select2"
          title="select2"
          :options="[{ key: 0, value: '全部' }, { key: 1, value: 'x' }, { key: 2, value: 'y' }]"
          initialValue="x"
        />
        <aw-select-tree
          name="treeselect"
          title="treeselect"
          :tree-data="treedata"
          initialValue="2"
        />
      </a-space>
      <FormConsumer>
        <template #default="{ form }">
          <div>{{ form.values }}</div>
          <div>
            <a-button @click="() => { form.submit(handleClick) }">submit</a-button>
          </div>
        </template>
      </FormConsumer>
    </a-form>
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
