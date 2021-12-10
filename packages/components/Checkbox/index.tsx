/*
 * @Author: Gavin Chan
 * @Date: 2021-12-09 16:17:01
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-10 18:01:24
 * @FilePath: \wings\packages\components\Checkbox\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import ACheckbox from 'ant-design-vue/es/checkbox';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { Field, FieldContext, useFieldError, useIsFieldValid } from 'vee-validate';
import { OptionData } from 'ant-design-vue/es/vc-select/interface';
import { CheckboxValueType } from 'ant-design-vue/lib/checkbox/Group';
import { CheckboxOptionType } from 'ant-design-vue/es/checkbox/Group';
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
    console.log(props.value);
    const errorMsg = useFieldError(props.name);
    const isValid = useIsFieldValid(props.name);
    return () => (
      <Field name={props.name}>
        {{
          default: (slotProps: FieldContext) => {
            let {
              value,
              errorMessage,
              meta: { valid },
              errors,
              handleBlur,
              handleChange
            } = slotProps;
            const helpMessage: any =
              typeof errorMsg.value !== undefined || isValid.value === true ? errorMsg.value : null;
            const validateStatus = Array.isArray(errors) && errors.length > 0 ? 'error' : '';
            value = props.value as any;
            return (
              <AFormItem
                label={props.label}
                validateStatus={validateStatus}
                help={helpMessage}
                autoLink={false}
                extra="extra"
              >
                {props.options?.map((item: any) => {
                  const isString = typeof item === 'string';
                  const isChecked =
                    isString === true
                      ? item
                      : props.value?.findIndex((option: any) => option.value === item.value) === -1
                      ? false
                      : true;
                  console.log(
                    item,
                    isString,
                    props.value?.findIndex((option: any) => option.value === item.value)
                  );
                  return (
                    <ACheckbox name={props.name} defaultChecked={isChecked}>
                      {isString === true ? item : item.label}
                    </ACheckbox>
                  );
                })}
              </AFormItem>
            );
          }
        }}
      </Field>
    );
  }
});

export default ComponentUtil.withInstall(AWCheckbox);
