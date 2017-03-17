/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/influencers              ->  index
 * POST    /api/influencers              ->  create
 * GET     /api/influencers/:id          ->  show
 * PUT     /api/influencers/:id          ->  update
 * DELETE  /api/influencers/:id          ->  destroy
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.index = index;
exports.indexbycurrentuser = indexbycurrentuser;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _influencerModel = require('./influencer.model');

var _influencerModel2 = _interopRequireDefault(_influencerModel);

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2['default'].merge(entity, updates);
    return updated.saveAsync().spread(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.removeAsync().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Influencers

function index(req, res) {
  _influencerModel2['default'].findAsync().then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a list of Influencers By the CurrentUser

function indexbycurrentuser(req, res) {
  _influencerModel2['default'].find({ userId: req.params.currentuserid }).then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a single Influencer from the DB

function show(req, res) {
  _influencerModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(respondWithResult(res))['catch'](handleError(res));
}

// Creates a new Influencer in the DB

function create(req, res) {
  _influencerModel2['default'].createAsync(req.body).then(respondWithResult(res, 201))['catch'](handleError(res));
}

// Updates an existing Influencer in the DB

function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  _influencerModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res))['catch'](handleError(res));
}

// Deletes a Influencer from the DB

function destroy(req, res) {
  _influencerModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(removeEntity(res))['catch'](handleError(res));
}
//# sourceMappingURL=influencer.controller.js.map
