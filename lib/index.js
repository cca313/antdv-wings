import { defineComponent, createVNode, createTextVNode } from 'vue';

const chartProps = {};
const Chart = defineComponent({
  name: "chart",
  props: chartProps,
  methods: {
    chickChart() {
      alert("chickChart");
    }

  },

  render() {
    const {
      chickChart
    } = this;
    return createVNode("div", {
      "onClick": chickChart
    }, [createTextVNode("Chart")]);
  }

});

Chart.install = app => {
  app.component(Chart.name, Chart);
};

/*
 * @Author: Gavin
 * @Date: 2021-10-08 17:59:46
 * @LastEditors: Gavin
 * @LastEditTime: 2021-11-30 16:59:45
 * @FilePath: \wings\packages\index.ts
 * @Descriptions: todo
 */
const version = "1.0.0";
// export * from "./preview-text";

export { version };
