/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 23:19:46
 * @FilePath: \vue-component-template\packages\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, DefineComponent, Plugin } from 'vue';
import ComponentUtil from './utils/ComponentUtil';
import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/index';

export default ComponentUtil.withInstall(
  defineComponent({
    name: 'custom',
    setup() {
      return () => (
        <div>
          Vue 3 Custom Component Template
          <div>
            <Button class="333" type="primary">
              button
            </Button>
          </div>
        </div>
      );
    }
  })
);
