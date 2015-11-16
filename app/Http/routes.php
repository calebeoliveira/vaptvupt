<?php

$app->get('/', function () use ($app) {
    return view('home');
});

$app->group(['prefix' => 'api', 'namespace'=>'App\Http\Controllers'], function ($app) {
	$app->get('orders', 'OrdersController@index');
	$app->post('orders', 'OrdersController@create');

	$app->get('menu/entries', 'MenuEntriesController@index');
	$app->post('menu/entries', 'MenuEntriesController@create');
	$app->put('menu/entries/{id}', 'MenuEntriesController@edit');
	$app->delete('menu/entries/{id}', 'MenuEntriesController@delete');
});