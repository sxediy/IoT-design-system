import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './ResourceTabs.less';


const ResourceTabs = ({
  tabsArr,
  active,
  onClick,
}) =>
  <div className={styles.gkhTabs}>
    {
      tabsArr.map(tab =>
        <div
          key={ tab.typeName }
          className={classnames(styles.tab, styles[tab.eng], { [styles.active]: active === tab.typeName })}
          onClick={ onClick }
        >
          <div className={styles.icon} />
          <div>
            { tab.title }
          </div>
        </div>
      )
    }
  </div>;

ResourceTabs.propTypes = {
  tabsArr: PropTypes.array,
  active: PropTypes.string,
  onClick: PropTypes.func,
};

export { ResourceTabs };
