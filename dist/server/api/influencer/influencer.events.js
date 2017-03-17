/**
 * Influencer model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Influencer = require('./influencer.model');
var InfluencerEvents = new _events.EventEmitter();

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
  return function (doc) {
    InfluencerEvents.emit(event + ':' + doc._id, doc);
    InfluencerEvents.emit(event, doc);
  };
}

exports['default'] = InfluencerEvents;
module.exports = exports['default'];
//# sourceMappingURL=influencer.events.js.map
