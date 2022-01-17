<!--
 * @Author: Gavin Chan
 * @Date: 2021-12-21 14:36:57
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-22 14:02:24
 * @FilePath: \wings\packages\components\Table\index.vue
 * @Descriptions: todo
-->
<template>
  <div class="zf-table-container">
    <div class="mb-15 mx-2 flex justify-between items-center">
      <div class="flex space-x-20">
        <!-- 按钮权限 v-permission="'Post'"  Edit  Delete-->
        <a-button v-permission="'Post'" v-if="showAdd" type="primary" @click="onBtnAddClick">
          <template #icon>
            <PlusOutlined />
          </template>
          新增
        </a-button>
        <a-button v-permission="'Edit'" v-if="showEdit" @click="onBtnEditClick">
          <template #icon>
            <EditOutlined />
          </template>
          修改
        </a-button>
        <a-popconfirm v-if="showDel" title="您确认要删除吗？" @confirm="onBtnDelClick">
          <a-button danger v-permission="'Delete'">
            <template #icon>
              <DeleteOutlined />
            </template>
            删除
          </a-button>
        </a-popconfirm>
        <slot name="button-group"></slot>
      </div>
      <slot name="title-info"></slot>
      <div v-if="title" class="title font-sans text-lg">{{ title }}</div>
    </div>
    <slot name="table">
      <a-table
        class="unitTable"
        :scroll="scroll != null ? scroll : { x: 'max-content' }"
        :rowKey="rowKey"
        :loading="loading"
        :row-selection="rowSelectionCFG"
        :columns="newColumns"
        :data-source="dataSource"
        :pagination="false"
        :size="size"
      >
        <template #index="{ index }">
          <div>{{ index }}</div>
        </template>
        <template #state="{ record }">
          <a-badge :status="record.state == true ? 'processing' : 'error'" />
          {{ record.state == true ? "启用" : "禁用" }}
        </template>
        <template #bodyCell="{ column, text, record }">
          <slot name="bodycell" :record="record" :column="column" :text="text"></slot>
          <div
            v-if="text === '' || text === null || typeof text === 'undefined' || JSON.stringify(text) === '{}'"
          >--</div>
        </template>
      </a-table>
      <a-pagination
        class="mt-30 text-center"
        show-size-changer
        v-if="showPagination"
        v-model:current="paginationConfig.pageIndex"
        v-model:pageSize="paginationConfig.pageSize"
        :total="paginationConfig.total"
        :show-total="(total: any) => `总共 ${total} 条`"
        :page-size-options="pageSizeOptions"
        @change="handlePageChange"
        @showSizeChange="handlePageSizeChange"
      ></a-pagination>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'

interface DataType {
  [key: string]: string | any[]
}
interface IPagination {
  pageIndex: number,
  pageSize: number,
  total: number
}
export default defineComponent({
  name: 'aw-table',
  props: {
    columns: { type: Array as any, default: () => [] },
    data: Array,
    showAdd: { type: Boolean, default: true },
    showDel: { type: Boolean, default: true },
    showEdit: { type: Boolean, default: true },
    title: String,
    rowKey: String,
    size: String,
    scroll: { type: Object as any, default: null },
    loading: { type: Boolean, default: false },
    pagination: Object as PropType<IPagination>,
    showPagination: { type: Boolean, default: true },
    selectedRowKeys: Array,
    selectedType: { type: String, default: 'checkbox' },//选择框样式为 "checkbox复选框"或 "radio单选框"
    showSelect: { type: Boolean, default: true },//是否显示复选框
  },
  emits: ['rowSelectChange', 'checkboxProps', 'addClick', 'delClick', 'editClick', 'rowEditClick', 'pageChange', 'pageSizeChange'],
  setup(props, ctx) {

    // 格式化表格表头显示策略: 1.表格内容自适应 2.最小宽度为100px 3.表格内容统一左对齐
    const newColumns = computed(() => {
      return props.columns?.length > 0 ? props.columns.map((val: any) => {
        !val.width && (val.width = 'auto')
        !val.ellipsis && (val.ellipsis = false);
        !val.customCell && (val.customCell = () => ({ style: { 'min-width': '100px', 'max-width': '250px' } }))
        val.align = 'left'
        return val
      }) : []
    })

    const dataSource = computed(() => {
      if (props.data?.length == 0) { return [] }
      return props.data?.map((record: any, index) => {
        return { ...record, index: index, sort: index + 1 }
      })
    })
    const paginationConfig = computed(() => {
      return Object.assign({}, props.pagination)
    })
    const rowSelectionCFG = computed(() => {
      return props.showSelect ? { ...event.rowSelection, selectedRowKeys: props.selectedRowKeys, type: props.selectedType } : null
    })

    const pageSizeOptions = ref<string[]>(['10', '20', '50', '100']);
    const event = {
      onBtnAddClick: () => {
        ctx.emit('addClick')
      },
      onBtnEditClick: () => {
        ctx.emit('editClick')
      },
      onBtnDelClick: () => {
        ctx.emit('delClick')
      },
      handleRowEditClick: (text: string, record: any, index: number) => {
        ctx.emit('rowEditClick', text, record, index)
      },
      handlePageChange: (page: number, pageSize: number) => {
        // console.log(page, pageSize);
        ctx.emit('pageChange', page, pageSize)
      },
      handlePageSizeChange: (pageIndex: number, pageSize: number) => {
        ctx.emit('pageSizeChange', pageIndex, pageSize)
      },
      rowSelection: {
        onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
          console.log(selectedRowKeys, selectedRows);
          ctx.emit('rowSelectChange', selectedRowKeys, selectedRows)
        },
        // onSelect: (record: any, selected: boolean, selectedRows: any[]) => {
        // 	console.log(record, selected, selectedRows);
        // },
        // onSelectAll: (selected: boolean, selectedRows: any[], changeRows: any[]) => {
        // 	console.log(selected, selectedRows, changeRows);
        // },
        getCheckboxProps: (record: DataType) => ({
          disabled: record.userAccount === 'admin' || record.isShare == 'true', // Column configuration not to be checked
          name: record.userAccount,
        }),
      },
    }

    return { ...event, dataSource, paginationConfig, pageSizeOptions, rowSelectionCFG, newColumns }
  }
})
</script>

<style lang='less' scoped>
.unitTable {
  // max-height: 610px;
  overflow-x: auto;
}
// 表格checkbox宽高
:deep(.ant-checkbox-inner) {
  width: 20px;
  height: 20px;
}
</style>
