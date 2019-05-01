const UserService = require('../service/user-service');
const Response = require('../common/response/response');


exports = module.exports;

//获取用户信息
exports.getUserInfo = async function(ctx, next) {
  ctx.logger.info('get user info request %s', JSON.stringify(ctx.query));
  let [account] = [];
  if(ctx.query) {
    ({account} = ctx.query);
  }
  if(!account) {
    ctx.logger.info('get user info less account');
    Response.PARAMSINVALID(ctx, '缺少参数account');
    return;
  }
  try {
    let userInfo = await UserService.getUserInfoByName(account);
    ctx.logger.info('get user info user %s', JSON.stringify(userInfo));
    if(!userInfo) {
      //用户不存在
      Response.HANDLEFAILED(ctx, '用户不存在');
      ctx.logger.info('get user info user not exists');
      return;
    }
    Response.SUCCESS(ctx, userInfo);
  } catch(err) {
    Response.SYSTEMERR(ctx, err);
    ctx.logger.error('get user info error %s', err.toString());
  }
}