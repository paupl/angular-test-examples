angular.module('testingApp', ['ngRoute']);

angular.module('testingApp')
	.config(moduleConfig);
	
moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

function moduleConfig($routeProvider, $locationProvider){
	
	console.log('set up routing');
	
	$routeProvider
		.when('/', {
			templateUrl: 'app/list/list.view.html',
			controller: 'listController',
			controllerAs: 'listController'
		}).when('/:id', {
			templateUrl: 'app/detail/detail.view.html',
			controller: 'detailController',
			controllerAs: 'detailController'				
		}).otherwise({
			redirectTo: '/'
		});	
		
	$locationProvider.html5Mode(true);
}