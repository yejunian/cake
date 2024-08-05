import Candle from './Candle/Candle';
import { candles } from './CandleContainer.css';

function CandleContainer() {
  return (
    <div className={candles}>
      <Candle />
      <Candle />
      <Candle />
    </div>
  );
}

export default CandleContainer;
