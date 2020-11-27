<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        $company = new Company();

        $company->name = request('name');
        $company->address = request('name');
        $company->city = request('city');
        $company->country = request('country');
        $company->phone_number = request('phonr_number');
        $company->description = request('description');
        $company->date_of_establishment = request('date_of_establishment');
        $company->admin_id = Auth::id();

        $company->save();

        return json_encode($company);

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

        $company = Company::findOrFail($request->id);

        if($company->admin_id != Auth::id()){
            return json_encode(0);
        }

        $company->name = request('name');
        $company->email = request('email');
        $company->address = request('address');
        $company->city = request('city');
        $company->country = request('country');
        $company->phone_number = request('phonr_number');
        $company->description = request('description');
        $company->date_of_establishment = request('date_of_establishment');

        $company->save();

        return json_encode(1);
    }

    public function changeAdmin(Request $request, Company $company)
    {
        $company = Company::findOrFail($request->company_id);

        if($company->admin_id != Auth::id()){
            return json_encode(0);
        }

        if(!User::findOrFail($request->new_admin_id)){
            //new admin doesn't exist
            return json_encode(0);
        }

        $company->admin = request('new_admin_id');

        $success = $company->save();

        return json_encode($success);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        if($company->admin_id === Auth::id()){
            $success = Company::where('id',$company->id)->delete();
            return json_encode($success);
        }
        return json_encode(0);
    }
}
