import { getValue } from "./value";

function getChar(data) {
  return getValue(data.context.data.userRoot)
    ? getValue(data.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT)
    : getValue(data.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL);
}

export { getChar };
