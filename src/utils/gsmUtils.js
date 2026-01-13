const GSM_EXTENDED = new Set(["|", "^", "{", "}", "[", "]", "~", "\\"]);

export function detectEncoding(text) {
  for (let char of text) {
    if (char.charCodeAt(0) > 127) {
      return "UNICODE";
    }
  }
  return "GSM";
}

export function countGsmCharacters(text) {
  let count = 0;
  for (let char of text) {
    count += GSM_EXTENDED.has(char) ? 2 : 1;
  }
  return count;
}
