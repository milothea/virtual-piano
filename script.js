// window.addEventListenter('DOMContentLoaded', startScript);

// function startScript() {
	const btnContainer = document.querySelector('.btn-container'),
				fullScreenBtn = document.querySelector('.fullscreen'),
				piano = document.querySelector('.piano');

	fullScreenBtn.addEventListener('click', toggleFullScreen);
	btnContainer.addEventListener('click', toogleNotesType);
	piano.addEventListener('click', playSound); 

	function toogleNotesType(event) {
		const target = event.currentTarget,
					toggles = document.querySelectorAll('.btn'),
					pianoKeys = document.querySelectorAll('.piano-key');
		
		toggles.forEach( item => item.classList.toggle('btn-active'));
		pianoKeys.forEach( item => {
			item.classList.toggle('piano-key-note');
			item.classList.toggle('piano-key-letter');
		});
	}

	function toggleFullScreen(event) {
		const target = event.currentTarget,
					html = document.querySelector('html');

		if (target.classList.contains('openfullscreen')) {
			if(html.requestFullScreen) {
		    html.requestFullScreen();
		  } else if(html.mozRequestFullScreen) {
		    html.mozRequestFullScreen();
		  } else if(html.webkitRequestFullScreen) {
		    html.webkitRequestFullScreen();
		  }

			target.classList.remove('openfullscreen');
		} else {
			if(document.cancelFullScreen) {
		    document.cancelFullScreen();
		  } else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		  } else if(document.webkitCancelFullScreen) {
		    document.webkitCancelFullScreen();
		  }

			target.classList.add('openfullscreen');
		}
	}

	function playSound(event) {
		const target = event.target;

		console.log(target);
	}
//}