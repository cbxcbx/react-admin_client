import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { formateDate } from '../../utils/dateUtils';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import { reqWeather } from '../../api/index';
import './index.less';

class Header extends Component {
  state = {
    currentTime: formateDate(Date.now()), // 当前时间字符串
    dayPictureUrl: '', // 天气图片url
    weather: '', // 天气的文本
  }

  getCurrentTime = () => {
    // 每隔1s获取当前时间, 并更新状态数据currentTime
    this.intervalID = setInterval(() => {
      const currentTime = formateDate(Date.now());
      this.setState({ currentTime });
    }, 1000);

  }

  getWeather = async (city) => {
    // 调用接口请求异步获取数据
    const { dayPictureUrl, weather } = await reqWeather(city);
    // 更新状态
    this.setState({ dayPictureUrl, weather })
  }

  loginOut = () => {
    Modal.confirm({
      title: '确定退出吗?',
      onOk: () => {
        memoryUtils.user = {};
        storageUtils.removeUser();
        this.props.history.repalce('/login');
      },
    })
  }
  /*
 第一次render()之后执行一次
 一般在此执行异步操作: 发ajax请求/启动定时器
  */
  componentDidMount() {
    // 获取当前天气
    this.getCurrentTime();
    // 获取当前天气
    this.getWeather('宁波');
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    let { currentTime, dayPictureUrl, weather } = this.state;
    let user = memoryUtils.user.username;
    return (
      <div className="header">
        <div className="header-top">
          <span>Hello, {user}</span>
          <Button type="link" onClick={this.loginOut}>退出</Button>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <span>首页</span>
          </div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather" />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);