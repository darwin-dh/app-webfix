<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import router from "@/router";
import InfoCard from "@/components/widgets/card.vue";
import Pagerbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/tablereport";
import DataTable from "./Crud/DataTable.vue";
import axios from "axios";
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    InfoCard,
    Pagerbtn,
    DataTable,
  },
  data() {
    return {
      title: "Sucursales",
      link: "AgregarSucursales",
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
      listItems: [],
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
          key: "telefono",
          sortable: true,
        },
        {
          key: "direccion",
          sortable: true,
        },
        {
          key: "correo",

          sortable: true,
        },
        {
          key: "ruc",
          sortable: true,
        },

        {
          key: "actions",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    async getSucursal() {
      try {
        const result = await axios.get("/api/lista-sucursal");
        this.listItems = result.data.data;
        console.log("object,this", result.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    see(items) {
      console.log("ey", items.idsucursal);
    },
    edit(items) {
      router.push({
        name: "EditarSucursales",
        params: { id: items.idsucursal },
      });
    },
    async delet(items) {
      console.log(items.idsucursal);
      try {
        const result = await axios.post("api/borrar-sucursal", {
          idsucursal: items.idsucursal,
        });
        const data = result.data.data;
        if (data === "YES")
          Swal.fire({
            icon: "success",
            title: "Se borro con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        this.getSucursal();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
  created() {
    this.getSucursal();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerbtn :title="title" :link="link" />
    <Table :fields="fields" :items="listItems">
      <DataTable :items="listItems" />
    </Table>
  </Layout>
</template>
