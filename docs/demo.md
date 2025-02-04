# Interactive Demo & Configurator

On this page you can see how Hometown Prompt responds to [context](#context) (user, host, Git status, etc).

You can also experiment with [customizing your configuration](#configuration).

:::tip
No custom configuration is required. Hometown Prompt works right out of the box.
:::

[[toc]]

<!-- DUPE demo.md, options.md -->

Custom content and the prompt character are printed with [prompt expansion](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html), with `PROMPT_SUBST` and `PROMPT_PERCENT`. For example, the default prompt char `%%` is rendered as `%`, and the default custom content `%*` is rendered as the 24-hour HH:MM:SS time.

<div style="
  background-color: var(--c-bg);
  box-shadow: 0 0 1rem 1rem var(--c-bg);
  padding: 0.5rem 0;
  position: sticky;
  top: var(--navbar-height);
  z-index: 10;
">
  <PromptComponent/>

Custom configuration ready for copying and pasting into your `.zshrc`:

<ConfigComponent/>

<ResetOptionsComponent/>
</div>

## Context

### Terminal

<ContextConfigurationComponent group="Terminal"/>

### User

<ContextConfigurationComponent group="User"/>

### Session

<ContextConfigurationComponent group="Session"/>

### Directory

<ContextConfigurationComponent group="Directory"/>

### Git ref

<ContextConfigurationComponent group="Git ref"/>

#### Triangular workflow

<ContextConfigurationComponent group="Git push ref"/>

### Git status

<ContextConfigurationComponent group="Git status"/>

### Extended Git status

<ContextConfigurationComponent group="Extended Git status"/>

<div id="configuration"></div>

## Options

### Hometown Prompt Configuration

For detailed documentation of these options, see the [Options page](/options.md).

#### Content Options

See [Options > Content](/options.md#content) for details.

<OptionsConfigurationComponent group="hometown prompt content"/>

#### Layout Options

See [Options > Layout](/options.md#layout) for details.

<OptionsConfigurationComponent group="hometown prompt layout"/>

#### Scheduled refresh

See [Options > Scheduled refresh](/options.md#scheduled-refresh) for details.

<OptionsConfigurationComponent group="Hometown Prompt scheduled refresh"/>

#### Transient Prompt Options

See [Options > Layout](/options.md#transient-prompt) for details.

<OptionsConfigurationComponent group="hometown prompt transient prompt"/>

\* Git ref info is branch or commit, ahead/behind counts, remote name(s), and tag. See the [`GIT_PROMPT_KIT_REF` docs](https://git-prompt-kit.olets.dev/components.html).

### Git Prompt Kit Configuration

Hometown Prompt is made almost entirely of [Git Prompt Kit](https://git-prompt-kit.olets.dev) components. So almost all of configuration —color customization, symbol customization, dimming vs hiding inactive elements, the number of path segments shows, etc— is done by configuring through Git Prompt Kit. (Git Prompt Kit is bundled with Hometown Prompt, so no additional download is necessary.) For detailed documentations of these options, see the [Git Prompt Kit's options documentation](https://git-prompt-kit.olets.dev/options.html).

#### Behavior Options

See [Git Prompt Kit's options' documentation](https://git-prompt-kit.olets.dev/options.html) for details.

<OptionsConfigurationComponent group="behavior"/>

#### Color Options

See [Git Prompt Kit's options' documentation](https://git-prompt-kit.olets.dev/options.html) for details.

<OptionsConfigurationComponent group="color"/>

#### Content Options

See [Git Prompt Kit's options' documentation](https://git-prompt-kit.olets.dev/options.html) for details.

<OptionsConfigurationComponent group="content"/>

#### Symbol Options

See [Git Prompt Kit's options' documentation](https://git-prompt-kit.olets.dev/options.html) for details.

<OptionsConfigurationComponent group="symbol"/>
