(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

// 'item' is injected through state's resolve
CategoryItemsController.$inject = ['items']
function CategoryItemsController(items) {
  var categoryItems = this;
  categoryItems.items = items;
}

})();
