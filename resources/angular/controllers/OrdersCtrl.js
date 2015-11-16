vv.controller('OrdersCtrl', function($scope, $http, ordersList) {
	$scope.orders = ordersList.data;
});