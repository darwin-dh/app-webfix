<script >
export default {
  props: {
    items: {
      type: Object,
    },
    fields: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <table class="table align-right mb-0 table-hover  table-striped">
        <thead class="table-light text-black text-bold text-uppercase">
          <tr>
            <th v-for="(item, index) in fields" :key="index">
              {{ item.key }}
            </th>
          </tr>
        </thead>
        <tbody class="rounded-pill bg-white">
          <slot />
        </tbody>
      </table>
    </div>
  </div>
</template>

