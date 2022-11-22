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
      cedula: "",
      ruc: "",
      direccion: "",
      telefono: "",
      correo: "",
      estado: "",
      canton: "",
      parroquia: "",
      provincia: "",
    };
  },
  methods: {
    async save() {
      try {
        const result = await axios.post("api/agregar-cliente", {
          nombre: this.nombre,
          cedula: this.cedula,
          ruc: this.ruc,
          direccion: this.direccion,
          telefono: this.telefono,
          correo: this.correo,
          estado: this.estado,
          canton: this.canton,
          parroquia: this.parroquia,
          provincia: this.provincia,
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
          routes.push({ name: "Clientes" });
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
    <b-row>
      <b-card class="">
        <div class="">
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="nombre"
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="cedula"
            placeholder="cedula"
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
            v-model="correo"
            placeholder="correo"
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
            v-model="canton"
            placeholder="canton"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="parroquia"
            placeholder="parroquia"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="provincia"
            placeholder="provincia"
          />
        </div>
      </b-card>

      <!-- Buttons Grid -->
      <b-row>
        <b-col cols="12" sm="6">
          <b-button variant="primary" @click="save" class="w-100"
            >Guardar</b-button
          >
        </b-col>
        <b-col cols="12" sm="6">
          <b-button variant="success" to="/Clientes" class="w-100"
            >Atras</b-button
          >
        </b-col>
      </b-row>
    </b-row>
  </Layout>
</template>
<style scoped>
input {
  margin-bottom: 15px;
}
</style>