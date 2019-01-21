import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuBar from 'components/menuBar';
import MegafonLogo from 'logos/megafonLogo';
import GitHubLogo from 'logos/githubLogo';
import ConfluenceLogo from 'logos/confluenceLogo';
import UIContainer from 'components/UIContainer';
import styles from './home.less';

const Home = ({ activeNameOfComponent }) => {
  console.log('KEY в HOME ', activeNameOfComponent);
  return (
    <section className={styles.home}>
      <aside className={styles.aside}>
        <div className={styles.megafonLogo}>
          <MegafonLogo />
        </div>
        <div className={styles.menuBar}>
          <MenuBar />
        </div>
        <div className={styles.asidefooter}>
          <a href="https://github.com/" target="blank"><GitHubLogo /></a>
          <a href="https://www.atlassian.com/software/confluence" target="blank"><ConfluenceLogo /></a>
        </div>
      </aside>
      <arcticle className={styles.UIContainer}>
        {UIContainer(activeNameOfComponent)}
      </arcticle>
    </section>
  );
};

Home.propTypes = {
  activeNameOfComponent: PropTypes.string,
};


const mapStateToProps = (
  { activeUIContainer: { activeNameOfComponent } }
) =>
  ({ activeNameOfComponent });


export default connect(mapStateToProps)(Home);
