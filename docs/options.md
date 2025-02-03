# Options

<!-- DUPE demo.md, options.md -->

Hometown Prompt is made almost entirely of [Git Prompt Kit](https://git-prompt-kit.olets.dev) components. So almost all configuration —color customization, symbol customization, dimming vs hiding inactive elements, the number of path segments shows, etc.— is done by configuring through Git Prompt Kit. (Git Prompt Kit is bundled with Hometown Prompt, so no additional download is necessary.)

:::tip
Read about Git Prompt Kit's options in the [Git Prompt Kit's options documentation](https://git-prompt-kit.olets.dev/options.html). And play with Hometown Prompt's options _and_ Git Prompt Kit's options in the [Hometown Prompt interactive demo](/demo.md)!
:::

## Content

<OptionsComponent group="Hometown Prompt content"/>

## Layout

<OptionsComponent group="Hometown Prompt layout"/>

## Transient prompt

<OptionsComponent group="Hometown Prompt transient prompt"/>

\* Git ref info is branch or commit, ahead/behind counts, remote name(s), and tag. See the [`GIT_PROMPT_KIT_REF` docs](https://git-prompt-kit.olets.dev/components.html).
