//create main display element
const display = document.querySelector('.display'),
	  gamePart = document.createElement('div');

let x = 1,
	y = 40;
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

const snake = [
			   document.querySelector(`[data-x="${startX}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 1}"][data-y="${startY}"]`),
			   document.querySelector(`[data-x="${startX + 2}"][data-y="${startY}"]`)
			   ];

snake.forEach(item => item.classList.add('player'));

function move() {
	let newSnake = [...snake];
	snake.forEach(item => item.classList.remove('player'));
	console.log(newSnake);
};

window.addEventListener('keydown', function(e) {
	if (e.keyCode == 39) {
		return move();
	}
})
/*let n = 0;
//индексация пикселей монитора
for (let y=40; y>0; y--) {
	for (let x=1; x<22; x++) {
		pixel[n].setAttribute('data-y',y);
		pixel[n].setAttribute('data-x',x);
		n++;
	};
};*/