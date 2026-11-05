import React from 'react';
import { Icon } from '../core/Icon';

export function BottomNav({ items = [], value, onChange, label = 'Main' }) {
  return (
    <nav aria-label={label} style={{ display: 'inline-flex', gap: '6px', padding: '6px', borderRadius: 'var(--cp-radius-pill)', background: 'var(--cp-bg-inverse)', boxShadow: 'var(--cp-shadow-float)', fontFamily: 'var(--cp-font-text)' }}>
      {items.map((it) => {
        const on = it.key === value;
        return (
          <button key={it.key} type="button" aria-label={it.label} aria-current={on ? 'page' : undefined} onClick={() => onChange && onChange(it.key)}
            style={{ all: 'unset', cursor: 'pointer', height: '48px', minWidth: '48px', boxSizing: 'border-box', paddingInline: on ? '14px 18px' : '0', borderRadius: 'var(--cp-radius-pill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: on ? '8px' : '0', background: on ? 'var(--cp-action-accent)' : 'rgba(255,255,255,0.08)', color: on ? 'var(--cp-action-accent-text)' : '#fff', transition: 'background var(--cp-dur-base) var(--cp-ease), padding var(--cp-dur-base) var(--cp-ease), gap var(--cp-dur-base) var(--cp-ease)' }}>
            <Icon name={it.icon} size={20} />
            <span style={{ maxWidth: on ? '120px' : '0', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '14px', fontWeight: 600, transition: 'max-width var(--cp-dur-base) var(--cp-ease)' }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
