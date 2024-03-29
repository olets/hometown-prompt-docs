<script>
import { useOptionsStore } from "../stores/options";

export default {
  setup() {
    const store = useOptionsStore();
    return { store };
  },
  methods: {
    reset() {
      this.store.$reset();
    },
  },
};
</script>

<template>
  <button
    style="margin-top: 20px"
    :disabled="!store.customizations"
    @click="reset"
  >
    Reset All Options To Their Defaults
  </button>
</template>
