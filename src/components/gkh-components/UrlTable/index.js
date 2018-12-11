import React, { PureComponent } from "react"
import { Table } from "antd"
import * as resourceTypes from "services/resourceTypes"
import classnames, {bind} from 'classnames/bind'
import {withRouter} from "react-router"
import qs from "query-string"
import styles from "./Index.less"


export class UrlTableHelper {
    getState = (props) => {
        const urlVals = qs.parse(props.location.search)
        return {
            pageNum: parseInt(urlVals.pageNum) || props.pageNum || 1,
        }
    }

    onChange = (props, page, pageSize, aditional = {}) => {
        props.history.push({
            search: qs.stringify({
              ...qs.parse(props.location.search),
              ...aditional,
              pageNum: page,
            })
        })
    }
}


class UrlTable extends PureComponent {
    constructor(props) {
        super(props)
        const urlVals = qs.parse(this.props.location.search)
        this.state = {
            pageNum: parseInt(urlVals.pageNum) || props.pageNum || 1,
        }
    }

    componentDidMount() {
        this.listenerCancelation = this.props.history.listen((location) => {
            const urlVals = qs.parse(location.search)
            if (Object.keys(urlVals).length > 0 && urlVals.pageNum) {
                if (this.state.pageNum !== parseInt(urlVals.pageNum)) {
                    this.setState({pageNum: parseInt(urlVals.pageNum)}, () => {
                        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
                    })
                }
            } else {
                if (1 !== this.state.pageNum) {
                    this.setState({pageNum: 1}, () => {
                        if (this.props.onDataChanged) this.props.onDataChanged(this.state)
                    })
                }
            }
        })
        if (this.props.onMounted) this.props.onMounted(this.state)
        if (this.props.setOnChange) this.props.setOnChange(this.onChange)
    }

    componentWillUnmount() {
        this.listenerCancelation()
    }

    onChange = (page, pageSize) => {
        this.props.history.push({
            search: qs.stringify({
              ...qs.parse(this.props.location.search),
              pageNum: page,
            })
          })
    }

    render() {
        return <Table
            {...this.props}
            pagination={{
                ...this.props.pagination,
                onChange: this.onChange,
                current: this.state.pageNum,
                hideOnSinglePage: true,
            }}/>
    }
}

export default withRouter(UrlTable)