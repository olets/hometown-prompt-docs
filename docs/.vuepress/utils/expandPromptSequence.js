const replacements = {
  "%%": "%",
  "%)": ")",
  "%#": "%",
  "%?": "0",
  "%_": "for cmdsubst",
  "%^": "cmdsubst for",
  "%~": "~/olets/hometown-prompt",
  "%*": "11:31:05",
  "%M": "olets.lan",
  "%m": "olets",
  "%n": "olets",
  "%y": "ttys050",
  "%d": "/Users/olets/hometown-prompt",
  "%e": "0",
  "%h": "14948",
  "%i": "16",
  "%I": "16",
  "%j": "0",
  "%L": "1",
  "%N": "-zsh",
  "%x": "-zsh",
  "%c": "hometown-prompt",
  "%D": "24-09-17",
  "%T": "11:28",
  "%t": "11:28AM",
  "%w": "Tue 17",
  "%W": "09/17/24",
};

function expandPromptSequence(input) {
  // trim leading/trailing quotes
  let ret = input.replace(/^\$/, "").replace(/^['"]/, "").replace(/['"]$/, "");

  ret = ret.replaceAll("\\n", "");

  for (const [key, value] of Object.entries(replacements)) {
    ret = ret.replaceAll(key, value);
  }

  return ret;
}

export { expandPromptSequence };
