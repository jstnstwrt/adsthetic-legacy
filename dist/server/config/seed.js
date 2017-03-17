/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _apiInfluencerInfluencerModel = require('../api/influencer/influencer.model');

var _apiInfluencerInfluencerModel2 = _interopRequireDefault(_apiInfluencerInfluencerModel);

var _apiUserUserModel = require('../api/user/user.model');

var _apiUserUserModel2 = _interopRequireDefault(_apiUserUserModel);

var _apiListListModel = require('../api/list/list.model');

var _apiListListModel2 = _interopRequireDefault(_apiListListModel);

var _apiSublistSublistModel = require('../api/sublist/sublist.model');

var _apiSublistSublistModel2 = _interopRequireDefault(_apiSublistSublistModel);

_apiUserUserModel2['default'].find({}).removeAsync().then(function () {
  _apiUserUserModel2['default'].createAsync({
    provider: 'local',
    name: 'Justin Stewart',
    email: 'justin@adsthetic.com',
    password: '123'
  }).then(function () {
    _apiUserUserModel2['default'].findOne({ name: "Justin Stewart" }).exec().then(function (user) {
      var justinId = user._id;

      _apiInfluencerInfluencerModel2['default'].find({}).removeAsync().then(function () {
        _apiInfluencerInfluencerModel2['default'].createAsync({
          name: 'gisellepeppers',
          instagramId: '14114728',
          userId: justinId
        }, {
          name: 'streetetiquette',
          instagramId: '24758894',
          userId: justinId
        }, {
          name: 'jstnstwrt',
          instagramId: null,
          userId: justinId
        }, {
          name: 'william.jess.laird',
          instagramId: '2159866371',
          userId: justinId
        }, {
          name: 'girls.rules.innocent',
          instagramId: '1790818054',
          userId: justinId
        }, {
          name: 'bamm.girl.lauraaaa',
          instagramId: '1517116006',
          userId: justinId
        }).then(function () {
          _apiUserUserModel2['default'].findOne({ name: "Justin Stewart" }).exec().then(function (user) {
            var justinId = user._id;
            _apiListListModel2['default'].find({}).removeAsync().then(function () {
              _apiListListModel2['default'].createAsync({
                name: 'LA Photographers',
                description: 'Influencer photographers from LA',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              }, {
                name: 'New York Photographers',
                description: 'Influencer photographers from NYC',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              }, {
                name: 'Miami Photographers',
                description: 'Influencer photographers from Miami',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              }, {
                name: 'San Francisco Photographers',
                description: 'Influencer photographers from San Francisco',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              }, {
                name: 'Chicago Photographers',
                description: 'Influencer photographers from Chicago',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              }, {
                name: 'Seattle Photographers',
                description: 'Influencer photographers from Seattle',
                influencers: ['24758894', '2159866371', '1790818054', '1517116006'],
                userId: justinId
              });
              // .then(() => {
              //   var p1 = Promise.resolve(User.findOne({ name: "Kiran Chitraju" }).exec());
              //   var p2 = Promise.resolve(List.findOne({ name: "LA Photographers" }).exec());
              //   var p3 = Promise.resolve(List.findOne({ name: "New York Photographers" }).exec());
              //   Promise.all([p1, p2, p3]).then(values => {
              //     Sublist.find({}).removeAsync()
              //     .then(() => {
              //       Sublist.createAsync({
              //         name: 'OC Photographers',
              //         description: 'Influencer photographers from OC',
              //         influencers: ['24758894', '2159866371'],
              //         userId: values[0]._id,
              //         listId: values[1]._id
              //       }, {
              //         name: 'Downtown LA Photographers',
              //         description: 'Influencer photographers from Downtown LA',
              //         influencers: ['1790818054', '1517116006'],
              //         userId: values[0]._id,
              //         listId: values[1]._id
              //       },
              //       {
              //         name: 'Brooklyn Photographers',
              //         description: 'Influencer photographers from Brooklyn',
              //         influencers: ['24758894', '2159866371'],
              //         userId: values[0]._id,
              //         listId: values[2]._id
              //       }, {
              //         name: 'SOHO Photographers',
              //         description: 'Influencer photographers from SOHO',
              //         influencers: ['1790818054', '1517116006'],
              //         userId: values[0]._id,
              //         listId: values[2]._id
              //       });
              //     });
              //   });
              // });
            });
          });
        });
      });
    });
  });
});
//# sourceMappingURL=seed.js.map
