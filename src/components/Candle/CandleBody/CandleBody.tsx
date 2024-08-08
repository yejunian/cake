import candleBodyShortSvg from '@/assets/twemoji/modified/candle-body-short.svg';

import { candleBody } from './CandleBody.css';

function CandleBody() {
  return (
    <img
      className={candleBody}
      src={candleBodyShortSvg}
      alt="A short candle body"
    />
  );
}

export default CandleBody;
