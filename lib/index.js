(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('ant-design-vue/es/input')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'ant-design-vue/es/input'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.index = global.index || {}, global.index.js = {}), global.Vue, global.Input));
})(this, (function (exports, vue, Input) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);

  const chartProps$1 = {};
  const Chart = vue.defineComponent({
    name: "chart",
    props: chartProps$1,

    setup() {
      const chickChart = () => {
        alert("chickChart");
      };

      return vue.createVNode("div", {
        "onClick": chickChart
      }, [vue.createTextVNode("Chart")]);
    }

  });

  Chart.install = app => {
    app.component(Chart.name, Chart);
  };

  const chartProps = {};
  const AWInput = vue.defineComponent({
    name: "aw-input",
    props: chartProps,

    setup() {
      return vue.createVNode(Input__default["default"], null, {
        default: () => [vue.createTextVNode("Chart")]
      });
    }

  });

  AWInput.install = app => {
    app.component(AWInput.name, AWInput);
  };

  /*
   * @Author: Gavin
   * @Date: 2021-10-08 17:59:46
   * @LastEditors: Gavin
   * @LastEditTime: 2021-12-01 16:30:21
   * @FilePath: \wings\packages\index.ts
   * @Descriptions: todo
   */
  const version = "1.0.0";
   // export * from "./preview-text";

  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
