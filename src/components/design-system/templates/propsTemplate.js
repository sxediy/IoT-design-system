import React from 'react';
import propsStyle from 'design-system/templates/propsStyle.less';
import { Table } from 'antd';

const columns = [{
  title: 'Prop name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Default',
  dataIndex: 'default',
  key: 'default',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}];

const propsTemplate = (props) => {
  const dataSource = Object.entries(props).map(
    (prop, i) => ({
      key: i,
      name: prop[0],
      type: prop[1].type,
      default: prop[1].default,
      description: prop[1].description,
    })
  );

  return (
    <div className={propsStyle.container}>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div >
  );
};

export default propsTemplate;
