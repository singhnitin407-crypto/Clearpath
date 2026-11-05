import React from 'react';

export function SegmentedControl({ options = [], value, onChange, tone = 'light', size = 'md', fullWidth = false, label }) {
  const n = options.length || 1;
  const idx = Math.max(0, options.findIndex((o) => o.value === value));
  const dark = tone === 'dark';
  const inner = size === 'sm' ? 36 : 40;
  return (
    <div role="tablist" aria-label={label} style={{ position: 'relative', display: fullWidth ? 'grid' : 'inline-grid', gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, padding: '4px', borderRadius: 'var(--cp-radius-pill)', background: dark ? 'var(--cp-bg-glass)' : 'var(--cp-bg-surface)', boxShadow: dark ? 'none' : 'var(--cp-shadow-card)', boxSizing: 'border-box', fontFamily: 'var(--cp-font-text)' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: '4px', bottom: '4px', insetInlineStart: `calc(4px + (100% - 8px) * ${idx} / ${n})`, width: `calc((100% - 8px) / ${n})`, borderRadius: 'var(--cp-radius-pill)', background: dark ? 'var(--cp-action-accent)' : 'var(--cp-action-primary)', transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)' }}></span>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button key={o.value} type="button" role="tab" aria-selected={on} onClick={() => onChange && onChange(o.value)}
            style={{ all: 'unset', position: 'relative', zIndex: 1, cursor: 'pointer', minHeight: inner + 'px', padding: '0 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', whiteSpace: 'nowrap', fontSize: size === 'sm' ? '13.5px' : '14.5px', fontWeight: 500, color: on ? (dark ? 'var(--cp-action-accent-text)' : '#fff') : (dark ? '#fff' : 'var(--cp-text-secondary)'), transition: 'color var(--cp-dur-base) ease' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
