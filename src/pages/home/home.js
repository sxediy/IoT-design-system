import React from 'react';
import MenuBar from 'components/menuBar';
import makeUIContainer from 'services/makeUIContainer';
import styles from './home.less';

// ToDo
// при нажатии на менюбар обработчик записывает ключ в стор ридакса, а
// компонента Home его подхватывает и вызывает функцию makeUIContainer с активным ключом
// import key from 'store/menuBar';

const Home = () => (
  <section className={styles.gkhContainer}>
    <aside className={styles.menuBar}>
      <MenuBar />
    </aside>
    <arcticle className={styles.UIContainer}>
      {/* { makeUIContainer('pricingTable')[0]} */}
      { makeUIContainer('pricingTable')}
    </arcticle>
  </section>
);

export default Home;
