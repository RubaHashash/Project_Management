<?php

namespace App\Http\Controllers;

use App\Models\Milestone;
use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;

class MilestoneController extends Controller
{
    private $pagination = 5;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($project_id)
    {
        //$user = User::findOrFail(request(Auth::id()));
        $milestone = Milestone::where('project_id', $project_id)->latest()->simplePaginate($this->pagination);
        return response()->json($milestone);
    }

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

        $project = Project::with('company')->with('team')->findOrFail(request('project_id'));

        if(!$project){
            return json_encode(0);
        }

        if(Auth::id() === $project->comapny->admin_id or Auth::id() === $project->team->manager_id){

            $milestone = new Milestone();

            $milestone->name = request('name');
            $milestone->priority = request('priority');
            $milestone->planned_start_date = request('planned_start_date');
            $milestone->planned_end_date = request('planned_end_date');
            $milestone->planned_budget = request('planned_budget');
            $milestone->project_id = request('project_id');

            if(request('description')){
                $milestone->description = request('description');
            }

            $milestone->save();

            return json_encode($milestone);
        }

        return json_encode(0);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Milestone  $milestone
     * @return \Illuminate\Http\Response
     */
    public function show(Milestone $milestone)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Milestone  $milestone
     * @return \Illuminate\Http\Response
     */
    public function edit(Milestone $milestone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Milestone  $milestone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Milestone $milestone)
    {
        $milestone = Milstone::with('project')->findOrFail($request->id);

        if(Auth::id() === $milestone->project->company->admin_id or Auth::id() === $milestone->project->team->manager_id){
            $milestone->name = request('name');
            $milestone->priority = request('priority');
            $milestone->planned_start_date = request('planned_start_date');
            $milestone->planned_end_date = request('planned_end_date');
            $milestone->planned_budget = request('planned_budget');
            $milestone->project_id = request('project_id');

            if(request('description')){
                $milestone->description = request('description');
            }

            $milestone->save();

            return json_encode(1);    
        }

        return json_encode(0);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Milestone  $milestone
     * @return \Illuminate\Http\Response
     */
    public function destroy(Milestone $milestone)
    {

        $milestone = Project::with('project')->findOrFail($milestone->id);

        if(Auth::id() === $milestone->project->company->admin_id or Auth::id() === $milestone->project->team->manager_id){
            $success = Milestone::where('id',$milestone->id)->delete();
            return json_encode($success);
        }
        return json_encode(0);
    }
}
