<script >
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/GenericTable.vue";
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
      prueba: "",
      title: "Productos",
      addLink:"/NuevoProducto",
      modalShow: false,
      modalShow1: false,
      showmodal: "showmodal",
      items: [
        {
          text: "Productoss",
          href: "/",
        },
        {
          text: "Productos",
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
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerseacchbtn :title="title" :link="addLink" />
    <Table :items="item" :fields="fields" />
  </Layout>
</template>