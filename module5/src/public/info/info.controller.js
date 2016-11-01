(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['$localStorage'];
function InfoController($localStorage, ApiPath) {
  var $ctrl = this;
  $ctrl.user = $localStorage.user;
  $ctrl.basePath
 };
})();
