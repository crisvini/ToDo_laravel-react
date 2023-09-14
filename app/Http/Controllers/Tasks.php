<?php

namespace App\Http\Controllers;

use App\Models\Tasks as ModelsTasks;
use Illuminate\Http\Request;

class Tasks extends Controller
{
    public function getTasks()
    {
        $tasks = ModelsTasks::all();
        return $tasks;
    }
}
