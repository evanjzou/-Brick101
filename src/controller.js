/* This is a controller for the brick game 
 * Created by evanjzou on 6/12/17
 * 
 */

function GameController(panel) {
    return {

        game_running: false,

        window: GameWindow(panel),

        //Check for type of collision
        collisionType: function () {
            //var ball = this.window.ball.obj;
            //var bricks = this.window.bricks;

        },

        //Check for collisions and remove necessary bricks
        processCollisions: function () {

        },

        moveBall : function () {
            var ball = this.window.ball;
            ball.obj.setCenterX(ball.obj.getCenterX() + ball.x_vel);
            ball.obj.setCenterY(ball.obj.getCenterY() + ball.y_vel);
        },

        //Executes movement of the ball after processing collisions
        step: function () {
            this.movePaddle();
        },

        //Initiate game
        start: function () {
            this.game_running = true;
            while(this.game_running) {
                this.moveBall();
            }
        }
    }
}