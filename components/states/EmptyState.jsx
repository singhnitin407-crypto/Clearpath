import React from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';

export function EmptyState({ icon = 'file-text', title, children, actionLabel, onAction, actionIcon, secondaryLabel, onSecondary, compact = false, tone = 'teal' }) {
  const ring = tone === 'neutral' ? ['var(--cp-bg-sunken)', 'var(--cp-neutral-100)', 'var(--cp-text-secondary)'] : ['var(--cp-teal-50)', 'rgba(20,122,110,0.10)', 'var(--cp-teal-600)'];
  const d = compact ? 76 : 104;
  return (
    <div style={{ background: compact ? 'transparent' : 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-lg)', boxShadow: compact ? 'none' : 'var(--cp-shadow-card)', padding: compact ? '12px 8px 4px' : '28px 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', boxSizing: 'border-box' }}>
      <span aria-hidden="true" style={{ position: 'relative', width: d + 'px', height: d + 'px', borderRadius: '50%', background: ring[0], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
        <span style={{ position: 'absolute', inset: compact ? '10px' : '14px', borderRadius: '50%', boxShadow: '0 0 0 1px ' + ring[1] }}></span>
        <span style={{ position: 'relative', width: (compact ? 44 : 56) + 'px', height: (compact ? 44 : 56) + 'px', borderRadius: '50%', background: '#fff', color: ring[2], boxShadow: '0 4px 14px rgba(22,24,29,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={compact ? 20 : 24} /></span>
      </span>
      <h3 style={{ margin: 0, fontSize: compact ? '16px' : 'var(--cp-size-title)', fontWeight: 600, lineHeight: 1.3 }}>{title}</h3>
      {children && <p style={{ margin: 0, maxWidth: '270px', fontSize: compact ? '13px' : '14px', lineHeight: 1.5, color: 'var(--cp-text-secondary)', textWrap: 'pretty' }}>{children}</p>}
      {(actionLabel || secondaryLabel) && (
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', width: compact ? '100%' : 'auto' }}>
          {actionLabel && <Button variant={compact ? 'primary' : 'soft'} size="sm" icon={actionIcon} fullWidth={compact} onClick={onAction}>{actionLabel}</Button>}
          {secondaryLabel && <Button variant="ghost" size="sm" onClick={onSecondary}>{secondaryLabel}</Button>}
        </div>
      )}
    </div>
  );
}
