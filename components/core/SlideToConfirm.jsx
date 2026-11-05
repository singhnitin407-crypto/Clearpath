import React from 'react';
import { Icon } from './Icon';

export function SlideToConfirm({ label, onConfirm, rtl }) {
  const track = React.useRef(null);
  const startX = React.useRef(0);
  const moved = React.useRef(false);
  const [x, setX] = React.useState(0);
  const [drag, setDrag] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const KNOB = 84, PAD = 6;
  const max = () => (track.current ? track.current.offsetWidth - KNOB - PAD * 2 : 200);
  const finish = () => { setX(max()); setDone(true); setTimeout(onConfirm, 320); };
  const down = (e) => { if (done) return; startX.current = e.clientX; moved.current = false; setDrag(true); if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId); };
  const move = (e) => { if (!drag) return; let dx = e.clientX - startX.current; if (rtl) dx = -dx; if (Math.abs(dx) > 4) moved.current = true; setX(Math.max(0, Math.min(max(), dx))); };
  const up = () => { if (!drag) return; setDrag(false); if (x > max() * 0.82) finish(); else setX(0); };
  const progress = Math.min(1, x / (max() || 1));
  return (
    <div ref={track} role="button" tabIndex={0} aria-label={label}
      onClick={() => { if (moved.current) { moved.current = false; return; } if (!done) finish(); }}
      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !done) { e.preventDefault(); finish(); } }}
      style={{ position: 'relative', height: '64px', borderRadius: 'var(--cp-radius-pill)', background: 'var(--cp-bg-inverse)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', userSelect: 'none', touchAction: 'none', overflow: 'hidden' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, insetInlineStart: 0, width: (KNOB + PAD * 2 + x) + 'px', background: 'rgba(127,216,198,0.14)', borderRadius: 'var(--cp-radius-pill)', transition: drag ? 'none' : 'width var(--cp-dur-base) var(--cp-ease)' }}></span>
      <span style={{ position: 'relative', fontSize: '16px', fontWeight: 600, paddingInlineStart: KNOB / 2 + 'px', opacity: 1 - progress * 0.85, whiteSpace: 'nowrap' }}>{label}</span>
      <span onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
        style={{ position: 'absolute', top: PAD + 'px', insetInlineStart: PAD + 'px', width: KNOB + 'px', height: (64 - PAD * 2) + 'px', borderRadius: 'var(--cp-radius-pill)', background: 'var(--cp-action-accent)', color: 'var(--cp-action-accent-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(127,216,198,0.35)', cursor: drag ? 'grabbing' : 'grab', transform: `translateX(${rtl ? -x : x}px)`, transition: drag ? 'none' : 'transform var(--cp-dur-base) var(--cp-ease)' }}>
        <Icon name={done ? 'check' : rtl ? 'arrow-left' : 'arrow-right'} size={24} />
      </span>
    </div>
  );
}
