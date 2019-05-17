//create main display element
const display = document.querySelector('.display'),
	  gamePart = document.createElement('div');
//set style to matrix
gamePart.style.cssText = "width: 80%; \ height: 100%; \ border: 1px solid black; \ position: relative; \ display: flex; \ flex-wrap: wrap;";
//push pixel-elem to matrix
for (let i=0; i<840; i++) {
	let elem = document.createElement('div');
	elem.classList.add('pixel');
	gamePart.appendChild(elem);
};

display.appendChild(gamePart);

const pixel = document.querySelectorAll('.pixel');

let n = 0;
//индексация пикселей монитора
for (let y=42; y>0; y--) {
	for (let x=1; x<22; x++) {
		pixel[n].setAttribute('posy',y);
		pixel[n].setAttribute('posx',x);
		n++;
	};
};

//игровые объекты
const Person = {
	tetris: {
		stick: [[0, 0],[0, 1],[0, -1]],
		lightningLeft: [[0, 0], [0, 1], [-1, 0], [1, 1]],
		lightningRight: [[0, 0], [0, 1], [-1, 1], [1, 0]],
		tank: [[0, 0], [0, 1], [-1, 0], [1, 0]],
		square: [] },
	snake: [[0, 0], [-1, 0], [1, 0]],
	tank: [[0, 0], [0, 1], [-1, 0], [1, 0]],
	createFigure() {},
	moveUp() {},
	moveDown() {},
	moveLeft() {},
	moveRight() {}
};




