import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import { DatePicker } from 'antd';
import moment from 'moment';

import styles from 'components/gkh-components/RowTimeFilter/RowTimeFilter.less';

const cx = classnamesBind.bind(styles);
const { RangePicker } = DatePicker;

export class RowTimeFilter extends PureComponent {
  onChange = (momentz) => {
    if (!momentz || momentz.length === 0) {
      return;
    }
    this.props.setDate(...momentz)();
  }

  today = moment()

  disabledDate = (current) => current > moment().endOf('day');

  render() {
    const {
      dateFrom,
      dateTo,
      setDate,
      isTSRV
    } = this.props;

    return (
      <div className={styles.wrapper}>
        {
          !isTSRV && (
            <div onClick={setDate(this.today, this.today)}
              className={cx('button', { active: dateFrom.isSame(this.today, 'd') })}>
            Сегодня
            </div>
          )
        }
        <div onClick={setDate(this.today.clone().subtract(7, 'd'), this.today) }
          className={cx('button', { active: dateTo.diff(dateFrom, 'd') === 7 })}>
          Неделя
        </div>
        <div onClick={setDate(this.today.clone().subtract(1, 'months'), this.today)}
          className={cx('button', { active: dateTo.diff(dateFrom, 'months') === 1 })}>
          Месяц
        </div>
        <div onClick={setDate(this.today.clone().subtract(3, 'months'), this.today)}
          className={cx('button', { active: dateTo.diff(dateFrom, 'months') === 3 })}>
          Квартал
        </div>
        <div onClick={setDate(this.today.clone().subtract(1, 'y'), this.today)}
          className={cx('button', { active: dateTo.diff(dateFrom, 'y') === 1 })}>
          Год
        </div>
        <div className={`${styles.button} ${styles.datepickerWr}` }>
          <RangePicker
            format={moment().format('DD.MM.YYYY')}
            disabledDate={this.disabledDate}
            value={[dateFrom, dateTo]}
            onChange={this.onChange}
            style={{ border: 'none' }} />
        </div>
      </div>
    );
  }
}

RowTimeFilter.propTypes = {
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  setDate: PropTypes.func,
  isTSRV: PropTypes.bool,
};
