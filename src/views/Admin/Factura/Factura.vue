<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Factura",
      items: [
        {
          text: "Factura",
          href: "/",
        },
        {
          text: "Factura",
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
    <h1>Factura</h1>
  </Layout>
</template>