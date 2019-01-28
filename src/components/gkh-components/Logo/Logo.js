import React from 'react';
import downloadSVG from 'icons/download_32.svg';
import counterSVG from 'icons/Counter.svg';
import megaSVG from 'icons/Mega-logotype.svg';
import alertSVG from 'icons/alert_green.svg';
import profileSVG from 'icons/profile.svg';
import { resources } from 'components/gkh-components/Logo/fakeData';


export const DownloadLogo = (
  <svg
    viewBox={downloadSVG.viewBox}
    width={21}
    height={21} >
    <use xlinkHref={`#${downloadSVG.id}`} />
  </svg>
);

export const CounterLogo = (resource = 'Холодная вода') => (
  <svg
    viewBox={counterSVG.viewBox}
    width={35}
    height={35}
    color={resources[resource].color}
    style={{ marginRight: 10 }}>
    <use xlinkHref={`#${counterSVG.id}`} />
  </svg>
);


export const MegaLogo = () =>
  <svg viewBox={megaSVG.viewBox} >
    <use xlinkHref={`#${megaSVG.id}`} />
  </svg>;

export const BellLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={alertSVG.viewBox} >
    <use xlinkHref={`#${alertSVG.id}`} />
  </svg>;

export const ProfileLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={profileSVG.viewBox} >
    <use xlinkHref={`#${profileSVG.id}`} />
  </svg>;
