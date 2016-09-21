(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.items = ShoppingListCheckOffService.getItems();

        toBuyList.buy = function (itemIndex) {
          ShoppingListCheckOffService.addItemToBought(itemIndex);
          ShoppingListCheckOffService.removeItemFromToBuy(itemIndex);
        }
    }
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }
    function ShoppingListCheckOffService() {
      var service = this;

      var toBuy = [
        { name: "cookies", quantity: 10 },
        { name: "chocolate", quantity: 5 },
        { name: "Pepto Bismol", quantity: 20 },
        { name: "chips", quantity: 15 },
        { name: "noodles", quantity: 2 }
      ];

      var bought = [];

      service.getItems = function () {
        return toBuy;
      }

      service.getBoughtItems = function () {
        return bought;
      }

      service.addItemToBought= function (itemIndex) {
        bought.push(toBuy[itemIndex]);
      }
      service.removeItemFromToBuy= function (itemIndex) {
        toBuy.splice(itemIndex, 1);
      }
    }

})();
