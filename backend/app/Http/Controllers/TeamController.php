<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamController extends Controller
{
    private $pagination = 5;

    public function index()
    {
        $teams = Team::with('company')->with('manager')->where('user_id', Auth::id())->latest()->simplePaginate($this->pagination);
        return response()->json($expenses);
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
        //$team->company_id = request('company_id');

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
    public function update(Request $request, Company $company)
    {
        /*request()->validate([
            'amount' => ['required', 'regex:pattern']
        ]);*/

        //$team = Company::with('company')->findOrFail($request->id);

        //if($team->company->admin_id != Auth::id()){
        //    return json_encode(0);
        //}

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
    public function destroy(Company $company)
    {
//$team = Company::with('company')->findOrFail($request->id);

        //if($team->company->admin_id != Auth::id()){
        //    return json_encode(0);
        //}
        $success = Team::where('id',$team->id)->delete();
        return json_encode($success);
    }
}
