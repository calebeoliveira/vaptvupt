vv.controller('MenuCtrl', function($scope, $http, menuEntryList) {

	$scope.products = menuEntryList.data;

	$scope.editProduct = null;
	$scope.addProduct = {
		name: null,
		price: null
	};
	$scope.intentDelete = null;

	var updateProducts = function() {
		$http.get('/api/menu/entries')
		.then(function (res) {
			$scope.products = res.data;
		});
	};

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
			$http.delete('/api/menu/entries/'+$scope.editProduct.id)
			.then(function (res) {
				updateProducts();
				Materialize.toast('Produto excluído!', 4000);
			}, function (res) {
				Materialize.toast('Falha ao excluir produto', 4000);
			});
		} else {
			$http.put('/api/menu/entries/'+$scope.editProduct.id, {product: $scope.editProduct})
			.then(function (res) {
				updateProducts();
				Materialize.toast('Produto atualizado!', 4000);
			}, function (res) {
				Materialize.toast('Falha ao atualizar produto', 4000);
			});
		}
	};

	$scope.saveAdd = function() {
		$http.post('/api/menu/entries', {product: $scope.addProduct})
		.then(function (res) {

			updateProducts();
			Materialize.toast('Produto criado!', 4000);

			$scope.addProduct = {
				name: null,
				price: null
			};
		}, function (res) {
			Materialize.toast('Erro ao criar produto!', 4000);
		});
	};
});