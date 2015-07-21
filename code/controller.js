angular.module('testing-app')
	.controller('testController', testController)
	.controller('testServiceController', testServiceController);
	
testController.$inject = ['$scope', '$location'];
testServiceController.$inject = ['$scope', '$location', 'restService'];

function testController($scope, $location){
	
	var vm = this;
	
	$scope.defaultValue = 10;
	
	$scope.addToValue = function(amount){
		$scope.defaultValue += amount;
	};
	
}

function testServiceController($scope, $location, restService){
	
	var vm = this;
	
	$scope.getAll = function(){
		restService.getAll()
			.then(function(result){
				
				$scope.data = result;
				
			});
	};
	
	$scope.createNew = function(newName){
		
		restService.create(newName)
			.then(function(result){
				$scope.data.push(result);
			});
			
	};
	
	$scope.getAll();
	
}