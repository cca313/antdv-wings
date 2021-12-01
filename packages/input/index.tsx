/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 16:28:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 16:30:09
 * @FilePath: \wings\packages\input\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, App } from "vue";
import Input from "ant-design-vue/es/input";
const chartProps = {};

const AWInput = defineComponent({
  name: "aw-input",
  props: chartProps,
  setup() {
    return <Input>Chart</Input>;
  },
});

AWInput.install = (app: App) => {
  app.component(AWInput.name, AWInput);
};

export default AWInput;
