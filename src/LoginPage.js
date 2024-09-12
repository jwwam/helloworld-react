import React from 'react';
import './LoginPage.css'; // 引入新的 CSS 文件

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>登录</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">用户名:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="login-button">登录</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
