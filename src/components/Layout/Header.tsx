import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader className="header">
      <div className="logo">My App</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
