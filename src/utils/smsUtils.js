export function calculateSmsParts(length, encoding) {
  if (encoding === "GSM") {
    return length <= 160 ? 1 : Math.ceil(length / 153);
  } else {
    return length <= 70 ? 1 : Math.ceil(length / 67);
  }
}
