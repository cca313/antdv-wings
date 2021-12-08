/*
 * @Author: Gavin Chan
 * @Date: 2021-12-06 13:44:32
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-07 17:53:56
 * @FilePath: \wings\packages\components\Select\index.tsx
 * @Descriptions: todo
 */
import { Field, connect, mapReadPretty, mapProps } from '@formily/vue';
import { defineComponent } from 'vue';
import { SelectProps } from 'ant-design-vue';
import ASelect, { selectProps } from 'ant-design-vue/es/select';
import FormItem from '../FormItem/index';
import ComponentUtil from '../../utils/ComponentUtil';

interface IAWSelectProps extends SelectProps {
  name: string;
}
const AWSelectProps = Object.assign({}, selectProps(), {
  name: {
    type: String,
    required: true,
    default: null
  }
});
const AWSelect = defineComponent({
  name: 'aw-select',
  props: AWSelectProps,
  setup(props) {
    console.log(props, selectProps(), 'select');
    const component = [
      AWSelectWrapper,
      { getPopupContainer: (triggerNode: any) => triggerNode.parentNode }
    ];
    return () => (
      <Field
        name={props.name}
        dataSource={props.options as any[]}
        component={component}
        decorator={[FormItem]}
      />
    );
  }
});

const AWSelectWrapper = connect(ASelect, mapProps({ dataSource: 'options' }));

export default ComponentUtil.withInstall(AWSelect);
