import { style } from '@vanilla-extract/css';

export const candle = style({
  position: 'relative',

  width: '7.5%', // TODO: 숫자 초 작업 시 초 타입에 따라 maxHeight와 함께 조정 필요
  maxHeight: '40vmin',
});
