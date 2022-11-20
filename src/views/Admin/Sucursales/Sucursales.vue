<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import InfoCard from "@/components/widgets/card.vue";
import Pagerbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/tablereport";
import DataTable from "./Crud/DataTable.vue";

export default {
  components: {
    Layout,
    PageHeader,
    Table,
    InfoCard,
    Pagerbtn,
    DataTable,
  },
  data() {
    return {
      title: "Sucursales",
      link: "AgregarSucursales",
      items: [
        {
          text: "Sucursales",
          href: "/",
        },
        {
          text: "Sucursales",
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
          key: "actions",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    async getSucursal() {
      try {
        const result = await axios.get("/api/lista-sucursal");
        this.listItems = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getSucursal();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerbtn :title="title" :link="link" />
    <Table :fields="fields" :items="listItems">
      <DataTable :items="listItems" @getSucursal="getSucursal" />
    </Table>
  </Layout>
</template>
