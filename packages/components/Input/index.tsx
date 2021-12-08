/*
 * @Author: Gavin Chan
 * @Date: 2021-12-03 08:59:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-08 15:44:01
 * @FilePath: \wings\packages\components\Input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, h, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import AInput from 'ant-design-vue/es/input';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { useField, Field } from 'vee-validate';
interface IAWInputProps {
  label: string;
  name: string;
}

// const AWInput = defineComponent({
//   name: 'aw-input',
//   inheritAttrs: false,
//   props: {
//     name: {
//       type: String,
//       required: true,
//       default: null
//     },
//     label: {
//       type: String,
//       required: true
//     },
//     value: {
//       type: String,
//       default: ''
//     }
//   },
//   components: { AFormItem, AInput },
//   setup(props, ctx) {
//     console.log(props, ctx);
//     const field = useField(props.name);
//     const {
//       errorMessage,
//       handleBlur,
//       handleChange,
//       value: inputValue,
//       meta: { valid }
//     } = field;
//     console.log(field);
//     return () => (
//       <AFormItem label={props.label} help={'321'} autoLink={false} extra="extra">
//         <AInput
//           name={props.name}
//           value={inputValue as any}
//           onBlur={handleBlur}
//           onChange={handleChange}
//         />
//       </AFormItem>
//     );
//   }
// });

// export default ComponentUtil.withInstall(AWInput);
