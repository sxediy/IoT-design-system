import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FilteringSelect } from 'components/gkh-components/FilteringSelect/FilteringSelect';
import { YesLogo, NoLogo } from 'components/gkh-components/Logo/Logo';
import styles from './SearchBar.less';


const SearchBar = ({
  displayProp,
  initialKeyFirst,
  initiaKeySecond,
  initialKeyThird,
  firstList,
  secondList,
  thirdList,
  firstPlaceholder,
  secondPlaceholder,
  thirdPlaceholder,
  width,
}) => {
  const [currentKeyFirst, setKeyFirst] = useState(initialKeyFirst);
  const [currentKeySecond, setKeySecond] = useState(initiaKeySecond);
  const [currentKeyThird, setKeyThird] = useState(initialKeyThird);

  const [filterSecondList, setFilterSecond] = useState(secondList);
  const [filterThirdList, setFilterThird] = useState(thirdList);

  const onChangeFirst = (eventTrager) => {
    setKeyFirst(eventTrager);
    setKeySecond(undefined);
    setKeyThird(undefined);
    setFilterSecond(secondList[eventTrager]);
  };

  const onChangeSecond = (eventTrager) => {
    setKeySecond(eventTrager);
    setKeyThird(undefined);
    setFilterThird(thirdList[eventTrager]);
  };

  return (
    <Fragment>
      <div
        className={styles.container}
      >
        <div className={styles.item}>
          <FilteringSelect
            list={firstList}
            displayProp={displayProp}
            selected={currentKeyFirst}
            placeholder={firstPlaceholder}
            onChange={onChangeFirst}
            width={width}
          />
        </div>
        <div className={styles.item}>
          <span>{currentKeyFirst ? <YesLogo/> : <NoLogo/>}</span>
        </div>
        <div className={styles.item}>
          <FilteringSelect
            list={filterSecondList}
            displayProp={displayProp}
            disabled={!currentKeyFirst}
            selected={currentKeySecond}
            placeholder={secondPlaceholder}
            onChange={onChangeSecond}
            width={width}
          />
        </div>
        <div className={styles.item}>
          <span>{currentKeySecond ? <YesLogo/> : <NoLogo/>}</span>
        </div>
        <div className={styles.item}>
          <FilteringSelect
            list={filterThirdList}
            displayProp={displayProp}
            disabled={!currentKeySecond}
            selected={currentKeyThird}
            placeholder={thirdPlaceholder}
            onChange={(eventTrager) => setKeyThird(eventTrager)}
            width={width}
          />
        </div>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {
  displayProp: PropTypes.string,
  initialKeyFirst: PropTypes.string,
  initiaKeySecond: PropTypes.string,
  initialKeyThird: PropTypes.string,
  firstList: PropTypes.object,
  secondList: PropTypes.object,
  thirdList: PropTypes.object,
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  thirdPlaceholder: PropTypes.string,
  width: PropTypes.string,
};

export { SearchBar };
