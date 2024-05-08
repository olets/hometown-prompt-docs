# Customizability

You can **customize** symbols and colors, **hide** inactive segments, **hide** certain segments always, and **choose** how many lines the prompt takes up. Given your configuration, the content shown and the colors it's shown in **changes based on** which user is logged in, whether the previous command succeeded, and whether you're in a Git repo — and, if so, the Git status.

:::tip TRY IT OUT!
The following are only _some_ of the possibilities. Want multiple lines and inactive Git segments hidden? One line, words for some things, icons for others? You can have those —and others— too.

If you aren't ready to install it and try it for real, play with the [interactive web demo](./demo.md) 🎨
:::

Here are some static examples to start with, using the default colors and default symbol sets. In each, Hometown Prompt is telling us that we're logged in as one of our usual users on one of our usual hosts, the user is not root, the previous command succeeded, the current directory is the Git repo `hometown-prompt`, the branch `main` is checked out, `main` pushes and pulls from `origin/main`, we're 15 commits ahead of the remote, there are seven stashes, and there are three untracked files.

Default (Git ref on first line, no inactive Git ref segments, no extended Git status, default symbols, inactive Git status segments visible)

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-default.png)

:::tip Something else to try
The window title in these screenshots is thanks to [zsh-window-title](https://github.com/olets/zsh-window-title)
:::

&nbsp;

More concise (inactive Git status segments hidden, active extended Git status segments visible, everything on one line).

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-short.png)

Less concise (Git ref and status each on their own line, inactive Git ref segments visible, active extended Git status segments visible, inactive Git status segments hidden, verbose default symbols)

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-long.png)

Or go completely custom!

![Hometown Prompt screenshot, custom configuration](/images/hometown-prompt-custom.png)
