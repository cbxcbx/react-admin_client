/* 
    封装接口请求函数模块
*/

import ajax from './ajax';

export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST');