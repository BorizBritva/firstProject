//create main display element
const display = document.querySelector('.display'),
	  gamePart = document.createElement('div');

let x = 1,
	y = 40;
//генератор целевой точки
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
//set style to matrix
gamePart.classList.add('monitor');
//push pixel-elem to matrix
for (let i=0; i<840; i++) {
	let elem = document.createElement('div');
	elem.setAttribute('data-x', x);
	elem.setAttribute('data-y', y);
	elem.classList.add('pixel');
	gamePart.appendChild(elem);
	if (x>20) {
		y--;
		x=1;
	} else {
		x++;
	};
};

display.appendChild(gamePart);

const pixel = document.body.querySelectorAll('.pixel');

//initial start position
const startX = 10,
	  startY = 20;

let snake = [  document.querySelector(`[data-x="${startX}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 1}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 2}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 3}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 4}"][data-y="${startY}"]`)
			];

snake.forEach(item => item.classList.add('player'));

let randX = getRandomInt(1, 22);
let randY = getRandomInt(1, 41);
let target = document.querySelector(`[data-x="${randX}"][data-y="${randY}"]`);
target.classList.add('target');

function move(left, right ,up ,down) {
	
	if (right) {
		if ((+(snake[snake.length-1].dataset.x) < +(snake[0].dataset.x)) && (+(snake[snake.length-1].dataset.y) == +(snake[0].dataset.y))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newX = document.querySelector(`[data-x="${+(snake[snake.length-1].dataset.x) + 1}"][data-y="${+(snake[snake.length-1].dataset.y)}"]`);
				if (newX == target) {
					snake.unshift(target);
				}
				snake.splice(0, 1);
				snake.push(newX);
				snake.forEach(item => item.classList.add('player'));
			}
	};

	if (left) {
		if ((+(snake[snake.length-1].dataset.x) > +(snake[0].dataset.x)) && (+(snake[snake.length-1].dataset.y) == +(snake[0].dataset.y))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newX = document.querySelector(`[data-x="${+(snake[snake.length-1].dataset.x) - 1}"][data-y="${+(snake[snake.length-1].dataset.y)}"]`);
				snake.splice(0, 1);
				snake.push(newX);
				snake.forEach(item => item.classList.add('player'));
			}
	};

	if (up) {
		if ((+(snake[snake.length-1].dataset.y) < +(snake[0].dataset.y)) && (+(snake[snake.length-1].dataset.x) == +(snake[0].dataset.x))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newY = document.querySelector(`[data-x="${+(snake[snake.length - 1].dataset.x)}"][data-y="${+(snake[snake.length-1].dataset.y) + 1}"]`);
				snake.splice(0, 1);
				snake.push(newY);
				snake.forEach(item => item.classList.add('player'));
			}
	};

	if (down) {
		if ((+(snake[snake.length-1].dataset.y) > +(snake[0].dataset.y)) && (+(snake[snake.length-1].dataset.x) == +(snake[0].dataset.x))) {
			return; }
			else {
				snake.forEach(item => item.classList.remove('player'));
				let newY = document.querySelector(`[data-x="${+(snake[snake.length - 1].dataset.x)}"][data-y="${+(snake[snake.length-1].dataset.y) - 1}"]`);

				snake.splice(0, 1);
				snake.push(newY);
				snake.forEach(item => item.classList.add('player'));
			}
	};
};

window.addEventListener('keydown', function(e) {
	if (e.keyCode == 39) {
		return move(0, 1);
	};
	if (e.keyCode == 37) {
		return move(1, 0);
	};
	if (e.keyCode == 38) {
		return move(0, 0, 1);
	};
	if (e.keyCode == 40) {
		return move(0, 0, 0, 1);
	}
})