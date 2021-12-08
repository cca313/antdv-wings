/*
 * @Author: Gavin Chan
 * @Date: 2021-12-07 15:07:49
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-07 18:17:41
 * @FilePath: \wings\packages\components\SelectTree\index.tsx
 * @Descriptions: todo
 */
import { defineComponent } from 'vue';
import ATreeSelect, { treeSelectProps } from 'ant-design-vue/es/tree-select';

import ComponentUtil from '../../utils/ComponentUtil';
import { connect, Field, mapProps } from '@formily/vue';
import { formItemProps } from 'ant-design-vue/es/form';
import FormItem from '../FormItem';

const AWSelectTreeProps = {
  // treeProps: {
  //   type: Object,
  //   default: treeSelectProps
  // },
  ...treeSelectProps,
  ...formItemProps,
  name: {
    type: String,
    default: null
  }
};
const AWSelectTree = defineComponent({
  name: 'aw-select-tree',
  props: AWSelectTreeProps,
  setup(props) {
    return () => (
      <Field
        name={props.name}
        validator={props?.rules}
        dataSource={props.treeData}
        decorator={[FormItem]}
        component={[
          ATreeSelectWrapper,
          {
            class: 'aw-select-tree',
            dropdownMatchSelectWidth: true
          }
        ]}
      />
    );
  }
});

const ATreeSelectWrapper = connect(ATreeSelect, mapProps({ dataSource: 'treeData' }));

export default ComponentUtil.withInstall(AWSelectTree);
