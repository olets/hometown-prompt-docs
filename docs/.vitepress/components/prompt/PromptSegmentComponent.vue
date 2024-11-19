<script>
import { useOptionsStore } from "../../stores/options";
import { hexColor } from "../../utils/ansiToHex.js";
import { getValue } from "../../utils/value";

export default {
  props: {
    colorOption: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useOptionsStore();
    return { store };
  },
  methods: {
    hexColor,
    getValue,
  },
};
</script>

<template>
  <span
    :style="
      colorOption
        ? `color: ${hexColor(getValue(store.data[colorOption]))}`
        : null
    "
    v-html="text"
  />
</template>
