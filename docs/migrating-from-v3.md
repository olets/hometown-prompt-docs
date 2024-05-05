# Migrating from v3

- [Transient prompt](./transient-prompt.md), new in v4, is enabled by default. To disable it, keeping the v3 behavior, set `HOMETOWN_USE_TRANSIENT_PROMPT=0` before loading Hometown.
  ```shell
  HOMETOWN_USE_TRANSIENT_PROMPT=0
  # load hometown
  ```
- v3 inserted a line break after the `GIT_PROMPT_KIT_CHAR`, and a space after it. v4 does not. If in v3 you did not customize `GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL` or `GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT`, no action is necessary (v4 customizes both, appending a space to Git Prompt Kit's defaults). If in v3 you _did_ customize `GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL` or `GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT`, update you custom value(s): prepend a line break (note the necessary `$` in the example below), and append a space.

  ```shell
  # v3
  GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL='x'

  # v4
  GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL=$'\nx '
  ```
