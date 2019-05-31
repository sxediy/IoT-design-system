import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuBar from 'components/menuBar';
import { MegaIoTLogo, GitHubLogo, ConfluenceLogo } from 'components/logotypes';
import UIContainer from 'components/UIContainer';
import styles from './home.less';

const Home = ({ activeNameOfComponent }) => (
  <section className={styles.home}>
    <aside className={styles.aside}>
      <div className={styles.megafonLogo}>
        <MegaIoTLogo />
      </div>
      <div className={styles.menuBar}>
        <MenuBar
          activeNameOfComponent={activeNameOfComponent}
        />
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

Home.propTypes = {
  activeNameOfComponent: PropTypes.string,
};


const mapStateToProps = (
  { activeUIContainer: { activeNameOfComponent } }
) => ({ activeNameOfComponent });


export default connect(mapStateToProps)(Home);
