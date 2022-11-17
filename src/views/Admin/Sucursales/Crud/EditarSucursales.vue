<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import routes from "@/router";
import Swal from "sweetalert2";
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      nombre: "",
      telefono: "",
      direccion: "",
      correo: "",
      ruc: "",
      item: [],
    };
  },
  methods: {
    async save(item) {
      try {
        const result = await axios.post("api/editar-sucursal", {
          nombre: item.nombre,
          telefono: item.telefono,
          direccion: item.direccion,
          correo: item.correo,
          ruc: item.ruc,
          idsucursal: 1,
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
          routes.push({ name: "Sucursales" });
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
      const result = await axios.post("api/buscar-sucursal", {
        idsucursal: id,
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
    <PageHeader />
    <b-card class="col-md-12 col-sm-12">
      <div class="">
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="item.nombre"
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="item.telefono"
          placeholder="Telefono"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="item.direccion"
          placeholder="Direccion"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="item.correo"
          placeholder="Correo"
        />
      </div>
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
    <div class="d-grid">
      <b-button variant="primary" @click="save(item)">Guardar</b-button>
    </div>
  </Layout>
</template>
<style scoped>
input {
  margin-bottom: 15px;
}
</style>