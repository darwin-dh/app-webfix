<script >
export default {
  props: {
    items: {
      type: Object,
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
          class="btn d-flex align-items-center text-danger px-2"
          @click="delet(data)"
        >
          <i class="ri-delete-bin-line"></i>Borrar
        </button>
      </div>
    </td>
  </tr>
</template>