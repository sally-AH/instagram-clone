<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function addPost(Request $request) {
        $post = new Post();
        $post->user_id = $request->user_id;
        $post->pic_url = $request->pic_url;
        // "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        $post->save();
        return response()->json([
            'status' => 'Success',
            'data' => $post,
        ]);
    }

}
