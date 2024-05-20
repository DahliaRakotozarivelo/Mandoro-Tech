import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';

import './styles/layouts/Sidebar.css';
import './styles/layouts/Header.css';
import './styles/layouts/Footer.css';
import './styles/pages/Dashboard.css';
import './styles/pages/Home.css';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Header />
          <Sidebar />
          <Layout style={{ marginLeft: 220 }}>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
