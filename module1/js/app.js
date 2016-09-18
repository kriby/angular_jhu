(function () {
    'use strict';

    angular.module('App', [])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];
    function AppController($scope) {
        $scope.message = '';

        $scope.check = function () {
            if(!$scope.items) {
                $scope.message = 'Please enter data first';
                return;
            }
            var itemsArray = $scope.items.split(',');
            if(itemsArray.length > 3) {
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        };
        $scope.showMessage = function () {
            return $scope.message;
        }
    }

})();