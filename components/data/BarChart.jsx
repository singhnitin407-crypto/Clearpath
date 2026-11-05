import React from 'react';
import { Money } from '../core/Money';

export function BarChart({ title, value, valueCurrency, caption, data = [], highlightIndex, formatValue, tone = 'light', height = 150, action }) {
  const fmt = formatValue || ((v) => v.toLocaleString('en-US'));
  const [sel, setSel] = React.useState(highlightIndex ?? data.length - 1);
  const [grown, setGrown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => { setSel(highlightIndex ?? data.length - 1); }, [highlightIndex, data.length]);
  React.useEffect(() => { if (grown) return; const id = setTimeout(() => setGrown(true), 20); return () => clearTimeout(id); }, []);
  const dark = tone === 'dark';
  const max = Math.max(1, ...data.map((d) => d.value));
  const c = dark
    ? { bg: 'var(--cp-bg-inverse)', fg: '#fff', muted: 'var(--cp-text-on-dark-muted)', bar: 'var(--cp-chart-bar-on-dark)', hi: 'var(--cp-chart-highlight-on-dark)', tipBg: '#fff', tipFg: 'var(--cp-text-primary)', grid: 'rgba(255,255,255,0.1)' }
    : { bg: 'var(--cp-bg-surface)', fg: 'var(--cp-text-primary)', muted: 'var(--cp-text-secondary)', bar: 'var(--cp-chart-bar)', hi: 'var(--cp-chart-highlight)', tipBg: 'var(--cp-bg-inverse)', tipFg: '#fff', grid: 'var(--cp-border-subtle)' };
  const cols = `repeat(${data.length}, minmax(0,1fr))`;
  // Long labels (e.g. Arabic month names) in narrow columns: show only ends + selected
  const plotH = height - 30;
  const showAllLabels = data.length <= 6 || data.every((d) => String(d.label).length <= 4);

  return (
    <div style={{ background: c.bg, color: c.fg, borderRadius: 'var(--cp-radius-lg)', boxShadow: dark ? 'none' : 'var(--cp-shadow-card)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--cp-font-text)', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 }}>
          {title && <span style={{ fontSize: '14px', color: c.muted }}>{title}</span>}
          {value != null && (valueCurrency ? <Money amount={value} currency={valueCurrency} size="xl" tone={dark ? 'inverse' : 'default'} /> : <span style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.1 }}>{value}</span>)}
          {caption && <span style={{ fontSize: '12.5px', color: c.muted }}>{caption}</span>}
        </div>
        {action}
      </div>
      <div dir="ltr" style={{ position: 'relative', height: height + 'px', paddingTop: '30px', boxSizing: 'border-box' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '30px 0 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ borderTop: '1px dashed ' + c.grid }}></span>)}
        </div>
        <div style={{ position: 'relative', height: '100%', display: 'grid', gridTemplateColumns: cols, gap: '8px' }}>
          {data.map((d, i) => {
            const on = i === sel;
            const px = grown ? (Math.max(6, (d.value / max) * 100) / 100) * plotH : 0;
            return (
              <button key={d.label + i} type="button" aria-label={`${d.label}: ${fmt(d.value)}`} aria-pressed={on} onClick={() => setSel(i)} style={{ all: 'unset', cursor: 'pointer', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <span style={{ position: 'relative', width: '100%', maxWidth: '30px', height: px + 'px', borderRadius: '10px', background: on ? c.hi : c.bar, transition: `height var(--cp-dur-slow) var(--cp-ease) ${i * 30}ms, background var(--cp-dur-base) ease` }}>
                  {on && <span style={{ position: 'absolute', top: '6px', left: '50%', width: '6px', height: '6px', marginLeft: '-3px', borderRadius: '50%', background: c.bg }}></span>}
                </span>
                {on && (
                  <span style={{ position: 'absolute', left: '50%', bottom: (px + 8) + 'px', transform: 'translateX(-50%)', background: c.tipBg, color: c.tipFg, fontSize: '11px', fontWeight: 600, lineHeight: 1, padding: '6px 8px', borderRadius: 'var(--cp-radius-pill)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', transition: 'bottom var(--cp-dur-slow) var(--cp-ease)', zIndex: 1 }}>{fmt(d.value)}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div dir="ltr" style={{ display: 'grid', gridTemplateColumns: cols, gap: '8px' }}>
        {data.map((d, i) => { const show = showAllLabels || i === sel || i === 0 || i === data.length - 1; return <span key={i} style={{ textAlign: 'center', fontSize: '11px', lineHeight: 1.2, color: i === sel ? c.fg : c.muted, fontWeight: i === sel ? 600 : 400, whiteSpace: 'nowrap', overflow: 'visible', visibility: show ? 'visible' : 'hidden' }}>{d.label}</span>; })}
      </div>
    </div>
  );
}
