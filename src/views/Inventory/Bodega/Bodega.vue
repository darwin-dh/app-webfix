<script >
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import DataTable from "./Components/DataTable";
import axios from "axios";
import router from "@/router";
import Table from "@/components/Generic/tablereport";
export default {
  components: {
    Layout,
    PageHeader,
    InfoCard,
    Pagerseacchbtn,
    Table,
    DataTable,
  },
  data() {
    return {
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
          key: "ubicacion",
          sortable: true,
        },
        {
          key: "direccion",
          sortable: true,
        },
        {
          key: "telefono",

          sortable: true,
        },
        {
          key: "estado",
          sortable: true,
        },
        {
          key: "ruc	",
          sortable: true,
        },

        {
          key: "Acciones",
          sortable: true,
        },
      ],
      title: "Bodegas",
      link: "/AgregarBodega",
      items: [
        {
          text: "Bodegas",
          href: "/",
        },
        {
          text: "Bodega",
          active: true,
        },
      ],
    };
  },
  methods: {
    async getBodega() {
      const results = await axios.get("/api/lista-bodega");
      this.ListItems = results.data.data;
    },
    async edit(items) {
      console.log(items);
      router.push({
        name: "EditarBodega",
        params: { id: items.idbodega },
      });
    },
  },
  created() {
    this.getBodega();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <InfoCard />
    <Pagerseacchbtn :title="title" :link="link" />
    <Table :fields="fields">
      <DataTable :items="ListItems" @getBodega="getBodega" />
      <!--       <tr v-for="(data, index) in ListItems" :key="index">
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

        <td class="client_name">{{ data.ubicacion }}</td>
        <td class="due_date">{{ data.direccion }}</td>
        <td class="due_date">{{ data.telefono }}</td>

        <td class="priority">
          <span
            class="badge text-uppercase"
            :class="{
              'bg-danger': data.estado == 'inactivo',
              'bg-success': data.estado == 'activo',
            }"
            >{{data.estado}}</span
          >
        </td>
        <td class="due_date">{{ data.ruc }}</td>

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
        </td>
      </tr> -->
    </Table>
  </Layout>
</template>