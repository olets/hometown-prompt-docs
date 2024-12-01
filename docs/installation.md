# Installation

## Package

Hometown is available on Homebrew. Run

```shell:no-line-numbers
brew install olets/tap/hometown-prompt
```

and follow the post-install instructions logged to the terminal.

:::tip
`brew upgrade` will upgrade you to the latest version, even if it's a major version change.

Want to stay on this major version until you _choose_ to upgrade to the next? When installing hometown-prompt with Homebrew for the first time, run

```shell:no-line-numbers
brew install olets/tap/hometown-prompt@3
```

If you've already installed `olets/tap/hometown-prompt` with Homebrew, you can switch to the v5 formula by running

```shell:no-line-numbers
brew uninstall --force hometown-prompt && brew install olets/tap/hometown-prompt@3
```

:::

## Plugin

You can install hometown-prompt with a zsh plugin manager, including those built into frameworks such as Oh-My-Zsh (OMZ) and prezto. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

:::tip
Want to stay on this major version until you _choose_ to upgrade to the next? Use your package manager's convention for specifying the branch `v3`.
:::

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell:no-line-numbers
exec zsh
```

## Manual

- Either download the archive of the release of your choice from <https://github.com/olets/hometown-prompt/releases> and expand it (ensures you have the latest official release)
- or clone a single branch:
  ```shell:no-line-numbers
  git clone https://github.com/olets/hometown-prompt --single-branch --branch <branch> --depth 1
  ```
  Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v3` (for releases in this major version).

Then put the file `hometown.zsh-theme` in a directory in your `PATH`, and restart zsh:

```shell:no-line-numbers
exec zsh
```
