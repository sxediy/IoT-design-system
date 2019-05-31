import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from 'components/gkh-components/ResourceTabs/ResourceTabs.less';


const ResourceTabs = ({ tabsArr, initActiveElement }) => {
  const [currentActive, setNewActive] = useState(initActiveElement);

  return (
    <div className={styles.gkhTabs}>
      {
        tabsArr.map(tab => (
          <div
            key={ tab.typeName }
            className={classnames(styles.tab, styles[tab.eng], { [styles.active]: currentActive === tab.typeName })}
            onClick={ () => setNewActive(tab.typeName) }
          >
            <div className={styles.icon} />
            <div>
              { tab.title }
            </div>
          </div>
        ))
      }
    </div>
  );
};

ResourceTabs.propTypes = {
  tabsArr: PropTypes.array,
  initActiveElement: PropTypes.string,
};

export { ResourceTabs };
