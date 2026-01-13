export function extractValidNumbers(input) {
  const numbers = input
    .split(/[\s,]+/)
    .map(n => n.trim())
    .filter(n => /^[6-9]\d{9}$/.test(n));

  return [...new Set(numbers)];
}
