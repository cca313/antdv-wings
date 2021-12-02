/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 11:22:12
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-02 16:31:30
 * @FilePath: \wings\packages\components\table\index.tsx
 * @Descriptions: todo
 */
import { defineComponent, Plugin } from 'vue';
import ComponentUtil from '../../utils/ComponentUtil';
import Table, { TableProps } from 'ant-design-vue/es/table';
import 'ant-design-vue/es/table/style/index';

interface IAWTableProps extends TableProps {}

const AWTable = ComponentUtil.withInstall(
  defineComponent<IAWTableProps>({
    name: 'aw-table',
    setup(props, ctx) {
      const _props = Object.assign({}, props);
      console.log(_props);
      return () => (
        <div>
          <Table class="aw-table" {..._props}></Table>
        </div>
      );
    }
  })
);

export default AWTable;
