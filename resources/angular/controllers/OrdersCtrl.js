vv.controller('OrdersCtrl', function($scope) {

	$scope.orders = [
		{
			amount: 40.5,
			createdAt: '16:30h',
			items: [
				'Muqueca de camarão (1x) R$30.00',
				'Poção de arroz (1x) R$3.00',
				'Coca cola 2L (1x) R$4.50',
				'Suco de fruta 1L (1x) R$3.00'
			]
		}
	];
});