<script >
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/tablereport";
import DataTable from "./Crud/DataTable.vue";
import axios from "axios";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  components: {
    Layout,
    PageHeader,
    Pagerseacchbtn,
    Table,
    DataTable,
  },
  data() {
    return {
      title: "Productos",
      link: "/AgregarProducto",
      ListItems: [],
      fields: [
        {
          key: "Id",
          sortable: true,
        },
        {
          key: "codigo",
          sortable: true,
        },
        {
          key: "nombre",
          sortable: true,
        },
        {
          key: "codigoAlterno",
          sortable: true,
        },
        {
          key: "codigo_barras",
          sortable: true,
        },
        {
          key: "caracteristicas",

          sortable: true,
        },
        {
          key: "ubicacion_fisica",

          sortable: true,
        },
        {
          key: "Estado",
          sortable: true,
        },
        {
          key: "unidad_entrada",
          sortable: true,
        },
        {
          key: "existencia_maxima	",
          sortable: true,
        },
        {
          key: "existencia_minima	",
          sortable: true,
        },
        {
          key: "numero_unidad	",
          sortable: true,
        },

        {
          key: "Acciones",
          sortable: true,
        },
      ],
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
  methods: {
    async getProductos() {
      try {
        const results = await axios.get("/api/lista-productos");
        this.ListItems = results.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async edit(items) {
      router.push({
        name: "Editar Producto",
        params: { id: items.idproductos },
      });
    },
    async delet(items) {
      console.log(items.idproductos);
      try {
        const result = await axios.post("api/borrar-productos", {
          idproducto: items.idproductos,
        });
        const data = result.data.data;
        if (data === "YES")
          Swal.fire({
            icon: "success",
            title: "Se borro con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        this.getProductos();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    async exportar() {
      const result = await axios.get("api/exportar-productos");
      console.log(result);
    },
  },
  created() {
    this.getProductos();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <Pagerseacchbtn :title="title" :link="link" />
    >
    <Table :fields="fields">
      <DataTable :items="ListItems" @getProductos="getProductos"/>
    </Table>
  </Layout>
</template>