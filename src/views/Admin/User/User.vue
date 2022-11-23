<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Table from "@/components/Generic/tablereport";
import Datatable from "./Curd/Datatable.vue";
import ModalVue from "./Components/Modal.vue";
import axios from "axios";
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    Datatable,
    ModalVue,
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
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "nombre",
          sortable: true,
        },
        {
          key: "Apellido",
          sortable: true,
        },
        {
          key: "Perfil",
          sortable: true,
        },
        {
          key: "correo",

          sortable: true,
        },
        {
          key: "Estado",
          sortable: true,
        },

        {
          key: "Acciones",
          sortable: true,
        },
      ],
      listItems: [],
      adduser: "",
      modalShow: false,
    };
  },
  methods: {
    async getUser() {
      const result = await axios.get("/api/lista-Usuarios");
      const data = result.data.data;
      this.listItems = data;
      console.log(data);
    },
    openModal() {
      const hola = "my-modal";
      this.adduser = hola;
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<template>
  <Layout>

    <PageHeader :title="title" :items="items" />
    <ModalVue :title="title" @getUser="getUser"/>
    <Table :fields="fields">
      <Datatable :items="listItems" @getUser="getUser" :modal="adduserModal" />
    </Table>
  </Layout>
</template>