import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FilteringSelect } from 'components/gkh-components/FilteringSelect/FilteringSelect';
import { YesLogo, NoLogo } from 'components/gkh-components/Logo/Logo';
import styles from './SearchBar.less';


const SearchBar = ({
  displayProp,
  initialFirst,
  initiaSecond,
  initialThird,
  firstList,
  secondList,
  thirdList,
  firstPlaceholder,
  secondPlaceholder,
  thirdPlaceholder,
}) => {
  const [currentFirstSelected, setFirst] = useState(initialFirst);
  const [currentSecondSelected, setSecond] = useState(initiaSecond);
  const [currentThirdSelected, setThird] = useState(initialThird);
  return (
    <Fragment>
      <div
        className={styles.container}
      >
        <div>
          <FilteringSelect
            initialSelected={initialFirst}
            list={firstList}
            displayProp={displayProp}
            selected={currentFirstSelected}
            placeholder={firstPlaceholder}
            onChange={(eventTrager) => setFirst(eventTrager)}
          />
        </div>
        <div>
          <span>{currentFirstSelected ? <YesLogo/> : <NoLogo/>}</span>
        </div>
        <div >
          <FilteringSelect
            initialSelected={initiaSecond}
            list={secondList}
            displayProp={displayProp}
            disabled={!currentFirstSelected}
            selected={currentSecondSelected}
            placeholder={secondPlaceholder}
            onChange={(eventTrager) => setSecond(eventTrager)}
          />
        </div>
        <div>
          <span>{currentSecondSelected ? <YesLogo/> : <NoLogo/>}</span>
        </div>
        <div >
          <FilteringSelect
            initialSelected={initialThird}
            list={thirdList}
            placeholder={thirdPlaceholder}
            displayProp={displayProp}
            disabled={!currentSecondSelected}
            selected={currentThirdSelected}
            onChange={(eventTrager) => setThird(eventTrager)}
          />
        </div>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {
  displayProp: PropTypes.string,
  initialFirst: PropTypes.string,
  initiaSecond: PropTypes.string,
  initialThird: PropTypes.string,
  firstList: PropTypes.object,
  secondList: PropTypes.object,
  thirdList: PropTypes.object,
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  thirdPlaceholder: PropTypes.string,

};

export { SearchBar };
