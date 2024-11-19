<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";
import RepoRootComponent from "./RepoRootComponent.vue";
import RepoSubdirectoryComponent from "./RepoSubdirectoryComponent.vue";

export default {
  components: [
    PromptSegmentComponent,
    RepoRootComponent,
    RepoSubdirectoryComponent,
  ],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    path() {
      let segments = ["~", "projects", "olets", "hometown-prompt"];
      if (
        getValue(
          this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
        ) > -1 &&
        getValue(
          this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
        ) < segments.length
      ) {
        segments = segments.slice(
          segments.length -
            1 -
            getValue(
              this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
            )
        );
      }
      return segments.join("/");
    },
    getValue,
  },
};
</script>

<template>
  <PromptSegmentComponent
    v-if="!getValue(store.context.data.directoryGitRepo)"
    color-option="GIT_PROMPT_KIT_COLOR_CWD"
    :text="path()"
  />

  <div
    v-if="getValue(store.context.data.directoryGitRepo)"
    style="display: flex"
  >
    <RepoRootComponent />
    <PromptSegmentComponent
      v-if="getValue(store.context.data.directoryGitSubdirectory)"
      color-option="GIT_PROMPT_KIT_COLOR_CWD"
      text="/"
    />
    <RepoSubdirectoryComponent />
  </div>
</template>
