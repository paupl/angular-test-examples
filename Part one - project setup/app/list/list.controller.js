angular.module('testingApp')
	.controller('listController', listController);

listController.$inject = ['data'];

function listController(data){
	
	var vm = this;
	
	data.getData()
		.then(function(result){
			vm.items = result;
		});
	
}