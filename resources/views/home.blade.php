@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')
<script>
    window.Laravel = {'csrfToken': '{{csrf_token()}}'};
    // Pusher.logToConsole = true;
    // console.log(window.Echo);
    window.Echo.private(`publicD.{{auth()->user()->id}}`)
        .listen('.publicDD', (e) => {
            console.log('here');
            console.log(e);
        });

    $.ajax({
            url: '/home/notifyExample',
            type: 'GET',
            success: function (data) {
                console.log('hello');
            }
        });  
</script>
@endsection