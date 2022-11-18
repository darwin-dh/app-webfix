<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import routes from "@/router";
import Swal from "sweetalert2";

import "@vueform/multiselect/themes/default.css";
export default {
  components: {
    Layout,
    PageHeader,
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
          text: "Productos",
          href: "/",
        },
        {
          text: "Productos",
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
        const result = await axios.post("api/editar-productos", {
          idproducto: this.$route.params.id,
          codigo: item.codigo,
          nombre: item.nombre,
          codigoAlterno: item.codigoAlterno,
          codigo_barras: item.codigo_barras,
          cuenta_contable: item.cuenta_contable,
          caracteristicas: item.caracteristicas,
          ubicacion_fisica: item.ubicacion_fisica,
          estado: item.estado,
          unidad_entrada: item.unidad_entrada,
          existencia_maxima: item.existencia_maxima,
          existencia_minima: item.existencia_minima,
          numero_unidad: item.numero_unidad,
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
          routes.push({ name: "Productos" });
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
    <PageHeader :title="title" :link="link" :items="items" />
    <b-row class="d-flex flex-column text-center align-items-center">
      <b-col cols="12" sm="6">
        <b-card class="col-md-12 col-sm-6">
          <div class="">
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.codigo"
              placeholder="Codigo"
            />
          </div>
          <div>
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
              v-model="item.codigoAlterno"
              placeholder="Codigo Alterno"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.codigo_barras"
              placeholder="Codigo_barras"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.cuenta_contable"
              placeholder="Cuenta_contable"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.caracteristicas"
              placeholder="caracteristicas"
            />
          </div>

          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.ubicacion_fisica"
              placeholder="Ubicacion fisica"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.estado"
              placeholder="Ruc"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.unidad_entrada"
              placeholder="Unidad entrada"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.existencia_maxima"
              placeholder="Existencia maxima"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.existencia_minima"
              placeholder="Existencia minima"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded-pill"
              v-model="item.numero_unidad"
              placeholder="Numero unidad"
            />
          </div>
        </b-card>

        <!-- Buttons Grid -->
        <div class="d-grid">
          <b-button variant="primary" class="mb-1" @click="save(item)"
            >Guardar</b-button
          >
          <b-button variant="success " to="/Productos">Atras</b-button>
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