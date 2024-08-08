import { style } from '@vanilla-extract/css';

export const candleFlame = style({
  display: 'block',
  width: '100%',

  position: 'relative',
  zIndex: '10',

  transition: `
    transform 0.36s ease-out,
    opacity 0.36s ease-out
  `,
});

export const blowOut = style({
  transform: 'skewX(45deg) translateX(-50%)',
  opacity: '0',
});
