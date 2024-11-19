<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import { dirty } from "../utils/dirty";
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
    dirtyValue() {
      return dirty(this.store.context.data);
    },
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
    id="head"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <!-- branch -->
    <PromptSegmentComponent
      v-if="getValue(store.context.data.gitRefBranch)"
      :key="useVerboseDefaults()"
      :color-option="
        dirtyValue()
          ? 'GIT_PROMPT_KIT_COLOR_HEAD'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="`${
        getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_BRANCH) || ''
      }main`"
    />

    <!-- commit -->
    <PromptSegmentComponent
      v-if="!getValue(store.context.data.gitRefBranch)"
      :key="useVerboseDefaults()"
      :color-option="
        dirtyValue()
          ? 'GIT_PROMPT_KIT_COLOR_HEAD'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="`${
        getValue(getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_COMMIT)) ||
        ''
      }1234567`"
    />
  </span>
</template>
