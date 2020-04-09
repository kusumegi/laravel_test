<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    // DialogFlowのチャット
    public function chat1() {
        return view('chat.chat1');
    }

    // jsのチャット
    public function chat2() {
        return view('chat.chat2');
    }
}
