import React, { Component } from 'react';
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
import Logo from './images/logo.png';

class Login extends Component {
  onFinish = values => {
    console.log('Success', values);
  };
  onFinishFailed = errorInfo => {
    console.log('error', errorInfo);
  }
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
            <Form initialValues={{
              username: '',
              password: ''
            }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
              <Form.Item name="username" rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '用户名不能为空',
                },
                {
                  min: 4,
                  message: '用户名至少4位',
                },
                {
                  max: 12,
                  message: '用户名最多12位',
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '用户名必须是英文、数字或下划线组成'
                }
              ]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 4,
                  message: '密码至少4位',
                },
                {
                  max: 12,
                  message: '密码最多12位',
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '密码必须是英文、数字或下划线组成'
                }
              ]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                  placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
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