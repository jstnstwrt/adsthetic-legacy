'use strict';

class LoginController {
  constructor(Auth, $http, $state) {
    this.user = {id:'0'};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    $http.get('/api/users/me').then(function(response){
      if (response.data == null){
        this.user = {id:null};
        return
      }

      if (response.data._id == null){
        this.user = {id:null};
        return
      }

      //console.log('RESONSE: '+JSON.stringify(response.data))
      window.location.href = '/dashboard'
    });
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        // this.$state.go('dashboard');
        window.location.href = '/'
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('adstheticCmsApp')
  .controller('LoginController', LoginController);
