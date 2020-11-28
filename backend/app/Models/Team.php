<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

   /* public function team_employee()
    {
        return $this->hasMany(Employee::class);
    }*/

    public function company()
    {
        return $this->hasMany(Company::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class);
    }
}
