/* 
    封装接口请求函数模块
*/

import ajax from './ajax';
import { message } from 'antd'
import jsonp from 'jsonp';

export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST');
export const reqWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
        // 发送jsonp请求
        jsonp(url, {}, (error, data) => {
            // 如果成功了
            if (!error && data.status === 'success') {
                // 取出需要的数据
                const { dayPictureUrl, weather } = data.results[0].weather_data[0];
                resolve({ dayPictureUrl, weather })
            } else {
                // 如果失败了
                message.error('获取天气信息失败!')
            }
        })
    })

};