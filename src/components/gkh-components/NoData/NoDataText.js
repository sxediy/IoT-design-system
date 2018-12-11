import styles from './NoDataText.less'

const makeNoData = text => specify => () => (
  <h3 className={styles[specify]} >
    {text}
  </h3>
)

const NoWhole =  makeNoData('Нет данных за выбранный период.')
const NoSelectedFilter =  makeNoData('Выберите тип фильтра из выпадающего списка')


export const NoDataTextWithBorder = NoWhole('withBorder') 
export const NoDataTextWitoutBorder = NoWhole('withoutBorder') 
// export const NoDataTextPricingTable = NoWhole('pricingTable')
export const NoSelectedFilterWithBorder = NoSelectedFilter('withBorder') 

