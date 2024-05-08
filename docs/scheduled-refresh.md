# Scheduled Refresh

Hometown can update the prompt on a schedule.

By default, this feature is _disabled_. Set `HOMETOWN_REFRESH_INTERVAL` to a positive integer to refresh dynamic data every `HOMETOWN_REFRESH_INTERVAL` seconds.

:::tip Note
It's conceivable that a combining small `HOMETOWN_REFRESH_INTERVAL` with many open terminals could hurt performance. There have not been any reports of trouble, but keep it in mind.
:::
