import clsx from 'clsx';

import flameSvg from '@/assets/twemoji/modified/flame.svg';
import { useCandleStore } from '@/stores/candle.store';

import { blowOut, candleFlame } from './CandleFlame.css';

function CandleFlame() {
  const { isLit } = useCandleStore();

  return (
    <img
      className={clsx(candleFlame, !isLit && blowOut)}
      src={flameSvg}
      alt="Candle flame"
    />
  );
}

export default CandleFlame;
