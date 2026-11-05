import React from 'react';
import { Money } from '../core/Money';
import { Icon } from '../core/Icon';

const TREND_TONE = {
  good: ['var(--cp-trend-good)', 'var(--cp-trend-good-bg)'],
  bad: ['var(--cp-trend-bad)', 'var(--cp-trend-bad-bg)'],
  neutral: ['var(--cp-trend-neutral)', 'var(--cp-trend-neutral-bg)'],
};
const TREND_ICON = { up: 'arrow-up-right', down: 'arrow-down-right', flat: 'minus' };

export function MetricTrend({ label, value, currency, delta, trend = 'flat', sentiment = 'neutral', data, chart = 'bars', highlightIndex, caption }) {
  const [grown, setGrown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => { if (grown) return; const id = setTimeout(() => setGrown(true), 20); return () => clearTimeout(id); }, []);
  const [fg, bg] = TREND_TONE[sentiment] || TREND_TONE.neutral;
  const has = Array.isArray(data) && data.length > 1;
  const max = has ? Math.max(...data, 1) : 1;
  const hi = highlightIndex ?? (has ? data.length - 1 : -1);
  let points = null;
  if (has && chart === 'line') {
    const min = Math.min(...data), r = max - min || 1;
    points = data.map((d, i) => `${((i / (data.length - 1)) * 100).toFixed(2)},${(30 - ((d - min) / r) * 26).toFixed(2)}`).join(' ');
  }
  return (
    <div style={{ background: 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-lg)', boxShadow: 'var(--cp-shadow-card)', padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, boxSizing: 'border-box', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)' }}>
      <span style={{ fontSize: '13px', color: 'var(--cp-text-secondary)', lineHeight: 1.3 }}>{label}</span>
      {currency
        ? <Money amount={value} currency={currency} size="lg" />
        : <bdi dir={typeof value === 'number' ? 'ltr' : undefined} style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{value}</bdi>}
      {has && chart === 'bars' && (
        <div dir="ltr" aria-hidden="true" style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '36px', marginTop: '2px' }}>
          {data.map((d, i) => (
            <span key={i} style={{ flex: 1, borderRadius: '4px', height: grown ? Math.max(10, (d / max) * 100) + '%' : '0%', background: i === hi ? 'var(--cp-chart-highlight)' : 'var(--cp-chart-bar)', transition: `height var(--cp-dur-slow) var(--cp-ease) ${i * 25}ms` }}></span>
          ))}
        </div>
      )}
      {points && (
        <svg dir="ltr" viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', height: '36px', display: 'block' }}>
          <polyline points={points} fill="none" stroke="var(--cp-chart-highlight)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      )}
      {delta && (
        <span style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '4px', height: '24px', padding: '0 9px 0 7px', borderRadius: 'var(--cp-radius-pill)', background: bg, color: fg, fontSize: '12px', fontWeight: 500, whiteSpace: 'nowrap' }}>
          <Icon name={TREND_ICON[trend] || TREND_ICON.flat} size={13} />
          <bdi>{delta}</bdi>
        </span>
      )}
      {caption && <span style={{ fontSize: '12px', color: 'var(--cp-text-secondary)', lineHeight: 1.4 }}>{caption}</span>}
    </div>
  );
}
