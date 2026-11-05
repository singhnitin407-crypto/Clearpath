import React from 'react';
import { StatusChip } from '../schedule/StatusChip';
import { Money } from '../core/Money';
import { Icon } from '../core/Icon';
import { Button } from '../core/Button';

// Credit-card style surface: mint glow, concentric guilloche rings, diagonal sheen, deep-teal base
const HERO_BG = [
  'radial-gradient(120% 90% at 105% -5%, rgba(127,216,198,0.38) 0%, rgba(127,216,198,0) 55%)',
  'radial-gradient(80% 70% at -10% 110%, rgba(76,195,173,0.22) 0%, rgba(76,195,173,0) 60%)',
  'repeating-radial-gradient(circle at 108% -8%, rgba(255,255,255,0) 0 26px, rgba(255,255,255,0.07) 26px 27px)',
  'repeating-linear-gradient(125deg, rgba(255,255,255,0) 0 14px, rgba(255,255,255,0.025) 14px 15px)',
  'linear-gradient(155deg, var(--cp-bg-hero) 0%, var(--cp-bg-hero-deep) 100%)',
].join(', ');

const LOAN_CHIP = { 'on-track': ['paid', 'On track'], 'due-soon': ['upcoming', 'Due soon'], overdue: ['overdue', 'Overdue'], closed: ['upcoming', 'Closed'] };

