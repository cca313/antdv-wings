/*
 * @Author: Gavin Chan
 * @Date: 2021-12-05 22:22:20
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-05 22:37:19
 * @FilePath: \antdv-wings\packages\components\Preview-Text\index.tsx
 * @Descriptions: todo
 */
import { defineComponent } from 'vue';
import { composeExport } from '../../utils/base';

const Input = defineComponent({
  // name: 'a',
  // props: [],
  setup(props: any, { attrs, slots }) {
    // const placeholder = usePlaceholder(attrs.value);
    return () => {
      <span>{props.value || ''}</span>;
    };
  }
});

// const Text = defineComponent<any>({
//   setup(props, { attrs }) {
//     return () => {
//       return (
//         <span>{props.value}</span>
//       )
//     };
//   }
// });

export const PreviewText = {
  Input
};
