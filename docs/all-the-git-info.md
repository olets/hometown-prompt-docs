# All the Git info

Hometown packs a _lot_ of Git state information into a short, legible prompt.

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
- The first **tag** pointing to the current commit, if there is one
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
