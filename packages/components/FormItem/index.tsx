/*
 * @Author: Gavin Chan
 * @Date: 2021-12-05 22:05:59
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-07 14:27:59
 * @FilePath: \wings\packages\components\FormItem\index.tsx
 * @Descriptions: todo
 */
import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';

import Form from 'ant-design-vue/es/form';

const FormItem = connect(
  Form.Item,
  mapProps({ validateStatus: true, title: 'label' }, (props, field) => {
    // console.log(props, field);
    return {
      help: !isVoidField(field)
        ? field.selfErrors.length
          ? field.selfErrors
          : undefined
        : undefined,
      extra: field.description
    };
  })
);

export default FormItem;
