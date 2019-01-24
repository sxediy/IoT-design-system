import moment from 'moment';

const initialDateFrom = moment().subtract(7, 'd');
const initialDateTo = moment();
const isTSRV = false;

export { initialDateFrom, initialDateTo, isTSRV };
