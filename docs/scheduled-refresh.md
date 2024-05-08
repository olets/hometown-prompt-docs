# Scheduled Refresh

Hometown can update the prompt on a schedule.

By default, this feature is _disabled_. Set `HOMETOWN_REFRESH_INTERVAL` to a positive integer to enable it.

Once enabled, the prompt's dynamic content will update every `HOMETOWN_REFRESH_INTERVAL` seconds. With the default configuration, the Git content is dynamic, but the timestamp is not.

To make the timestamp dynamic, set `HOMETOWN_CUSTOM='%*'`. (Note that with that configuration the displayed timestamp can be up to 59 seconds behind the actual clock. If you need greater precision, you could show decimal fractions of a second. See the zsh prompt substitution docs' [section on date and time](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Date-and-time)).

:::tip
It's conceivable that a combining small `HOMETOWN_REFRESH_INTERVAL` with many open terminals could hurt performance. There have not been any reports of trouble, but keep it in mind.
:::
