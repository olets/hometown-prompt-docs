<script>
import { useOptionsStore } from "../stores/options";

export default {
  setup() {
    const store = useOptionsStore();
    return { store };
  },
};
</script>

<template>
  <section id="config">
    <textarea
      v-model="store.customizations"
      :disabled="!store.customizations"
      style="width: 100%"
      readonly
    />
  </section>
</template>
