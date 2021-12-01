/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 08:58:14
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 12:49:10
 * @FilePath: \wings\packages\table\index.tsx
 * @Descriptions: todo
 */

import { defineComponent, App } from "vue";
import { Input } from "ant-design-vue";
const AWTable = defineComponent({
  name: "aw-table",
  setup() {
    return <Input>321</Input>;
  },
});
AWTable.install = (app: App) => {
  app.component(AWTable.name, AWTable);
};

export default AWTable;
