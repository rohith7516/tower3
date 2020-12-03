class Box {
constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30,30, options);
    this.width = 30;
    this.height = 30;
    this.image = loadImage("polygon.png");
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  
  display(){

    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 2;
       tint(255,this.Visiblity);
       rect(0, 0, this.width, this.height);
       pop();
     }
    }

  }
