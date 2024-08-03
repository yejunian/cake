import { style } from '@vanilla-extract/css';

export const candles = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'end',

  boxSizing: 'border-box',
  padding: '0 10%',
  width: '100%',

  position: 'relative',
  zIndex: '10',
});
