<!-- 利用する共通レイアウト -->
@extends('layouts.base')

<!-- titleセクションの中身を提供 -->
@section('title', '画面タイトル！！！')

<!-- mainセクションの内容 -->
@section('main')
<p>{{ $msg }}</p>
<p>master.blade.php</p>

<form method="post" action="/main/getList">
    @csrf
    <input name="name" type="text" />
    <button type="submit">送信</button>
</form>

@endsection
