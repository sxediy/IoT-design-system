import moment from 'moment';

const today = moment();
const initialDateFrom = today.subtract(7, 'd');
const initialDateTo = today;

const disabledDate = (current) => current > today.endOf('day');
const isTSRV = false;

export { initialDateFrom, initialDateTo, today, disabledDate, isTSRV };
