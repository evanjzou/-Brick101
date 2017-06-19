//Create a new brick
function Brick(panel, xpos, ypos) {
    var brick = panel.createRectangle();
    panel.addElement(brick);
    brick.setLocationXY(xpos, ypos);
    brick.setSizeWH(BRICK_WIDTH, BRICK_HEIGHT);
    return brick; 
} 

//Ball element
function Ball (panel, xpos, ypos) {
    var ball = panel.createCircle();
    panel.addElement(ball);
    ball.setCenterLocationXY(xpos, ypos);
    ball.setRadius(BALL_RADIUS);

    return ball;
}