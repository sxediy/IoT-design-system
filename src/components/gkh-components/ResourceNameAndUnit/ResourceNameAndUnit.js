import React, { PureComponent } from "react"
import * as resourceTypes from "services/resourceTypes"
import classnames from 'classnames/bind'
import styles from "./ResourceNameAndUnit.less"
import PropTypes from 'prop-types';

// const cx = bind(styles)

const ResourceNameAndUnit = (props) =>
    (
      <div style={props.style} className={styles.gkhTabs}>
        {
        resourceTypes.getAsArray(props.resourceTypes).map( typeObj => {
            return (
              <div key={typeObj.typeName} className={classnames(styles.tab, styles[typeObj.eng])} >
                <div className={styles.icon} />
                <div className={styles.text} >
                  { `${typeObj.title}, ${typeObj.unit}` }
                </div>
              </div>
            )
        })
        }
      </div>
    )

ResourceNameAndUnit.propTypes = {
  resourceTypes: PropTypes.array,
}

export default ResourceNameAndUnit