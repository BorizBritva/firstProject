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
};*/
