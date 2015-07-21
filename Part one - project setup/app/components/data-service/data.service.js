angular.module('testingApp')
	.service('data', dataService);

dataService.$inject = ['$q'];

function dataService($q){
	
	var deferred = $q.defer();
	
	var data = [
		{
			id: 0,
			name: 'first item',
			summary: 'A summary of the first item'
		},{
			id: 1,
			name: 'second item',
			summary: 'A summary of the second item'
		},{
			id: 2,
			name: 'third item',
			summary: 'A summary of the third item'
		},{
			id: 3,
			name: 'fourth item',
			summary: 'A summary of the foruth item'
		},{
			id: 4,
			name: 'fifth item',
			summary: 'A summary of the fifth item'
		},{
			id: 5,
			name: 'sixth item',
			summary: 'A summary of the sixth item'
		}
	];
	
	var service = {
		getData: function(){
			deferred.resolve(data);
			return deferred.promise;
		}
	};
	
	return service;
}	