import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import { DatePicker } from 'antd';
import styles from 'components/gkh-components/RowTimeFilter/RowTimeFilter.less';

const cx = classnamesBind.bind(styles);
const { RangePicker } = DatePicker;

const RowTimeFilter = ({
  isTSRV,
  setDate,
  dateFrom,
  dateTo,
  today,
  disabledDate,
  onChange,
}) => (
  <div className={styles.wrapper}>
    {
      !isTSRV && (
        <div onClick={setDate(today, today)}
          className={cx('button', { active: dateFrom.isSame(today, 'd') })}>
        Сегодня
        </div>
      )
    }
    <div onClick={setDate(today.clone().subtract(7, 'd'), today) }
      className={cx('button', { active: dateTo.diff(dateFrom, 'd') === 7 })}>
      Неделя
    </div>
    <div onClick={setDate(today.clone().subtract(1, 'months'), today)}
      className={cx('button', { active: dateTo.diff(dateFrom, 'months') === 1 })}>
      Месяц
    </div>
    <div onClick={setDate(today.clone().subtract(3, 'months'), today)}
      className={cx('button', { active: dateTo.diff(dateFrom, 'months') === 3 })}>
      Квартал
    </div>
    <div onClick={setDate(today.clone().subtract(1, 'y'), today)}
      className={cx('button', { active: dateTo.diff(dateFrom, 'y') === 1 })}>
      Год
    </div>
    <div className={`${styles.button} ${styles.datepickerWr}` }>
      <RangePicker
        format={'DD.MM.YYYY'}
        disabledDate={disabledDate}
        value={[dateFrom, dateTo]}
        onChange={onChange}
        style={{ border: 'none' }} />
    </div>
  </div>
);


RowTimeFilter.propTypes = {
  dateFrom: PropTypes.object,
  dateTo: PropTypes.object,
  today: PropTypes.object,
  disabledDate: PropTypes.func,
  isTSRV: PropTypes.bool,
  setDate: PropTypes.func,
  onChange: PropTypes.func,
};

export { RowTimeFilter };

