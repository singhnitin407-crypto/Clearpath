import React from 'react';
import { Icon } from './Icon';

export function Button({ variant = 'primary', size = 'md', children, icon, iconEnd, onClick, disabled = false, fullWidth = false, type = 'button' }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const h = hover && !disabled;
  const variants = {
    primary: { background: h ? 'var(--cp-action-primary-hover)' : 'var(--cp-action-primary)', color: 'var(--cp-action-primary-text)' },
    accent: { background: h ? 'var(--cp-teal-400)' : 'var(--cp-action-accent)', color: 'var(--cp-action-accent-text)' },
    soft: { background: h ? 'var(--cp-action-soft-hover)' : 'var(--cp-action-soft)', color: 'var(--cp-text-primary)' },
    inverse: { background: h ? 'var(--cp-neutral-25)' : '#ffffff', color: 'var(--cp-text-primary)' },
    ghost: { background: h ? 'rgba(22,24,29,0.05)' : 'transparent', color: 'var(--cp-text-link)' },
  };
  return (
    <button
      type={type} onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--cp-font-text)', fontSize: size === 'sm' ? '14px' : '15px', fontWeight: 500, lineHeight: 1.2,
        minHeight: size === 'sm' ? 'var(--cp-touch-min)' : 'var(--cp-touch-comfortable)', padding: size === 'sm' ? '0 18px' : '0 24px',
        borderRadius: 'var(--cp-radius-pill)', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: fullWidth ? '100%' : 'auto',
        boxSizing: 'border-box', opacity: disabled ? 0.4 : 1, whiteSpace: 'nowrap',
        transform: press && !disabled ? 'scale(0.97)' : 'none',
        transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease',
        ...(variants[variant] || variants.primary),
      }}
    >
      {icon && <Icon name={icon} size={18} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={18} />}
    </button>
  );
}
