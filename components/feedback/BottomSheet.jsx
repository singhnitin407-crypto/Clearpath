import React from 'react';
import ReactDOM from 'react-dom';

export function BottomSheet({ open, onClose, title, children, container, dir, closeLabel = 'Close' }) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const [drag, setDrag] = React.useState(0);
  const start = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      setMounted(true); setDrag(0);
      const id = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(id);
    }
    setVisible(false);
    const id = setTimeout(() => setMounted(false), 500);
    return () => clearTimeout(id);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);

  if (!mounted) return null;

  const onDown = (e) => { start.current = e.clientY; e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId); };
  const onMove = (e) => { if (start.current != null) setDrag(Math.max(0, e.clientY - start.current)); };
  const onUp = () => { if (start.current == null) return; start.current = null; if (drag > 90 && onClose) onClose(); else setDrag(0); };
  const dragging = start.current != null;

  const node = (
    <div dir={dir} style={{ position: container ? 'absolute' : 'fixed', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', fontFamily: 'var(--cp-font-text)' }}>
      <div onClick={onClose} aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(22,24,29,0.45)', opacity: visible ? 1 : 0, transition: 'opacity var(--cp-dur-sheet) ease' }}></div>
      <div role="dialog" aria-modal="true" aria-label={title} style={{ position: 'relative', background: 'var(--cp-bg-surface)', color: 'var(--cp-text-primary)', borderRadius: '28px 28px 0 0', boxShadow: '0 -12px 40px rgba(22,24,29,0.18)', maxHeight: '92%', overflowY: 'auto', boxSizing: 'border-box', padding: '0 20px 28px', transform: visible ? `translateY(${drag}px)` : 'translateY(100%)', transition: dragging ? 'none' : 'transform var(--cp-dur-sheet) var(--cp-ease-sheet)' }}>
        <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 14px', cursor: 'grab', touchAction: 'none' }}>
          <span aria-hidden="true" style={{ width: '38px', height: '5px', borderRadius: '3px', background: 'var(--cp-neutral-200)' }}></span>
        </div>
        {children}
      </div>
    </div>
  );
  return container ? ReactDOM.createPortal(node, container) : node;
}
