/*
	Christopher Borst
	Evan
	Tem
*/

/*/Testing merging code with Evan


console.log("Hello world");

console.log('learning js');

alert("Tem has to remember his password"); //*/

/*Main script for the game. Game instance is instantiated here */

//Initializes the game
function init() {
	//TODO
}

/*window.addEventListener("keydown", function (event) {
	alert("Heard event");
	alert(event.keyCode);
}); */

myPanel = new jsgl.Panel(document.getElementById("panel"));
/*circle = myPanel.createCircle();
circle.setCenterLocationXY(300,300);
circle.setRadius(30);
circle.getStroke().setWeight(5);
circle.getStroke().setColor("rgb(255,0,0)");
myPanel.addElement(circle);

/*var myRect = myPanel.createRectangle();
myPanel.addElement(myRect);
myRect.setLocationXY(125,75);
myRect.setSizeWH(60, 20); 

var b1 = Brick(myPanel, 200, 200);
var b2 = Brick(myPanel, 250, 250); 

//var ball = Ball(myPanel, 300, 100);

var bricks = generateBricks(myPanel); */

var control = GameController(myPanel);



/*window.addEventListener("keydown", function (event) {
	alert("keydown");
	if (event.keyCode == 37) {
		//Left key
		control.move_left = true;
	}
	else if (event.keyCode == 39) {
		control.move_right = true;
	}
});

window.addEventListener('click', function () {
	while (true) {
		control.step();
	}
}); */

myPanel.addMouseMoveListener(function (args) {
	control.window.paddle.setX(args.getX() + MOUSE_OFFSET);
})

myPanel.addClickListener(function (args) {
	control.start();
})