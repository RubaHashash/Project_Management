<?php

namespace App\Http\Controllers;

use App\Models\Notifiction;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class NotifictionController extends Controller
{
    private $pagination = 100;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->isManager){
            $notifications = Notifiction::with('employee')->where('company_id', Auth::user()->company_id)->latest()->simplePaginate($this->pagination);
            return response()->json($notifications);
        }
        return response()->json(0);
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
        $notification = new Notification();

        $notification->user_id = Auth::id();
        $notification->company_id = request('company_id');

        $notification->save();

        return json_encode($notification);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notifiction  $notifiction
     * @return \Illuminate\Http\Response
     */
    public function show(Notifiction $notifiction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notifiction  $notifiction
     * @return \Illuminate\Http\Response
     */
    public function edit(Notifiction $notifiction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notifiction  $notifiction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notifiction $notifiction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notifiction  $notifiction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notifiction $notifiction)
    {
        
    }
}
