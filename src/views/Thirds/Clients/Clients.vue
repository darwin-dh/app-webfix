<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import Pagerbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/tablereport";
import DataTable from "./Crud/DataTable.vue";
export default {
  components: {
    Layout,
    PageHeader,
    Pagerbtn,
    Table,
    DataTable,
  },
  data() {
    return {
      title: "Clientes",
      link: "AgregarClientes",
      items: [
        {
          text: "Clientes",
          href: "/",
        },
        {
          text: "Clientes",
          active: true,
        },
      ],
      listItems: [],
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
          key: "cedula",
          sortable: true,
        },
        {
          key: "ruc",
          sortable: true,
        },
        {
          key: "direccion",

          sortable: true,
        },
        {
          key: "telefono",
          sortable: true,
        },
        {
          key: "correo",
          sortable: true,
        },
        {
          key: "estado",
          sortable: true,
        },
        {
          key: "canton",
          sortable: true,
        },
        {
          key: "parroquia",
          sortable: true,
        },
        {
          key: "provincia",
          sortable: true,
        },

        {
          key: "Acciones",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    async getClients() {
      try {
        const result = await axios.get("/api/lista-cliente");
        this.listItems = result.data.data;
        console.log(this.listItems);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getClients();
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerbtn :title="title" :link="link" />
    <Table :fields="fields" :items="listItems">
      <DataTable :items="listItems" @getClients="getClients" />
    </Table>
  </Layout>
</template>