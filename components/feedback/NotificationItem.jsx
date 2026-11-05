import React from 'react';
import { Icon } from '../core/Icon';

const NOTIF_TONES = {
  offer: ['var(--cp-amber-50)', 'var(--cp-amber-800)'],
  info: ['var(--cp-teal-50)', 'var(--cp-teal-600)'],
  success: ['var(--cp-green-50)', 'var(--cp-green-600)'],
  danger: ['var(--cp-red-50)', 'var(--cp-red-600)'],
  neutral: ['var(--cp-bg-sunken)', 'var(--cp-text-secondary)'],
};

export function NotificationItem({ icon = 'bell', tone = 'neutral', title, body, time, unread = false, onClick }) {
  const [press, setPress] = React.useState(false);
  const [bg, fg] = NOTIF_TONES[tone] || NOTIF_TONES.neutral;
  return (
    <button type="button" onClick={onClick}
      onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
      style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%', display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 10px', gap: '12px', alignItems: 'start', padding: '12px', borderRadius: 'var(--cp-radius-md)', background: unread ? 'var(--cp-neutral-25)' : 'transparent', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', textAlign: 'start', transform: press ? 'scale(0.985)' : 'none', transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease' }}>
      <span style={{ width: '44px', height: '44px', borderRadius: '50%', background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={20} /></span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
        <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '14.5px', fontWeight: unread ? 600 : 500, lineHeight: 1.3 }}>{title}</span>
          <span style={{ fontSize: '11.5px', color: 'var(--cp-text-secondary)', whiteSpace: 'nowrap', flex: 'none' }}>{time}</span>
        </span>
        {body && <span style={{ fontSize: '13px', lineHeight: 1.45, color: 'var(--cp-text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{body}</span>}
      </span>
      <span aria-label={unread ? 'Unread' : undefined} style={{ width: '8px', height: '8px', borderRadius: '50%', marginTop: '6px', background: unread ? 'var(--cp-teal-600)' : 'transparent' }}></span>
    </button>
  );
}
