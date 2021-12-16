/*
 * @Author: Gavin Chan
 * @Date: 2021-12-09 16:17:01
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-16 16:41:38
 * @FilePath: \wings\packages\components\Checkbox\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import ACheckbox from 'ant-design-vue/es/checkbox';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { ErrorMessage, Field, FieldContext, useFieldError, useIsFieldValid } from 'vee-validate';
// import { OptionData } from 'ant-design-vue/es/vc-select/interface';
// import { CheckboxValueType } from 'ant-design-vue/lib/checkbox/Group';
// import { CheckboxOptionType } from 'ant-design-vue/es/checkbox/Group';
import Checkbox from './Checkbox.vue';
const AWCheckbox = defineComponent({
  name: 'aw-checkbox',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
      // default: null
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    }
  },
  components: { AFormItem },
  setup(props, { slots }) {
    return () => {
      return (
        <AFormItem
          label={props.label}
          help={<ErrorMessage style={{ color: '#ff4d4f' }} name={props.name} /> || ''}
          autoLink={false}
          extra="extra"
        >
          {props.options?.map((item: any) => {
            return <Checkbox name={props.name} value={item.value || item} />;
          })}
        </AFormItem>
      );
    };
  }
});

export default ComponentUtil.withInstall(AWCheckbox);
