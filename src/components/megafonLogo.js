import React from 'react';
import megaSVG from 'assets/icons/Mega-logotype.svg';

const MegafonLogo = () =>
  <svg viewBox={megaSVG.viewBox} width='140'>
    <use xlinkHref={`#${megaSVG.id}`} />
  </svg>;


export default MegafonLogo;
