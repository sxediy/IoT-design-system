import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import { DatePicker } from 'antd';
import styles from 'components/gkh-components/RowTimeFilter/RowTimeFilter.less';

const cx = classnamesBind.bind(styles);
const { RangePicker } = DatePicker;

const RowTimeFilter = ({
  initialDateFrom,
  initialDateTo,
  today,
  disabledDate,
  isTSRV,
}) => {
  const [currentFrom, setNewFrom] = useState(initialDateFrom);
  const [currentTo, setNewTo] = useState(initialDateTo);

  const setNewDates = (newFrom, newTo) => () => {
    setNewFrom(newFrom);
    setNewTo(newTo);
  };

  const onChange = (momentz) => {
    if (!momentz || momentz.length === 0) return;
    setNewDates(...momentz)();
  };

  return (
    <div className={styles.wrapper}>
      {
        !isTSRV && (
          <div onClick={setNewDates(today, today)}
            className={cx('button', { active: currentFrom.isSame(today, 'd') })}>
          Сегодня
          </div>
        )
      }
      <div onClick={setNewDates(today.clone().subtract(7, 'd'), today) }
        className={cx('button', { active: currentTo.diff(currentFrom, 'd') === 7 })}>
        Неделя
      </div>
      <div onClick={setNewDates(today.clone().subtract(1, 'months'), today)}
        className={cx('button', { active: currentTo.diff(currentFrom, 'months') === 1 })}>
        Месяц
      </div>
      <div onClick={setNewDates(today.clone().subtract(3, 'months'), today)}
        className={cx('button', { active: currentTo.diff(currentFrom, 'months') === 3 })}>
        Квартал
      </div>
      <div onClick={setNewDates(today.clone().subtract(1, 'y'), today)}
        className={cx('button', { active: currentTo.diff(currentFrom, 'y') === 1 })}>
        Год
      </div>
      <div className={`${styles.button} ${styles.datepickerWr}` }>
        <RangePicker
          format={'DD.MM.YYYY'}
          disabledDate={disabledDate}
          value={[currentFrom, currentTo]}
          onChange={onChange}
          style={{ border: 'none' }} />

      </div>
    </div>
  );
};


RowTimeFilter.propTypes = {
  initialDateFrom: PropTypes.object,
  initialDateTo: PropTypes.object,
  today: PropTypes.object,
  disabledDate: PropTypes.func,
  isTSRV: PropTypes.bool,
};

export { RowTimeFilter };

