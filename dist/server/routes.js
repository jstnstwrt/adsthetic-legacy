/**
 * Main application routes
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _componentsErrors = require('./components/errors');

var _componentsErrors2 = _interopRequireDefault(_componentsErrors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

exports['default'] = function (app) {
  // Insert routes below
  app.use('/api/influencers', require('./api/influencer'));
  app.use('/api/lists', require('./api/list'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/sublists', require('./api/sublist'));
  app.use('/auth', require('./auth'));

  app.post('/api/adstheticserver/fetchinfluencerdetails', function (req, res) {
    var requestobject = { "instagram_id": req.body[0] };
    _request2['default'].post({
      url: 'http://adstheticapi.com/influencer_detail',
      body: requestobject,
      json: true
    }, function (error, response, body) {
      res.json(response.body);
      if (!error && response.statusCode == 200) {
        console.log(response.body);
      }
    });
  });

  app.post('/api/adstheticserver/fetchinstagramusers', function (req, res) {
    var requestobject = { "instagram_id": req.body };
    _request2['default'].post({
      url: 'http://adstheticapi.com/influencer_basics',
      body: requestobject,
      json: true
    }, function (error, response, body) {
      res.json(response.body);
      if (!error && response.statusCode == 200) {
        console.log(response.body);
      }
    });
  });

  app.post('/api/adstheticserver/fetchinstagramids', function (req, res) {
    var requestobject = { "instagram_handle": req.body };
    _request2['default'].post({
      url: 'http://adstheticapi.com/influencer_ids',
      body: requestobject,
      json: true
    }, function (error, response, body) {
      res.json(response.body);
      if (!error && response.statusCode == 200) {
        console.log(response.body);
      }
    });
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(_componentsErrors2['default'][404]);

  // All other routes should redirect to the index.html
  app.route('/*').get(function (req, res) {
    res.sendFile(_path2['default'].resolve(app.get('appPath') + '/index.html'));
  });
};

module.exports = exports['default'];
//# sourceMappingURL=routes.js.map
