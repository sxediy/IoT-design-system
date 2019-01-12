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
      tabsArr.map(typeObj =>
        <div
          key={ typeObj.typeName }
          className={classnames(styles.tab, styles[typeObj.eng], { [styles.active]: active === typeObj.typeName })}
          onClick={ onClick }
        >
          <div className={styles.icon} />
          <div>
            { typeObj.title }
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
