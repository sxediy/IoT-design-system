import moment from 'moment';

const today = moment();
const initialDateFrom = moment().subtract(7, 'd');
const initialDateTo = moment();

const disabledDate = (current) => current > today.endOf('day');
const isTSRV = false;

export { initialDateFrom, initialDateTo, today, disabledDate, isTSRV };
