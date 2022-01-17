<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2022-01-17 10:23:36
 * @FilePath: \wings\examples\App.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { Field, Form } from "vee-validate";
import * as yup from 'yup';
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn' // import locale
dayjs.locale('zh-cn');


// Define a validation schema
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
// Create a form context with the validation schema
useForm({
  validationSchema: schema
});
// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');


const onSubmit = (values, actions) => {
  console.log(JSON.stringify(values, null, 2));
  // actions.resetForm();
  console.log(actions);
}
const treeData = [
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          {
            title: 'my leaf',
            value: 'leaf1',
          },
          {
            title: 'your leaf',
            value: 'leaf2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
      },
    ],
  },
]
const cascaderData = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]
const checkboxData = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const customschema = yup.object({
  input: yup.string().required().label("Email address"),
  select: yup.string().required().label('sex'),
  checkbox: yup.array().min(1).required(),
  radio: yup.string().required(),
  datepicker: yup.string().required(),
  rangepicker: yup.array().length(2).required(),
  cascader: null
});
const datepickerValue = dayjs().format("YYYY-MM-DD HH:mm:ss")
const rangepickerValue = undefined
const columns = [
  {
    title: '职位代码',
    dataIndex: 'code',
    // width: 160,
    ellipsis: true,
  },
  {
    title: '职位名称',
    dataIndex: 'name',
    // width: 180,
    ellipsis: true,
  },
  {
    title: '单位代码',
    dataIndex: 'unitCode',
    // width: 160,
    ellipsis: true,
  },
  {
    title: '单位名称',
    dataIndex: 'unitName',
    // width: 180,
    ellipsis: true,
  },
  {
    title: '招录人数',
    dataIndex: 'recruits',
    // width: 140,
    align: 'center',
    ellipsis: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    align: 'center',
    ellipsis: true,
  },

]
</script>

<template>
  <aw-button>custom button</aw-button>
  <!-- <div>
    <input name="email" v-model="email" />
    <span>{{ emailError }}</span>
    <input name="password" v-model="password" type="password" />
    <span>{{ passwordError }}</span>
  </div>-->
  <Form
    as="a-form"
    layout="inline"
    class="form"
    :validation-schema="customschema"
    :initial-values="{}"
    @submit="onSubmit"
  >
    <!-- <a-row> -->
    <!-- <a-col :span="12"> -->
    <aw-input name="input" label="label321" value="321" description="desccccc" />
    <aw-select
      name="select"
      label="select"
      :options="[{ key: 1, label: 1, value: 11 }, { key: 2, label: 2, value: 22 }]"
    />
    <aw-select-tree name="select-tree" label="select-tree" value="parent 1" :tree-data="treeData" />
    <aw-cascader name="cascader" label="cascader" :options="cascaderData" />
    <!-- </a-col> -->
    <!-- <a-col :span="12"> -->
    <aw-checkbox name="checkbox" label="checkbox" :options="checkboxData" />
    <aw-radio
      name="radio"
      label="radio"
      :value="1"
      :options="[{ label: 'A', value: 1 }, { label: 'B', value: 2 }]"
    />
    <aw-datepicker name="datepicker" label="datepicker" :show-time="true" :value="datepickerValue" />
    <aw-rangepicker name="rangepicker" label="rangepicker" />
    <!-- </a-col> -->
    <!-- </a-row> -->
    <!-- <Field name="input" alabel="123" value="xxx" as="aw-input" /> -->

    <!-- <Field name="checkbox" :value="['Apple']" v-slot="{ value, handleChange }">
      <a-form-item label="checkbox">
        <a-checkbox-group :value="value" :options="checkboxData" @change="handleChange"></a-checkbox-group>
      </a-form-item>
    </Field>-->

    <div>
      <a-button htmlType="submit">submit</a-button>
    </div>
  </Form>
  <!-- <aw-table :columns="columns" /> -->
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
  display: grid !important;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(3, 80px);
}
</style>
