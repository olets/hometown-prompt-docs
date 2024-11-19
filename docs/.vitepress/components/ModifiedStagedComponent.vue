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
  <PromptSegmentComponent
    v-if="
      getValue(store.context.data.directoryGitRepo) &&
        (getValue(store.context.data.gitStatusModifiedStaged) ||
          getValue(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS))
    "
    :key="useVerboseDefaults()"
    :color-option="
      getValue(store.context.data.gitStatusModifiedStaged)
        ? 'GIT_PROMPT_KIT_COLOR_STAGED'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      getValue(store.context.data.gitStatusModifiedStaged)
        ? '2' +
          getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED)
        : getValue(
          store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED_INACTIVE,
          store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED
        ) || ''
    }`"
  />
</template>
