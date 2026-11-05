import React from 'react';

const MONTH_KEYS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const STR = {
  en: {
    welcome: 'Welcome back', name: 'Layla Al Mansoori', hi: 'Hi, Layla', balShort: 'Balance', paidWord: 'Paid', autoShort: 'Auto-debit ••4821', lateShort: 'Late fee max AED 200', offerEnds: 'Ends 30 Sept', offerSave: 'Settle early, save', sOnTime: 'On time', sLeft: 'Months left', sEnds: 'Final payment', sEndsV: 'Aug 2027', due: (d) => `Due ${d}`, loan: 'Business loan', ref: 'CP-20418 · 18 months',
    onTrack: 'On track', overdue: 'Overdue', paid: 'Paid', upcoming: 'Upcoming',
    next: 'Next payment', nextOverdue: 'Payment overdue', balance: 'Outstanding balance',
    progress: (p, t) => `${p} of ${t} instalments paid`, autodebit: 'Auto-debit from ••4821',
    lateCap: 'Late fee is capped at AED 200.',
    offerBadge: 'Limited offer · ends 30 Sept', offerPre: 'Save', offerT: 'Settle your loan early', offerB: 'Clear your balance before 30 Sept 2026 and keep the difference.', offerNet: 'Net saving', offerAfter: 'after 1% fee', offerA: 'See your saving',
    odT: 'Your 9 November instalment is overdue', odB: 'Pay now to bring the loan back on track.', odA: 'Pay AED 14,800',
    onTime: 'On-time payments', of: (a, b) => `${a} of ${b}`, noLate: 'No late payments', oneLate: '1 overdue',
    monthsLeft: 'Months left', endsOn: 'Ends 9 Aug 2027',
    comingUp: 'Coming up', seeAll: 'See all', histT: 'Instalment history', histSum: (p, t, amt) => `${p} of ${t} paid · AED ${amt}`, histInst: (n) => `Instalment ${n}`, histPaid: (d) => `Paid ${d} · ••4821`, histDue: (d) => `Due ${d} · Late fee capped at AED 200`, histNext: (d) => `Due ${d} · Auto-debit ••4821`, histLater: (d) => `Due ${d}`,
    inst: (n) => `Instalment ${n} of 18`, paidOn: (d) => `Paid ${d}`,
    loanTitle: 'Loan', chartT: 'Balance over time', chartC: (n) => `Down AED ${n} since March`, paidSoFar: 'Paid so far', statements: 'Statements',
    emptyT: 'No statements yet', emptyB: 'Your first monthly statement will appear here on 1 December.', emptyA: 'Email me a copy',
    payTitle: 'Payments', upTab: 'Upcoming', paidTab: 'Paid',
    meTitle: 'Profile', meT: 'Not in this prototype', meB: 'Profile and settings are outside the scope of this test.',
    months: { jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec' },
    nextDateOk: '9 December 2026', nextDateOd: '9 November 2026', dismiss: 'Dismiss', notif: 'Notifications', close: 'Close',
    nNew: 'New offer', nTime: 'Today, 9:41', nT: 'You\'ve received a 2.1% off offer', nB: 'Pay off your loan before 30 September and save 2.1% on your outstanding balance.', nDisc: 'Discount (2.1%)', nFee: 'Settlement fee (1%)', nNet: 'Your net saving', nCta: 'See your saving', nLater: 'Not now', nOff: 'off',
    inbox: 'Notifications', markAll: 'Mark all read', gNew: 'New', gEarlier: 'Earlier', back: 'Back', allCaught: 'You\'re all caught up', allCaughtB: 'Payment reminders and offers will show up here.', clearAll: 'Clear all', eHistT: 'No payments yet', eHistB: 'Your first instalment is due on 9 December. Payments will appear here.', eHistA: 'View schedule', ePaidT: 'No paid instalments yet', ePaidB: 'Each payment you make will be listed here with its receipt.', eChartT: 'No balance history yet', eChartB: 'Your balance chart starts after your first payment on 9 December.', eBankT: 'No bank account linked', eBankB: 'Link an account to pay instantly from the app.', eBankA: 'Link bank account', eBankS: 'Pay by bank transfer instead', firstDue: 'First payment', eFailT: 'Payment didn\'t go through', eFailB: 'Your bank declined this payment. No money has left your account.', eAmount: 'Amount', eAccount: 'Account', eDebited: 'Money debited', eNo: 'No', eRetry: 'Try again', eOther: 'Use another account', ePendT: 'We\'re confirming your payment', ePendB: 'Your bank is taking longer than usual. Please don\'t pay again, we\'ll notify you once it\'s confirmed.', eCheck: 'Check status', eOffT: 'No internet connection', eOffB: 'Check your connection and try again. You haven\'t been charged.', eSrvT: 'We can\'t load your loan right now', eSrvB: 'This is on our side. Nothing has changed on your loan. Please try again in a few minutes.', eSupport: 'Contact support', offBar: 'You\'re offline', offSub: 'Showing info from 9:41', retry: 'Retry', linkMore: 'Link another bank account', noAuto: 'Auto-debit not set up',
    nOfferB: 'Pay before 30 September and save 2.1%.',
    nRemT: 'Next payment on 9 December', nRemB: 'AED 14,800 will be debited from ••4821.', nRemTime: 'Yesterday', nRemA: 'View schedule',
    nRecT: 'Payment received', nRecB: (n) => `We received AED 14,800 for instalment ${n}.`, nAutoT: 'Auto-debit is on', nAutoB: 'Instalments are collected from ••4821 on the 9th.',
    nOdT: 'Instalment 9 is overdue', nOdB: 'Pay AED 14,800 to get back on track. Late fee is capped at AED 200.', nOdTime: 'Today, 8:00', nOdA: 'Pay AED 14,800',
    payingInst: (n) => `Paying instalment ${n} of 18`, dueOn: (d) => `Due ${d}`, payUsing: 'Pay using', viewAll: 'View all', less: 'Show less', acc1: 'Current account', acc2: 'Savings account', checkBal: 'Check balance', lim1: 'Instant pay limit: AED 250,000', lim2: 'Instant pay limit: AED 100,000', keepAuto: 'Keep auto-debit on', keepAutoS: 'For your remaining instalments · change anytime', faceId: 'Pay with Face ID',
    payNow: 'Pay now', payT: (n) => `Pay instalment ${n}`, payAmt: 'Amount due', payFrom: 'Pay from', mBank: 'Bank account', mBankSub: '••4821 · used for auto-debit', mCard: 'Debit card', mCardSub: '••9032', payNoteOk: 'Paying now skips the 9 December auto-debit for this instalment.', payCta: 'Pay AED 14,800', paidT: 'Payment successful', paidB: (m) => `AED 14,800 from ${m}. It can take up to 1 working day to show.`, paidRef: 'Reference',
    whoPaid: 'Layla Al Mansoori paid', payeeSub: 'Business loan · CP-20418', instTag: (n) => `Instalment ${n} of 18`, securely: 'Paid securely via', details: 'Transaction details', receipt: 'Receipt', share: 'Share', rPaidTo: 'Paid to', paidToV: 'ClearPath · Business loan', rFor: 'For', rMode: 'Payment mode', rFrom: 'From', rAuto: 'Auto-debit', autoOn: 'On', autoOff: 'Off', mInstant: 'Instant bank payment',
    nRem2T: 'Payment due tomorrow', nRem2B: 'AED 14,800 will be debited on 9 November.', nDone: 'Done',
    nav: { home: 'Home', loan: 'Loan', pay: 'Payments', me: 'Profile' },
  },
  ar: {
    welcome: 'مرحبًا بعودتك', name: 'ليلى المنصوري', hi: 'مرحبًا، ليلى', balShort: 'الرصيد', paidWord: 'مدفوع', autoShort: 'خصم تلقائي ••4821', lateShort: 'رسوم تأخير حتى 200 درهم', offerEnds: 'ينتهي 30 سبتمبر', offerSave: 'سدّد مبكرًا ووفّر', sOnTime: 'في الموعد', sLeft: 'أشهر متبقية', sEnds: 'آخر دفعة', sEndsV: 'أغسطس 2027', due: (d) => `مستحق ${d}`, loan: 'قرض تجاري', ref: 'CP-20418 · 18 شهرًا',
    onTrack: 'منتظم', overdue: 'متأخر', paid: 'مدفوع', upcoming: 'قادم',
    next: 'الدفعة التالية', nextOverdue: 'دفعة متأخرة', balance: 'الرصيد المستحق',
    progress: (p, t) => `${p} من ${t} قسطًا مدفوعة`, autodebit: 'خصم تلقائي من ••4821',
    lateCap: 'رسوم التأخير لا تتجاوز 200 درهم.',
    offerBadge: 'عرض محدود · ينتهي 30 سبتمبر', offerPre: 'وفّر', offerT: 'سدّد قرضك مبكرًا', offerB: 'سدّد رصيدك قبل 30 سبتمبر 2026 واحتفظ بالفرق.', offerNet: 'صافي التوفير', offerAfter: 'بعد رسوم 1%', offerA: 'اعرض التوفير',
    odT: 'قسط 9 نوفمبر متأخر', odB: 'ادفع الآن ليعود قرضك إلى الانتظام.', odA: 'ادفع 14,800 درهم',
    onTime: 'دفعات في موعدها', of: (a, b) => `${a} من ${b}`, noLate: 'لا دفعات متأخرة', oneLate: 'دفعة متأخرة',
    monthsLeft: 'الأشهر المتبقية', endsOn: 'ينتهي 9 أغسطس 2027',
    comingUp: 'القادم', seeAll: 'عرض الكل', histT: 'سجل الأقساط', histSum: (p, t, amt) => `${p} من ${t} مدفوعة · ${amt} درهم`, histInst: (n) => `القسط ${n}`, histPaid: (d) => `دُفع ${d} · ••4821`, histDue: (d) => `مستحق ${d} · رسوم التأخير لا تتجاوز 200 درهم`, histNext: (d) => `مستحق ${d} · خصم تلقائي من ••4821`, histLater: (d) => `مستحق ${d}`,
    inst: (n) => `القسط ${n} من 18`, paidOn: (d) => `دُفع ${d}`,
    loanTitle: 'القرض', chartT: 'الرصيد عبر الوقت', chartC: (n) => `انخفض ${n} درهم منذ مارس`, paidSoFar: 'المدفوع حتى الآن', statements: 'الكشوفات',
    emptyT: 'لا توجد كشوفات بعد', emptyB: 'سيظهر أول كشف شهري هنا في 1 ديسمبر.', emptyA: 'أرسل نسخة إلى بريدي',
    payTitle: 'الدفعات', upTab: 'القادمة', paidTab: 'المدفوعة',
    meTitle: 'حسابي', meT: 'غير مشمول في هذا النموذج', meB: 'الملف الشخصي والإعدادات خارج نطاق هذا الاختبار.',
    months: { jan: 'يناير', feb: 'فبراير', mar: 'مارس', apr: 'أبريل', may: 'مايو', jun: 'يونيو', jul: 'يوليو', aug: 'أغسطس', sep: 'سبتمبر', oct: 'أكتوبر', nov: 'نوفمبر', dec: 'ديسمبر' },
    nextDateOk: '9 ديسمبر 2026', nextDateOd: '9 نوفمبر 2026', dismiss: 'إغلاق', notif: 'الإشعارات', close: 'إغلاق',
    nNew: 'عرض جديد', nTime: 'اليوم، 9:41', nT: 'حصلت على عرض خصم 2.1%', nB: 'سدّد قرضك قبل 30 سبتمبر ووفّر 2.1% من رصيدك المستحق.', nDisc: 'الخصم (2.1%)', nFee: 'رسوم التسوية (1%)', nNet: 'صافي توفيرك', nCta: 'اعرض التوفير', nLater: 'ليس الآن', nOff: 'خصم',
    inbox: 'الإشعارات', markAll: 'تحديد الكل كمقروء', gNew: 'جديد', gEarlier: 'سابقًا', back: 'رجوع', allCaught: 'لا إشعارات جديدة', allCaughtB: 'ستظهر هنا تذكيرات الدفع والعروض.', clearAll: 'مسح الكل', eHistT: 'لا دفعات بعد', eHistB: 'أول قسط مستحق في 9 ديسمبر. ستظهر دفعاتك هنا.', eHistA: 'عرض الجدول', ePaidT: 'لا أقساط مدفوعة بعد', ePaidB: 'ستظهر كل دفعة هنا مع إيصالها.', eChartT: 'لا سجل للرصيد بعد', eChartB: 'يبدأ مخطط الرصيد بعد أول دفعة في 9 ديسمبر.', eBankT: 'لا يوجد حساب بنكي مرتبط', eBankB: 'اربط حسابًا للدفع الفوري من التطبيق.', eBankA: 'ربط حساب بنكي', eBankS: 'الدفع بالتحويل البنكي بدلًا من ذلك', firstDue: 'أول دفعة', eFailT: 'لم تتم الدفعة', eFailB: 'رفض بنكك هذه الدفعة. لم يُخصم أي مبلغ من حسابك.', eAmount: 'المبلغ', eAccount: 'الحساب', eDebited: 'تم الخصم', eNo: 'لا', eRetry: 'حاول مجددًا', eOther: 'استخدم حسابًا آخر', ePendT: 'نتحقق من دفعتك', ePendB: 'يستغرق بنكك وقتًا أطول من المعتاد. لا تدفع مرة أخرى، سنبلغك عند التأكيد.', eCheck: 'تحقق من الحالة', eOffT: 'لا يوجد اتصال بالإنترنت', eOffB: 'تحقق من اتصالك وحاول مجددًا. لم يتم خصم أي مبلغ.', eSrvT: 'تعذّر تحميل قرضك الآن', eSrvB: 'المشكلة لدينا. لم يتغير شيء في قرضك. حاول بعد بضع دقائق.', eSupport: 'تواصل مع الدعم', offBar: 'أنت غير متصل', offSub: 'بيانات من 9:41', retry: 'إعادة المحاولة', linkMore: 'ربط حساب بنكي آخر', noAuto: 'الخصم التلقائي غير مفعّل',
    nOfferB: 'سدّد قبل 30 سبتمبر ووفّر 2.1%.',
    nRemT: 'الدفعة التالية في 9 ديسمبر', nRemB: 'سيُخصم 14,800 درهم من ••4821.', nRemTime: 'أمس', nRemA: 'عرض الجدول',
    nRecT: 'تم استلام الدفعة', nRecB: (n) => `استلمنا 14,800 درهم للقسط ${n}.`, nAutoT: 'الخصم التلقائي مفعّل', nAutoB: 'تُحصّل الأقساط من ••4821 يوم 9 من كل شهر.',
    nOdT: 'القسط 9 متأخر', nOdB: 'ادفع 14,800 درهم ليعود قرضك إلى الانتظام. رسوم التأخير لا تتجاوز 200 درهم.', nOdTime: 'اليوم، 8:00', nOdA: 'ادفع 14,800 درهم',
    payingInst: (n) => `دفع القسط ${n} من 18`, dueOn: (d) => `مستحق ${d}`, payUsing: 'الدفع باستخدام', viewAll: 'عرض الكل', less: 'عرض أقل', acc1: 'الحساب الجاري', acc2: 'حساب التوفير', checkBal: 'تحقق من الرصيد', lim1: 'حد الدفع الفوري: 250,000 درهم', lim2: 'حد الدفع الفوري: 100,000 درهم', keepAuto: 'إبقاء الخصم التلقائي', keepAutoS: 'لأقساطك المتبقية · يمكنك تغييره متى شئت', faceId: 'ادفع باستخدام Face ID',
    payNow: 'ادفع الآن', payT: (n) => `دفع القسط ${n}`, payAmt: 'المبلغ المستحق', payFrom: 'الدفع من', mBank: 'الحساب البنكي', mBankSub: '••4821 · مستخدم للخصم التلقائي', mCard: 'بطاقة الخصم', mCardSub: '••9032', payNoteOk: 'الدفع الآن يلغي الخصم التلقائي في 9 ديسمبر لهذا القسط.', payCta: 'ادفع 14,800 درهم', paidT: 'تمت الدفعة بنجاح', paidB: (m) => `14,800 درهم من ${m}. قد يستغرق ظهورها يوم عمل واحدًا.`, paidRef: 'المرجع',
    whoPaid: 'ليلى المنصوري دفعت إلى', payeeSub: 'قرض تجاري · CP-20418', instTag: (n) => `القسط ${n} من 18`, securely: 'تم الدفع بأمان عبر', details: 'تفاصيل العملية', receipt: 'الإيصال', share: 'مشاركة', rPaidTo: 'الدفع إلى', paidToV: 'ClearPath · قرض تجاري', rFor: 'مقابل', rMode: 'طريقة الدفع', rFrom: 'من', rAuto: 'الخصم التلقائي', autoOn: 'مفعّل', autoOff: 'متوقف', mInstant: 'دفع بنكي فوري',
    nRem2T: 'الدفعة مستحقة غدًا', nRem2B: 'سيُخصم 14,800 درهم في 9 نوفمبر.', nDone: 'تم',
    nav: { home: 'الرئيسية', loan: 'القرض', pay: 'الدفعات', me: 'حسابي' },
  },
};

// 18 instalments, March 2026 → August 2027
function buildSchedule(t, paidCount, od) {
  return Array.from({ length: 18 }, (_, i) => {
    const mk = MONTH_KEYS[(2 + i) % 12];
    const year = 2026 + Math.floor((2 + i) / 12);
    const status = i < paidCount ? 'paid' : od && i === paidCount ? 'overdue' : 'upcoming';
    const current = od ? i === paidCount : i === paidCount;
    let detail;
    if (status === 'paid') detail = t.paidOn('9 ' + t.months[mk]);
    else if (status === 'overdue') detail = t.lateCap;
    else if (current) detail = t.autodebit;
    else if (year === 2027) detail = '2027';
    return { n: i + 1, mk, status, current, detail };
  });
}

function SheetPane({ children }) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setOn(true), 20); return () => clearTimeout(id); }, []);
  return <div style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateX(var(--cp-pane-shift, 14px))', transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)' }}>{children}</div>;
}

