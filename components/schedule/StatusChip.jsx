import React from 'react';

const CHIP_TONES = {
  paid: { bg: 'var(--cp-status-paid)', fg: '#ffffff', label: 'Paid', mark: 'dot' },
  overdue: { bg: 'var(--cp-status-overdue)', fg: '#ffffff', label: 'Overdue', mark: 'square' },
  upcoming: { bg: 'var(--cp-status-upcoming-bg)', fg: 'var(--cp-status-upcoming)', label: 'Upcoming', mark: 'ring' },
};

export function StatusChip({ status = 'upcoming', label, size = 'md', onDark = false }) {
  let t = CHIP_TONES[status] || CHIP_TONES.upcoming;
  if (onDark && status !== 'overdue') t = { ...t, bg: 'rgba(255,255,255,0.16)', fg: '#ffffff' };
  const mark = {
    width: '6px', height: '6px', flex: 'none', boxSizing: 'border-box',
    borderRadius: t.mark === 'square' ? '1px' : '50%',
    background: t.mark === 'ring' ? 'transparent' : t.fg,
    border: t.mark === 'ring' ? '1.5px solid ' + t.fg : 'none',
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', height: size === 'sm' ? '22px' : '26px', padding: size === 'sm' ? '0 9px' : '0 11px', borderRadius: 'var(--cp-radius-pill)', background: t.bg, color: t.fg, fontFamily: 'var(--cp-font-text)', fontSize: size === 'sm' ? '11.5px' : '12.5px', fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap', boxSizing: 'border-box' }}>
      <span aria-hidden="true" style={mark}></span>
      {label ?? t.label}
    </span>
  );
}
