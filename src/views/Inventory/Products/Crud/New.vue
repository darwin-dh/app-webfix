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
      prueba: "",
      title: "Productos/nuevo",
      modalShow: false,
      modalShow1: false,
      showmodal: "showmodal",
      items: [
        {
          text: "Nuevos",
          href: "/",
        },
        {
          text: "Nuevo",
          active: true,
        },
      ],
    };
  },
  computed: {
    perfiles: {
      get() {
        return this.$store ? this.$store.state.perfiles.perfiles : {} || {};
      },
    },
  },
  methods: {},
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

  </Layout>
</template>