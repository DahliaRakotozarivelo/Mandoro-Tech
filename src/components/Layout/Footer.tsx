import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className="footer">
      <p>© 2024 Mandoro Tech. All rights reserved.</p>
    </AntFooter>
  );
};

export default Footer;
