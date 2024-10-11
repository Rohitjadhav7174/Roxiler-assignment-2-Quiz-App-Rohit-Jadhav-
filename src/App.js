import React, { useState } from 'react';
import Auth from './components/Auth';
import Quiz from './components/logic';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? <Auth onLogin={handleLogin} /> : <Quiz />}
    </div>
  );
};

export default App;
