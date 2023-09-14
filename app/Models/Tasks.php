<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Tasks extends Model
{
    use HasFactory;

    public function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => Carbon::parse($value)->format('d/m/Y H:i:s'),
        );
    }

    public function concluded(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ($value == false ? 'no' : 'yes'),
        );
    }
}
