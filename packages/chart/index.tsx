/*
 * @Author: Gavin Chan
 * @Date: 2021-11-30 16:57:23
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 11:44:33
 * @FilePath: \wings\packages\chart\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, App } from "vue";

const chartProps = {};

const Chart = defineComponent({
  name: "chart",
  props: chartProps,
  setup() {
    const chickChart = () => {
      alert("chickChart");
    };
    return <div onClick={chickChart}>Chart</div>;
  },
});

Chart.install = (app: App) => {
  app.component(Chart.name, Chart);
};

export default Chart;
