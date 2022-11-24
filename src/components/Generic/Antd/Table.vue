<script>
export default {
  props: {
    columns: {
      type: Object,
    },
    items: {
      type: Object,
    },
  },
  data() {
    return {
      pagination: {},
      loading: false,
      editableData: {},
    };
  },
  methods: {
    edit(item) {
      console.log("S", item);
    },
    /*     handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      queryData({
        results: 10,
        ...params,
      }).then(({ data }) => {
        const pagination = { ...this.pagination };
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    }, */
  },
};
</script>
<template>
  <a-table
    :columns="columns"
    :data-source="items"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <!--  <template slot="name" slot-scope="name">
      {{ name.first }} {{ name.last }}
    </template> -->
    <!--     <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'"
        >{{ text.first }} {{ text.last }}</template
      >
    </template> -->
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)"
              >Save</a-typography-link
            >
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>

