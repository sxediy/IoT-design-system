import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuBar from 'components/menuBar';
import UIContainer from 'components/UIContainer';
import styles from './home.less';

const Home = ({ activeNameOfComponent }) => {
  console.log('KEY в HOME ', activeNameOfComponent);
  return (
    <section className={styles.home}>
      <aside className={styles.menuBar}>
        <MenuBar />
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
