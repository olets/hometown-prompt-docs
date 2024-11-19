<script>
import { useContextStore } from "../stores/context";
import { useOptionsStore } from "../stores/options";

export default {
  props: {
    storeName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const contextStore = useContextStore();
    const optionsStore = useOptionsStore();

    const store = {
      context: contextStore,
      options: optionsStore,
    };

    return { store };
  },
  computed: {
    customized() {
      const { data } = this.store[this.storeName];
      const customized = Object.values(data).filter((item) => {
        return (
          item.value.custom !== undefined &&
          item.value?.custom !== item.value.default
        );
      });
      console.log(customized);
      return customized;
    },
  },
  methods: {
    reset() {
      this.store[this.storeName].$reset();
    },
  },
};
</script>

<template>
  <button
    style="margin-top: 20px"
    :disabled="!customized.length"
    @click="reset"
  >
    Reset {{ storeName.charAt(0).toUpperCase() + storeName.slice(1) }}
  </button>
</template>
