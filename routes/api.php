<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getUOM','App\Http\Controllers\TransactionController@getUOM');
Route::get('getCurrency','App\Http\Controllers\TransactionController@getCurrency');
Route::get('getChargeTo','App\Http\Controllers\TransactionController@getChargeTo');

Route::get('getVendor','App\Http\Controllers\VendorController@getVendor');
Route::get('getInvoiceTo','App\Http\Controllers\VendorController@getInvoiceTo');
Route::get('getCustomer','App\Http\Controllers\VendorController@getCustomer');
