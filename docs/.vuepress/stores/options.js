import { defineStore } from "pinia";
import configFromState from "../utils/configFromState.js";

export const optionsData = {
  // GROUP: Hometown Prompt content
  HOMETOWN_CUSTOM: {
    description:
      "Displayed at the start of the prompt, before the working directory. In the terminal, this is printed with <a href='https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html'>prompt expansion</a> with <code>PROMPT_SUBST</code> and <code>PROMPT_PERCENT</code>. Need it to be dynamic? Define it in a <code>precmd</code> hook.",
    group: "Hometown Prompt content",
    value: {
      default: "'%*'",
    },
    notes:
      "In the terminal, this is printed with <a href='https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html'>prompt expansion</a> with <code>PROMPT_SUBST</code> and <code>PROMPT_PERCENT</code>",
    type: "string",
  },
  HOMETOWN_SHOW_EXTENDED_STATUS: {
    description:
      "If non-zero, show the stash count, assume-unchanged file count, and skip-worktree file count",
    group: "Hometown Prompt content",
    value: { default: "1" },
    type: "integer",
  },
  HOMETOWN_SET_PSVAR: {
    description:
      "If non-zero, Hometown will set the <code>psvar</code> array to ( drawn_time char_color char drawn_date whether_drawn_date_differs_from_today )",
    group: "Hometown Prompt content",
    value: { default: "1" },
    notes:
      "Sets psvar to ( drawn_time char_color char drawn_date whether_drawn_date_differs_from_today )",
    type: "integer",
  },

  // GROUP: Hometown Prompt layout
  HOMETOWN_LINEBREAK_AFTER_GIT_REF: {
    description: "If non-zero, the Git ref info* is followed by a line break",
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
  },
  HOMETOWN_LINEBREAK_BEFORE_PROMPT: {
    description:
      "If non-zero, the prompt is preceded by a line break. See also <a href='/advanced.html'>Advanced</a>.",
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
    notes: "See also <a href='/advanced.html'>Advanced</a>.",
  },
  HOMETOWN_NO_LINEBREAK_BEFORE_FIRST_PROMPT: {
    description:
      "If non-zero, there is no linebreak before the first prompt in a session, regardless of <code>HOMETOWN_LINEBREAK_BEFORE_PROMPT</code>. See also <a href='/advanced.html'>Advanced</a>.",
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
    notes: "See also <a href='/advanced.html'>Advanced</a>.",
  },
  HOMETOWN_NO_LINEBREAK_BEFORE_GIT_REF: {
    description: "If zero, the Git ref info* is preceded by a line break",
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
  },

  // GROUP: Hometown Prompt transient prompt
  HOMETOWN_TRANSIENT_PROMPT_ENV: {
    description:
      "Configuration context applied to transient prompt. Default value assumes <code>HOMETOWN_SET_PSVAR</code> is non-zero.",
    group: "Hometown Prompt transient prompt",
    value: {
      default:
        "( \
        [GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT]-0 \
        [GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND]-1 \
        [GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS]-1 \
        [GIT_PROMPT_KIT_HIDE_TOOL_NAMES]-1 \
        [GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS]-0 \
        [GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL]-$'\n' \
        [GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT]-$'\n' \
        [HOMETOWN_CUSTOM]-'%F{%2v}%3v%f %(5V.%5v %v - %W %*.%v-%*)' \
        [HOMETOWN_LINEBREAK_AFTER_GIT_REF]-0 \
        [HOMETOWN_LINEBREAK_BEFORE_PROMPT]-0 \
        [HOMETOWN_NO_LINEBREAK_BEFORE_GIT_REF]-1 \
      )",
    },
    notes: "Default value assumes <code>HOMETOWN_SET_PSVAR</code> is non-zero.",
    type: "associative array",
  },
  HOMETOWN_USE_TRANSIENT_PROMPT: {
    description: "If non-zero, there will be a transient prompt",
    group: "Hometown Prompt transient prompt",
    value: { default: "1" },
    type: "integer",
  },

  // GROUP: COLOR
  GIT_PROMPT_KIT_COLOR_ACTION: {
    description: "Color of the Git action segment",
    group: "Color",
    value: { default: "199" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
    description: "Color of the Git assumed unchanged files segment",
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_CWD: {
    description: "Color of the current working directory segment",
    group: "Color",
    value: { default: "39" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_FAILED: {
    description:
      "Color of the prompt character when the previous command failed",
    group: "Color",
    value: { default: "88" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_HEAD: {
    description: "Color of the Git HEAD segment when the working tree is dirty",
    group: "Color",
    value: { default: "140" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_HOST: {
    description: "Color of the host segment",
    group: "Color",
    value: { default: "109" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_INACTIVE: {
    description: "Color of inactive segments",
    group: "Color",
    value: { default: "247" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
    description:
      "Color of the Git push remote and its commits-ahead files segment",
    group: "Color",
    value: { default: "111" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_REMOTE: {
    description: "Color of the Git remote and its commits-ahead files segment",
    group: "Color",
    value: { default: "216" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
    description: "Color of the Git skip-worktree files segment",
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_STAGED: {
    description: "Color of Git staged files segment",
    group: "Color",
    value: { default: "120" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_STASH: {
    description: "Color of the Git stashes segment",
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
    description:
      "Color of the prompt character when the previous command succeeded",
    group: "Color",
    value: { default: "76" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_TAG: {
    description: "Color of Git tag segment",
    group: "Color",
    value: { default: "86" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_UNSTAGED: {
    description: "Color of Git unstaged files segment",
    group: "Color",
    value: { default: "162" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_USER: {
    description: "Color of the user segment",
    group: "Color",
    value: { default: "109" },
    notes: "ANSI or hex",
    type: "color",
  },

  // GROUP: BEHAVIOR
  GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
    description:
      "Hide dimmed symbols for the commits ahead of and commits behind the upstream branch when the count is zero? (HIDE if non-zero, SHOW if zero)",
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
    description:
      "Hide dimmed Git stash, assumed-unchanged, and skip-worktree symbols when the count is zero? (HIDE if non-zero, SHOW if zero)",
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
    description:
      'Do not show the word "Git" before the Git ref info? (HIDE if non-zero, SHOW if zero)',
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
    description:
      "Show Git status symbols (dimmed) when the count is zero? (SHOW if non-zero, HIDE if zero)",
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },

  // GROUP: SYMBOL
  GIT_PROMPT_KIT_SYMBOL_AHEAD: {
    description: "Precedes the Git commits-ahead segment",
    group: "Symbol",
    value: {
      default: "+",
      verboseDefault: "ahead ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_AHEAD_INACTIVE: {
    description: "Follows the Git assume-unchanged segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "ahead",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
    description: "Follows the Git assume-unchanged segment",
    group: "Symbol",
    value: {
      default: "⥱ ",
      verboseDefault: " assumed-unchanged",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED_INACTIVE: {
    description: "Follows the Git assume-unchanged segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "assumed-unchanged",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_BEHIND: {
    description: "Precedes the Git commits-behind segment",
    group: "Symbol",
    value: {
      default: "-",
      verboseDefault: "behind ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_BEHIND_INACTIVE: {
    description: "Precedes the Git commits-behind segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "behind",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_BRANCH: {
    description: "Precedes the Git branch",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "branch: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
    description: "Character shown at end of prompt for normal users",
    group: "Symbol",
    value: {
      default: "$'\\n%% '",
    },
    notes: "Rendered as a prompt string. The default renders as <code>%</code>",
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
    description: "Character shown at end of prompt for root users",
    group: "Symbol",
    value: {
      default: "$'\\n# '",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_COMMIT: {
    description: "Precedes the Git commit",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "commit: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
    description: "Follows the Git conflicted files segment",
    group: "Symbol",
    value: {
      default: "UU",
      verboseDefault: " conflicted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CONFLICTED_INACTIVE: {
    description: "Follows the Git conflicted files segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "conflicted",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED: {
    description: "Follows the Git unstaged deleted file segment",
    group: "Symbol",
    value: {
      default: "_D",
      verboseDefault: " deleted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED_INACTIVE: {
    description: "Follows the Git unstaged deleted file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "deleted",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
    description: "Follows the Git staged deleted file segment",
    group: "Symbol",
    value: {
      default: "D_",
      verboseDefault: " staged-deleted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED_INACTIVE: {
    description: "Follows the Git staged deleted file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "staged-deleted",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_HOST: {
    description: "Precedes the host",
    group: "Symbol",
    value: {
      default: "@",
      verboseDefault: " host: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_LOCAL: {
    description: "Shown if the checked out branch has no upstream",
    group: "Symbol",
    value: {
      default: "local",
      verboseDefault: "",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
    description: "Follows the Git unstaged modified file segment",
    group: "Symbol",
    value: {
      default: "_M",
      verboseDefault: " modified",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED_INACTIVE: {
    description: "Follows the Git unstaged modified file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "modified",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
    description: "Follows the Git staged modified file segment",
    group: "Symbol",
    value: {
      default: "M_",
      verboseDefault: " modified-staged",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED_INACTIVE: {
    description: "Follows the Git staged modified file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "modified-staged",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_NEW: {
    description: "Follows Git new file segment",
    group: "Symbol",
    value: {
      default: "A_",
      verboseDefault: " new",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_NEW_INACTIVE: {
    description: "Follows Git new file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "new",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
    description: "Precedes the Git push remote",
    group: "Symbol",
    value: {
      default: "@{push}",
      verboseDefault: "push remote: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_REMOTE: {
    description: "Precedes the Git remote",
    group: "Symbol",
    value: {
      default: "@{u}",
      verboseDefault: "remote: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
    description: "Follows the Git skip-worktree file segment",
    group: "Symbol",
    value: {
      default: "⤳ ",
      verboseDefault: " skip-worktree",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE_INACTIVE: {
    description: "Follows the Git skip-worktree file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "skip-worktree",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_STASH: {
    description: "Follows the Git stash segment",
    group: "Symbol",
    value: {
      default: "⇲",
      verboseDefault: " stashes",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_STASH_INACTIVE: {
    description: "Follows the Git stash segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "stashes",
    },
  },
  GIT_PROMPT_KIT_SYMBOL_TAG: {
    description: "Precedes the Git tag",
    group: "Symbol",
    value: {
      default: "@",
      verboseDefault: "tag: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
    description: "Follows Git untracked file segment",
    group: "Symbol",
    value: {
      default: "??",
      verboseDefault: " untracked",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_UNTRACKED_INACTIVE: {
    description: "Follows Git untracked file segment when inactive",
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "untracked",
    },
  },

  // GROUP: CONTENT
  GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT: {
    description:
      "The maximum number of trailing path components in the <code>GIT_PROMPT_KIT_CWD</code>. Additional components will be ellided with <code>...</code>. If less than zero, show all",
    group: "Content",
    value: { default: 1 },
    type: "integer",
  },
  GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
    description:
      "The default Git push remote when distinct from the pull remote",
    group: "Content",
    value: { default: "upstream" },
    type: "string",
  },
  GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
    description: "The default Git remote",
    group: "Content",
    value: { default: "origin" },
    type: "string",
  },
  GIT_PROMPT_KIT_HIDDEN_HOSTS: {
    description: "Hosts which will not be included in the prompt",
    group: "Content",
    value: { default: "()" },
    notes: "Must be in parentheses",
    type: "array",
  },
  GIT_PROMPT_KIT_HIDDEN_USERS: {
    description: "Users which will not be included in the prompt",
    group: "Content",
    value: { default: "()" },
    notes: "Must be in parentheses",
    type: "array",
  },
  GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT: {
    description:
      "The maximum number of trailing path components in <code>GIT_PROMPT_KIT_REPO_SUBDIRECTORY</code>. Additional components will be ellided with <code>...</code>. If less than zero, show all",
    group: "Content",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS: {
    description:
      "Set to a non-empty string to enable the verbose default symbols",
    group: "Content",
    value: { default: "0" },
    type: "integer",
  },
};

export const useOptionsStore = defineStore("color", {
  state: () => ({
    data: optionsData,
  }),
  getters: {
    customizations: ({ data }) => configFromState(data),
  },
});
