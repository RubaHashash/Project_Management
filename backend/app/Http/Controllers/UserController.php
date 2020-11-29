<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Team;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function makeAdmin($company_id)
    {
        $admin = User::find(request('id'));

        //$admin->isManager = true;
        $admin->company_id = $company_id;

        $admin->save();
    }

    public function status()
    {
        $user = Auth::user();
        $role = 'employee';

        $team = Team::where('manager_id', Auth::id())->get();

        if ($team) {
            $role = 'manager';
        }

        if ($user->is_Manager) { // is Manager azde admin
            $role = 'admin';
        }

        $response = array('role' => $role, 'company_id' => Auth::user()->company_id, 'team_id' => Auth::user()->team_id);

        return json_encode($response);
    }
    public function edit(Request $request)
    {
        $user = User::findOrFail(Auth::id());

        $user->name = $request->get('name');
        $user->email = $request->get('email');

        $user->save();

        return json_encode($user);
    }
}
