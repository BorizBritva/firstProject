//create main display element
const display = document.querySelector('.display'),
	  gamePart = document.createElement('div');
//set style to matrix
gamePart.style.cssText = "width: 80%; \ height: 100%; \ border: 1px solid black; \ position: relative; \ display: flex; \ flex-wrap: wrap;";
//push pixel-elem to matrix
for (let i=0; i<840; i++) {
	let pixel = document.createElement('div');
	pixel.classList.add('pixel');
	gamePart.appendChild(pixel);
};

display.appendChild(gamePart);

const pixel = document.querySelectorAll('.pixel');

let index = 0;

for (var y=42; y>0; y--) {
	for (var x=1; x<22; x++) {
		pixel[index].setAttribute('posY', y);
		pixel[index].setAttribute('posX', x);
		index++; 
	}
};