import { ansiOrHexColor } from "./ansiToHex.js";
import { getDefault, getValue } from "./value.js";

export default function (key, target) {
  const { checked, type, value } = target;
  const valid = !target.validity.patternMismatch;
  const pattern = target.getAttribute("pattern");

  target.setCustomValidity("");
  target.reportValidity();

  if (!valid) {
    target.setCustomValidity(`Invalid: must match the pattern /${pattern}/`);
    target.reportValidity();
    return;
  }

  if (type === "checkbox") {
    this.store.data[key].value.custom = checked;
    return;
  }

  if (type === "color") {
    this.store.data[key].value.custom = ansiOrHexColor(value);
    return;
  }

  this.store.data[key].value.custom = value;
  console.log(
    key,
    getValue(this.store.data[key]),
    getDefault(this.store.data[key])
  );
}
