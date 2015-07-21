angular.module('testing-app')
	.controller('testDirective', testDirective);
	
testDirective.$inject = [];

function testDirective(){
	
	var directive = {
		scope: {},
		link: linker,
		controller: controller
		
	};
	
	return directive;
	
	
	function linker(){
		
	}
	
	function controller(){
		
	}
}