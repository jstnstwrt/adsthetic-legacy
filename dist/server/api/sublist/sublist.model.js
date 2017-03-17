'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SublistSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  influencers: Array,
  userId: String,
  listId: String
});

exports['default'] = mongoose.model('Sublist', SublistSchema);
module.exports = exports['default'];
//# sourceMappingURL=sublist.model.js.map
