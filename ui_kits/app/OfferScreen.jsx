import React from 'react';
import ReactDOM from 'react-dom';

const OS = {
  en: {
    back: 'Back', title: 'Early settlement', eFailT: 'Settlement payment didn\u2019t go through', eFailB: 'Your bank declined this payment. No money has left your account and your loan is unchanged.', eAmount: 'Amount', eDebited: 'Money debited', eNo: 'No', eRetry: 'Try again', eOther: 'Use another account', ePendT: 'We\u2019re confirming your payment', ePendB: 'Your bank is taking longer than usual. Please don\u2019t pay again, we\u2019ll notify you once it\u2019s confirmed.', eCheck: 'Check status', eOffT: 'No internet connection', eOffB: 'Check your connection and try again. You haven\u2019t been charged.', eQuoteT: 'This quote has expired', eQuoteB: 'Your balance has changed since this quote was made. Get an updated amount to continue.', eOldQuote: 'Previous quote', eNewQuote: 'Get updated quote', eHome: 'Back to home',
    headline: 'Layla, close your loan today and save', settleAmt: 'Settlement amount', endsPill: 'Offer ends 30 Sept 2026',
    sOut: 'Outstanding', sWaived: 'Waived (2.1%)', sFee: 'Fee (1%)', sSave: 'You save',
    kb1: (v) => `Save AED ${v}`, kb1s: 'Net, after the capped 1% fee', kb2: (n) => `Debt-free ${n} months sooner`, kb2s: 'Instead of your final payment in Aug 2027', kb3: 'No more monthly debits', kb3s: (n) => `${n} payments of AED 14,800 cleared at once`,
    detailsH: 'Important details', secTerms: 'Settlement terms', secPay: 'Payment conditions', secCredit: 'Credit reporting',
    st1: 'A 2.1% discount applies to your full outstanding balance.', st2: 'The settlement fee is capped at 1% of the balance or AED 10,000, whichever is lower.', st3: 'Once paid, the settlement can\u2019t be reversed.',
    pc1: 'Pay the full settlement amount in one payment.', pc2: 'Pay by instant bank payment or bank transfer.', pc3: 'This quote is valid until 30 September 2026.',
    cr1: 'Once the payment clears, your loan is closed as fully repaid.', cr2: 'Your closure letter can be shared as proof with other lenders.',
    accept: 'Accept settlement offer', compare: 'Compare options', capNote: 'Fee capped by the Central Bank',
    cmpH: 'Compare your options', optSettle: 'Settle today', optKeep: 'Keep paying', cTotal: 'Total you pay', cPayments: 'Payments', cEnds: 'Loan ends', today: 'Today', endsV: 'Aug 2027',
    cDiff: 'Settling today saves you', cumL: 'Total paid over time', cOne: '1', okT: 'Payment successful', whoPaid: 'Layla Al Mansoori paid', payeeSub: 'Business loan · CP-20418', tag: 'Loan settlement', securely: 'Paid securely via', details: 'Transaction details', okB: 'Loan fully paid & closed', rPaidTo: 'Paid to', paidToV: 'ClearPath · Business loan', rMode: 'Payment mode', rFrom: 'From', rDate: 'Date & time', dateV: '5 Nov 2026, 9:41 AM', rTxn: 'Transaction ID', rTotal: 'Total paid', youSaved: 'You saved', letterNote: 'We\u2019ll email your loan closure letter to you shortly.', receipt: 'Receipt', share: 'Share', endsShort: 'Ends 30 Sept', heroShort: '2.1% off · after the 1% fee', keepShort: 'Pay monthly', nPayments: (n) => `${n} payments left`, onePayment: 'One payment', capShort: 'Fee capped by the Central Bank', cleared: (n) => `${n} monthly payments cleared at once`, bl1: 'Closed today', bl2: 'No more debits', bl3: 'Closure letter', badge: 'Limited offer', youSave: 'You save',
    heroSub: '2.1% off your outstanding balance, minus the 1% settlement fee.', valid: 'Valid until 30 Sept 2026', pct: '2.1% off',
    compareH: 'Compare your options', keep: 'Keep paying monthly', keepSub: (n) => `${n} payments · until Aug 2027`,
    settle: 'Settle today', settleSub: 'One payment · loan closed today', saveLine: 'You save',
    howH: 'How your saving adds up', howSub: 'The discount is reduced by a capped settlement fee.',
    xDisc: 'Discount', xFee: 'Fee', xNet: 'You save',
    rBal: 'Outstanding balance', rDisc: 'Discount (2.1%)', rFee: 'Settlement fee (1%)', rPay: 'You pay today',
    cap: 'The Central Bank caps this fee at 1% of your balance or AED 10,000, whichever is lower.',
    changeH: 'What changes', skipL: 'Payments you skip', skipCap: (n) => `${n} × AED 14,800 replaced by one payment today`,
    b1: 'Loan closed today', b1s: (n) => `Instead of 9 Aug 2027, ${n} months sooner`,
    b2: 'No more monthly debits', b2s: 'Auto-debit from ••4821 stops',
    b3: 'Closure letter by email', b3s: 'Proof that your loan is fully paid',
    terms: 'Offer terms',
    t1: 'Applies when you pay the full outstanding balance in one payment.',
    t2: 'Offer is valid until 30 September 2026.',
    t3: 'Settlement fee is capped at 1% of the outstanding balance or AED 10,000, whichever is lower.',
    t4: 'Once paid, the settlement can\u2019t be reversed.',
    payToday: 'You pay today', cta: 'Settle loan',
    reviewTitle: 'Confirm settlement', youPay: 'You pay', quote: 'Quote valid until 30 Sept 2026', payFrom: 'Pay with',
    mInstant: 'Instant bank payment', mInstantSub: 'Approve in your bank app · usually seconds', rec: 'Recommended',
    mIban: 'Bank transfer', mIbanSub: 'Send to our IBAN · 1–2 working days',
    mCard: 'Debit card', mCardSub: 'Not available for this amount',
    final: 'This pays your full balance and closes your loan. It can\u2019t be reversed.', pay: (amt) => `Pay AED ${amt}`,
    doneT: 'Payment pending', doneB: 'Approve the payment in your bank app. We\u2019ll confirm and email your closure letter once the funds arrive.',
    ibanT: 'Send your transfer', ibanB: 'Use these details in your bank app. Include the reference so we can match your payment.', ibanL: 'IBAN', amtL: 'Amount',
    ref: 'Reference', done: 'Done',
    paying: 'Settling your business loan', discApplied: '2.1% early settlement discount', applied: 'Applied',
    payUsing: 'Pay using', viewAll: 'View all', less: 'Show less',
    acc1: 'Current account', acc2: 'Savings account', checkBal: 'Check balance',
    lim1: 'Instant pay limit: AED 250,000', lim2: 'Limit AED 100,000 · below this amount',
    linkMore: 'Link another bank account', letterT: 'Email my closure letter', letterS: 'Sent once the payment clears', faceId: 'Pay with Face ID',
  },
  ar: {
    back: 'رجوع', title: 'السداد المبكر', eFailT: 'لم تتم دفعة التسوية', eFailB: 'رفض بنكك هذه الدفعة. لم يُخصم أي مبلغ ولم يتغير قرضك.', eAmount: 'المبلغ', eDebited: 'تم الخصم', eNo: 'لا', eRetry: 'حاول مجددًا', eOther: 'استخدم حسابًا آخر', ePendT: 'نتحقق من دفعتك', ePendB: 'يستغرق بنكك وقتًا أطول من المعتاد. لا تدفع مرة أخرى، سنبلغك عند التأكيد.', eCheck: 'تحقق من الحالة', eOffT: 'لا يوجد اتصال بالإنترنت', eOffB: 'تحقق من اتصالك وحاول مجددًا. لم يتم خصم أي مبلغ.', eQuoteT: 'انتهت صلاحية هذا السعر', eQuoteB: 'تغيّر رصيدك منذ إصدار هذا السعر. احصل على مبلغ محدّث للمتابعة.', eOldQuote: 'السعر السابق', eNewQuote: 'احصل على سعر محدّث', eHome: 'العودة للرئيسية',
    headline: 'ليلى، أغلقي قرضك اليوم ووفّري', settleAmt: 'مبلغ التسوية', endsPill: 'ينتهي العرض 30 سبتمبر 2026',
    sOut: 'المستحق', sWaived: 'المعفى (2.1%)', sFee: 'الرسوم (1%)', sSave: 'توفيرك',
    kb1: (v) => `وفّري ${v} درهم`, kb1s: 'صافي بعد رسوم 1% المحددة', kb2: (n) => `بلا دين قبل ${n} أشهر`, kb2s: 'بدلًا من آخر دفعة في أغسطس 2027', kb3: 'لا خصومات شهرية بعد الآن', kb3s: (n) => `${n} دفعات بقيمة 14,800 درهم تُسدّد مرة واحدة`,
    detailsH: 'تفاصيل مهمة', secTerms: 'شروط التسوية', secPay: 'شروط الدفع', secCredit: 'التقرير الائتماني',
    st1: 'يُطبّق خصم 2.1% على كامل رصيدك المستحق.', st2: 'رسوم التسوية لا تتجاوز 1% من الرصيد أو 10,000 درهم، أيهما أقل.', st3: 'لا يمكن إلغاء التسوية بعد الدفع.',
    pc1: 'ادفعي مبلغ التسوية كاملًا بدفعة واحدة.', pc2: 'الدفع عبر الدفع البنكي الفوري أو التحويل البنكي.', pc3: 'هذا السعر ساري حتى 30 سبتمبر 2026.',
    cr1: 'بعد تأكيد الدفعة، يُغلق قرضك كقرض مسدّد بالكامل.', cr2: 'يمكنك مشاركة خطاب الإغلاق كإثبات مع جهات الإقراض الأخرى.',
    accept: 'قبول عرض التسوية', compare: 'قارني الخيارات', capNote: 'الرسوم محددة من المصرف المركزي',
    cmpH: 'قارني بين الخيارين', optSettle: 'السداد اليوم', optKeep: 'الاستمرار بالدفع', cTotal: 'إجمالي ما تدفعينه', cPayments: 'الدفعات', cEnds: 'ينتهي القرض', today: 'اليوم', endsV: 'أغسطس 2027',
    cDiff: 'السداد اليوم يوفّر لك', cumL: 'إجمالي المدفوع عبر الوقت', cOne: '1', okT: 'تمت الدفعة بنجاح', whoPaid: 'ليلى المنصوري دفعت إلى', payeeSub: 'قرض تجاري · CP-20418', tag: 'تسوية القرض', securely: 'تم الدفع بأمان عبر', details: 'تفاصيل العملية', okB: 'تم سداد القرض وإغلاقه', rPaidTo: 'الدفع إلى', paidToV: 'ClearPath · قرض تجاري', rMode: 'طريقة الدفع', rFrom: 'من', rDate: 'التاريخ والوقت', dateV: '5 Nov 2026, 9:41 AM', rTxn: 'رقم العملية', rTotal: 'إجمالي المدفوع', youSaved: 'وفّرت', letterNote: 'سنرسل خطاب إغلاق القرض إلى بريدك قريبًا.', receipt: 'الإيصال', share: 'مشاركة', endsShort: 'ينتهي 30 سبتمبر', heroShort: 'خصم 2.1% · بعد رسوم 1%', keepShort: 'الدفع الشهري', nPayments: (n) => `${n} دفعات متبقية`, onePayment: 'دفعة واحدة', capShort: 'الرسوم محددة من المصرف المركزي', cleared: (n) => `${n} دفعات شهرية تُسدّد مرة واحدة`, bl1: 'إغلاق اليوم', bl2: 'لا خصومات بعد الآن', bl3: 'خطاب الإغلاق', badge: 'عرض محدود', youSave: 'توفّر',
    heroSub: 'خصم 2.1% من رصيدك المستحق، بعد خصم رسوم التسوية 1%.', valid: 'ساري حتى 30 سبتمبر 2026', pct: 'خصم 2.1%',
    compareH: 'قارن بين الخيارين', keep: 'الاستمرار بالدفع الشهري', keepSub: (n) => `${n} دفعات · حتى أغسطس 2027`,
    settle: 'السداد اليوم', settleSub: 'دفعة واحدة · إغلاق القرض اليوم', saveLine: 'توفّر',
    howH: 'كيف يتكوّن توفيرك', howSub: 'يُطرح من الخصم رسوم تسوية محددة بسقف.',
    xDisc: 'الخصم', xFee: 'الرسوم', xNet: 'توفيرك',
    rBal: 'الرصيد المستحق', rDisc: 'الخصم (2.1%)', rFee: 'رسوم التسوية (1%)', rPay: 'تدفع اليوم',
    cap: 'يحدد المصرف المركزي هذه الرسوم بـ1% من رصيدك أو 10,000 درهم، أيهما أقل.',
    changeH: 'ما الذي يتغيّر', skipL: 'الدفعات التي تتجاوزها', skipCap: (n) => `${n} × 14,800 درهم تُستبدل بدفعة واحدة اليوم`,
    b1: 'إغلاق القرض اليوم', b1s: (n) => `بدلًا من 9 أغسطس 2027، أبكر بـ${n} أشهر`,
    b2: 'لا مزيد من الخصومات الشهرية', b2s: 'يتوقف الخصم التلقائي من ••4821',
    b3: 'خطاب إغلاق عبر البريد', b3s: 'إثبات سداد قرضك بالكامل',
    terms: 'شروط العرض',
    t1: 'يسري عند سداد كامل الرصيد المستحق بدفعة واحدة.',
    t2: 'العرض ساري حتى 30 سبتمبر 2026.',
    t3: 'رسوم التسوية لا تتجاوز 1% من الرصيد المستحق أو 10,000 درهم، أيهما أقل.',
    t4: 'لا يمكن إلغاء التسوية بعد الدفع.',
    payToday: 'تدفع اليوم', cta: 'سدّد القرض',
    reviewTitle: 'تأكيد التسوية', youPay: 'تدفع', quote: 'السعر ساري حتى 30 سبتمبر 2026', payFrom: 'الدفع عبر',
    mInstant: 'دفع بنكي فوري', mInstantSub: 'وافق من تطبيق بنكك · خلال ثوانٍ عادةً', rec: 'موصى به',
    mIban: 'تحويل بنكي', mIbanSub: 'حوّل إلى رقم الآيبان · 1–2 يوم عمل',
    mCard: 'بطاقة الخصم', mCardSub: 'غير متاحة لهذا المبلغ',
    final: 'هذه الدفعة تسدد رصيدك بالكامل وتغلق قرضك، ولا يمكن إلغاؤها.', pay: (amt) => `ادفع ${amt} درهم`,
    doneT: 'الدفعة قيد المعالجة', doneB: 'وافق على الدفعة من تطبيق بنكك. سنؤكد ونرسل خطاب الإغلاق عند وصول المبلغ.',
    ibanT: 'أرسل التحويل', ibanB: 'استخدم هذه البيانات في تطبيق بنكك، وأضف المرجع لنطابق دفعتك.', ibanL: 'الآيبان', amtL: 'المبلغ',
    ref: 'المرجع', done: 'تم',
    paying: 'تسوية قرضك التجاري', discApplied: 'خصم السداد المبكر 2.1%', applied: 'مُطبّق',
    payUsing: 'الدفع باستخدام', viewAll: 'عرض الكل', less: 'عرض أقل',
    acc1: 'الحساب الجاري', acc2: 'حساب التوفير', checkBal: 'تحقق من الرصيد',
    lim1: 'حد الدفع الفوري: 250,000 درهم', lim2: 'الحد 100,000 درهم · أقل من هذا المبلغ',
    linkMore: 'ربط حساب بنكي آخر', letterT: 'أرسل خطاب الإغلاق إلى بريدي', letterS: 'يُرسل بعد تأكيد الدفعة', faceId: 'ادفع باستخدام Face ID',
  },
};

