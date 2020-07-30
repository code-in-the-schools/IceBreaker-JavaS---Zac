console.log (Date())

function setup() {
	createCanvas(500, 400);
}

var [xrot, yrot, t] = [200, 100, 1];

function draw() {
	
	// thing you move
	//fill(0, 110, 115);
	//ellipse(mouseX, mouseY, 50);
	
	// big wheel
	fill(255);
	ellipse(200, 150, 150);
	
	// weird moving line
	fill(0);
	strokeCap(ROUND);
	line(mouseX, mouseY, xrot+50, yrot+45)
var i;
for (i=0; i<25; i++){
  console.log("weird");
}
 


	// make it spin
	xrot += Math.cos((PI/2) * t) * 8;
	yrot += Math.sin((PI/2) * t) * 8;
	t += 0.1;
}