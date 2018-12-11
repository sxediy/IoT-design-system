import React, { PureComponent } from "react"
import * as resourceTypes from "services/resourceTypes"

const TableColorHOC = (C) => {
    return class TableColor extends PureComponent {
      state = {
        activeResourceType: undefined,
        colorOfActiveSensor: undefined
      }
    
      setResourceType = ({active}) => {
        this.setState({
          activeResourceType: active,
          colorOfActiveSensor: resourceTypes.getColorByType(active),
        })
      }
  
      render() {
        return <C {...this.props} colorOfActiveSensor={ this.state.colorOfActiveSensor } activeResourceType={ this.state.activeResourceType } setResourceType={ this.setResourceType } />
      }
    }
}

export default TableColorHOC
