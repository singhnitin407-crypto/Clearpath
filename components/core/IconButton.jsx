import React from 'react';
import { Icon } from './Icon';

const ICONBTN_VARIANTS = {
  surface: { bg: 'var(--cp-bg-surface)', hover: 'var(--cp-neutral-25)', fg: 'var(--cp-text-primary)', shadow: 'var(--cp-shadow-card)' },
  soft: { bg: 'var(--cp-action-soft)', hover: 'var(--cp-action-soft-hover)', fg: 'var(--cp-text-primary)', shadow: 'none' },
  inverse: { bg: 'var(--cp-action-primary)', hover: 'var(--cp-action-primary-hover)', fg: '#fff', shadow: 'none' },
  glass: { bg: 'var(--cp-bg-glass)', hover: 'rgba(255,255,255,0.2)', fg: '#fff', shadow: 'none' },
};

export function IconButton({ icon, label, onClick, variant = 'surface', size = 'md', badge = false, badgeCount = 0 }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = ICONBTN_VARIANTS[variant] || ICONBTN_VARIANTS.surface;
  const d = size === 'sm' ? 44 : 48;
  return (
    <button
      type="button" aria-label={badgeCount > 0 ? `${label} (${badgeCount})` : label} title={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ width: d + 'px', height: d + 'px', borderRadius: '50%', border: 'none', padding: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', flex: 'none', background: hover ? v.hover : v.bg, color: v.fg, boxShadow: v.shadow, transform: press ? 'scale(0.94)' : 'none', transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease' }}
    >
      <Icon name={icon} size={20} />
      {badge && <span aria-hidden="true" style={{ position: 'absolute', top: '11px', insetInlineEnd: '12px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--cp-status-overdue)', boxShadow: '0 0 0 2px ' + (variant === 'surface' ? '#fff' : 'transparent') }}></span>}
      {badgeCount > 0 && <span aria-hidden="true" style={{ position: 'absolute', top: '4px', insetInlineEnd: '2px', minWidth: '20px', height: '20px', padding: '0 5px', boxSizing: 'border-box', borderRadius: '10px', background: 'var(--cp-status-overdue)', color: '#fff', fontSize: '11px', fontWeight: 600, lineHeight: '20px', textAlign: 'center', fontFamily: 'var(--cp-font-text)', boxShadow: '0 0 0 2px var(--cp-bg-page)' }}>{badgeCount > 9 ? '9+' : badgeCount}</span>}
    </button>
  );
}
