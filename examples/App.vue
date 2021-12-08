<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-08 22:42:22
 * @FilePath: \antdv-wings\examples\App.vue
 * @Descriptions: todo
-->
<script setup lang="ts">
import { defineExpose, ref } from 'vue'
// import { createForm, isVoidField } from '@formily/core'
// import { FormProvider, Field, connect, mapProps, FormConsumer } from '@formily/vue'
// import { Input, Form } from 'ant-design-vue'
import { useForm, useField } from 'vee-validate';
import { Field, Form } from "vee-validate";
import * as yup from 'yup';
// import { AWInput } from '../packages'; 

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// const form = createForm({})

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
const customschema = yup.object({
  input: yup.string().required().label("Email address"),
});

const onSubmit = (values, actions) => {
  console.log(JSON.stringify(values, null, 2));
  // actions.resetForm();
  console.log(actions);
}
</script>

<template>
  <aw-button>custom button</aw-button>
  <div>
    <input name="email" v-model="email" />
    <span>{{ emailError }}</span>
    <input name="password" v-model="password" type="password" />
    <span>{{ passwordError }}</span>
  </div>
  <Form as="a-form" :validation-schema="customschema" @submit="onSubmit">
    <aw-input name="input" label="label321" value="321" description="desccccc" />
    <!-- <AWInput name="input" label="321" /> -->
    <div>
      <a-button htmlType="submit">submit</a-button>
    </div>
  </Form>
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
