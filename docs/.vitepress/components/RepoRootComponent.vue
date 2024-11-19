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
    path() {
      const aboveRoot = ["~", "projects", "olets"];
      const root = `<span style="text-decoration: underline">hometown-prompt</span>`;

      let segments = [];

      if (
        getValue(
          this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
        ) < 0 ||
        getValue(
          this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
        ) >= aboveRoot.length
      ) {
        segments = aboveRoot;
      } else {
        segments = aboveRoot.slice(
          aboveRoot.length -
            getValue(
              this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
            )
        );
      }

      segments.push(root);

      return segments.join("/");
    },
    getValue,
  },
};
</script>

<template>
  <PromptSegmentComponent
    v-if="getValue(store.context.data.directoryGitRepo)"
    color-option="GIT_PROMPT_KIT_COLOR_CWD"
    :text="path()"
  />
</template>
