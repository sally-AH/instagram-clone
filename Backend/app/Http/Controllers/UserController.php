<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller {

    public function getUsersByName(Request $request) {

        $name = $request->input('name');
        $users = User::where('name', $name)->get();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }
}
