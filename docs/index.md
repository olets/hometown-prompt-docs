# Hometown Prompt ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/olets/hometown-prompt) ![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/olets/hometown-prompt/latest)

![splash card: the text 'Hometown Prompt' as pink cursive neon lettering](/images/hometown-prompt-splash-card.png)

**Hometown is a feature rich, high performance Git-aware zsh theme** with segments for the user, host, time, the current working directory and its parent, and —within a Git repo— detailed Git status. It is carefully designed to show a lot of information clearly.

<!--@include: ./parts/screencast.md -->

## Appearance

By default it looks something like this. Time, current working directory, and Git ref info on the first line (using symbols, with inactive status data points hidden); Git file info on the second (using symbols, with disabled symbols for inactive status data points); and the prompt character on the third.

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-default.png)

It has numerous layout and content toggles.

For example you can mix and match line break options, hidden/disabled options, and word/symbol options in any way you like.

With very little configuration it can look, for example, like this. Time, current working directory, Git ref info (using symbols, with inactive status data points hidden); and Git file info (using symbols, with inactive status data points hidden) on the first line; and the prompt character on the second.

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-short.png)

Or like this. Time and current working directory on the first line; Git ref info (using words, with disabled symbols for inactive branch data points) on the second line; Git file info (using words, with inactive status data points hidden) on the third line; and the prompt character on the fourth.

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-long.png)

You can also customize colors, text, symbols, and the slot which in these screenshots is the time. Here's just one of the infinite possibilities:

![Hometown Prompt screenshot, custom configuration](/images/hometown-prompt-custom.png)
