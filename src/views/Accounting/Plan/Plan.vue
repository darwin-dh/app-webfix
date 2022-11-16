<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
//import Table from '@/components/Table.vue'

import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/GenericTable.vue";
import axios from 'axios';
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    Pagerseacchbtn,
  },
  data() {
    return {
      ListItems:[],
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
          sortable: true,
          label: "N. Cuenta",
        },
        {
          key: "nomcta",
          sortable: true,
          label: "Cuenta",
        },
        {
          key: "Acciones",
          label: "Acciones",
          sortable: true,
        },
      ],
    };
  },
  methods:{
   async getCts(){
      const results = await axios.get("/api/lista-PlanCuentas")
      this.ListItems = results.data.data.data
      console.log(this.ListItems);
    }
  },
  created() {
    this.getCts()
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <Pagerseacchbtn :title="title" :link="link" />

    <Table :items="ListItems" :fields="fields" />
  </Layout>
</template>