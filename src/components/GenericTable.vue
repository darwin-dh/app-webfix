<script>
import { BTable } from "bootstrap-vue-3";
export default {
  components: {
    BTable,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>
<template>
  <b-card class="py-4 px-2 shadow-lg bg-body rounded">
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    >
      <slot v-for="(_, name) in $slots" :name="name" />

      <slot :name="name" v-bind="slotData" />
    </b-table>
    <b-col sm="7" md="6" class="my-1">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0"
      ></b-pagination>
    </b-col>
  </b-card>
</template>