<script>
export default {
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>


<template>
  <div class="py-4">
    <b-row>
      <b-col sm="7" cols="12">
        <button class="btn btn-primary add-btn fw-bolder">
          <router-link :to="link" class="nav-link custom-abc">
            <i class="ri-add-line align-bottom me-1 fw-bold"></i> Agregar
            {{ title }}</router-link
          >
        </button>
      </b-col>
      <b-col sm="5" cols="12" class="float-sm-end">
        <b-form-input placeholder="Buscar" class="float-sm-end w-75" >
        </b-form-input>
      </b-col>
    </b-row>
  </div>
</template>