# Installation

## Package

### Homebrew

hometown-prompt is available on Homebrew. Run

```shell
brew install olets/tap/hometown-prompt
```

and follow the post-install instructions logged to the terminal.

:::tip
`brew upgrade` will upgrade you to the latest version, even if it's a major version change.

Want to stay on this major version until you _choose_ to upgrade to the next? When installing hometown-prompt with Homebrew for the first time, run

```shell
brew install olets/tap/hometown-prompt@4
```

If you've already installed `olets/tap/hometown-prompt` with Homebrew, you can switch to the v4 formula by running

```shell
brew uninstall --force hometown-prompt && brew install olets/tap/hometown-prompt@4
```

:::

## Plugin

You can install hometown-prompt with a zsh plugin manager, including those built into frameworks such as Oh-My-Zsh (OMZ) and prezto. Each has their own way of doing things. Read your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

:::warning
v4 is compatible with most but not all plugin managers in the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a). If your plugin manager is not compatible, you can still install hometown-prompt [manually](#manual) or [with Homebrew](#homebrew).

<details><summary>Click to show/hide details for various package managers.</summary>

- **Antigen**: may be incompatible (if you have a working solution, please suggest an edit).

- **zgem**: consider upvoting the [open issue](https://github.com/qoomon/zgem/issues/2) and [open PR](https://github.com/qoomon/zgem/pull/3) which would unlock support.

- **zgen**: specify the `main` branch:

  ```shell
  zgen load olets/hometown-prompt . main
  ```

- **zit**: specify the `main` branch:

  ```shell
  zit-install "https://github.com/olets/hometown-prompt#main" ".hometown-prompt"
  ```

- **zplug** may be incompatible (if you have a working solution, please suggest an edit).

- **zr**: 🆕 compatible as of zr v1.2.0 (December 10, 2024).

  - If you haven't added hometown-prompt to your zr plugins yet, update zr first:

    ```shell
    cargo install zr
    ```

    and then update your `.zshrc`.

  - If you've already added hometown-prompt to your zr plugins in your `.zshrc` and a "problem installing dependencies" message was logged to your terminal: update zr, then delete zr's cached copy of hometown-prompt, and finally restart the shell to have zr install a fresh copy of hometown-prompt.

    ```shell
    cargo install zr
    rm -rf $ABBR_SOURCE_PATH
    exec zsh
    ```

- **zsh4humans**: refer to the [zsh4humans integration](/integrations.md#zsh4humans).

</details>
:::

:::tip
Want to stay on this major version until you _choose_ to upgrade to the next? Use your package manager's convention for specifying the branch `v4`.
:::

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell
exec zsh
```

## Manual

:::warning Heads up
Getting a warning "There was a problem finishing installing dependencies"? If you cloned the Git repo, make sure you initialized the plugin's submodules. A simple solution is to pass `--recurse-submodules` when `git clone`ing.
:::

- Either download the archive of the release of your choice from <https://github.com/olets/hometown-prompt/releases> and expand it (ensures you have the latest official release). Follow the release notes: you want the file at

  ```
  https://github.com/olets/hometown-prompt/releases/download/<version>/<version>.tar.gz
  ```

  _not_ one of the ones at

  ```
  https://github.com/olets/hometown-prompt/archive/refs/tags/<version>.<extension>
  ```

  :::tip Want to automate downloading an archive?
  Advanced users can script downloading the latest release's tarball without depending on Git.

  <details>
  <summary>Click to display details.</summary>

  One way is to use the GitHub REST API to find the latest release's associated tag, and then download the associated release's same-named asset. Learn more in GitHub's ["Get the latest release" REST API docs](https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#get-the-latest-release).

  ```json
  // JSON response

  {
    // ...
    "tag_name": // …
    // ...
  }
  ```

  The URL pattern for the correct tarball to download is:

  ```
  https://github.com/olets/hometown-prompt/releases/download/<latest release's tag name>/<latest release's tag name>.tar.gz
  ```

  </details>
  :::

- or clone a single branch:

  ```shell
  git clone https://github.com/olets/hometown-prompt --recurse-submodules --single-branch --branch <branch> --depth 1
  ```

  Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v4` (for releases in this major version).

Then add `source path/to/hometown.zsh-theme` to your `.zshrc` (replace `path/to/` with the real path), and restart zsh:

```shell
exec zsh
```

### Updating

If you downloaded an archive, download the latest and update your `.zshrc` if necessary.

If you cloned the repo, `cd` into the clone and run

```shell
git pull --recurse-submodules --depth 1
```
