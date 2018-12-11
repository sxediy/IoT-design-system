import React, {Fragment} from 'react';  
import { Header } from './Header.js'
import { Cards } from './Cards.js'

export const PricingTable = ({ pricingData, changeActiveColumn, activeResourceType }) => {
  return (
     <Fragment>
       <Header/>
       <Cards
         pricingData={pricingData}
         changeActiveColumn={changeActiveColumn}
         activeResourceType={activeResourceType}
       />
     </Fragment>
      )
    }
