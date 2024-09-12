import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logo.svg'; // 假设 logo 图片文件在 src 目录下

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.js</code> 并保存以重新加载。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          学习 React
        </a>
      </header>
      <button className="login-button" onClick={handleLoginClick}>登录</button>
    </div>
  );
}

export default App;
