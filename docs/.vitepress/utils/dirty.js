import { getValue } from "./value.js";

export function dirty({
  directoryGitRepo,
  gitStatusConflicted,
  gitStatusDeleted,
  gitStatusDeletedStaged,
  gitStatusModified,
  gitStatusModifiedStaged,
  gitStatusNew,
  gitStatusUntracked,
}) {
  if (!directoryGitRepo) {
    return 0;
  }

  const dirty =
    [
      gitStatusConflicted,
      gitStatusDeleted,
      gitStatusDeletedStaged,
      gitStatusModified,
      gitStatusModifiedStaged,
      gitStatusNew,
      gitStatusUntracked,
    ]
      .map((context) => getValue(context))
      .filter((val) => !!val).length > 0;

  return Number(dirty);
}
