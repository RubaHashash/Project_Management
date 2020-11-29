<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use App\Models\Company;
use App\Models\Team;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    private $pagination = 5;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::with('team')->where('company_id', Auth::user()->company_id)->latest()->simplePaginate($this->pagination);
        return response()->json($projects);
    }


    /*  public function Budget(){
        $budget=Project::get();
        return response()->json($budget);
    }*/


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*request()->validate([
            'amount' => ['required', 'regex:pattern']
            company_id
            team_id
        ]);*/

        $company = Company::findOrFail(request('company_id'));

        $team = Team::findOrFail(request('team_id'));

        if (Auth::id() === $company->admin_id || Auth::id() === $team->manager_id) {

            $project = new Project();

            $project->name = request('name');
            $project->planned_start_date = request('planned_start_date');
            $project->planned_end_date = request('planned_end_date');
            $project->project_description = request('project_description');
            $project->planned_budget = request('planned_budget');
            $project->company_id = request('company_id');
            $project->team_id = request('team_id');

            $project->save();

            return json_encode($project);
        }

        return json_encode(0);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $project = Project::with('team')->with('company')->findOrFail($request->id);

        if (Auth::id() === $project->company->admin_id || Auth::id() === $project->team->manager_id) {
            $project->name = request('name');
            $project->planned_start_date = request('planned_start_date');
            $project->planned_end_date = request('planned_end_date');
            $project->project_description = request('project_description');
            $project->planned_budget = request('planned_budget');

            $project->save();

            return json_encode(1);
        }

        return json_encode(0);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    { ///can be fixed in eloquents
        $project = Project::with('team')->with('company')->findOrFail(request('id'));

        if (Auth::id() === $project->company->admin_id || Auth::id() === $project->team->manager_id) {
            $success = Project::where('id', request('id'))->delete();
            return json_encode($success);
        }
        return json_encode(0);
    }
}
