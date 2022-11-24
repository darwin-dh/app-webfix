<script>
import Swal from "sweetalert2";
import axios from "axios";
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
    addnew() {
      document.getElementById("add-btn").style.display = "block";
      document.getElementById("edit-btn").style.display = "none";
    },
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
        document.getElementById("closemodal").click();
        setTimeout(() => {}, "1600");
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
  <div class="my-2 card-body bg-white py-2 rounded-2 my-2">
    <button
      class="
        btn btn-soft-primary-900
        d-flex
        align-items-center
        rounded-pill
        my-2
        mx-1
      "
      data-bs-toggle="modal"
      href="#showmodal"
      @click="addnew"
    >
      <i class="mdi mdi-plus fs-5"></i> <b>Agregar {{ title }}</b>
    </button>
    <div
      class="modal fade zoomIn"
      id="showmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
                    <label for="firstName" class="form-label"
                      >Nombre <span class="text-danger">*</span></label
                    >
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
                    <label for="lastName" class="form-label"
                      >Apellido <span class="text-danger">*</span></label
                    >
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
                  <label for="genderInput" class="form-label"
                    >Perfil <span class="text-danger">*</span></label
                  >
                  <Multiselect
                    class="borde mb-2 px-1"
                    v-model="perfil"
                    :close-on-select="true"
                    :searchable="true"
                    :create-option="true"
                    :options="options"
                  />
                </div>
                <!--end col-->
                <div class="col-xxl-6">
                  <label for="emailInput" class="form-label"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="email"
                    id="emailInput"
                    placeholder="example@gmail.com"
                  />
                </div>
                <!--end col-->
                <div class="col-xxl-6">
                  <label for="passwordInput" class="form-label"
                    >Password <span class="text-danger"> *</span></label
                  >
                  <input
                    type="password"
                    id="passwordInput"
                    class="form-control"
                    v-model="password"
                    placeholder="******"
                  />
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
            <div class="hstack gap-2 justify-content-end">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
                id="closemodal"
              >
                Close
              </button>
              <button class="btn btn-info" id="add-btn" @click="save">
                Guardar
              </button>
              <button
                type="button"
                class="btn btn-success"
                id="edit-btn"
                @click="updateorder()"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>