import React from 'react';
import * as resourceTypes from "services/resourceTypes"
import { sortAscFn } from 'utils/sorts'
import styles from './PricingTable.less'
import classnames from 'classnames/bind'

const { tableResources, active, button, containerTableResources } = styles


export const Cards = ({ pricingData, changeActiveColumn, activeResourceType }) => {
  const keys = pricingData ?  Object.keys(pricingData).sort(sortAscFn) : undefined
  const getCard = ({typeName, eng, title, unit }) => {
    const word = (typeName === activeResourceType) ? 'Выбрано' : 'Выбрать'
    const premises = pricingData ? pricingData[typeName].premises : '-'
    //  const volume = pricingData ? pricingData[typeName].volume: '-'
    const difference = pricingData ? pricingData[typeName].difference : '-'

      return (
      <div 
        key={eng}
        className={classnames(tableResources, styles[eng], {[active]:typeName === activeResourceType})}
        onClick={ () => changeActiveColumn(typeName) }
      >  
        <div><span> {`${title}`}<br />{`(${unit})`}</span></div> 
        <div><span>{premises}</span></div>
        {/* <div><span>{volume}</span></div> */}
        <div><span>{difference}</span></div>
        <div>
          <div className={classnames(styles[eng], button, {[active]:typeName === activeResourceType})}>
            <span>{word}</span>
          </div>
        </div>
      </div>
      )
  }

    return (
      <div className={ classnames(containerTableResources) }>
        { resourceTypes.getAsArray(keys).map( resourceData  => getCard(resourceData)) }
      </div>
    )
}