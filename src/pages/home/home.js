import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuBar from 'components/menuBar';
import makeUIContainer from 'services/makeUIContainer';
import styles from './home.less';

const Home = ({ activeKey }) => {
  console.log('KEY в HOME ', activeKey);
  return (
    <section className={styles.gkhContainer}>
      <aside className={styles.menuBar}>
        <MenuBar />
      </aside>
      <arcticle className={styles.UIContainer}>
        { makeUIContainer('pricingTable')[0]}
        {/* { makeUIContainer(activeKey)} */}
      </arcticle>
    </section>
  );
};

Home.propTypes = {
  activeKey: PropTypes.string,
};


const mapStateToProps = ({ activeUIContainer: { activeKey } }) => ({ activeKey });


export default connect(mapStateToProps)(Home);
