import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { resourcesValArray } from 'components/gkh-components/PricingTable/fakeData';

import styles from 'components/gkh-components/PricingTable/PricingTable.less';

const {
  tableResources,
  active,
  button,
  containerCards
} = styles;

export const Cards = ({ pricingData, initActiveElement, changeActiveColumn }) => {
  const getCard = ({
    typeName, eng, title, unit
  }) => {
    const word = (typeName === initActiveElement) ? 'Выбрано' : 'Выбрать';
    const premises = pricingData ? pricingData[typeName].premises : '-';
    const difference = pricingData ? pricingData[typeName].difference : '-';

    return (
      <div
        key={eng}
        className={classnames(tableResources, styles[eng], { [active]: typeName === initActiveElement })}
        onClick={ () => changeActiveColumn(typeName) }
      >
        <div><span> {`${title}`}<br />{`(${unit})`}</span></div>
        <div><span>{premises}</span></div>
        {/* <div><span>{volume}</span></div> */}
        <div><span>{difference}</span></div>
        <div>
          <div className={classnames(styles[eng], button, { [active]: typeName === initActiveElement })}>
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
    <div className={ containerCards }>
      { resourcesValArray.map(resourceData => getCard(resourceData)) }
    </div>
  );
};

Cards.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  initActiveElement: PropTypes.string,
};
