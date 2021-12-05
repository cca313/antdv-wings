/*
 * @Author: Gavin Chan
 * @Date: 2021-12-03 08:59:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-03 14:27:56
 * @FilePath: \wings\packages\components\Input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, Plugin, render } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import Input from 'ant-design-vue/es/input';
import FormItem from 'ant-design-vue/es/form/FormItem';
import InputProps from 'ant-design-vue/es/input/inputProps';
import { Field, connect, mapProps } from '@formily/vue';

import 'ant-design-vue/es/input/style';

const AWInputProps = Object.assign({}, InputProps, {
  label: String
});

const AWInput = defineComponent({
  name: 'aw-input',
  props: AWInputProps,
  setup(props, ctx) {
    const component = [Input, { ...props, placeholder: '请输入', required: true }];
    return () => (
      <Field
        name={props.name}
        title={props.label}
        required={true}
        validator={[{ min: 5, max: 10, message: '最大5，最小10' }]}
        decorator={[FormItemWarpper]}
        component={component}
      />
      // <div>321</div>
    );
  }
});
const FormItemWarpper = connect(
  FormItem,
  mapProps(
    {
      title: 'label',
      description: 'extra'
      // required: true,
      // validateStatus: true
    },
    (props, field: any) => {
      console.log(props, field);
      return {
        ...props,
        ...field.componentProps,
        help: field.errors?.length ? field.errors : undefined
      };
    }
  )
);
// const AWInput = connect(
//   AWInputBasic,
//   mapProps((props: any) => {
//     return {
//       ...props,
//       label: props.title
//     };
//   })
// );
export default ComponentUtil.withInstall(AWInput);
