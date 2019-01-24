import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from 'components/gkh-components/CounterTabs/CounterTabs.less';


const CounterTabs = ({ counters, initActiveElement }) => {
  const [currentActive, setNewActive] = useState(initActiveElement);

  return (
    <div className={styles.gkhTabs}>
      {
        Object.keys(counters).map(key => {
          const counterData = counters[key];
          return (
            <div
              key={ key }
              className={
                classnames(styles.tab, styles[counterData.eng], { [styles.active]: currentActive === key })
              }
              onClick={ () => setNewActive(key) }
            >
              <div className={styles.icon} />
              Счетчик №{ key }
            </div>
          );
        })
      }
    </div>
  );
};

CounterTabs.propTypes = {
  counters: PropTypes.object,
  initActiveElement: PropTypes.string,
};


export { CounterTabs };
