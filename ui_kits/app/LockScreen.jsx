import React from 'react';

const LS = {
  en: {
    day: 'Thursday, 5 November', app: 'ClearPath', now: 'now',
    title: 'Early repayment discount',
    body: 'You\u2019re eligible for an early repayment discount \u2014 save 2.1% if you pay before September 30.',
    hint: 'Tap the notification to open the offer', open: 'Open notification',
  },
  ar: {
    day: 'الخميس، 5 نوفمبر', app: 'ClearPath', now: 'الآن',
    title: 'خصم السداد المبكر',
    body: 'أنت مؤهل لخصم السداد المبكر \u2014 وفّر 2.1% إذا دفعت قبل 30 سبتمبر.',
    hint: 'اضغط على الإشعار لفتح العرض', open: 'فتح الإشعار',
  },
};

export function LockScreen({ lang = 'en', onOpen }) {
  const t = LS[lang] || LS.en;
  const rtl = lang === 'ar';
  const [shown, setShown] = React.useState(false);
  const [press, setPress] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setShown(true), 450); return () => clearTimeout(id); }, []);

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} lang={lang} style={{ position: 'relative', height: '100%', overflow: 'hidden', fontFamily: '-apple-system, "SF Pro Display", "Readex Pro", system-ui, sans-serif', color: '#fff', background: 'radial-gradient(120% 70% at 80% 10%, rgba(127,216,198,0.55) 0%, rgba(127,216,198,0) 55%), radial-gradient(90% 60% at 0% 100%, rgba(255,208,138,0.35) 0%, rgba(255,208,138,0) 60%), repeating-radial-gradient(circle at 70% 30%, rgba(255,255,255,0) 0 30px, rgba(255,255,255,0.04) 30px 31px), linear-gradient(170deg, #147a6e 0%, #0f4a44 55%, #0a2622 100%)' }}>
      <div dir="ltr" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 30px 0', fontSize: '15px', fontWeight: 600 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Icon name="lock" size={13} /></span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Icon name="signal" size={16} /><Icon name="wifi" size={16} /><Icon name="battery-full" size={20} /></span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '34px' }}>
        <span style={{ fontSize: '19px', fontWeight: 500, opacity: 0.9 }}>{t.day}</span>
        <span dir="ltr" style={{ fontSize: '96px', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.03em', marginTop: '2px' }}>9:41</span>
      </div>

      <div style={{ position: 'absolute', left: '12px', right: '12px', bottom: '170px' }}>
        <button type="button" aria-label={t.open} onClick={onOpen}
          onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
          style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%', display: 'grid', gridTemplateColumns: '38px minmax(0,1fr)', gap: '12px', padding: '14px', borderRadius: '24px', background: 'rgba(245,245,245,0.78)', backdropFilter: 'blur(24px) saturate(160%)', WebkitBackdropFilter: 'blur(24px) saturate(160%)', color: '#16181d', boxShadow: '0 8px 30px rgba(0,0,0,0.18)', textAlign: 'start', opacity: shown ? 1 : 0, transform: shown ? (press ? 'scale(0.97)' : 'none') : 'translateY(24px) scale(0.96)', transition: 'opacity 420ms ease, transform 520ms cubic-bezier(0.32, 0.72, 0, 1)' }}>
          <span aria-hidden="true" style={{ width: '38px', height: '38px', borderRadius: '9px', background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))', color: 'var(--cp-teal-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="landmark" size={20} /></span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>{t.title}</span>
              <span style={{ fontSize: '13px', color: 'rgba(22,24,29,0.55)', flex: 'none' }}>{t.now}</span>
            </span>
            <span style={{ fontSize: '15px', lineHeight: 1.35 }}>{t.body}</span>
          </span>
        </button>
        <span style={{ display: 'block', textAlign: 'center', marginTop: '14px', fontSize: '12.5px', opacity: shown ? 0.75 : 0, transition: 'opacity 400ms ease 600ms' }}>{t.hint}</span>
      </div>

      <div dir="ltr" style={{ position: 'absolute', left: '46px', right: '46px', bottom: '46px', display: 'flex', justifyContent: 'space-between' }}>
        {['flashlight', 'camera'].map((ic) => (
          <span key={ic} aria-hidden="true" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={22} /></span>
        ))}
      </div>
      <span aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: '10px', width: '134px', height: '5px', marginLeft: '-67px', borderRadius: '3px', background: 'rgba(255,255,255,0.9)' }}></span>
    </div>
  );
}
