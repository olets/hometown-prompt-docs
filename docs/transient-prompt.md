# Transient prompt

## The effect

data-rich prompt, possibly on several lines has a "transient prompt" feature. When transient prompt is enabled (as it is by default), the current command line gets a distinct prompt.

Consider you run a series of commands:

```shell:no-line-numbers
echo foo
echo bar
echo baz
```

_Without_ transient prompt, your terminal will read

```shell:no-line-numbers
[possibly data-rich prompt, possibly on several lines]
% echo foo
foo

[possibly data-rich prompt, possibly on several lines]
% echo bar
bar

[possibly data-rich prompt, possibly on several lines]
% echo baz
baz
```

_With_ transient prompt, your terminal can be something like

```shell:no-line-numbers
% [minimal prompt, on one line]
echo foo
foo
% [minimal prompt, on one line]
echo bar
bar

[possibly data-rich prompt, possibly on several lines]
% echo baz
baz
```

The typical reason to use a transient prompt is to show additional information in the current prompt than in past prompts. That's how Hometown's works by default. The default Hometown transient prompt

- displays on one consolidated line with all inactive components hidden, and does not add a blank line before the prompt. This saves vertical space.
- moves the prompt character from the start of the command line to the start of prompt. This makes it easy to copy and paste prior commands.
- appends the time the command was run — looks like `16:48:41-16:49:29` (`timeDrawn-timeRun`). This can be helpful when revisiting history.

## Customizing

You can customize the transient prompt with the same options as the regular prompt. Declare them within `HOMETOWN_TRANSIENT_PROMPT_CONTEXT`. See [Options](./options.md).

Hometown can (and by default does) set `psvar`, providing some values which may be useful in transient prompt customization. See [Options](./options.md) and zsh's official [prompt expansion conditional substrings documentation](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Conditional-Substrings-in-Prompts).

## Performance

Disabling transient prompt may reduce first prompt lag (time from the start of the shell to appearance of the prompt) by less than 10ms, first command lag (time from the start of the shell to the soonest the first interactive command can start executing) by approximately 20ms, and command lag (the time between pressing <kbd>Enter</kbd> on a blank line and the next prompt appearing) by less than 15ms, as measured by [zsh-bench](https://github.com/romkatv/zsh-bench/).
