# Transient prompt

Hometown has a "transient prompt" feature. When transient prompt is enabled (as it is by default), the current command line gets a distinct prompt.

## The effect

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

:::warning Heads up
There's an edge case where prompts have different content depending on whether transient prompt is enabled.

It comes up when changing the Git state from outside the terminal.

Suppose you have a Git repo with one unstaged modified file. You open that directory in two terminals. Both terminals prompt's reflect the one unstaged modified file. Now in the first terminal you run `git add -A`. The first terminal now has a new prompt reflecting one staged modified file; the second terminal still has its prompt reflecting one _unstaged_ modified file. Now hit <kbd>Enter</kbd> in the second prompt.

The second terminal's current prompt now reflects the one staged modified file. But there's a difference: with transient prompt disabled (and in Hometown v3) the second terminal's _previous_ prompt still reflects one _unstaged_ modified file, but with transient prompt enabled has been updated to reflect one _staged_ modified file.

If you don't like that behavior, disable transient prompt: set `HOMETOWN_USE_TRANSIENT_PROMPT=0`.

If you like that behavior but don't want a distinct transient prompt, disable the distinct transient prompt: set `HOMETOWN_DISTINCT_TRANSIENT_PROMPT=0` (leaving `HOMETOWN_USE_TRANSIENT_PROMPT` at its default `1`).
:::

## Customizing

You can customize the transient prompt with the same options as the regular prompt. Declare them within `HOMETOWN_TRANSIENT_PROMPT_CONTEXT`. See [Options](./options.md).

Hometown can (and by default does) set `psvar`, providing some values which may be useful in transient prompt customization. See [Options](./options.md) and zsh's official [prompt expansion conditional substrings documentation](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Conditional-Substrings-in-Prompts).

## Performance

Disabling transient prompt may reduce first prompt lag (time from the start of the shell to appearance of the prompt) by less than 10ms, first command lag (time from the start of the shell to the soonest the first interactive command can start executing) by approximately 20ms, and command lag (the time between pressing <kbd>Enter</kbd> on a blank line and the next prompt appearing) by less than 15ms, as measured by [zsh-bench](https://github.com/romkatv/zsh-bench/).
