// Precompiled ClearPath components (generated from components/*.jsx and ui_kits/app/*.jsx). No network or Babel needed.
(function(){
  function run(){ function Icon({
  name,
  size = 20,
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + name,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      fontSize: size + 'px',
      lineHeight: 1,
      width: size + 'px',
      height: size + 'px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontStyle: 'normal',
      color: color || 'currentColor',
      flex: 'none'
    }
  });
}
const ICONBTN_VARIANTS = {
  surface: {
    bg: 'var(--cp-bg-surface)',
    hover: 'var(--cp-neutral-25)',
    fg: 'var(--cp-text-primary)',
    shadow: 'var(--cp-shadow-card)'
  },
  soft: {
    bg: 'var(--cp-action-soft)',
    hover: 'var(--cp-action-soft-hover)',
    fg: 'var(--cp-text-primary)',
    shadow: 'none'
  },
  inverse: {
    bg: 'var(--cp-action-primary)',
    hover: 'var(--cp-action-primary-hover)',
    fg: '#fff',
    shadow: 'none'
  },
  glass: {
    bg: 'var(--cp-bg-glass)',
    hover: 'rgba(255,255,255,0.2)',
    fg: '#fff',
    shadow: 'none'
  }
};
function IconButton({
  icon,
  label,
  onClick,
  variant = 'surface',
  size = 'md',
  badge = false,
  badgeCount = 0
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = ICONBTN_VARIANTS[variant] || ICONBTN_VARIANTS.surface;
  const d = size === 'sm' ? 44 : 48;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": badgeCount > 0 ? `${label} (${badgeCount})` : label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: d + 'px',
      height: d + 'px',
      borderRadius: '50%',
      border: 'none',
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
      flex: 'none',
      background: hover ? v.hover : v.bg,
      color: v.fg,
      boxShadow: v.shadow,
      transform: press ? 'scale(0.94)' : 'none',
      transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  }), badge && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '11px',
      insetInlineEnd: '12px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--cp-status-overdue)',
      boxShadow: '0 0 0 2px ' + (variant === 'surface' ? '#fff' : 'transparent')
    }
  }), badgeCount > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '4px',
      insetInlineEnd: '2px',
      minWidth: '20px',
      height: '20px',
      padding: '0 5px',
      boxSizing: 'border-box',
      borderRadius: '10px',
      background: 'var(--cp-status-overdue)',
      color: '#fff',
      fontSize: '11px',
      fontWeight: 600,
      lineHeight: '20px',
      textAlign: 'center',
      fontFamily: 'var(--cp-font-text)',
      boxShadow: '0 0 0 2px var(--cp-bg-page)'
    }
  }, badgeCount > 9 ? '9+' : badgeCount));
}
const MONEY_SIZES = {
  sm: [14, 11],
  md: [16, 12],
  lg: [22, 14],
  xl: [28, 16],
  hero: [38, 18]
};
const MONEY_TONES = {
  default: 'var(--cp-text-primary)',
  saving: 'var(--cp-money-saving)',
  in: 'var(--cp-money-in)',
  out: 'var(--cp-money-out)',
  muted: 'var(--cp-text-secondary)',
  danger: 'var(--cp-status-overdue)',
  inverse: 'var(--cp-text-on-dark)'
};
function Money({
  amount,
  currency = 'AED',
  size = 'md',
  tone = 'default',
  sign = '',
  weight
}) {
  const [n, c] = MONEY_SIZES[size] || MONEY_SIZES.md;
  const w = weight ?? (size === 'hero' || size === 'xl' ? 700 : 600);
  const num = typeof amount === 'number' ? amount.toLocaleString('en-US', {
    maximumFractionDigits: 2
  }) : amount;
  return /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.28em',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--cp-font-text)',
      fontVariantNumeric: 'tabular-nums',
      color: MONEY_TONES[tone] || MONEY_TONES.default,
      lineHeight: 1.1,
      letterSpacing: n >= 28 ? 'var(--cp-tracking-figure)' : '0'
    }
  }, sign && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: n + 'px',
      fontWeight: w
    }
  }, sign), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: c + 'px',
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  }, currency), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: n + 'px',
      fontWeight: w
    }
  }, num));
}
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconEnd,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const h = hover && !disabled;
  const variants = {
    primary: {
      background: h ? 'var(--cp-action-primary-hover)' : 'var(--cp-action-primary)',
      color: 'var(--cp-action-primary-text)'
    },
    accent: {
      background: h ? 'var(--cp-teal-400)' : 'var(--cp-action-accent)',
      color: 'var(--cp-action-accent-text)'
    },
    soft: {
      background: h ? 'var(--cp-action-soft-hover)' : 'var(--cp-action-soft)',
      color: 'var(--cp-text-primary)'
    },
    inverse: {
      background: h ? 'var(--cp-neutral-25)' : '#ffffff',
      color: 'var(--cp-text-primary)'
    },
    ghost: {
      background: h ? 'rgba(22,24,29,0.05)' : 'transparent',
      color: 'var(--cp-text-link)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--cp-font-text)',
      fontSize: size === 'sm' ? '14px' : '15px',
      fontWeight: 500,
      lineHeight: 1.2,
      minHeight: size === 'sm' ? 'var(--cp-touch-min)' : 'var(--cp-touch-comfortable)',
      padding: size === 'sm' ? '0 18px' : '0 24px',
      borderRadius: 'var(--cp-radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
      boxSizing: 'border-box',
      opacity: disabled ? 0.4 : 1,
      whiteSpace: 'nowrap',
      transform: press && !disabled ? 'scale(0.97)' : 'none',
      transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease',
      ...(variants[variant] || variants.primary)
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), children, iconEnd && /*#__PURE__*/React.createElement(Icon, {
    name: iconEnd,
    size: 18
  }));
}
function SlideToConfirm({
  label,
  onConfirm,
  rtl
}) {
  const track = React.useRef(null);
  const startX = React.useRef(0);
  const moved = React.useRef(false);
  const [x, setX] = React.useState(0);
  const [drag, setDrag] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const KNOB = 84,
    PAD = 6;
  const max = () => track.current ? track.current.offsetWidth - KNOB - PAD * 2 : 200;
  const finish = () => {
    setX(max());
    setDone(true);
    setTimeout(onConfirm, 320);
  };
  const down = e => {
    if (done) return;
    startX.current = e.clientX;
    moved.current = false;
    setDrag(true);
    if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = e => {
    if (!drag) return;
    let dx = e.clientX - startX.current;
    if (rtl) dx = -dx;
    if (Math.abs(dx) > 4) moved.current = true;
    setX(Math.max(0, Math.min(max(), dx)));
  };
  const up = () => {
    if (!drag) return;
    setDrag(false);
    if (x > max() * 0.82) finish();else setX(0);
  };
  const progress = Math.min(1, x / (max() || 1));
  return /*#__PURE__*/React.createElement("div", {
    ref: track,
    role: "button",
    tabIndex: 0,
    "aria-label": label,
    onClick: () => {
      if (moved.current) {
        moved.current = false;
        return;
      }
      if (!done) finish();
    },
    onKeyDown: e => {
      if ((e.key === 'Enter' || e.key === ' ') && !done) {
        e.preventDefault();
        finish();
      }
    },
    style: {
      position: 'relative',
      height: '64px',
      borderRadius: 'var(--cp-radius-pill)',
      background: 'var(--cp-bg-inverse)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      touchAction: 'none',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      insetInlineStart: 0,
      width: KNOB + PAD * 2 + x + 'px',
      background: 'rgba(127,216,198,0.14)',
      borderRadius: 'var(--cp-radius-pill)',
      transition: drag ? 'none' : 'width var(--cp-dur-base) var(--cp-ease)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontSize: '16px',
      fontWeight: 600,
      paddingInlineStart: KNOB / 2 + 'px',
      opacity: 1 - progress * 0.85,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    onPointerDown: down,
    onPointerMove: move,
    onPointerUp: up,
    onPointerCancel: up,
    style: {
      position: 'absolute',
      top: PAD + 'px',
      insetInlineStart: PAD + 'px',
      width: KNOB + 'px',
      height: 64 - PAD * 2 + 'px',
      borderRadius: 'var(--cp-radius-pill)',
      background: 'var(--cp-action-accent)',
      color: 'var(--cp-action-accent-text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(127,216,198,0.35)',
      cursor: drag ? 'grabbing' : 'grab',
      transform: `translateX(${rtl ? -x : x}px)`,
      transition: drag ? 'none' : 'transform var(--cp-dur-base) var(--cp-ease)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: done ? 'check' : rtl ? 'arrow-left' : 'arrow-right',
    size: 24
  })));
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  tone = 'light',
  size = 'md',
  fullWidth = false,
  label
}) {
  const n = options.length || 1;
  const idx = Math.max(0, options.findIndex(o => o.value === value));
  const dark = tone === 'dark';
  const inner = size === 'sm' ? 36 : 40;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    style: {
      position: 'relative',
      display: fullWidth ? 'grid' : 'inline-grid',
      gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
      padding: '4px',
      borderRadius: 'var(--cp-radius-pill)',
      background: dark ? 'var(--cp-bg-glass)' : 'var(--cp-bg-surface)',
      boxShadow: dark ? 'none' : 'var(--cp-shadow-card)',
      boxSizing: 'border-box',
      fontFamily: 'var(--cp-font-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '4px',
      bottom: '4px',
      insetInlineStart: `calc(4px + (100% - 8px) * ${idx} / ${n})`,
      width: `calc((100% - 8px) / ${n})`,
      borderRadius: 'var(--cp-radius-pill)',
      background: dark ? 'var(--cp-action-accent)' : 'var(--cp-action-primary)',
      transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)'
    }
  }), options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        all: 'unset',
        position: 'relative',
        zIndex: 1,
        cursor: 'pointer',
        minHeight: inner + 'px',
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        fontSize: size === 'sm' ? '13.5px' : '14.5px',
        fontWeight: 500,
        color: on ? dark ? 'var(--cp-action-accent-text)' : '#fff' : dark ? '#fff' : 'var(--cp-text-secondary)',
        transition: 'color var(--cp-dur-base) ease'
      }
    }, o.label);
  }));
}
function BottomNav({
  items = [],
  value,
  onChange,
  label = 'Main'
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": label,
    style: {
      display: 'inline-flex',
      gap: '6px',
      padding: '6px',
      borderRadius: 'var(--cp-radius-pill)',
      background: 'var(--cp-bg-inverse)',
      boxShadow: 'var(--cp-shadow-float)',
      fontFamily: 'var(--cp-font-text)'
    }
  }, items.map(it => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      "aria-label": it.label,
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange && onChange(it.key),
      style: {
        all: 'unset',
        cursor: 'pointer',
        height: '48px',
        minWidth: '48px',
        boxSizing: 'border-box',
        paddingInline: on ? '14px 18px' : '0',
        borderRadius: 'var(--cp-radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: on ? '8px' : '0',
        background: on ? 'var(--cp-action-accent)' : 'rgba(255,255,255,0.08)',
        color: on ? 'var(--cp-action-accent-text)' : '#fff',
        transition: 'background var(--cp-dur-base) var(--cp-ease), padding var(--cp-dur-base) var(--cp-ease), gap var(--cp-dur-base) var(--cp-ease)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        maxWidth: on ? '120px' : '0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontSize: '14px',
        fontWeight: 600,
        transition: 'max-width var(--cp-dur-base) var(--cp-ease)'
      }
    }, it.label));
  }));
}
function BarChart({
  title,
  value,
  valueCurrency,
  caption,
  data = [],
  highlightIndex,
  formatValue,
  tone = 'light',
  height = 150,
  action
}) {
  const fmt = formatValue || (v => v.toLocaleString('en-US'));
  const [sel, setSel] = React.useState(highlightIndex ?? data.length - 1);
  const [grown, setGrown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => {
    setSel(highlightIndex ?? data.length - 1);
  }, [highlightIndex, data.length]);
  React.useEffect(() => {
    if (grown) return;
    const id = setTimeout(() => setGrown(true), 20);
    return () => clearTimeout(id);
  }, []);
  const dark = tone === 'dark';
  const max = Math.max(1, ...data.map(d => d.value));
  const c = dark ? {
    bg: 'var(--cp-bg-inverse)',
    fg: '#fff',
    muted: 'var(--cp-text-on-dark-muted)',
    bar: 'var(--cp-chart-bar-on-dark)',
    hi: 'var(--cp-chart-highlight-on-dark)',
    tipBg: '#fff',
    tipFg: 'var(--cp-text-primary)',
    grid: 'rgba(255,255,255,0.1)'
  } : {
    bg: 'var(--cp-bg-surface)',
    fg: 'var(--cp-text-primary)',
    muted: 'var(--cp-text-secondary)',
    bar: 'var(--cp-chart-bar)',
    hi: 'var(--cp-chart-highlight)',
    tipBg: 'var(--cp-bg-inverse)',
    tipFg: '#fff',
    grid: 'var(--cp-border-subtle)'
  };
  const cols = `repeat(${data.length}, minmax(0,1fr))`;
  // Long labels (e.g. Arabic month names) in narrow columns: show only ends + selected
  const plotH = height - 30;
  const showAllLabels = data.length <= 6 || data.every(d => String(d.label).length <= 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: c.bg,
      color: c.fg,
      borderRadius: 'var(--cp-radius-lg)',
      boxShadow: dark ? 'none' : 'var(--cp-shadow-card)',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'var(--cp-font-text)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: c.muted
    }
  }, title), value != null && (valueCurrency ? /*#__PURE__*/React.createElement(Money, {
    amount: value,
    currency: valueCurrency,
    size: "xl",
    tone: dark ? 'inverse' : 'default'
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, value)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: c.muted
    }
  }, caption)), action), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      position: 'relative',
      height: height + 'px',
      paddingTop: '30px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '30px 0 0 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      borderTop: '1px dashed ' + c.grid
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: cols,
      gap: '8px'
    }
  }, data.map((d, i) => {
    const on = i === sel;
    const px = grown ? Math.max(6, d.value / max * 100) / 100 * plotH : 0;
    return /*#__PURE__*/React.createElement("button", {
      key: d.label + i,
      type: "button",
      "aria-label": `${d.label}: ${fmt(d.value)}`,
      "aria-pressed": on,
      onClick: () => setSel(i),
      style: {
        all: 'unset',
        cursor: 'pointer',
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: '30px',
        height: px + 'px',
        borderRadius: '10px',
        background: on ? c.hi : c.bar,
        transition: `height var(--cp-dur-slow) var(--cp-ease) ${i * 30}ms, background var(--cp-dur-base) ease`
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '6px',
        left: '50%',
        width: '6px',
        height: '6px',
        marginLeft: '-3px',
        borderRadius: '50%',
        background: c.bg
      }
    })), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: px + 8 + 'px',
        transform: 'translateX(-50%)',
        background: c.tipBg,
        color: c.tipFg,
        fontSize: '11px',
        fontWeight: 600,
        lineHeight: 1,
        padding: '6px 8px',
        borderRadius: 'var(--cp-radius-pill)',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums',
        transition: 'bottom var(--cp-dur-slow) var(--cp-ease)',
        zIndex: 1
      }
    }, fmt(d.value)));
  }))), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: '8px'
    }
  }, data.map((d, i) => {
    const show = showAllLabels || i === sel || i === 0 || i === data.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        textAlign: 'center',
        fontSize: '11px',
        lineHeight: 1.2,
        color: i === sel ? c.fg : c.muted,
        fontWeight: i === sel ? 600 : 400,
        whiteSpace: 'nowrap',
        overflow: 'visible',
        visibility: show ? 'visible' : 'hidden'
      }
    }, d.label);
  })));
}
const CHIP_TONES = {
  paid: {
    bg: 'var(--cp-status-paid)',
    fg: '#ffffff',
    label: 'Paid',
    mark: 'dot'
  },
  overdue: {
    bg: 'var(--cp-status-overdue)',
    fg: '#ffffff',
    label: 'Overdue',
    mark: 'square'
  },
  upcoming: {
    bg: 'var(--cp-status-upcoming-bg)',
    fg: 'var(--cp-status-upcoming)',
    label: 'Upcoming',
    mark: 'ring'
  }
};
function StatusChip({
  status = 'upcoming',
  label,
  size = 'md',
  onDark = false
}) {
  let t = CHIP_TONES[status] || CHIP_TONES.upcoming;
  if (onDark && status !== 'overdue') t = {
    ...t,
    bg: 'rgba(255,255,255,0.16)',
    fg: '#ffffff'
  };
  const mark = {
    width: '6px',
    height: '6px',
    flex: 'none',
    boxSizing: 'border-box',
    borderRadius: t.mark === 'square' ? '1px' : '50%',
    background: t.mark === 'ring' ? 'transparent' : t.fg,
    border: t.mark === 'ring' ? '1.5px solid ' + t.fg : 'none'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      height: size === 'sm' ? '22px' : '26px',
      padding: size === 'sm' ? '0 9px' : '0 11px',
      borderRadius: 'var(--cp-radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--cp-font-text)',
      fontSize: size === 'sm' ? '11.5px' : '12.5px',
      fontWeight: 500,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: mark
  }), label ?? t.label);
}
function PaymentScheduleRow({
  day,
  month,
  title,
  detail,
  amount,
  currency = 'AED',
  status = 'upcoming',
  statusLabel,
  current = false,
  onClick
}) {
  const [press, setPress] = React.useState(false);
  const interactive = typeof onClick === 'function';
  const Tag = interactive ? 'button' : 'div';
  const tone = status === 'overdue' ? 'danger' : status === 'paid' ? 'muted' : 'default';
  return /*#__PURE__*/React.createElement(Tag, {
    type: interactive ? 'button' : undefined,
    onClick: onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      all: interactive ? 'unset' : undefined,
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1fr) auto',
      gap: '12px',
      alignItems: 'center',
      minHeight: '68px',
      padding: '12px 14px',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'start',
      background: 'var(--cp-bg-surface)',
      borderRadius: 'var(--cp-radius-md)',
      boxShadow: current ? '0 0 0 1.5px var(--cp-text-primary)' : 'var(--cp-shadow-card)',
      cursor: interactive ? 'pointer' : 'default',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      transform: press ? 'scale(0.985)' : 'none',
      transition: 'transform var(--cp-dur-fast) var(--cp-ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1px',
      background: current ? 'var(--cp-bg-inverse)' : 'var(--cp-bg-sunken)',
      color: current ? '#fff' : 'var(--cp-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '9.5px',
      fontWeight: 500,
      lineHeight: 1.1,
      opacity: 0.8
    }
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: status === 'overdue' ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)',
      lineHeight: 1.4
    }
  }, detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement(Money, {
    amount: amount,
    currency: currency,
    tone: tone
  }), /*#__PURE__*/React.createElement(StatusChip, {
    status: status,
    label: statusLabel,
    size: "sm"
  })));
}
const TL_STATUS = {
  paid: {
    icon: 'circle-check',
    bg: 'var(--cp-green-50)',
    fg: 'var(--cp-green-600)'
  },
  overdue: {
    icon: 'circle-alert',
    bg: 'var(--cp-red-50)',
    fg: 'var(--cp-red-600)'
  },
  upcoming: {
    icon: 'clock',
    bg: 'var(--cp-bg-sunken)',
    fg: 'var(--cp-text-secondary)'
  }
};
function InstalmentTimeline({
  title,
  summary,
  items = [],
  currency = 'AED',
  action,
  statusLabels = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cp-bg-surface)',
      borderRadius: 'var(--cp-radius-lg)',
      boxShadow: 'var(--cp-shadow-card)',
      padding: title ? '18px 16px 6px' : '4px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      boxSizing: 'border-box'
    }
  }, (title || summary || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, title), summary && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 400,
      color: 'var(--cp-text-secondary)',
      lineHeight: 1.4
    }
  }, summary)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '-8px',
      marginInlineEnd: '-8px'
    }
  }, action)), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => {
    const st = TL_STATUS[it.status] || TL_STATUS.paid;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id ?? i,
      style: {
        display: 'grid',
        gridTemplateColumns: '40px minmax(0,1fr) auto',
        columnGap: '12px',
        alignItems: 'center',
        minHeight: '68px',
        padding: '12px 0',
        boxSizing: 'border-box',
        borderTop: i === 0 ? 'none' : '1px solid var(--cp-border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: st.bg,
        color: st.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: st.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15px',
        fontWeight: 500,
        lineHeight: 1.25
      }
    }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12.5px',
        fontWeight: 400,
        lineHeight: 1.35,
        color: it.status === 'overdue' ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)'
      }
    }, it.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '3px'
      }
    }, /*#__PURE__*/React.createElement(Money, {
      amount: it.amount,
      currency: currency,
      size: "md",
      weight: 600,
      tone: it.status === 'overdue' ? 'danger' : 'default'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.2,
        color: st.fg
      }
    }, statusLabels[it.status] ?? it.status)));
  })));
}

