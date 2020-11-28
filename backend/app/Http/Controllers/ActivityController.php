<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Milestone;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    private $pagination = 5;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($milestone_id)
    {
        $milestone = Milestone::with('project')->find($milestone_id);
        if($milestone->project->company_id === Auth::user()->company_id){
            $activities = Activity::where('milestone_id',$milestone_id)->latest()->simplePaginate($this->pagination);
            return response()->json($activities);
        }
      return json_encode(0);
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

        $milestone = Milestone::with('project')->findOrFail(request('milestone_id'));

        if(!$milestone){
            return json_encode(0);
        }

        if(Auth::id() === $milestone->project->company->admin_id || Auth::id() === $milestone->project->team->manager_id){

            $activity = new Activity();

            $activity->name = request('name');
            $activity->planned_start_date = request('planned_start_date');
            $activity->planned_end_date = request('planned_end_date');
            $activity->planned_budget = request('planned_budget');
            $activity->milestone_id = request('milestone_id');

            if(request('description')){
                $activity->description = request('description');
            }

            if(request('activity_dep_id')){ //maybe some validation for start time of this and end time of that
                $activity->activity_dep_id = request('activity_dep_id');
            }

            if(request('milestone_dep_id')){
                $activity->description = request('milestone_dep_id');
            }

            $activity->save();

            return json_encode($activity);
        }

        return json_encode(0);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        $activity = Activity::with('milestone')->findOrFail(request('id'));

        //if(Auth::id() === $activity->milestone->project->company->admin_id ||
        //    Auth::id() === $activity->milestone->project->team->manager_id){
            $activity->name = request('name');
            $activity->planned_start_date = request('planned_start_date');
            $activity->planned_end_date = request('planned_end_date');
            $activity->planned_budget = request('planned_budget');
            $activity->milestone_id = request('milestone_id');

            if(request('description')){
                $activity->description = request('description');
            }

            if(request('activity_dep_id')){ //maybe some validation for start time of this and end time of that
                $activity->activity_dep_id = request('activity_dep_id');
            }

            if(request('milestone_dep_id')){
                $activity->description = request('milestone_dep_id');
            }

            $activity->save();

            return json_encode(1);
        //}

        return json_encode($activity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        ///$activity = Activity::with('milestone')->findOrFail($request->id);

        //if(Auth::id() === $activity->milestone->project->company->admin_id ||
        //Auth::id() === $activity->milestone->project->team->manager_id){
            $success = Activity::where('id',request('id'))->delete();
            return json_encode($success);
        //}
        return json_encode(0);
    }
}
