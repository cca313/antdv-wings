/*
 * @Author: Gavin Chan
 * @Date: 2021-12-07 18:27:16
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-07 18:34:34
 * @FilePath: \wings\packages\components\Cascader\index.tsx
 * @Descriptions: todo
 */
import { defineComponent } from 'vue';
import ACascader, { CascaderProps } from 'ant-design-vue/es/cascader';
import ComponentUtil from '../../utils/ComponentUtil';
import { connect, Field, mapProps } from '@formily/vue';
import { formItemProps } from 'ant-design-vue/es/form';
import FormItem from '../FormItem';

const AWCascaderProps = {
  ...formItemProps,
  name: {
    type: String,
    default: null
  }
};

const AWCascader = defineComponent({
  name: 'aw-cascader',
  props: AWCascaderProps,
  setup(props) {
    return () => (
      <Field
        name={props.name}
        validator={props?.rules}
        dataSource={props.options}
        decorator={[FormItem]}
        component={[
          ATCascaderWrapper,
          {
            class: 'aw-select-tree',
            dropdownMatchSelectWidth: true
          }
        ]}
      />
    );
  }
});

const ATCascaderWrapper = connect(ACascader, mapProps({ dataSource: 'options' }));

export default ComponentUtil.withInstall(ATCascaderWrapper);
