const { STROKE } = require("./p5");
const x, y, yspeed;
class Drop {
    constructor() {
        this.x = width / 2;
        this.y = 0;
        this.yspeed = 1;


        function falls() {
            y = y + yspeed;
        }

        function show() {
            STROKE(138, 43, 226);
            line(x, y, x, y + 10);
            line(y, x, y, x + 10)
        }
    }
}