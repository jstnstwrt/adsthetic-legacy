'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var InfluencerSchema = new mongoose.Schema({
  name: String,
  instagramId: String,
  active: Boolean,
  userId: String
});

export default mongoose.model('Influencer', InfluencerSchema);
