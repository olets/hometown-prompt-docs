<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { expandPromptSequence } from "../utils/expandPromptSequence";
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
    expandPromptSequence,
    getValue,
  },
};
</script>

<template>
  <PromptSegmentComponent
    :color-option="
      getValue(store.context.data.sessionFailed)
        ? 'GIT_PROMPT_KIT_COLOR_FAILED'
        : 'GIT_PROMPT_KIT_COLOR_SUCCEEDED'
    "
    :text="
      getValue(store.context.data.userRoot)
        ? expandPromptSequence(
          getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT)
        )
        : expandPromptSequence(
          getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL)
        )
    "
  />
</template>
