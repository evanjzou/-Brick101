//Create a new brick
function Brick(panel, xpos, ypos) {
    var brick = panel.createRectangle();
    panel.addElement(brick);
    brick.setLocationXY(xpos, ypos);
    brick.setSizeWH(BRICK_WIDTH, BRICK_HEIGHT);
    return brick; 
} 