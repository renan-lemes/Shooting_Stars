class Drop{
    constructor(){
        this.x = random(200,-200);
        this.y = random(-400, -50);
        this.z = random(0, 1);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 0, 1);
        this.xspeed = map(this.z, 0, 10, 0, 20);
    }

    fall() {
          this.y = this.y + this.yspeed;
          this.x = this.x + this.yspeed;
          var grav = map(this.z, 0, 20, 0, 0.2);
          this.yspeed = this.yspeed + grav;
    if (this.y > height ) {
          this.y = random(-200, -100);
          this.yspeed = map(this.z, 0, 20, 4, 0);
        }
    }
    
    show(){
      var thick = map(this.z,5, 0,5,3);
      strokeWeight(thick);
      stroke(255, 255, 255);
      line(this.x, this.y, this.x+this.len, this.y+this.len + this.len + this.xspeed);
    }
}

var drops = [];

function setup(){
  createCanvas(1100,750);  
  for (var i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
}

function draw(){ 
  background(42, 183, 233);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}