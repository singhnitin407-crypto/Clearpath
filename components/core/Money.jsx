import React from 'react';

const MONEY_SIZES = { sm: [14, 11], md: [16, 12], lg: [22, 14], xl: [28, 16], hero: [38, 18] };
const MONEY_TONES = {
  default: 'var(--cp-text-primary)', saving: 'var(--cp-money-saving)', in: 'var(--cp-money-in)', out: 'var(--cp-money-out)',
  muted: 'var(--cp-text-secondary)', danger: 'var(--cp-status-overdue)', inverse: 'var(--cp-text-on-dark)',
};

export function Money({ amount, currency = 'AED', size = 'md', tone = 'default', sign = '', weight }) {
  const [n, c] = MONEY_SIZES[size] || MONEY_SIZES.md;
  const w = weight ?? (size === 'hero' || size === 'xl' ? 700 : 600);
  const num = typeof amount === 'number' ? amount.toLocaleString('en-US', { maximumFractionDigits: 2 }) : amount;
  return (
    <bdi dir="ltr" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.28em', whiteSpace: 'nowrap', fontFamily: 'var(--cp-font-text)', fontVariantNumeric: 'tabular-nums', color: MONEY_TONES[tone] || MONEY_TONES.default, lineHeight: 1.1, letterSpacing: n >= 28 ? 'var(--cp-tracking-figure)' : '0' }}>
      {sign && <span style={{ fontSize: n + 'px', fontWeight: w }}>{sign}</span>}
      <span style={{ fontSize: c + 'px', fontWeight: 500, letterSpacing: '0.02em' }}>{currency}</span>
      <span style={{ fontSize: n + 'px', fontWeight: w }}>{num}</span>
    </bdi>
  );
}
