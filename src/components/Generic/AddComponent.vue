<script >
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
export default {
  components: {
    Layout,
    PageHeader,

  },
  data() {
    return {
      title: "Agregar Bogeda",
      items: [
        {
          text: "Agregar Bogeda",
          href: "/Agregar Bogeda",
        },
        {
          text: "Agregar Bogeda",
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

  </Layout>
</template>