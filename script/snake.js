/*function move(left, right ,up ,down) {
	
	if (right) {
		if ((+(snake[snake.length-1].dataset.x) < +(snake[snake.length-2].dataset.x))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newX = document.querySelector(`[data-x="${+(snake[snake.length-1].dataset.x) + 1}"][data-y="${+(snake[snake.length-1].dataset.y)}"]`);
				if (newX.classList.contains('target')) {
					snake.unshift(target);
					point.call(pointValue);
					setTimeout(function() {return targ()}, 1000);
				}
				snake.splice(0, 1);
				snake.push(newX);
				snake.forEach((item) => { item.classList.remove('target'); item.classList.add('player')});

			}
	};

	if (left) {
		if ((+(snake[snake.length-1].dataset.x) > +(snake[snake.length-2].dataset.x))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newX = document.querySelector(`[data-x="${+(snake[snake.length-1].dataset.x) - 1}"][data-y="${+(snake[snake.length-1].dataset.y)}"]`);
				if (newX.classList.contains('target')) {
					snake.unshift(target);
					point.call(pointValue);
					setTimeout(function() {return targ()}, 1000);
				}				
				snake.splice(0, 1);
				snake.push(newX);
				snake.forEach((item) => { item.classList.remove('target'); item.classList.add('player')});
			}
	};

	if (up) {
		if ((+(snake[snake.length-1].dataset.y) < +(snake[snake.length-2].dataset.y))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newY = document.querySelector(`[data-x="${+(snake[snake.length - 1].dataset.x)}"][data-y="${+(snake[snake.length-1].dataset.y) + 1}"]`);
				if (newY.classList.contains('target')) {
					snake.unshift(target);
					point.call(pointValue);
					setTimeout(function() {return targ()}, 1000);
				}				
				snake.splice(0, 1);
				snake.push(newY);
				snake.forEach((item) => { item.classList.remove('target'); item.classList.add('player')});

			}
	};

	if (down) {
		if ((+(snake[snake.length-1].dataset.y) > +(snake[snake.length-2].dataset.y))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newY = document.querySelector(`[data-x="${+(snake[snake.length - 1].dataset.x)}"][data-y="${+(snake[snake.length-1].dataset.y) - 1}"]`);
				if (newY.classList.contains('target')) {
					snake.unshift(target);
					point.call(pointValue);
					setTimeout(function() {return targ()}, 1000);
				}
				snake.splice(0, 1);
				snake.push(newY);
				snake.forEach((item) => { item.classList.remove('target'); item.classList.add('player')});
			}
	};

console.log(target);
window.addEventListener('keydown', function(e) {
	if (e.keyCode == 39) {
		clearTimeout(timerID);
		timerID = setInterval(function() {
			return move(0, 1, 0, 0); }, 100);
	};
	if (e.keyCode == 37) {
		clearTimeout(timerID);
		timerID = setInterval(function() {
			return move(1, 0, 0, 0); }, 100);
	};
	if (e.keyCode == 38) {
		clearTimeout(timerID);
		timerID = setInterval(function() {
			return move(0, 0, 1, 0); }, 100);
	};
	if (e.keyCode == 40) {
		clearTimeout(timerID);
		timerID = setInterval(function() {
			return move(0, 0, 0, 1); }, 100);
	}
});
};*/
