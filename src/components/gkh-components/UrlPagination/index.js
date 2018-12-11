import React, { PureComponent } from "react"
import { Pagination } from "antd"
import * as resourceTypes from "services/resourceTypes"
import classnames, {bind} from 'classnames/bind'
import {withRouter} from "react-router"
import qs from "query-string"
import styles from "./Index.less"

class UrlPagination extends PureComponent {
    constructor(props) {
        super(props)
        const urlVals = qs.parse(this.props.location.search)
        this.state = {
            active: urlVals.pageNum || props.pageNum,
        }
    }

    componentDidMount() {
        this.listenerCancelation = this.props.history.listen((location) => {
            const urlVals = qs.parse(location.search)
            
            if (Object.keys(urlVals).length > 0 && urlVals.pageNum) {
                if (this.state.active !== urlVals.pageNum) {
                    this.setState({active: urlVals.pageNum}, () => {
                        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
                    })
                }
            }
        })
        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
    }

    componentWillUnmount() {
        this.listenerCancelation()
    }

    onChange = (page, pageSize) => {
        debugger
        this.props.history.push({
            search: qs.stringify({
              ...qs.parse(this.props.location.search),
              pageNum: page,
            })
          })
    }

    render() {
        return <Pagination {...this.props} onChange={ this.onChange } defaultPageSize={ 10 } current={ this.state.pageNum } />
    }
}

export default withRouter(UrlPagination)