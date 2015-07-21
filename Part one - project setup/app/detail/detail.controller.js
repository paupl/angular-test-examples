angular.module('testingApp')
	.controller('detailController', detailController);

detailController.$inject = ['$scope'];

function detailController($scope){
	
	var vm = this;
	
	vm.item = {
		name: 'this is the item'
	};
	
}