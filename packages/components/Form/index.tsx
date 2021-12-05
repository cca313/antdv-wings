/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 14:00:11
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-03 09:01:55
 * @FilePath: \wings\packages\components\Form\index.tsx
 * @Descriptions:
 */
import { defineComponent, Plugin } from 'vue';
import Form, { FormProps } from 'ant-design-vue/es/form';
import ComponentUtil from '../../utils/ComponentUtil';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import Input from 'ant-design-vue/es/input';
import 'ant-design-vue/es/input/style/index';
import 'ant-design-vue/es/form/style/index';

interface IAWFormProps extends FormProps {}
const SchemaComponents = createSchemaField({
  components: {
    Input
  }
});
const AWForm = ComponentUtil.withInstall(
  defineComponent<IAWFormProps>({
    name: 'aw-form',
    setup(props, ctx) {
      const _props = Object.assign({}, props);
      console.log(_props);
      return () => (
        <div>
          <Form class="aw-table" {..._props}></Form>
        </div>
      );
    }
  })
);

export default AWForm;
