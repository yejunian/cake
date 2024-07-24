import { style } from '@vanilla-extract/css';

export const cakeBody = style({
  borderTopLeftRadius: '4vmin',
  borderTopRightRadius: '4vmin',
  width: '100%',
  height: '25vh',
  background: `
    linear-gradient(to bottom, #ffffff, #ffffff80 5%, #ffffff00 15%),
    linear-gradient(to right, #ffffff, #d0d0d0)
  `,
});
