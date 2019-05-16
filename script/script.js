const display = document.querySelector('.display'),
	  gamePart = document.createElement('div'),
	  pixel = document.createElement('div');

gamePart.style.cssText = "width: 80%; \ height: 100%; \ border: 1px solid black; \ position: relative;";
pixel.style.cssText = "width: 10px; \ height: 10px; \ border: 1px solid black;";

display.appendChild(gamePart);
for (let i=0; i<10; i++) {
	gamePart.appendChild(pixel.setAttribute('posx', i));
}
/*pixel.style.cssText = "width:"*/

