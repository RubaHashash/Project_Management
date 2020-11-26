<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->date('actual_start_date')->nullable();
            $table->date('actual_end_date')->nullable();
            $table->date('planned_start_date');
            $table->date('planned_end_date');
            $table->decimal('actual_budget')->nullable();
            $table->decimal('planned_budget');
            $table->unsignedBigInteger('milstone_id');
            $table->foreign('milstone_id')->references('id')->on('milestones')->onDelete('cascade');
            $table->unsignedBigInteger('worker_id')->nullable();
            $table->foreign('worker_id')->references('id')->on('users')->onDelete('set null');
            $table->unsignedBigInteger('activity_dep_id')->nullable();
            $table->foreign('activity_dep_id')->references('id')->on('activities')->onDelete('set null');
            $table->unsignedBigInteger('milestone_dep_id')->nullable();
            $table->foreign('milestone_dep_id')->references('id')->on('milestones')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
