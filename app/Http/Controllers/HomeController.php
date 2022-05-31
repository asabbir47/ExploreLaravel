<?php

namespace App\Http\Controllers;

use App\Events\UserCreated;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        return view('home');
    }

    public function notify()
    {
        // dd(auth()->user()); 

        // $userCreatedEvent = new UserCreated();
        // event(new UserCreated(auth()->user()));
        UserCreated::dispatch(auth()->user());
    }
}
