// /*
//  * @Author: Gavin Chan
//  * @Date: 2021-12-02 11:22:12
//  * @LastEditors: Gavin
//  * @LastEditTime: 2021-12-21 16:34:53
//  * @FilePath: \wings\packages\components\Table\index.tsx
//  * @Descriptions: todo
//  */
// import { computed, defineComponent, PropType, ref } from 'vue';
// import ComponentUtil from '../../utils/ComponentUtil';
// import Table, { TableProps } from 'ant-design-vue/es/table';
// import APagination from 'ant-design-vue/es/pagination';
// import 'ant-design-vue/es/table/style/index';

// interface IAWTableProps {
//   showSelect?: boolean;
//   pagination?: {
//     pageIndex: number;
//     pageSize: number;
//     total: number;
//   };
//   showPagination?: boolean;
//   selectedType?: string;
//   buttons?: {
//     edit?: boolean;
//     add?: boolean;
//     del?: boolean;
//   };
// }
// interface ITableButtons {
//   edit?: boolean;
//   add?: boolean;
//   del?: boolean;
// }
// interface IPagination {
//   pageIndex: number;
//   pageSize: number;
//   total: number;
// }

// const AWTable = ComponentUtil.withInstall(
//   defineComponent({
//     name: 'aw-table',
//     props: {
//       columns: { type: Array, default: () => [] },
//       data: Array,
//       buttons: Object as PropType<ITableButtons>,
//       rowKey: String,
//       size: String,
//       scroll: { type: Object, default: null },
//       loading: { type: Boolean, default: false },
//       pagination: Object as PropType<IPagination>,
//       showPagination: { type: Boolean, default: true },
//       selectedRowKeys: Array,
//       selectedType: { type: String, default: 'checkbox' }, //选择框样式为 "checkbox复选框"或 "radio单选框"
//       showSelect: { type: Boolean, default: true } //是否显示复选框
//     },
//     inheritAttrs: false,
//     setup(props, { slots, emit }) {
//       const _props = Object.assign({}, props);
//       console.log(_props, slots);
//       const pageSizeOptions = ['10', '20', '50', '100'];
//       // const paginationConf = computed(() => {
//       //   return Object.assign({}, props.pagination);
//       // });
//       const rowSelection = {
//         onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
//           // console.log(selectedRowKeys, selectedRows);
//           emit('rowSelectChange', selectedRowKeys, selectedRows);
//         },
//         getCheckboxProps: (record: any) => ({
//           disabled: record.userAccount === 'admin' || record.isShare == 'true', // Column configuration not to be checked
//           name: record.userAccount
//         })
//       };

//       const rowSelectionCFG = computed(() => {
//         return props.showSelect
//           ? {
//               ...rowSelection,
//               selectedRowKeys: props.selectedRowKeys,
//               type: props.selectedType
//             }
//           : null;
//       });
//       return () => (
//         <div>
//           <Table class="aw-table" pagination={false} rowSelection={rowSelectionCFG as any}>
//             {slots.cellbody && slots?.cellbody()}
//           </Table>
//           <APagination
//             show-size-changer
//             current={props.pagination?.pageIndex}
//             pageSize={props.pagination?.pageSize}
//             total={props.pagination?.total}
//             show-total={(total: number) => `总共 ${total} 条`}
//             pageSizeOptions={pageSizeOptions}
//           />
//         </div>
//       );
//     }
//   })
// );

// export default AWTable;
