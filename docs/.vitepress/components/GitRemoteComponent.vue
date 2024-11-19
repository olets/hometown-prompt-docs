<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { hexColor } from "../utils/ansiToHex.js";
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
  computed: {
    remoteName() {
      return `${
        !getValue(this.store.context.data.gitRefDefaultRemote) ? "upstream" : ""
      }${
        !getValue(this.store.context.data.gitRefDefaultRemote) &&
        !getValue(this.store.context.data.gitRefSameNameRemoteBranch)
          ? "/"
          : ""
      }${
        !getValue(this.store.context.data.gitRefSameNameRemoteBranch)
          ? "trunk"
          : ""
      }`;
    },
    remoteSymbol() {
      return (
        getValue(this.store.options.data.GIT_PROMPT_KIT_SYMBOL_REMOTE) &&
        getValue(this.store.context.data.gitPushRefPush) &&
        (getValue(this.store.context.data.gitRefAhead) ||
          getValue(this.store.context.data.gitRefBehind) ||
          !getValue(
            this.store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
          ))
      );
    },
  },
  methods: {
    useVerboseDefaults() {
      return getValue(
        this.store.options.data.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS
      );
    },
    getValue,
    hexColor,
  },
};
</script>

<template>
  <!-- local -->
  <span
    v-if="
      getValue(store.context.data.gitRefBranch) &&
        !getValue(store.context.data.gitRefRemote)
    "
    :style="`color: ${hexColor(
      getValue(store.options.data.GIT_PROMPT_KIT_COLOR_REMOTE)
    )};`"
  >
    {{ getValue(store.options.data.GIT_PROMPT_KIT_SYMBOL_LOCAL) }}
  </span>

  <!-- upstream -->
  <span
    v-if="
      getValue(store.context.data.gitRefRemote) && (remoteSymbol || remoteName)
    "
    id="upstream"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <!-- remote symbol -->
    <PromptSegmentComponent
      v-if="remoteSymbol"
      :key="useVerboseDefaults()"
      :color-option="
        getValue(store.context.data.gitRefAhead) ||
          getValue(store.context.data.gitRefBehind)
          ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="remoteSymbol"
    />

    <!-- remote and remote branch -->
    <PromptSegmentComponent
      v-if="remoteName"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_REMOTE"
      :text="remoteName"
    />
  </span>
</template>
