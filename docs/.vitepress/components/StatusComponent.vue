<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import ConflictedComponent from "./ConflictedComponent.vue";
import DeletedComponent from "./DeletedComponent.vue";
import DeletedStagedComponent from "./DeletedStagedComponent.vue";
import ModifiedComponent from "./ModifiedComponent.vue";
import ModifiedStagedComponent from "./ModifiedStagedComponent.vue";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";
import UntrackedComponent from "./UntrackedComponent.vue";

export default {
  components: [
    ConflictedComponent,
    DeletedComponent,
    DeletedStagedComponent,
    ModifiedComponent,
    ModifiedStagedComponent,
    PromptSegmentComponent,
    UntrackedComponent,
  ],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    useVerboseDefaults() {
      return getValue(
        this.store.options.data.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS
      );
    },
    getValue,
  },
};
</script>

<template>
  <span
    id="status"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <UntrackedComponent />

    <ConflictedComponent />

    <DeletedComponent />

    <ModifiedComponent />

    <NewComponent />

    <DeletedStagedComponent />

    <ModifiedStagedComponent />
  </span>
</template>
