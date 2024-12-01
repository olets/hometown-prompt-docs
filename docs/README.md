# Hometown Prompt ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/olets/hometown-prompt) ![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/olets/hometown-prompt/latest)

:::danger Heads Up
v4 is coming. If you do advanced configuration, read [the v3.x -> v4.x migration guide](https://v4.hometown-prompt.olets.dev/migrating-between-versions) and/or read about [pinning v3.x](./installation.md).
:::

![splash card: the text 'Hometown Prompt' as pink cursive neon lettering](/images/hometown-prompt-splash-card.png)

**Hometown is a feature rich, high performance Git-aware zsh theme** with segments for the user, host, time, the current working directory and its parent, and —within a Git repo— detailed Git status. It is carefully designed to show a lot of information clearly.

## How does it look?

You can **customize** symbols and colors, **hide** inactive segments, **hide** certain segments always, and **choose** how many lines the prompt takes up. Given your configuration, the content shown and the colors it's shown in **changes based on** which user is logged in, whether the previous command succeeded, and whether you're in a Git repo — and, if so, the Git status.

:::tip TRY IT OUT!
The following are only _some_ of the possibilities. Want multiple lines and inactive Git segments hidden? One line, words for some things, icons for others? You can have those —and others— too.

If you aren't ready to install it and try it for real, play with the [interactive web demo](./demo.md) 🎨
:::

Here are some static examples to start with, using the default colors and default symbol sets. In each, Hometown Prompt is telling us that we're logged in as one of our usual users on one of our usual hosts, the user is not root, the previous command succeeded, the current directory is the Git repo `hometown-prompt`, the branch `main` is checked out, `main` pushes and pulls from `origin/main`, we're 15 commits ahead of the remote, there are seven stashes, and there are three untracked files.

Default (Git ref on first line, no inactive Git ref segments, no extended Git status, default symbols, inactive Git status segments visible)

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-default.png)

More concise (inactive Git status segments hidden, active extended Git status segments visible, everything on one line).

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-short.png)

Less concise (Git ref and status each on their own line, inactive Git ref segments visible, active extended Git status segments visible, inactive Git status segments hidden, verbose default symbols)

![Hometown Prompt screenshot, default configuration](/images/hometown-prompt-long.png)

Or go completely custom!

![Hometown Prompt screenshot, custom configuration](/images/hometown-prompt-custom.png)

:::tip Something else to try
The window title in the screenshots above is thanks to [zsh-window-title](https://github.com/olets/zsh-window-title)
:::

## What data is represented?

Always:

- The **current user**, if not one you've configured as hidden, and whether they are **root**
- The **current host**, if not one you've configured as hidden
- The **time** the prompt was drawn and/or **user-configured content**
- The **current working directory** (the maximum number of path segments above the CWD is configurable)
- Whether the **previous command** succeeded

If in a Git repo:

- the **repo root directory, underlined** (the maximum number directories above the CWD is configurable)
- If in a subdirectory of the repo, the **subdirectory name** (the maximum number of directories listed between the Git root and the CWD is configurable)
- If HEAD is detached, the **checked out commit**. Text color is dependent on whether or not the index is dirty
- If a branch is checked out:
  - The name of the **checked out branch**. Text color is dependent on whether or not the index is dirty
  - If the checked out branch does not have a remote tracking branch, a symbol indicating that it is **local only**
  - If the checked out branch has an upstream (that is, [`@{upstream}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtupstreamemegemmasterupstreamememuem)),
    - The number of **commits ahead of the upstream** the local branch is. Optionally show the indicator even if the local branch is not ahead of the upstream.
    - The number of **commits behind the upstream** the local branch is. Optionally show the indicator even if the local branch is not behind the upstream.
    - The **upstream's remote**, if different from the user-configured default
    - The **upstream's name**, if different from the local branch's
    - Text color is dependent on context and status:
      - If no distinct push remote, colored if the local is either ahead or behind
      - If there a distinct push remote, colored if the local is behind
  - If the checked out branch has a push remote (that is, [`@{push}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtpushemegemmasterpushemempushem)) different from the upstream,
    - The number **commits ahead of the push remote** the local branch is. Optionally show the indicator even if the local branch is not ahead of the push remote.
    - The number **commits behind the push remote** the local branch is. Optionally show the indicator even if the local branch is not behind the push remote.
    - The **push remote's remote**, if different from the user-configured default
    - (The push branch's name is not shown, even if it differs from the local name. Want it to be? Weigh in at [olets/hometown-prompt/#14](https://github.com/olets/hometown-prompt/issues/14))
- The first **tag** pointing to the current commit, if any
- The number of **untracked ("new") files**. Optionally show the accompanying symbol when there are no such files.
- The number of **conflicted files**. Optionally show the accompanying symbol when there are no such files.
- The number of **unstaged deleted files**. Optionally show the accompanying symbol when there are no such files.
- The number of **unstaged modified files**. Optionally show the accompanying symbol when there are no such files.
- The number of **staged new files**. Optionally show the accompanying symbol when there are no such files.
- The number of **staged deleted files**. Optionally show the accompanying symbol when there are no such files.
- The number of **staged modified files**. Optionally show the accompanying symbol when there are no such files.
- The name of the **ongoing action** (for example "rebase"), if any
- Optionally:
  - The **number of stashes**. Optionally show the accompanying symbol when there are no such files.
  - The **number of files with the assume-unchanged bit set**. Optionally show the accompanying symbol when there are no such files.
  - The **number of files with the skip-worktree bit set**. Optionally show the accompanying symbol when there are no such files.
