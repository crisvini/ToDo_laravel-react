<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->enum('status', ['backlog', 'to do', 'doing', 'done'])->default('backlog');
            $table->timestamps();
            $table->timestamp('concluded')->nullable();
        });
    }

    public function down(): void
    {
    }
};
