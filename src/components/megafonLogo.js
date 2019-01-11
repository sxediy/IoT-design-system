import React from 'react';
import megaSVG from 'assets/icons/megafon_IoT_logo.svg';

const MegafonLogo = () =>
  <svg viewBox={megaSVG.viewBox} width='150'>
    <use xlinkHref={`#${megaSVG.id}`} />
  </svg>;


export default MegafonLogo;
