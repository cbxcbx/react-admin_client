import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';
// admin 二级路由
import Home from '../home/home';
import Category from '../category/category';
import Product from '../product/product';
import User from '../user/user';
import Role from '../role/role';
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
// 页面布局
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;


class Admin extends Component {
  render() {
    const user = memoryUtils.user;

    if (!user || !user._id) {
      return <Redirect to="/login" />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider><LeftNav /></Sider>
        <Layout>
          <Header/>
          <Content style={{ backgroundColor: '#fff' }}>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path='/user' component={User}/>
              <Route path='/role' component={Role}/>
              <Route path="/charts/bar" component={Bar}/>
              <Route path="/charts/line" component={Line}/>
              <Route path="/charts/pie" component={Pie}/>
              <Redirect to='/home' />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;