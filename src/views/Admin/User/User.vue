<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Table from "./Components/table.vue";
//import Card from "@/components/widgets/card.vue";
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    //Card,
  },
  data() {
    return {
      title: "Usuarios",
      items: [
        {
          text: "Usuarios",
          href: "/",
        },
        {
          text: "Usuarios",
          active: true,
        },
      ],
    };
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-card class="bg-white rounded-3">
      <b-row class="d-flex align-items-center justify-content-between ">
        <b-col sm="4" md="6">
          <input
            type="password"
            class="form-control"
            id="basiInput"
            placeholder="Buscar"
          />
        </b-col>
        <b-col class="">
          <b-button variant="primary" class="float-end rounded-pill">
            <i class="las la-plus-square"></i> Nuevo Usuario
          </b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="py-4 px-2">
      <Table />
    </b-card>
  </Layout>
</template>