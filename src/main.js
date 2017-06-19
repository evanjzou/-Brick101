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

myPanel = new jsgl.Panel(document.getElementById("panel"));
circle = myPanel.createCircle();
circle.setCenterLocationXY(300,300);
circle.setRadius(30);
circle.getStroke().setWeight(5);
circle.getStroke().setColor("rgb(255,0,0)");
myPanel.addElement(circle);

var myRect = myPanel.createRectangle();
myPanel.addElement(myRect);
myRect.setLocationXY(125,75);
myRect.setSizeWH(60, 20);

var b1 = Brick(myPanel, 200, 200);
var b2 = Brick(myPanel, 250, 250);