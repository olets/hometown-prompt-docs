# Installation

## Package

Hometown is available on Homebrew. Run

```shell:no-line-numbers
brew install olets/tap/hometown-prompt
```

and follow the post-install instructions logged to the terminal.

## Plugin

You can install Hometown with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell:no-line-numbers
exec zsh
```

## Manual

- Either download the archive of the release of your choice from <https://github.com/olets/hometown-prompt/releases> and expand it (ensures you have the latest official release)

- or clone a single branch:

  ```shell
  git clone https://github.com/olets/hometown-prompt --recurse-submodules --single-branch --branch <branch> --depth 1
  ```

  Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v3` (for releases in this major version).

Then add `source path/to/hometown.zsh-theme` to your `.zshrc` (replace `path/to/` with the real path), and restart zsh:

```shell
exec zsh
```
