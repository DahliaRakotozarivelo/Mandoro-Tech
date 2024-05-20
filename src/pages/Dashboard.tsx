import React from 'react';
import { Card } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Card title="Dashboard" className="dashboard-card">
        <p>Welcome to your dashboard!</p>
      </Card>
    </div>
  );
};

export default Dashboard;
