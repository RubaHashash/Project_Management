<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Employee extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    // public function users()
    // {
    //     return $this->belongsTo('App\Models\User','users_id');
    // }

    public function employeeTeam()
    {
        return $this->belongsTo(Team::class);
    }

    public function employeeActivity()
    {
        return $this->hasMany(Employee::class);
    }



}
