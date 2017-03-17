'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ListSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  influencers: Array,
  userId: String
});

export default mongoose.model('List', ListSchema);