export function HomeScreen({ lang = 'en', loanState = 'on-track', openOfferOnMount = false, empty = false, sim = 'none' }) {
  const t = STR[lang];
  const od = !empty && loanState === 'overdue';
  const [cleared, setCleared] = React.useState(false);
  const [linked, setLinked] = React.useState(!empty);
  const [nav, setNav] = React.useState('home');
  const [payTab, setPayTab] = React.useState('upcoming');
  const [offerOpen, setOfferOpen] = React.useState(true);
  const [sheet, setSheet] = React.useState(false);
  const [view, setView] = React.useState('list');
  const [readIds, setReadIds] = React.useState([]);
  const [method, setMethod] = React.useState('acc1');
  const [payAll, setPayAll] = React.useState(false);
  const [keepAuto, setKeepAuto] = React.useState(true);
  const [paidDet, setPaidDet] = React.useState(false);
  const [offerPage, setOfferPage] = React.useState(false);
  React.useEffect(() => { setReadIds([]); setView('list'); }, [loanState]);
  const [host, setHost] = React.useState(null);
  React.useEffect(() => setHost(document.getElementById('cp-phone')), []);

  React.useEffect(() => setOfferOpen(true), [loanState]);
  const paidCount = empty ? 0 : od ? 8 : 9;
  const schedule = buildSchedule(t, paidCount, od);
  const open = schedule.filter((r) => r.status !== 'paid');
  const paidRows = schedule.filter((r) => r.status === 'paid').reverse();
  const balance = 266400 - paidCount * 14800;
  const discount = Math.round(balance * 0.021);
  const fee = Math.min(Math.round(balance * 0.01), 10000);
  const netSaving = discount - fee;
  const notifs = (empty || cleared) ? [] : od
    ? [
        { id: 'od', tone: 'danger', icon: 'circle-alert', title: t.nOdT, body: t.nOdB, time: t.nOdTime, isNew: true, cta: t.nOdA, pay: true },
        { id: 'rem2', tone: 'info', icon: 'calendar', title: t.nRem2T, body: t.nRem2B, time: '8 ' + t.months.nov, isNew: false },
        { id: 'rec8', tone: 'success', icon: 'circle-check', title: t.nRecT, body: t.nRecB(8), time: '9 ' + t.months.oct, isNew: false },
        { id: 'auto', tone: 'neutral', icon: 'repeat', title: t.nAutoT, body: t.nAutoB, time: '12 ' + t.months.mar, isNew: false },
      ]
    : [
        { id: 'offer', tone: 'offer', icon: 'badge-percent', title: t.nT, body: t.nOfferB, time: t.nTime, isNew: true },
        { id: 'rem', tone: 'info', icon: 'calendar', title: t.nRemT, body: t.nRemB, time: t.nRemTime, isNew: true, cta: t.nRemA, go: 'pay' },
        { id: 'rec9', tone: 'success', icon: 'circle-check', title: t.nRecT, body: t.nRecB(9), time: '9 ' + t.months.nov, isNew: false },
        { id: 'auto', tone: 'neutral', icon: 'repeat', title: t.nAutoT, body: t.nAutoB, time: '12 ' + t.months.mar, isNew: false },
      ];
  const isUnread = (n) => n.isNew && !readIds.includes(n.id);
  const unreadCount = notifs.filter(isUnread).length;
  const markRead = (id) => setReadIds((r) => (r.includes(id) ? r : [...r, id]));
  const openInbox = () => { setView('list'); setSheet(true); };
  const openNotif = (id) => { if (id === 'offer') { openOffer(); return; } markRead(id); setView(id); setSheet(true); };
  const openOffer = () => { markRead('offer'); setSheet(false); setOfferPage(true); };
  const closeSheet = () => setSheet(false);
  React.useEffect(() => { if (openOfferOnMount && host) { const id = setTimeout(openOffer, 250); return () => clearTimeout(id); } }, [host]);
  const openPay = () => { setPayAll(false); setPaidDet(false); setView('pay'); setSheet(true); };
  const row = (r) => <PaymentScheduleRow key={r.n} day="9" month={t.months[r.mk]} title={t.inst(r.n)} detail={r.detail} amount={14800} status={r.status} statusLabel={t[r.status]} current={r.current} onClick={() => {}} />;
  const go = (k) => { setNav(k); const sc = document.getElementById('cp-scroll'); if (sc) sc.scrollTop = 0; };
  const pageTitle = (text) => <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>{text}</h1>;

  let body;
  if (nav === 'home' && sim === 'server') {
    body = (
      <div style={{ paddingTop: '60px' }}>
        <ErrorState tone="neutral" icon="server-crash" title={t.eSrvT} actionLabel={t.eRetry} actionIcon="rotate-cw" onAction={() => {}} secondaryLabel={t.eSupport} code="Error 503 · 5 Nov 2026 9:41">{t.eSrvB}</ErrorState>
      </div>
    );
  } else if (nav === 'home') {
    body = (
      <React.Fragment>
        <header style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span aria-hidden="true" style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '15px', flex: 'none' }}>{lang === 'ar' ? 'ل' : 'LA'}</span>
          <span style={{ flex: 1, minWidth: 0, fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.hi}</span>
          <IconButton icon="bell" label={t.notif} badgeCount={unreadCount} onClick={openInbox} />
        </header>

        {sim === 'offline' && <OfflineBar title={t.offBar} label={t.offSub} actionLabel={t.retry} onAction={() => {}} />}

        <LoanStatusCard
          lead="payment" status={od ? 'overdue' : 'on-track'} statusLabel={od ? t.overdue : t.onTrack}
          title={t.loan} balanceLabel={t.balShort} balance={balance}
          nextLabel={od ? t.nextOverdue : t.next} nextDate={od ? t.nextDateOd : t.nextDateOk} nextAmount={14800}
          nextDetail={od ? t.lateShort : linked ? t.autoShort : t.noAuto}
          paidCount={paidCount} totalCount={18} progressLabel={t.paidWord}
          payLabel={t.payNow} onPay={openPay}
        />

        {offerOpen && !empty && (
          <AlertBanner key="offer" variant="offer" badge={t.offerEnds} highlightPrefix={t.offerPre} highlight="2.1%" title={<React.Fragment>{t.offerSave}{' '}<Money amount={netSaving} size="md" tone="saving" /></React.Fragment>} actionLabel={t.offerA} onAction={openOffer} onDismiss={() => setOfferOpen(false)} dismissLabel={t.dismiss} />
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', background: 'var(--cp-bg-surface)', borderRadius: 'var(--cp-radius-lg)', boxShadow: 'var(--cp-shadow-card)', padding: '14px 0' }}>
          {[
            empty ? ['—', t.sOnTime, null, null] : [od ? '8/9' : '9/9', t.sOnTime, od ? 'var(--cp-status-overdue)' : 'var(--cp-green-600)', od ? 'circle-alert' : 'circle-check'],
            [String(18 - paidCount), t.sLeft, null, 'hourglass'],
            [t.sEndsV, t.sEnds, null, 'flag'],
          ].map(([v, l, col, ic], i) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '0 8px', borderInlineStart: i ? '1px solid var(--cp-border-subtle)' : 'none', textAlign: 'center', minWidth: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '17px', fontWeight: 600, lineHeight: 1.2, color: col || 'var(--cp-text-primary)', whiteSpace: 'nowrap' }}>{col && <Icon name={ic} size={15} />}<bdi>{v}</bdi></span>
              <span style={{ fontSize: '12px', color: 'var(--cp-text-secondary)', whiteSpace: 'nowrap' }}>{l}</span>
            </div>
          ))}
        </div>

        {empty ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{t.histT}</h2>
            <EmptyState icon="receipt-text" title={t.eHistT} actionLabel={t.eHistA} onAction={() => { setPayTab('upcoming'); go('pay'); }}>{t.eHistB}</EmptyState>
          </div>
        ) : (
        <InstalmentTimeline
          title={t.histT}
          statusLabels={{ paid: '', overdue: t.overdue, upcoming: t.upcoming }}
          action={<Button variant="ghost" size="sm" onClick={() => { setPayTab('paid'); go('pay'); }}>{t.seeAll}</Button>}
          items={schedule.filter((r) => r.status !== 'upcoming').reverse().slice(0, 3).map((r) => ({ id: r.n, title: t.histInst(r.n), meta: r.status === 'overdue' ? t.due('9 ' + t.months[r.mk]) : '9 ' + t.months[r.mk], amount: 14800, status: r.status }))}
        />
        )}
      </React.Fragment>
    );
  } else if (nav === 'loan') {
    body = (
      <React.Fragment>
        {pageTitle(t.loanTitle)}
        {empty ? (
          <EmptyState icon="chart-column" title={t.eChartT}>{t.eChartB}</EmptyState>
        ) : (
        <React.Fragment>
        <BarChart title={t.chartT} value={balance} valueCurrency="AED" caption={t.chartC((paidCount * 14800).toLocaleString('en-US'))}
          data={['mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'].map((m, i) => ({ label: t.months[m], value: 266400 - Math.min(i + 1, paidCount) * 14800 }))}
          highlightIndex={paidCount - 1} formatValue={(v) => (v / 1000).toFixed(1) + 'k'} height={150} />
        <MetricTrend label={t.paidSoFar} value={paidCount * 14800} currency="AED" chart="line" data={Array.from({ length: paidCount }, (_, i) => (i + 1) * 14800)} delta={t.progress(paidCount, 18)} trend="up" sentiment="good" />
        </React.Fragment>
        )}
        <h2 style={{ margin: '8px 0 0', fontSize: '18px', fontWeight: 600 }}>{t.statements}</h2>
        <EmptyState icon="file-text" title={t.emptyT} actionLabel={t.emptyA} onAction={() => {}}>{t.emptyB}</EmptyState>
      </React.Fragment>
    );
  } else if (nav === 'pay') {
    body = (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          {pageTitle(t.payTitle)}
          <SegmentedControl size="sm" value={payTab} onChange={setPayTab} options={[{ value: 'upcoming', label: t.upTab }, { value: 'paid', label: t.paidTab }]} />
        </div>
        {payTab === 'paid' && paidRows.length === 0 ? (
          <EmptyState icon="receipt-text" title={t.ePaidT}>{t.ePaidB}</EmptyState>
        ) : (
        <InstalmentTimeline
          statusLabels={{ paid: t.paid, overdue: t.overdue, upcoming: t.upcoming }}
          items={(payTab === 'upcoming' ? open : paidRows).map((r) => {
            const d = '9 ' + t.months[r.mk] + (r.n >= 11 ? ' 2027' : '');
            const meta = r.status === 'paid' ? t.histPaid('9 ' + t.months[r.mk]) : r.status === 'overdue' ? t.histDue(d) : r.current ? t.histNext(d) : t.histLater(d);
            return { id: r.n, title: t.inst(r.n), meta, amount: 14800, status: r.status };
          })}
        />
        )}
      </React.Fragment>
    );
  } else {
    body = (
      <React.Fragment>
        {pageTitle(t.meTitle)}
        <EmptyState icon="user" title={t.meT}>{t.meB}</EmptyState>
      </React.Fragment>
    );
  }

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang} style={{ minHeight: '100%', background: 'linear-gradient(180deg, var(--cp-bg-page-tint) 0px, var(--cp-bg-page) 300px)', fontFamily: 'var(--cp-font-text)', color: 'var(--cp-text-primary)', display: 'flex', flexDirection: 'column', gap: '20px', padding: '52px var(--cp-screen-gutter) 20px', boxSizing: 'border-box' }}>
      {body}
      <div style={{ flex: 1 }}></div>
      <OfferScreen sim={sim} open={offerPage} onBack={() => setOfferPage(false)} container={host} lang={lang} balance={balance} remaining={open.map((r) => t.months[r.mk])} />
      <BottomSheet open={sheet} onClose={closeSheet} container={host} dir={lang === 'ar' ? 'rtl' : 'ltr'} title={view === 'list' ? t.inbox : view === 'pay' ? t.payT(paidCount + 1) : view === 'paid' ? t.paidT : (notifs.find((n) => n.id === view) || {}).title} closeLabel={t.close}>
        <SheetPane key={view}>
          {!['list', 'pay', 'paid', 'failed', 'pending', 'offline'].includes(view) && (
            <button type="button" onClick={() => setView('list')} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', minHeight: '36px', marginTop: '-6px', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: 'var(--cp-text-link)' }}>
              <Icon name={lang === 'ar' ? 'chevron-right' : 'chevron-left'} size={18} />{t.inbox}
            </button>
          )}
          {view === 'list' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'var(--cp-font-text)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                <h2 style={{ margin: 0, fontSize: '21px', fontWeight: 600 }}>{t.inbox}</h2>
                {unreadCount > 0 ? <Button variant="ghost" size="sm" onClick={() => setReadIds(notifs.map((n) => n.id))}>{t.markAll}</Button> : notifs.length > 0 && <Button variant="ghost" size="sm" onClick={() => setCleared(true)}>{t.clearAll}</Button>}
              </div>
              {notifs.length === 0 && <EmptyState compact tone="neutral" icon="bell-off" title={t.allCaught}>{t.allCaughtB}</EmptyState>}
              {[[t.gNew, notifs.filter((n) => n.isNew)], [t.gEarlier, notifs.filter((n) => !n.isNew)]].map(([g, list]) => list.length > 0 && (
                <div key={g} style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)', padding: '4px 12px' }}>{g}</span>
                  {list.map((n) => <NotificationItem key={n.id} tone={n.tone} icon={n.icon} title={n.title} body={n.body} time={n.time} unread={isUnread(n)} onClick={() => openNotif(n.id)} />)}
                </div>
              ))}
            </div>
          ) : view === 'pay' ? (() => {
            const due = od ? t.nextDateOd : t.nextDateOk;
            const accs = [
              { k: 'acc1', ic: 'landmark', name: t.acc1, last: '4821', limit: t.lim1 },
              { k: 'acc2', ic: 'piggy-bank', name: t.acc2, last: '7710', limit: t.lim2 },
              ...(payAll ? [{ k: 'card', ic: 'credit-card', name: t.mCard, last: '9032' }] : []),
            ];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingTop: '6px', fontFamily: 'var(--cp-font-text)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))', color: 'var(--cp-teal-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="landmark" size={22} /></span>
                  <span style={{ fontSize: '17px', fontWeight: 500 }}>{t.payingInst(paidCount + 1)}</span>
                </div>
                <bdi dir="ltr" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '6px', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', lineHeight: 1, alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
                  <span style={{ fontSize: '18px', fontWeight: 500 }}>AED</span>
                  <span style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-0.03em' }}>14,800<span style={{ color: 'var(--cp-neutral-400)' }}>.00</span></span>
                </bdi>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '16px', borderBottom: '1px solid var(--cp-border-subtle)' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: od ? 'var(--cp-red-50)' : 'var(--cp-teal-50)', color: od ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="calendar" size={15} /></span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: '14.5px' }}>{t.dueOn(due)}</span>
                  <span style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap', flex: 'none', color: od ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)' }}>{od ? t.overdue : t.onTrack}</span>
                </div>
                {od && <span style={{ fontSize: '13px', color: 'var(--cp-text-secondary)', marginTop: '-8px' }}>{t.lateCap}</span>}
                <div role="radiogroup" aria-label={t.payUsing} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14.5px', color: 'var(--cp-text-secondary)' }}>{t.payUsing}</span>
                    {linked && <button type="button" onClick={() => { setPayAll((v) => !v); if (payAll && method === 'card') setMethod('acc1'); }} style={{ all: 'unset', cursor: 'pointer', minHeight: '36px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'var(--cp-text-secondary)' }}>{payAll ? t.less : t.viewAll}<Icon name="chevrons-up-down" size={14} /></button>}
                  </div>
                  {!linked && (
                    <div style={{ borderRadius: 'var(--cp-radius-md)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', padding: '8px 14px 14px', marginTop: '4px' }}>
                      <EmptyState compact icon="landmark" title={t.eBankT} actionLabel={t.eBankA} actionIcon="plus" onAction={() => setLinked(true)} secondaryLabel={t.eBankS} onSecondary={closeSheet}>{t.eBankB}</EmptyState>
                    </div>
                  )}
                  {linked && accs.map((ac) => {
                    const on = method === ac.k;
                    return (
                      <button key={ac.k} type="button" role="radio" aria-checked={on} onClick={() => setMethod(ac.k)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 22px', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                        <span style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--cp-bg-surface)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ac.ic} size={19} /></span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}><span style={{ fontSize: '15.5px', fontWeight: 500 }}>{ac.name}</span><bdi dir="ltr" style={{ fontSize: '13.5px', color: 'var(--cp-text-secondary)' }}>•• {ac.last}</bdi></span>
                          {ac.k !== 'card' && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '13px', color: 'var(--cp-text-secondary)' }}>{t.checkBal}<Icon name={lang === 'ar' ? 'chevron-left' : 'chevron-right'} size={14} /></span>}
                          {ac.limit && <span style={{ fontSize: '12.5px', fontWeight: 500, color: 'var(--cp-green-600)' }}>{ac.limit}</span>}
                        </span>
                        <span aria-hidden="true" style={{ width: '22px', height: '22px', borderRadius: '50%', boxSizing: 'border-box', border: on ? '7px solid var(--cp-text-primary)' : '1.5px solid var(--cp-neutral-400)', transition: 'border var(--cp-dur-fast) ease' }}></span>
                      </button>
                    );
                  })}
                  {linked && payAll && (
                    <button type="button" style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 18px', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <span style={{ width: '44px', height: '44px', borderRadius: '50%', boxSizing: 'border-box', border: '1.5px dashed var(--cp-neutral-400)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus" size={19} /></span>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--cp-teal-600)' }}>{t.linkMore}</span>
                      <span style={{ color: 'var(--cp-text-secondary)', display: 'inline-flex' }}><Icon name={lang === 'ar' ? 'chevron-left' : 'chevron-right'} size={16} /></span>
                    </button>
                  )}
                </div>
                {linked && (
                <div style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr) auto', alignItems: 'center', gap: '12px', background: 'var(--cp-neutral-25)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', borderRadius: 'var(--cp-radius-md)', padding: '14px' }}>
                  <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="repeat" size={19} /></span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}><span style={{ fontSize: '14.5px', fontWeight: 500 }}>{t.keepAuto}</span><span style={{ fontSize: '12.5px', color: 'var(--cp-text-secondary)' }}>{t.keepAutoS}</span></span>
                  <button type="button" role="switch" aria-checked={keepAuto} aria-label={t.keepAuto} onClick={() => setKeepAuto((v) => !v)} style={{ all: 'unset', cursor: 'pointer', width: '51px', height: '31px', borderRadius: '16px', background: keepAuto ? 'var(--cp-teal-600)' : 'var(--cp-neutral-200)', position: 'relative', transition: 'background var(--cp-dur-base) ease' }}>
                    <span style={{ position: 'absolute', top: '2px', insetInlineStart: keepAuto ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)' }}></span>
                  </button>
                </div>
                )}
                {linked && <SlideToConfirm label={t.faceId} rtl={lang === 'ar'} onConfirm={() => setView({ payfail: 'failed', timeout: 'pending', offline: 'offline' }[sim] || 'paid')} />}
              </div>
            );
          })()
          : view === 'failed' ? (
            <ErrorState compact tone="danger" icon="circle-x" title={t.eFailT}
              details={[[t.eAmount, <Money amount={14800} size="sm" />], [t.eAccount, <bdi dir="ltr">•• {method === 'acc2' ? '7710' : method === 'card' ? '9032' : '4821'}</bdi>], [t.eDebited, t.eNo]]}
              actionLabel={t.eRetry} actionIcon="rotate-cw" onAction={() => setView('pay')} secondaryLabel={t.eOther} onSecondary={() => { setMethod(method === 'acc2' ? 'acc1' : 'acc2'); setView('pay'); }} code="Ref CP-PAY-58213 · Bank code 51">{t.eFailB}</ErrorState>
          )
          : view === 'pending' ? (
            <ErrorState compact tone="warning" icon="hourglass" title={t.ePendT}
              details={[[t.eAmount, <Money amount={14800} size="sm" />], [t.paidRef, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>CP-PAY-58213</bdi>]]}
              actionLabel={t.eCheck} actionIcon="refresh-cw" onAction={() => setView('paid')} secondaryLabel={t.nDone} onSecondary={closeSheet}>{t.ePendB}</ErrorState>
          )
          : view === 'offline' ? (
            <ErrorState compact tone="neutral" icon="wifi-off" title={t.eOffT} actionLabel={t.eRetry} actionIcon="rotate-cw" onAction={() => setView('pay')} secondaryLabel={t.nDone} onSecondary={closeSheet}>{t.eOffB}</ErrorState>
          )
          : view === 'paid' ? (() => {
            const accName = { acc1: [t.acc1, '4821'], acc2: [t.acc2, '7710'], card: [t.mCard, '9032'] }[method];
            const rowS = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', minHeight: '46px', fontSize: '13.5px' };
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: 'var(--cp-font-text)' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '-4px' }}>
                  <IconButton icon="download" label={t.receipt} variant="soft" size="sm" />
                  <IconButton icon="share-2" label={t.share} variant="soft" size="sm" />
                </div>
                <section style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--cp-radius-lg)', background: 'repeating-radial-gradient(circle at 50% 50%, rgba(20,122,110,0) 0 22px, rgba(20,122,110,0.07) 22px 23px), radial-gradient(circle at 50% 50%, var(--cp-teal-50) 0, rgba(229,243,240,0) 42%), #fbfaf6', boxShadow: 'inset 0 0 0 8px #fbfaf6, inset 0 0 0 9px rgba(20,122,110,0.2)', padding: '26px 20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span aria-hidden="true" style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--cp-teal-50)', color: 'var(--cp-teal-800)', boxShadow: '0 0 0 4px #fff, 0 4px 14px rgba(22,24,29,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 600 }}>{lang === 'ar' ? 'ل' : 'LA'}</span>
                  <span style={{ fontSize: '14.5px', fontWeight: 500, marginTop: '12px', color: 'var(--cp-text-secondary)' }}>{t.whoPaid}</span>
                  <span style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>ClearPath</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--cp-text-secondary)', marginTop: '2px' }}><Icon name="landmark" size={14} /><bdi>{t.payeeSub}</bdi></span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '28px 0 26px' }}>
                    <Money amount={14800} size="hero" weight={700} />
                    <span style={{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 12px', background: '#fff', boxShadow: '0 0 0 1px var(--cp-border-subtle)', fontSize: '12.5px', fontWeight: 500, letterSpacing: '0.02em' }}>{t.instTag(paidCount + 1)}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 500, color: 'var(--cp-green-600)' }}><Icon name="circle-check" size={14} />{t.paidT}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--cp-text-secondary)' }}>{t.securely}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14.5px', fontWeight: 600, marginTop: '3px' }}><Icon name={method === 'card' ? 'credit-card' : 'zap'} size={15} />{method === 'card' ? t.mCard : t.mInstant}</span>
                  <span style={{ fontSize: '12px', color: 'var(--cp-text-secondary)', marginTop: '2px' }}>{accName[0]} <bdi dir="ltr">•• {accName[1]}</bdi></span>
                  <div dir="ltr" style={{ alignSelf: 'stretch', margin: '22px -20px 0', padding: '12px 10px 16px', borderTop: '1px dashed rgba(20,122,110,0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cp-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                    <span>5 Nov 2026, 9:41 AM</span><span aria-hidden="true" style={{ width: '1px', height: '12px', background: 'var(--cp-neutral-400)' }}></span><span>TXN 830211458213</span>
                  </div>
                </section>
                <button type="button" aria-expanded={paidDet} onClick={() => setPaidDet((v) => !v)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', minHeight: '48px', padding: '0 14px', borderRadius: 'var(--cp-radius-md)', boxShadow: '0 0 0 1px var(--cp-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14.5px', fontWeight: 600 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}><Icon name="receipt-text" size={18} />{t.details}</span>
                  <span style={{ display: 'inline-flex', transform: paidDet ? 'rotate(180deg)' : 'none', transition: 'transform var(--cp-dur-base) var(--cp-ease)', color: 'var(--cp-text-secondary)' }}><Icon name="chevron-down" size={18} /></span>
                </button>
                {paidDet && (
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px', marginTop: '-6px' }}>
                    {[
                      [t.rPaidTo, <span style={{ fontWeight: 500 }}>{t.paidToV}</span>],
                      [t.rFor, <span style={{ fontWeight: 500 }}>{t.inst(paidCount + 1)}</span>],
                      [t.rMode, <span style={{ fontWeight: 500 }}>{method === 'card' ? t.mCard : t.mInstant}</span>],
                      [t.rFrom, <span style={{ fontWeight: 500 }}>{accName[0]} <bdi dir="ltr" style={{ color: 'var(--cp-text-secondary)', fontWeight: 400 }}>•• {accName[1]}</bdi></span>],
                      [t.paidRef, <bdi dir="ltr" style={{ fontFamily: 'var(--cp-font-mono)', fontSize: '13px' }}>CP-PAY-58213</bdi>],
                      [t.rAuto, <span style={{ fontWeight: 500, color: keepAuto ? 'var(--cp-green-600)' : 'var(--cp-text-secondary)' }}>{keepAuto ? t.autoOn : t.autoOff}</span>],
                    ].map(([l, v], i) => (
                      <div key={i} style={{ ...rowS, borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none' }}>
                        <span style={{ color: 'var(--cp-text-secondary)', flex: 'none' }}>{l}</span>
                        <span style={{ textAlign: 'end', minWidth: 0 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Button fullWidth onClick={closeSheet}>{t.nDone}</Button>
              </div>
            );
          })()
          : (() => {
            const n = notifs.find((n) => n.id === view);
            if (!n) return null;
            const tone = { danger: ['var(--cp-red-50)', 'var(--cp-red-600)'], info: ['var(--cp-teal-50)', 'var(--cp-teal-600)'], success: ['var(--cp-green-50)', 'var(--cp-green-600)'], neutral: ['var(--cp-bg-sunken)', 'var(--cp-text-secondary)'] }[n.tone];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: 'var(--cp-font-text)' }}>
                <span style={{ width: '56px', height: '56px', borderRadius: '50%', background: tone[0], color: tone[1], display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={n.icon} size={26} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--cp-text-secondary)' }}>{n.time}</span>
                  <h2 style={{ margin: 0, fontSize: '21px', fontWeight: 600, lineHeight: 1.25 }}>{n.title}</h2>
                  <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.5, color: 'var(--cp-text-secondary)' }}>{n.body}</p>
                </div>
                <Button fullWidth onClick={() => { if (n.pay) { setView('pay'); return; } closeSheet(); if (n.go) go(n.go); }}>{n.cta || t.nDone}</Button>
              </div>
            );
          })()}
        </SheetPane>
      </BottomSheet>

      <div style={{ position: 'sticky', bottom: '20px', display: 'flex', justifyContent: 'center', marginTop: '12px', zIndex: 5 }}>
        <BottomNav value={nav} onChange={go} items={[{ key: 'home', icon: 'house', label: t.nav.home }, { key: 'loan', icon: 'landmark', label: t.nav.loan }, { key: 'pay', icon: 'credit-card', label: t.nav.pay }, { key: 'me', icon: 'user', label: t.nav.me }]} />
      </div>
    </div>
  );
}
