/*
 * @Author: Gavin Chan
 * @Date: 2021-12-03 08:59:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-07 17:49:58
 * @FilePath: \wings\packages\components\Input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, h, Slot, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import AInput from 'ant-design-vue/es/input';
import InputProps from 'ant-design-vue/es/input/inputProps';
import { connect, Field, mapProps, mapReadPretty } from '@formily/vue';
import FormItem from '../FormItem';

// import IAInputProps from 'ant-design-vue/es/input/inputProps';

import 'ant-design-vue/es/input/style';
import { PreviewText } from '../Preview-Text';
import { formItemProps } from 'ant-design-vue/es/form';

const AWInputProps = Object.assign({}, InputProps, formItemProps, {
  // label: String,
  // rules: Array || Object
});
// interface IAWInputProps {
//   label?: string;
//   name: string;
//   rules?: Array<unknown> | Object;
//   value: any;
//   addonAfter?: string;
//   addonBefore?: string;
//   disabled?: boolean;
//   maxLength?: number;
//   prefix?: string | Slot;
//   suffix?: string | Slot;
//   size?: 'large' | 'default' | 'small';
//   allowClear?: boolean;
// }

const AWInput = defineComponent({
  name: 'aw-input',
  props: AWInputProps,
  setup(props, ctx) {
    console.log(props);
    const component = [AWInputWrapper, {}];
    // console.log(props.type, props.lazy);
    return () => (
      <Field
        name={props.name}
        validator={props?.rules}
        decorator={[FormItem]}
        component={component}
      />
    );
  }
});

// const AWInputWrapper = connect(
//   AInput,
//   mapReadPretty({
//     props: ['value'],
//     // you need import "h" from "vue" in vue3
//     render() {
//       return h('div', "321");
//     }
//   })
// );

const AWInputWrapper = connect(AInput, mapReadPretty(PreviewText.Input));

export default ComponentUtil.withInstall(AWInput);
