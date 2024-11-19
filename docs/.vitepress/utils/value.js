import { optionsData } from "../stores/options";

function getDefault(data) {
  let ret = data?.value?.default || null;

  if (
    data?.value?.verboseDefault !== undefined &&
    data?.value?.verboseDefault !== null &&
    getValue(optionsData.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS)
  ) {
    ret = data.value.verboseDefault;
  }

  return ret;
}

function getValue(data, fallbackData) {
  function val(data) {
    let ret;

    const type = data?.type || "string";

    if (data?.value?.custom !== undefined && data?.value?.custom !== null) {
      ret = data?.value?.custom;
    } else {
      ret = getDefault(data);
    }

    if (type.includes("integer")) {
      ret = parseInt(ret);
    }

    return ret;
  }

  return val(data) || val(fallbackData) || null;
}

export { getDefault, getValue };
