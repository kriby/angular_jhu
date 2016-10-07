(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = ['$http'];

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  };

  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        if(!searchTerm) {
          return [];
        };
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var name = result.data.menu_items[i].name;
          if (name.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }
        // return processed items
        if(!foundItems.length) {
          return [];
        }
        return foundItems;
      });
    };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;

    list.getMatchedMenuItems = function(searchTerm) {
      list.error = '';
      list.found = [];
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(foundItems) {
        if(foundItems.length > 0) {
          list.found = foundItems;
        } else {
          list.error = 'Nothing found';
        }
      });
    };

    list.removeItem = function (itemIndex) {
        list.found.splice(itemIndex, 1);
    };
  };
})();