export function LoanStatusCard({
  status = 'on-track', statusLabel, title = 'Business loan', reference,
  balanceLabel = 'Outstanding balance', balance, currency = 'AED',
  nextLabel, nextDate, nextAmount, nextDetail, note,
  paidCount = 0, totalCount = 0, progressLabel, actions = [], lead = 'balance', payLabel, onPay,
}) {
  const [chip, chipDefault] = LOAN_CHIP[status] || LOAN_CHIP['on-track'];
  const overdue = status === 'overdue';
  const segs = Array.from({ length: totalCount }, (_, i) => (i < paidCount ? 'paid' : overdue && i === paidCount ? 'overdue' : 'open'));
  const segColor = { paid: 'var(--cp-teal-300)', overdue: 'var(--cp-status-overdue)', open: 'rgba(255,255,255,0.16)' };
  const track = totalCount > 0 && (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div role="progressbar" aria-valuemin={0} aria-valuemax={totalCount} aria-valuenow={paidCount} style={{ display: 'flex', gap: '3px', height: '6px' }}>
        {segs.map((s, i) => <span key={i} style={{ flex: 1, borderRadius: '3px', background: segColor[s] }}></span>)}
      </div>
      <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)' }}>{progressLabel ?? `${paidCount} of ${totalCount} instalments paid`}</span>
    </div>
  );

  if (lead === 'payment') {
    return (
      <section style={{ background: HERO_BG, isolation: 'isolate', color: 'var(--cp-text-on-dark)', borderRadius: 'var(--cp-radius-lg)', padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', gap: '18px', fontFamily: 'var(--cp-font-text)', boxSizing: 'border-box' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
            <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.3 }}>{title}</span>
            {reference && <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)', lineHeight: 1.4 }}><bdi>{reference}</bdi></span>}
          </div>
          <StatusChip status={chip} label={statusLabel ?? chipDefault} onDark />
        </header>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: 'var(--cp-text-on-dark-muted)' }}>{nextLabel ?? (overdue ? 'Payment overdue' : 'Next payment')}</span>
          {nextAmount != null && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px 12px' }}>
              <Money amount={nextAmount} currency={currency} size="hero" tone="inverse" />
              {payLabel && <Button variant="accent" size="sm" onClick={onPay}>{payLabel}</Button>}
            </div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 16px', marginTop: '4px', fontSize: '13px', fontWeight: 500 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}><Icon name="calendar" size={14} />{nextDate}</span>
            {(note || nextDetail) && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', color: overdue ? '#ffb4ac' : 'var(--cp-text-on-dark-muted)' }}><Icon name={overdue ? 'circle-alert' : 'repeat'} size={14} />{note || nextDetail}</span>}
          </div>
        </div>
        <div style={{ background: 'var(--cp-bg-glass)', borderRadius: 'var(--cp-radius-md)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)' }}>{balanceLabel}</span>
              <Money amount={balance} currency={currency} size="md" tone="inverse" />
            </div>
            {totalCount > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)' }}>{progressLabel ?? 'Paid'}</span>
                <bdi dir="ltr" style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{paidCount}<span style={{ color: 'var(--cp-text-on-dark-muted)', fontWeight: 500 }}>/{totalCount}</span></bdi>
              </div>
            )}
          </div>
          {totalCount > 0 && (
            <div role="progressbar" aria-valuemin={0} aria-valuemax={totalCount} aria-valuenow={paidCount} style={{ display: 'flex', gap: '3px', height: '6px' }}>
              {segs.map((s, i) => <span key={i} style={{ flex: 1, borderRadius: '3px', background: segColor[s] }}></span>)}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: HERO_BG, isolation: 'isolate', color: 'var(--cp-text-on-dark)', borderRadius: 'var(--cp-radius-lg)', padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', gap: '18px', fontFamily: 'var(--cp-font-text)', boxSizing: 'border-box' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
          <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.3 }}>{title}</span>
          {reference && <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)', lineHeight: 1.4 }}><bdi>{reference}</bdi></span>}
        </div>
        <StatusChip status={chip} label={statusLabel ?? chipDefault} onDark />
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '13px', color: 'var(--cp-text-on-dark-muted)' }}>{balanceLabel}</span>
        <Money amount={balance} currency={currency} size="hero" tone="inverse" />
        {totalCount > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
            <div role="progressbar" aria-valuemin={0} aria-valuemax={totalCount} aria-valuenow={paidCount} style={{ display: 'flex', gap: '3px', height: '6px' }}>
              {segs.map((s, i) => <span key={i} style={{ flex: 1, borderRadius: '3px', background: segColor[s] }}></span>)}
            </div>
            <span style={{ fontSize: '12px', color: 'var(--cp-text-on-dark-muted)' }}>{progressLabel ?? `${paidCount} of ${totalCount} instalments paid`}</span>
          </div>
        )}
      </div>

      <div style={{ background: 'var(--cp-bg-surface)', color: 'var(--cp-text-primary)', borderRadius: 'var(--cp-radius-md)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr) auto', gap: '12px', alignItems: 'center' }}>
          <span style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: overdue ? 'var(--cp-red-50)' : 'var(--cp-teal-50)', color: overdue ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)' }}><Icon name="calendar" size={18} /></span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: 0 }}>
            <span style={{ fontSize: '12px', color: overdue ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)', fontWeight: overdue ? 500 : 400 }}>{nextLabel ?? (overdue ? 'Payment overdue' : 'Next payment')}</span>
            <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.25, whiteSpace: 'nowrap' }}>{nextDate}</span>
          </div>
          {nextAmount != null && <Money amount={nextAmount} currency={currency} size="md" tone={overdue ? 'danger' : 'default'} />}
        </div>
        {(nextDetail || note) && <span style={{ fontSize: '12.5px', lineHeight: 1.45, color: 'var(--cp-text-secondary)', borderTop: '1px solid var(--cp-border-subtle)', paddingTop: '10px' }}>{note || nextDetail}</span>}
      </div>

      {actions.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${actions.length}, minmax(0,1fr))`, gap: '8px' }}>
          {actions.map((a) => (
            <button key={a.label} type="button" onClick={a.onClick} style={{ all: 'unset', cursor: 'pointer', minHeight: '68px', borderRadius: 'var(--cp-radius-sm)', background: 'var(--cp-bg-glass)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, textAlign: 'center', padding: '8px 4px', boxSizing: 'border-box' }}>
              <Icon name={a.icon} size={20} />
              <span style={{ lineHeight: 1.2 }}>{a.label}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
