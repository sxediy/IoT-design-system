import React from 'react';
import MenuBar from 'components/menuBar';
import ResourcesTablePage from '../pages/pricing-table';

const Home = () => (
  <section className='gkh-container'>
    <aside className='menu-bar'>
      <MenuBar />
    </aside>
    <arcticle className='gkh-componentst'>
      <ResourcesTablePage/>
    </arcticle>
  </section>
);

export default Home;
