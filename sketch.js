  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,polygon,sling;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  stroke(255)
  ground1 = new ground(600,150,150,20);
  ground2 = new ground(900,200,150,20);
  box1 = new Box(600,125);
  box2 = new Box(600,120);
  box3 = new Box(610,125);
  box4 = new Box(590,125);
  box5 = new Box(610,120);
  box6 = new Box(590,120);
  box7 = new Box(900,125);
  box8 = new Box(890,125);
  box9 = new Box(910,125);
  

  polygon = new Rock(400,125);
  sling = new Chain(polygon.body,{x:400, y:125});
}

function draw() {

  background(0);
  Engine.update(engine);  
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon.display();
  sling.display();
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
      polygon.trajectory=[];
     sling.attach(polygon.body);
  }
}
