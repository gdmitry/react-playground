const argv = require('./argv');

module.exports = {
  port: parseInt(argv.port || process.env.PORT || '3000', 10),
  MONGO_URL: 'mongodb://localhost:27017',
  dbName: 'sportlife',
};
