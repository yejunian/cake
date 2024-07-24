import Candle from './Candle/Candle';
import { candles } from './CandleContainer.css';

interface IProps {
  isCandleLit: boolean;
}

function CandleContainer({ isCandleLit }: IProps) {
  return (
    <div className={candles}>
      <Candle isLit={isCandleLit} />
      <Candle isLit={isCandleLit} />
      <Candle isLit={isCandleLit} />
    </div>
  );
}

export default CandleContainer;
