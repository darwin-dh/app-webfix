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
      codigo: "",
      nombre: "",
      ubicacion: "",
      direccion: "",
      telefono: "",
      estado: "",
      ruc: "",
    };
  },
  methods: {
    async save() {
      try {
        const result = await axios.post("api/agregar-bodega", {
          codigo: this.codigo,
          nombre: this.nombre,
          ubicacion: this.ubicacion,
          direccion: this.direccion,
          telefono: this.telefono,
          estado: this.estado,
          ruc: this.ruc,
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
          v-model="codigo"
          placeholder="codigo"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="nombre"
          placeholder="nombre"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="ubicacion"
          placeholder="ubicacion"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="direccion"
          placeholder="direccion"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="telefono"
          placeholder="telefono"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="estado"
          placeholder="estado"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control rounded-pill"
          v-model="ruc"
          placeholder="ruc"
        />
      </div>
    </b-card>

    <!-- Buttons Grid -->
    <div class="d-grid">
      <b-button variant="primary" @click="save">Guardar</b-button>
    </div>
  </Layout>
</template>
<style scoped>
input {
  margin-bottom: 15px;
}
</style>