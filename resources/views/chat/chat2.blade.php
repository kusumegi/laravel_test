<!DOCTYPE HTML>
<html>
	<head>
		<title>BOT UI 検証</title>
		<meta charset="utf-8">
		<!-- CDN経由でBOTUIが使えるように設定 -->
		<link rel="stylesheet" href="https://unpkg.com/botui/build/botui.min.css" />
		<link rel="stylesheet" href="https://unpkg.com/botui/build/botui-theme-default.css" />
		<link rel="stylesheet" href="{{ asset('css/botui.css') }}" />
	</head>

	<body>
		Bot UI(javascript+Vue)でのチャットボット実装
<div id="bot_app">
  <bot-ui></botui>
</div>
		<script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/botui/0.3.9/botui.min.js"></script>
		<script src="{{ asset('/js/chat2.js') }}"></script>
	</body>
</html>