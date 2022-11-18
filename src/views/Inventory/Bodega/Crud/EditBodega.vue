<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import routes from "@/router";
import Swal from "sweetalert2";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
export default {
  components: {
    Layout,
    PageHeader,
    Multiselect,
  },
  data() {
    return {
      bodega: "",
      codigo: "",
      nombre: "",
      ubicacion: "",
      direccion: "",
      telefono: "",
      estado: "",
      ruc: "",
      title: this.$route.name,
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
      item: [],
      options: [
        { value: "inactivo", label: "Inactivo" },
        { value: "activo", label: "Activo" },
      ],
    };
  },
  methods: {
    async save(item) {
      try {
        const result = await axios.post("api/editar-bodega", {
          idbodega: item.idbodega,
          codigo: item.codigo,
          nombre: item.nombre,
          ubicacion: item.ubicacion,
          direccion: item.direccion,
          telefono: item.telefono,
          estado: item.estado,
          ruc: item.ruc,
          idempresa: 1,
        });
        const data = result.data.mesage;
        if (data === "YES")
          Swal.fire({
            icon: "success",
            title: "Se guardo con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        setTimeout(() => {
          routes.push({ name: "Bodega" });
        }, "1600");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    async get() {
      const id = this.$route.params.id;
      const result = await axios.post("api/buscar-bodega", {
        idbodega: id,
      });
      this.item = result.data.data;
    },
  },
  created() {
    this.get();
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :link="link" :items="items"/>
    <b-row class="d-flex flex-column text-center align-items-center">
      <b-col cols="12" sm="6">
        <b-card class="col-md-12 col-sm-6">
          <div class="">
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.codigo"
              placeholder="codigo"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.nombre"
              placeholder="nombre"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.ubicacion"
              placeholder="ubicacion"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.direccion"
              placeholder="direccion"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.telefono"
              placeholder="telefono"
            />
          </div>

          <Multiselect
            class="borde mb-2 px-1"
            v-model="item.estado"
            :close-on-select="true"
            :searchable="true"
            :create-option="true"
            :options="options"
          />

          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.ruc"
              placeholder="Ruc"
            />
          </div>
        </b-card>

        <!-- Buttons Grid -->
        <div class="d-grid" >
          <b-button variant="primary" class="mb-1" @click="save(item)">Guardar</b-button>
          <b-button variant="success " to="/bodega">Atras</b-button>
        </div>
      </b-col>
    </b-row>
  </Layout>
</template>
<style scoped>
input {
  margin-bottom: 15px;
}
</style>