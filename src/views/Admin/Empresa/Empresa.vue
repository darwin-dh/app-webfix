<script >
import axios from "axios";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import PagersSearch from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/tablereport";
import DataTable from "./Crud/DataTable.vue";

export default {
  components: {
    Layout,
    PageHeader,
    PagersSearch,
    Table,
    DataTable,
  },
  data() {
    return {
      title: "Empresa",
      items: [
        {
          text: "Empresa",
          href: "/",
        },
        {
          text: "Empresa",
          active: true,
        },
      ],
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "nombre",
          sortable: true,
        },
        {
          key: "telefono",
          sortable: true,
        },
        {
          key: "direccion",
          sortable: true,
        },
        {
          key: "correo",

          sortable: true,
        },
        {
          key: "ruc",
          sortable: true,
        },

        {
          key: "Acciones",
          sortable: true,
        },
      ],
      listItems: [],
    };
  },
  methods: {
    async getCompany() {
      try {
        const result = await axios.get("/api/lista-empresa");
        this.listItems = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getCompany();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <PagersSearch />
    <Table :fields="fields">
      <DataTable :items="listItems" @getSucursal="getSucursal" />
    </Table>
  </Layout>
</template>