import React from 'react';
import { Icon } from '../core/Icon';
import { Money } from '../core/Money';

const TL_STATUS = {
  paid: { icon: 'circle-check', bg: 'var(--cp-green-50)', fg: 'var(--cp-green-600)' },
  overdue: { icon: 'circle-alert', bg: 'var(--cp-red-50)', fg: 'var(--cp-red-600)' },
  upcoming: { icon: 'clock', bg: 'var(--cp-bg-sunken)', fg: 'var(--cp-text-secondary)' },
};

export function InstalmentTimeline({ title, summary, items = [], currency = 'AED', action, statusLabels = {} }) {
  return (
    <section style={{ background: 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-lg)', boxShadow: 'var(--cp-shadow-card)', padding: title ? '18px 16px 6px' : '4px 16px', display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', boxSizing: 'border-box' }}>
      {(title || summary || action) && (
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{title}</h2>
            {summary && <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--cp-text-secondary)', lineHeight: 1.4 }}>{summary}</span>}
          </div>
          {action && <div style={{ marginTop: '-8px', marginInlineEnd: '-8px' }}>{action}</div>}
        </header>
      )}
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => {
          const st = TL_STATUS[it.status] || TL_STATUS.paid;
          return (
            <li key={it.id ?? i} style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr) auto', columnGap: '12px', alignItems: 'center', minHeight: '68px', padding: '12px 0', boxSizing: 'border-box', borderTop: i === 0 ? 'none' : '1px solid var(--cp-border-subtle)' }}>
              <span aria-hidden="true" style={{ width: '40px', height: '40px', borderRadius: '50%', background: st.bg, color: st.fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={st.icon} size={19} /></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
                <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.25 }}>{it.title}</span>
                {it.meta && <span style={{ fontSize: '12.5px', fontWeight: 400, lineHeight: 1.35, color: it.status === 'overdue' ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)' }}>{it.meta}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
                <Money amount={it.amount} currency={currency} size="md" weight={600} tone={it.status === 'overdue' ? 'danger' : 'default'} />
                <span style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.2, color: st.fg }}>{statusLabels[it.status] ?? it.status}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
