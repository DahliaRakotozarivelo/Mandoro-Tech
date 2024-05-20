import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Menu mode="vertical">
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
    </div>
  );
};

export default Sidebar;