const OFFER_HERO_BG = [
  'radial-gradient(80% 100% at 100% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)',
  'repeating-linear-gradient(135deg, rgba(122,67,0,0) 0 12px, rgba(122,67,0,0.03) 12px 13px)',
  'linear-gradient(150deg, #fff1d6 0%, #ffd590 100%)',
].join(', ');

export function OfferScreen({ open, onBack, container, lang = 'en', balance = 0, remaining = [], sim = 'none' }) {
  const t = OS[lang] || OS.en;
  const rtl = lang === 'ar';
  const [mounted, setMounted] = React.useState(open);
  const [vis, setVis] = React.useState(false);
  const [grown, setGrown] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const [step, setStep] = React.useState('offer');
  const [method, setMethod] = React.useState('acc1');
  const [confirm, setConfirm] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);
  const [showBreak, setShowBreak] = React.useState(false);
  const [letter, setLetter] = React.useState(true);
  const [showDet, setShowDet] = React.useState(false);
  const [cmpOpen, setCmpOpen] = React.useState(false);
  const [cmpMode, setCmpMode] = React.useState('settle');
  const [sec, setSec] = React.useState(null);
  const scroller = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      setMounted(true); setStep('offer'); setConfirm(false); setCmpOpen(false); setCmpMode('settle'); setSec(null); setMethod('acc1'); setShowAll(false); setShowBreak(false); setTerms(false);
      const a = setTimeout(() => setVis(true), 20);
      const b = setTimeout(() => setGrown(true), 420);
      return () => { clearTimeout(a); clearTimeout(b); };
    }
    setVis(false); setGrown(false);
    const id = setTimeout(() => setMounted(false), 480);
    return () => clearTimeout(id);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape' && onBack) onBack(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onBack]);

  if (!mounted) return null;

  const discount = Math.round(balance * 0.021);
  const fee = Math.min(Math.round(balance * 0.01), 10000);
  const net = discount - fee;
  const payToday = balance - discount + fee;
  const n = remaining.length;
  const fmt = (v) => v.toLocaleString('en-US');
  const toTop = () => { if (scroller.current) scroller.current.scrollTop = 0; };

  const h2 = { margin: 0, fontSize: '17px', fontWeight: 600, lineHeight: 1.25 };
  const card = { background: 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-lg)', boxShadow: 'var(--cp-shadow-card)', padding: '16px', boxSizing: 'border-box' };
  const row = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', fontSize: '14px' };

  const bars = [
    { key: 'd', label: t.xDisc, value: '+' + fmt(discount), bottom: 0, h: 100, bg: 'var(--cp-teal-300)', fg: 'var(--cp-teal-800)' },
    { key: 'f', label: t.xFee, value: '−' + fmt(fee), bottom: (net / discount) * 100, h: (fee / discount) * 100, bg: 'repeating-linear-gradient(135deg, var(--cp-neutral-200) 0 5px, var(--cp-neutral-100) 5px 10px)', fg: 'var(--cp-text-secondary)' },
    { key: 'n', label: t.xNet, value: fmt(net), bottom: 0, h: (net / discount) * 100, bg: 'var(--cp-teal-600)', fg: 'var(--cp-teal-600)' },
  ];

  const benefits = [['calendar-check', t.bl1], ['repeat', t.bl2], ['file-check', t.bl3]];

  const doneView = method === 'iban' ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '16px' }}>
      <span style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="landmark" size={30} /></span>
      <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>{t.ibanT}</h1>
      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5, color: 'var(--cp-text-secondary)' }}>{t.ibanB}</p>
      <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[[t.amtL, <Money amount={payToday} size="md" />], [t.ibanL, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>AE07 0331 2345 6789 0123 456</bdi>], [t.ref, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>CP-SET-20418</bdi>]].map(([l, v], i) => (
          <div key={i} style={{ ...row, borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none', paddingTop: i ? '12px' : 0 }}><span style={{ color: 'var(--cp-text-secondary)' }}>{l}</span>{v}</div>
        ))}
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '8px' }}>
      <section style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--cp-radius-lg)', background: 'repeating-radial-gradient(circle at 50% 52%, rgba(20,122,110,0) 0 22px, rgba(20,122,110,0.07) 22px 23px), radial-gradient(circle at 50% 52%, var(--cp-teal-50) 0, rgba(229,243,240,0) 42%), #fbfaf6', boxShadow: 'inset 0 0 0 10px #fbfaf6, inset 0 0 0 11px rgba(20,122,110,0.2), var(--cp-shadow-card)', padding: '34px 22px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <span aria-hidden="true" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-800)', boxShadow: '0 0 0 4px #fff, 0 4px 14px rgba(22,24,29,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600 }}>{rtl ? 'ل' : 'LA'}</span>
        <span style={{ fontSize: '16px', fontWeight: 500, marginTop: '16px', color: 'var(--cp-text-secondary)' }}>{t.whoPaid}</span>
        <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>ClearPath</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: 'var(--cp-text-secondary)', marginTop: '4px' }}><Icon name="landmark" size={14} /><bdi>{t.payeeSub}</bdi></span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '44px 0 40px' }}>
          <Money amount={payToday} size="hero" weight={700} />
          <span style={{ display: 'inline-flex', alignItems: 'center', height: '30px', padding: '0 14px', background: '#fff', boxShadow: '0 0 0 1px var(--cp-border-subtle)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em' }}>{t.tag}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 500, color: 'var(--cp-green-600)' }}><Icon name="circle-check" size={14} />{t.okB}</span>
        </div>
        <span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)' }}>{t.securely}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: 600, marginTop: '4px' }}><Icon name="zap" size={16} />{t.mInstant}</span>
        <span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)', marginTop: '2px' }}>{method === 'acc2' ? t.acc2 : t.acc1} <bdi dir="ltr">•• {method === 'acc2' ? '7710' : '4821'}</bdi></span>
        <div dir="ltr" style={{ alignSelf: 'stretch', margin: '28px -22px 0', padding: '14px 12px 18px', borderTop: '1px dashed rgba(20,122,110,0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cp-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
          <span>{t.dateV}</span><span aria-hidden="true" style={{ width: '1px', height: '12px', background: 'var(--cp-neutral-400)' }}></span><span>TXN 830211475569</span>
        </div>
      </section>

      <button type="button" aria-expanded={showDet} onClick={() => setShowDet((v) => !v)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', minHeight: '48px', padding: '0 16px', borderRadius: 'var(--cp-radius-md)', background: 'var(--cp-bg-surface)', boxShadow: 'var(--cp-shadow-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14.5px', fontWeight: 600 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}><Icon name="receipt-text" size={18} />{t.details}</span>
        <span style={{ display: 'inline-flex', transform: showDet ? 'rotate(180deg)' : 'none', transition: 'transform var(--cp-dur-base) var(--cp-ease)', color: 'var(--cp-text-secondary)' }}><Icon name="chevron-down" size={18} /></span>
      </button>
      {showDet && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '-8px' }}>
      <div style={{ ...card, padding: '4px 16px', display: 'flex', flexDirection: 'column' }}>
        {[
          [t.rPaidTo, <span style={{ fontWeight: 500 }}>{t.paidToV}</span>],
          [t.rMode, <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}><Icon name="zap" size={14} />{t.mInstant}</span>],
          [t.rFrom, <span style={{ fontWeight: 500 }}>{method === 'acc2' ? t.acc2 : t.acc1} <bdi dir="ltr" style={{ color: 'var(--cp-text-secondary)', fontWeight: 400 }}>•• {method === 'acc2' ? '7710' : '4821'}</bdi></span>],
          [t.rDate, <span style={{ fontWeight: 500 }}>{t.dateV}</span>],
          [t.ref, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>CP-SET-20418</bdi>],
          [t.rTxn, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>TXN 8302 1147 5569</bdi>],
        ].map(([l, v], i) => (
          <div key={i} style={{ ...row, alignItems: 'center', minHeight: '48px', borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none', fontSize: '13.5px' }}>
            <span style={{ color: 'var(--cp-text-secondary)', flex: 'none' }}>{l}</span>
            <span style={{ textAlign: 'end', minWidth: 0 }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rBal}</span><Money amount={balance} size="sm" /></div>
        <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rDisc}</span><Money amount={discount} sign="−" size="sm" tone="saving" /></div>
        <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rFee}</span><Money amount={fee} sign="+" size="sm" tone="muted" /></div>
        <div style={{ ...row, borderTop: '1px solid var(--cp-border-subtle)', paddingTop: '10px' }}><span style={{ fontWeight: 600 }}>{t.rTotal}</span><Money amount={payToday} size="md" /></div>
        <div style={{ ...row, background: 'var(--cp-teal-50)', borderRadius: 'var(--cp-radius-sm)', padding: '10px 12px', marginTop: '2px' }}><span style={{ fontWeight: 500, color: 'var(--cp-teal-800)' }}>{t.youSaved}</span><Money amount={net} size="md" tone="saving" /></div>
      </div>
        </div>
      )}

      {letter && (
        <div style={{ display: 'grid', gridTemplateColumns: '36px minmax(0,1fr)', gap: '12px', alignItems: 'center', fontSize: '13px', lineHeight: 1.45, color: 'var(--cp-text-secondary)' }}>
          <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--cp-bg-sunken)', color: 'var(--cp-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="mail-check" size={17} /></span>
          {t.letterNote}
        </div>
      )}
    </div>
  );

  const accounts = [
    { k: 'acc1', ic: 'landmark', name: t.acc1, last: '4821', limit: t.lim1, ok: true },
    { k: 'acc2', ic: 'piggy-bank', name: t.acc2, last: '7710', limit: t.lim2, ok: false },
    ...(showAll ? [{ k: 'iban', ic: 'building-2', name: t.mIban, sub: t.mIbanSub, ok: true }] : []),
  ];
  const [whole] = fmt(payToday).split('.');
  const confirmBody = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingTop: '6px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))', color: 'var(--cp-teal-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="landmark" size={22} /></span>
        <span style={{ fontSize: '17px', fontWeight: 500 }}>{t.paying}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 12px' }}>
          <bdi dir="ltr" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '6px', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
            <span style={{ fontSize: '18px', fontWeight: 500 }}>AED</span>
            <span style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-0.03em' }}>{whole}<span style={{ color: 'var(--cp-neutral-400)' }}>.00</span></span>
          </bdi>
          <button type="button" aria-expanded={showBreak} onClick={() => setShowBreak((v) => !v)} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '2px', minHeight: '32px', color: 'var(--cp-text-secondary)', fontSize: '14px' }}>
            <bdi dir="ltr" style={{ textDecoration: 'line-through', fontVariantNumeric: 'tabular-nums' }}>AED {fmt(balance)}</bdi>
            <span style={{ display: 'inline-flex', transform: showBreak ? 'rotate(180deg)' : 'none', transition: 'transform var(--cp-dur-base) var(--cp-ease)' }}><Icon name="chevron-down" size={16} /></span>
          </button>
        </div>
        {showBreak && (
          <div style={{ background: 'var(--cp-bg-sunken)', borderRadius: 'var(--cp-radius-sm)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rBal}</span><Money amount={balance} size="sm" /></div>
            <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rDisc}</span><Money amount={discount} sign="−" size="sm" tone="saving" /></div>
            <div style={row}><span style={{ color: 'var(--cp-text-secondary)' }}>{t.rFee}</span><Money amount={fee} sign="+" size="sm" tone="muted" /></div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '16px', borderBottom: '1px solid var(--cp-border-subtle)' }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--cp-amber-50)', color: 'var(--cp-amber-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="badge-percent" size={15} /></span>
        <span style={{ flex: 1, minWidth: 0, fontSize: '14.5px' }}>{t.discApplied}</span>
        <span style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap', flex: 'none', color: 'var(--cp-teal-600)' }}>{t.applied}</span>
      </div>
      <div role="radiogroup" aria-label={t.payUsing} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14.5px', color: 'var(--cp-text-secondary)' }}>{t.payUsing}</span>
          <button type="button" onClick={() => { setShowAll((v) => !v); if (showAll && method === 'iban') setMethod('acc1'); }} style={{ all: 'unset', cursor: 'pointer', minHeight: '36px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'var(--cp-text-secondary)' }}>{showAll ? t.less : t.viewAll}<Icon name="chevrons-up-down" size={14} /></button>
        </div>
        {accounts.map((ac) => {
          const on = method === ac.k;
          return (
            <button key={ac.k} type="button" role="radio" aria-checked={on} aria-disabled={!ac.ok || undefined} onClick={() => ac.ok && setMethod(ac.k)} style={{ all: 'unset', boxSizing: 'border-box', cursor: ac.ok ? 'pointer' : 'not-allowed', display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 22px', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
              <span style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--cp-bg-surface)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', color: ac.ok ? 'var(--cp-teal-600)' : 'var(--cp-neutral-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ac.ic} size={19} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0, opacity: ac.ok ? 1 : 0.6 }}>
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}><span style={{ fontSize: '15.5px', fontWeight: 500 }}>{ac.name}</span>{ac.last && <bdi dir="ltr" style={{ fontSize: '13.5px', color: 'var(--cp-text-secondary)' }}>•• {ac.last}</bdi>}</span>
                {ac.last ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '13px', color: 'var(--cp-text-secondary)' }}>{t.checkBal}<Icon name={rtl ? 'chevron-left' : 'chevron-right'} size={14} /></span> : <span style={{ fontSize: '13px', color: 'var(--cp-text-secondary)' }}>{ac.sub}</span>}
                {ac.limit && <span style={{ fontSize: '12.5px', fontWeight: 500, color: ac.ok ? 'var(--cp-green-600)' : 'var(--cp-status-overdue)' }}>{ac.limit}</span>}
              </span>
              <span aria-hidden="true" style={{ width: '22px', height: '22px', borderRadius: '50%', boxSizing: 'border-box', border: on ? '7px solid var(--cp-text-primary)' : '1.5px solid var(--cp-neutral-400)', transition: 'border var(--cp-dur-fast) ease' }}></span>
            </button>
          );
        })}
        {showAll && (
          <button type="button" style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 18px', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
            <span style={{ width: '44px', height: '44px', borderRadius: '50%', boxSizing: 'border-box', border: '1.5px dashed var(--cp-neutral-400)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus" size={19} /></span>
            <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--cp-teal-600)' }}>{t.linkMore}</span>
            <span style={{ color: 'var(--cp-text-secondary)', display: 'inline-flex' }}><Icon name={rtl ? 'chevron-left' : 'chevron-right'} size={16} /></span>
          </button>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr) auto', alignItems: 'center', gap: '12px', background: 'var(--cp-neutral-25)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', borderRadius: 'var(--cp-radius-md)', padding: '14px' }}>
        <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="mail-check" size={19} /></span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}><span style={{ fontSize: '14.5px', fontWeight: 500 }}>{t.letterT}</span><span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)' }}>{t.letterS}</span></span>
        <button type="button" role="switch" aria-checked={letter} aria-label={t.letterT} onClick={() => setLetter((v) => !v)} style={{ all: 'unset', cursor: 'pointer', width: '51px', height: '31px', borderRadius: '16px', background: letter ? 'var(--cp-teal-600)' : 'var(--cp-neutral-200)', position: 'relative', transition: 'background var(--cp-dur-base) ease' }}>
          <span style={{ position: 'absolute', top: '2px', insetInlineStart: letter ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)' }}></span>
        </button>
      </div>
      <SlideToConfirm key={String(confirm)} label={t.faceId} rtl={rtl} onConfirm={() => { setConfirm(false); setStep({ payfail: 'failed', timeout: 'pending', offline: 'offline', quote: 'quote' }[sim] || 'done'); toTop(); }} />
    </div>
  );

  const stats = [
    [t.sOut, <Money amount={balance} size="md" />],
    [t.sWaived, <Money amount={discount} sign="−" size="md" tone="saving" />],
    [t.sFee, <Money amount={fee} sign="+" size="md" tone="muted" />],
    [t.sSave, <Money amount={net} size="md" tone="saving" />],
  ];
  const keyBenefits = [
    ['piggy-bank', t.kb1(fmt(net)), t.kb1s],
    ['calendar-check', t.kb2(n), t.kb2s],
    ['repeat', t.kb3, t.kb3s(n)],
  ];
  const sections = [
    ['terms', 'file-text', t.secTerms, [t.st1, t.st2, t.st3]],
    ['pay', 'wallet', t.secPay, [t.pc1, t.pc2, t.pc3]],
    ['credit', 'shield-check', t.secCredit, [t.cr1, t.cr2]],
  ];

  const retryPay = () => { setStep('offer'); setConfirm(true); };
  const amountRow = [t.eAmount, <Money amount={payToday} size="sm" />];
  const errView = {
    failed: <ErrorState tone="danger" icon="circle-x" title={t.eFailT} details={[amountRow, [t.eDebited, t.eNo]]} actionLabel={t.eRetry} actionIcon="rotate-cw" onAction={retryPay} secondaryLabel={t.eOther} onSecondary={() => { setMethod('iban'); setShowAll(true); retryPay(); }} code="Ref CP-SET-20418 · Bank code 51">{t.eFailB}</ErrorState>,
    pending: <ErrorState tone="warning" icon="hourglass" title={t.ePendT} details={[amountRow, [t.ref, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>CP-SET-20418</bdi>]]} actionLabel={t.eCheck} actionIcon="refresh-cw" onAction={() => setStep('done')} secondaryLabel={t.eHome} onSecondary={onBack}>{t.ePendB}</ErrorState>,
    offline: <ErrorState tone="neutral" icon="wifi-off" title={t.eOffT} actionLabel={t.eRetry} actionIcon="rotate-cw" onAction={retryPay} secondaryLabel={t.eHome} onSecondary={onBack}>{t.eOffB}</ErrorState>,
    quote: <ErrorState tone="warning" icon="clock-alert" title={t.eQuoteT} details={[[t.eOldQuote, <bdi dir="ltr" style={{ textDecoration: 'line-through', color: 'var(--cp-text-secondary)' }}>AED {fmt(payToday)}</bdi>]]} actionLabel={t.eNewQuote} actionIcon="refresh-cw" onAction={() => setStep('offer')} secondaryLabel={t.eHome} onSecondary={onBack}>{t.eQuoteB}</ErrorState>,
  }[step];

  const content = errView ? <div style={{ paddingTop: '24px' }}>{errView}</div> : step === 'done' ? doneView : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <section style={{ margin: '-8px -16px 0', padding: '104px 20px 8px', background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0) 0 23px, rgba(255,255,255,0.4) 23px 24px), linear-gradient(180deg, #9fe2d1 0%, #c9ece3 42%, var(--cp-bg-page) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
        <span aria-hidden="true" style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fff', color: 'var(--cp-teal-800)', boxShadow: '0 0 0 4px rgba(255,255,255,0.6), 0 6px 18px rgba(15,74,68,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600 }}>{rtl ? 'ل' : 'LA'}</span>
        <h1 style={{ margin: 0, fontSize: '23px', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em', maxWidth: '290px', textWrap: 'balance' }}>{t.headline}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
          <span style={{ fontSize: '13px', color: 'var(--cp-text-secondary)' }}>{t.settleAmt}</span>
          <Money amount={payToday} size="hero" weight={700} />
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 16px', borderRadius: 'var(--cp-radius-pill)', background: '#fff', boxShadow: '0 6px 18px rgba(22,24,29,0.10)', fontSize: '13.5px', fontWeight: 500, whiteSpace: 'nowrap', marginTop: '4px' }}><span style={{ color: 'var(--cp-amber-800)', display: 'inline-flex' }}><Icon name="clock" size={16} /></span>{t.endsPill}</span>
      </section>

      <section style={{ ...card, padding: '4px 0', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {stats.map(([l, v], i) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 16px', borderInlineStart: i % 2 ? '1px solid var(--cp-border-subtle)' : 'none', borderTop: i > 1 ? '1px solid var(--cp-border-subtle)' : 'none', background: i === 3 ? 'var(--cp-teal-50)' : 'transparent', borderEndEndRadius: i === 3 ? 'var(--cp-radius-lg)' : 0 }}>
            <span style={{ fontSize: '12px', color: i === 3 ? 'var(--cp-teal-800)' : 'var(--cp-text-secondary)', fontWeight: i === 3 ? 500 : 400 }}>{l}</span>
            {v}
          </div>
        ))}
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '0 4px' }}>
        {keyBenefits.map(([ic, a1, b1]) => (
          <div key={a1} style={{ display: 'grid', gridTemplateColumns: '48px minmax(0,1fr)', gap: '14px', alignItems: 'center' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--cp-bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={21} /></span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}><span style={{ fontSize: '15.5px', fontWeight: 600 }}>{a1}</span><span style={{ fontSize: '13px', color: 'var(--cp-text-secondary)' }}>{b1}</span></span>
          </div>
        ))}
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 style={h2}>{t.detailsH}</h2>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          {sections.map(([k, ic, label, items], i) => {
            const on = sec === k;
            return (
              <div key={k} style={{ borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none' }}>
                <button type="button" aria-expanded={on} onClick={() => setSec(on ? null : k)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%', minHeight: '56px', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', fontSize: '15px', fontWeight: 500 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--cp-text-secondary)', display: 'inline-flex' }}><Icon name={ic} size={18} /></span>{label}</span>
                  <span style={{ display: 'inline-flex', transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--cp-dur-base) var(--cp-ease)', color: 'var(--cp-text-secondary)' }}><Icon name="chevron-down" size={18} /></span>
                </button>
                {on && (
                  <ul style={{ margin: 0, padding: '0 16px 16px 46px', paddingInlineStart: '46px', paddingInlineEnd: '16px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {items.map((x) => <li key={x} style={{ display: 'grid', gridTemplateColumns: '6px minmax(0,1fr)', gap: '10px', fontSize: '13px', lineHeight: 1.5, color: 'var(--cp-text-secondary)' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--cp-neutral-400)', marginTop: '8px' }}></span>{x}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );

  const settleMode = cmpMode === 'settle';
  const cols = [t.today, ...remaining];
  const cum = (mode, i) => (mode === 'settle' ? payToday : Math.min(i, n) * 14800);
  const cMax = Math.max(balance, payToday);
  const compareBody = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingTop: '4px' }}>
      <span style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>{t.cmpH}</span>
      <SegmentedControl fullWidth value={cmpMode} onChange={setCmpMode} options={[{ value: 'settle', label: t.optSettle }, { value: 'keep', label: t.optKeep }]} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', background: 'var(--cp-bg-sunken)', borderRadius: 'var(--cp-radius-md)', padding: '14px 0' }}>
        {[[t.cTotal, <Money amount={settleMode ? payToday : balance} size="sm" />], [t.cPayments, <span style={{ fontSize: '15px', fontWeight: 600 }}>{settleMode ? t.cOne : n}</span>], [t.cEnds, <span style={{ fontSize: '15px', fontWeight: 600, whiteSpace: 'nowrap' }}>{settleMode ? t.today : t.endsV}</span>]].map(([l, v], i) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', borderInlineStart: i ? '1px solid var(--cp-border-subtle)' : 'none', padding: '0 6px', textAlign: 'center' }}>
            <span style={{ fontSize: '11.5px', color: 'var(--cp-text-secondary)' }}>{l}</span>{v}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)' }}>{t.cumL}</span>
        <div dir="ltr" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length}, minmax(0,1fr))`, gap: '4px', alignItems: 'end', height: '110px', borderBottom: '1px solid var(--cp-border-subtle)' }}>
          {cols.map((c, i) => {
            const v = cum(cmpMode, i + (settleMode ? 0 : 0));
            const other = cum(settleMode ? 'keep' : 'settle', i);
            return (
              <div key={i} style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: (other / cMax) * 100 + '%', borderRadius: '6px 6px 0 0', boxShadow: 'inset 0 0 0 1px var(--cp-neutral-200)' }}></span>
                <span style={{ position: 'relative', width: '100%', height: (v / cMax) * 100 + '%', borderRadius: '6px 6px 0 0', background: settleMode ? 'var(--cp-teal-600)' : 'var(--cp-neutral-900)', opacity: settleMode && i > 0 ? 0.35 : 1, transition: 'height var(--cp-dur-slow) var(--cp-ease), background var(--cp-dur-base) ease' }}></span>
              </div>
            );
          })}
        </div>
        <div dir="ltr" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length}, minmax(0,1fr))`, gap: '4px' }}>
          {cols.map((c, i) => <span key={i} style={{ fontSize: '9.5px', textAlign: 'center', color: i === 0 ? 'var(--cp-text-primary)' : 'var(--cp-text-secondary)', fontWeight: i === 0 ? 600 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c}</span>)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', background: 'var(--cp-teal-50)', borderRadius: 'var(--cp-radius-md)', padding: '12px 14px' }}>
        <span style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--cp-teal-800)' }}>{t.cDiff}</span>
        <Money amount={net} size="lg" tone="saving" />
      </div>
      <Button fullWidth onClick={() => { setCmpOpen(false); setConfirm(true); }}>{t.accept}</Button>
    </div>
  );

  const node = (
    <div dir={rtl ? 'rtl' : 'ltr'} lang={lang} role="dialog" aria-label={t.title} style={{ position: container ? 'absolute' : 'fixed', inset: 0, zIndex: 40, background: 'var(--cp-bg-page)', display: 'flex', flexDirection: 'column', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', transform: vis ? 'none' : `translateX(${rtl ? '-100%' : '100%'})`, transition: 'transform var(--cp-dur-sheet) var(--cp-ease-sheet)', boxShadow: vis ? '0 0 40px rgba(22,24,29,0.18)' : 'none' }}>
      <div ref={scroller} style={{ position: 'relative', flex: 1, overflowY: 'auto' }}>
        <div style={{ position: step === 'offer' ? 'absolute' : 'sticky', top: 0, left: 0, right: 0, zIndex: 2, background: step === 'offer' ? 'transparent' : 'var(--cp-bg-page)', padding: '44px 16px 10px', display: 'grid', gridTemplateColumns: '48px minmax(0,1fr) auto', alignItems: 'center' }}>
          <IconButton icon={rtl ? 'chevron-right' : 'chevron-left'} label={t.back} onClick={onBack} />
          <span></span>
          {step === 'done' && method !== 'iban' ? (
            <div style={{ display: 'flex', gap: '8px' }}>
              <IconButton icon="download" label={t.receipt} />
              <IconButton icon="share-2" label={t.share} />
            </div>
          ) : <span></span>}
        </div>
        <div style={{ padding: '8px 16px 28px' }}>{content}</div>
      </div>
      {!errView && <div style={{ background: 'var(--cp-bg-surface)', borderRadius: '24px 24px 0 0', boxShadow: '0 -8px 24px rgba(22,24,29,0.08)', padding: '14px 16px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        {step === 'done' ? (
          <Button fullWidth onClick={onBack}>{t.done}</Button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
            <Button fullWidth onClick={() => setConfirm(true)}>{t.accept}</Button>
            <Button variant="ghost" fullWidth icon="arrow-left-right" onClick={() => { setCmpMode('settle'); setCmpOpen(true); }}>{t.compare}</Button>
          </div>
        )}
      </div>}
      <BottomSheet open={cmpOpen} onClose={() => setCmpOpen(false)} container={container} dir={rtl ? 'rtl' : 'ltr'} title={t.cmpH}>{compareBody}</BottomSheet>
      <BottomSheet open={confirm} onClose={() => setConfirm(false)} container={container} dir={rtl ? 'rtl' : 'ltr'} title={t.reviewTitle}>{confirmBody}</BottomSheet>
    </div>
  );
  return container ? ReactDOM.createPortal(node, container) : node;
}
