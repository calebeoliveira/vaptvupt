vv.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise(function($injector, $location) {
		var $state = $injector.get('$state');
		$state.go('sell');
	});

	$stateProvider
	.state('sell', {
		url: '/sell',
		templateUrl: '/views/sell.html',
		controller: 'SellCtrl'
	})

	.state('orders', {
		url: '/orders',
		templateUrl: '/views/orders.html',
		controller: 'OrdersCtrl'
	})

	.state('menu', {
		url: '/menu',
		templateUrl: '/views/menu.html',
		controller: 'MenuCtrl'
	});
});