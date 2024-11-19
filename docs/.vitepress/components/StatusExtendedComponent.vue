<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import AssumedUnchangedComponent from "./AssumedUnchangedComponent.vue";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";
import SkipWorktreeComponent from "./SkipWorktreeComponent.vue";
import StashesComponent from "./StashesComponent.vue";

export default {
  components: [
    AssumedUnchangedComponent,
    PromptSegmentComponent,
    SkipWorktreeComponent,
    StashesComponent,
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
    v-if="
      getValue(store.context.data.directoryGitRepo) &&
        (getValue(store.context.data.extendedGitStatusStashes) ||
          getValue(store.context.data.extendedGitStatusAssumeUnchanged) ||
          getValue(store.context.data.extendedGitStatusSkipWorktree) ||
          !getValue(
            store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
          ))
    "
    id="extended"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <StashesComponent />

    <AssumedUnchangedComponent />

    <SkipWorktreeComponent />
  </span>
</template>
