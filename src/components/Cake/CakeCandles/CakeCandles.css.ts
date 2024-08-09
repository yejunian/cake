import { style } from '@vanilla-extract/css';

export const candles = style({
  position: 'absolute',
  zIndex: '10',
  right: 0,
  bottom: '50vmin',
  left: 0,
  width: '100%',
  height: '50vmin',

  display: 'flex',
  justifyContent: 'space-evenly', // TODO: 숫자 초 작업 시 초 타입에 따라 space-evenly, center 전환
  alignItems: 'end',

  boxSizing: 'border-box',
  padding: '0 10%',
});
