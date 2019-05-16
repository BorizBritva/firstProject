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

/*pixel.style.cssText = "width:"*/

