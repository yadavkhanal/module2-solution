(function() {
	'use strict';

	angular.module('ShoppingList', []).controller('ToBuyController',
			ToBuyController)
			.controller('BoughtController', BoughtController)
			.service('ShoppingService',ShoppingService);

	ToBuyController.$inject = [ '$scope', 'ShoppingService' ];
	function ToBuyController($scope, ShoppingService) {
		var vm = this;
		
	}
	
	BoughtController.$inject = ['$scope',"ShoppingService"];
	function BoughtController($scope, ShoopingService){
		var vm = this;
	}
	
	ShoppingService.$inject = ['$scope'];
	function ShoppingService($scope){
		var service = this;
		
	}

})();
