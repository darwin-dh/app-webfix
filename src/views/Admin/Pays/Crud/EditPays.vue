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
      item: [],
    };
  },
  methods: {
    async save(item) {
      try {
        const result = await axios.post("api/editar-formapago", {
          idformapago: item.idformapago,
          nombre: item.nombre,
          cod_sri: item.cod_sri,
          estado: item.estado,
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
    async get() {
      const id = this.$route.params.id;
      const result = await axios.post("api/buscar-formapago", {
        idformapago: id,
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
    <b-row>
      <b-card>
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
            v-model="item.cod_sri"
            placeholder="Codigo Sri"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.estado"
            placeholder="estado"
          />
        </div>
      </b-card>

      <!-- Buttons Grid -->
      <b-row>
        <b-col cols="12" sm="6">
          <b-button variant="primary" @click="save(item)" class="w-100"
            >Guardar</b-button
          >
        </b-col>
        <b-col cols="12" sm="6">
          <b-button variant="success" to="/FormaPagos" class="w-100"
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