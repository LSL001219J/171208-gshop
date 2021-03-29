/*
	包含n个接口请求函数的模块
	函数的返回值：promise
*/
import ajax from './ajax'

//1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
//2.获取食物分类列表
export const reqFoodTypes = () => ajax(`/index_category`)
//3.根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {longitude, latitude})
//4.账号密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { 
	name, 
	pwd, 
	captcha 
}, 'POST')
//5.获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//6.手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//7.获取用户信息(根据会话)
export const reqUser = () => ajax('/api/userinfo')
//8.请求登出
export const reqLogout = () => ajax('/api/logout')

