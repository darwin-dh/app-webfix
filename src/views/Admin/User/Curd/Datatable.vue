<script >
import Swal from "sweetalert2";
import axios from "axios";
import router from "@/router";
export default {
  props: {
    items: {
      type: Object,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    cerrar() {
      this.visible = false;
    },
    see() {
      const element = document.querySelector("#modal1");
      element.classList.add("modal");
      this.visible = true;
    },
    edit(items) {
      router.push({
        name: "EditarSucursales",
        params: { id: items.idsucursal },
      });
    },
    async delet(items) {
      try {
        const result = await axios.post("api/borrar-sucursal", {
          idsucursal: items.idsucursal,
        });
        const data = result.data.data;
        if (data === "YES")
          Swal.fire({
            icon: "success",
            title: "Se borro con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        this.$emit("getUser");
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
  <tr
    v-for="(data, index) in items"
    :key="index"
    class="rounded-pill mb-5 py-5"
  >
    <td class="">
      {{ data.id }}
    </td>
    <td class="project_name">
      {{ data.nombre }}
    </td>

    <td class="client_name">{{ data.apellido }}</td>
    <td class="due_date">{{ data.nombre }}</td>
    <td class="due_date">{{ data.email }}</td>
    <td>
      <span
        class="badge text-uppercase"
        :class="{
          'bg-danger': data.estado == 'inactivo',
          'bg-success': data.estado == 'activo',
        }"
        >{{ data.estado }}</span
      >
    </td>

    <td>
      <div class="d-flex align-items-center acciones">
        <button
          class="btn btn-outline-info d-flex align-items-center text-info px-2"
          @click="see(data)"
        >
          <i class="mdi mdi-eye mr-2"></i>
          Ver
        </button>

        <button
          data-bs-toggle="modal"
          href="#showmodal"
          class="
            btn btn-outline-warning
            d-flex
            align-items-center
            text-warning
            px-2
          "
          @click="edit(data)"
        >
          <i class="mdi mdi-pencil-box-outline"></i> Editar
        </button>
        <button
          class="
            btn btn-outline-danger
            d-flex
            align-items-center
            text-danger-900
            px-2
          "
          @click="delet(data)"
        >
          <i class="mdi mdi-trash-can-outline"></i>Borrar
        </button>
      </div>
    </td>
  </tr>
</template>
