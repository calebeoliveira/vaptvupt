vv.controller('SellCtrl', function($scope) {
	$scope.amount = 0;
	$scope.orderItems = [
		// {id: 4, name: 'Muqueca de camarão', quantity: 1, price: 30}
	];

	$scope.products = [
		{id: 4, name: 'Muqueca de camarão', price: 30},
		{id: 5, name: 'Poção de arroz', price: 3},
		{id: 7, name: 'Coca Cola 2L', price: 4.5},
		{id: 8, name: 'Suco de fruta 1L', price: 3}
	];
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
		Materialize.toast('Pedido realizado!', 4000);
		$scope.clearOrder();
	};

});