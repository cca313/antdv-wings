/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 10:58:59
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-02 11:17:34
 * @FilePath: \wings\packages\components\Button\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, DefineComponent, Plugin } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/index';

const AWButton = ComponentUtil.withInstall(
  defineComponent({
    name: 'aw-button',
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

export default AWButton;
