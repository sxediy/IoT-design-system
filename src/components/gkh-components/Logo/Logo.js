import React from 'react';
import download from 'icons/download_32.svg';
import counter from 'icons/Counter.svg';
import mega from 'icons/Mega-logotype.svg';
import alert from 'icons/alert_green.svg';
import { resources } from 'components/gkh-components/Logo/fakeData';


export const DownloadLogo = (
  <svg
    viewBox={download.viewBox}
    width={21}
    height={21} >
    <use xlinkHref={`#${download.id}`} />
  </svg>
);

export const CounterLogo = (resource = 'Холодная вода') => (
  <svg
    viewBox={counter.viewBox}
    width={35}
    height={35}
    color={resources[resource].color}
    style={{ marginRight: 10 }}>
    <use xlinkHref={`#${counter.id}`} />
  </svg>
);


export const MegaLogoType = () =>
  <svg viewBox={mega.viewBox} >
    <use xlinkHref={`#${mega.id}`} />
  </svg>;

export const BellLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={alert.viewBox} >
    <use xlinkHref={`#${alert.id}`} />
  </svg>;
