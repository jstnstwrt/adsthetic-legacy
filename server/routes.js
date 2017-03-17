/**
 * Main application routes
 */

 'use strict';

 import errors from './components/errors';
 import path from 'path';
 import request from 'request';

 export default function(app) {
  // Insert routes below
  app.use('/api/influencers', require('./api/influencer'));
  app.use('/api/lists', require('./api/list'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/sublists', require('./api/sublist'));
  app.use('/auth', require('./auth'));

  app.post('/api/adstheticserver/fetchinfluencerdetails', function (req, res) {
    var requestobject = {"instagram_id": req.body[0] };
    request.post({
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
    var requestobject = {"instagram_id": req.body };
    request.post({
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
    var requestobject = {"instagram_handle": req.body };
    request.post({
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
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });
}
