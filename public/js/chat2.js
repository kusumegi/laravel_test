(function() {

	var url = 'https://api.github.com/search/repositories?q=';
	var msgIndex, key;
	var botui = new BotUI('bot_app');

	// 初期メッセージ
	botui.message.bot({
		content : 'こんにちは！ご質問は？'
	}).then(init2);

	function init2() {
		// ボタンを表示
		return botui.action.button({
			delay : 1000,
			action : [ {
				text : '病院について',
				value : 'hospital'
			}, {
				text : '糖尿病について',
				value : 'tounyou'
			}, {
				text : 'その他',
				value : 'other'
			} ]
		}).then(function(res) {

			// ローディング中のアイコンを表示
			botui.message.bot({
				loading : true
			}).then(function(index) {
				// ローディングアイコンのindexを取得
				// このindexを使ってメッセージ情報を更新する
				// （更新しないとローディングアイコンが消えないため…）
				msgIndex = index;

				// するかの条件分岐処理
				if (res.value == 'hospital') {
					init2hospital();
				} else if (res.value == 'tounyou') {

				} else {

				}
			});

		});
	}

	function init2hospital() {

		// ローディングアイコンのindexを使ってメッセージを書き換える
		botui.message.update(msgIndex, {
			delay : 5000,
			content : '何が知りたいですか？'
		}).then(function() {

			// 「はい」「いいえ」のボタンを表示
			var buttonArr = [];
			buttonArr.push({
				text : '診療時間',
				value : 'time'
			});
			buttonArr.push({
				text : '所在地',
				value : 'address'
			});
			buttonArr.push({
				text : '電話番号',
				value : 'telno'
			});
			return botui.action.button({
				delay : 500,
				action : buttonArr
			});

		}).then(function(res) {

			// 「続ける」か「終了」するかの条件分岐処理
			if (res.value == 'time') {

			} else if (res.value == 'tounyou') {

			} else {

			}
		});

	}

	function init() {
		botui.message.bot({
			delay : 1500, // メッセージの表示タイミングをずらす
			content : '気になるキーワードで、GitHubの総リポジトリ数をお答えします！'
		}).then(function() {

			// キーワードの入力
			// 「return」を記述して、ユーザーからの入力待ち状態にする
			return botui.action.text({
				delay : 1000,
				action : {
					placeholder : '例：javascript'
				}
			});
		}).then(function(res) {

			// 入力されたキーワードを取得する
			key = res.value;
			getRepositories(key);

			// ローディング中のアイコンを表示
			botui.message.bot({
				loading : true
			}).then(function(index) {

				// ローディングアイコンのindexを取得
				// このindexを使ってメッセージ情報を更新する
				// （更新しないとローディングアイコンが消えないため…）
				msgIndex = index;
			});
		});
	}

	// GitHubのリポジトリを取得する処理
	function getRepositories(keyword) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url + keyword);
		xhr.onload = function() {
			var result = JSON.parse(xhr.responseText);

			// 取得したリポジトリ数をshowMessage()に代入する
			showMessage(result.total_count);
		}
		xhr.send();
	}

	// リポジトリ総数をメッセージに表示する処理
	function showMessage(totalCount) {

		// ローディングアイコンのindexを使ってメッセージを書き換える
		botui.message.update(msgIndex, {
			content : key + 'のリポジトリ総数は、' + totalCount + '個です！'
		}).then(function() {
			return botui.message.bot({
				delay : 1500,
				content : 'まだ続けますか？'
			})
		}).then(function() {

			// 「はい」「いいえ」のボタンを表示
			return botui.action.button({
				delay : 1000,
				action : [ {
					text : 'はい',
					value : true
				}, {
					text : 'いいえ',
					value : false
				}, {
					text : 'いいえ',
					value : false
				} ]
			});
		}).then(function(res) {

			// 「続ける」か「終了」するかの条件分岐処理
			res.value ? init() : end();
		});
	}

	// プログラムを終了する処理
	function end() {
		botui.message.bot({
			content : 'ご利用ありがとうございました！'
		})
	}

})();