import clsx from 'clsx';

import { blowOut, candleFlame } from './CandleFlame.css';

interface IProps {
  isLit: boolean;
}

function CandleFlame({ isLit }: IProps) {
  return <div className={clsx(candleFlame, !isLit && blowOut)}>🔥</div>;
}

export default CandleFlame;
