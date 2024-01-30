const formatter = new Intl.NumberFormat(undefined, { notation: 'compact' });

export function formatNumber(value: number) {
  return formatter.format(value);
}