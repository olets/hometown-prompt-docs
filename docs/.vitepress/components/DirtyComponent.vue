<script>
import { useContextStore } from "../stores/context";
import { dirty } from "../utils/dirty";

export default {
  setup() {
    const store = {
      context: useContextStore(),
    };
    return { store };
  },
  methods: {
    dirtyValue() {
      return dirty(this.store.context.data);
    },
  },
};
</script>

<template>
  <span :key="dirtyValue()">{{ dirtyValue() }}</span>
</template>
