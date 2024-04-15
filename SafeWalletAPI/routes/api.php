<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\TransactionController;

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

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [UserController::class, 'user']);
    Route::post('logout', [UserController::class, 'logout']);
    Route::post('showUser', [UserController::class, 'dataForUser']);
    Route::post('showUsers', [UserController::class, 'showUsers']);


    Route::post('deposit', [WalletController::class, 'deposit']);
    Route::post('withdrawal', [WalletController::class, 'withdrawal']);
    Route::post('transfer', [WalletController::class, 'transfer']);
    Route::post('transactions', [TransactionController::class, 'getMyTransactions']);
    
});
