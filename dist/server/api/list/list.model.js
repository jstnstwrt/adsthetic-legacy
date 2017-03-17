'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ListSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  influencers: Array,
  userId: String
});

exports['default'] = mongoose.model('List', ListSchema);
module.exports = exports['default'];
//# sourceMappingURL=list.model.js.map
