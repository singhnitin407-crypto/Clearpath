import React from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';

const ALERT_VARIANTS = {
  info: { bg: 'var(--cp-alert-info-bg)', fg: 'var(--cp-text-primary)', body: 'var(--cp-text-secondary)', iconBg: 'var(--cp-alert-info-icon-bg)', iconFg: 'var(--cp-alert-info-icon)', icon: 'info', shadow: 'var(--cp-shadow-card)', role: 'status' },
  warning: { bg: 'var(--cp-alert-warning-bg)', fg: 'var(--cp-text-primary)', body: 'var(--cp-text-secondary)', iconBg: 'var(--cp-alert-warning-icon-bg)', iconFg: 'var(--cp-alert-warning-icon)', icon: 'clock', shadow: 'none', role: 'status' },
  action: { bg: 'var(--cp-alert-action-bg)', fg: 'var(--cp-alert-action-text)', body: 'var(--cp-alert-action-body)', iconBg: 'var(--cp-alert-action-icon-bg)', iconFg: 'var(--cp-alert-action-icon)', icon: 'circle-alert', shadow: 'inset 0 0 0 1px rgba(196,55,45,0.22)', role: 'alert', strip: true },
};

export function AlertBanner({ variant = 'info', icon, label, title, children, actionLabel, onAction, onDismiss, dismissLabel = 'Dismiss', badge, highlight, highlightPrefix, saving }) {
  const v = ALERT_VARIANTS[variant] || ALERT_VARIANTS.info;
  const [shown, setShown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => { if (shown) return; const id = setTimeout(() => setShown(true), 20); return () => clearTimeout(id); }, []);
  const enter = { opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(6px)', transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)' };

  if (variant === 'offer') {
    // Compact coupon: percentage stub | perforation | offer copy + net AED saving
    const notch = { position: 'absolute', insetInlineStart: '-7px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--cp-bg-page)' };
    return (
      <div role="status" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '88px minmax(0,1fr)', minHeight: '88px', borderRadius: 'var(--cp-radius-md)', overflow: 'hidden', background: 'var(--cp-amber-50)', boxShadow: '0 1px 2px rgba(122,67,0,0.06), 0 6px 18px rgba(196,120,0,0.12)', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', ...enter }}>
        <div style={{ background: 'linear-gradient(160deg, #ffd99a 0%, var(--cp-amber-300) 100%)', color: 'var(--cp-amber-800)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px', padding: '8px 4px' }}>
          {highlightPrefix && <span style={{ fontSize: '11.5px', fontWeight: 500, lineHeight: 1 }}>{highlightPrefix}</span>}
          <bdi dir="ltr" style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>{highlight}</bdi>
        </div>
        <div style={{ position: 'relative', borderInlineStart: '1.5px dashed rgba(122,67,0,0.35)' }}>
          <span aria-hidden="true" style={{ ...notch, top: '-7px' }}></span>
          <span aria-hidden="true" style={{ ...notch, bottom: '-7px' }}></span>
          <button type="button" onClick={onAction} aria-label={actionLabel} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center', paddingBlock: '12px', paddingInlineStart: '14px', paddingInlineEnd: onDismiss ? '36px' : '14px' }}>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
              {(badge || label) && <span style={{ fontSize: '11.5px', fontWeight: 500, color: 'var(--cp-amber-800)', lineHeight: 1.2 }}>{badge || label}</span>}
              {title && <strong style={{ fontSize: v.strip ? '14px' : '15px', fontWeight: 600, lineHeight: 1.3 }}>{title}</strong>}
              {saving && <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--cp-text-secondary)', lineHeight: 1.35 }}>{saving}</span>}
            </span>
          </button>
          {onDismiss && <button type="button" aria-label={dismissLabel} onClick={onDismiss} style={{ all: 'unset', cursor: 'pointer', position: 'absolute', top: '0', insetInlineEnd: '0', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cp-amber-800)' }}><Icon name="x" size={15} /></button>}
        </div>
      </div>
    );
  }
  return (
    <div role={v.role} style={{ background: v.bg, color: v.fg, borderRadius: v.strip ? 'var(--cp-radius-md)' : 'var(--cp-radius-lg)', boxShadow: v.shadow, padding: v.strip ? '12px 14px' : '14px 16px 16px', alignItems: v.strip ? 'center' : undefined, display: 'grid', gridTemplateColumns: v.strip ? '34px minmax(0,1fr)' : onDismiss ? '40px minmax(0,1fr) 32px' : '40px minmax(0,1fr)', columnGap: '12px', rowGap: '12px', fontFamily: 'var(--cp-font-text)', boxSizing: 'border-box', opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(6px)', transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)' }}>
      <span style={{ width: v.strip ? '34px' : '40px', height: v.strip ? '34px' : '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: v.iconBg, color: v.iconFg }}><Icon name={icon || v.icon} size={19} /></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0, paddingTop: '1px' }}>
        {label && <span style={{ fontSize: '12px', fontWeight: 500, color: v.body }}>{label}</span>}
        {title && <strong style={{ fontSize: v.strip ? '14px' : '15px', fontWeight: 600, lineHeight: 1.35 }}>{title}</strong>}
        {children && <div style={{ fontSize: '13.5px', lineHeight: 1.5, color: v.body }}>{children}</div>}
      </div>
      {onDismiss && (
        <button type="button" aria-label={dismissLabel} onClick={onDismiss} style={{ all: 'unset', cursor: 'pointer', width: '44px', height: '44px', margin: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: v.body }}><Icon name="x" size={18} /></button>
      )}
      {actionLabel && (
        <div style={{ gridColumn: '1 / -1', display: 'flex' }}>
          {variant === 'action'
            ? <Button variant="accent" fullWidth onClick={onAction} iconEnd="arrow-right">{actionLabel}</Button>
            : <Button variant="primary" size="sm" onClick={onAction}>{actionLabel}</Button>}
        </div>
      )}
    </div>
  );
}
