<script >
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/GenericTable.vue";
import axios from 'axios';
export default {
  components: {
    Layout,
    PageHeader,
    InfoCard,
    Pagerseacchbtn,
    Table,
  },
  data() {
    return {
      ListItems: [],
      title: "Bodegas",
      link:"/AgregarBodega",
      items: [
        {
          text: "Bodegas",
          href: "/",
        },
        {
          text: "Bodega",
          active: true,
        },
      ],
    };
  },
  methods:{
    async getBodega(){
      const results =  await axios.get("/api/lista-bodega")
      this.ListItems = results.data.data

    }
  },
  created() {
    this.getBodega()
  },


};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerseacchbtn :title="title" :link="link"/>
    <Table :items="ListItems" :fields="fields" />
  </Layout>
</template>