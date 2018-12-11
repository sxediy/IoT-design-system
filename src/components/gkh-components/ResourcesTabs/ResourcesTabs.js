import React, { PureComponent } from "react"
import * as resourceTypes from "services/resourceTypes"
import classnames, {bind} from 'classnames/bind'
import {withRouter} from "react-router"
import qs from "query-string"


const Tabs = ({containerStyle, tabsArr, tabKeyName, tabKeyClassName, active, onClickAppl, titleKeyName}) =>{
  return(
   <div style={ containerStyle } className='gkhTabs'>
    {
    tabsArr.map( typeObj => {
      return (
        <div 
          key={ typeObj[tabKeyName] } 
          className={classnames('tab ' + typeObj[tabKeyClassName], { active: active === typeObj[tabKeyName] })}  
          onClick={ onClickAppl(typeObj) }
        >
          <div className='icon' />
          <div className='text' >
            { typeObj[titleKeyName] }
          </div>
        </div>
      )
    })
    }
  </div>
  )
}

const ResourcesTabs = ({ style, resourceNames, active, onClick } ) => 
  <Tabs
    containerStyle={ style }
    titleKeyName="title"
    tabsArr={ resourceTypes.getAsArray(resourceNames) }
    tabKeyName="typeName"
    tabKeyClassName="eng"
    active={ active }
    onClickAppl={ (typeObj) => () => onClick(typeObj.typeName) }
  />



class SmartResourcesTabs extends PureComponent {
    constructor(props) {
        super(props)
        const urlVals = qs.parse(this.props.location.search)
        this.state = {
            active: urlVals.typeName || props.active || (props.resourceNames && props.resourceNames[1]) || resourceTypes.RESOURCE_TYPE_NAME_HOT_WATER,
            resourceNames: props.resourceNames,
            inited: false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.resourceNames !== prevState.resourceNames) {
            const urlVals = qs.parse(nextProps.location.search)
            const newState = {
                active: urlVals.typeName || nextProps.active || (nextProps.resourceNames && nextProps.resourceNames[1]),
                resourceNames: nextProps.resourceNames,
            }
            if (nextProps.onDataChanged) nextProps.onDataChanged(newState)
            return newState
        }
        return null
    }

    componentDidMount() {
        this.listenerCancelation = this.props.history.listen((location) => {
            const urlVals = qs.parse(location.search)
            
            if (Object.keys(urlVals).length > 0 && urlVals.typeName) {
                if (this.state.active !== urlVals.typeName) {
                    this.setState({active: urlVals.typeName, inited: true}, () => {
                        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
                    })
                }
            } else {
                if (this.state.inited) {
                    this.setState({active: this.props.active || (this.props.resourceNames && this.props.resourceNames[1]) || resourceTypes.RESOURCE_TYPE_NAME_HOT_WATER}, () => {
                        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
                    })
                }
            }
        })
        if (this.props.onMounted) this.props.onMounted(this.state)
    }

    componentWillUnmount() {
        this.listenerCancelation()
    }

    onClick = (typeName) => {
        this.props.history.push({
            search: qs.stringify({
                ...qs.parse(this.props.location.search),
                typeName: typeName,
            })
        })
    }

    render() {
        return <ResourcesTabs {...this.props} active={ this.state.active } resourceNames={ this.state.resourceNames } onClick={ this.onClick } />
    }
}

export {
    ResourcesTabs,
    Tabs,
}

export default withRouter(SmartResourcesTabs)