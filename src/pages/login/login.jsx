import React, { Component } from 'react';
import './login.less';
import Logo from './images/logo.png';
import { Form, Input, Button } from "antd";
class Login extends Component {
  // state = {}
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="logo" />
          <h1>React project：后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <div className="login-form">
            <Form name="dynamic_rule">
              <Form.Item
                name="username"
              >
                <Input placeholder="Please input your name" />
              </Form.Item>
              <Form.Item
                name="nickname"
              >
                <Input placeholder="Please input your nickname" />
              </Form.Item>
              <Form.Item >
                <Button type="primary">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div >)
      ;
  }
}

export default Login;