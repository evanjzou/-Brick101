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

//Generate rows of bricks
function generateBricks (panel) {
    //alert("in function");
    var bricks = [];
    var column = 0;
    var row = 0;
    var xpos = EDGE_OFFSET;
    var ypos = TOP_OFFSET;
    while (row < BRICK_ROWS) {
        //alert("in while");
        var brick = Brick(panel, xpos, ypos);
        bricks.push(brick);
        //alert("after push");
        if (column >= BRICKS_PER_ROW) {
            //alert("in if");
            row++;
            column = 0;
            xpos = EDGE_OFFSET;
            ypos = ypos + BRICK_HEIGHT;
        }
        else {
            //alert("in else");
            column++;
            xpos = xpos + BRICK_WIDTH + BRICK_SEPARATION;
        }
    }
    return bricks;
}