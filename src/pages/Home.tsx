import React from 'react';
import { Card } from 'antd';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Card title="Home" className="home-card">
        <p>Welcome to the homepage!</p>
      </Card>
    </div>
  );
};

export default Home;
