<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import GenericTable from "@/components/GenericTable.vue";
import axios from "axios";
export default {
  components: {
    Layout,
    PageHeader,
    GenericTable,
  },
  data() {
    return {
      listItems: [],
      title: "Plan de Cuentas",
      link: "PlandeCuentas",
      items: [
        {
          text: "Plan de Cuentas",
          href: "/PlandeCuentas",
        },
        {
          text: "PlandeCuentas",
          active: true,
        },
      ],

      fields: [
        {
          key: "id_ctas",
          sorGenericTable: true,
          label: "N. Cuenta",
        },
        {
          key: "codcta",
          sorGenericTable: true,
          label: "Cuenta",
        },
        {
          key: "nomcta",
          sorGenericTable: true,
          label: "Cuenta",
        },
        {
          key: "Acciones",
          label: "Acciones",
          sorGenericTable: true,
        },
      ],
    };
  },
  methods: {
    async getCts() {
      const results = await axios.get("/api/lista-PlanCuentas");
      this.listItems = results.data.data.data;
    },
  },
  created() {
    this.getCts();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <GenericTable :fields="fields" :items="listItems"/>
  </Layout>
</template>