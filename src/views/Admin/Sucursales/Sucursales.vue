<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import router from "@/router";
import InfoCard from "@/components/widgets/card.vue";
import Pagerseacchbtn from "@/components/Funtions/Pager-Search-Btn.vue";
import Table from "@/components/Generic/Table";
import axios from "axios";
export default {
  components: {
    Layout,
    PageHeader,
    Table,
    InfoCard,
    Pagerseacchbtn,
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
      console.log("ey", items.idsucursal);
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
    <Pagerseacchbtn :title="title" :link="link" />
    <Table :fields="fields">
      <tr v-for="(data, index) in listItems" :key="index">
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
          {{ data.idsucursal }}
        </td>
        <td class="project_name">
          {{ data.nombre }}
        </td>

        <td class="client_name">{{ data.telefono }}</td>
        <td class="due_date">{{ data.direccion }}</td>
        <td class="due_date">{{ data.correo }}</td>
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