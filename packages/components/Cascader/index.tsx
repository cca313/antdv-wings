/*
 * @Author: Gavin Chan
 * @Date: 2021-12-07 18:27:16
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-09 15:53:37
 * @FilePath: \wings\packages\components\Cascader\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';

import ACascader, { CascaderOptionType, CascaderProps } from 'ant-design-vue/es/cascader';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { Field, FieldContext } from 'vee-validate';
import { OptionData } from 'ant-design-vue/es/vc-select/interface';

const AWCascader = defineComponent({
  name: 'aw-cascader',
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
    description: String,
    value: {
      type: Object
    },
    options: {
      type: Array as PropType<CascaderOptionType[]>,
      required: true
    }
  },
  components: { AFormItem, ACascader },
  setup(props) {
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
                <ACascader
                  value={value as any}
                  options={props.options}
                  onBlur={handleBlur}
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

export default ComponentUtil.withInstall(AWCascader);
