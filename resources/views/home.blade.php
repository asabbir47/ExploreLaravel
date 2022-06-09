@extends('layouts.app')

@section('content')
<div class="container" id="example">
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
    // window.Laravel = {'csrfToken': '{{csrf_token()}}'};
    // Pusher.logToConsole = true;
    console.log(window.Echo);
    window.Echo.private(`publicD.{{Auth::check()}}`)
        .listen('.publicDD', (e) => {
            console.log('here');
            console.log(e);
        });

    setTimeout(function(){
        $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        url: '/home/notifyExample',
        type: 'POST',
        success: function (data) {
            console.log('hello');
        }
    });  
    },1000)

    
</script>
@endsection