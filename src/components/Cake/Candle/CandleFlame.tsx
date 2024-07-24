import { candleFlame } from './CandleFlame.css';

interface IProps {
  isLit: boolean;
}

function CandleFlame({ isLit }: IProps) {
  return <div className={candleFlame}>{isLit && '🔥'}</div>;
}

export default CandleFlame;
