import { useCandleStore } from '@/stores/candle.store';

import {
  configName,
  container,
  configBlock,
  left,
  numberInput,
} from './Config.css';

function Config() {
  const { candleNumber, setCandleNumber } = useCandleStore();

  return (
    <div className={container}>
      <div className={left}>
        <div className={configBlock}>
          <div className={configName}>#🕯️</div>
          <input
            type="number"
            className={numberInput}
            inputMode="numeric"
            min="1"
            value={candleNumber}
            onChange={(event) => setCandleNumber(event.target.valueAsNumber)}
          />
        </div>
      </div>
    </div>
  );
}

export default Config;
