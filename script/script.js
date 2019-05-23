//create main display element
const display = document.querySelector('.display'),		//initial game_zone
	  gamePart = document.createElement('div'),		//initial matrix
	  pointValue = document.createElement('div'),  	//point window
	  startX = 10,		//initial start position
	  startY = 20;		//initial start position

//point-generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
//point counter
function point() {
	this.innerHTML= (+this.innerHTML) + 7;
};

let x = 1,
	y = 40,
	randX,
	randY,
	target,
	timerID;

//add style to matrix
gamePart.classList.add('monitor');
pointValue.innerHTML=0;
pointValue.classList.add('point');
//push pixel to matrix
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
display.appendChild(pointValue);

const pixel = document.body.querySelectorAll('.pixel');

let snake = [  document.querySelector(`[data-x="${startX}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 1}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 2}"][data-y="${startY}"]`)
			];

//add style to snake
snake.forEach(item => item.classList.add('player'));

function targ() {

	randX = getRandomInt(1, 21);
	randY = getRandomInt(1, 40);

	target = document.querySelector(`[data-x="${randX}"][data-y="${randY}"]`);
	target.classList.add('target');
};

function move(l, r, u, d) {

	let newX = +snake[snake.length - 1].dataset.x;
	let newY = +snake[snake.length - 1].dataset.y;

	let newElem = {
		x: {
			right: document.querySelector(`[data-x="${newX + 1}"][data-y="${newY}"]`),
			left: document.querySelector(`[data-x="${newX - 1}"][data-y="${newY}"]`)
		},
		y: {
			up: document.querySelector(`[data-x="${newX}"][data-y="${newY + 1}"]`),
			down: document.querySelector(`[data-x="${newX}"][data-y="${newY - 1}"]`)
		},
		check(elem) {
			if (elem.classList.contains('target')) {
					snake.unshift(target);
					point.call(pointValue);
					setTimeout(function() {return targ()}, 1000);
			};
		}
	};

	let  {x: {right, left}, y: {up, down}, check} = newElem;

	snake.forEach(item => item.classList.remove('player'));
	snake.splice(0, 1);

	if (l) {
		check(left)
		snake.push(left);
	};
	if (u) {
		check(up);
		snake.push(up);
	};
	if (d) {
		check(down);
		snake.push(down);
	};
	if (r){
		check(right);
		snake.push(right);
	};

	snake.forEach((item) => { item.classList.remove('target'); item.classList.add('player')});
}

targ();

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
