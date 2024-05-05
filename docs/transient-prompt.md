# Transient prompt

Hometown Prompt has a "transient prompt" feature. When transient prompt is enabled (as it is by default), the current command line gets a distinct prompt.

Consider you run a series of commands:

```
echo foo
echo bar
echo baz
```

_Without_ transient prompt, your terminal will show

```shell
[Hometown prompt] echo foo
foo

[Hometown prompt] echo bar
bar

[Hometown prompt] echo baz
baz
```

_With_ transient prompt, your terminal will show

```shell
[Hometown transient prompt] echo foo
foo

[Hometown transient prompt] echo bar
bar

[Hometown prompt] echo baz
baz
```

The typical reason to use a transient prompt is to cut down on what information is shown for past prompts. That's how Hometown's works by default. The default Hometown transient prompt

- displays on one consolidated line with all inactive components hidden, and does not separate prompts with a blank line (this saves vertical space)
- moves the prompt character from the command line to the prompt line (this makes it easy to copy and paste prior commands)
- shows, instead of the time the prompt was drawn, the time the prompt was drawn _and_ the time command was run — looks like `16:48:41-16:49:29` (this can be helpful when revisiting history).
