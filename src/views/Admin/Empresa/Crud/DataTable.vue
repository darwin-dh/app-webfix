<script >
import Swal from "sweetalert2";
import axios from "axios";
import router from "@/router";
//ant
export default {
  props: {
    items: {
      type: Object,
    },
  },
  data() {
    return {
      verModal: false,
    };
  },
  methods: {
    see() {
      this.verModal = true;
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
        this.$emit("getSucursal");
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
      {{ data.idempresa }}
    </td>
    <td class="project_name">
      {{ data.nombre }}
    </td>

    <td class="client_name">{{ data.telefono }}</td>
    <td class="due_date">{{ data.direccion }}</td>
    <td class="due_date">{{ data.correo }}</td>
    <td class="due_date">{{ data.ruc }}</td>

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
      </div>
    </td>
  </tr>
</template>