import { candle } from './Candle.css';
import CandleBody from './CandleBody';
import CandleFlame from './CandleFlame';

interface IProps {
  isLit: boolean;
}

function Candle({ isLit }: IProps) {
  return (
    <div className={candle}>
      <CandleFlame isLit={isLit} />

      <CandleBody />
    </div>
  );
}

export default Candle;
