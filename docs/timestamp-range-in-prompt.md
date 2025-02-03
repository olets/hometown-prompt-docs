# Timestamp range in prompt

To use to the same timestamp range as the [transient prompt](/transient-prompt), which is

> prompt drawn timestamp - next command execution start timestamp

if the two are on the same day, and

> prompt drawn date and timestamp - next command execution start date and timestamp

if they are on different days, set `HOMETOWN_CUSTOM` to `'%(5V.%4v %v - %W %*.%v-%*)'` before loading Hometown.

```shell
# .zshrc

HOMETOWN_CUSTOM='%(5V.%4v %v - %W %*.%v-%*)'
# and then load hometown-prompt here
```
