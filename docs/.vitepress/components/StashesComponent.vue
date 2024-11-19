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
      getValue(store.context.data.extendedGitStatusStashes) ||
        !getValue(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS)
    "
    :key="useVerboseDefaults()"
    :color-option="
      getValue(store.context.data.extendedGitStatusStashes)
        ? 'GIT_PROMPT_KIT_COLOR_STASH'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      getValue(store.context.data.extendedGitStatusStashes)
        ? '2' + getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_STASH)
        : getValue(
          store.options.data.GIT_PROMPT_KIT_SYMBOL_STASH_INACTIVE,
          store.options.data.GIT_PROMPT_KIT_SYMBOL_STASH
        ) || ''
    }`"
  />
</template>
