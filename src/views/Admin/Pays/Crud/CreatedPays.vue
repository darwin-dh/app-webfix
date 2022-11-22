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
      cod_sri: "",
      estado: "",
    };
  },
  methods: {
    async save() {
      try {
        const result = await axios.post("api/agregar-formapago", {
          nombre: this.nombre,
          cod_sri: this.cod_sri,
          estado: this.estado,
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
          routes.push({ name: "FormaPago" });
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
      <b-card>
        <div>
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
            v-model="cod_sri"
            placeholder="Codigo Sri"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="estado"
            placeholder="Estado"
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
          <b-button variant="success" to="FormaPagos" class="w-100"
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