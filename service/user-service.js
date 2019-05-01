const logger = require('log4js').getLogger('showjoy');
const httpClient = require('../util/http-client');

const getUserInfoByNameUrl = 'http://api.showjoy.net/userservice/user/found';
const getUserInfoByIdUrl = 'http://api.showjoy.net/userservice/user/get';
exports = module.exports = new class {
  constructor() {
  }
  //通过name获取用户信息
  getUserInfoByName(userName) {
    let params = {
      currentUserName: userName + ''
    }
    return new Promise(function(resolve, reject) {
      httpClient.get(getUserInfoByNameUrl, params).then(function(res) {
        if(res && res.isSuccess === 1) { 
          resolve(res.data);
        } else {
          resolve(null);
        }
      }, function(err){
        reject(err);
      });
    })
  }
  //获取用户信息
  getUserInfoById(userId) {
    let params = {
      userId: userId + ''
    }
    return new Promise(function(resolve, reject) {
      httpClient.get(getUserInfoByIdUrl, params).then(function(res) {
        if(res && res.isSuccess === 1) { 
          resolve(res.data);
        } else {
          resolve(null);
        }
      }, function(err){
        reject(err);
      });
    })
  }
}


