# Troubleshooting

If you get a momentary error

> There was problem finishing installing Hometown

the mostly likely cause is a Git submodules initialization problem.

Try this to fix it:

1. `cd` to the `hometown-prompt` directory

1. Run

   ```shell
   git submodule update --remote --recursive --init
   exec zsh
   ```

If that fixes it, run `exec zsh` in any other open terminals.
