# Scheduled refresh

Hometown can update the prompt on a schedule.

:::warning
It's possible that your battery will drain more quickly if scheduled refresh is enabled. How many terminals you have open at a time may be a factor. Effect may vary by computer model.
:::

By default, this feature is _disabled_. Set `HOMETOWN_REFRESH_INTERVAL` to a positive integer to refresh dynamic data every `HOMETOWN_REFRESH_INTERVAL` seconds.

With scheduled refresh enabled, the Git info and the time will be updated periodically, rather than set once.

If `HOMETOWN_SET_PSVAR` is zero, the time shown in the prompt will be static even if scheduled refresh is enabled. However, setting `HOMETOWN_SET_PSVAR` to zero also interferes with the default transient prompt. If you want to use the default transient prompt, and have periodically updated Git info, and have static time, follow the [Scheduled refresh with static time](./recipes/scheduled-refresh-with-static-time.md) recipe.
