import { useCandleStore } from '@/stores/candle.store';

import { cake } from './Cake.css';
import CakeBody from './CakeBody';
import CandleContainer from './CandleContainer';

function Cake() {
  const { toggleIsLit } = useCandleStore();

  return (
    <div className={cake} onClick={toggleIsLit}>
      <CandleContainer />

      <CakeBody />
    </div>
  );
}

export default Cake;
