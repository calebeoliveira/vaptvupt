vv.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise(function($injector, $location) {
		var $state = $injector.get('$state');
		$state.go('sell');
	});

	$stateProvider
	.state('sell', {
		url: '/sell',
		templateUrl: '/views/sell.html',
		controller: 'SellCtrl',
		resolve: {
			menuEntryList: function($http) {
				return $http.get('/api/menu/entries');
			}
		}
	})

	.state('orders', {
		url: '/orders',
		templateUrl: '/views/orders.html',
		controller: 'OrdersCtrl',
		resolve: {
			ordersList: function($http) {
				return $http.get('/api/orders');
			}
		}
	})

	.state('menu', {
		url: '/menu',
		templateUrl: '/views/menu.html',
		controller: 'MenuCtrl',
		resolve: {
			menuEntryList: function($http) {
				return $http.get('/api/menu/entries');
			}
		}
	});
});