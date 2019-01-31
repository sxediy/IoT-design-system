import React from 'react';
import downloadSVG from 'icons/download_32.svg';
import megaSVG from 'icons/Mega-logotype.svg';

import objectsSVG from 'icons/objects.svg';
import reportsSVG from 'icons/reports.svg';
import usersSVG from 'icons/users.svg';
import USPDSVG from 'icons/USPD.svg';

import alertSVG from 'icons/alert_green.svg';
import profileSVG from 'icons/profile.svg';


export const DownloadLogo = () =>
  <svg viewBox={downloadSVG.viewBox} width={21} height={21} >
    <use xlinkHref={`#${downloadSVG.id}`} />
  </svg>;

export const MegaLogo = () =>
  <svg viewBox={megaSVG.viewBox} width={200} >
    <use xlinkHref={`#${megaSVG.id}`} />
  </svg>;

export const ObjectsLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={objectsSVG.viewBox} >
    <use xlinkHref={`#${objectsSVG.id}`} />
  </svg>;

export const ReportsLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={reportsSVG.viewBox} >
    <use xlinkHref={`#${reportsSVG.id}`} />
  </svg>;

export const UsersLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={usersSVG.viewBox} >
    <use xlinkHref={`#${usersSVG.id}`} />
  </svg>;

export const USPDLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={USPDSVG.viewBox} >
    <use xlinkHref={`#${USPDSVG.id}`} />
  </svg>;

export const BellLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={alertSVG.viewBox} >
    <use xlinkHref={`#${alertSVG.id}`} />
  </svg>;

export const ProfileLogo = () =>
  <svg width='21' height='25' fill='currentColor' viewBox={profileSVG.viewBox} >
    <use xlinkHref={`#${profileSVG.id}`} />
  </svg>;

