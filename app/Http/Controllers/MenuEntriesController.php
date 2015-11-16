<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class MenuEntriesController extends Controller {

	public function index()
	{
		$entries = DB::table('menuEntries')
			->orderBy('id', 'asc')
			->get();

		return response($entries);
	}

	public function create(Request $request)
	{
		$product = $request->input('product');

		DB::table('menuEntries')->insert([
			'name' => $product['name'],
			'price' => $product['price']
		]);

		return response(null, 201);
	}

	public function edit(Request $request, $id)
	{
		$entry = DB::table('menuEntries')
			->where('id', $id)
			->take(1)
			->get();

		if(empty($entry))
			return abort(404);

		$entry = $entry[0];
		$product = $request->get('product');

		DB::table('menuEntries')
			->where('id', $id)
			->update([
				'name'=>$product['name'],
				'price'=>$product['price']
			]);

		return response(null, 205);
	}

	public function delete($id)
	{
		DB::table('menuEntries')
			->where('id', $id)
			->delete();

		return response(null, 205);
	}
}