<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
    <link rel="stylesheet" href="ht6tps://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>@yield('title')</title>
</head>
<body>
	<p>header</p>
	<hr />
	@section('main')
	<p>既定のコンテンツです</p>
	@show
	<hr />
	<p>footer</p>
</body>
</html>