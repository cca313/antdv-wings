/*
 * @Author: Gavin Chan
 * @Date: 2021-12-03 08:59:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-09 15:31:47
 * @FilePath: \wings\packages\components\Input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, h } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import AInput from 'ant-design-vue/es/input';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { Field, FieldContext } from 'vee-validate';

const AWInput = defineComponent({
  name: 'aw-input',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  components: { AFormItem, AInput },
  setup(props, { slots, attrs }) {
    console.log(props, attrs);
    return () => (
      <Field name={props.name} model-value={props.value}>
        {{
          default: (slotProps: FieldContext) => {
            const {
              value: inputValue,
              errorMessage,
              meta: { valid },
              errors,
              handleBlur,
              handleChange
            } = slotProps;
            const helpMessage: any =
              typeof errorMessage !== undefined || valid === true ? errorMessage : null;
            const validateStatus = Array.isArray(errors) && errors.length > 0 ? 'error' : '';
            return (
              <AFormItem
                label={props.label}
                validateStatus={validateStatus}
                help={helpMessage}
                autoLink={false}
                extra="extra"
              >
                <AInput
                  name={props.name}
                  value={inputValue as any}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </AFormItem>
            );
          }
        }}
      </Field>
    );
  }
});

export default ComponentUtil.withInstall(AWInput);
