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
      title: "Forma Pagos",
      link: "AgregarFormaPagos",
      items: [
        {
          text: "Forma Pagos",
          href: "/",
        },
        {
          text: "Forma Pagos",
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
          key: "Nombre",
          sortable: true,
        },
        {
          key: "Codigo Sri",
          sortable: true,
        },
        {
          key: "Estado",
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
    async getPays() {
      try {
        const result = await axios.get("/api/lista-formapago");
        this.listItems = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getPays();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerbtn :title="title" :link="link" />
    <Table :fields="fields" :items="listItems">
      <DataTable :items="listItems" @getPays="getPays" />
    </Table>
  </Layout>
</template>
