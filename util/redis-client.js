const redis = require('redis');
const config = require('../config');
const redisClient= redis.createClient(config.redis);
const logger = require('log4js').getLogger('showjoy');

redisClient.on('error', function (err) {
  logger.error('redis error event - ' + config.redis.host + ':' + 
    config.redis.port + ' - ' + err);
});

exports = module.exports = redisClient;

