describe('A Controller', function(){
	
	describe('Basic controller tests', function(){
		
		beforeEach(module('testing-app'));
		
		beforeEach(inject(function($rootScope, _$location_, $controller){
			
			scope = $rootScope.$new();
			$location = _$location_;

			$controller('testController', {
				$scope: scope,
				$location: $location
			});
			
			scope.$digest();
						
		}));
		
		it('Should start with a value of 10', function(){
			
			expect(scope.defaultValue).toEqual(10);
			
		});
		
		it('Should add to the default value', function(){
			
			expect(scope.defaultValue).toEqual(10);
			
			scope.addToValue(10)
			
			expect(scope.defaultValue).toEqual(20);

			scope.addToValue(10)
			
			expect(scope.defaultValue).toEqual(30);
						
		})
	});
	
	describe('Tests with a mock service', function(){
		
		var mockService, scope;
		
		beforeEach(function(){
			
			//Create the mock service object
			mockService = {};
			
			//Make it into a provider
			module('testing-app', function($provide){
				$provide.value('restService', mockService);
			});
			
			//Inject the $q promise library into the service
			inject(function($q){
				
				//Create mock data
				mockService.data = [
					{
						_id: 1,
						name: 'first test item'
					},{
						_id: 2,
						name: 'second test item'
					},{
						_id: 3,
						name: 'third test item'
					}
				];
				
				//Create a mock getAll method
				mockService.getAll = function(){
					
					var defer = $q.defer();
					
					defer.resolve(this.data);
					
					return defer.promise;
					
				};
				
				//Create a mock create method
				mockService.create = function(name){
					
					var defer = $q.defer();
					
					var id = this.data.length + 1;
					
					var newItem = {
						id: id,
						name: name
					};
					
					this.data.push(newItem);
					
					defer.resolve(newItem);
					
					return defer.promise;
					
				};
				
			});
			
		});	
		
		//Inject the service into the controller, and the contoller into the tests
		beforeEach(inject(function ($controller, $rootScope, _$location_, _restService_){
			
			scope = $rootScope.$new();
			$location = _$location_;
			restService = _restService_;
			
			$controller('testServiceController', {
				$scope: scope,
				$location: $location,
				restService: restService
			});
			
			scope.$digest();
			
		}));
		
		it('Should get an array of service data on start up', function(){
					
			expect(scope.data).toEqual([
				{
					_id: 1,
					name: 'first test item'
				},{
					_id: 2,
					name: 'second test item'
				},{
					_id: 3,
					name: 'third test item'
				}
			]);
	
		});

		it('Should add a new item to the data', function(){
			
			var newItemText = "new item text";
			
			scope.createNew(newItemText);
			
			var lastItem = scope.data[scope.data.length - 1];
			
			expect(lastItem.name).toBe(newItemText);
			

		});		
				
	});

	
});