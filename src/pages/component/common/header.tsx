import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { NavLink } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: <NavLink to={`/page${key}`}>{`page ${key}`}</NavLink>,
}));

export default function MyHeader() {
  return (
    <Header className="header">
      <div className="logo" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
  );
}
