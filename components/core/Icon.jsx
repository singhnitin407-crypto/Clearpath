import React from 'react';

export function Icon({ name, size = 20, color, label }) {
  return (
    <i
      className={'icon-' + name}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      style={{ fontSize: size + 'px', lineHeight: 1, width: size + 'px', height: size + 'px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'normal', color: color || 'currentColor', flex: 'none' }}
    ></i>
  );
}
