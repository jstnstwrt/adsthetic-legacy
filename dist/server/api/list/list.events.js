/**
 * List model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var List = require('./list.model');
var ListEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
ListEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  List.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    ListEvents.emit(event + ':' + doc._id, doc);
    ListEvents.emit(event, doc);
  };
}

exports['default'] = ListEvents;
module.exports = exports['default'];
//# sourceMappingURL=list.events.js.map
