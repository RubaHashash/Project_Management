<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    public function activity_employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function activity_role()
    {
        return $this->hasOne(Role::class);
    }

    public function activity_task()
    {
        return $this->hasOne(Task::class);
    }



}
