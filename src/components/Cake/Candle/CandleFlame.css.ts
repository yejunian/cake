import { style } from '@vanilla-extract/css';

export const candleFlame = style({
  textAlign: 'center',
  fontSize: '1.5rem',
  opacity: '0.9',
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
