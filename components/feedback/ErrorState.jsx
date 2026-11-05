import React from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';

const ERR_TONES = {
  danger: ['var(--cp-red-50)', 'rgba(196,55,45,0.14)', 'var(--cp-red-600)'],
  warning: ['var(--cp-amber-50)', 'rgba(122,67,0,0.14)', 'var(--cp-amber-800)'],
  info: ['var(--cp-teal-50)', 'rgba(20,122,110,0.12)', 'var(--cp-teal-600)'],
  neutral: ['var(--cp-bg-sunken)', 'var(--cp-neutral-200)', 'var(--cp-text-secondary)'],
};

export function ErrorState({ icon = 'circle-alert', tone = 'danger', title, children, details = [], code, actionLabel, onAction, actionIcon, secondaryLabel, onSecondary, compact = false }) {
  const [bg, ring, fg] = ERR_TONES[tone] || ERR_TONES.danger;
  const d = compact ? 84 : 112;
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px', padding: compact ? '8px 4px 4px' : '24px 8px 8px', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', boxSizing: 'border-box' }}>
      <span aria-hidden="true" style={{ position: 'relative', width: d + 'px', height: d + 'px', borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <span style={{ position: 'absolute', inset: compact ? '11px' : '15px', borderRadius: '50%', boxShadow: '0 0 0 1px ' + ring }}></span>
        <span style={{ position: 'relative', width: (compact ? 48 : 60) + 'px', height: (compact ? 48 : 60) + 'px', borderRadius: '50%', background: '#fff', color: fg, boxShadow: '0 4px 14px rgba(22,24,29,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={compact ? 22 : 26} /></span>
      </span>
      <h3 style={{ margin: 0, fontSize: compact ? '18px' : '21px', fontWeight: 600, lineHeight: 1.25, textWrap: 'balance' }}>{title}</h3>
      {children && <p style={{ margin: 0, maxWidth: '300px', fontSize: '14px', lineHeight: 1.5, color: 'var(--cp-text-secondary)', textWrap: 'pretty' }}>{children}</p>}
      {details.length > 0 && (
        <div style={{ alignSelf: 'stretch', marginTop: '10px', background: 'var(--cp-bg-sunken)', borderRadius: 'var(--cp-radius-md)', padding: '4px 14px', textAlign: 'start' }}>
          {details.map(([l, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', minHeight: '42px', fontSize: '13.5px', borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none' }}>
              <span style={{ color: 'var(--cp-text-secondary)' }}>{l}</span><span style={{ fontWeight: 500, textAlign: 'end' }}>{v}</span>
            </div>
          ))}
        </div>
      )}
      {(actionLabel || secondaryLabel) && (
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '14px' }}>
          {actionLabel && <Button fullWidth icon={actionIcon} onClick={onAction}>{actionLabel}</Button>}
          {secondaryLabel && <Button variant="ghost" fullWidth onClick={onSecondary}>{secondaryLabel}</Button>}
        </div>
      )}
      {code && <span dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '11.5px', color: 'var(--cp-text-secondary)', marginTop: '4px' }}>{code}</span>}
    </div>
  );
}

export function OfflineBar({ title, label, actionLabel, onAction }) {
  return (
    <div role="status" style={{ display: 'grid', gridTemplateColumns: '36px minmax(0,1fr) auto', alignItems: 'center', gap: '12px', padding: '10px', paddingInlineStart: '12px', borderRadius: 'var(--cp-radius-md)', background: 'var(--cp-bg-inverse)', color: '#fff', fontFamily: 'var(--cp-font-text)', boxShadow: '0 6px 18px rgba(22,24,29,0.16)' }}>
      <span aria-hidden="true" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="wifi-off" size={17} /></span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: 0 }}>
        {title && <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.3 }}>{title}</span>}
        {label && <span style={{ fontSize: '12px', lineHeight: 1.35, color: 'var(--cp-text-on-dark-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
      </span>
      {actionLabel && <button type="button" onClick={onAction} style={{ all: 'unset', cursor: 'pointer', boxSizing: 'border-box', minHeight: '44px', display: 'inline-flex', alignItems: 'center', margin: '-4px 0' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '34px', padding: '0 12px', borderRadius: 'var(--cp-radius-pill)', background: 'rgba(255,255,255,0.14)', color: '#fff', fontSize: '13px', fontWeight: 600 }}><Icon name="rotate-cw" size={13} />{actionLabel}</span></button>}
    </div>
  );
}
