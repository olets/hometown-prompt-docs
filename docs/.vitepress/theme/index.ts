// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { trackLinksAndFathomEvents } from "./analytics";
import { scrollableRegionsHaveKeyboardAccess } from "./accessibility";

import { createPinia } from "pinia";
const pinia = createPinia();

import ConfigComponent from "../components/ConfigComponent.vue";
import ContextConfigurationComponent from "../components/ContextConfigurationComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import OptionsComponent from "../components/OptionsComponent.vue";
import OptionsConfigurationComponent from "../components/OptionsConfigurationComponent.vue";
import PromptComponent from "../components/prompt/PromptComponent.vue";
import PromptSegmentComponent from "../components/prompt/PromptSegmentComponent.vue";
import ResetOptionsComponent from "../components/ResetOptionsComponent.vue";

import CustomComponent from "../components/CustomComponent.vue";

import ActionComponent from "../components/ActionComponent.vue";
import AssumedUnchangedComponent from "../components/AssumedUnchangedComponent.vue";
import CharComponent from "../components/CharComponent.vue";
import ConflictedComponent from "../components/ConflictedComponent.vue";
import CwdComponent from "../components/CwdComponent.vue";
import DeletedComponent from "../components/DeletedComponent.vue";
import DeletedStagedComponent from "../components/DeletedStagedComponent.vue";
import GitAheadComponent from "../components/GitAheadComponent.vue";
import GitBehindComponent from "../components/GitBehindComponent.vue";
import GitHeadComponent from "../components/GitHeadComponent.vue";
import GitPushAheadComponent from "../components/GitPushAheadComponent.vue";
import GitPushBehindComponent from "../components/GitPushBehindComponent.vue";
import GitPushComponent from "../components/GitPushComponent.vue";
import GitRefComponent from "../components/GitRefComponent.vue";
import GitRemoteComponent from "../components/GitRemoteComponent.vue";
import GitTagComponent from "../components/GitTagComponent.vue";
import ModifiedComponent from "../components/ModifiedComponent.vue";
import ModifiedStagedComponent from "../components/ModifiedStagedComponent.vue";
import NewComponent from "../components/NewComponent.vue";
import RepoRootComponent from "../components/RepoRootComponent.vue";
import RepoSubdirectoryComponent from "../components/RepoSubdirectoryComponent.vue";
import SkipWorktreeComponent from "../components/SkipWorktreeComponent.vue";
import StashesComponent from "../components/StashesComponent.vue";
import StatusComponent from "../components/StatusComponent.vue";
import StatusExtendedComponent from "../components/StatusExtendedComponent.vue";
import UntrackedComponent from "../components/UntrackedComponent.vue";
import UserhostComponent from "../components/UserhostComponent.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => {
        scrollableRegionsHaveKeyboardAccess();
        trackLinksAndFathomEvents();
      },
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(pinia);

    app.component("CustomComponent", CustomComponent);

    app.component("ActionComponent", ActionComponent);
    app.component("AssumedUnchangedComponent", AssumedUnchangedComponent);
    app.component("CharComponent", CharComponent);
    app.component("ConfigComponent", ConfigComponent);
    app.component("ConflictedComponent", ConflictedComponent);

    app.component(
      "ContextConfigurationComponent",
      ContextConfigurationComponent
    );
    app.component("CwdComponent", CwdComponent);
    app.component("DeletedComponent", DeletedComponent);
    app.component("DeletedStagedComponent", DeletedStagedComponent);

    app.component("GitAheadComponent", GitAheadComponent);
    app.component("GitBehindComponent", GitBehindComponent);
    app.component("GitHeadComponent", GitHeadComponent);
    app.component("GitPushAheadComponent", GitPushAheadComponent);
    app.component("GitPushBehindComponent", GitPushBehindComponent);
    app.component("GitPushComponent", GitPushComponent);
    app.component("GitRefComponent", GitRefComponent);
    app.component("GitRemoteComponent", GitRemoteComponent);
    app.component("GitTagComponent", GitTagComponent);
    app.component("InputComponent", InputComponent);
    app.component("ModifiedComponent", ModifiedComponent);
    app.component("ModifiedStagedComponent", ModifiedStagedComponent);
    app.component("NewComponent", NewComponent);
    app.component(
      "OptionsConfigurationComponent",
      OptionsConfigurationComponent
    );
    app.component("OptionsComponent", OptionsComponent);
    app.component("PromptComponent", PromptComponent);
    app.component("PromptSegmentComponent", PromptSegmentComponent);
    app.component("RepoRootComponent", RepoRootComponent);
    app.component("RepoSubdirectoryComponent", RepoSubdirectoryComponent);
    app.component("ResetOptionsComponent", ResetOptionsComponent);
    app.component("SkipWorktreeComponent", SkipWorktreeComponent);
    app.component("StashesComponent", StashesComponent);
    app.component("StatusComponent", StatusComponent);
    app.component("StatusExtendedComponent", StatusExtendedComponent);
    app.component("UntrackedComponent", UntrackedComponent);
    app.component("UserhostComponent", UserhostComponent);
  },
} satisfies Theme;
