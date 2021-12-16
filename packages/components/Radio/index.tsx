/*
 * @Author: Gavin Chan
 * @Date: 2021-12-14 10:02:31
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-15 16:58:23
 * @FilePath: \wings\packages\components\Radio\index.tsx
 * @Descriptions: todo
 */
import { defineComponent } from 'vue';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import ARadio from 'ant-design-vue/es/radio';
import { ErrorMessage, Field, FieldContext } from 'vee-validate';
import Radio from './Radio.vue';
import ComponentUtil from '../../utils/ComponentUtil';

const ARadioGroup = ARadio.Group;

const AWRadio = defineComponent({
  name: 'aw-radio',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: [String, Number]
  },
  setup({ name, label, value, options }) {
    return () => {
      return (
        <Field name={name} modelValue={value}>
          {{
            default: (slotProps: FieldContext) => {
              const {
                value,
                handleChange,
                errorMessage,
                meta: { valid },
                errors
              } = slotProps;
              const onRadioChange = (e: any) => {
                handleChange(e.target.value);
              };
              const helpMessage: any =
                typeof errorMessage !== undefined || valid === true ? errorMessage : null;
              const validateStatus = Array.isArray(errors) && errors.length > 0 ? 'error' : '';
              return (
                <AFormItem
                  label={label}
                  validateStatus={validateStatus}
                  help={helpMessage}
                  autoLink={false}
                  extra="extra"
                >
                  <ARadioGroup
                    value={value}
                    name={name}
                    onChange={onRadioChange}
                    options={options as any}
                  ></ARadioGroup>
                </AFormItem>
              );
            }
          }}
        </Field>
      );
    };
  }
});

export default ComponentUtil.withInstall(AWRadio);
