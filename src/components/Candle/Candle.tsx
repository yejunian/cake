import { candle } from './Candle.css';
import CandleBody from './CandleBody/CandleBody';
import CandleFlame from './CandleFlame/CandleFlame';

function Candle() {
  return (
    <div className={candle}>
      <CandleFlame />

      <CandleBody />
    </div>
  );
}

export default Candle;
