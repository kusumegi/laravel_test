var botui = new BotUI('my-botui-app');


botui.message.add({
	  content: 'Hello There!'
	}).then(function () { // wait till its shown
	  botui.message.add({ // show next message
	    content: 'How are you?'
	  });
	});