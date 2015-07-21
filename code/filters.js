angular.module('testing-app')
	.controller('testFilter', testFilter);
	
testFilter.$inject = [];

function testFilter(){
	
	return function filter(items, value){
		
		return items;
		
	}
	
}