// Preview loader for cards and UI kits: loads React + Babel, compiles every component
// into window.CP, then runs any <script type="text/x-cp"> blocks with components in scope.
(function () {
  var base = document.currentScript.src.replace(/components\/_preview\.js.*$/, '');
  var FILES = [
    'components/core/Icon.jsx', 'components/core/IconButton.jsx', 'components/core/Money.jsx', 'components/core/Button.jsx', 'components/core/SlideToConfirm.jsx',
    'components/navigation/SegmentedControl.jsx', 'components/navigation/BottomNav.jsx', 'components/data/BarChart.jsx',
    'components/schedule/StatusChip.jsx', 'components/schedule/PaymentScheduleRow.jsx', 'components/schedule/InstalmentTimeline.jsx',
    'components/loan/LoanStatusCard.jsx', 'components/feedback/AlertBanner.jsx', 'components/feedback/BottomSheet.jsx', 'components/feedback/NotificationItem.jsx', 'components/feedback/ErrorState.jsx',
    'components/data/MetricTrend.jsx', 'components/states/EmptyState.jsx',
  ];
  function load(src) {
    return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  }
  window.cpReady = (async function () {
    if (!window.React) {
      await load('https://unpkg.com/react@18.3.1/umd/react.development.js');
      await load('https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js');
    }
    if (!window.Babel) await load('https://unpkg.com/@babel/standalone@7.24.7/babel.min.js');
    var urls = FILES.map(function (f) { return base + f; }).concat(window.CP_EXTRA || []);
    var srcs = await Promise.all(urls.map(function (u) { return fetch(u).then(function (r) { return r.text(); }); }));
    var code = srcs.join('\n').replace(/^\s*import[^\n]*\n/gm, '').replace(/export\s+function/g, 'function');
    var names = Array.from(code.matchAll(/^function\s+([A-Z]\w*)/gm)).map(function (m) { return m[1]; });
    code += '\nwindow.CP = Object.assign(window.CP || {}, {' + names.join(',') + '});';
    new Function(Babel.transform(code, { presets: ['react'] }).code)();
    var prelude = 'const {' + names.join(',') + '} = window.CP;\n';
    document.querySelectorAll('script[type="text/x-cp"]').forEach(function (s) {
      new Function(Babel.transform(prelude + s.textContent, { presets: ['react'] }).code)();
    });
    return window.CP;
  })();
  window.cpReady.catch(function (e) { console.error('[cp preview]', e); });
})();