// Credit-card style surface: mint glow, concentric guilloche rings, diagonal sheen, deep-teal base
const HERO_BG = ['radial-gradient(120% 90% at 105% -5%, rgba(127,216,198,0.38) 0%, rgba(127,216,198,0) 55%)', 'radial-gradient(80% 70% at -10% 110%, rgba(76,195,173,0.22) 0%, rgba(76,195,173,0) 60%)', 'repeating-radial-gradient(circle at 108% -8%, rgba(255,255,255,0) 0 26px, rgba(255,255,255,0.07) 26px 27px)', 'repeating-linear-gradient(125deg, rgba(255,255,255,0) 0 14px, rgba(255,255,255,0.025) 14px 15px)', 'linear-gradient(155deg, var(--cp-bg-hero) 0%, var(--cp-bg-hero-deep) 100%)'].join(', ');
const LOAN_CHIP = {
  'on-track': ['paid', 'On track'],
  'due-soon': ['upcoming', 'Due soon'],
  overdue: ['overdue', 'Overdue'],
  closed: ['upcoming', 'Closed']
};
function LoanStatusCard({
  status = 'on-track',
  statusLabel,
  title = 'Business loan',
  reference,
  balanceLabel = 'Outstanding balance',
  balance,
  currency = 'AED',
  nextLabel,
  nextDate,
  nextAmount,
  nextDetail,
  note,
  paidCount = 0,
  totalCount = 0,
  progressLabel,
  actions = [],
  lead = 'balance',
  payLabel,
  onPay
}) {
  const [chip, chipDefault] = LOAN_CHIP[status] || LOAN_CHIP['on-track'];
  const overdue = status === 'overdue';
  const segs = Array.from({
    length: totalCount
  }, (_, i) => i < paidCount ? 'paid' : overdue && i === paidCount ? 'overdue' : 'open');
  const segColor = {
    paid: 'var(--cp-teal-300)',
    overdue: 'var(--cp-status-overdue)',
    open: 'rgba(255,255,255,0.16)'
  };
  const track = totalCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": totalCount,
    "aria-valuenow": paidCount,
    style: {
      display: 'flex',
      gap: '3px',
      height: '6px'
    }
  }, segs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      borderRadius: '3px',
      background: segColor[s]
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--cp-text-on-dark-muted)'
    }
  }, progressLabel ?? `${paidCount} of ${totalCount} instalments paid`));
  if (lead === 'payment') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: HERO_BG,
        isolation: 'isolate',
        color: 'var(--cp-text-on-dark)',
        borderRadius: 'var(--cp-radius-lg)',
        padding: '20px 18px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        fontFamily: 'var(--cp-font-text)',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15px',
        fontWeight: 500,
        lineHeight: 1.3
      }
    }, title), reference && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-on-dark-muted)',
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("bdi", null, reference))), /*#__PURE__*/React.createElement(StatusChip, {
      status: chip,
      label: statusLabel ?? chipDefault,
      onDark: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: 'var(--cp-text-on-dark-muted)'
      }
    }, nextLabel ?? (overdue ? 'Payment overdue' : 'Next payment')), nextAmount != null && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px 12px'
      }
    }, /*#__PURE__*/React.createElement(Money, {
      amount: nextAmount,
      currency: currency,
      size: "hero",
      tone: "inverse"
    }), payLabel && /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      onClick: onPay
    }, payLabel)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '6px 16px',
        marginTop: '4px',
        fontSize: '13px',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 14
    }), nextDate), (note || nextDetail) && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        whiteSpace: 'nowrap',
        color: overdue ? '#ffb4ac' : 'var(--cp-text-on-dark-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: overdue ? 'circle-alert' : 'repeat',
      size: 14
    }), note || nextDetail))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--cp-bg-glass)',
        borderRadius: 'var(--cp-radius-md)',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-on-dark-muted)'
      }
    }, balanceLabel), /*#__PURE__*/React.createElement(Money, {
      amount: balance,
      currency: currency,
      size: "md",
      tone: "inverse"
    })), totalCount > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-on-dark-muted)'
      }
    }, progressLabel ?? 'Paid'), /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.1,
        fontVariantNumeric: 'tabular-nums'
      }
    }, paidCount, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cp-text-on-dark-muted)',
        fontWeight: 500
      }
    }, "/", totalCount)))), totalCount > 0 && /*#__PURE__*/React.createElement("div", {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": totalCount,
      "aria-valuenow": paidCount,
      style: {
        display: 'flex',
        gap: '3px',
        height: '6px'
      }
    }, segs.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        borderRadius: '3px',
        background: segColor[s]
      }
    })))));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: HERO_BG,
      isolation: 'isolate',
      color: 'var(--cp-text-on-dark)',
      borderRadius: 'var(--cp-radius-lg)',
      padding: '20px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      fontFamily: 'var(--cp-font-text)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, title), reference && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--cp-text-on-dark-muted)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("bdi", null, reference))), /*#__PURE__*/React.createElement(StatusChip, {
    status: chip,
    label: statusLabel ?? chipDefault,
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--cp-text-on-dark-muted)'
    }
  }, balanceLabel), /*#__PURE__*/React.createElement(Money, {
    amount: balance,
    currency: currency,
    size: "hero",
    tone: "inverse"
  }), totalCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": totalCount,
    "aria-valuenow": paidCount,
    style: {
      display: 'flex',
      gap: '3px',
      height: '6px'
    }
  }, segs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      borderRadius: '3px',
      background: segColor[s]
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--cp-text-on-dark-muted)'
    }
  }, progressLabel ?? `${paidCount} of ${totalCount} instalments paid`))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cp-bg-surface)',
      color: 'var(--cp-text-primary)',
      borderRadius: 'var(--cp-radius-md)',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px minmax(0,1fr) auto',
      gap: '12px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: overdue ? 'var(--cp-red-50)' : 'var(--cp-teal-50)',
      color: overdue ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: overdue ? 'var(--cp-status-overdue)' : 'var(--cp-text-secondary)',
      fontWeight: overdue ? 500 : 400
    }
  }, nextLabel ?? (overdue ? 'Payment overdue' : 'Next payment')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 1.25,
      whiteSpace: 'nowrap'
    }
  }, nextDate)), nextAmount != null && /*#__PURE__*/React.createElement(Money, {
    amount: nextAmount,
    currency: currency,
    size: "md",
    tone: overdue ? 'danger' : 'default'
  })), (nextDetail || note) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      lineHeight: 1.45,
      color: 'var(--cp-text-secondary)',
      borderTop: '1px solid var(--cp-border-subtle)',
      paddingTop: '10px'
    }
  }, note || nextDetail)), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${actions.length}, minmax(0,1fr))`,
      gap: '8px'
    }
  }, actions.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    type: "button",
    onClick: a.onClick,
    style: {
      all: 'unset',
      cursor: 'pointer',
      minHeight: '68px',
      borderRadius: 'var(--cp-radius-sm)',
      background: 'var(--cp-bg-glass)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontSize: '12px',
      fontWeight: 500,
      textAlign: 'center',
      padding: '8px 4px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1.2
    }
  }, a.label)))));
}
const ALERT_VARIANTS = {
  info: {
    bg: 'var(--cp-alert-info-bg)',
    fg: 'var(--cp-text-primary)',
    body: 'var(--cp-text-secondary)',
    iconBg: 'var(--cp-alert-info-icon-bg)',
    iconFg: 'var(--cp-alert-info-icon)',
    icon: 'info',
    shadow: 'var(--cp-shadow-card)',
    role: 'status'
  },
  warning: {
    bg: 'var(--cp-alert-warning-bg)',
    fg: 'var(--cp-text-primary)',
    body: 'var(--cp-text-secondary)',
    iconBg: 'var(--cp-alert-warning-icon-bg)',
    iconFg: 'var(--cp-alert-warning-icon)',
    icon: 'clock',
    shadow: 'none',
    role: 'status'
  },
  action: {
    bg: 'var(--cp-alert-action-bg)',
    fg: 'var(--cp-alert-action-text)',
    body: 'var(--cp-alert-action-body)',
    iconBg: 'var(--cp-alert-action-icon-bg)',
    iconFg: 'var(--cp-alert-action-icon)',
    icon: 'circle-alert',
    shadow: 'inset 0 0 0 1px rgba(196,55,45,0.22)',
    role: 'alert',
    strip: true
  }
};
function AlertBanner({
  variant = 'info',
  icon,
  label,
  title,
  children,
  actionLabel,
  onAction,
  onDismiss,
  dismissLabel = 'Dismiss',
  badge,
  highlight,
  highlightPrefix,
  saving
}) {
  const v = ALERT_VARIANTS[variant] || ALERT_VARIANTS.info;
  const [shown, setShown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => {
    if (shown) return;
    const id = setTimeout(() => setShown(true), 20);
    return () => clearTimeout(id);
  }, []);
  const enter = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'none' : 'translateY(6px)',
    transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)'
  };
  if (variant === 'offer') {
    // Compact coupon: percentage stub | perforation | offer copy + net AED saving
    const notch = {
      position: 'absolute',
      insetInlineStart: '-7px',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      background: 'var(--cp-bg-page)'
    };
    return /*#__PURE__*/React.createElement("div", {
      role: "status",
      style: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '88px minmax(0,1fr)',
        minHeight: '88px',
        borderRadius: 'var(--cp-radius-md)',
        overflow: 'hidden',
        background: 'var(--cp-amber-50)',
        boxShadow: '0 1px 2px rgba(122,67,0,0.06), 0 6px 18px rgba(196,120,0,0.12)',
        fontFamily: 'var(--cp-font-text)',
        color: 'var(--cp-text-primary)',
        ...enter
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(160deg, #ffd99a 0%, var(--cp-amber-300) 100%)',
        color: 'var(--cp-amber-800)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
        padding: '8px 4px'
      }
    }, highlightPrefix && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11.5px',
        fontWeight: 500,
        lineHeight: 1
      }
    }, highlightPrefix), /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        fontSize: '26px',
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: '-0.03em'
      }
    }, highlight)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderInlineStart: '1.5px dashed rgba(122,67,0,0.35)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        ...notch,
        top: '-7px'
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        ...notch,
        bottom: '-7px'
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onAction,
      "aria-label": actionLabel,
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingBlock: '12px',
        paddingInlineStart: '14px',
        paddingInlineEnd: onDismiss ? '36px' : '14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        minWidth: 0
      }
    }, (badge || label) && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11.5px',
        fontWeight: 500,
        color: 'var(--cp-amber-800)',
        lineHeight: 1.2
      }
    }, badge || label), title && /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: v.strip ? '14px' : '15px',
        fontWeight: 600,
        lineHeight: 1.3
      }
    }, title), saving && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '12.5px',
        color: 'var(--cp-text-secondary)',
        lineHeight: 1.35
      }
    }, saving))), onDismiss && /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": dismissLabel,
      onClick: onDismiss,
      style: {
        all: 'unset',
        cursor: 'pointer',
        position: 'absolute',
        top: '0',
        insetInlineEnd: '0',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--cp-amber-800)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 15
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: v.role,
    style: {
      background: v.bg,
      color: v.fg,
      borderRadius: v.strip ? 'var(--cp-radius-md)' : 'var(--cp-radius-lg)',
      boxShadow: v.shadow,
      padding: v.strip ? '12px 14px' : '14px 16px 16px',
      alignItems: v.strip ? 'center' : undefined,
      display: 'grid',
      gridTemplateColumns: v.strip ? '34px minmax(0,1fr)' : onDismiss ? '40px minmax(0,1fr) 32px' : '40px minmax(0,1fr)',
      columnGap: '12px',
      rowGap: '12px',
      fontFamily: 'var(--cp-font-text)',
      boxSizing: 'border-box',
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(6px)',
      transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: v.strip ? '34px' : '40px',
      height: v.strip ? '34px' : '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: v.iconBg,
      color: v.iconFg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon || v.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: 0,
      paddingTop: '1px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 500,
      color: v.body
    }
  }, label), title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: v.strip ? '14px' : '15px',
      fontWeight: 600,
      lineHeight: 1.35
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13.5px',
      lineHeight: 1.5,
      color: v.body
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dismissLabel,
    onClick: onDismiss,
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: '44px',
      height: '44px',
      margin: '-8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: v.body
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  })), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex'
    }
  }, variant === 'action' ? /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: onAction,
    iconEnd: "arrow-right"
  }, actionLabel) : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onAction
  }, actionLabel)));
}
function BottomSheet({
  open,
  onClose,
  title,
  children,
  container,
  dir,
  closeLabel = 'Close'
}) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const [drag, setDrag] = React.useState(0);
  const start = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      setDrag(0);
      const id = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(id);
    }
    setVisible(false);
    const id = setTimeout(() => setMounted(false), 500);
    return () => clearTimeout(id);
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!mounted) return null;
  const onDown = e => {
    start.current = e.clientY;
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = e => {
    if (start.current != null) setDrag(Math.max(0, e.clientY - start.current));
  };
  const onUp = () => {
    if (start.current == null) return;
    start.current = null;
    if (drag > 90 && onClose) onClose();else setDrag(0);
  };
  const dragging = start.current != null;
  const node = /*#__PURE__*/React.createElement("div", {
    dir: dir,
    style: {
      position: container ? 'absolute' : 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      fontFamily: 'var(--cp-font-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(22,24,29,0.45)',
      opacity: visible ? 1 : 0,
      transition: 'opacity var(--cp-dur-sheet) ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'relative',
      background: 'var(--cp-bg-surface)',
      color: 'var(--cp-text-primary)',
      borderRadius: '28px 28px 0 0',
      boxShadow: '0 -12px 40px rgba(22,24,29,0.18)',
      maxHeight: '92%',
      overflowY: 'auto',
      boxSizing: 'border-box',
      padding: '0 20px 28px',
      transform: visible ? `translateY(${drag}px)` : 'translateY(100%)',
      transition: dragging ? 'none' : 'transform var(--cp-dur-sheet) var(--cp-ease-sheet)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 0 14px',
      cursor: 'grab',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '38px',
      height: '5px',
      borderRadius: '3px',
      background: 'var(--cp-neutral-200)'
    }
  })), children));
  return container ? ReactDOM.createPortal(node, container) : node;
}
const NOTIF_TONES = {
  offer: ['var(--cp-amber-50)', 'var(--cp-amber-800)'],
  info: ['var(--cp-teal-50)', 'var(--cp-teal-600)'],
  success: ['var(--cp-green-50)', 'var(--cp-green-600)'],
  danger: ['var(--cp-red-50)', 'var(--cp-red-600)'],
  neutral: ['var(--cp-bg-sunken)', 'var(--cp-text-secondary)']
};
function NotificationItem({
  icon = 'bell',
  tone = 'neutral',
  title,
  body,
  time,
  unread = false,
  onClick
}) {
  const [press, setPress] = React.useState(false);
  const [bg, fg] = NOTIF_TONES[tone] || NOTIF_TONES.neutral;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1fr) 10px',
      gap: '12px',
      alignItems: 'start',
      padding: '12px',
      borderRadius: 'var(--cp-radius-md)',
      background: unread ? 'var(--cp-neutral-25)' : 'transparent',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      textAlign: 'start',
      transform: press ? 'scale(0.985)' : 'none',
      transition: 'transform var(--cp-dur-fast) var(--cp-ease), background var(--cp-dur-fast) ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14.5px',
      fontWeight: unread ? 600 : 500,
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11.5px',
      color: 'var(--cp-text-secondary)',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, time)), body && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      lineHeight: 1.45,
      color: 'var(--cp-text-secondary)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, body)), /*#__PURE__*/React.createElement("span", {
    "aria-label": unread ? 'Unread' : undefined,
    style: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      marginTop: '6px',
      background: unread ? 'var(--cp-teal-600)' : 'transparent'
    }
  }));
}
const ERR_TONES = {
  danger: ['var(--cp-red-50)', 'rgba(196,55,45,0.14)', 'var(--cp-red-600)'],
  warning: ['var(--cp-amber-50)', 'rgba(122,67,0,0.14)', 'var(--cp-amber-800)'],
  info: ['var(--cp-teal-50)', 'rgba(20,122,110,0.12)', 'var(--cp-teal-600)'],
  neutral: ['var(--cp-bg-sunken)', 'var(--cp-neutral-200)', 'var(--cp-text-secondary)']
};
function ErrorState({
  icon = 'circle-alert',
  tone = 'danger',
  title,
  children,
  details = [],
  code,
  actionLabel,
  onAction,
  actionIcon,
  secondaryLabel,
  onSecondary,
  compact = false
}) {
  const [bg, ring, fg] = ERR_TONES[tone] || ERR_TONES.danger;
  const d = compact ? 84 : 112;
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '8px',
      padding: compact ? '8px 4px 4px' : '24px 8px 8px',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: d + 'px',
      height: d + 'px',
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: compact ? '11px' : '15px',
      borderRadius: '50%',
      boxShadow: '0 0 0 1px ' + ring
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: (compact ? 48 : 60) + 'px',
      height: (compact ? 48 : 60) + 'px',
      borderRadius: '50%',
      background: '#fff',
      color: fg,
      boxShadow: '0 4px 14px rgba(22,24,29,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: compact ? 22 : 26
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: compact ? '18px' : '21px',
      fontWeight: 600,
      lineHeight: 1.25,
      textWrap: 'balance'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '300px',
      fontSize: '14px',
      lineHeight: 1.5,
      color: 'var(--cp-text-secondary)',
      textWrap: 'pretty'
    }
  }, children), details.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      marginTop: '10px',
      background: 'var(--cp-bg-sunken)',
      borderRadius: 'var(--cp-radius-md)',
      padding: '4px 14px',
      textAlign: 'start'
    }
  }, details.map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      minHeight: '42px',
      fontSize: '13.5px',
      borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      textAlign: 'end'
    }
  }, v)))), (actionLabel || secondaryLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginTop: '14px'
    }
  }, actionLabel && /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: actionIcon,
    onClick: onAction
  }, actionLabel), secondaryLabel && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: onSecondary
  }, secondaryLabel)), code && /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      fontFamily: 'var(--cp-font-mono)',
      fontSize: '11.5px',
      color: 'var(--cp-text-secondary)',
      marginTop: '4px'
    }
  }, code));
}
function OfflineBar({
  title,
  label,
  actionLabel,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'grid',
      gridTemplateColumns: '36px minmax(0,1fr) auto',
      alignItems: 'center',
      gap: '12px',
      padding: '10px',
      paddingInlineStart: '12px',
      borderRadius: 'var(--cp-radius-md)',
      background: 'var(--cp-bg-inverse)',
      color: '#fff',
      fontFamily: 'var(--cp-font-text)',
      boxShadow: '0 6px 18px rgba(22,24,29,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wifi-off",
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, title), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      lineHeight: 1.35,
      color: 'var(--cp-text-on-dark-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label)), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      all: 'unset',
      cursor: 'pointer',
      boxSizing: 'border-box',
      minHeight: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      margin: '-4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '34px',
      padding: '0 12px',
      borderRadius: 'var(--cp-radius-pill)',
      background: 'rgba(255,255,255,0.14)',
      color: '#fff',
      fontSize: '13px',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rotate-cw",
    size: 13
  }), actionLabel)));
}
const TREND_TONE = {
  good: ['var(--cp-trend-good)', 'var(--cp-trend-good-bg)'],
  bad: ['var(--cp-trend-bad)', 'var(--cp-trend-bad-bg)'],
  neutral: ['var(--cp-trend-neutral)', 'var(--cp-trend-neutral-bg)']
};
const TREND_ICON = {
  up: 'arrow-up-right',
  down: 'arrow-down-right',
  flat: 'minus'
};
function MetricTrend({
  label,
  value,
  currency,
  delta,
  trend = 'flat',
  sentiment = 'neutral',
  data,
  chart = 'bars',
  highlightIndex,
  caption
}) {
  const [grown, setGrown] = React.useState(() => typeof document !== 'undefined' && document.visibilityState !== 'visible');
  React.useEffect(() => {
    if (grown) return;
    const id = setTimeout(() => setGrown(true), 20);
    return () => clearTimeout(id);
  }, []);
  const [fg, bg] = TREND_TONE[sentiment] || TREND_TONE.neutral;
  const has = Array.isArray(data) && data.length > 1;
  const max = has ? Math.max(...data, 1) : 1;
  const hi = highlightIndex ?? (has ? data.length - 1 : -1);
  let points = null;
  if (has && chart === 'line') {
    const min = Math.min(...data),
      r = max - min || 1;
    points = data.map((d, i) => `${(i / (data.length - 1) * 100).toFixed(2)},${(30 - (d - min) / r * 26).toFixed(2)}`).join(' ');
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cp-bg-surface)',
      borderRadius: 'var(--cp-radius-lg)',
      boxShadow: 'var(--cp-shadow-card)',
      padding: '14px 14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      minWidth: 0,
      boxSizing: 'border-box',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--cp-text-secondary)',
      lineHeight: 1.3
    }
  }, label), currency ? /*#__PURE__*/React.createElement(Money, {
    amount: value,
    currency: currency,
    size: "lg"
  }) : /*#__PURE__*/React.createElement("bdi", {
    dir: typeof value === 'number' ? 'ltr' : undefined,
    style: {
      fontSize: '22px',
      fontWeight: 600,
      lineHeight: 1.1,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, value), has && chart === 'bars' && /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '3px',
      height: '36px',
      marginTop: '2px'
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      borderRadius: '4px',
      height: grown ? Math.max(10, d / max * 100) + '%' : '0%',
      background: i === hi ? 'var(--cp-chart-highlight)' : 'var(--cp-chart-bar)',
      transition: `height var(--cp-dur-slow) var(--cp-ease) ${i * 25}ms`
    }
  }))), points && /*#__PURE__*/React.createElement("svg", {
    dir: "ltr",
    viewBox: "0 0 100 32",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      width: '100%',
      height: '36px',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: points,
    fill: "none",
    stroke: "var(--cp-chart-highlight)",
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      height: '24px',
      padding: '0 9px 0 7px',
      borderRadius: 'var(--cp-radius-pill)',
      background: bg,
      color: fg,
      fontSize: '12px',
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: TREND_ICON[trend] || TREND_ICON.flat,
    size: 13
  }), /*#__PURE__*/React.createElement("bdi", null, delta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--cp-text-secondary)',
      lineHeight: 1.4
    }
  }, caption));
}
function EmptyState({
  icon = 'file-text',
  title,
  children,
  actionLabel,
  onAction,
  actionIcon,
  secondaryLabel,
  onSecondary,
  compact = false,
  tone = 'teal'
}) {
  const ring = tone === 'neutral' ? ['var(--cp-bg-sunken)', 'var(--cp-neutral-100)', 'var(--cp-text-secondary)'] : ['var(--cp-teal-50)', 'rgba(20,122,110,0.10)', 'var(--cp-teal-600)'];
  const d = compact ? 76 : 104;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: compact ? 'transparent' : 'var(--cp-bg-surface)',
      borderRadius: 'var(--cp-radius-lg)',
      boxShadow: compact ? 'none' : 'var(--cp-shadow-card)',
      padding: compact ? '12px 8px 4px' : '28px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '8px',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: d + 'px',
      height: d + 'px',
      borderRadius: '50%',
      background: ring[0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: compact ? '10px' : '14px',
      borderRadius: '50%',
      boxShadow: '0 0 0 1px ' + ring[1]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: (compact ? 44 : 56) + 'px',
      height: (compact ? 44 : 56) + 'px',
      borderRadius: '50%',
      background: '#fff',
      color: ring[2],
      boxShadow: '0 4px 14px rgba(22,24,29,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: compact ? 20 : 24
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: compact ? '16px' : 'var(--cp-size-title)',
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '270px',
      fontSize: compact ? '13px' : '14px',
      lineHeight: 1.5,
      color: 'var(--cp-text-secondary)',
      textWrap: 'pretty'
    }
  }, children), (actionLabel || secondaryLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px',
      width: compact ? '100%' : 'auto'
    }
  }, actionLabel && /*#__PURE__*/React.createElement(Button, {
    variant: compact ? 'primary' : 'soft',
    size: "sm",
    icon: actionIcon,
    fullWidth: compact,
    onClick: onAction
  }, actionLabel), secondaryLabel && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onSecondary
  }, secondaryLabel)));
}
const LS = {
  en: {
    day: 'Thursday, 5 November',
    app: 'ClearPath',
    now: 'now',
    title: 'Early repayment discount',
    body: 'You\u2019re eligible for an early repayment discount \u2014 save 2.1% if you pay before September 30.',
    hint: 'Tap the notification to open the offer',
    open: 'Open notification'
  },
  ar: {
    day: 'الخميس، 5 نوفمبر',
    app: 'ClearPath',
    now: 'الآن',
    title: 'خصم السداد المبكر',
    body: 'أنت مؤهل لخصم السداد المبكر \u2014 وفّر 2.1% إذا دفعت قبل 30 سبتمبر.',
    hint: 'اضغط على الإشعار لفتح العرض',
    open: 'فتح الإشعار'
  }
};
function LockScreen({
  lang = 'en',
  onOpen
}) {
  const t = LS[lang] || LS.en;
  const rtl = lang === 'ar';
  const [shown, setShown] = React.useState(false);
  const [press, setPress] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setShown(true), 450);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    dir: rtl ? 'rtl' : 'ltr',
    lang: lang,
    style: {
      position: 'relative',
      height: '100%',
      overflow: 'hidden',
      fontFamily: '-apple-system, "SF Pro Display", "Readex Pro", system-ui, sans-serif',
      color: '#fff',
      background: 'radial-gradient(120% 70% at 80% 10%, rgba(127,216,198,0.55) 0%, rgba(127,216,198,0) 55%), radial-gradient(90% 60% at 0% 100%, rgba(255,208,138,0.35) 0%, rgba(255,208,138,0) 60%), repeating-radial-gradient(circle at 70% 30%, rgba(255,255,255,0) 0 30px, rgba(255,255,255,0.04) 30px 31px), linear-gradient(170deg, #147a6e 0%, #0f4a44 55%, #0a2622 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 30px 0',
      fontSize: '15px',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '19px',
      fontWeight: 500,
      opacity: 0.9
    }
  }, t.day), /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      fontSize: '96px',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      marginTop: '2px'
    }
  }, "9:41")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '12px',
      right: '12px',
      bottom: '170px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": t.open,
    onClick: onOpen,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '38px minmax(0,1fr)',
      gap: '12px',
      padding: '14px',
      borderRadius: '24px',
      background: 'rgba(245,245,245,0.78)',
      backdropFilter: 'blur(24px) saturate(160%)',
      WebkitBackdropFilter: 'blur(24px) saturate(160%)',
      color: '#16181d',
      boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
      textAlign: 'start',
      opacity: shown ? 1 : 0,
      transform: shown ? press ? 'scale(0.97)' : 'none' : 'translateY(24px) scale(0.96)',
      transition: 'opacity 420ms ease, transform 520ms cubic-bezier(0.32, 0.72, 0, 1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '9px',
      background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))',
      color: 'var(--cp-teal-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'rgba(22,24,29,0.55)',
      flex: 'none'
    }
  }, t.now)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      lineHeight: 1.35
    }
  }, t.body))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      textAlign: 'center',
      marginTop: '14px',
      fontSize: '12.5px',
      opacity: shown ? 0.75 : 0,
      transition: 'opacity 400ms ease 600ms'
    }
  }, t.hint)), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      position: 'absolute',
      left: '46px',
      right: '46px',
      bottom: '46px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, ['flashlight', 'camera'].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    "aria-hidden": "true",
    style: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.28)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '10px',
      width: '134px',
      height: '5px',
      marginLeft: '-67px',
      borderRadius: '3px',
      background: 'rgba(255,255,255,0.9)'
    }
  }));
}
const OS = {
  en: {
    back: 'Back',
    title: 'Early settlement',
    eFailT: 'Settlement payment didn\u2019t go through',
    eFailB: 'Your bank declined this payment. No money has left your account and your loan is unchanged.',
    eAmount: 'Amount',
    eDebited: 'Money debited',
    eNo: 'No',
    eRetry: 'Try again',
    eOther: 'Use another account',
    ePendT: 'We\u2019re confirming your payment',
    ePendB: 'Your bank is taking longer than usual. Please don\u2019t pay again, we\u2019ll notify you once it\u2019s confirmed.',
    eCheck: 'Check status',
    eOffT: 'No internet connection',
    eOffB: 'Check your connection and try again. You haven\u2019t been charged.',
    eQuoteT: 'This quote has expired',
    eQuoteB: 'Your balance has changed since this quote was made. Get an updated amount to continue.',
    eOldQuote: 'Previous quote',
    eNewQuote: 'Get updated quote',
    eHome: 'Back to home',
    headline: 'Layla, close your loan today and save',
    settleAmt: 'Settlement amount',
    endsPill: 'Offer ends 30 Sept 2026',
    sOut: 'Outstanding',
    sWaived: 'Waived (2.1%)',
    sFee: 'Fee (1%)',
    sSave: 'You save',
    kb1: v => `Save AED ${v}`,
    kb1s: 'Net, after the capped 1% fee',
    kb2: n => `Debt-free ${n} months sooner`,
    kb2s: 'Instead of your final payment in Aug 2027',
    kb3: 'No more monthly debits',
    kb3s: n => `${n} payments of AED 14,800 cleared at once`,
    detailsH: 'Important details',
    secTerms: 'Settlement terms',
    secPay: 'Payment conditions',
    secCredit: 'Credit reporting',
    st1: 'A 2.1% discount applies to your full outstanding balance.',
    st2: 'The settlement fee is capped at 1% of the balance or AED 10,000, whichever is lower.',
    st3: 'Once paid, the settlement can\u2019t be reversed.',
    pc1: 'Pay the full settlement amount in one payment.',
    pc2: 'Pay by instant bank payment or bank transfer.',
    pc3: 'This quote is valid until 30 September 2026.',
    cr1: 'Once the payment clears, your loan is closed as fully repaid.',
    cr2: 'Your closure letter can be shared as proof with other lenders.',
    accept: 'Accept settlement offer',
    compare: 'Compare options',
    capNote: 'Fee capped by the Central Bank',
    cmpH: 'Compare your options',
    optSettle: 'Settle today',
    optKeep: 'Keep paying',
    cTotal: 'Total you pay',
    cPayments: 'Payments',
    cEnds: 'Loan ends',
    today: 'Today',
    endsV: 'Aug 2027',
    cDiff: 'Settling today saves you',
    cumL: 'Total paid over time',
    cOne: '1',
    okT: 'Payment successful',
    whoPaid: 'Layla Al Mansoori paid',
    payeeSub: 'Business loan · CP-20418',
    tag: 'Loan settlement',
    securely: 'Paid securely via',
    details: 'Transaction details',
    okB: 'Loan fully paid & closed',
    rPaidTo: 'Paid to',
    paidToV: 'ClearPath · Business loan',
    rMode: 'Payment mode',
    rFrom: 'From',
    rDate: 'Date & time',
    dateV: '5 Nov 2026, 9:41 AM',
    rTxn: 'Transaction ID',
    rTotal: 'Total paid',
    youSaved: 'You saved',
    letterNote: 'We\u2019ll email your loan closure letter to you shortly.',
    receipt: 'Receipt',
    share: 'Share',
    endsShort: 'Ends 30 Sept',
    heroShort: '2.1% off · after the 1% fee',
    keepShort: 'Pay monthly',
    nPayments: n => `${n} payments left`,
    onePayment: 'One payment',
    capShort: 'Fee capped by the Central Bank',
    cleared: n => `${n} monthly payments cleared at once`,
    bl1: 'Closed today',
    bl2: 'No more debits',
    bl3: 'Closure letter',
    badge: 'Limited offer',
    youSave: 'You save',
    heroSub: '2.1% off your outstanding balance, minus the 1% settlement fee.',
    valid: 'Valid until 30 Sept 2026',
    pct: '2.1% off',
    compareH: 'Compare your options',
    keep: 'Keep paying monthly',
    keepSub: n => `${n} payments · until Aug 2027`,
    settle: 'Settle today',
    settleSub: 'One payment · loan closed today',
    saveLine: 'You save',
    howH: 'How your saving adds up',
    howSub: 'The discount is reduced by a capped settlement fee.',
    xDisc: 'Discount',
    xFee: 'Fee',
    xNet: 'You save',
    rBal: 'Outstanding balance',
    rDisc: 'Discount (2.1%)',
    rFee: 'Settlement fee (1%)',
    rPay: 'You pay today',
    cap: 'The Central Bank caps this fee at 1% of your balance or AED 10,000, whichever is lower.',
    changeH: 'What changes',
    skipL: 'Payments you skip',
    skipCap: n => `${n} × AED 14,800 replaced by one payment today`,
    b1: 'Loan closed today',
    b1s: n => `Instead of 9 Aug 2027, ${n} months sooner`,
    b2: 'No more monthly debits',
    b2s: 'Auto-debit from ••4821 stops',
    b3: 'Closure letter by email',
    b3s: 'Proof that your loan is fully paid',
    terms: 'Offer terms',
    t1: 'Applies when you pay the full outstanding balance in one payment.',
    t2: 'Offer is valid until 30 September 2026.',
    t3: 'Settlement fee is capped at 1% of the outstanding balance or AED 10,000, whichever is lower.',
    t4: 'Once paid, the settlement can\u2019t be reversed.',
    payToday: 'You pay today',
    cta: 'Settle loan',
    reviewTitle: 'Confirm settlement',
    youPay: 'You pay',
    quote: 'Quote valid until 30 Sept 2026',
    payFrom: 'Pay with',
    mInstant: 'Instant bank payment',
    mInstantSub: 'Approve in your bank app · usually seconds',
    rec: 'Recommended',
    mIban: 'Bank transfer',
    mIbanSub: 'Send to our IBAN · 1–2 working days',
    mCard: 'Debit card',
    mCardSub: 'Not available for this amount',
    final: 'This pays your full balance and closes your loan. It can\u2019t be reversed.',
    pay: amt => `Pay AED ${amt}`,
    doneT: 'Payment pending',
    doneB: 'Approve the payment in your bank app. We\u2019ll confirm and email your closure letter once the funds arrive.',
    ibanT: 'Send your transfer',
    ibanB: 'Use these details in your bank app. Include the reference so we can match your payment.',
    ibanL: 'IBAN',
    amtL: 'Amount',
    ref: 'Reference',
    done: 'Done',
    paying: 'Settling your business loan',
    discApplied: '2.1% early settlement discount',
    applied: 'Applied',
    payUsing: 'Pay using',
    viewAll: 'View all',
    less: 'Show less',
    acc1: 'Current account',
    acc2: 'Savings account',
    checkBal: 'Check balance',
    lim1: 'Instant pay limit: AED 250,000',
    lim2: 'Limit AED 100,000 · below this amount',
    linkMore: 'Link another bank account',
    letterT: 'Email my closure letter',
    letterS: 'Sent once the payment clears',
    faceId: 'Pay with Face ID'
  },
  ar: {
    back: 'رجوع',
    title: 'السداد المبكر',
    eFailT: 'لم تتم دفعة التسوية',
    eFailB: 'رفض بنكك هذه الدفعة. لم يُخصم أي مبلغ ولم يتغير قرضك.',
    eAmount: 'المبلغ',
    eDebited: 'تم الخصم',
    eNo: 'لا',
    eRetry: 'حاول مجددًا',
    eOther: 'استخدم حسابًا آخر',
    ePendT: 'نتحقق من دفعتك',
    ePendB: 'يستغرق بنكك وقتًا أطول من المعتاد. لا تدفع مرة أخرى، سنبلغك عند التأكيد.',
    eCheck: 'تحقق من الحالة',
    eOffT: 'لا يوجد اتصال بالإنترنت',
    eOffB: 'تحقق من اتصالك وحاول مجددًا. لم يتم خصم أي مبلغ.',
    eQuoteT: 'انتهت صلاحية هذا السعر',
    eQuoteB: 'تغيّر رصيدك منذ إصدار هذا السعر. احصل على مبلغ محدّث للمتابعة.',
    eOldQuote: 'السعر السابق',
    eNewQuote: 'احصل على سعر محدّث',
    eHome: 'العودة للرئيسية',
    headline: 'ليلى، أغلقي قرضك اليوم ووفّري',
    settleAmt: 'مبلغ التسوية',
    endsPill: 'ينتهي العرض 30 سبتمبر 2026',
    sOut: 'المستحق',
    sWaived: 'المعفى (2.1%)',
    sFee: 'الرسوم (1%)',
    sSave: 'توفيرك',
    kb1: v => `وفّري ${v} درهم`,
    kb1s: 'صافي بعد رسوم 1% المحددة',
    kb2: n => `بلا دين قبل ${n} أشهر`,
    kb2s: 'بدلًا من آخر دفعة في أغسطس 2027',
    kb3: 'لا خصومات شهرية بعد الآن',
    kb3s: n => `${n} دفعات بقيمة 14,800 درهم تُسدّد مرة واحدة`,
    detailsH: 'تفاصيل مهمة',
    secTerms: 'شروط التسوية',
    secPay: 'شروط الدفع',
    secCredit: 'التقرير الائتماني',
    st1: 'يُطبّق خصم 2.1% على كامل رصيدك المستحق.',
    st2: 'رسوم التسوية لا تتجاوز 1% من الرصيد أو 10,000 درهم، أيهما أقل.',
    st3: 'لا يمكن إلغاء التسوية بعد الدفع.',
    pc1: 'ادفعي مبلغ التسوية كاملًا بدفعة واحدة.',
    pc2: 'الدفع عبر الدفع البنكي الفوري أو التحويل البنكي.',
    pc3: 'هذا السعر ساري حتى 30 سبتمبر 2026.',
    cr1: 'بعد تأكيد الدفعة، يُغلق قرضك كقرض مسدّد بالكامل.',
    cr2: 'يمكنك مشاركة خطاب الإغلاق كإثبات مع جهات الإقراض الأخرى.',
    accept: 'قبول عرض التسوية',
    compare: 'قارني الخيارات',
    capNote: 'الرسوم محددة من المصرف المركزي',
    cmpH: 'قارني بين الخيارين',
    optSettle: 'السداد اليوم',
    optKeep: 'الاستمرار بالدفع',
    cTotal: 'إجمالي ما تدفعينه',
    cPayments: 'الدفعات',
    cEnds: 'ينتهي القرض',
    today: 'اليوم',
    endsV: 'أغسطس 2027',
    cDiff: 'السداد اليوم يوفّر لك',
    cumL: 'إجمالي المدفوع عبر الوقت',
    cOne: '1',
    okT: 'تمت الدفعة بنجاح',
    whoPaid: 'ليلى المنصوري دفعت إلى',
    payeeSub: 'قرض تجاري · CP-20418',
    tag: 'تسوية القرض',
    securely: 'تم الدفع بأمان عبر',
    details: 'تفاصيل العملية',
    okB: 'تم سداد القرض وإغلاقه',
    rPaidTo: 'الدفع إلى',
    paidToV: 'ClearPath · قرض تجاري',
    rMode: 'طريقة الدفع',
    rFrom: 'من',
    rDate: 'التاريخ والوقت',
    dateV: '5 Nov 2026, 9:41 AM',
    rTxn: 'رقم العملية',
    rTotal: 'إجمالي المدفوع',
    youSaved: 'وفّرت',
    letterNote: 'سنرسل خطاب إغلاق القرض إلى بريدك قريبًا.',
    receipt: 'الإيصال',
    share: 'مشاركة',
    endsShort: 'ينتهي 30 سبتمبر',
    heroShort: 'خصم 2.1% · بعد رسوم 1%',
    keepShort: 'الدفع الشهري',
    nPayments: n => `${n} دفعات متبقية`,
    onePayment: 'دفعة واحدة',
    capShort: 'الرسوم محددة من المصرف المركزي',
    cleared: n => `${n} دفعات شهرية تُسدّد مرة واحدة`,
    bl1: 'إغلاق اليوم',
    bl2: 'لا خصومات بعد الآن',
    bl3: 'خطاب الإغلاق',
    badge: 'عرض محدود',
    youSave: 'توفّر',
    heroSub: 'خصم 2.1% من رصيدك المستحق، بعد خصم رسوم التسوية 1%.',
    valid: 'ساري حتى 30 سبتمبر 2026',
    pct: 'خصم 2.1%',
    compareH: 'قارن بين الخيارين',
    keep: 'الاستمرار بالدفع الشهري',
    keepSub: n => `${n} دفعات · حتى أغسطس 2027`,
    settle: 'السداد اليوم',
    settleSub: 'دفعة واحدة · إغلاق القرض اليوم',
    saveLine: 'توفّر',
    howH: 'كيف يتكوّن توفيرك',
    howSub: 'يُطرح من الخصم رسوم تسوية محددة بسقف.',
    xDisc: 'الخصم',
    xFee: 'الرسوم',
    xNet: 'توفيرك',
    rBal: 'الرصيد المستحق',
    rDisc: 'الخصم (2.1%)',
    rFee: 'رسوم التسوية (1%)',
    rPay: 'تدفع اليوم',
    cap: 'يحدد المصرف المركزي هذه الرسوم بـ1% من رصيدك أو 10,000 درهم، أيهما أقل.',
    changeH: 'ما الذي يتغيّر',
    skipL: 'الدفعات التي تتجاوزها',
    skipCap: n => `${n} × 14,800 درهم تُستبدل بدفعة واحدة اليوم`,
    b1: 'إغلاق القرض اليوم',
    b1s: n => `بدلًا من 9 أغسطس 2027، أبكر بـ${n} أشهر`,
    b2: 'لا مزيد من الخصومات الشهرية',
    b2s: 'يتوقف الخصم التلقائي من ••4821',
    b3: 'خطاب إغلاق عبر البريد',
    b3s: 'إثبات سداد قرضك بالكامل',
    terms: 'شروط العرض',
    t1: 'يسري عند سداد كامل الرصيد المستحق بدفعة واحدة.',
    t2: 'العرض ساري حتى 30 سبتمبر 2026.',
    t3: 'رسوم التسوية لا تتجاوز 1% من الرصيد المستحق أو 10,000 درهم، أيهما أقل.',
    t4: 'لا يمكن إلغاء التسوية بعد الدفع.',
    payToday: 'تدفع اليوم',
    cta: 'سدّد القرض',
    reviewTitle: 'تأكيد التسوية',
    youPay: 'تدفع',
    quote: 'السعر ساري حتى 30 سبتمبر 2026',
    payFrom: 'الدفع عبر',
    mInstant: 'دفع بنكي فوري',
    mInstantSub: 'وافق من تطبيق بنكك · خلال ثوانٍ عادةً',
    rec: 'موصى به',
    mIban: 'تحويل بنكي',
    mIbanSub: 'حوّل إلى رقم الآيبان · 1–2 يوم عمل',
    mCard: 'بطاقة الخصم',
    mCardSub: 'غير متاحة لهذا المبلغ',
    final: 'هذه الدفعة تسدد رصيدك بالكامل وتغلق قرضك، ولا يمكن إلغاؤها.',
    pay: amt => `ادفع ${amt} درهم`,
    doneT: 'الدفعة قيد المعالجة',
    doneB: 'وافق على الدفعة من تطبيق بنكك. سنؤكد ونرسل خطاب الإغلاق عند وصول المبلغ.',
    ibanT: 'أرسل التحويل',
    ibanB: 'استخدم هذه البيانات في تطبيق بنكك، وأضف المرجع لنطابق دفعتك.',
    ibanL: 'الآيبان',
    amtL: 'المبلغ',
    ref: 'المرجع',
    done: 'تم',
    paying: 'تسوية قرضك التجاري',
    discApplied: 'خصم السداد المبكر 2.1%',
    applied: 'مُطبّق',
    payUsing: 'الدفع باستخدام',
    viewAll: 'عرض الكل',
    less: 'عرض أقل',
    acc1: 'الحساب الجاري',
    acc2: 'حساب التوفير',
    checkBal: 'تحقق من الرصيد',
    lim1: 'حد الدفع الفوري: 250,000 درهم',
    lim2: 'الحد 100,000 درهم · أقل من هذا المبلغ',
    linkMore: 'ربط حساب بنكي آخر',
    letterT: 'أرسل خطاب الإغلاق إلى بريدي',
    letterS: 'يُرسل بعد تأكيد الدفعة',
    faceId: 'ادفع باستخدام Face ID'
  }
};
const OFFER_HERO_BG = ['radial-gradient(80% 100% at 100% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)', 'repeating-linear-gradient(135deg, rgba(122,67,0,0) 0 12px, rgba(122,67,0,0.03) 12px 13px)', 'linear-gradient(150deg, #fff1d6 0%, #ffd590 100%)'].join(', ');
function OfferScreen({
  open,
  onBack,
  container,
  lang = 'en',
  balance = 0,
  remaining = [],
  sim = 'none'
}) {
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
      setMounted(true);
      setStep('offer');
      setConfirm(false);
      setCmpOpen(false);
      setCmpMode('settle');
      setSec(null);
      setMethod('acc1');
      setShowAll(false);
      setShowBreak(false);
      setTerms(false);
      const a = setTimeout(() => setVis(true), 20);
      const b = setTimeout(() => setGrown(true), 420);
      return () => {
        clearTimeout(a);
        clearTimeout(b);
      };
    }
    setVis(false);
    setGrown(false);
    const id = setTimeout(() => setMounted(false), 480);
    return () => clearTimeout(id);
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onBack) onBack();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onBack]);
  if (!mounted) return null;
  const discount = Math.round(balance * 0.021);
  const fee = Math.min(Math.round(balance * 0.01), 10000);
  const net = discount - fee;
  const payToday = balance - discount + fee;
  const n = remaining.length;
  const fmt = v => v.toLocaleString('en-US');
  const toTop = () => {
    if (scroller.current) scroller.current.scrollTop = 0;
  };
  const h2 = {
    margin: 0,
    fontSize: '17px',
    fontWeight: 600,
    lineHeight: 1.25
  };
  const card = {
    background: 'var(--cp-bg-surface)',
    borderRadius: 'var(--cp-radius-lg)',
    boxShadow: 'var(--cp-shadow-card)',
    padding: '16px',
    boxSizing: 'border-box'
  };
  const row = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '12px',
    fontSize: '14px'
  };
  const bars = [{
    key: 'd',
    label: t.xDisc,
    value: '+' + fmt(discount),
    bottom: 0,
    h: 100,
    bg: 'var(--cp-teal-300)',
    fg: 'var(--cp-teal-800)'
  }, {
    key: 'f',
    label: t.xFee,
    value: '−' + fmt(fee),
    bottom: net / discount * 100,
    h: fee / discount * 100,
    bg: 'repeating-linear-gradient(135deg, var(--cp-neutral-200) 0 5px, var(--cp-neutral-100) 5px 10px)',
    fg: 'var(--cp-text-secondary)'
  }, {
    key: 'n',
    label: t.xNet,
    value: fmt(net),
    bottom: 0,
    h: net / discount * 100,
    bg: 'var(--cp-teal-600)',
    fg: 'var(--cp-teal-600)'
  }];
  const benefits = [['calendar-check', t.bl1], ['repeat', t.bl2], ['file-check', t.bl3]];
  const doneView = method === 'iban' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: 'var(--cp-teal-50)',
      color: 'var(--cp-teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 30
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, t.ibanT), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--cp-text-secondary)'
    }
  }, t.ibanB), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, [[t.amtL, /*#__PURE__*/React.createElement(Money, {
    amount: payToday,
    size: "md"
  })], [t.ibanL, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      fontFamily: 'var(--cp-font-mono)',
      fontSize: '13px'
    }
  }, "AE07 0331 2345 6789 0123 456")], [t.ref, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      fontFamily: 'var(--cp-font-mono)',
      fontSize: '13px'
    }
  }, "CP-SET-20418")]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...row,
      borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none',
      paddingTop: i ? '12px' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, l), v)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      paddingTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--cp-radius-lg)',
      background: 'repeating-radial-gradient(circle at 50% 52%, rgba(20,122,110,0) 0 22px, rgba(20,122,110,0.07) 22px 23px), radial-gradient(circle at 50% 52%, var(--cp-teal-50) 0, rgba(229,243,240,0) 42%), #fbfaf6',
      boxShadow: 'inset 0 0 0 10px #fbfaf6, inset 0 0 0 11px rgba(20,122,110,0.2), var(--cp-shadow-card)',
      padding: '34px 22px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: 'var(--cp-teal-50)',
      color: 'var(--cp-teal-800)',
      boxShadow: '0 0 0 4px #fff, 0 4px 14px rgba(22,24,29,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 600
    }
  }, rtl ? 'ل' : 'LA'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 500,
      marginTop: '16px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.whoPaid), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '28px',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    }
  }, "ClearPath"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13.5px',
      color: 'var(--cp-text-secondary)',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 14
  }), /*#__PURE__*/React.createElement("bdi", null, t.payeeSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '44px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(Money, {
    amount: payToday,
    size: "hero",
    weight: 700
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: '30px',
      padding: '0 14px',
      background: '#fff',
      boxShadow: '0 0 0 1px var(--cp-border-subtle)',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  }, t.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12.5px',
      fontWeight: 500,
      color: 'var(--cp-green-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14
  }), t.okB)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.securely), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '15px',
      fontWeight: 600,
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 16
  }), t.mInstant), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--cp-text-secondary)',
      marginTop: '2px'
    }
  }, method === 'acc2' ? t.acc2 : t.acc1, " ", /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr"
  }, "\u2022\u2022 ", method === 'acc2' ? '7710' : '4821')), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      alignSelf: 'stretch',
      margin: '28px -22px 0',
      padding: '14px 12px 18px',
      borderTop: '1px dashed rgba(20,122,110,0.25)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--cp-text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, t.dateV), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '1px',
      height: '12px',
      background: 'var(--cp-neutral-400)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "TXN 830211475569"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": showDet,
    onClick: () => setShowDet(v => !v),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      minHeight: '48px',
      padding: '0 16px',
      borderRadius: 'var(--cp-radius-md)',
      background: 'var(--cp-bg-surface)',
      boxShadow: 'var(--cp-shadow-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14.5px',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "receipt-text",
    size: 18
  }), t.details), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: showDet ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--cp-dur-base) var(--cp-ease)',
      color: 'var(--cp-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18
  }))), showDet && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '-8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: '4px 16px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, [[t.rPaidTo, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, t.paidToV)], [t.rMode, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }), t.mInstant)], [t.rFrom, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, method === 'acc2' ? t.acc2 : t.acc1, " ", /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      color: 'var(--cp-text-secondary)',
      fontWeight: 400
    }
  }, "\u2022\u2022 ", method === 'acc2' ? '7710' : '4821'))], [t.rDate, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, t.dateV)], [t.ref, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      fontFamily: 'var(--cp-font-mono)',
      fontSize: '13px'
    }
  }, "CP-SET-20418")], [t.rTxn, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      fontFamily: 'var(--cp-font-mono)',
      fontSize: '13px'
    }
  }, "TXN 8302 1147 5569")]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...row,
      alignItems: 'center',
      minHeight: '48px',
      borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none',
      fontSize: '13.5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)',
      flex: 'none'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'end',
      minWidth: 0
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rBal), /*#__PURE__*/React.createElement(Money, {
    amount: balance,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rDisc), /*#__PURE__*/React.createElement(Money, {
    amount: discount,
    sign: "\u2212",
    size: "sm",
    tone: "saving"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rFee), /*#__PURE__*/React.createElement(Money, {
    amount: fee,
    sign: "+",
    size: "sm",
    tone: "muted"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      borderTop: '1px solid var(--cp-border-subtle)',
      paddingTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, t.rTotal), /*#__PURE__*/React.createElement(Money, {
    amount: payToday,
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      background: 'var(--cp-teal-50)',
      borderRadius: 'var(--cp-radius-sm)',
      padding: '10px 12px',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--cp-teal-800)'
    }
  }, t.youSaved), /*#__PURE__*/React.createElement(Money, {
    amount: net,
    size: "md",
    tone: "saving"
  })))), letter && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '36px minmax(0,1fr)',
      gap: '12px',
      alignItems: 'center',
      fontSize: '13px',
      lineHeight: 1.45,
      color: 'var(--cp-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'var(--cp-bg-sunken)',
      color: 'var(--cp-text-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail-check",
    size: 17
  })), t.letterNote));
  const accounts = [{
    k: 'acc1',
    ic: 'landmark',
    name: t.acc1,
    last: '4821',
    limit: t.lim1,
    ok: true
  }, {
    k: 'acc2',
    ic: 'piggy-bank',
    name: t.acc2,
    last: '7710',
    limit: t.lim2,
    ok: false
  }, ...(showAll ? [{
    k: 'iban',
    ic: 'building-2',
    name: t.mIban,
    sub: t.mIbanSub,
    ok: true
  }] : [])];
  const [whole] = fmt(payToday).split('.');
  const confirmBody = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      paddingTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))',
      color: 'var(--cp-teal-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '17px',
      fontWeight: 500
    }
  }, t.paying)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '4px 12px'
    }
  }, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '6px',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      fontWeight: 500
    }
  }, "AED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '42px',
      fontWeight: 700,
      letterSpacing: '-0.03em'
    }
  }, whole, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-neutral-400)'
    }
  }, ".00"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": showBreak,
    onClick: () => setShowBreak(v => !v),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      minHeight: '32px',
      color: 'var(--cp-text-secondary)',
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr",
    style: {
      textDecoration: 'line-through',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "AED ", fmt(balance)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: showBreak ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--cp-dur-base) var(--cp-ease)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  })))), showBreak && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cp-bg-sunken)',
      borderRadius: 'var(--cp-radius-sm)',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rBal), /*#__PURE__*/React.createElement(Money, {
    amount: balance,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rDisc), /*#__PURE__*/React.createElement(Money, {
    amount: discount,
    sign: "\u2212",
    size: "sm",
    tone: "saving"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)'
    }
  }, t.rFee), /*#__PURE__*/React.createElement(Money, {
    amount: fee,
    sign: "+",
    size: "sm",
    tone: "muted"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      paddingBottom: '16px',
      borderBottom: '1px solid var(--cp-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: 'var(--cp-amber-50)',
      color: 'var(--cp-amber-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-percent",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: '14.5px'
    }
  }, t.discApplied), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14.5px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      flex: 'none',
      color: 'var(--cp-teal-600)'
    }
  }, t.applied)), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": t.payUsing,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14.5px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.payUsing), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setShowAll(v => !v);
      if (showAll && method === 'iban') setMethod('acc1');
    },
    style: {
      all: 'unset',
      cursor: 'pointer',
      minHeight: '36px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '14px',
      color: 'var(--cp-text-secondary)'
    }
  }, showAll ? t.less : t.viewAll, /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14
  }))), accounts.map(ac => {
    const on = method === ac.k;
    return /*#__PURE__*/React.createElement("button", {
      key: ac.k,
      type: "button",
      role: "radio",
      "aria-checked": on,
      "aria-disabled": !ac.ok || undefined,
      onClick: () => ac.ok && setMethod(ac.k),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: ac.ok ? 'pointer' : 'not-allowed',
        display: 'grid',
        gridTemplateColumns: '44px minmax(0,1fr) 22px',
        alignItems: 'center',
        gap: '14px',
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--cp-bg-surface)',
        boxShadow: '0 0 0 1px var(--cp-border-subtle)',
        color: ac.ok ? 'var(--cp-teal-600)' : 'var(--cp-neutral-400)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ac.ic,
      size: 19
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        minWidth: 0,
        opacity: ac.ok ? 1 : 0.6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15.5px',
        fontWeight: 500
      }
    }, ac.name), ac.last && /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        fontSize: '13.5px',
        color: 'var(--cp-text-secondary)'
      }
    }, "\u2022\u2022 ", ac.last)), ac.last ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        fontSize: '13px',
        color: 'var(--cp-text-secondary)'
      }
    }, t.checkBal, /*#__PURE__*/React.createElement(Icon, {
      name: rtl ? 'chevron-left' : 'chevron-right',
      size: 14
    })) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: 'var(--cp-text-secondary)'
      }
    }, ac.sub), ac.limit && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12.5px',
        fontWeight: 500,
        color: ac.ok ? 'var(--cp-green-600)' : 'var(--cp-status-overdue)'
      }
    }, ac.limit)), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        border: on ? '7px solid var(--cp-text-primary)' : '1.5px solid var(--cp-neutral-400)',
        transition: 'border var(--cp-dur-fast) ease'
      }
    }));
  }), showAll && /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1fr) 18px',
      alignItems: 'center',
      gap: '14px',
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: '1.5px dashed var(--cp-neutral-400)',
      color: 'var(--cp-teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--cp-teal-600)'
    }
  }, t.linkMore), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-text-secondary)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: rtl ? 'chevron-left' : 'chevron-right',
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px minmax(0,1fr) auto',
      alignItems: 'center',
      gap: '12px',
      background: 'var(--cp-neutral-25)',
      boxShadow: '0 0 0 1px var(--cp-border-subtle)',
      borderRadius: 'var(--cp-radius-md)',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--cp-teal-50)',
      color: 'var(--cp-teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail-check",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14.5px',
      fontWeight: 500
    }
  }, t.letterT), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.letterS)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": letter,
    "aria-label": t.letterT,
    onClick: () => setLetter(v => !v),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: '51px',
      height: '31px',
      borderRadius: '16px',
      background: letter ? 'var(--cp-teal-600)' : 'var(--cp-neutral-200)',
      position: 'relative',
      transition: 'background var(--cp-dur-base) ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      insetInlineStart: letter ? '22px' : '2px',
      width: '27px',
      height: '27px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)'
    }
  }))), /*#__PURE__*/React.createElement(SlideToConfirm, {
    key: String(confirm),
    label: t.faceId,
    rtl: rtl,
    onConfirm: () => {
      setConfirm(false);
      setStep({
        payfail: 'failed',
        timeout: 'pending',
        offline: 'offline',
        quote: 'quote'
      }[sim] || 'done');
      toTop();
    }
  }));
  const stats = [[t.sOut, /*#__PURE__*/React.createElement(Money, {
    amount: balance,
    size: "md"
  })], [t.sWaived, /*#__PURE__*/React.createElement(Money, {
    amount: discount,
    sign: "\u2212",
    size: "md",
    tone: "saving"
  })], [t.sFee, /*#__PURE__*/React.createElement(Money, {
    amount: fee,
    sign: "+",
    size: "md",
    tone: "muted"
  })], [t.sSave, /*#__PURE__*/React.createElement(Money, {
    amount: net,
    size: "md",
    tone: "saving"
  })]];
  const keyBenefits = [['piggy-bank', t.kb1(fmt(net)), t.kb1s], ['calendar-check', t.kb2(n), t.kb2s], ['repeat', t.kb3, t.kb3s(n)]];
  const sections = [['terms', 'file-text', t.secTerms, [t.st1, t.st2, t.st3]], ['pay', 'wallet', t.secPay, [t.pc1, t.pc2, t.pc3]], ['credit', 'shield-check', t.secCredit, [t.cr1, t.cr2]]];
  const retryPay = () => {
    setStep('offer');
    setConfirm(true);
  };
  const amountRow = [t.eAmount, /*#__PURE__*/React.createElement(Money, {
    amount: payToday,
    size: "sm"
  })];
  const errView = {
    failed: /*#__PURE__*/React.createElement(ErrorState, {
      tone: "danger",
      icon: "circle-x",
      title: t.eFailT,
      details: [amountRow, [t.eDebited, t.eNo]],
      actionLabel: t.eRetry,
      actionIcon: "rotate-cw",
      onAction: retryPay,
      secondaryLabel: t.eOther,
      onSecondary: () => {
        setMethod('iban');
        setShowAll(true);
        retryPay();
      },
      code: "Ref CP-SET-20418 \xB7 Bank code 51"
    }, t.eFailB),
    pending: /*#__PURE__*/React.createElement(ErrorState, {
      tone: "warning",
      icon: "hourglass",
      title: t.ePendT,
      details: [amountRow, [t.ref, /*#__PURE__*/React.createElement("bdi", {
        dir: "ltr",
        style: {
          fontFamily: 'var(--cp-font-mono)',
          fontSize: '13px'
        }
      }, "CP-SET-20418")]],
      actionLabel: t.eCheck,
      actionIcon: "refresh-cw",
      onAction: () => setStep('done'),
      secondaryLabel: t.eHome,
      onSecondary: onBack
    }, t.ePendB),
    offline: /*#__PURE__*/React.createElement(ErrorState, {
      tone: "neutral",
      icon: "wifi-off",
      title: t.eOffT,
      actionLabel: t.eRetry,
      actionIcon: "rotate-cw",
      onAction: retryPay,
      secondaryLabel: t.eHome,
      onSecondary: onBack
    }, t.eOffB),
    quote: /*#__PURE__*/React.createElement(ErrorState, {
      tone: "warning",
      icon: "clock-alert",
      title: t.eQuoteT,
      details: [[t.eOldQuote, /*#__PURE__*/React.createElement("bdi", {
        dir: "ltr",
        style: {
          textDecoration: 'line-through',
          color: 'var(--cp-text-secondary)'
        }
      }, "AED ", fmt(payToday))]],
      actionLabel: t.eNewQuote,
      actionIcon: "refresh-cw",
      onAction: () => setStep('offer'),
      secondaryLabel: t.eHome,
      onSecondary: onBack
    }, t.eQuoteB)
  }[step];
  const content = errView ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '24px'
    }
  }, errView) : step === 'done' ? doneView : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '-8px -16px 0',
      padding: '104px 20px 8px',
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0) 0 23px, rgba(255,255,255,0.4) 23px 24px), linear-gradient(180deg, #9fe2d1 0%, #c9ece3 42%, var(--cp-bg-page) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--cp-teal-800)',
      boxShadow: '0 0 0 4px rgba(255,255,255,0.6), 0 6px 18px rgba(15,74,68,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 600
    }
  }, rtl ? 'ل' : 'LA'), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '23px',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      maxWidth: '290px',
      textWrap: 'balance'
    }
  }, t.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.settleAmt), /*#__PURE__*/React.createElement(Money, {
    amount: payToday,
    size: "hero",
    weight: 700
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      height: '38px',
      padding: '0 16px',
      borderRadius: 'var(--cp-radius-pill)',
      background: '#fff',
      boxShadow: '0 6px 18px rgba(22,24,29,0.10)',
      fontSize: '13.5px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cp-amber-800)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  })), t.endsPill)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...card,
      padding: '4px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, stats.map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: '14px 16px',
      borderInlineStart: i % 2 ? '1px solid var(--cp-border-subtle)' : 'none',
      borderTop: i > 1 ? '1px solid var(--cp-border-subtle)' : 'none',
      background: i === 3 ? 'var(--cp-teal-50)' : 'transparent',
      borderEndEndRadius: i === 3 ? 'var(--cp-radius-lg)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: i === 3 ? 'var(--cp-teal-800)' : 'var(--cp-text-secondary)',
      fontWeight: i === 3 ? 500 : 400
    }
  }, l), v))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      padding: '0 4px'
    }
  }, keyBenefits.map(([ic, a1, b1]) => /*#__PURE__*/React.createElement("div", {
    key: a1,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr)',
      gap: '14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'var(--cp-bg-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15.5px',
      fontWeight: 600
    }
  }, a1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--cp-text-secondary)'
    }
  }, b1))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, t.detailsH), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: 'hidden'
    }
  }, sections.map(([k, ic, label, items], i) => {
    const on = sec === k;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => setSec(on ? null : k),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '100%',
        minHeight: '56px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        fontSize: '15px',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cp-text-secondary)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    })), label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--cp-dur-base) var(--cp-ease)',
        color: 'var(--cp-text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18
    }))), on && /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: '0 16px 16px 46px',
        paddingInlineStart: '46px',
        paddingInlineEnd: '16px',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }
    }, items.map(x => /*#__PURE__*/React.createElement("li", {
      key: x,
      style: {
        display: 'grid',
        gridTemplateColumns: '6px minmax(0,1fr)',
        gap: '10px',
        fontSize: '13px',
        lineHeight: 1.5,
        color: 'var(--cp-text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: 'var(--cp-neutral-400)',
        marginTop: '8px'
      }
    }), x))));
  }))));
  const settleMode = cmpMode === 'settle';
  const cols = [t.today, ...remaining];
  const cum = (mode, i) => mode === 'settle' ? payToday : Math.min(i, n) * 14800;
  const cMax = Math.max(balance, payToday);
  const compareBody = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      paddingTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      fontWeight: 600,
      textAlign: 'center'
    }
  }, t.cmpH), /*#__PURE__*/React.createElement(SegmentedControl, {
    fullWidth: true,
    value: cmpMode,
    onChange: setCmpMode,
    options: [{
      value: 'settle',
      label: t.optSettle
    }, {
      value: 'keep',
      label: t.optKeep
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      background: 'var(--cp-bg-sunken)',
      borderRadius: 'var(--cp-radius-md)',
      padding: '14px 0'
    }
  }, [[t.cTotal, /*#__PURE__*/React.createElement(Money, {
    amount: settleMode ? payToday : balance,
    size: "sm"
  })], [t.cPayments, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600
    }
  }, settleMode ? t.cOne : n)], [t.cEnds, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, settleMode ? t.today : t.endsV)]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      borderInlineStart: i ? '1px solid var(--cp-border-subtle)' : 'none',
      padding: '0 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11.5px',
      color: 'var(--cp-text-secondary)'
    }
  }, l), v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--cp-text-secondary)'
    }
  }, t.cumL), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length}, minmax(0,1fr))`,
      gap: '4px',
      alignItems: 'end',
      height: '110px',
      borderBottom: '1px solid var(--cp-border-subtle)'
    }
  }, cols.map((c, i) => {
    const v = cum(cmpMode, i + (settleMode ? 0 : 0));
    const other = cum(settleMode ? 'keep' : 'settle', i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: other / cMax * 100 + '%',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'inset 0 0 0 1px var(--cp-neutral-200)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: '100%',
        height: v / cMax * 100 + '%',
        borderRadius: '6px 6px 0 0',
        background: settleMode ? 'var(--cp-teal-600)' : 'var(--cp-neutral-900)',
        opacity: settleMode && i > 0 ? 0.35 : 1,
        transition: 'height var(--cp-dur-slow) var(--cp-ease), background var(--cp-dur-base) ease'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length}, minmax(0,1fr))`,
      gap: '4px'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: '9.5px',
      textAlign: 'center',
      color: i === 0 ? 'var(--cp-text-primary)' : 'var(--cp-text-secondary)',
      fontWeight: i === 0 ? 600 : 400,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      background: 'var(--cp-teal-50)',
      borderRadius: 'var(--cp-radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13.5px',
      fontWeight: 500,
      color: 'var(--cp-teal-800)'
    }
  }, t.cDiff), /*#__PURE__*/React.createElement(Money, {
    amount: net,
    size: "lg",
    tone: "saving"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => {
      setCmpOpen(false);
      setConfirm(true);
    }
  }, t.accept));
  const node = /*#__PURE__*/React.createElement("div", {
    dir: rtl ? 'rtl' : 'ltr',
    lang: lang,
    role: "dialog",
    "aria-label": t.title,
    style: {
      position: container ? 'absolute' : 'fixed',
      inset: 0,
      zIndex: 40,
      background: 'var(--cp-bg-page)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      transform: vis ? 'none' : `translateX(${rtl ? '-100%' : '100%'})`,
      transition: 'transform var(--cp-dur-sheet) var(--cp-ease-sheet)',
      boxShadow: vis ? '0 0 40px rgba(22,24,29,0.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      position: 'relative',
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: step === 'offer' ? 'absolute' : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2,
      background: step === 'offer' ? 'transparent' : 'var(--cp-bg-page)',
      padding: '44px 16px 10px',
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr) auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: rtl ? 'chevron-right' : 'chevron-left',
    label: t.back,
    onClick: onBack
  }), /*#__PURE__*/React.createElement("span", null), step === 'done' && method !== 'iban' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: t.receipt
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: t.share
  })) : /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 28px'
    }
  }, content)), !errView && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cp-bg-surface)',
      borderRadius: '24px 24px 0 0',
      boxShadow: '0 -8px 24px rgba(22,24,29,0.08)',
      padding: '14px 16px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, step === 'done' ? /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onBack
  }, t.done) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setConfirm(true)
  }, t.accept), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    icon: "arrow-left-right",
    onClick: () => {
      setCmpMode('settle');
      setCmpOpen(true);
    }
  }, t.compare))), /*#__PURE__*/React.createElement(BottomSheet, {
    open: cmpOpen,
    onClose: () => setCmpOpen(false),
    container: container,
    dir: rtl ? 'rtl' : 'ltr',
    title: t.cmpH
  }, compareBody), /*#__PURE__*/React.createElement(BottomSheet, {
    open: confirm,
    onClose: () => setConfirm(false),
    container: container,
    dir: rtl ? 'rtl' : 'ltr',
    title: t.reviewTitle
  }, confirmBody));
  return container ? ReactDOM.createPortal(node, container) : node;
}
const MONTH_KEYS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const STR = {
  en: {
    welcome: 'Welcome back',
    name: 'Layla Al Mansoori',
    hi: 'Hi, Layla',
    balShort: 'Balance',
    paidWord: 'Paid',
    autoShort: 'Auto-debit ••4821',
    lateShort: 'Late fee max AED 200',
    offerEnds: 'Ends 30 Sept',
    offerSave: 'Settle early, save',
    sOnTime: 'On time',
    sLeft: 'Months left',
    sEnds: 'Final payment',
    sEndsV: 'Aug 2027',
    due: d => `Due ${d}`,
    loan: 'Business loan',
    ref: 'CP-20418 · 18 months',
    onTrack: 'On track',
    overdue: 'Overdue',
    paid: 'Paid',
    upcoming: 'Upcoming',
    next: 'Next payment',
    nextOverdue: 'Payment overdue',
    balance: 'Outstanding balance',
    progress: (p, t) => `${p} of ${t} instalments paid`,
    autodebit: 'Auto-debit from ••4821',
    lateCap: 'Late fee is capped at AED 200.',
    offerBadge: 'Limited offer · ends 30 Sept',
    offerPre: 'Save',
    offerT: 'Settle your loan early',
    offerB: 'Clear your balance before 30 Sept 2026 and keep the difference.',
    offerNet: 'Net saving',
    offerAfter: 'after 1% fee',
    offerA: 'See your saving',
    odT: 'Your 9 November instalment is overdue',
    odB: 'Pay now to bring the loan back on track.',
    odA: 'Pay AED 14,800',
    onTime: 'On-time payments',
    of: (a, b) => `${a} of ${b}`,
    noLate: 'No late payments',
    oneLate: '1 overdue',
    monthsLeft: 'Months left',
    endsOn: 'Ends 9 Aug 2027',
    comingUp: 'Coming up',
    seeAll: 'See all',
    histT: 'Instalment history',
    histSum: (p, t, amt) => `${p} of ${t} paid · AED ${amt}`,
    histInst: n => `Instalment ${n}`,
    histPaid: d => `Paid ${d} · ••4821`,
    histDue: d => `Due ${d} · Late fee capped at AED 200`,
    histNext: d => `Due ${d} · Auto-debit ••4821`,
    histLater: d => `Due ${d}`,
    inst: n => `Instalment ${n} of 18`,
    paidOn: d => `Paid ${d}`,
    loanTitle: 'Loan',
    chartT: 'Balance over time',
    chartC: n => `Down AED ${n} since March`,
    paidSoFar: 'Paid so far',
    statements: 'Statements',
    emptyT: 'No statements yet',
    emptyB: 'Your first monthly statement will appear here on 1 December.',
    emptyA: 'Email me a copy',
    payTitle: 'Payments',
    upTab: 'Upcoming',
    paidTab: 'Paid',
    meTitle: 'Profile',
    meT: 'Not in this prototype',
    meB: 'Profile and settings are outside the scope of this test.',
    months: {
      jan: 'Jan',
      feb: 'Feb',
      mar: 'Mar',
      apr: 'Apr',
      may: 'May',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Aug',
      sep: 'Sep',
      oct: 'Oct',
      nov: 'Nov',
      dec: 'Dec'
    },
    nextDateOk: '9 December 2026',
    nextDateOd: '9 November 2026',
    dismiss: 'Dismiss',
    notif: 'Notifications',
    close: 'Close',
    nNew: 'New offer',
    nTime: 'Today, 9:41',
    nT: 'You\'ve received a 2.1% off offer',
    nB: 'Pay off your loan before 30 September and save 2.1% on your outstanding balance.',
    nDisc: 'Discount (2.1%)',
    nFee: 'Settlement fee (1%)',
    nNet: 'Your net saving',
    nCta: 'See your saving',
    nLater: 'Not now',
    nOff: 'off',
    inbox: 'Notifications',
    markAll: 'Mark all read',
    gNew: 'New',
    gEarlier: 'Earlier',
    back: 'Back',
    allCaught: 'You\'re all caught up',
    allCaughtB: 'Payment reminders and offers will show up here.',
    clearAll: 'Clear all',
    eHistT: 'No payments yet',
    eHistB: 'Your first instalment is due on 9 December. Payments will appear here.',
    eHistA: 'View schedule',
    ePaidT: 'No paid instalments yet',
    ePaidB: 'Each payment you make will be listed here with its receipt.',
    eChartT: 'No balance history yet',
    eChartB: 'Your balance chart starts after your first payment on 9 December.',
    eBankT: 'No bank account linked',
    eBankB: 'Link an account to pay instantly from the app.',
    eBankA: 'Link bank account',
    eBankS: 'Pay by bank transfer instead',
    firstDue: 'First payment',
    eFailT: 'Payment didn\'t go through',
    eFailB: 'Your bank declined this payment. No money has left your account.',
    eAmount: 'Amount',
    eAccount: 'Account',
    eDebited: 'Money debited',
    eNo: 'No',
    eRetry: 'Try again',
    eOther: 'Use another account',
    ePendT: 'We\'re confirming your payment',
    ePendB: 'Your bank is taking longer than usual. Please don\'t pay again, we\'ll notify you once it\'s confirmed.',
    eCheck: 'Check status',
    eOffT: 'No internet connection',
    eOffB: 'Check your connection and try again. You haven\'t been charged.',
    eSrvT: 'We can\'t load your loan right now',
    eSrvB: 'This is on our side. Nothing has changed on your loan. Please try again in a few minutes.',
    eSupport: 'Contact support',
    offBar: 'You\'re offline',
    offSub: 'Showing info from 9:41',
    retry: 'Retry',
    linkMore: 'Link another bank account',
    noAuto: 'Auto-debit not set up',
    nOfferB: 'Pay before 30 September and save 2.1%.',
    nRemT: 'Next payment on 9 December',
    nRemB: 'AED 14,800 will be debited from ••4821.',
    nRemTime: 'Yesterday',
    nRemA: 'View schedule',
    nRecT: 'Payment received',
    nRecB: n => `We received AED 14,800 for instalment ${n}.`,
    nAutoT: 'Auto-debit is on',
    nAutoB: 'Instalments are collected from ••4821 on the 9th.',
    nOdT: 'Instalment 9 is overdue',
    nOdB: 'Pay AED 14,800 to get back on track. Late fee is capped at AED 200.',
    nOdTime: 'Today, 8:00',
    nOdA: 'Pay AED 14,800',
    payingInst: n => `Paying instalment ${n} of 18`,
    dueOn: d => `Due ${d}`,
    payUsing: 'Pay using',
    viewAll: 'View all',
    less: 'Show less',
    acc1: 'Current account',
    acc2: 'Savings account',
    checkBal: 'Check balance',
    lim1: 'Instant pay limit: AED 250,000',
    lim2: 'Instant pay limit: AED 100,000',
    keepAuto: 'Keep auto-debit on',
    keepAutoS: 'For your remaining instalments · change anytime',
    faceId: 'Pay with Face ID',
    payNow: 'Pay now',
    payT: n => `Pay instalment ${n}`,
    payAmt: 'Amount due',
    payFrom: 'Pay from',
    mBank: 'Bank account',
    mBankSub: '••4821 · used for auto-debit',
    mCard: 'Debit card',
    mCardSub: '••9032',
    payNoteOk: 'Paying now skips the 9 December auto-debit for this instalment.',
    payCta: 'Pay AED 14,800',
    paidT: 'Payment successful',
    paidB: m => `AED 14,800 from ${m}. It can take up to 1 working day to show.`,
    paidRef: 'Reference',
    whoPaid: 'Layla Al Mansoori paid',
    payeeSub: 'Business loan · CP-20418',
    instTag: n => `Instalment ${n} of 18`,
    securely: 'Paid securely via',
    details: 'Transaction details',
    receipt: 'Receipt',
    share: 'Share',
    rPaidTo: 'Paid to',
    paidToV: 'ClearPath · Business loan',
    rFor: 'For',
    rMode: 'Payment mode',
    rFrom: 'From',
    rAuto: 'Auto-debit',
    autoOn: 'On',
    autoOff: 'Off',
    mInstant: 'Instant bank payment',
    nRem2T: 'Payment due tomorrow',
    nRem2B: 'AED 14,800 will be debited on 9 November.',
    nDone: 'Done',
    nav: {
      home: 'Home',
      loan: 'Loan',
      pay: 'Payments',
      me: 'Profile'
    }
  },
  ar: {
    welcome: 'مرحبًا بعودتك',
    name: 'ليلى المنصوري',
    hi: 'مرحبًا، ليلى',
    balShort: 'الرصيد',
    paidWord: 'مدفوع',
    autoShort: 'خصم تلقائي ••4821',
    lateShort: 'رسوم تأخير حتى 200 درهم',
    offerEnds: 'ينتهي 30 سبتمبر',
    offerSave: 'سدّد مبكرًا ووفّر',
    sOnTime: 'في الموعد',
    sLeft: 'أشهر متبقية',
    sEnds: 'آخر دفعة',
    sEndsV: 'أغسطس 2027',
    due: d => `مستحق ${d}`,
    loan: 'قرض تجاري',
    ref: 'CP-20418 · 18 شهرًا',
    onTrack: 'منتظم',
    overdue: 'متأخر',
    paid: 'مدفوع',
    upcoming: 'قادم',
    next: 'الدفعة التالية',
    nextOverdue: 'دفعة متأخرة',
    balance: 'الرصيد المستحق',
    progress: (p, t) => `${p} من ${t} قسطًا مدفوعة`,
    autodebit: 'خصم تلقائي من ••4821',
    lateCap: 'رسوم التأخير لا تتجاوز 200 درهم.',
    offerBadge: 'عرض محدود · ينتهي 30 سبتمبر',
    offerPre: 'وفّر',
    offerT: 'سدّد قرضك مبكرًا',
    offerB: 'سدّد رصيدك قبل 30 سبتمبر 2026 واحتفظ بالفرق.',
    offerNet: 'صافي التوفير',
    offerAfter: 'بعد رسوم 1%',
    offerA: 'اعرض التوفير',
    odT: 'قسط 9 نوفمبر متأخر',
    odB: 'ادفع الآن ليعود قرضك إلى الانتظام.',
    odA: 'ادفع 14,800 درهم',
    onTime: 'دفعات في موعدها',
    of: (a, b) => `${a} من ${b}`,
    noLate: 'لا دفعات متأخرة',
    oneLate: 'دفعة متأخرة',
    monthsLeft: 'الأشهر المتبقية',
    endsOn: 'ينتهي 9 أغسطس 2027',
    comingUp: 'القادم',
    seeAll: 'عرض الكل',
    histT: 'سجل الأقساط',
    histSum: (p, t, amt) => `${p} من ${t} مدفوعة · ${amt} درهم`,
    histInst: n => `القسط ${n}`,
    histPaid: d => `دُفع ${d} · ••4821`,
    histDue: d => `مستحق ${d} · رسوم التأخير لا تتجاوز 200 درهم`,
    histNext: d => `مستحق ${d} · خصم تلقائي من ••4821`,
    histLater: d => `مستحق ${d}`,
    inst: n => `القسط ${n} من 18`,
    paidOn: d => `دُفع ${d}`,
    loanTitle: 'القرض',
    chartT: 'الرصيد عبر الوقت',
    chartC: n => `انخفض ${n} درهم منذ مارس`,
    paidSoFar: 'المدفوع حتى الآن',
    statements: 'الكشوفات',
    emptyT: 'لا توجد كشوفات بعد',
    emptyB: 'سيظهر أول كشف شهري هنا في 1 ديسمبر.',
    emptyA: 'أرسل نسخة إلى بريدي',
    payTitle: 'الدفعات',
    upTab: 'القادمة',
    paidTab: 'المدفوعة',
    meTitle: 'حسابي',
    meT: 'غير مشمول في هذا النموذج',
    meB: 'الملف الشخصي والإعدادات خارج نطاق هذا الاختبار.',
    months: {
      jan: 'يناير',
      feb: 'فبراير',
      mar: 'مارس',
      apr: 'أبريل',
      may: 'مايو',
      jun: 'يونيو',
      jul: 'يوليو',
      aug: 'أغسطس',
      sep: 'سبتمبر',
      oct: 'أكتوبر',
      nov: 'نوفمبر',
      dec: 'ديسمبر'
    },
    nextDateOk: '9 ديسمبر 2026',
    nextDateOd: '9 نوفمبر 2026',
    dismiss: 'إغلاق',
    notif: 'الإشعارات',
    close: 'إغلاق',
    nNew: 'عرض جديد',
    nTime: 'اليوم، 9:41',
    nT: 'حصلت على عرض خصم 2.1%',
    nB: 'سدّد قرضك قبل 30 سبتمبر ووفّر 2.1% من رصيدك المستحق.',
    nDisc: 'الخصم (2.1%)',
    nFee: 'رسوم التسوية (1%)',
    nNet: 'صافي توفيرك',
    nCta: 'اعرض التوفير',
    nLater: 'ليس الآن',
    nOff: 'خصم',
    inbox: 'الإشعارات',
    markAll: 'تحديد الكل كمقروء',
    gNew: 'جديد',
    gEarlier: 'سابقًا',
    back: 'رجوع',
    allCaught: 'لا إشعارات جديدة',
    allCaughtB: 'ستظهر هنا تذكيرات الدفع والعروض.',
    clearAll: 'مسح الكل',
    eHistT: 'لا دفعات بعد',
    eHistB: 'أول قسط مستحق في 9 ديسمبر. ستظهر دفعاتك هنا.',
    eHistA: 'عرض الجدول',
    ePaidT: 'لا أقساط مدفوعة بعد',
    ePaidB: 'ستظهر كل دفعة هنا مع إيصالها.',
    eChartT: 'لا سجل للرصيد بعد',
    eChartB: 'يبدأ مخطط الرصيد بعد أول دفعة في 9 ديسمبر.',
    eBankT: 'لا يوجد حساب بنكي مرتبط',
    eBankB: 'اربط حسابًا للدفع الفوري من التطبيق.',
    eBankA: 'ربط حساب بنكي',
    eBankS: 'الدفع بالتحويل البنكي بدلًا من ذلك',
    firstDue: 'أول دفعة',
    eFailT: 'لم تتم الدفعة',
    eFailB: 'رفض بنكك هذه الدفعة. لم يُخصم أي مبلغ من حسابك.',
    eAmount: 'المبلغ',
    eAccount: 'الحساب',
    eDebited: 'تم الخصم',
    eNo: 'لا',
    eRetry: 'حاول مجددًا',
    eOther: 'استخدم حسابًا آخر',
    ePendT: 'نتحقق من دفعتك',
    ePendB: 'يستغرق بنكك وقتًا أطول من المعتاد. لا تدفع مرة أخرى، سنبلغك عند التأكيد.',
    eCheck: 'تحقق من الحالة',
    eOffT: 'لا يوجد اتصال بالإنترنت',
    eOffB: 'تحقق من اتصالك وحاول مجددًا. لم يتم خصم أي مبلغ.',
    eSrvT: 'تعذّر تحميل قرضك الآن',
    eSrvB: 'المشكلة لدينا. لم يتغير شيء في قرضك. حاول بعد بضع دقائق.',
    eSupport: 'تواصل مع الدعم',
    offBar: 'أنت غير متصل',
    offSub: 'بيانات من 9:41',
    retry: 'إعادة المحاولة',
    linkMore: 'ربط حساب بنكي آخر',
    noAuto: 'الخصم التلقائي غير مفعّل',
    nOfferB: 'سدّد قبل 30 سبتمبر ووفّر 2.1%.',
    nRemT: 'الدفعة التالية في 9 ديسمبر',
    nRemB: 'سيُخصم 14,800 درهم من ••4821.',
    nRemTime: 'أمس',
    nRemA: 'عرض الجدول',
    nRecT: 'تم استلام الدفعة',
    nRecB: n => `استلمنا 14,800 درهم للقسط ${n}.`,
    nAutoT: 'الخصم التلقائي مفعّل',
    nAutoB: 'تُحصّل الأقساط من ••4821 يوم 9 من كل شهر.',
    nOdT: 'القسط 9 متأخر',
    nOdB: 'ادفع 14,800 درهم ليعود قرضك إلى الانتظام. رسوم التأخير لا تتجاوز 200 درهم.',
    nOdTime: 'اليوم، 8:00',
    nOdA: 'ادفع 14,800 درهم',
    payingInst: n => `دفع القسط ${n} من 18`,
    dueOn: d => `مستحق ${d}`,
    payUsing: 'الدفع باستخدام',
    viewAll: 'عرض الكل',
    less: 'عرض أقل',
    acc1: 'الحساب الجاري',
    acc2: 'حساب التوفير',
    checkBal: 'تحقق من الرصيد',
    lim1: 'حد الدفع الفوري: 250,000 درهم',
    lim2: 'حد الدفع الفوري: 100,000 درهم',
    keepAuto: 'إبقاء الخصم التلقائي',
    keepAutoS: 'لأقساطك المتبقية · يمكنك تغييره متى شئت',
    faceId: 'ادفع باستخدام Face ID',
    payNow: 'ادفع الآن',
    payT: n => `دفع القسط ${n}`,
    payAmt: 'المبلغ المستحق',
    payFrom: 'الدفع من',
    mBank: 'الحساب البنكي',
    mBankSub: '••4821 · مستخدم للخصم التلقائي',
    mCard: 'بطاقة الخصم',
    mCardSub: '••9032',
    payNoteOk: 'الدفع الآن يلغي الخصم التلقائي في 9 ديسمبر لهذا القسط.',
    payCta: 'ادفع 14,800 درهم',
    paidT: 'تمت الدفعة بنجاح',
    paidB: m => `14,800 درهم من ${m}. قد يستغرق ظهورها يوم عمل واحدًا.`,
    paidRef: 'المرجع',
    whoPaid: 'ليلى المنصوري دفعت إلى',
    payeeSub: 'قرض تجاري · CP-20418',
    instTag: n => `القسط ${n} من 18`,
    securely: 'تم الدفع بأمان عبر',
    details: 'تفاصيل العملية',
    receipt: 'الإيصال',
    share: 'مشاركة',
    rPaidTo: 'الدفع إلى',
    paidToV: 'ClearPath · قرض تجاري',
    rFor: 'مقابل',
    rMode: 'طريقة الدفع',
    rFrom: 'من',
    rAuto: 'الخصم التلقائي',
    autoOn: 'مفعّل',
    autoOff: 'متوقف',
    mInstant: 'دفع بنكي فوري',
    nRem2T: 'الدفعة مستحقة غدًا',
    nRem2B: 'سيُخصم 14,800 درهم في 9 نوفمبر.',
    nDone: 'تم',
    nav: {
      home: 'الرئيسية',
      loan: 'القرض',
      pay: 'الدفعات',
      me: 'حسابي'
    }
  }
};

// 18 instalments, March 2026 → August 2027
function buildSchedule(t, paidCount, od) {
  return Array.from({
    length: 18
  }, (_, i) => {
    const mk = MONTH_KEYS[(2 + i) % 12];
    const year = 2026 + Math.floor((2 + i) / 12);
    const status = i < paidCount ? 'paid' : od && i === paidCount ? 'overdue' : 'upcoming';
    const current = od ? i === paidCount : i === paidCount;
    let detail;
    if (status === 'paid') detail = t.paidOn('9 ' + t.months[mk]);else if (status === 'overdue') detail = t.lateCap;else if (current) detail = t.autodebit;else if (year === 2027) detail = '2027';
    return {
      n: i + 1,
      mk,
      status,
      current,
      detail
    };
  });
}
function SheetPane({
  children
}) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setOn(true), 20);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateX(var(--cp-pane-shift, 14px))',
      transition: 'opacity var(--cp-dur-base) ease, transform var(--cp-dur-base) var(--cp-ease)'
    }
  }, children);
}
function HomeScreen({
  lang = 'en',
  loanState = 'on-track',
  openOfferOnMount = false,
  empty = false,
  sim = 'none'
}) {
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
  React.useEffect(() => {
    setReadIds([]);
    setView('list');
  }, [loanState]);
  const [host, setHost] = React.useState(null);
  React.useEffect(() => setHost(document.getElementById('cp-phone')), []);
  React.useEffect(() => setOfferOpen(true), [loanState]);
  const paidCount = empty ? 0 : od ? 8 : 9;
  const schedule = buildSchedule(t, paidCount, od);
  const open = schedule.filter(r => r.status !== 'paid');
  const paidRows = schedule.filter(r => r.status === 'paid').reverse();
  const balance = 266400 - paidCount * 14800;
  const discount = Math.round(balance * 0.021);
  const fee = Math.min(Math.round(balance * 0.01), 10000);
  const netSaving = discount - fee;
  const notifs = empty || cleared ? [] : od ? [{
    id: 'od',
    tone: 'danger',
    icon: 'circle-alert',
    title: t.nOdT,
    body: t.nOdB,
    time: t.nOdTime,
    isNew: true,
    cta: t.nOdA,
    pay: true
  }, {
    id: 'rem2',
    tone: 'info',
    icon: 'calendar',
    title: t.nRem2T,
    body: t.nRem2B,
    time: '8 ' + t.months.nov,
    isNew: false
  }, {
    id: 'rec8',
    tone: 'success',
    icon: 'circle-check',
    title: t.nRecT,
    body: t.nRecB(8),
    time: '9 ' + t.months.oct,
    isNew: false
  }, {
    id: 'auto',
    tone: 'neutral',
    icon: 'repeat',
    title: t.nAutoT,
    body: t.nAutoB,
    time: '12 ' + t.months.mar,
    isNew: false
  }] : [{
    id: 'offer',
    tone: 'offer',
    icon: 'badge-percent',
    title: t.nT,
    body: t.nOfferB,
    time: t.nTime,
    isNew: true
  }, {
    id: 'rem',
    tone: 'info',
    icon: 'calendar',
    title: t.nRemT,
    body: t.nRemB,
    time: t.nRemTime,
    isNew: true,
    cta: t.nRemA,
    go: 'pay'
  }, {
    id: 'rec9',
    tone: 'success',
    icon: 'circle-check',
    title: t.nRecT,
    body: t.nRecB(9),
    time: '9 ' + t.months.nov,
    isNew: false
  }, {
    id: 'auto',
    tone: 'neutral',
    icon: 'repeat',
    title: t.nAutoT,
    body: t.nAutoB,
    time: '12 ' + t.months.mar,
    isNew: false
  }];
  const isUnread = n => n.isNew && !readIds.includes(n.id);
  const unreadCount = notifs.filter(isUnread).length;
  const markRead = id => setReadIds(r => r.includes(id) ? r : [...r, id]);
  const openInbox = () => {
    setView('list');
    setSheet(true);
  };
  const openNotif = id => {
    if (id === 'offer') {
      openOffer();
      return;
    }
    markRead(id);
    setView(id);
    setSheet(true);
  };
  const openOffer = () => {
    markRead('offer');
    setSheet(false);
    setOfferPage(true);
  };
  const closeSheet = () => setSheet(false);
  React.useEffect(() => {
    if (openOfferOnMount && host) {
      const id = setTimeout(openOffer, 250);
      return () => clearTimeout(id);
    }
  }, [host]);
  const openPay = () => {
    setPayAll(false);
    setPaidDet(false);
    setView('pay');
    setSheet(true);
  };
  const row = r => /*#__PURE__*/React.createElement(PaymentScheduleRow, {
    key: r.n,
    day: "9",
    month: t.months[r.mk],
    title: t.inst(r.n),
    detail: r.detail,
    amount: 14800,
    status: r.status,
    statusLabel: t[r.status],
    current: r.current,
    onClick: () => {}
  });
  const go = k => {
    setNav(k);
    const sc = document.getElementById('cp-scroll');
    if (sc) sc.scrollTop = 0;
  };
  const pageTitle = text => /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, text);
  let body;
  if (nav === 'home' && sim === 'server') {
    body = /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: '60px'
      }
    }, /*#__PURE__*/React.createElement(ErrorState, {
      tone: "neutral",
      icon: "server-crash",
      title: t.eSrvT,
      actionLabel: t.eRetry,
      actionIcon: "rotate-cw",
      onAction: () => {},
      secondaryLabel: t.eSupport,
      code: "Error 503 \xB7 5 Nov 2026 9:41"
    }, t.eSrvB));
  } else if (nav === 'home') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--cp-teal-50)',
        color: 'var(--cp-teal-800)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: '15px',
        flex: 'none'
      }
    }, lang === 'ar' ? 'ل' : 'LA'), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.hi), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: t.notif,
      badgeCount: unreadCount,
      onClick: openInbox
    })), sim === 'offline' && /*#__PURE__*/React.createElement(OfflineBar, {
      title: t.offBar,
      label: t.offSub,
      actionLabel: t.retry,
      onAction: () => {}
    }), /*#__PURE__*/React.createElement(LoanStatusCard, {
      lead: "payment",
      status: od ? 'overdue' : 'on-track',
      statusLabel: od ? t.overdue : t.onTrack,
      title: t.loan,
      balanceLabel: t.balShort,
      balance: balance,
      nextLabel: od ? t.nextOverdue : t.next,
      nextDate: od ? t.nextDateOd : t.nextDateOk,
      nextAmount: 14800,
      nextDetail: od ? t.lateShort : linked ? t.autoShort : t.noAuto,
      paidCount: paidCount,
      totalCount: 18,
      progressLabel: t.paidWord,
      payLabel: t.payNow,
      onPay: openPay
    }), offerOpen && !empty && /*#__PURE__*/React.createElement(AlertBanner, {
      key: "offer",
      variant: "offer",
      badge: t.offerEnds,
      highlightPrefix: t.offerPre,
      highlight: "2.1%",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, t.offerSave, ' ', /*#__PURE__*/React.createElement(Money, {
        amount: netSaving,
        size: "md",
        tone: "saving"
      })),
      actionLabel: t.offerA,
      onAction: openOffer,
      onDismiss: () => setOfferOpen(false),
      dismissLabel: t.dismiss
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
        background: 'var(--cp-bg-surface)',
        borderRadius: 'var(--cp-radius-lg)',
        boxShadow: 'var(--cp-shadow-card)',
        padding: '14px 0'
      }
    }, [empty ? ['—', t.sOnTime, null, null] : [od ? '8/9' : '9/9', t.sOnTime, od ? 'var(--cp-status-overdue)' : 'var(--cp-green-600)', od ? 'circle-alert' : 'circle-check'], [String(18 - paidCount), t.sLeft, null, 'hourglass'], [t.sEndsV, t.sEnds, null, 'flag']].map(([v, l, col, ic], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '0 8px',
        borderInlineStart: i ? '1px solid var(--cp-border-subtle)' : 'none',
        textAlign: 'center',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '17px',
        fontWeight: 600,
        lineHeight: 1.2,
        color: col || 'var(--cp-text-primary)',
        whiteSpace: 'nowrap'
      }
    }, col && /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 15
    }), /*#__PURE__*/React.createElement("bdi", null, v)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-secondary)',
        whiteSpace: 'nowrap'
      }
    }, l)))), empty ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: '18px',
        fontWeight: 600
      }
    }, t.histT), /*#__PURE__*/React.createElement(EmptyState, {
      icon: "receipt-text",
      title: t.eHistT,
      actionLabel: t.eHistA,
      onAction: () => {
        setPayTab('upcoming');
        go('pay');
      }
    }, t.eHistB)) : /*#__PURE__*/React.createElement(InstalmentTimeline, {
      title: t.histT,
      statusLabels: {
        paid: '',
        overdue: t.overdue,
        upcoming: t.upcoming
      },
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => {
          setPayTab('paid');
          go('pay');
        }
      }, t.seeAll),
      items: schedule.filter(r => r.status !== 'upcoming').reverse().slice(0, 3).map(r => ({
        id: r.n,
        title: t.histInst(r.n),
        meta: r.status === 'overdue' ? t.due('9 ' + t.months[r.mk]) : '9 ' + t.months[r.mk],
        amount: 14800,
        status: r.status
      }))
    }));
  } else if (nav === 'loan') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, pageTitle(t.loanTitle), empty ? /*#__PURE__*/React.createElement(EmptyState, {
      icon: "chart-column",
      title: t.eChartT
    }, t.eChartB) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BarChart, {
      title: t.chartT,
      value: balance,
      valueCurrency: "AED",
      caption: t.chartC((paidCount * 14800).toLocaleString('en-US')),
      data: ['mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'].map((m, i) => ({
        label: t.months[m],
        value: 266400 - Math.min(i + 1, paidCount) * 14800
      })),
      highlightIndex: paidCount - 1,
      formatValue: v => (v / 1000).toFixed(1) + 'k',
      height: 150
    }), /*#__PURE__*/React.createElement(MetricTrend, {
      label: t.paidSoFar,
      value: paidCount * 14800,
      currency: "AED",
      chart: "line",
      data: Array.from({
        length: paidCount
      }, (_, i) => (i + 1) * 14800),
      delta: t.progress(paidCount, 18),
      trend: "up",
      sentiment: "good"
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '8px 0 0',
        fontSize: '18px',
        fontWeight: 600
      }
    }, t.statements), /*#__PURE__*/React.createElement(EmptyState, {
      icon: "file-text",
      title: t.emptyT,
      actionLabel: t.emptyA,
      onAction: () => {}
    }, t.emptyB));
  } else if (nav === 'pay') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px'
      }
    }, pageTitle(t.payTitle), /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: payTab,
      onChange: setPayTab,
      options: [{
        value: 'upcoming',
        label: t.upTab
      }, {
        value: 'paid',
        label: t.paidTab
      }]
    })), payTab === 'paid' && paidRows.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
      icon: "receipt-text",
      title: t.ePaidT
    }, t.ePaidB) : /*#__PURE__*/React.createElement(InstalmentTimeline, {
      statusLabels: {
        paid: t.paid,
        overdue: t.overdue,
        upcoming: t.upcoming
      },
      items: (payTab === 'upcoming' ? open : paidRows).map(r => {
        const d = '9 ' + t.months[r.mk] + (r.n >= 11 ? ' 2027' : '');
        const meta = r.status === 'paid' ? t.histPaid('9 ' + t.months[r.mk]) : r.status === 'overdue' ? t.histDue(d) : r.current ? t.histNext(d) : t.histLater(d);
        return {
          id: r.n,
          title: t.inst(r.n),
          meta,
          amount: 14800,
          status: r.status
        };
      })
    }));
  } else {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, pageTitle(t.meTitle), /*#__PURE__*/React.createElement(EmptyState, {
      icon: "user",
      title: t.meT
    }, t.meB));
  }
  return /*#__PURE__*/React.createElement("div", {
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    lang: lang,
    style: {
      minHeight: '100%',
      background: 'linear-gradient(180deg, var(--cp-bg-page-tint) 0px, var(--cp-bg-page) 300px)',
      fontFamily: 'var(--cp-font-text)',
      color: 'var(--cp-text-primary)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '52px var(--cp-screen-gutter) 20px',
      boxSizing: 'border-box'
    }
  }, body, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(OfferScreen, {
    sim: sim,
    open: offerPage,
    onBack: () => setOfferPage(false),
    container: host,
    lang: lang,
    balance: balance,
    remaining: open.map(r => t.months[r.mk])
  }), /*#__PURE__*/React.createElement(BottomSheet, {
    open: sheet,
    onClose: closeSheet,
    container: host,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    title: view === 'list' ? t.inbox : view === 'pay' ? t.payT(paidCount + 1) : view === 'paid' ? t.paidT : (notifs.find(n => n.id === view) || {}).title,
    closeLabel: t.close
  }, /*#__PURE__*/React.createElement(SheetPane, {
    key: view
  }, !['list', 'pay', 'paid', 'failed', 'pending', 'offline'].includes(view) && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setView('list'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      minHeight: '36px',
      marginTop: '-6px',
      marginBottom: '6px',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--cp-text-link)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: lang === 'ar' ? 'chevron-right' : 'chevron-left',
    size: 18
  }), t.inbox), view === 'list' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      fontFamily: 'var(--cp-font-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: '21px',
      fontWeight: 600
    }
  }, t.inbox), unreadCount > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setReadIds(notifs.map(n => n.id))
  }, t.markAll) : notifs.length > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setCleared(true)
  }, t.clearAll)), notifs.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    compact: true,
    tone: "neutral",
    icon: "bell-off",
    title: t.allCaught
  }, t.allCaughtB), [[t.gNew, notifs.filter(n => n.isNew)], [t.gEarlier, notifs.filter(n => !n.isNew)]].map(([g, list]) => list.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--cp-text-secondary)',
      padding: '4px 12px'
    }
  }, g), list.map(n => /*#__PURE__*/React.createElement(NotificationItem, {
    key: n.id,
    tone: n.tone,
    icon: n.icon,
    title: n.title,
    body: n.body,
    time: n.time,
    unread: isUnread(n),
    onClick: () => openNotif(n.id)
  }))))) : view === 'pay' ? (() => {
    const due = od ? t.nextDateOd : t.nextDateOk;
    const accs = [{
      k: 'acc1',
      ic: 'landmark',
      name: t.acc1,
      last: '4821',
      limit: t.lim1
    }, {
      k: 'acc2',
      ic: 'piggy-bank',
      name: t.acc2,
      last: '7710',
      limit: t.lim2
    }, ...(payAll ? [{
      k: 'card',
      ic: 'credit-card',
      name: t.mCard,
      last: '9032'
    }] : [])];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        paddingTop: '6px',
        fontFamily: 'var(--cp-font-text)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(155deg, var(--cp-teal-800), var(--cp-teal-900))',
        color: 'var(--cp-teal-300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "landmark",
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '17px',
        fontWeight: 500
      }
    }, t.payingInst(paidCount + 1))), /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '6px',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1,
        alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '18px',
        fontWeight: 500
      }
    }, "AED"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '42px',
        fontWeight: 700,
        letterSpacing: '-0.03em'
      }
    }, "14,800", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cp-neutral-400)'
      }
    }, ".00"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--cp-border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: od ? 'var(--cp-red-50)' : 'var(--cp-teal-50)',
        color: od ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: '14.5px'
      }
    }, t.dueOn(due)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14.5px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        flex: 'none',
        color: od ? 'var(--cp-status-overdue)' : 'var(--cp-teal-600)'
      }
    }, od ? t.overdue : t.onTrack)), od && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: 'var(--cp-text-secondary)',
        marginTop: '-8px'
      }
    }, t.lateCap), /*#__PURE__*/React.createElement("div", {
      role: "radiogroup",
      "aria-label": t.payUsing,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14.5px',
        color: 'var(--cp-text-secondary)'
      }
    }, t.payUsing), linked && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        setPayAll(v => !v);
        if (payAll && method === 'card') setMethod('acc1');
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        minHeight: '36px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '14px',
        color: 'var(--cp-text-secondary)'
      }
    }, payAll ? t.less : t.viewAll, /*#__PURE__*/React.createElement(Icon, {
      name: "chevrons-up-down",
      size: 14
    }))), !linked && /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--cp-radius-md)',
        boxShadow: '0 0 0 1px var(--cp-border-subtle)',
        padding: '8px 14px 14px',
        marginTop: '4px'
      }
    }, /*#__PURE__*/React.createElement(EmptyState, {
      compact: true,
      icon: "landmark",
      title: t.eBankT,
      actionLabel: t.eBankA,
      actionIcon: "plus",
      onAction: () => setLinked(true),
      secondaryLabel: t.eBankS,
      onSecondary: closeSheet
    }, t.eBankB)), linked && accs.map(ac => {
      const on = method === ac.k;
      return /*#__PURE__*/React.createElement("button", {
        key: ac.k,
        type: "button",
        role: "radio",
        "aria-checked": on,
        onClick: () => setMethod(ac.k),
        style: {
          all: 'unset',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'grid',
          gridTemplateColumns: '44px minmax(0,1fr) 22px',
          alignItems: 'center',
          gap: '14px',
          padding: '10px 0'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--cp-bg-surface)',
          boxShadow: '0 0 0 1px var(--cp-border-subtle)',
          color: 'var(--cp-teal-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ac.ic,
        size: 19
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '15.5px',
          fontWeight: 500
        }
      }, ac.name), /*#__PURE__*/React.createElement("bdi", {
        dir: "ltr",
        style: {
          fontSize: '13.5px',
          color: 'var(--cp-text-secondary)'
        }
      }, "\u2022\u2022 ", ac.last)), ac.k !== 'card' && /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px',
          fontSize: '13px',
          color: 'var(--cp-text-secondary)'
        }
      }, t.checkBal, /*#__PURE__*/React.createElement(Icon, {
        name: lang === 'ar' ? 'chevron-left' : 'chevron-right',
        size: 14
      })), ac.limit && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '12.5px',
          fontWeight: 500,
          color: 'var(--cp-green-600)'
        }
      }, ac.limit)), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          boxSizing: 'border-box',
          border: on ? '7px solid var(--cp-text-primary)' : '1.5px solid var(--cp-neutral-400)',
          transition: 'border var(--cp-dur-fast) ease'
        }
      }));
    }), linked && payAll && /*#__PURE__*/React.createElement("button", {
      type: "button",
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '44px minmax(0,1fr) 18px',
        alignItems: 'center',
        gap: '14px',
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        border: '1.5px dashed var(--cp-neutral-400)',
        color: 'var(--cp-teal-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 19
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15px',
        fontWeight: 500,
        color: 'var(--cp-teal-600)'
      }
    }, t.linkMore), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cp-text-secondary)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: lang === 'ar' ? 'chevron-left' : 'chevron-right',
      size: 16
    })))), linked && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '40px minmax(0,1fr) auto',
        alignItems: 'center',
        gap: '12px',
        background: 'var(--cp-neutral-25)',
        boxShadow: '0 0 0 1px var(--cp-border-subtle)',
        borderRadius: 'var(--cp-radius-md)',
        padding: '14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--cp-teal-50)',
        color: 'var(--cp-teal-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "repeat",
      size: 19
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14.5px',
        fontWeight: 500
      }
    }, t.keepAuto), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12.5px',
        color: 'var(--cp-text-secondary)'
      }
    }, t.keepAutoS)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "switch",
      "aria-checked": keepAuto,
      "aria-label": t.keepAuto,
      onClick: () => setKeepAuto(v => !v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        width: '51px',
        height: '31px',
        borderRadius: '16px',
        background: keepAuto ? 'var(--cp-teal-600)' : 'var(--cp-neutral-200)',
        position: 'relative',
        transition: 'background var(--cp-dur-base) ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '2px',
        insetInlineStart: keepAuto ? '22px' : '2px',
        width: '27px',
        height: '27px',
        borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'inset-inline-start var(--cp-dur-base) var(--cp-ease)'
      }
    }))), linked && /*#__PURE__*/React.createElement(SlideToConfirm, {
      label: t.faceId,
      rtl: lang === 'ar',
      onConfirm: () => setView({
        payfail: 'failed',
        timeout: 'pending',
        offline: 'offline'
      }[sim] || 'paid')
    }));
  })() : view === 'failed' ? /*#__PURE__*/React.createElement(ErrorState, {
    compact: true,
    tone: "danger",
    icon: "circle-x",
    title: t.eFailT,
    details: [[t.eAmount, /*#__PURE__*/React.createElement(Money, {
      amount: 14800,
      size: "sm"
    })], [t.eAccount, /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr"
    }, "\u2022\u2022 ", method === 'acc2' ? '7710' : method === 'card' ? '9032' : '4821')], [t.eDebited, t.eNo]],
    actionLabel: t.eRetry,
    actionIcon: "rotate-cw",
    onAction: () => setView('pay'),
    secondaryLabel: t.eOther,
    onSecondary: () => {
      setMethod(method === 'acc2' ? 'acc1' : 'acc2');
      setView('pay');
    },
    code: "Ref CP-PAY-58213 \xB7 Bank code 51"
  }, t.eFailB) : view === 'pending' ? /*#__PURE__*/React.createElement(ErrorState, {
    compact: true,
    tone: "warning",
    icon: "hourglass",
    title: t.ePendT,
    details: [[t.eAmount, /*#__PURE__*/React.createElement(Money, {
      amount: 14800,
      size: "sm"
    })], [t.paidRef, /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        fontFamily: 'var(--cp-font-mono)',
        fontSize: '13px'
      }
    }, "CP-PAY-58213")]],
    actionLabel: t.eCheck,
    actionIcon: "refresh-cw",
    onAction: () => setView('paid'),
    secondaryLabel: t.nDone,
    onSecondary: closeSheet
  }, t.ePendB) : view === 'offline' ? /*#__PURE__*/React.createElement(ErrorState, {
    compact: true,
    tone: "neutral",
    icon: "wifi-off",
    title: t.eOffT,
    actionLabel: t.eRetry,
    actionIcon: "rotate-cw",
    onAction: () => setView('pay'),
    secondaryLabel: t.nDone,
    onSecondary: closeSheet
  }, t.eOffB) : view === 'paid' ? (() => {
    const accName = {
      acc1: [t.acc1, '4821'],
      acc2: [t.acc2, '7710'],
      card: [t.mCard, '9032']
    }[method];
    const rowS = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      minHeight: '46px',
      fontSize: '13.5px'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        fontFamily: 'var(--cp-font-text)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
        marginTop: '-4px'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "download",
      label: t.receipt,
      variant: "soft",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "share-2",
      label: t.share,
      variant: "soft",
      size: "sm"
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--cp-radius-lg)',
        background: 'repeating-radial-gradient(circle at 50% 50%, rgba(20,122,110,0) 0 22px, rgba(20,122,110,0.07) 22px 23px), radial-gradient(circle at 50% 50%, var(--cp-teal-50) 0, rgba(229,243,240,0) 42%), #fbfaf6',
        boxShadow: 'inset 0 0 0 8px #fbfaf6, inset 0 0 0 9px rgba(20,122,110,0.2)',
        padding: '26px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        background: 'var(--cp-teal-50)',
        color: 'var(--cp-teal-800)',
        boxShadow: '0 0 0 4px #fff, 0 4px 14px rgba(22,24,29,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '17px',
        fontWeight: 600
      }
    }, lang === 'ar' ? 'ل' : 'LA'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14.5px',
        fontWeight: 500,
        marginTop: '12px',
        color: 'var(--cp-text-secondary)'
      }
    }, t.whoPaid), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.2
      }
    }, "ClearPath"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13px',
        color: 'var(--cp-text-secondary)',
        marginTop: '2px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "landmark",
      size: 14
    }), /*#__PURE__*/React.createElement("bdi", null, t.payeeSub)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '28px 0 26px'
      }
    }, /*#__PURE__*/React.createElement(Money, {
      amount: 14800,
      size: "hero",
      weight: 700
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        height: '28px',
        padding: '0 12px',
        background: '#fff',
        boxShadow: '0 0 0 1px var(--cp-border-subtle)',
        fontSize: '12.5px',
        fontWeight: 500,
        letterSpacing: '0.02em'
      }
    }, t.instTag(paidCount + 1)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12.5px',
        fontWeight: 500,
        color: 'var(--cp-green-600)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 14
    }), t.paidT)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-secondary)'
      }
    }, t.securely), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14.5px',
        fontWeight: 600,
        marginTop: '3px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: method === 'card' ? 'credit-card' : 'zap',
      size: 15
    }), method === 'card' ? t.mCard : t.mInstant), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-secondary)',
        marginTop: '2px'
      }
    }, accName[0], " ", /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr"
    }, "\u2022\u2022 ", accName[1])), /*#__PURE__*/React.createElement("div", {
      dir: "ltr",
      style: {
        alignSelf: 'stretch',
        margin: '22px -20px 0',
        padding: '12px 10px 16px',
        borderTop: '1px dashed rgba(20,122,110,0.25)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        fontSize: '10.5px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--cp-text-secondary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, /*#__PURE__*/React.createElement("span", null, "5 Nov 2026, 9:41 AM"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '1px',
        height: '12px',
        background: 'var(--cp-neutral-400)'
      }
    }), /*#__PURE__*/React.createElement("span", null, "TXN 830211458213"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": paidDet,
      onClick: () => setPaidDet(v => !v),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        minHeight: '48px',
        padding: '0 14px',
        borderRadius: 'var(--cp-radius-md)',
        boxShadow: '0 0 0 1px var(--cp-border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '14.5px',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "receipt-text",
      size: 18
    }), t.details), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        transform: paidDet ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--cp-dur-base) var(--cp-ease)',
        color: 'var(--cp-text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18
    }))), paidDet && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 4px',
        marginTop: '-6px'
      }
    }, [[t.rPaidTo, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, t.paidToV)], [t.rFor, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, t.inst(paidCount + 1))], [t.rMode, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, method === 'card' ? t.mCard : t.mInstant)], [t.rFrom, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, accName[0], " ", /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        color: 'var(--cp-text-secondary)',
        fontWeight: 400
      }
    }, "\u2022\u2022 ", accName[1]))], [t.paidRef, /*#__PURE__*/React.createElement("bdi", {
      dir: "ltr",
      style: {
        fontFamily: 'var(--cp-font-mono)',
        fontSize: '13px'
      }
    }, "CP-PAY-58213")], [t.rAuto, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: keepAuto ? 'var(--cp-green-600)' : 'var(--cp-text-secondary)'
      }
    }, keepAuto ? t.autoOn : t.autoOff)]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        ...rowS,
        borderTop: i ? '1px solid var(--cp-border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cp-text-secondary)',
        flex: 'none'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'end',
        minWidth: 0
      }
    }, v)))), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: closeSheet
    }, t.nDone));
  })() : (() => {
    const n = notifs.find(n => n.id === view);
    if (!n) return null;
    const tone = {
      danger: ['var(--cp-red-50)', 'var(--cp-red-600)'],
      info: ['var(--cp-teal-50)', 'var(--cp-teal-600)'],
      success: ['var(--cp-green-50)', 'var(--cp-green-600)'],
      neutral: ['var(--cp-bg-sunken)', 'var(--cp-text-secondary)']
    }[n.tone];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        fontFamily: 'var(--cp-font-text)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: tone[0],
        color: tone[1],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--cp-text-secondary)'
      }
    }, n.time), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: '21px',
        fontWeight: 600,
        lineHeight: 1.25
      }
    }, n.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '14.5px',
        lineHeight: 1.5,
        color: 'var(--cp-text-secondary)'
      }
    }, n.body)), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => {
        if (n.pay) {
          setView('pay');
          return;
        }
        closeSheet();
        if (n.go) go(n.go);
      }
    }, n.cta || t.nDone));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '12px',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    value: nav,
    onChange: go,
    items: [{
      key: 'home',
      icon: 'house',
      label: t.nav.home
    }, {
      key: 'loan',
      icon: 'landmark',
      label: t.nav.loan
    }, {
      key: 'pay',
      icon: 'credit-card',
      label: t.nav.pay
    }, {
      key: 'me',
      icon: 'user',
      label: t.nav.me
    }]
  })));
}
window.CP = Object.assign(window.CP || {}, {
  Icon,
  IconButton,
  Money,
  Button,
  SlideToConfirm,
  SegmentedControl,
  BottomNav,
  BarChart,
  StatusChip,
  PaymentScheduleRow,
  InstalmentTimeline,
  LoanStatusCard,
  AlertBanner,
  BottomSheet,
  NotificationItem,
  ErrorState,
  OfflineBar,
  MetricTrend,
  EmptyState,
  LockScreen,
  OfferScreen,
  SheetPane,
  HomeScreen
});
    return window.CP; }
  window.cpReady = new Promise(function(res,rej){
    (function wait(){ if (window.React && window.ReactDOM) { try { res(run()); } catch(e){ console.error('[cp bundle]', e); rej(e); } } else setTimeout(wait, 20); })();
  });
})();
