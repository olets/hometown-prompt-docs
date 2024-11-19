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
        (getValue(store.context.data.gitStatusModified) ||
          getValue(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS))
    "
    :key="useVerboseDefaults()"
    :color-option="
      getValue(store.context.data.gitStatusModified)
        ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      getValue(store.context.data.gitStatusModified)
        ? '2' + getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED)
        : getValue(
          store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_INACTIVE,
          store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED
        ) || ''
    }`"
  />
</template>
