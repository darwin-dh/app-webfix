<script>
import TablereportVue from "../Generic/tablereport.vue";
export default {
  components: {
    TablereportVue,
  },
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
  <div>
    <div class="py-4">
      <b-row>
        <b-col sm="7" cols="12">
          <button class="btn btn-primary-900 add-btn fw-bolder rounded-3">
            <router-link :to="link" class="nav-link custom-abc">
              <i class="ri-add-line align-bottom me-1 fw-bold text-white"></i>
              Agregar {{ title }}</router-link
            >
          </button>
        </b-col>
        <b-col sm="5" cols="12" class="float-sm-end">
          <div class="form-icon right">
            <input
              type="email"
              class="form-control form-control-icon"
              placeholder="BUSCAR..."
            />
            <i class="ri-search-2-line fs-5"></i>
          </div>
        </b-col>
      </b-row>
    </div>
    <TablereportVue />
  </div>
</template>