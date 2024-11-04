<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskController;

Route::get('/', function () {
    return view('welcome');
});

// Routes pour les tâches avec les noms de route appropriés
Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.delete');
Route::get('/tasks/{task}', [TaskController::class, 'show'])->name('tasks.show');
