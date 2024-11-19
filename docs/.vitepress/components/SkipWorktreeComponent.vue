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
      getValue(store.context.data.extendedGitStatusSkipWorktree) ||
        !getValue(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS)
    "
    :key="useVerboseDefaults()"
    :color-option="
      getValue(store.context.data.extendedGitStatusSkipWorktree)
        ? 'GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      getValue(store.context.data.extendedGitStatusSkipWorktree)
        ? '2' + getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE)
        : getValue(
          store.options.data.GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE_INACTIVE,
          store.options.data.GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE
        ) || ''
    }`"
  />
</template>
