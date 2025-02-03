# Integrations

## zsh4humans

Hometown may work with [zsh4humans](https://github.com/romkatv/zsh4humans).

::: warning Warning

Note that zsh4humans (z4h) expects you to use powerlevel10k. In my brief testing the below solution _seems_ to work, but I'm looking for the prompt to be correct, not testing z4h.

romkatv has this to say about disabling powerlevel10k in z4h:

<blockquote>
<p>
[The zsh4humans option to disable powerlevel10k] is meant for debugging. I can offer no guarantees, even informally, about the functionality of z4h when you disable powerlevel10k. If anything breaks, you'll be on your own.
</p>

<footer>
<cite>

Source: [zsh4humans#296 (comment)](https://github.com/romkatv/zsh4humans/issues/296#issuecomment-2019576289)

</cite>
</footer>
</blockquote>
:::

Out of the box, `z4h install` —the zsh4humans plugin management feature— does not support zsh-abbr.

One workaround is to extend `z4h install` with a postinstall hook.

If you can and are willing to use Git in the hook, try this:

```shell
# .zshrc

function z4h-reinstall-with-github-git-clone() {
  [[ -n $Z4H_PACKAGE_DIR && -n $Z4H_PACKAGE_NAME ]] && 'command' -v git 1>/dev/null || return 1
  'command' 'rm' -rf $Z4H_PACKAGE_DIR
  'command' 'git' clone --recurse-submodules --single-branch --depth 1 https://github.com/$Z4H_PACKAGE_NAME $Z4H_PACKAGE_DIR
}

# disable powerlevel10k
zstyle :z4h:powerlevel10k channel none

# disable z4h's "you're in debug mode" right prompt
RPROMPT=

z4h install olets/hometown-prompt || return
zstyle :z4h:olets/hometown-prompt postinstall z4h-reinstall-with-github-git-clone || return
z4h load olets/hometown-prompt
```

Or you can write a custom script. Read [Installation&nbsp;>&nbsp;Manual](/installation.md#manual)'s note on GitHub's REST API. You'll indentify the latest release's associated tag, use that to determine the archive URL to download, and then extract the archive into `Z4H_PACKAGE_DIR`. The following pattern is recommended. (Contributions of a full solution are welcome.)

```shell
# .zshrc

z4h-postinstall:reinstall() {
  # If called via `zstyle :z4h:<package> postinstall`,
  # will have access to
  # - $Z4H_PACKAGE_DIR, the location of the installed package
  # - $Z4H_PACKAGE_NAME, the package argument passed to `z4h install`

  # 1. Delete the `z4h install`-downloaded copy of $Z4H_PACKAGE_NAME
  rm -rf $Z4H_PACKAGE_DIR

  # 2. Download a different copy of $Z4H_PACKAGE_NAME to $Z4H_PACKAGE_DIR
  # TODO
}

z4h install olets/hometown-prompt || return
zstyle :z4h:hometown-prompt postinstall z4h-postinstall:reinstall
z4h load olets/hometown-prompt
```
