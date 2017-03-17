/**
 * Influencer model events
 */

'use strict';

import {EventEmitter} from 'events';
var Influencer = require('./influencer.model');
var InfluencerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
InfluencerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Influencer.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    InfluencerEvents.emit(event + ':' + doc._id, doc);
    InfluencerEvents.emit(event, doc);
  }
}

export default InfluencerEvents;
