<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::group(["prefix" => "guest"], function(){
    Route::post('login', [AuthController::class,'login']);
    Route::post('register',[AuthController::class,'register']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
});

Route::group(["prefix" => "user"], function(){
    Route::post('addPost', [PostController::class,'addPost']);
    Route::post('getUser', [UserController::class,'getUsersByName']);
});
