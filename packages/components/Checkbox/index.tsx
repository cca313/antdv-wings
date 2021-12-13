/*
 * @Author: Gavin Chan
 * @Date: 2021-12-09 16:17:01
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-13 17:50:09
 * @FilePath: \wings\packages\components\Checkbox\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import ACheckbox from 'ant-design-vue/es/checkbox';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { ErrorMessage, Field, FieldContext, useFieldError, useIsFieldValid } from 'vee-validate';
import { OptionData } from 'ant-design-vue/es/vc-select/interface';
import { CheckboxValueType } from 'ant-design-vue/lib/checkbox/Group';
import { CheckboxOptionType } from 'ant-design-vue/es/checkbox/Group';
import Checkbox from './Checkbox.vue';
const ACheckboxGroup = ACheckbox.Group;
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
  components: { AFormItem, ACheckboxGroup },
  setup(props, { slots }) {
    return () => {
      // console.log(props.value);
      // const errorMsg = useFieldError(props.name);
      // const isValid = useIsFieldValid(props.name);
      // const errorMsg = useFieldError('checkbox');
      // const isValid = useIsFieldValid('checkbox');
      // console.log(errorMsg, isValid);
      // const helpMessage: any =
      //   typeof errorMsg.value !== undefined || isValid.value === true ? errorMsg.value : null;
      // const validateStatus =
      //   typeof errorMsg.value === undefined || isValid.value === false ? 'error' : '';
      return (
        <AFormItem
          label={props.label}
          help={
            <ErrorMessage
              class="ant-form-item-explain-error"
              style={{ color: '#ff4d4f' }}
              name={props.name}
            />
          }
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
