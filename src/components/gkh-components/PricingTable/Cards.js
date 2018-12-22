import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './PricingTable.less';
import { resourcesValArray } from './data';

const {
  tableResources,
  active,
  button,
  containerTableResources
} = styles;

export const Cards = ({ pricingData, changeActiveColumn, activeResourceType }) => {
  const getCard = ({
    typeName, eng, title, unit
  }) => {
    const word = (typeName === activeResourceType) ? 'Выбрано' : 'Выбрать';
    const premises = pricingData ? pricingData[typeName].premises : '-';
    const difference = pricingData ? pricingData[typeName].difference : '-';

    console.log('@@@ styles', styles);
    return (
      <div
        key={eng}
        className={classnames(tableResources, styles[eng], { [active]: typeName === activeResourceType })}
        onClick={ () => changeActiveColumn(typeName) }
      >
        <div><span> {`${title}`}<br />{`(${unit})`}</span></div>
        <div><span>{premises}</span></div>
        {/* <div><span>{volume}</span></div> */}
        <div><span>{difference}</span></div>
        <div>
          <div className={classnames(styles[eng], button, { [active]: typeName === activeResourceType })}>
            <span>{word}</span>
          </div>
        </div>
      </div>
    );
  };

  getCard.propTypes = {
    typeName: PropTypes.string,
    eng: PropTypes.string,
    title: PropTypes.string,
    unit: PropTypes.string,
  };

  return (
    <div className={ containerTableResources }>
      { resourcesValArray.map(resourceData => getCard(resourceData)) }
    </div>
  );
};

Cards.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};
