<script>
import axios from "axios";
import routes from "@/router";
import Swal from "sweetalert2";
import Multiselect from "@vueform/multiselect/src/Multiselect";
export default {
  components: {
    Multiselect,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      options: [],
      estados: [
        { id: 1, label: "Activo", value: "activo" },
        { id: 2, label: "Inactivo", value: "inactivo" },
      ],
      email: "",
      nombre: "",
      apellido: "",
      contrasena: "",
      perfil: "",
      estado: "",
    };
  },
  methods: {
    async getPefiles() {
      const result = await axios.get("/api/lista-Perfiles");
      const data = result.data.data;
      this.options = data;
    },
    async save() {
      try {
        const result = await axios.post("api/agregar-usuario", {
          email: this.email,
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.password,
          idperfil: this.perfil,
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
        this.$emit("getUser");
        setTimeout(() => {
          routes.push({ name: "Usuario" });
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
  created() {
    this.getPefiles();
  },
};
</script>
<template>
  <div class="my-2">
    <!-- Default Modals -->
    <button
      type="button"
      class="btn btn-primary-900"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    >
      Agregar {{ title }}
    </button>
    <div
      id="myModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="display: none"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">{{ title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="javascript:void(0);">
              <div class="row g-3">
                <div class="col-xxl-6">
                  <div>
                    <label for="firstName" class="form-label">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="nombre"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-6">
                  <div>
                    <label for="lastName" class="form-label">Apellido</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="apellido"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-lg-12">
                  <label for="genderInput" class="form-label">Perfil</label>
                  <Multiselect
                    class="borde mb-2 px-1"
                    v-model="perfil"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="options"
                  />
                  {{ perfil }}
                </div>
                <!--end col-->
                <div class="col-xxl-6">
                  <div>
                    <label for="emailInput" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="email"
                      id="emailInput"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-6">
                  <div>
                    <label for="passwordInput" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <label for="genderInput" class="form-label">Estado</label>
                  <Multiselect
                    class="borde mb-2 px-1"
                    v-model="estado"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="estados"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="save"
              data-bs-dismiss="modal"
            >
              Guardar
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>