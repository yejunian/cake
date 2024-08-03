import cakeBodySvg from '@/assets/twemoji/modified/cake-body.svg';

import { cakeBody } from './CakeBody.css';

function CakeBody() {
  return <img className={cakeBody} src={cakeBodySvg} alt="Cake body" />;
}

export default CakeBody;
