<script>
export default {
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
      default: '/'
    },
  },
};
</script>


<template>
  <b-card class="shadow-lg bg-body rounded">
    <b-row>
      <b-col sm="5" cols="12">
        <b-form-input placeholder="Buscar"> </b-form-input>
      </b-col>
      <b-col>
        <button class="btn btn-primary add-btn float-sm-end">
          <router-link :to="link" class="nav-link custom-abc">
            Nuevo {{ title }}</router-link
          >
        </button>
      </b-col>
    </b-row>
  </b-card>
</template>