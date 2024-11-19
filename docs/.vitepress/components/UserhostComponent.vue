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
    hostIsHidden() {
      const hiddenHosts = getValue(
        this.store.options.data.GIT_PROMPT_KIT_HIDDEN_HOSTS
      )
        .replace(/\((.+)\)/, "$1")
        .replaceAll(/\s+/g, " ")
        .split(" ");

      return hiddenHosts.includes(getValue(this.store.context.data.host));
    },
    userIsHidden() {
      const hiddenUsers = getValue(
        this.store.options.data.GIT_PROMPT_KIT_HIDDEN_USERS
      )
        .replace(/\((.+)\)/, "$1")
        .replaceAll(/\s+/g, " ")
        .split(" ");

      return hiddenUsers.includes(getValue(this.store.context.data.user));
    },
    getValue,
  },
};
</script>

<template>
  <div v-if="!userIsHidden() || !hostIsHidden()">
    <PromptSegmentComponent
      v-if="!userIsHidden()"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_USER"
      :text="getValue(store.context.data.user)"
    />

    <PromptSegmentComponent
      v-if="!hostIsHidden()"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_HOST"
      :text="`@${getValue(store.context.data.host)}`"
    />
  </div>
</template>
