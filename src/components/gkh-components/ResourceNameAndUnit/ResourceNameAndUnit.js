import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from 'components/gkh-components/ResourceNameAndUnit/ResourceNameAndUnit.less';


const ResourceNameAndUnit = ({ resourcesValues }) =>
  (
    <div className={styles.gkhTabs}>
      {
        resourcesValues.map(typeObj =>
          (
            <div key={typeObj.typeName} className={classnames(styles.tab, styles[typeObj.eng])} >
              <div className={styles.icon} />
              <div >
                { `${typeObj.title}, ${typeObj.unit}` }
              </div>
            </div>
          )
        )
      }
    </div>
  );


ResourceNameAndUnit.propTypes = {
  resourcesValues: PropTypes.array,
};

export { ResourceNameAndUnit };
