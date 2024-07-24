import { style } from '@vanilla-extract/css';

export const candleBody = style({
  marginTop: '-4px',
  borderTopLeftRadius: '999px',
  borderTopRightRadius: '999px',
  width: '12px',
  height: '20vh',
  background: `
    linear-gradient(to bottom, #ffffff, #ffffff00 5%),
    linear-gradient(to top, #a0a0a0, #a0a0a0 5%, #a0a0a000 5%),
    linear-gradient(to right, #ffffff, #c0c0c0)
  `,
});
