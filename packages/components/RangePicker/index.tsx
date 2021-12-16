/*
 * @Author: Gavin Chan
 * @Date: 2021-12-16 16:36:31
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-16 16:45:28
 * @FilePath: \wings\packages\components\RangePicker\index.tsx
 * @Descriptions: todo
 */
import { defineComponent } from 'vue';
import ADatePicker from 'ant-design-vue/es/date-picker';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import AFormItem from 'ant-design-vue/es/form/FormItem';
import ComponentUtil from '../../utils/ComponentUtil';
import { Field, FieldContext } from 'vee-validate';
const ARangePicker = ADatePicker.RangePicker;
const RangePickerProps = {
  showTime: Boolean
};

const AWRagePicker = defineComponent({
  name: 'aw-rangepicker',
  props: { ...ComponentUtil.componentCommonProps, ...RangePickerProps },

  setup({ name, label, showTime, value }) {
    return () => {
      return (
        <Field name={name} modelValue={value}>
          {{
            default: (slotProps: FieldContext) => {
              const {
                value,
                handleChange,
                errorMessage,
                errors,
                meta: { valid }
              } = slotProps;
              const helpMessage: any =
                typeof errorMessage !== undefined || valid === true ? errorMessage : null;
              const validateStatus = Array.isArray(errors) && errors.length > 0 ? 'error' : '';
              console.log(value);
              return (
                <AFormItem
                  label={label}
                  validateStatus={validateStatus}
                  help={helpMessage}
                  extra="extra"
                >
                  <ARangePicker
                    valueFormat="YYYY-MM-DD HH:mm:ss"
                    showToday
                    allowClear
                    format="YYYY-MM-DD HH:mm:ss"
                    locale={locale}
                    showTime={showTime}
                    value={value as any}
                    onChange={handleChange}
                  />
                </AFormItem>
              );
            }
          }}
        </Field>
      );
    };
  }
});

export default ComponentUtil.withInstall(AWRagePicker);
