/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

 'use strict';
 import Influencer from '../api/influencer/influencer.model';
 import User from '../api/user/user.model';
 import List from '../api/list/list.model';
 import Sublist from '../api/sublist/sublist.model';

 User.find({}).removeAsync()
 .then(() => {
  User.createAsync({
    provider: 'local',
    name: 'Justin Stewart',
    email: 'justin@adsthetic.com',
    password: '123'
  })
  .then(() => {
    User.findOne({ name: "Justin Stewart" }).exec()
    .then(function (user) {
      var justinId = user._id;

      Influencer.find({}).removeAsync()
      .then(() => {
        Influencer.createAsync({
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
        })
        .then(() => {
          User.findOne({ name: "Justin Stewart" }).exec()
          .then(function (user) {
            var justinId = user._id;
            List.find({}).removeAsync()
            .then(() => {
              List.createAsync({
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
              })
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
