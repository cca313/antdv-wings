/*
 * @Author: Gavin Chan
 * @Date: 2021-12-07 15:07:49
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-09 14:16:13
 * @FilePath: \wings\packages\components\SelectTree\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, PropType } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import ATreeSelect from 'ant-design-vue/es/tree-select';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import { Field, FieldContext } from 'vee-validate';
import { OptionData } from 'ant-design-vue/es/vc-select/interface';
import { DataNode, TreeDataNode } from 'ant-design-vue/es/vc-tree-select/interface';

const AWSelectTree = defineComponent({
  name: 'aw-select-tree',
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
      type: String,
      default: ''
    },
    treeData: {
      type: Array as PropType<DataNode[]>,
      required: true
    }
  },
  components: { AFormItem, ATreeSelect },
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
                <ATreeSelect
                  value={value}
                  treeData={props.treeData}
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

export default ComponentUtil.withInstall(AWSelectTree);
