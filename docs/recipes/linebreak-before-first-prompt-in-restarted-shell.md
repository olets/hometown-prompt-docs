# Linebreak before first prompt in restarted shell

If `HOMETOWN_LINEBREAK_BEFORE_PROMPT` (default: `1`) is non-zero, a blank line will be added before every prompt.

```shell:no-line-numbers

[first prompt] …

[second prompt] …

[third prompt] …
```

If `HOMETOWN_SET_PSVAR` (default: `1`) _and_ `HOMETOWN_NO_LINEBREAK_BEFORE_FIRST_PROMPT` (default: `1`) are also non-zero, the first prompt of each session will _not_ have a blank line before it.

```shell:no-line-numbers
[first prompt]

[second prompt]

[third prompt]
```

That's nice when opening a new terminal: it won't start with extraneous blank line.

The downside is that if you start a fresh session in an open terminal, for example by running `exec zsh`, the new session's first prompt won't have a blank link above it.

```shell:no-line-numbers
[first prompt]

[second prompt] exec zsh
[new session's first prompt]
```

Hometown does not have a built-in way around this.

Here's what I do. It works for me. It probably has some rough edge cases. If you only run `exec` on the command line to run `exec zsh`, it may work for you too:

Alias `exec` such that `exec zsh` adds a blank line:

```shell
# .zshrc

exec_with_conditional_linebreak() {
  if [[ $* == 'zsh' ]]; then
    printf '\n'
  fi

  exec $*
}

alias echo=exec_with_conditional_linebreak
```
