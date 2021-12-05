/*
 * @Author: Gavin Chan
 * @Date: 2021-12-03 08:59:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-05 23:21:45
 * @FilePath: \antdv-wings\packages\components\Input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, h } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import AInput from 'ant-design-vue/es/input';
import InputProps from 'ant-design-vue/es/input/inputProps';
import { connect, Field, mapProps, mapReadPretty } from '@formily/vue';
import FormItem from '../FormItem';

import 'ant-design-vue/es/input/style';
import { PreviewText } from '../Preview-Text';

const AWInputProps = Object.assign({}, InputProps, {
  label: String,
  rules: Array || Object
});
interface IAWInputProps {
  label?: string;
  name: string;
  rules: Array<unknown> | Object;
}

const AWInput = defineComponent<IAWInputProps>({
  name: 'aw-input',
  // props: AWInputProps,
  setup(props, ctx) {
    const component = [AWInputWrapper];
    // console.log(props.type, props.lazy);
    return () => (
      <Field
        // name={props.name}
        validator={props?.rules}
        decorator={[FormItem]}
        component={component}
        {...props}
      />
    );
  }
});

// const AWInputWrapper = defineComponent({
//   // name: 'aw-input',

//   setup() {
//     return () =>
//       connect(
//         AInput,
//         // mapProps({}, (props) => {
//         //   console.log(props);
//         //   return props;
//         // }),
//         // mapReadPretty(PreviewText.Input)
//         mapReadPretty({
//           props: ['value'],
//           // you need import "h" from "vue" in vue3
//           render(h) {
//             return h('div', ['321']);
//           }
//         })
//       );
//   }
// });
const AWInputWrapper = connect(
  AInput,
  mapReadPretty({
    props: ['value'],
    // you need import "h" from "vue" in vue3
    render() {
      return h('div', '321');
    }
  })
);

export default ComponentUtil.withInstall(AWInput);
