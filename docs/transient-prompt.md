# Transient prompt

Hometown has a "transient prompt" feature. When transient prompt is enabled (as it is by default), the current command line gets a distinct prompt.

<!--@include: ./parts/screencast.md  -->

The typical reason to use a transient prompt is to show additional information in the current prompt than in past prompts. That's how Hometown's works by default. The default Hometown transient prompt

- is on one line (saves space)
- hides all inactive components (saves space)
- is not preceded by a linebreak (saves space)
- moves the prompt character from the start of the command line to the start of prompt (makes it easy to copy and paste prior commands)
- appends the time the command was run — looks like "HH:MM:SS prompt drawn timestamp - HH:MM:SS next command execution start timestamp" (can be helpful when revisiting history)
  - if the two were on different days, dates are added— "MM/DD/YY HH:MM:SS prompt drawn timestamp - MM/DD/YY HH:MM:SS next command execution start timestamp"

::: tip
You can configure your prompt to show the same timestamp range as the default transient prompt. See [the recipe](/timestamp-range-in-prompt.md).
:::

## Customizing

You can customize the transient prompt with the same options as the regular prompt. Declare them within `HOMETOWN_TRANSIENT_PROMPT_ENV`. See [Options](/options.md).

Hometown can (and by default does) set `psvar`, providing some values which may be useful in transient prompt customization. See [Options](/options.md) and zsh's official [prompt expansion conditional substrings documentation](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Conditional-Substrings-in-Prompts).

## Performance

Disabling transient prompt may reduce first prompt lag (time from the start of the shell to appearance of the prompt) by less than 10ms, first command lag (time from the start of the shell to the soonest the first interactive command can start executing) by approximately 20ms, and command lag (the time between pressing <kbd>Enter</kbd> on a blank line and the next prompt appearing) by less than 15ms, as measured by [zsh-bench](https://github.com/romkatv/zsh-bench/).

## Nota bene

There's an edge case where prompts have different content depending on whether transient prompt is enabled.

It comes up when changing the Git state from outside the terminal.

Suppose you have a Git repo with one unstaged modified file. You open that directory in two terminals. In both terminals the prompt reflect the one unstaged modified file. Now in the first terminal you run `git add -A`. The first terminal now has a new prompt reflecting one staged modified file; the second terminal still has its prompt reflecting one _unstaged_ modified file. Now hit <kbd>Enter</kbd> in the second prompt.

The second terminal's current prompt now reflects the one staged modified file. But there's a difference: with transient prompt disabled (and in Hometown v3) the second terminal's _previous_ prompt still reflects one _unstaged_ modified file, but with transient prompt enabled it has been updated to reflect one _staged_ modified file.
