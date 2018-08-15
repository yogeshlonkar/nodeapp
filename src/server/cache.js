const NodeCache = require('node-cache');

module.exports = {
  users: new NodeCache(),
  books: new NodeCache()
};
