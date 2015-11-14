vv.controller('MenuCtrl', function($scope) {

	$scope.products = [
		{id: 4, name: 'Muqueca de camarão', price: 30},
		{id: 5, name: 'Poção de arroz', price: 3},
		{id: 7, name: 'Coca Cola 2L', price: 4.5},
		{id: 8, name: 'Suco de fruta 1L', price: 3}
	];

	$scope.editProduct = null;
	$scope.intentDelete = null;

	$scope.setEditProduct = function(i) {
		$scope.intentDelete = null;
		$scope.editProduct = {
			id: $scope.products[i].id,
			name: $scope.products[i].name,
			price: $scope.products[i].price
		};
	};

	$scope.makeDeleteIntent = function() {
		$scope.intentDelete = $scope.editProduct;
	};

	$scope.saveEdit = function() {
		if($scope.intentDelete) {
			Materialize.toast('Produto excluído!', 4000);
		} else {
			Materialize.toast('Produto atualizado!', 4000);
		}
	};
});