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
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <h1>Empresa</h1>
  </Layout>
</template>