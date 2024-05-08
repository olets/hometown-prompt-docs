# Scheduled refresh with static time

The default `HOMETOWN_CUSTOM`'s timestamp becomes dynamic when [scheduled refresh](../scheduled-refresh.md) is enabled.

If you want the prompt's timestamp to remain static, set `HOMETOWN_CUSTOM` to `'%v'` before or after loading Hometown.

```shell:no-line-numbers
HOMETOWN_CUSTOM='%v'
# and then load Hometown here
```

To make the default `HH:MM:SS` timestamp dynamic, set `HOMETOWN_CUSTOM` to `'%*'` before or after loading Hometown. (Note that with that configuration the displayed timestamp can be up to 59 seconds behind the actual clock. If you need greater precision, you could show decimal fractions of a second. See the zsh prompt substitution docs' [section on date and time](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Date-and-time)).

```shell
# .zshrc
HOMETOWN_CUSTOM='%*'
```
