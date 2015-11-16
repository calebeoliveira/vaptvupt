<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class OrdersController extends Controller {

	public function index()
	{
		$orders = DB::table('orders')
			->orderBy('createdAt', 'desc')
			->get();

		foreach ($orders as &$order) {
			$order->items = json_decode($order->items);
			$order->createdAt = date_format(date_create($order->createdAt),'d/m H:i').'h';
		}

		return response($orders);
	}

	public function create(Request $request) {

		$orderItems = $request->input('orderItems');
		$products = [];
		$amount = 0;

		foreach ($orderItems as $item) {
			$products[] = $item['name'].' ('.$item['quantity'].'x) '.str_replace('BRL ', 'R$', money_format('%i', $item['price']));
			$amount += ($item['price'] * $item['quantity']);
		}

		DB::table('orders')->insert([
			'amount' => $amount,
			'items' => json_encode($products)
		]);

		return response(null, 201);
	}
}