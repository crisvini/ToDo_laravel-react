<?php

use App\Http\Controllers\Tasks;
use Illuminate\Support\Facades\Route;

Route::get('/getTasks', [Tasks::class, 'getTasks']);
Route::view('/{any}', 'welcome')->where('any', '.*');
