<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
//import Table from '@/components/Table.vue'
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/GenericTable.vue";
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    InfoCard,
    Pagerseacchbtn,
  },
  data() {
    return {
      title: "Sucursales",
      link:"AgregarSucursales",
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
      item: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: true,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>

    <PageHeader :title="title" :items="items" />

    <InfoCard />

    <Pagerseacchbtn :title="title" :link="link" />

    <Table :items="item" :fields="fields" />

  </Layout>
</template>