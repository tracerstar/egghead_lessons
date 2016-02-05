function setup() {
	createCanvas(300, 400);
}

function draw() {
	background(128);

	stroke(0);
	strokeWeight(1);

	//point
	point(20, 20);

	//line
	line(20, 30, 220, 30);

	//rect
	rect(20, 40, 100, 50);

	//ellipse
	ellipse(55, 200, 100, 100);

	//triangle
	triangle(20, 380, 60, 280, 100, 380);

	//quad
	quad(130, 380, 150, 300, 220, 330, 250, 365);

	//arc
	arc(200, 200, 100, 100, 3.145, 0);

	/*
		Code for drawing the egghead logo
	*/
	// stroke(0);
	// strokeWeight(10);
	// fill('#ffeede');

	// ellipse(50, 200, 50, 50);
	// ellipse(250, 200, 50, 50);
	// ellipse(150, 200, 200, 260);

	// strokeWeight(12);
	// ellipse(150, 290, 75, 75);

	// strokeWeight(20);
	// point(105, 205);
	// point(195, 205);

	// strokeCap(SQUARE);

	// strokeWeight(13);
	// line(135, 230, 165, 230);

	// strokeWeight(13);
	// line(80, 170, 130, 165);
	// line(220, 170, 170, 165);

	// fill(0);
	// strokeWeight(0);
	// arc(150, 280, 40, 40, 0, 3.145);
}