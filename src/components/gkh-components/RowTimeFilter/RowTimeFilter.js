import React, { PureComponent } from 'react';
import { connect } from "dva"
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

@connect(({selectedDates}) => {
  // console.table([selectedDates.dateFrom,  selectedDates.dateTo])
  return ({ selectedDates })
})
export class RowTimeFilter extends PureComponent {

  onChange = (momentz) => {
    if (!momentz || momentz.length === 0) {
      return
    }
    const [dateFrom, dateTo] = momentz

    this.props.setDate(...momentz)()
    this.dispatchSelectedDates(dateFrom, dateTo)
  }

  today = moment()

  disabledDate = (current) => {
    return current > moment().endOf('day');
  }

  click = (dateFrom, dateTo) => () => {
    this.props.setDate(dateFrom, dateTo)()
    this.dispatchSelectedDates(dateFrom, dateTo)
  }
    
  dispatchSelectedDates = (dateFrom, dateTo) =>
    this.props.dispatch({
      type: 'selectedDates/saveSelectedDates',
      payload : {
        dateFrom: dateFrom.format(TimeService.getTimeLayout()),
        dateTo: dateTo.format(TimeService.getTimeLayout()),
      }
    })
  

  render() {
    const {isTSRV} = this.props
    const dateFrom = this.props.selectedDates.unMomentoFrom
    const dateTo = this.props.selectedDates.unMomentoTo
    // const {dateFrom, dateTo } = this.props
    console.log('dateFrom RowTimeFilter', dateFrom)
    const {click, today} = this
    return (
      <div className={styles.wrapper}>
        <div onClick={click(today.clone().subtract(7, 'd'), today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'd') === 7})}>
          Неделя
        </div>
        <div onClick={click(today.clone().subtract(1, 'months'), today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'months') === 1})}>
          Месяц
        </div>
        <div onClick={click(today.clone().subtract(3, 'months'), today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'months') === 3})}>
          Квартал
        </div>
        <div onClick={click(today.clone().subtract(1, 'y'), today)} className={cx('button', {'active': dateTo.diff(dateFrom, 'y') === 1})}>
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

@connect(({selectedDates}) => ({ selectedDates }))
class UrlBindedRowTimerFilter extends PureComponent {
  constructor(props) {
    super(props)
    const urlVals = qs.parse(this.props.location.search)
    const {dateFrom, dateTo } = this.props.selectedDates
    this.state = {
      dateFrom: urlVals.dateFrom ? moment(urlVals.dateFrom, timeFormat) : moment(dateFrom),
      dateTo: urlVals.dateFrom ? moment(urlVals.dateTo, timeFormat) : moment(dateFrom),
    }
  }

  componentDidMount() {
    this.listenerCancelation = this.props.history.listen((location) => {
      const { dateFrom:urlFrom, dateTo:urlTo} = qs.parse(location.search)
      const { dateFrom: dvaFrom, dateTo: dvaTo, datesString:dvaDatesString } = this.props.selectedDates
      const conditionOne = urlFrom && urlTo
      const conditionTwo = dvaDatesString !== ''
      if (conditionOne || conditionTwo) {
        const newState = {};
        const dateFrom = urlFrom || dvaFrom
        const dateTo = urlTo || dvaTo
        if (this.state.dateFrom.format(timeFormat) !== urlFrom) {
          newState.dateFrom = moment(dateFrom, timeFormat)
        }
        if (this.state.dateTo.format(timeFormat) !== urlTo) {
          newState.dateTo = moment(dateTo, timeFormat)
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