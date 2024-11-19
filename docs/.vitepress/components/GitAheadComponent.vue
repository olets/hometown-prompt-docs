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
  <!-- remote ahead -->
  <PromptSegmentComponent
    v-if="
      getValue(store.context.data.gitRefRemote) &&
        (getValue(store.context.data.gitRefAhead) ||
          !getValue(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND))
    "
    :key="useVerboseDefaults()"
    :color-option="
      getValue(store.context.data.gitRefAhead)
        ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      getValue(store.context.data.gitRefAhead)
        ? getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD) + '2'
        : getValue(
          store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD_INACTIVE,
          store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD
        ) || ''
    }`"
  />
</template>
