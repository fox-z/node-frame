/*
请求返回
*/
const moment = require('moment');

exports = module.exports;
//未登录
exports.NOTLOGIN = function (ctx) {
  ctx.body = {
    code: 100,
    message: '未登录'
  }
}
//无权限
exports.HASNOACCESS = function (ctx) {
  ctx.body = {
    code: 101,
    message: '无权限'
  }
}
//参数不对
exports.PARAMSINVALID = function (ctx, msg) {
  ctx.body = {
    code: 102,
    message: msg
  }
}
//请求处理失败
exports.HANDLEFAILED = function (ctx, msg) {
  ctx.body = {
    code: 103,
    message: msg
  }
}
//系统错误， 捕获到异常情况
exports.SYSTEMERR = function (ctx) {
  ctx.body = {
    code: 104,
    message: '系统错误，请稍后重试'
  }
}
//导出表格
exports.SUCCESSEXPORT = function (ctx, filename, excel) {
  ctx.set('Content-Type', 'application/vnd.openxmlformats');
  ctx.set('Content-Disposition', 'attachment; filename=' +  
    encodeURI(filename + moment().format('YYYYMMDD-HH:mm:ss')) +'.xlsx');
  ctx.body = new Buffer(excel, 'binary');
}
//请求处理成功
exports.SUCCESS = function (ctx, data = [], pageCount = 1, pageCurrent = 1, count = 1,
  isRedirect = 0, redirect = '', login = 0) {
  if(!data) {
    data = [];
  }
  ctx.body = {
    code: 1,
    message: 'success',
    data: data,
    pageCount: parseInt(pageCount),
    pageCurrent: parseInt(pageCurrent),
    count: parseInt(count),
    isRedirect: isRedirect,
    redirect: redirect,
    login: login
  }
}
exports.SUCCESSTOKEN = function (ctx, token, data) {
  let cookieOption = {
    path: '/',
    domain: ctx.header.hostname,
    httpOnly: true
  }
  ctx.cookies.set('token', token, cookieOption);
  ctx.body = {
    code: 1,
    message: 'success',
    data: data || ''
  }
}
