import React from 'react';
import { StatusChip } from './StatusChip';
import { Money } from '../core/Money';

export function PaymentScheduleRow({ day, month, title, detail, amount, currency = 'AED', status = 'upcoming', statusLabel, current = false, onClick }) {
  const [press, setPress] = React.useState(false);
  const interactive = typeof onClick === 'function';
  const Tag = interactive ? 'button' : 'div';
  const tone = status === 'overdue' ? 'danger' : status === 'paid' ? 'muted' : 'default';
  return (
    <Tag
      type={interactive ? 'button' : undefined} onClick={onClick}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
      style={{
        all: interactive ? 'unset' : undefined,
        display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) auto', gap: '12px', alignItems: 'center',
        minHeight: '68px', padding: '12px 14px', width: '100%', boxSizing: 'border-box', textAlign: 'start',
        background: 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-md)',
        boxShadow: current ? '0 0 0 1.5px var(--cp-text-primary)' : 'var(--cp-shadow-card)',
        cursor: interactive ? 'pointer' : 'default', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)',
        transform: press ? 'scale(0.985)' : 'none', transition: 'transform var(--cp-dur-fast) var(--cp-ease)',
      }}
    >
      <div style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1px', background: current ? 'var(--cp-bg-inverse)' : 'var(--cp-bg-sunken)', color: current ? '#fff' : 'var(--cp-text-primary)' }}>
        <span style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{day}</span>
        <span style={{ fontSize: '9.5px', fontWeight: 500, lineHeight: 1.1, opacity: 0.8 }}>{month}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
        <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.3 }}>{title}</span>
        {detail && <span style={{ fontSize: '12.5px', color: status === 'overdue' ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)', lineHeight: 1.4 }}>{detail}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
        <Money amount={amount} currency={currency} tone={tone} />
        <StatusChip status={status} label={statusLabel} size="sm" />
      </div>
    </Tag>
  );
}
