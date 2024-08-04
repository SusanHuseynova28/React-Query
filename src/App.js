import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './featured/Header';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
