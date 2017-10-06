(function() {
	'use strict';

	angular.module('ShoppingList', []).controller('ToBuyController',
			ToBuyController).controller('BoughtController', BoughtController)
			.service('ShoppingService', ShoppingService);

	ToBuyController.$inject = [ 'ShoppingService' ];
	function ToBuyController(ShoppingService) {
		var vm = this;
		vm.getToBuyItems = ShoppingService.getToBuyItems();
		vm.buy = function(index){
			ShoppingService.removeItem(index);
			
		}


	}

	BoughtController.$inject = [ 'ShoppingService' ];
	function BoughtController(ShoppingService) {
		var vm = this;
		vm.getBoughtItems = ShoppingService.getBoughtItems();

	}

	// ShoppingService.$inject = ['$scope'];
	function ShoppingService() {
		var service = this;
		var toBuy = [];
		var bought = [];
		service.getToBuyItems = function() {
			toBuy.push({qty:10, text:'cookies'});
			toBuy.push({qty:8, text:'chocoloate'});
			toBuy.push({qty:7, text:'candy'});
			toBuy.push({qty:10, text:'donuts'});
			toBuy.push({qty:11, text:'apple'});
			return toBuy;
		}

		service.getBoughtItems = function(){
			return bought;
		};
		service.removeItem = function(index){
			bought.push(toBuy[index]);
			toBuy.splice(index,1);
		};
		
	}

})();
