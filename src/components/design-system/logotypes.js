import React from 'react';

import megaIoTSVG from 'icons/megafon_IoT_logo.svg';
import githubSVG from 'icons/github-logo.svg';
import confluenceSVG from 'icons/confluence-logo.svg';


export const MegaIoTLogo = () =>
  <svg viewBox={megaIoTSVG.viewBox} width='150'>
    <use xlinkHref={`#${megaIoTSVG.id}`} />
  </svg>;

export const ConfluenceLogo = () =>
  <svg viewBox={confluenceSVG.viewBox} width='16'>
    <use xlinkHref={`#${confluenceSVG.id}`} />
  </svg>;

export const GitHubLogo = () =>
  <svg viewBox={githubSVG.viewBox} width='16'>
    <use xlinkHref={`#${githubSVG.id}`} />
  </svg>;
