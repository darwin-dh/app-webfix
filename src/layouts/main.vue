<script>
import { layoutComputed } from "@/state/helpers";

import Vertical from "./vertical";

export default {
  components: {
    Vertical,
  },
  data() {
    return {};
  },
  computed: {
    ...layoutComputed,
  },
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl');
  },
};
</script>

<template>
  <div class="bg-light">
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>
  </div>
</template>
