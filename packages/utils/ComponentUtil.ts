/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 09:03:17
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-16 09:55:05
 * @FilePath: \wings\packages\utils\ComponentUtil.ts
 * @Descriptions: todo
 */
import { App, Plugin } from 'vue';

const withInstall = <T>(comp: T): T & Plugin => {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.name, comp);
  };

  return comp as T & Plugin;
};
const componentCommonProps = {
  name: {
    type: String,
    default: null,
    required: true
  },
  label: [String, Number],
  value: [String, Number, Array, Object]
};

export default {
  withInstall,
  componentCommonProps
};
