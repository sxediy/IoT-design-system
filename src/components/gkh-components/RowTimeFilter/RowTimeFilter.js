import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router"
import classnamesBind from 'classnames/bind'
import {DatePicker} from "antd"
import moment from "moment"
import TimeService from "services/timeService"
import qs from "query-string"

import styles from './RowTimeFilter.less';

const cx = classnamesBind.bind(styles)
const { RangePicker } = DatePicker
const timeFormat = TimeService.getTimeLayout()

export class RowTimeFilter extends PureComponent {

  onChange = (momentz) => {
    if (!momentz || momentz.length === 0) {
      return
    }
    this.props.setDate(...momentz)()
  }

  today = moment()

  disabledDate = (current) => {
    return current > moment().endOf('day');
  }

  render() {
    const {dateFrom, dateTo, setDate, isTSRV} = this.props
   //debugger

    return (
      <div className={styles.wrapper}>
        {
          !isTSRV && (
            <div onClick={setDate(this.today, this.today)} className={cx('button', {'active': dateFrom.isSame(this.today, 'd')})}>
            Сегодня
          </div>
          )
        }
        <div onClick={setDate(this.today.clone().subtract(7, 'd'), this.today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'd') === 7})}>
          Неделя
        </div>
        <div onClick={setDate(this.today.clone().subtract(1, 'months'), this.today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'months') === 1})}>
          Месяц
        </div>
        <div onClick={setDate(this.today.clone().subtract(3, 'months'), this.today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'months') === 3})}>
          Квартал
        </div>
        <div onClick={setDate(this.today.clone().subtract(1, 'y'), this.today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'y') === 1})}>
          Год
        </div>
        <div className={styles.button + " " + styles.datepickerWr}>
          <RangePicker format={TimeService.getUITimeFormat()} disabledDate={this.disabledDate} value={[dateFrom, dateTo]} onChange={this.onChange} style={{border: 'none'}} />
        </div>
      </div>
    )
  }
}


export class UrlRowTimerFilterHelper {
  getState = (props) => {
    const urlVals = qs.parse(props.location.search)
    return {
      dateFrom: urlVals.dateFrom ? moment(urlVals.dateFrom, timeFormat) : moment(new Date()),
      dateTo: urlVals.dateFrom ? moment(urlVals.dateTo, timeFormat) : moment(new Date()),
    }
  }

  onChange = (props, dateFrom, dateTo, aditional = {}) => {
    props.history.push({
      search: qs.stringify({
        ...qs.parse(props.location.search),
        ...aditional,
        dateFrom: dateFrom.format(timeFormat),
        dateTo: dateTo.format(timeFormat),
      }),
    })
  }
}


class UrlBindedRowTimerFilter extends PureComponent {
  constructor(props) {
    super(props)
    const urlVals = qs.parse(this.props.location.search)
    this.state = {
      dateFrom: urlVals.dateFrom ? moment(urlVals.dateFrom, timeFormat) : moment(new Date()),
      dateTo: urlVals.dateFrom ? moment(urlVals.dateTo, timeFormat) : moment(new Date()),
    }
  }

  componentDidMount() {
    this.listenerCancelation = this.props.history.listen((location) => {
      const urlVals = qs.parse(location.search)
      if (Object.keys(urlVals).length > 0 && urlVals.dateFrom && urlVals.dateTo) {
        const newState = {};
        if (this.state.dateFrom.format(timeFormat) !== urlVals.dateFrom) {
          newState.dateFrom = moment(urlVals.dateFrom, timeFormat)
        }
        if (this.state.dateTo.format(timeFormat) !== urlVals.dateTo) {
          newState.dateTo = moment(urlVals.dateTo, timeFormat)
        }
        if (Object.keys(newState).length > 0) this.setState(newState, () => {
          if (this.props.onDateChanged) this.props.onDateChanged(this.state)
        })
      }
    })
    if (this.props.onMounted) this.props.onMounted(this.state)
  }

  componentWillUnmount() {
    this.listenerCancelation()
  }

  setDate = (dateFrom, dateTo) => () => {
    this.props.history.push({
      search: qs.stringify({
        ...qs.parse(this.props.location.search),
        dateFrom: dateFrom.format(timeFormat),
        dateTo: dateTo.format(timeFormat)
      })
    })
  }

  render() {
    const { dateFrom, dateTo } = this.state
    return <RowTimeFilter setDate={ this.setDate } dateFrom={dateFrom} dateTo={dateTo} />
  }
}

export default withRouter(UrlBindedRowTimerFilter)