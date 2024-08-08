import Candle from '@/components/Candle/Candle';
import { useCandleStore } from '@/stores/candle.store';

import { candles } from './CakeCandles.css';

function CakeCandles() {
  const { candleNumber } = useCandleStore();

  return (
    <div className={candles}>
      {Array.from({ length: candleNumber }, (_, index) => (
        <Candle key={index} />
      ))}
    </div>
  );
}

export default CakeCandles;
