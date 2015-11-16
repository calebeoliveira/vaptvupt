vv.controller('SellCtrl', function($scope, $http, menuEntryList) {
	$scope.amount = 0;
	$scope.orderItems = [];

	$scope.products = menuEntryList.data;
	$scope.selectedProduct = $scope.products[0];

	var makeAmount = function() {
		$scope.amount = 0;
		for(var i in $scope.orderItems) {
			$scope.amount += ($scope.orderItems[i].price * $scope.orderItems[i].quantity);
		}
	};

	$scope.addItem = function() {
		var product = JSON.parse($scope.selectedProduct);
		for(var i in $scope.orderItems) {
			if($scope.orderItems[i].id == product.id) {
				$scope.orderItems[i].quantity++;
				makeAmount();
				return;
			}
		}

		$scope.orderItems.push({
			id: product.id,
			name: product.name,
			quantity: 1,
			price: product.price
		});

		makeAmount();
	};

	$scope.deleteItem = function(i) {
		if($scope.orderItems[i].quantity > 1)
			$scope.orderItems[i].quantity--;
		else
			$scope.orderItems.splice(i, 1);
		makeAmount();
	};

	$scope.clearOrder = function() {
		$scope.amount = 0;
		$scope.orderItems = [];
		$scope.selectedProduct = $scope.products[0];
	};

	$scope.finishOrder = function() {
		$http.post('/api/orders', {orderItems: $scope.orderItems})
		.then(function (res) {
			Materialize.toast('Pedido realizado!', 4000);
			$scope.clearOrder();
		}, function (res) {
			Materialize.toast('Falha ao criar pedido', 4000);
		});
	};
});