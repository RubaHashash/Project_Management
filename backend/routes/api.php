<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MilestoneController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\TeamController;


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

Route::middleware('auth:sanctum')->post('/companies/add',[CompanyController::class, 'store']);
Route::middleware('auth:sanctum')->post('/companies/edit',[CompanyController::class, 'update']);
Route::middleware('auth:sanctum')->post('/companies/delete',[CompanyController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/companies',[CompanyController::class, 'index']);

Route::middleware('auth:sanctum')->post('/projects/add',[ProjectController::class, 'store']);
Route::middleware('auth:sanctum')->post('/projects/edit',[ProjectController::class, 'update']);
Route::middleware('auth:sanctum')->post('/projects/delete',[ProjectController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/projects',[ProjectController::class, 'index']);

Route::middleware('auth:sanctum')->post('/milestones/add',[MilstoneController::class, 'store']);
Route::middleware('auth:sanctum')->post('/milestones/edit',[MilstoneController::class, 'update']);
Route::middleware('auth:sanctum')->post('/milestones/delete',[MilstoneController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/milestones/{project}',[MilstoneController::class, 'index']);

Route::middleware('auth:sanctum')->post('/activities/add',[ActivityController::class, 'store']);
Route::middleware('auth:sanctum')->post('/activities/edit',[ActivityController::class, 'update']);
Route::middleware('auth:sanctum')->post('/activities/delete',[ActivityController::class, 'destroy']);
Route::middleware('auth:sanctum')->post('/activities/{milestone}',[ActivityController::class, 'index']);

Route::middleware('auth:sanctum')->post('/teams/add',[TeamController::class, 'store']);
Route::middleware('auth:sanctum')->post('/teams/edit',[TeamController::class, 'update']);
Route::middleware('auth:sanctum')->post('/teams/delete',[TeamController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/teams',[TeamController::class, 'index']);