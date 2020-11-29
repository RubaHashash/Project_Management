<?php

namespace App\Http\Controllers;
use App\Models\Team;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    private $pagination = 5;

    public function index()
    {
        $teams = Team::with('manager')->where('company_id', Auth::user()->company_id)->latest()->simplePaginate($this->pagination);
        return response()->json($teams);
    }

    public function ProjectsOfTeam(){
        $teamsProj=DB::table("teams")->where("teams.company_id", Auth::user()->company_id)
                    ->join('projects','teams.id','=','projects.team_id')
                    ->select('teams.name',DB::raw("COUNT(projects.id) as COUNT"))
                    ->groupBy('teams.id')
                    ->get();
        return response()->json($teamsProj);
    }
    
    public function EmployeesPerTeam(){
        $teamsEmp=DB::table('teams')->where("teams.company_id", Auth::user()->company_id)
                    ->join('users','users.team_id','=','teams.id')
                    ->select('teams.name',DB::raw("COUNT(users.id) as COUNT"))
                    ->groupBy("teams.id")           
                    ->get();
        return response()->json($teamsEmp);
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
        ]);*/

        $team = new Team();

        $team->name = request('name');
        $team->manager_id = request('manager_id');
        $team->company_id = request('company_id');

        $team->save();

        return json_encode($team);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        /*request()->validate([
            'amount' => ['required', 'regex:pattern']
        ]);*/

        //$team = Company::with('company')->findOrFail($request->id);

        //if($team->company->admin_id != Auth::id()){
        //    return json_encode(0);
        //}
        $team = Team::find(request('id'));

        $team->name = request('name');
        $team->manager_id = request('manager_id');

        $team->save();
        return json_encode(1);
    }

    /*public function changeAdmin(Request $request, Company $company)
    {
        $company = Company::findOrFail($request->company_id);

        if($company->admin_id != Auth::id()){
            return json_encode(0);
        }

        $company->admin = request('new_admin_id');

        $success = $company->save();

        return json_encode($success);
    }*/

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
//$team = Company::with('company')->findOrFail($request->id);

        //if($team->company->admin_id != Auth::id()){
        //    return json_encode(0);
        //}
        $success = Team::where('id',request('id'))->delete();
        return json_encode($success);
    }
}
