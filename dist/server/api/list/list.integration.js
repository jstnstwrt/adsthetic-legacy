'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newList;

describe('List API:', function () {

  describe('GET /api/lists', function () {
    var lists;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/lists').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        lists = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      lists.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/lists', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/lists').send({
        name: 'New List',
        instagramId: 'This is the brand new list!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newList = res.body;
        done();
      });
    });

    it('should respond with the newly created list', function () {
      newList.name.should.equal('New List');
      newList.instagramId.should.equal('This is the brand new list!!!');
    });
  });

  describe('GET /api/lists/:id', function () {
    var list;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/lists/' + newList._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        list = res.body;
        done();
      });
    });

    afterEach(function () {
      list = {};
    });

    it('should respond with the requested list', function () {
      list.name.should.equal('New List');
      list.instagramId.should.equal('This is the brand new list!!!');
    });
  });

  describe('PUT /api/lists/:id', function () {
    var updatedList;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/lists/' + newList._id).send({
        name: 'Updated List',
        instagramId: 'This is the updated list!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedList = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedList = {};
    });

    it('should respond with the updated list', function () {
      updatedList.name.should.equal('Updated List');
      updatedList.instagramId.should.equal('This is the updated list!!!');
    });
  });

  describe('DELETE /api/lists/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/lists/' + newList._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when list does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/lists/' + newList._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=list.integration.js.map
