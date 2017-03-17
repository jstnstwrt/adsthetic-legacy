'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SublistSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  influencers: Array,
  userId: String,
  listId: String
});

export default mongoose.model('Sublist', SublistSchema);
