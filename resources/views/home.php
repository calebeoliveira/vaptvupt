<!DOCTYPE html>
<html ng-app="vaptvupt" lang="pt-BR">
<head>
	<meta charset="utf-8">
	<title>Vaptvupt</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.2/css/materialize.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<div class="navbar-fixed">
		<nav class="red darken-4">
			<div class="nav-wrapper">
			<a href="#" class="brand-logo amber-text"><i class="material-icons brand-icon">store</i>
			Vaptvupt</a>
				<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
				<ul class="right hide-on-med-and-down">
					<li><a href="#/sell">Vender</a></li>
					<li><a href="#/orders">Pedidos</a></li>
					<li><a href="#/menu">Cardápio</a></li>
					<li><a href="#/report">Relatório</a></li>
				</ul>
				<ul class="side-nav" id="mobile-demo">
					<li><a href="#/sell">Vender</a></li>
					<li><a href="#/orders">Pedidos</a></li>
					<li><a href="#/menu">Cardápio</a></li>
					<li><a href="#/report">Relatório</a></li>
				</ul>
			</div>
		</nav>
	</div>

	<div class="container main-area">
		<ui-view></ui-view>
	</div>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.2/js/materialize.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript">$('.button-collapse').sideNav();</script>
</body>
</html>