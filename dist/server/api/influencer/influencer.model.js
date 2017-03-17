'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var InfluencerSchema = new mongoose.Schema({
  name: String,
  instagramId: String,
  active: Boolean,
  userId: String
});

exports['default'] = mongoose.model('Influencer', InfluencerSchema);
module.exports = exports['default'];
//# sourceMappingURL=influencer.model.js.map
