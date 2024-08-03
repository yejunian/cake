import clsx from 'clsx';

import flameSvg from '@/assets/twemoji/modified/flame.svg';

import { blowOut, candleFlame } from './CandleFlame.css';

interface IProps {
  isLit: boolean;
}

function CandleFlame({ isLit }: IProps) {
  return (
    <img
      className={clsx(candleFlame, !isLit && blowOut)}
      src={flameSvg}
      alt="Candle flame"
    />
  );
}

export default CandleFlame;
