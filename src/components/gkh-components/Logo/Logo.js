import download from "icons/download_32.svg";
import counter from "icons/Counter.svg";
import mega from "icons/Mega-logotype.svg";

import * as resourceTypes from "services/resourceTypes"

export const DownloadLogo = (
    <svg  viewBox={download.viewBox} width={21}  height={21} >
      <use xlinkHref={`#${download.id}`} />
    </svg>
  ) 

export const  CounterLogo = (resource = 'Холодная вода') => (
    <svg viewBox={counter.viewBox} width={35} height={35} color={resourceTypes.getColorByType(resource)} style={{marginRight:10}}>
      <use xlinkHref={`#${counter.id}`} />
    </svg>
)

// export const megaLogoType = (
//   <svg  viewBox={mega.viewBox} >
//     <use xlinkHref={`#${mega.id}`} />
//   </svg>
// )

