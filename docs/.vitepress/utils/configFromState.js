export default function (configObj) {
  let customizedEntries = [];

  for (let entry of Object.entries(configObj)) {
    const key = entry[0];
    const option = entry[1];

    if (option.value?.custom && option.value.default !== option.value.custom) {
      customizedEntries.push(`${key}="${option.value.custom}"`);
    }
  }

  return customizedEntries.join("\n");
}
