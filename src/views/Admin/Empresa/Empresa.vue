<script >
import axios from "axios";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import InfoCard from "@/components/widgets/card.vue";
import PagersSearch from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/GenericTable.vue";
export default {
  components: {
    Layout,
    PageHeader,
    InfoCard,
    PagersSearch,
    Table,
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
    <InfoCard />
    <PagersSearch />
    <Table :items="listItems" />
  </Layout>
</template>