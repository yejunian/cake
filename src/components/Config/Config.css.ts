import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,

  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',

  padding: '16px',
});

export const closed = style({
  justifyContent: 'end',
});

export const left = style({
  display: 'flex',
  flex: '1 1',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '8px',
});

globalStyle(`${left} > *`, {
  height: '48px',
});

export const configBlock = style({
  display: 'flex',
});

export const configName = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',

  fontWeight: 'bold',
});

export const numberInput = style({
  border: '1px solid #606060',
  borderRadius: '8px',
  padding: '0 8px',
  width: '64px',
  backgroundColor: '#282828',

  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
});

export const toggle = style({
  flex: '0 0 48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  margin: 0,
  border: '1px solid #606060',
  borderRadius: '8px',
  padding: 0,
  width: '48px',
  height: '48px',
  backgroundColor: 'transparent',

  color: '#d0d0d0',
  fontSize: '24px',
});
