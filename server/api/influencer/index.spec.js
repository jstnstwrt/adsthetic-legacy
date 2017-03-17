'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var influencerCtrlStub = {
  index: 'influencerCtrl.index',
  show: 'influencerCtrl.show',
  create: 'influencerCtrl.create',
  update: 'influencerCtrl.update',
  destroy: 'influencerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var influencerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './influencer.controller': influencerCtrlStub
});

describe('influencer API Router:', function() {

  it('should return an express router instance', function() {
    influencerIndex.should.equal(routerStub);
  });

  describe('GET /api/influencers', function() {

    it('should route to influencer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'influencerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/influencers/:id', function() {

    it('should route to influencer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'influencerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/influencers', function() {

    it('should route to influencer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'influencerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/influencers/:id', function() {

    it('should route to influencer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'influencerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/influencers/:id', function() {

    it('should route to influencer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'influencerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/influencers/:id', function() {

    it('should route to influencer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'influencerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
