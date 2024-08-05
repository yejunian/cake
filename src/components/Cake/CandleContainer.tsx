import { useCandleStore } from '@/stores/candle.store';

import Candle from './Candle/Candle';
import { candles } from './CandleContainer.css';

function CandleContainer() {
  const { candleNumber } = useCandleStore();

  return (
    <div className={candles}>
      {Array.from({ length: candleNumber }, (_, index) => (
        <Candle key={index} />
      ))}
    </div>
  );
}

export default CandleContainer;
