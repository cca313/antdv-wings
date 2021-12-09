/*
 * @Author: Gavin Chan
 * @Date: 2021-12-06 13:44:32
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-09 14:13:43
 * @FilePath: \wings\packages\components\Select\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import ASelect, { SelectValue } from 'ant-design-vue/es/select';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { Field, FieldContext } from 'vee-validate';
import { OptionData } from 'ant-design-vue/es/vc-select/interface';

const AWSelect = defineComponent({
  name: 'aw-select',
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
      type: Object as PropType<SelectValue>
    },
    options: {
      type: Array as PropType<OptionData[]>
    }
  },
  components: { AFormItem, ASelect },
  setup(props, { slots }) {
    return () => (
      <Field name={props.name} model-value={props.value}>
        {{
          default: (slotProps: FieldContext) => {
            const {
              value,
              errorMessage,
              meta: { valid },
              errors,
              handleBlur,
              handleChange
            } = slotProps;
            console.log(slotProps);
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
                <ASelect
                  value={value as any}
                  onBlur={handleBlur}
                  options={props.options}
                  onChange={handleChange as any}
                />
              </AFormItem>
            );
          }
        }}
      </Field>
    );
  }
});

export default ComponentUtil.withInstall(AWSelect);
