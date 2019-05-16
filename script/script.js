const display = document.querySelector('.display'),
	  gamePart = document.createElement('div'),
	  pixel = document.createElement('div');

gamePart.style.cssText = "width: 80%; \ height: 100%; \ border: 1px solid black; \ position: relative;";
pixel.style.cssText = "width: 10px; \ height: 10px; \ border: 1px solid black;";

display.appendChild(gamePart);

for (let i=40; i>0; i--) {
	pixel.setAttribute("posX", i);
	for (let j=1; j<=60; j++) {
		pixel.setAttribute("posY", j);
		gamePart.appendChild(pixel);
	}
}
/*pixel.style.cssText = "width:"*/

