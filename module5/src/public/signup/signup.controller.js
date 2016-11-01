(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', '$localStorage'];
function SignupController(MenuService, $localStorage) {
  var $ctrl = this;

  $ctrl.submit = function (short_name) {
    $ctrl.completed = true;
    $localStorage.user = $ctrl.user;
    MenuService.getMenuItem(short_name).then(function (found_item) {
      if(found_item.status == 200) {
               $localStorage.user.item_info = found_item.data;
               $ctrl.success = 'Your information has been saved.';
             } else {
               $ctrl.error = 'No such menu number exists.';
             }
    });
    }
 };

})();
