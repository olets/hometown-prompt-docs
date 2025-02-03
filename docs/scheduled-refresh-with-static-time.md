# Scheduled refresh with static time

The default `HOMETOWN_CUSTOM`'s timestamp becomes dynamic when [scheduled refresh](/scheduled-refresh) is enabled.

If you want the prompt's timestamp to remain static, set `HOMETOWN_CUSTOM` to `'%v'` before or after loading Hometown. (Requires that `HOMETOWN_SET_PSVAR` (default `1`) be non-zero.)

```shell:no-line-numbers
# .zshrc

HOMETOWN_CUSTOM='%v'
# and then load Hometown here
```
