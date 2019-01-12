import React from 'react';
import confluenceSVG from 'icons/confluence-logo.svg';

const ConfluenceLogo = () =>
  <svg viewBox={confluenceSVG.viewBox} width='16'>
    <use xlinkHref={`#${confluenceSVG.id}`} />
  </svg>;


export default ConfluenceLogo;