import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import makeUIContainer from 'services/makeUIContainer';


const { TabPane } = Tabs;

const UIContainer = (activeNameOfComponent) => {
  const [title, leftSide, rightSide] = makeUIContainer(activeNameOfComponent);
  return (
    <Fragment>
      {title}
      <Tabs defaultActiveKey="left">
        <TabPane tab="Визуальное представление и код" key="left">{leftSide}</TabPane>
        <TabPane tab="Свойства и методы" key="right">{rightSide}</TabPane>
      </Tabs>
    </Fragment>
  );
};

export default UIContainer;

