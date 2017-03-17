'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sublistCtrlStub = {
  index: 'sublistCtrl.index',
  show: 'sublistCtrl.show',
  create: 'sublistCtrl.create',
  update: 'sublistCtrl.update',
  destroy: 'sublistCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sublistIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './sublist.controller': sublistCtrlStub
});

describe('sublist API Router:', function() {

  it('should return an express router instance', function() {
    sublistIndex.should.equal(routerStub);
  });

  describe('GET /api/sublists', function() {

    it('should route to sublist.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sublistCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/sublists/:id', function() {

    it('should route to sublist.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sublistCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/sublists', function() {

    it('should route to sublist.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sublistCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/sublists/:id', function() {

    it('should route to sublist.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'sublistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/sublists/:id', function() {

    it('should route to sublist.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'sublistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/sublists/:id', function() {

    it('should route to sublist.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sublistCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
