<script>
import axios from "axios";

export default {
  data() {
    return {
      codigo: "",
      nombre: "",
      ubicacion: "",
      direccion: "",
      telefono: "",
      estado: "",
      ruc: "",
      idempresa: 1,
    };
  },
  methods: {
    async addBodega() {
      const results = await axios.post(
        "/api/agregar-bodega",
        {
          codigo: this.codigo,
          nombre: this.nombre,
          ubicacion: this.ubicacion,
          direccion: this.telefono,
          telefono: this.telefono,
          estado: this.estado,
          ruc: this.ruc,
          idempresa: this.idempresa,
        }
      );
      if (results.data.mesage === "YES") {
        this.$router.push({
          path: "/Bodega",
        });
      }
    },
  },
};
</script>
<template>
  <b-card class="shadow bg-body rounded">
    <b-form class="row">
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="codigo"
          placeholder="Ingrese Codigo"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="nombre"
          placeholder="Ingrese Nombre"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="ubicacion"
          placeholder="Ingrese Ciudad"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="direccion"
          placeholder="Ingrese Direccion"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="telefono"
          placeholder="Ingrese Telefono"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="estado"
          placeholder="Ingrese Estado"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="col-sm-12">
        <b-form-input
          type="Text"
          v-model="ruc"
          placeholder="Ingrese Ruc"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>

    <div class="float-end">
      <button class="btn btn-primary add-btn" @click="addBodega">
        Guardar
      </button>
      <button class="btn btn-warning">Borrar</button>
      <button class="btn btn-secondary">
        <router-link to="/Bodega">Atras</router-link>
      </button>
    </div>
  </b-card>
</template>
<style scoped>
.float-end > button {
  margin: 12px;
}
</style>