/*
jsonwebtoken中间件, 自定义jwt中间件
*/
const jwt = require('jsonwebtoken');
exports.JWT = function(options) {
  const secret = options && options.secret || '!showjoy@shop#test';
  const expiresIn = options && options.expiresIn || '7d';
  return async function(ctx, next){
    //jwt生成
    ctx.jwtSign = async function(userInfo) {
      //基于用户基本信息生成（用户名基本信息）
      return jwt.sign(
        { 
          userInfo
        }, 
        secret,
        { 
          expiresIn
        }
      );
    }
    //jwt验证，通过返回用户及接口权限信息
    ctx.jwtVerify = async function(token) {
      return jwt.verify(token, secret);
    }
    await next();
  }
}