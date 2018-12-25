import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuBar from 'components/menuBar';
import UIContainer from 'components/UIContainer';
import styles from './home.less';

const Home = ({ activeKey }) => {
  console.log('KEY в HOME ', activeKey);
  return (
    <section className={styles.home}>
      <aside className={styles.menuBar}>
        <MenuBar />
      </aside>
      <arcticle className={styles.UIContainer}>
        {UIContainer(activeKey)}
      </arcticle>
    </section>
  );
};

Home.propTypes = {
  activeKey: PropTypes.string,
};


const mapStateToProps = ({ activeUIContainer: { activeKey } }) => ({ activeKey });


export default connect(mapStateToProps)(Home);
