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
      console.log("ey", items.idcliente);
    },
    edit(items) {
      router.push({
        name: "EditarClientes",
        params: { id: items.idcliente },
      });
    },
    async delet(items) {
      try {
        const result = await axios.post("api/borrar-cliente", {
          idcliente: items.idcliente,
        });
        const data = result.data.data;
        if (data === "YES")
          Swal.fire({
            icon: "success",
            title: "Se borro con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        this.$emit("getClients");
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
      {{ data.idcliente }}
    </td>
    <td class="project_name">
      {{ data.nombre }}
    </td>

    <td class="client_name">{{ data.cedula }}</td>
    <td class="client_name">{{ data.rcu }}</td>
    <td class="due_date">{{ data.direccion }}</td>
    <td class="due_date">{{ data.telefono }}</td>
    <td class="due_date">{{ data.correo }}</td>
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
    <td class="due_date">{{ data.canton }}</td>
    <td class="due_date">{{ data.parroquia }}</td>
    <td class="due_date">{{ data.provincia }}</td>

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
          class="btn btn-outline-warning d-flex align-items-center text-warning px-2"
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