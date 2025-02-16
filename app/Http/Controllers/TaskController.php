<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $taskList = DB::connection('mysql')->select(DB::raw("SELECT task, status FROM tasks")->getValue(DB::getQueryGrammar()));
        $statusList = DB::connection('mysql')->select(DB::raw("SELECT distinct status from tasks")->getValue(DB::getQueryGrammar()));
        $taskList = json_decode(json_encode($taskList), true);
        // dd($taskList);
        $tasks = [
            [
                'id' => 1,
                'task' => "Add Case Title to the form",
                'status' => "To do"
            ],
                [
                'id' => 2,
                'task' => "Link ID Coloring",
                'status' => "In Progress"
            ],
            [
                'id' => 3,
                'task' => "Hostname Automation",
                'status' => "Hostname Automation"
            ],
          ];
          
        // $data = [
        //     'name' => 'John Doe',
        //     'email' => 'john.doe@example.com',
        // ];

        return Inertia::render('Dashboard', [
            'taskList' => $taskList,
            'statusList' => $statusList
        ]);
    }
}
