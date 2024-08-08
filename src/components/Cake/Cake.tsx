import { useCandleStore } from '@/stores/candle.store';

import { cake } from './Cake.css';
import CakeBody from './CakeBody/CakeBody';
import CakeCandles from './CakeCandles/CakeCandles';

function Cake() {
  const { toggleIsLit } = useCandleStore();

  return (
    <div className={cake} onClick={toggleIsLit}>
      <CakeCandles />

      <CakeBody />
    </div>
  );
}

export default Cake;
