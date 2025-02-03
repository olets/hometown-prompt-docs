# Linebreak before first prompt in restarted shell

If `HOMETOWN_LINEBREAK_BEFORE_PROMPT` (default: `1`) is non-zero, a blank line will be added before every prompt.

```shell:no-line-numbers

[first prompt] … # preceded by extraneous line break

[second prompt] …

[third prompt] …
```

If `HOMETOWN_SET_PSVAR` (default: `1`) _and_ `HOMETOWN_NO_LINEBREAK_BEFORE_FIRST_PROMPT` (default: `1`) are also non-zero, the first prompt of each session will _not_ have a blank line before it.

```shell:no-line-numbers
[first prompt] # no extraneous line break

[second prompt]

[third prompt]
```

That's nice when opening a new terminal: it won't start with extraneous blank line.

The downside is that if you start a fresh session in an open terminal, for example by running `exec zsh`, the new session's first prompt won't have a blank link above it.

```shell:no-line-numbers
[first prompt] # no extraneous line break

[second prompt] exec zsh
[new session's first prompt] # probably want a preceding line break
```

Hometown does not have a built-in way around this.

Here's what I do. It works for me. It probably has some rough edge cases. If you only run `exec` on the command line to run `exec zsh`, it may work for you too:

Alias `exec` such that `exec zsh` adds a blank line:

```shell
# .zshrc

newline_before_exec_zsh {
  if [[ $1 == 'zsh' ]]; then
    printf '\n'
  fi

  'builtin' 'exec' $*
}

alias exec=newline_before_exec_zsh
```

```shell:no-line-numbers
[first prompt] # no extraneous line break

[second prompt] exec zsh

[new session's first prompt] # preceding line break
```
