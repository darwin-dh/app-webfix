<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<template>
  <!-- start page title -->

    <div class="row">
      <div class="col-12">
        <b-card class="bg-light border-0 ">
          <div
            class="d-sm-flex align-items-center justify-content-between "
          >
            <h2 class="mb-sm-0">{{ title }}</h2>
    
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li
                  class="breadcrumb-item"
                  v-for="(item, index) in items"
                  :key="index"
                  :class="{ active: item[0] }"
                >
                  <a href="javascript: void(0);">{{ item.text }}</a>
                </li>
              </ol>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  <!-- end page title -->
</template>
