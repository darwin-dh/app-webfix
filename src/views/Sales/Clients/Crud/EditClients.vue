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
        const result = await axios.post("api/editar-cliente", {
          nombre: item.nombre,
          cedula: item.cedula,
          ruc: item.ruc,
          direccion: item.direccion,
          telefono: item.telefono,
          correo: item.correo,
          estado: item.estado,
          canton: item.canton,
          parroquia: item.parroquia,
          provincia: item.provincia,
          idcliente: this.$route.params.id,
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
    async get() {
      const id = this.$route.params.id;
      const result = await axios.post("api/buscar-cliente", {
        idcliente: id,
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
      <b-card class="">
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
            v-model="item.cedula"
            placeholder="cedula"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.ruc"
            placeholder="ruc"
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
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.correo"
            placeholder="correo"
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
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.canton"
            placeholder="canton"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.parroquia"
            placeholder="parroquia"
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control rounded-pill"
            v-model="item.provincia"
            placeholder="provincia"
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