import clsx from 'clsx';
import { useState } from 'react';
import { FiCheck, FiEdit } from 'react-icons/fi';

import { useCandleStore } from '@/stores/candle.store';

import {
  configName,
  container,
  configBlock,
  left,
  numberInput,
  toggle,
  closed,
} from './Config.css';

function Config() {
  const { candleNumber, setCandleNumber } = useCandleStore();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={clsx(container, !isOpen && closed)}>
      {isOpen && (
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
      )}

      <button className={toggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiCheck /> : <FiEdit />}
      </button>
    </div>
  );
}

export default Config;
