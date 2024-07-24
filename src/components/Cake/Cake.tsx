import { useState } from 'react';

import { cake } from './Cake.css';
import CakeBody from './CakeBody';
import CandleContainer from './CandleContainer';

function Cake() {
  const [isCandleLit, setIsCandleLit] = useState(true);

  const handleClick = () => {
    setIsCandleLit((prev) => !prev);
  };

  return (
    <div className={cake} onClick={handleClick}>
      <CandleContainer isCandleLit={isCandleLit} />

      <CakeBody />
    </div>
  );
}

export default Cake;
