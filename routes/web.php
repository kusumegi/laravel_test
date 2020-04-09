<?php

use App\Http\Controllers\ViewController;
use App\Http\Middleware\LogMiddleware;

/*
 * |--------------------------------------------------------------------------
 * | Web Routes
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you can register web routes for your application. These
 * | routes are loaded by the RouteServiceProvider within a group which
 * | contains the "web" middleware group. Now create something great!
 * |
 */
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// 動作テスト

// ルートグループ(URLの接頭語)
Route::prefix('hello')->group(function(){
    // /hello
    Route::get('/', 'HelloController@index');
    // /hello/hello2
    Route::get('hello2', 'HelloController@view');
    // /hello/list
    Route::get('list', 'HelloController@listBook');

});
// Viewのテンプレートを使ってみる
Route::get('/view/master', 'ViewController@master');

// Chat
Route::get('/chat', 'ChatController@chat1');
Route::get('/chat2', 'ChatController@chat2');
こんばんは。