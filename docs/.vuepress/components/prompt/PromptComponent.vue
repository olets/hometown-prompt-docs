<script>
import { useOptionsStore } from "../../stores/options";
import { useContextStore } from "../../stores/context";
import { hexColor } from "../../utils/ansiToHex.js";
import { getChar } from "../../utils/char";
import { getValue } from "../../utils/value";
import PromptSegmentComponent from "./PromptSegmentComponent.vue";
import ActionComponent from "../ActionComponent.vue";
import CwdComponent from "../CwdComponent.vue";
import UserhostComponent from "../UserhostComponent.vue";
import GitRefComponent from "../GitRefComponent.vue";
import StatusExtendedComponent from "../StatusExtendedComponent.vue";
import StatusComponent from "../StatusComponent.vue";
import CharComponent from "../CharComponent.vue";

import CustomComponent from "../CustomComponent.vue";

export default {
  components: [
    ActionComponent,
    CharComponent,
    CustomComponent,
    CwdComponent,
    GitRefComponent,
    PromptSegmentComponent,
    StatusExtendedComponent,
    StatusComponent,
    UserhostComponent,
  ],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    getChar,
    hexColor,
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
  <div
    id="prompt"
    :style="`background-color: ${hexColor(
      getValue(store.context.data.terminalBackgroundColor)
    )}; color: ${hexColor(getValue(store.context.data.terminalTextColor))};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: .25rem;
    white-space: nowrap;
    overflow-x: auto;`"
  >
    <div
      :style="`${
        getValue(store.options.data.HOMETOWN_NO_LINEBREAK_BEFORE_GIT_REF)
          ? 'display: flex;'
          : ''
      } gap: var(--prompt-gap);
      width: fit-content;`"
    >
      <div
        id="not-git"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <UserhostComponent />

        <CustomComponent />

        <CwdComponent />
      </div>

      <div style="display: flex; gap: var(--prompt-gap)">
        <GitRefComponent />

        <div
          v-if="!getValue(store.options.data.HOMETOWN_LINEBREAK_AFTER_GIT_REF)"
          style="display: flex; gap: var(--prompt-gap)"
        >
          <StatusExtendedComponent
            v-if="getValue(store.options.data.HOMETOWN_SHOW_EXTENDED_STATUS)"
          />

          <StatusComponent />

          <ActionComponent />
        </div>
      </div>
    </div>

    <div
      :style="`display: flex; width: fit-content;
        ${
        getChar(store).includes('\\n')
          ? 'flex-direction: column;'
          : 'gap: var(--prompt-gap);'
      }`"
    >
      <div
        v-if="getValue(store.options.data.HOMETOWN_LINEBREAK_AFTER_GIT_REF)"
        style="display: flex; gap: var(--prompt-gap); width: fit-content"
      >
        <StatusExtendedComponent
          v-if="getValue(store.options.data.HOMETOWN_SHOW_EXTENDED_STATUS)"
        />

        <StatusComponent />

        <ActionComponent />
      </div>

      <!-- prompt character -->
      <CharComponent />
    </div>
  </div>
</template>
