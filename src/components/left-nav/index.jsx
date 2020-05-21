import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  ToolOutlined,
  UserOutlined,
  SafetyOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined
} from '@ant-design/icons';

//
import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
  getMenuNodes = (List) => {
    return List.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={this.getMenuIcon(item.icon)}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={this.getMenuIcon(item.icon)} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  getMenuIcon(iconName) {
    let component
    switch (iconName) {
      case 'HomeOutlined':
        component = <HomeOutlined />;
        break;
      case 'AppstoreOutlined':
        component = <AppstoreOutlined />;
        break;
      case 'UnorderedListOutlined':
        component = <UnorderedListOutlined />;
        break;
      case 'ToolOutlined':
        component = <ToolOutlined />;
        break;
      case 'UserOutlined':
        component = <UserOutlined />;
        break;
      case 'SafetyOutlined':
        component = <SafetyOutlined />;
        break;
      case 'AreaChartOutlined':
        component = <AreaChartOutlined />;
        break;
      case 'BarChartOutlined':
        component = <BarChartOutlined />;
        break;
      case 'LineChartOutlined':
        component = <LineChartOutlined />;
        break;
      case 'PieChartOutlined':
        component = <PieChartOutlined />;
        break;
      default:
        return null
    }
    return component
  }
  render() {
    let path = this.props.location.pathname;
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="header-logo" />
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
        >
          {this.getMenuNodes(menuList)}
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav);