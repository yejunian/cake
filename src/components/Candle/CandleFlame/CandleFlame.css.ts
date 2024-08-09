import { style } from '@vanilla-extract/css';

export const candleFlame = style({
  position: 'absolute',
  zIndex: '10',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -80%)',
  width: '100%',

  display: 'block',

  transition: `
    transform 0.36s ease-out,
    opacity 0.36s ease-out
  `,
});

export const blowOut = style({
  transform: 'skewX(-45deg) translate(-100%, -90%)',
  opacity: '0',
});
