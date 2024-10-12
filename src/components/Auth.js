import React, { useState } from 'react';
import '../style/Auth.css';

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Fixed credentials
    const validEmail = 'admin';
    const validPassword = 'admin';

    if (email === validEmail && password === validPassword) {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
};

export default Auth;
