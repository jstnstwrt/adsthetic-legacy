'use strict';

var app = require('../..');
import request from 'supertest';

var newInfluencer;

describe('Influencer API:', function() {

  describe('GET /api/influencers', function() {
    var influencers;

    beforeEach(function(done) {
      request(app)
        .get('/api/influencers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          influencers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      influencers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/influencers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/influencers')
        .send({
          name: 'New Influencer',
          instagramId: 'This is the brand new influencer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newInfluencer = res.body;
          done();
        });
    });

    it('should respond with the newly created influencer', function() {
      newInfluencer.name.should.equal('New Influencer');
      newInfluencer.instagramId.should.equal('This is the brand new influencer!!!');
    });

  });

  describe('GET /api/influencers/:id', function() {
    var influencer;

    beforeEach(function(done) {
      request(app)
        .get('/api/influencers/' + newInfluencer._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          influencer = res.body;
          done();
        });
    });

    afterEach(function() {
      influencer = {};
    });

    it('should respond with the requested influencer', function() {
      influencer.name.should.equal('New Influencer');
      influencer.instagramId.should.equal('This is the brand new influencer!!!');
    });

  });

  describe('PUT /api/influencers/:id', function() {
    var updatedInfluencer;

    beforeEach(function(done) {
      request(app)
        .put('/api/influencers/' + newInfluencer._id)
        .send({
          name: 'Updated Influencer',
          instagramId: 'This is the updated influencer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedInfluencer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInfluencer = {};
    });

    it('should respond with the updated influencer', function() {
      updatedInfluencer.name.should.equal('Updated Influencer');
      updatedInfluencer.instagramId.should.equal('This is the updated influencer!!!');
    });

  });

  describe('DELETE /api/influencers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/influencers/' + newInfluencer._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when influencer does not exist', function(done) {
      request(app)
        .delete('/api/influencers/' + newInfluencer._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
