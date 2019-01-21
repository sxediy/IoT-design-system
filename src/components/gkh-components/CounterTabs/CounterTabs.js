import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from 'components/gkh-components/CounterTabs/CounterTabs.less';


const CounterTabs = ({
  counters,
  activeKey,
  setActiveCounterNum,
}) =>
  (
    <div className={styles.gkhTabs}>
      {
        Object.keys(counters).map(key => {
          const counterData = counters[key];
          return (
            <div
              key={ key }
              className={
                classnames(styles.tab, styles[counterData.eng], { [styles.active]: activeKey === key })
              }
              onClick={ () => setActiveCounterNum(key) }
            >
              <div className={styles.icon} />
              Счетчик №{ key }
            </div>
          );
        })
      }
    </div>
  );

CounterTabs.propTypes = {
  counters: PropTypes.object,
  activeKey: PropTypes.object,
  setActiveCounterNum: PropTypes.object,
};


export { CounterTabs };
