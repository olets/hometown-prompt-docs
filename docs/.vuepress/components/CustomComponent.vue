<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";

export default {
  components: [PromptSegmentComponent],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    getValue,
  },
};
</script>

<template>
  <PromptSegmentComponent
    :text="getValue(store.options.data.HOMETOWN_CUSTOM) || ''"
  />
</template>
