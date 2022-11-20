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
  methods: {
    see(items) {
      console.log("ey", items.idsucursal);
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
      {{ data.idsucursal }}
    </td>
    <td class="project_name">
      {{ data.nombre }}
    </td>

    <td class="client_name">{{ data.telefono }}</td>
    <td class="due_date">{{ data.direccion }}</td>
    <td class="due_date">{{ data.correo }}</td>
    <td class="due_date">{{ data.ruc }}</td>

    <td>
      <div class="d-flex align-items-center">
        <button
          class="btn d-flex align-items-center text-info px-2"
          @click="see(data)"
        >
          <i class="ri-eye-line"></i>
          Ver
        </button>

        <button
          class="btn d-flex align-items-center text-muted px-2"
          @click="edit(data)"
        >
          <i class="ri-edit-box-line"></i> Editar
        </button>

        <button
          class="btn d-flex align-items-center text-danger-900 px-2"
          @click="delet(data)"
        >
          <i class="ri-delete-bin-line"></i>Borrar
        </button>
      </div>
    </td>
  </tr>
</template>