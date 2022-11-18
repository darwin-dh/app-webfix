<script >
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/Table";
import axios from "axios";
import router from "@/router";
import Swal from "sweetalert2";

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
      title: "Productos",
      link: "/AgregarProducto",
      ListItems: [],
      fields: [
        {
          key: "codigo",
          sortable: true,
        },
        {
          key: "nombre",
          sortable: true,
        },
        {
          key: "caracteristicas",
          sortable: true,
        },
        {
          key: "unidad_entrada",
          sortable: true,
        },
        {
          key: "existencia_maxima",

          sortable: true,
        },
        {
          key: "existencia_minima",
          sortable: true,
        },
        {
          key: "estado",
          sortable: true,
        },
        {
          key: "numero_unidad	",
          sortable: true,
        },

        {
          key: "actiones",
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
  },
  created() {
    this.getProductos();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerseacchbtn :title="title" :link="link" />
    <Table :fields="fields">
      <tr v-for="(data, index) in ListItems" :key="index">
        <th scope="row">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="chk_child"
              value="option1"
            />
          </div>
        </th>

        <td class="id">
          {{ data.codigo }}
        </td>
        <td class="project_name">
          {{ data.nombre }}
        </td>

        <td class="client_name">{{ data.caracteristicas }}</td>
        <td class="due_date">{{ data.unidad_entrada }}</td>
        <td class="due_date">{{ data.existencia_maxima }}</td>
        <td class="due_date">{{ data.existencia_minima }}</td>

        <td class="priority">
          <span
            class="badge text-uppercase"
            :class="{
              'bg-danger': data.estado == 'inactivo',
              'bg-success': data.estado == 'activo',
            }"
            >{{ data.estado }}</span
          >
        </td>
        <td class="due_date">{{ data.numero_unidad }}</td>

        <td>
          <li class="align-bottom me-2 list-inline-item">
            <b-button
              variant="outline-primary "
              class="btn-icon waves-effect waves-light"
              @click="see(data)"
              ><i class="ri-eye-line"></i
            ></b-button>
          </li>
          <li class="list-inline-item">
            <b-button
              variant="outline-warning"
              class="btn-icon waves-effect waves-light"
              @click="edit(data)"
              ><i class="ri-pencil-fill"></i
            ></b-button>
          </li>
          <li class="list-inline-item">
            <b-button
              variant="outline-danger"
              class="btn-icon waves-effect waves-light"
              @click="delet(data)"
              ><i class="ri-delete-bin-line"></i
            ></b-button>
          </li>
        </td>
      </tr>
    </Table>
  </Layout>
</template>